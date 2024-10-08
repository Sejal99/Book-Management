import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientApplication from "./(Components)/ClientApplication";
import { Providers } from "./(Components)/GlobalRedux/provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Booksy",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.ico?v=4",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
      <Providers>
        <ClientApplication>
        {children}
        </ClientApplication>
        </Providers>
   
        </body>
    </html>
  );
}
