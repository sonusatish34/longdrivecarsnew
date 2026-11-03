
import { getActiveBlogPosts } from '@/utils/blogPosts';
function generateSiteMap(cars) {


    // fetchCatAndPosts();
    return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${cars?.map((item) => {
        return `
        <url>
            <loc>${`https://www.longdrivecars.com/blog/posts/${item?.slug}`}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
       `;
    })
            .join('')}
     </urlset>
   `;
}

function SiteMap() {
    // This will be handled by getServerSideProps, no need for content in the component itself
}

export async function getServerSideProps({ res }) {
    let posts = [];
    try {
        posts = await getActiveBlogPosts();
    } catch (error) {
        console.error('Unable to load posts for blog sitemap:', error);
    }

    const sitemap = generateSiteMap(posts);

    // Set the response header for XML
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    res.setHeader('Content-Type', 'text/xml');

    // Write the generated sitemap to the response
    res.write(sitemap);
    res.end();

    return {
        props: {}, // No page props are needed for the sitemap
    };
}

export default SiteMap;
