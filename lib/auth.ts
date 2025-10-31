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
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        const user = users.find((u) => u.email === email);
        if (!user) return null;

        const valid = await bcrypt.compare(password, user.password);
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
      session.user.role = token.role as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
