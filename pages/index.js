 import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Index from "@/Components/Index";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

   <div className="bg-neutral-900 flex-1 flex">
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nck•03</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Head>
     <Index/>
   </div>
  );
}
