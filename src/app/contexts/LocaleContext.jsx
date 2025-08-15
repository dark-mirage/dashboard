'use client';
import { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

const LocaleContext = createContext();

const translations = { en, ru };

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LocaleContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
