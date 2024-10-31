import { list, create, updateById, getById, deleteById} from "@/features/projects/repository"
import { Result } from "@/types"
import { CreateProject, DbProjectWithoutId, Project, UpdateProject } from "../helpers"

//Service er ikke så komplekst og stor, og kan se som redundant, men dette er kun for trening

export const createProject = async(data: CreateProject) : Promise<Result<string>> => {
    return create(data)
}

export const getAllProjects = async() : Promise<Result<Project[]>> => {
    return list()
}

export const findOneProject = async(id : string) : Promise<Result<Project>> => {
    return getById(id)
}

export const updateProject = async(id : string, data: UpdateProject) : Promise<Result<DbProjectWithoutId>> => {
    return updateById(data, id)
}

export const deleteProject = async(id: string) : Promise<Result<string>> => {
    return deleteById(id)
}