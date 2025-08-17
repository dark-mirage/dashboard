"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const LocaleContext = createContext();

export const LocaleProvider = ({ children, defaultLocale = "ru" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Initialize locale from localStorage or default
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale");
      setLocale(savedLocale || defaultLocale);
    }
  }, [defaultLocale]);

  // Load messages when locale changes
  useEffect(() => {
    if (!locale) return;

    setIsLoading(true);
    import(`../locales/${locale}/common.json`)
      .then((res) => {
        setMessages(res.default);
        setIsLoading(false);
      })
      .catch(() => {
        console.error(`Failed to load messages for locale: ${locale}`);
        setIsLoading(false);
      });
  }, [locale]);

  const changeLocale = (newLocale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
    setLocale(newLocale);
    // Optional: handle route change if needed
    // const newPath = pathname.replace(/^\/[a-z]{2}\//, `/${newLocale}/`);
    // router.push(newPath);
  };

  const value = {
    locale,
    messages,
    isLoading,
    changeLocale,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};