// import { NextResponse } from "next/server";
// import prisma from "../../lib/prismadb";

// export async function POST(request: any) {
//   try {
//     const { comment } = await request.json();

//     if (comment) {
//       return new NextResponse("Required fields are missing", { status: 400 });
//     }

//     const blog = await prisma.blog.create({
//       data: {
//         content: comment,
//       },
//       include: {
//         author: true,
//       },
//     });

//     return NextResponse.json(blog);
//   } catch (error) {
//     console.error(error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }
