/* 
import { getDB } from '../../../lib/db';
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSession } from "../../../lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  const db = getDB(); // <-- вот здесь создаём объект db
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

  if (!user) {
    return NextResponse.json({ error: "Неверный email или пароль" }, { status: 400 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Неверный email или пароль" }, { status: 400 });
  }

  await createSession(user.id);

  return NextResponse.json({ message: "Вход выполнен" });
}
*/

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Login API заглушка" });
}
