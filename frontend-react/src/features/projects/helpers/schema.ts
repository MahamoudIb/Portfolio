import { z } from "zod";

export { projectSchema, projectsSchema};

const projectSchema = z.object({
    id: z.string(),
    title: z.string().min(2),
    description: z.string().min(2),
    git_Link: z.string(),
    contributors: z.array(z.string()),
    languages: z.array(z.string()),
    publishedAt: z.string().datetime()
})

const projectsSchema = z.array(projectSchema);

export function validateProject(data: unknown) {
    return projectsSchema.safeParse(data)
}