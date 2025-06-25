import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fellowship of Joaquin - In Fluff We Trust",
  description: "Join the Fellowship of Joaquin, a whimsical spiritual movement devoted to the worship of a British Shorthair cat named Joaquin. Discover the sacred tenets of feline wisdom and inner peace.",
  keywords: "Fellowship of Joaquin, British Shorthair, cat worship, spiritual movement, feline wisdom",
  authors: [{ name: "Fellowship of Joaquin" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Fellowship of Joaquin - In Fluff We Trust",
    description: "Join our sacred circle and embrace the wisdom of Joaquin, our furry prophet.",
    type: "website",
    images: [
      {
        url: "/IMG_0661.jpeg",
        width: 1200,
        height: 630,
        alt: "Joaquin, the Sacred British Shorthair",
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
      <body className={`${inter.variable} ${playfair.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
