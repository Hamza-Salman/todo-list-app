import {cache} from 'react'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const revalidate = 3600

export const getTasks = cache(async() => {
    const tasks = await prisma.task.findMany()
    return tasks
})

export const deleteTask = async(id: string) => {
    await prisma.task.delete({
        where: {
            id: id
        }
    })
}