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

export const metadata = {
  title: "PT HUZA RAJA INDOTAMA | Pengelolaan Limbah Pabrik Daur Ulang",
  description:
    "PT HUZA RAJA INDOTAMA menyediakan jasa pengelolaan dan pengambilan limbah pabrik yang dapat didaur ulang, mulai dari limbah logam, scrap, karton, plastik hingga sparepart bekas untuk wilayah Cakung dan sekitarnya.",
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
