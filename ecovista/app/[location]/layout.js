import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  aqi,
  temperature,
  wind,
  weather,
}) {
  return (
    <div className="wrapper">
      <div class="overlay"></div>
      <Image
        className="bg-img"
        src={"/background.png"}
        width={1600}
        height={1600}
        alt="background"
      />
      <main class="!z-50 w-full">
        <div class="container">
          <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
