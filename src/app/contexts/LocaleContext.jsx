'use client';

import { createContext, useContext, useState } from 'react';

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const t = (key) => {
    const translations = { en: { hello: 'Hello' }, ru: { hello: 'Привет' } };
    return translations[locale][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
