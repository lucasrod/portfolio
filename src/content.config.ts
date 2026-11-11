import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One MDX file per project. Adding a project = adding a file here.
 * Every number shown on the site must come from `facts` (with a source) or from
 * a data file with provenance, never from free text.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One sentence: what the project asks. Shown in cards and the case header. */
    question: z.string(),
    /** Short plain description for SEO and previews. */
    summary: z.string(),
    lang: z.enum(['en', 'es']).default('en'),
    /** Slug of the same case in the other language, if it exists. */
    translationOf: z.string().optional(),
    status: z.enum(['published', 'in-progress']),
    /** What is still missing, in plain words. Required while in progress. */
    pending: z.array(z.string()).default([]),
    tier: z.enum(['featured', 'supporting']),
    order: z.number(),
    roles: z.array(z.string()),
    stack: z.array(z.string()),
    context: z.string().optional(),
    repo: z.object({
      url: z.url().optional(),
      visibility: z.enum(['public', 'private']),
    }),
    /** Published Quarto report (its own repo / Pages) or a path under /reports/. */
    reportUrl: z.string().optional(),
    data: z.string().optional(),
    /** Verified numbers. `source` says how it was checked. */
    facts: z
      .array(z.object({ label: z.string(), value: z.string(), source: z.string() }))
      .default([]),
    verified: z.object({ commit: z.string(), date: z.coerce.date() }),
    preview: z.enum(['ames-histogram', 'census-pipeline', 'preddesk-layers', 'faro-sources']),
  }),
});

export const collections = { projects };
