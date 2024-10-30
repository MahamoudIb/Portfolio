import { z } from "zod";
import {createId} from "@/lib/id"

//Meste parten av denne filen kan bli redusert siden Prisma kan håndtere det meste, som f.eks ID og Date. Jeg gjør dette kun for trening
const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(2),
    description: z.string().min(2),
    git_Link: z.string(),
    contributors: z.array(z.string()),
    languages: z.array(z.string()),
    publishedAt: z.coerce.date()
})

const dbProjectSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(2),
    description: z.string().min(2),
    git_Link: z.string(),
    contributors: z.string(),
    languages: z.string(),
    publishedAt: z.string()
})

const dbProjectSchemaWithoutId = z.object({
    title: z.string().min(2),
    description: z.string().min(2),
    git_Link: z.string(),
    contributors: z.string(),
    languages: z.string(),
    publishedAt: z.string()
})

const createdProjectSchema = projectSchema.pick({
    title: true,
    description: true,
    git_Link: true,
    contributors: true,
    languages: true,
})

const updateProjectSchema = projectSchema.pick({
    title: true,
    description: true,
    git_Link: true,
    contributors: true,
    languages: true,
    //updatedAt: true
    publishedAt: true
})

export type DbProject = z.infer<typeof dbProjectSchema>;
export type DbProjectWithoutId = z.infer<typeof dbProjectSchemaWithoutId>;
export type Project = z.infer<typeof projectSchema>;
export type CreateProject= z.infer<typeof createdProjectSchema>;
export type UpdateProject = z.infer<typeof updateProjectSchema>;

export function validateProject(data: unknown) {
    return projectSchema.parse(data)
}

export function validateDbProject(data: unknown) {
    return dbProjectSchema.parse(data)
}

export function validateDbProjectWithoutId(data: unknown) {
    return dbProjectSchemaWithoutId.parse(data)
}

export function validateCreateProject(data: unknown) {
    return createdProjectSchema.parse(data)
}

export function validateUpdateProject(data: unknown) {
    return updateProjectSchema.parse(data)
}

export const ToProject = (dbProject : DbProject): Project => {
    const project: Project = {
        ...dbProject,
        contributors: JSON.parse(dbProject.contributors),
        languages: JSON.parse(dbProject.languages),
        publishedAt: new Date(dbProject.publishedAt)
    }

    return validateProject(project);
}

export const CreateToDb = (project : CreateProject): DbProject => {
    const dbProject: DbProject = {
        id: createId(),
        title: project.title,
        description: project.description,
        git_Link: project.git_Link,
        contributors: JSON.stringify(project.contributors),
        languages: JSON.stringify(project.languages),
        publishedAt: new Date().toISOString()
    }
    return validateDbProject(dbProject)
}

export const UpdateToDb = (project : UpdateProject): DbProjectWithoutId => {
    const dbProject: DbProjectWithoutId = {
        title: project.title,
        description: project.description,
        git_Link: project.git_Link,
        contributors: JSON.stringify(project.contributors),
        languages: JSON.stringify(project.languages),
        publishedAt: project.publishedAt.toISOString()
        //updatedAt: new Date().toISOString()
    }

    return validateDbProjectWithoutId(dbProject)
}