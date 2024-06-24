"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { TopNavBar } from "./TopNavBar";

import { AuthStatus, AuthType, init } from "@thoughtspot/visual-embed-sdk";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Initializing ThoughtSpot SDK");
  const ee = init({
    thoughtSpotHost: "https://embed-1-do-not-delete.thoughtspotstaging.cloud",
    authType: AuthType.None,
  });

  if (ee) {
    ee.on(AuthStatus.SUCCESS, () => {
      console.log("Success");
    })
      .on(AuthStatus.SDK_SUCCESS, () => {
        console.log("SDK Success");
      })
      .on(AuthStatus.FAILURE, (reason) => {
        console.log("Failure:  " + reason);
      });
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GSK Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <TopNavBar />
        {children}
      </body>
    </html>
  );
}
