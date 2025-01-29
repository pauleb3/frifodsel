import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frifødsel",
  description: "nettverk for frifødsel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={inter.className}>
          <NavBar />
          {children}
          <footer className="text-right bg-slate-200 border-t-2 p-16">
            <span className="text-xl bold">Frifødsel nettverk 2025 ©</span>
          </footer>{" "}
        </body>
      </html>
    </PrimeReactProvider>
  );
}
