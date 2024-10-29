import { PrismaClient } from '@prisma/client'
import {projects} from "../src/data/projects"

const prisma = new PrismaClient()

const data = projects

const createProjects = async () => {
    await Promise.all(
      data.map(async (project) => {
        await prisma.project.create({
          data: {
            title: project.title,
            description: project.description,
            git_Link: project.git_Link,
            contributors: JSON.stringify(project.contributors),
            languages: JSON.stringify(project.languages),
            publishedAt: project.publishedAt
          },
        })
      })
    )
  }

async function main() {
    console.log(`Start seeding ...`)
    await prisma.project.deleteMany({});
    await createProjects();
    console.log(`Seeding finished.`)
  }
  
  main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })