import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/assets/portfolio" }),
  schema: ({image}) => z.object({
    title: z.string(),
    competition_type: z.string(),
    year: z.coerce.number(),
    robot_name: z.string(),
    img: image(),
    weight: z.string(),
    dimensions: z.string(),
    notable_features: z.array(z.string()),
  }),
});

export const collections = { portfolio };