import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "alt arkib",
  description: "Portfolio of Alt Arkib by Nadjwa Razali",
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${crimson.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
