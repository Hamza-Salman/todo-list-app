import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { newTask, newTaskGroup } = await req.json();

    await prisma.task.create({
      data: {task: newTask, group: newTaskGroup},
    });
    return NextResponse.json({ message: "Created Task" }, { status: 200 });
  }