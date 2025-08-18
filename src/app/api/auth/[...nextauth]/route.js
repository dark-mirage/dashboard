/* 
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

let users = [];

export async function registerUser(name, email, password) {
  const exists = users.some(u => u.email === email);
  if (exists) return { success: false, message: "Email занят" };
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), name, email, password: hashedPassword };
  users.push(user);
  return { success: true, user: { id: user.id, name: user.name, email: user.email } };
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials.email);
        if (user) {
          const valid = await bcrypt.compare(credentials.password, user.password);
          if (valid) return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
*/


import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Auth API заглушка (GET)" });
}

export async function POST() {
  return NextResponse.json({ message: "Auth API заглушка (POST)" });
}
