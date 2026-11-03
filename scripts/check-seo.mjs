import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import path from 'node:path';

const port = process.env.PORT || String(31000 + Math.floor(Math.random() * 10000));
const ownsServer = !process.env.SEO_CHECK_URL;
const baseUrl = (process.env.SEO_CHECK_URL || `http://localhost:${port}`).replace(/\/+$/, '');
const routes = (process.env.SEO_CHECK_PATHS || '/,/explore-self-drive-cars,/car-rental/maruthi-swift,/vizag,/warangal,/vijayawada,/blog')
  .split(',')
  .map((route) => route.trim())
  .filter(Boolean);

let server;
let serverOutput = '';

async function waitForServer() {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js server exited early:\n${serverOutput}`);
    }
    try {
      await fetch(baseUrl, { signal: AbortSignal.timeout(2000) });
      return;
    } catch {
      await delay(500);
    }
  }
  throw new Error(`Timed out starting Next.js server:\n${serverOutput}`);
}

function findTag(html, pattern) {
  return html.match(pattern)?.[0] || '';
}

async function checkPage(route) {
  const response = await fetch(new URL(route, `${baseUrl}/`), {
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) {
    throw new Error(`${route} returned HTTP ${response.status}`);
  }

  const html = await response.text();
  const title = findTag(html, /<title\b[^>]*>[\s\S]*?\S[\s\S]*?<\/title>/i);
  const h1 = findTag(html, /<h1\b[^>]*>[\s\S]*?\S[\s\S]*?<\/h1>/i);
  const description = (html.match(/<meta\b[^>]*>/gi) || []).find((tag) =>
    /\bname=["']description["']/i.test(tag) &&
    /\bcontent=["'][^"']+\S[^"']*["']/i.test(tag)
  );
  const canonical = (html.match(/<link\b[^>]*>/gi) || []).find((tag) =>
    /\brel=["']canonical["']/i.test(tag) &&
    /\bhref=["']https:\/\/www\.longdrivecars\.com\/?[^"']*["']/i.test(tag)
  );
  const structuredData = findTag(
    html,
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i
  );

  const missing = [
    !title && 'title',
    !h1 && 'H1',
    !description && 'meta description',
    !canonical && 'canonical URL on www.longdrivecars.com',
    !structuredData && 'JSON-LD structured data',
  ].filter(Boolean);
  if (missing.length) {
    throw new Error(`${route} is missing: ${missing.join(', ')}`);
  }

  if (route === '/explore-self-drive-cars' &&
      (!/maruthi swift/i.test(html) || !/₹\s*[\d,]+/.test(html))) {
    throw new Error(`${route} is missing server-rendered car names or prices`);
  }
  if (route.startsWith('/car-rental/') &&
      (!/maruthi swift/i.test(html) ||
       !/₹\s*[\d,.]+\/day/i.test(html) ||
       !/Fuel Type/.test(html) ||
       !/Transmission/.test(html) ||
       !/Seater/.test(html))) {
    throw new Error(`${route} is missing server-rendered car details, specifications or price`);
  }
  if (route === '/blog') {
    const linkedPosts = new Set(
      [...html.matchAll(/href=["'](\/blog\/posts\/[^"']+)/g)]
        .map((match) => match[1])
    ).size;
    if (linkedPosts !== 20) {
      throw new Error(`${route} rendered ${linkedPosts} blog links; expected 20`);
    }
  }
  console.log(`SEO OK ${route}`);
}

async function checkStatus(route, expectedStatus) {
  const response = await fetch(new URL(route, `${baseUrl}/`), {
    redirect: 'manual',
    signal: AbortSignal.timeout(15000),
  });
  if (response.status !== expectedStatus) {
    throw new Error(`${route} returned HTTP ${response.status}; expected ${expectedStatus}`);
  }
  console.log(`HTTP ${expectedStatus} OK ${route}`);
}

try {
  if (ownsServer) {
    const nextBin = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');
    server = spawn(process.execPath, [nextBin, 'start', '-p', port], {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    });
    server.stdout.on('data', (chunk) => {
      serverOutput = `${serverOutput}${chunk}`.slice(-4000);
    });
    server.stderr.on('data', (chunk) => {
      serverOutput = `${serverOutput}${chunk}`.slice(-4000);
    });
    await waitForServer();
  }

  for (const route of routes) await checkPage(route);
  await checkStatus('/__seo-check-invalid-path__', 404);
  await checkStatus('/selfdrivecars_hyderabad', 301);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  if (server && server.exitCode === null) {
    server.kill();
  }
}
