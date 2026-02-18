import { defineCollection, z } from 'astro:content';

const serviciosCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        duration: z.string(),
        capacity: z.number(),
        images: z.array(z.string()),
        includes: z.array(z.string()),
        excludes: z.array(z.string()),
        category: z.enum(['tour', 'traslado', 'formalidades']),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    servicios: serviciosCollection,
};
