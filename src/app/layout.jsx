import './globals.css';
import Header from './components/Header.jsx';
import ClientProviders from './ClientProvider';

export const metadata = {
  title: 'Dashboard',
  description: 'Gaming platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div className="min-h-screen">
            <Header />
            <main className="pt-[100px] flex gap-[30px]">
              {children}
            </main>
            <div className="yellow-glow"></div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
