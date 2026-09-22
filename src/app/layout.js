import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/navigation_bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orso tenis",
  description: "Sistema de reserva de cancha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
