import prisma from '../../../lib/clients/db'
import { Project, CreateProject, UpdateProject} from '../helpers/index'

const createProject = async (data : CreateProject) => {
    try {
        const project = await prisma.project.create({ data })
  
        return { success: true, data: project }
    } catch (error) {
        return { success: false, error: 'Failed creating project' }
    }
  }

const getProjects = async() => {
    try {
        const projects = await prisma.project.findMany();

        return {success: true, data: projects}
    } catch (error) {
        return { sucess: false, error: 'Failed creating project'}
    }
}