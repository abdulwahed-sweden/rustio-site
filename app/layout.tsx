import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { SITE, structuredData } from '@/lib/site'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--nf-display',
  display: 'swap',
})
// Geist (Vercel's typeface) via the official package; exposes --font-geist-sans.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--nf-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s · RustIO' },
  description: SITE.description,
  applicationName: 'RustIO',
  keywords: [
    'Rust',
    'business systems',
    'admin engine',
    'PostgreSQL',
    'rustio-admin',
    'operational software',
    'open source',
  ],
  authors: [{ name: 'Abdulwahed Mansour' }],
  creator: 'Abdulwahed Mansour',
  publisher: 'RustIO',
  category: 'technology',
  icons: { icon: '/favicon.svg' },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: '/' },
  verification: { google: 'pVFGyVTGO1Ri48eOQpZtKZgLf8Gkt0ktJzN9h06cUuI' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: 'RustIO',
    title: SITE.title,
    description: SITE.description,
    locale: 'en_US',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: 'RustIO — a Rust-first business-system engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B1E23',
}

// Runs before paint: apply saved theme + accent so there is no flash.
// Accent is just an attribute now — globals.css owns the per-theme shades.
const boot = `(function(){try{var d=document.documentElement;
d.setAttribute('data-theme',localStorage.getItem('rio-site-theme')||'dark');
var a=localStorage.getItem('rio-site-accent');if(a){d.setAttribute('data-accent',a);}
}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${GeistSans.variable} ${mono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
        <div className="field-glow" aria-hidden="true" />
        <div className="field-grid" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
