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

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        heroTitle: z.string(),
        heroSubtitle: z.string(),
        companyName: z.string(),
        tradeName: z.string(),
        rut: z.string(),
        foundedYear: z.number(),
        yearsInBusiness: z.number(),
        history: z.string(),
        services: z.array(z.string()),
        values: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
        })),
        teamFeatures: z.array(z.string()),
        vehicleFeatures: z.array(z.string()),
        clientLogos: z.array(z.object({
            name: z.string(),
            logo: z.string(),
        })),
        ctaText: z.string(),
        ctaLink: z.string(),
    }),
});

export const collections = {
    servicios: serviciosCollection,
    pages: pagesCollection,
};
