import { ResultHandler } from '@/lib/result'
import prisma from '../../../lib/clients/db'
import { CreateProject, UpdateProject, ToProject, CreateToDb, UpdateToDb, DbProject, ToProjectArray} from '../helpers/index'

export const createProject = async (data : CreateProject) => {
    try {
        const project = CreateToDb(data) 
        const create = await prisma.project.create({data: project})
  
        return ResultHandler.success(create.id)
    } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
    }
  }

export const getProjects = async() => {
    try {
        const projects : DbProject[] = await prisma.project.findMany();

        return {success: true, data: ToProjectArray(projects)}
    } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
    }
}

export const getById = async(id : string) => {
    try {
        const project : DbProject = await prisma.project.findUniqueOrThrow({
            where: {
              id: id,
            },
        }
    )
        return ResultHandler.success(ToProject(project))
    } catch (error) {
        return ResultHandler.failure(error, "NOT_FOUND")
    }
}

export const updateProject = async(updatedProject : UpdateProject, id : string) => {
    try {
        const update = await prisma.project.update({
            where: {
              id: id,
            },
            data: UpdateToDb(updatedProject)
        }
    )
        return ResultHandler.success(update)
    } catch (error) {
        return ResultHandler.failure(error, "NOT_FOUND")
    }
}