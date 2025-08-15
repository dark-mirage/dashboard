import './globals.css';
import Header from './components/Header.jsx';
import { LocaleProvider } from './contexts/LocaleContext.jsx';
import { AuthProvider } from '../app/contexts/AuthContext';

export const metadata = {
  title: 'Dashboard',
  description: 'Gaming platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          {/* <AuthProvider> */}
            <div className="min-h-screen">
              <Header />
              <main className="pt-[100px] flex gap-[30px]">
                {children}
              </main>
              <div className="yellow-glow"></div>
            </div>
          {/* </AuthProvider> */}
        </LocaleProvider>
      </body>
    </html>
  );
}