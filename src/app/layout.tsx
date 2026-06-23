import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASUS | Transcend Boundaries",
  description:
    "Experience the next evolution of laptop innovation. Precision engineered. Perfection realized.",
  openGraph: {
    title: "ASUS | Transcend Boundaries",
    description:
      "Experience the next evolution of laptop innovation. Precision engineered. Perfection realized.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
