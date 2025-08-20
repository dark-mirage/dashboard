"use client"
import "./globals.css";
import { LocaleProvider } from "./contexts/LocaleContext";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Provider store={store}>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </Provider>
      </body>
    </html>
  );
}
