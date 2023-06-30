import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb";

export async function POST(request: any) {
  try {
    const { published, title, content, summary, authorId } =
      await request.json();

    if (!title || !content || !summary) {
      return new NextResponse("Required fields are missing", { status: 400 });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        summary,
        published,
        authorId,
      },
      include: {
        author: true,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
