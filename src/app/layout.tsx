'use client'
// import type { Metadata } from "next";
import StoreProvider from "./StoreProvider"
// import { useState, useEffect } from "react";
// import { useAppDispatch } from "@/lib/hooks";
// import { getCards } from "@/lib/features/card/cardSlice";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <StoreProvider>
      <body>
        {children}
      </body>
      </StoreProvider>
    </html>
  );
}
