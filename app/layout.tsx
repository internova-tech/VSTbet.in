import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "VSTbet — Sports & Casino", description: "VSTbet premium sports and casino entertainment experience." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }