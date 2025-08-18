"use client";
import { useState } from "react";
import Header from "../components/Header";
import { useLocale } from "../contexts/LocaleContext";

export default function LoginPage() {
  const { messages } = useLocale();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = '/profile';
      } else {
        setError(data.error || messages.login.invalidCredentials);
      }
    } catch (err) {
      setError(messages.login.networkError);
    } finally {
      setIsLoading(false);
    }
  }

  const handleForgotPassword = () => {
    alert(messages.login.forgotPasswordAlert);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card !rounded-[30px] p-8 shadow-2xl">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-[var(--primary-yellow)] text-center !mb-[15px]">
                {messages.login.title}
              </h1>
              <input
                type="email"
                placeholder={messages.login.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              />
              <input
                type="password"
                placeholder={messages.login.passwordPlaceholder}
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
                className="w-full bg-card rounded-xl py-4 text-[var(--primary-yellow)] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
                    {messages.login.loggingIn}
                  </div>
                ) : (
                  messages.login.loginButton
                )}
              </button>

              <div className="text-center">
                <button
                  onClick={handleForgotPassword}
                  className="text-gray-400 hover:text-[var(--primary-yellow)] text-sm transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {messages.login.forgotPassword}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {messages.login.noAccount}{" "}
              <button
                onClick={() => window.location.href = '/register'}
                className="text-[var(--primary-yellow)] hover:text-[var(--primary-yellow)] transition-colors duration-200 underline-offset-4 hover:underline"
              >
                {messages.login.registerLink}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}