import Head from 'next/head'
import Index from "@/Components/Index"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://skumi.vercel.app'
const title = 'Silas Kumi | Backend & Cloud Engineer'
const description = 'Backend & Cloud Engineer building distributed systems and cloud infrastructure with Java/Spring, Python/FastAPI, and AWS.'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:creator" content="@sylas_003" />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Silas Kumi',
              jobTitle: 'Backend & Cloud Engineer',
              url: siteUrl,
              sameAs: [
                'https://github.com/Silas003',
                'https://www.linkedin.com/in/silas-kumi',
                'https://x.com/sylas_003',
              ],
              knowsAbout: ['Java', 'Spring', 'Python', 'FastAPI', 'AWS', 'Cloud Architecture'],
            }),
          }}
        />
      </Head>
      <Index />
    </>
  )
}
