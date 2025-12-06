"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ClipboardList } from "lucide-react";

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

const contacts = [
  {
    title: "Telepon penjemputan",
    desc: "Hubungi langsung penerima lapangan untuk jadwal penjemputan atau survey.",
    value: "0877 7504 4403 (Sofyan Solehuddin)",
    href: "tel:+6287775044403",
    icon: Phone,
  },
  {
    title: "Lokasi operasional",
    desc: "Jalan Komarudin Ujung Krawang, RT.8/RW.5, Pulo Gebang, Cakung, Jakarta Timur, 13950",
    icon: MapPin,
  },
];

export default function ContactContent() {
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
              Hubungi kami
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            >
              Jadwalkan penjemputan atau minta survey lokasi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-slate-200/90"
            >
              Tim kami siap membantu penjemputan limbah pabrik di kawasan Cakung
              dan sekitarnya. Hubungi langsung via telepon untuk jadwal cepat.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="tel:+6287775044403"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/50 transition hover:brightness-110"
              >
                Telepon 0877 7504 4403
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <div className="rounded-2xl border border-emerald-400/35 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                <ClipboardList className="h-4 w-4" />
                <span>Proses cepat</span>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-100">
                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="font-semibold">Siapkan detail material</p>
                  <p className="text-slate-200/85">
                    Jenis limbah (logam, karton, plastik, sparepart), perkiraan
                    volume, dan lokasi muat.
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="font-semibold">Jadwal & akses lokasi</p>
                  <p className="text-slate-200/85">
                    Tanggal/waktu penjemputan dan informasi akses ke area
                    bongkar-muat.
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="font-semibold">Dokumentasi & BA</p>
                  <p className="text-slate-200/85">
                    Kami siapkan foto, berita acara, dan rincian timbang setiap
                    pengiriman.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacts */}
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
              Kontak utama
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Kami siap merespons permintaan Anda
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground"
            >
              Gunakan nomor telepon untuk jadwal cepat atau koordinasi lapangan.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-5 md:grid-cols-3"
          >
            {contacts.map(({ title, desc, value, href, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-lg shadow-emerald-50 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {title}
                  </p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                  {href && value ? (
                    <Link
                      href={href}
                      className="text-sm font-semibold text-emerald-700 hover:text-emerald-600"
                    >
                      {value}
                    </Link>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & hours */}
      <section className="bg-slate-950 px-4 py-16 text-slate-50 sm:py-20 lg:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200"
            >
              Lokasi & jam operasional
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Gudang di Pulo Gebang, rute siap untuk kawasan Cakung
            </motion.h3>
            <motion.p variants={fadeUp} className="text-base text-slate-200/85">
              Posisi strategis memudahkan armada kami menjangkau pabrik dan
              gudang industri di Jakarta Timur dan sekitarnya.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid gap-4 rounded-2xl border border-emerald-400/35 bg-white/5 p-5 text-sm shadow-xl shadow-emerald-950/60 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-800/60"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-200" />
                <div>
                  <p className="font-semibold text-slate-50">Alamat</p>
                  <p className="mt-2 text-slate-200/90">
                    Jalan Komarudin Ujung Krawang, RT.8/RW.5, Pulo Gebang,
                    Cakung, Jakarta Timur, DKI Jakarta, ID 13950
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-emerald-200" />
                <div>
                  <p className="font-semibold text-slate-50">Jam</p>
                  <p className="mt-2 text-slate-200/90">
                    Setiap hari · 08.00 — 18.00 WIB (jadwal dapat disesuaikan)
                  </p>
                </div>
              </div>
              <Link
                href="tel:+6287775044403"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/50 transition hover:brightness-110"
              >
                Telepon sekarang
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative h-72 overflow-hidden rounded-2xl border border-emerald-400/35 bg-slate-900 shadow-2xl shadow-emerald-950/80 sm:h-80 lg:h-96"
          >
            <Image
              src="/office.jpeg"
              alt="Area penampungan limbah industri"
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-200/10 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-100">
              Pulo Gebang · Cakung
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
