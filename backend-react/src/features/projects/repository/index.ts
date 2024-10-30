import prisma from '../../../lib/clients/db'
import { Project, CreateProject, UpdateProject, DbProject, ToDb, ToProject} from '../helpers/index'

const createProject = async (data : CreateProject) => {

    project = ToDb() 


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