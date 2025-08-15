"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (!res.error) {
      router.push("/profile");
    } else {
      setError("Неверные данные");
    }
  }

  return (
    <form className="text-white" onSubmit={handleLogin}>
      <h1>Вход</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} required />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Войти</button>
    </form>
  );
}
