import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Post collection schema
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "content/projects" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = { projects };
