import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const articles = await getCollection('post');
  const all = articles.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Daire Blog',
    description: "I'ts my blog website",
    site: 'https://blog.dairew.my.id/',
    items: all.map((article) => ({
      title: article.data.title,
      description: article.data.desc,
      pubDate: article.data.date,
      link: `/post/${article.slug}/`,
      customData: `
      <author>${article.data.admin}</author>
    `,
    })),
  });
}
