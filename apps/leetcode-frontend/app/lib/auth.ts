import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prismaClient } from "@repo/db/client";

export const AUTH_OPTIONS = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholde: "Nagmani" },
        password: { label: "Password", type: "password", placeholder: "itsboy" }
      },
      async authorize(credentials) {

        if (!credentials?.password || !credentials.password) {
          return null;
        }
        const getUser = await prismaClient.user.findUnique({
          where: {
            email: credentials.username,
          }
        });
        if (!getUser?.password) {
          return null
        }
        const comparePassword = await bcrypt.compare(credentials.password, getUser?.password);
        if (comparePassword) {
          return getUser
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'secr3t',
  callbacks: {
    async session({ token }: {
      token: any
    }) {
      return token
    },
    async jwt({ token }: {
      token: any
    }) {
      return token
    },
  }
}
