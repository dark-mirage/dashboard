'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';

export default function Header() {
  const router = useRouter();
  const { locale, changeLocale, messages } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = null;

  const tabs = [
    { key: 'profile', label: '👤 Profile' },
    { key: 'promotions', label: '🎁 Promotions' },
    { key: 'deposit', label: '💳 Deposit' },
    { key: 'withdraw', label: '💸 Withdraw' },
    { key: 'settings', label: '⚙️ Settings' },
  ];

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'az', label: 'AZ' },
    { code: 'en', label: 'EN' },
  ];

  const handleTabChange = (tabKey) => {
    router.push(`/profile?tab=${tabKey}`);
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass mt-[8px] !bg-[#1a1a1d]/50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">

          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[var(--primary-yellow)] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold ">RNG777</span>
          </Link>

          <div className="flex items-center gap-4">
            <select
              onChange={(e) => changeLocale(e.target.value)}
              value={locale}
              className=" bg-transparent text-[var(--primary-yellow)] hover:text-white border border-[var(--glass-border)] rounded px-3 py-1 text-sm focus:outline-none focus:border-yellow-400"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-gray-800">
                  {lang.label}
                </option>
              ))}
            </select>

            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/profile" className=" hover:text-yellow-300 font-medium">
                  {messages.nav.profile}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {messages.nav.logout}
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/login"
                  className=" bg-card text-[var(--primary-yellow)] hover:text-white text-sm border border-gray-600 px-3 py-1 rounded hover:border-yellow-400 transition-colors"
                >
                  {messages.auth.login}
                </Link>
                <Link
                  href="/register"
                  className="bg-card text-[var(--primary-yellow)] hover:text-white px-4 py-1 rounded font-medium hover:bg-yellow-300 transition-colors text-sm"
                >
                  {messages.auth.register}
                </Link>
              </div>
            )}

            <button
              className="md:hidden "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

          </div>
        </div>

        <div
          className={`md:hidden mt-2 bg-card rounded-lg shadow-lg !bg-[#1a1a1d]/50 transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col p-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className="text-gray-300 hover:text-white hover:bg-gray-700/50 text-center px-3 py-2 rounded-md w-full mb-1"
              >
                {tab.label}
              </button>
            ))}

            {!user && (
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white text-center border border-gray-600 px-2 py-1 rounded hover:border-yellow-400"
                >
                  {messages.auth.login}
                </Link>
                <Link
                  href="/register"
                  className="bg-[var(--primary-yellow)] text-black text-center px-3 py-1 rounded font-medium hover:bg-yellow-300"
                >
                  {messages.auth.register}
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}