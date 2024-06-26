import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      admin: z.string(),
      desc: z.string(),
      image: image(),
      tags: z.array(z.string()),
      key: z.array(z.string()),
    }),
});

export const collections = { post };
