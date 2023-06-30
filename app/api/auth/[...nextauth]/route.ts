import prisma from "../../../lib/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";

//Provider
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",

      credentials: {
        username: { label: "UserName", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please Enter Both Fields");
        }

        //Chack if the user exist
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        //Chack if the user exist
        if (!user || !user.hashedPassword) {
          throw new Error(" No user Folund ");
        }

        //Check if the passsword correct
        const passswordMatched = await bcrypt.compare(
          credentials?.password,
          user?.hashedPassword
        );
        if (!passswordMatched) {
          throw new Error("Wrong password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
