import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental",
  description: "Cine Rental | Cinema Enjoying app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-body bg-white font-[Sora] dark:text-white text-dark`}
      >
        <Header />
        {children}
        <div id="modal-root-content" />
        <Footer />
      </body>
    </html>
  );
}
