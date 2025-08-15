"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      setMsg(data.message || (data.success ? "Успешно!" : "Ошибка"));
    } catch (err) {
      console.error(err);
      setMsg("Ошибка сервера");
    }
  };

  return (
    <div>
      <input placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Регистрация</button>
      <p>{msg}</p>
    </div>
  );
}
