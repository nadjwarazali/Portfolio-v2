import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Crimson_Text, Press_Start_2P } from "next/font/google";
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

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Nadjwa Razali — Creative Developer",
  description:
    "Creative Developer and founder of alt-arkib. Building interactive web experiences at the intersection of design and engineering. Based in Kuala Lumpur.",
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
  },
  openGraph: {
    title: "Nadjwa Razali — Creative Developer",
    description:
      "Building interactive web experiences at the intersection of design and engineering.",
    url: "https://nadjwarazali.my",
    siteName: "Nadjwa Razali",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadjwa Razali — Creative Developer",
    description:
      "Building interactive web experiences at the intersection of design and engineering.",
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
        className={`${robotoSans.variable} ${robotoMono.variable} ${crimson.variable} ${pressStart.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
