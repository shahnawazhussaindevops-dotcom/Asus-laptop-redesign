import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASUS Zenbook | Transcend Boundaries",
  description:
    "Experience the next evolution of laptop innovation. Precision engineered with Intel Core Ultra, NVIDIA RTX, and a stunning 3.2K OLED display. Perfection realized.",
  openGraph: {
    title: "ASUS Zenbook | Transcend Boundaries",
    description:
      "Experience the next evolution of laptop innovation. Precision engineered with Intel Core Ultra, NVIDIA RTX, and a stunning 3.2K OLED display. Perfection realized.",
    type: "website",
    siteName: "ASUS",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASUS Zenbook | Transcend Boundaries",
    description:
      "Experience the next evolution of laptop innovation. Precision engineered with Intel Core Ultra, NVIDIA RTX, and a stunning 3.2K OLED display.",
  },
  keywords: ["ASUS", "Zenbook", "laptop", "OLED", "Intel Core Ultra", "NVIDIA RTX"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
