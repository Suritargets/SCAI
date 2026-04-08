import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SCAI — Suriname Chartered Accountants Institute",
  description: "SCAI is the authority in Suriname that protects the accountancy profession and improves its quality in accordance with international standards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f8fafd", color: "#111827", minHeight: "100vh" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
