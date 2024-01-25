'use client'
import { PrismaClient, Task } from '@prisma/client'
import { deleteTask } from '../utils'
import {useRouter} from 'next/navigation';

const prisma = new PrismaClient()


export default function DeleteButton({id} : {id: string}) {

    const router = useRouter()
    // const handleDelete = async(deleteId: string) => {
    //     deleteTask(deleteId)
    // }

    const deleteTask = async (deleteId: string) => {
        await fetch(`/api/task/${deleteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: deleteId,
            }),
        });
        router.refresh();
    };

    return (
        <button onClick={() => deleteTask(id)}>Done</button>
    )
}