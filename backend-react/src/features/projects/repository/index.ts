import { ResultHandler } from '@/lib/result'
import prisma from '../../../lib/clients/db'
import { CreateProject, UpdateProject, ToProject, CreateToDb, UpdateToDb, DbProject, ToProjectArray, DbProjectWithoutId} from '../helpers/index'

export const create = async (data : CreateProject) => {
    try {
        const project = CreateToDb(data) 
        const create = await prisma.project.create({data: project})
  
        return ResultHandler.success(create.id)
    } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
    }
  }

export const list = async() => {
    try {
        const projects : DbProject[] = await prisma.project.findMany();

        return ResultHandler.success(ToProjectArray(projects))
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

export const updateById = async(updatedProject : UpdateProject, id : string) => {
    try {
        const update : DbProjectWithoutId = await prisma.project.update({
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

export const deleteById = async(id: string) => {
    try {
        const deleted = await prisma.project.delete({
            where: {
              id: id,
            },
          })
        return ResultHandler.success(id)
    } catch (error) {
        return ResultHandler.failure(error, "NOT_FOUND")
    }
}