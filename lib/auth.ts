import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
    {
    id: "1",
    name: "Admin",
    email: "admin@sageaids.com",
    password: bcrypt.hashSync("SAGEsecure123", 10),
    role: "admin",
  },
  {
    id: "2",
    name: "Staff",
    email: "staff@sageaids.com",
    password: bcrypt.hashSync("SAGEpass123", 10),
    role: "staff",
  },
];

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: { type: "email" }, password: { type: "password" } },
      async authorize(credentials) {
        const user = users.find((u) => u.email === credentials?.email);
        if (!user) return null;
        const valid = await bcrypt.compare(credentials.password!, user.password);
        return valid ? user : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
