import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const AUTH_OPTIONS = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholde: "Nagmani" },
        password: { label: "Password", type: "password", placeholder: "itsboy" }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const user = { id: "1", name: "Nagmani", email: "nagmanipd3@gmail.com" }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ]
}
