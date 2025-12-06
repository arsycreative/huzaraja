import "./globals.css";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/layout/Footer";
import { Poppins } from "next/font/google";
import { FaPhone } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-geist-sans",
});

const siteUrl = "https://huzaraja.netlify.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PT HUZA RAJA INDOTAMA | Pengelolaan Limbah Pabrik Daur Ulang",
    template: "%s | PT HUZA RAJA INDOTAMA",
  },
  description:
    "PT HUZA RAJA INDOTAMA menangani pengambilan dan pengelolaan limbah pabrik yang dapat didaur ulang (logam, scrap, karton, plastik, sparepart) untuk kawasan Cakung dan sekitarnya.",
  keywords: [
    "pengelolaan limbah pabrik",
    "limbah logam",
    "scrap",
    "limbah karton",
    "limbah plastik",
    "sparepart bekas",
    "Cakung",
    "Pulo Gebang",
    "Jakarta Timur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT HUZA RAJA INDOTAMA | Pengelolaan Limbah Pabrik Daur Ulang",
    description:
      "Mitra profesional untuk pengambilan, pengelolaan, dan perdagangan limbah pabrik yang dapat didaur ulang dengan dokumentasi lengkap.",
    url: siteUrl,
    siteName: "PT HUZA RAJA INDOTAMA",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/hero-industrial.jpg",
        width: 1600,
        height: 900,
        alt: "Area industri dan pengelolaan limbah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT HUZA RAJA INDOTAMA | Pengelolaan Limbah Pabrik",
    description:
      "Pengelolaan dan perdagangan limbah pabrik (logam, karton, plastik, sparepart) dengan SOP rapi dan dokumentasi jelas.",
    images: ["/hero-industrial.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} bg-background font-sans text-foreground`}
        cz-shortcut-listen="true"
      >
        <div className="flex min-h-screen flex-col">
          <MainNavbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `${siteUrl}#organization`,
                name: "PT HUZA RAJA INDOTAMA",
                url: siteUrl,
                logo: `${siteUrl}/logo.jpeg`,
                image: `${siteUrl}/hero-industrial.jpg`,
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Jalan Komarudin Ujung Krawang, RT.8/RW.5, Pulo Gebang, Cakung",
                  addressLocality: "Jakarta Timur",
                  addressRegion: "DKI Jakarta",
                  postalCode: "13950",
                  addressCountry: "ID",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+62-877-7504-4403",
                  contactType: "customer service",
                  areaServed: "ID",
                  availableLanguage: ["id"],
                },
                sameAs: ["tel:+6287775044403"],
              }),
            }}
          />
          <a
            href="tel:+6287775044403"
            className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#32d951] text-white shadow-[0_15px_45px_rgba(50,217,81,0.35)] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Telepon PT HUZA RAJA INDOTAMA"
          >
            <FaPhone className="h-5 w-5" />
          </a>
        </div>
      </body>
    </html>
  );
}
