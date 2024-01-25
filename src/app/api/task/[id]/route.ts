import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request) {
    const { id } = await req.json();

    await prisma.task.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
  }