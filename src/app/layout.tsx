import type { Metadata } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woiqi Dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[calc(100vh-210px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
