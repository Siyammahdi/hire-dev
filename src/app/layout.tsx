import type { Metadata } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "UQIDEV: On Demand Solution Provider",
  description: "UQIDEV is a Web design & development company in Bangladesh bringing you solutions of the very best kind to your technical challenges & ambitions. We hold huge specialization in putting up custom-made and quantifiable services within the fields of e-Commerce site Development, Search Engine Optimization, Mobile app development and so on. Starting from presenting top of the line site design to accomplishing extremely successful digital marketing campaigns – we‘re all ears to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
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
