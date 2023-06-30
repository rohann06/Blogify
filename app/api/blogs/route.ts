import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
