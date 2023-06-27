import bcrypt from "bcrypt";
import prisma from "../../lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Field is missing", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return new NextResponse("Email already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
