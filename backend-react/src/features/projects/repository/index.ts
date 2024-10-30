import { ResultHandler } from '@/lib/result'
import prisma from '../../../lib/clients/db'
import { Project, CreateProject, UpdateProject, ToProject, CreateToDb, UpdateToDb} from '../helpers/index'

export const createProject = async (data : CreateProject) => {
    try {
        const project = CreateToDb(data) 
        const create = await prisma.project.create({ project })
  
        return ResultHandler.success()
    } catch (error) {
        return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
    }
  }

export const getProjects = async() => {
    try {
        const projects = await prisma.project.findMany();

        return {success: true, data: projects}
    } catch (error) {
        return { sucess: false, error: 'Failed creating project'}
    }
}