function decodeHtmlEntities(text) {
  return text.replace(/&(#x[\da-f]+|#\d+|nbsp|amp|lt|gt|quot|apos);/gi, (entity, value) => {
    const namedEntities = {
      nbsp: ' ',
      amp: '&',
      lt: '<',
      gt: '>',
      quot: '"',
      apos: "'",
    };
    const normalizedValue = value.toLowerCase();
    if (normalizedValue in namedEntities) return namedEntities[normalizedValue];

    const codePoint = normalizedValue.startsWith('#x')
      ? Number.parseInt(normalizedValue.slice(2), 16)
      : Number.parseInt(normalizedValue.slice(1), 10);
    return Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff
      ? String.fromCodePoint(codePoint)
      : entity;
  });
}

export function getBlogPostExcerpt(htmlContent) {
  const content = String(htmlContent || '');
  const paragraphs = content.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) || [content];
  return paragraphs
    .slice(0, 3)
    .map((paragraph) => decodeHtmlEntities(paragraph.replace(/<[^>]*>/g, ' ')))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
