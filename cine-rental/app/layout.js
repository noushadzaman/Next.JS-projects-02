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
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body
        className={`${inter.className} dark:bg-body bg-white font-[Sora] dark:text-white text-dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
