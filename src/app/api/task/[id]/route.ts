import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request) {
    console.log("triggered delete api")
    const { id } = await req.json();
  
    console.log("triggered delete api : " + id)

    await prisma.task.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
  }