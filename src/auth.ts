import NextAuth, { NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

console.log("process.env.NEXTAUTH_SECRET: ", process.env.NEXTAUTH_SECRET);
const authOptions: NextAuthConfig = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  basePath: "/api/auth",
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
