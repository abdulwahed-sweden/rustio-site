import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--nf-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--nf-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--nf-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s · RustIO" },
  description: SITE.description,
  applicationName: "RustIO",
  keywords: ["Rust", "business systems", "admin engine", "PostgreSQL", "rustio-admin", "operational software", "open source"],
  authors: [{ name: "Abdulwahed Mansour" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "RustIO",
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B1E23",
};

// Runs before paint: apply saved theme + accent so there is no flash.
const boot = `(function(){try{var d=document.documentElement,r=d.style;
d.setAttribute('data-theme',localStorage.getItem('rio-site-theme')||'dark');
var a=localStorage.getItem('rio-site-accent'),
M={Teal:{a:'#2FB6A0',a2:'#43C7B2',ink:'#4FD3BD',deep:'#1C8A78'},Azure:{a:'#3E8FD4',a2:'#5AA3E2',ink:'#72B4EC',deep:'#245C97'}};
function g(h,l){h=h.replace('#','');return 'rgba('+parseInt(h.slice(0,2),16)+','+parseInt(h.slice(2,4),16)+','+parseInt(h.slice(4,6),16)+','+l+')';}
if(a&&M[a]){var c=M[a];r.setProperty('--accent',c.a);r.setProperty('--accent-2',c.a2);r.setProperty('--accent-ink',c.ink);
r.setProperty('--accent-deep',c.deep);r.setProperty('--accent-soft',g(c.a,.13));r.setProperty('--accent-line',g(c.a,.34));r.setProperty('--accent-glow',g(c.a,.16));}
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <div className="field-glow" aria-hidden="true" />
        <div className="field-grid" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
