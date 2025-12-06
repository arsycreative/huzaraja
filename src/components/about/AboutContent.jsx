"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Recycle,
  Truck,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const highlights = [
  {
    title: "Layanan terjadwal & on-call",
    desc: "Armada siap mengambil limbah di kawasan Cakung dan industri sekitarnya dengan jadwal yang disepakati.",
    Icon: Truck,
  },
  {
    title: "Sortir & dokumentasi rapi",
    desc: "Setiap pengambilan disertai pemilahan, foto, dan berita acara sehingga data mudah ditelusuri.",
    Icon: ClipboardList,
  },
  {
    title: "Perdagangan material transparan",
    desc: "Harga untuk logam, karton, plastik, dan sparepart bekas disampaikan di awal tanpa biaya tersembunyi.",
    Icon: Recycle,
  },
  {
    title: "Keamanan & kepatuhan",
    desc: "Area bongkar-muat tertata, APD lengkap, dan dokumen izin pengangkutan siap untuk audit.",
    Icon: ShieldCheck,
  },
];

const galleryImages = [
  { src: "/hero-industrial.jpg", alt: "Area industri dan gudang produksi" },
  { src: "/factory-yard.jpg", alt: "Lahan penampungan material limbah" },
  { src: "/recycle-car.jpeg", alt: "Armada pengangkutan limbah" },
  { src: "/product.jpeg", alt: "Material limbah terpilah" },
  { src: "/product2.jpeg", alt: "Karton dan plastik siap angkut" },
  { src: "/product3.jpeg", alt: "Sparepart dan logam bekas" },
  { src: "/why-docs.jpeg", alt: "Dokumentasi dan berita acara" },
  { src: "/why-pricing.jpeg", alt: "Transaksi material secara transparan" },
  { src: "/why-pricing-crop.jpeg", alt: "Material bernilai daur ulang" },
  { src: "/why-team.jpeg", alt: "Tim lapangan dan koordinasi" },
  { src: "/office.jpeg", alt: "Kantor dan area koordinasi" },
];

export default function AboutContent() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-900/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-industrial.jpg"
            alt="Gudang logistik dan area pabrik"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 lg:flex-row lg:items-center lg:px-6 xl:px-0 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200"
            >
              Tentang kami
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            >
              PT HUZA RAJA INDOTAMA
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-slate-200/90"
            >
              Mitra profesional untuk pengambilan, pengelolaan, dan perdagangan
              limbah pabrik yang siap didaur ulang. Berbasis di Pulo Gebang,
              kami melayani kawasan Cakung dan industri sekitarnya dengan SOP
              yang rapi, dokumentasi lengkap, dan harga transparan.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.1em] text-emerald-50/90"
            >
              {[
                "Limbah logam & scrap",
                "Karton & plastik industri",
                "Sparepart bekas",
                "HDPE / PET",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-300/40 bg-emerald-200/10 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative flex-1"
          >
            <div className="rounded-2xl border border-emerald-400/40 bg-white/10 p-4 backdrop-blur">
              <div className="relative h-56 overflow-hidden rounded-xl border border-emerald-400/40 bg-slate-900 shadow-2xl shadow-emerald-900/50">
                <Image
                  src="/factory-yard.jpg"
                  alt="Area penampungan limbah industri"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-slate-100 shadow-inner shadow-black/20">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Komitmen layanan</span>
                </div>
                <p className="mt-2 text-sm text-slate-200/85">
                  Penjemputan terjadwal, dokumentasi foto & berita acara, area
                  bongkar rapi, serta harga yang disepakati di awal.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background px-4 py-16 text-foreground sm:py-20 lg:px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl space-y-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700"
            >
              Layanan & keunggulan
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Operasional yang jelas dan mudah ditelusuri
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground"
            >
              Setiap langkah tercatat: mulai dari survey, pengambilan, sortir,
              hingga transaksi material.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            {highlights.map(({ title, desc, Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-lg shadow-emerald-50 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background px-4 py-16 text-foreground sm:py-20 lg:px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700"
            >
              Galeri
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Dokumentasi lapangan & material
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground"
            >
              Cuplikan kegiatan, armada, dan material limbah yang kami tangani.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {galleryImages.map(({ src, alt }) => (
              <motion.div
                key={src}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-md shadow-emerald-50 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-emerald-900/10 bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-400 px-4 py-14 text-slate-950 lg:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
              Siap dijadwalkan
            </p>
            <h3 className="font-display text-3xl font-semibold">
              Jadwalkan penjemputan atau survey lokasi
            </h3>
            <p className="text-base text-emerald-50/90">
              Hubungi kami untuk penjemputan rutin maupun on-call di kawasan
              Cakung dan sekitarnya.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-700/30 transition hover:brightness-95"
            >
              Hubungi kami
            </Link>
            <Link
              href="tel:+6287775044403"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Telepon 0877 7504 4403
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
