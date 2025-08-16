"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Имитация запроса к API (замените на реальный signIn)
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Успешный вход - перенаправление
        window.location.href = '/profile';
      } else {
        setError(data.error || "Неверные данные");
      }
    } catch (err) {
      setError("Ошибка сети");
    } finally {
      setIsLoading(false);
    }
  }

  const handleForgotPassword = () => {
    // Логика для восстановления пароля
    alert("Функция восстановления пароля");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card !rounded-[30px] p-8 shadow-2xl">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-yellow-500 text-center !mb-[15px]">
              Вход
            </h1>
              <input
                type="email"
                placeholder="Имя пользователя или Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-card rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              />

            {error && (
              <div className="bg-card rounded-lg p-3">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-card  rounded-xl py-4 text-yellow-500 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
                  Вход...
                </div>
              ) : (
                "Войти"
              )}
            </button>

            <div className="text-center">
              <button
                onClick={handleForgotPassword}
                className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-200 underline-offset-4 hover:underline"
              >
                Забыли пароль?
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Нет аккаунта?{" "}
            <button
              onClick={() => window.location.href = '/register'}
              className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}