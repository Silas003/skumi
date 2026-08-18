// pages/_app.js
import { Outfit, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

// Self-hosted via next/font at build time — no runtime request to Google,
// no <link> tag, no layout-shift flash. Outfit replaces the generic Inter
// default; JetBrains Mono carries the code/terminal accents.
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
