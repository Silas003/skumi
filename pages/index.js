import Head from 'next/head'
import Index from "@/Components/Index"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Silas Kumi — Backend &amp; Cloud Engineer</title>
        <meta name="description" content="Backend & Cloud Engineer building distributed systems and developer tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Index />
    </>
  )
}
