/*
import { registerUser } from "../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ success: false, message: "Все поля обязательны" }), { status: 400 });
    }

    const result = await registerUser(name, email, password);
    return new Response(JSON.stringify(result), { status: result.success ? 200 : 400 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, message: "Ошибка сервера" }), { status: 500 });
  }
}
*/

// Заглушка 
export async function POST() {
  return new Response(JSON.stringify({ message: "Register API заглушка" }), { status: 200 });
}
