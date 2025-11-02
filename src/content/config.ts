import { defineCollection, z } from 'astro:content';

const promptsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'fundraising',
      'communications',
      'programs',
      'events',
      'board',
      'operations'
    ]),
    subcategory: z.string().optional(),
    tags: z.array(z.string()),
    role: z.array(z.enum([
      'Development Director',
      'Communications Manager',
      'Program Manager',
      'Executive Director',
      'Operations Coordinator',
      'Board Chair'
    ])),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    updated: z.date(),
    prerequisites: z.array(z.string()).optional(),
    requiresCompliance: z.boolean().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  prompts: promptsCollection,
  blog: blogCollection,
};
