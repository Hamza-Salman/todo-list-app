'use client'
import { PrismaClient, Task } from '@prisma/client'
import {useRouter} from 'next/navigation';
import React, { useState } from 'react';

const prisma = new PrismaClient()

export default function AddForm() {

    const [newTask, setNewTask] = useState("");
    const [newTaskGroup, setNewTaskGroup] = useState("");
    const router = useRouter()

    const addTask = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("new task: " + newTask)
        console.log("new task group: " + newTaskGroup)
        await fetch('/api/task', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newTask: newTask,
                newTaskGroup: newTaskGroup,
            }),
        });
        
        router.refresh();
        setNewTask("")
        setNewTaskGroup("")
    };

    return (
        <div>
            <form onSubmit={addTask}>
                <input type='input' placeholder='Please enter new task' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <input type='input' placeholder='Please enter new task group' value={newTaskGroup} onChange={(e) => setNewTaskGroup(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}