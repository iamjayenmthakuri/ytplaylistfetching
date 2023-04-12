import Image from "next/image";
import ytplaylist from "./ytplaylist";
import ytvideos from "./ytvideos";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        home
      </div>
      <ytplaylist>playlist</ytplaylist>
      <ytvideos />
    </main>
  );
}
