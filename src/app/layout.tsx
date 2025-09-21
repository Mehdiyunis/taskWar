import type { Metadata } from "next";
import { Bungee } from "next/font/google";
import "../styles/globals.css";
import Header from "@/pages/layouts/header";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "TaskWar",
  description: "hoW Will be my end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${bungee.className}`}
      >
        <div className="bg-[url(/willage.png)] bg-cover bg-center h-[100vh] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full  after:backdrop-blur-xs z-0 after:-z-10 ">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
