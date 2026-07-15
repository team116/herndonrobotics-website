import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { student_roles } from "./utils/student_roles";

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

const mentors = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/assets/team-members/mentors" }),
  schema: ({image}) => z.object({
    name: z.string(),
    year_joined: z.number(),
    career: z.string(),
    mentor_for: z.string(),
    image: image(),
  }),
});

const students = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/assets/team-members/students" }),
  schema: z.object({
    name: z.string(),
    year: z.number(),
    role: z.enum(student_roles),
    captain: z.boolean(),
  }),
});

export const collections = { portfolio, mentors, students };