'use client';
import { LocaleProvider } from './contexts/LocaleContext';
import { SessionProvider } from 'next-auth/react';

export default function ClientProviders({ children }) {
  return (
    <SessionProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </SessionProvider>
  );
}
