'use client';

import { createContext, useContext, useState } from 'react';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
import az from '../locales/az.json';

const messagesData = { ru, en, az };

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('ru');
  const messages = messagesData[locale];

  const changeLocale = (newLocale) => setLocale(newLocale);

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
