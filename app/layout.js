

'use client'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html style={{backgroundColor: 'black'}}  lang="en">
      <body  style={{background: 'black'}} className={inter.className}>{children}</body>
    </html>
  );
}
