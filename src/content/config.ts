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
      'Operations Coordinator'
    ])),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    updated: z.date(),
  }),
});

export const collections = {
  prompts: promptsCollection,
};
