import type { Metadata } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uqidev: offering software outsourcing services and product development.",
  description: "Uqidev is a software company providing custom made solutions in Java, Go, Python, Node.js, Angular and React. Let’s talk about your project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // #4e3232e6
  return (
    <html lang="en">
      <body>
        <main className="bg-[url(/bg1.jpg)] bg-cover">
          <Header />
          <section className="min-h-[calc(100vh-105px)]">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
