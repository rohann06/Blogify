import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb";

export async function POST(request: any) {
  try {
    const { content, authorId, blogId } = await request.json();

    if (!content || !authorId || !blogId) {
      return new NextResponse("Something went wrong", { status: 400 });
    }

    const comments = await prisma.comment.create({
      data: {
        content,
        authorId,
        blogId,
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
