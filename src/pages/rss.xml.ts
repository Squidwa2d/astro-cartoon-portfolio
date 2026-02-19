import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET(context: { site: string }) {
  const posts = await getCollection('posts');
  
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post: any) => {
      const slug = post.slug || post.id?.split('/').pop()?.replace(/\.md$/, '') || '';
      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.excerpt || '',
        link: `/posts/${slug}/`,
      };
    }),
    customData: `<language>zh-cn</language>`,
  });
}
