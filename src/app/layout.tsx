import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import MenuComponent from "@/components/MenuComponent";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Homework1",
    description: "Page of homework №1 NextJS"
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <MenuComponent/>
        {children}
        </body>
        </html>
    );
}
