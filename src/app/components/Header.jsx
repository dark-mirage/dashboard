// components/Header.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale } from '../contexts/LocaleContext.jsx';
// import { useAuth } from '../contexts/AuthContext';
// import { useTranslation } from 'react-i18next';

export default function Header() {
  const router = useRouter();
  const { t, locale, setLocale } = useLocale();
  // const { user, logout } = useAuth();
  const user = null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'az', label: 'AZ' },
    { code: 'en', label: 'EN' }
  ];

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-yellow-400">RNG777</span>
          </Link>

          <div className="flex items-center gap-[30px] space-x-4">
            {/* Language Selector */}
            <div className="relative flex items-center gap-[30px]">
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
                className="bg-transparent border border-gray-600 rounded px-3 py-1 text-sm text-white focus:outline-none focus:border-yellow-400"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-gray-800">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/profile"
                  className="text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  {t('nav.profile')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-[30px] space-x-3">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white text-sm border border-gray-600 px-3 py-1 rounded hover:border-yellow-400 transition-colors"
                >
                  {t('auth.login')}
                </Link>
                <Link
                  href="/register"
                  className="bg-yellow-400 text-black px-4 py-1 rounded font-medium hover:bg-yellow-300 transition-colors text-sm"
                >
                  {t('auth.register')}
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-300 hover:text-white">
                {t('nav.home')}
              </Link>
              <Link href="/games" className="text-gray-300 hover:text-white">
                {t('nav.games')}
              </Link>
              <Link href="/promotions" className="text-gray-300 hover:text-white">
                {t('nav.promotions')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}