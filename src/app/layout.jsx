import "./globals.css";
import Header from "./components/Header";
import { LocaleProvider } from "./contexts/LocaleContext";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}