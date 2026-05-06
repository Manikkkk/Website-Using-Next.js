import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBuiltThis - Discover and Share Your Creations",
  description: "A community platform for creators to showcase their apps, AI tools, Saas products, and creative projects. Authentic lauches, real builders, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
