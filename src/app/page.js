"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Recycle,
  ShieldCheck,
  MapPin,
  Clock,
  ClipboardList,
  FileCheck,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export default function HomePage() {
  function FAQList() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: "PT HUZA RAJA INDOTAMA bergerak dalam bidang apa?",
        answer:
          "PT HUZA RAJA INDOTAMA bergerak di bidang pengelolaan dan pengambilan limbah pabrik yang dapat didaur ulang, seperti limbah logam, scrap, karton, plastik, hingga sparepart bekas. Seluruh layanan didukung oleh tenaga kerja profesional dan berpengalaman.",
      },
      {
        question:
          "Apakah PT HUZA RAJA INDOTAMA juga menyuplai palet kayu dan besi?",
        answer:
          "Ya, PT HUZA RAJA INDOTAMA juga menyediakan dan menyuplai palet kayu maupun palet besi sesuai kebutuhan industri dan spesifikasi area penyimpanan.",
      },
      {
        question: "Apakah PT HUZA RAJA INDOTAMA melakukan jual beli besi tua?",
        answer:
          "Ya, kami melayani jasa jual beli besi tua (scrap) serta berbagai jenis material lainnya seperti tembaga, gram aluminium, mesin-mesin bekas, hingga sparepart industri yang masih memiliki nilai daur ulang.",
      },
    ];

    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-4 lg:gap-5"
      >
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div key={item.question} variants={fadeUp}>
              <div className="rounded-2xl border border-emerald-100 bg-white/95 px-4 py-3 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {item.question}
                  </span>
                  <span
                    className={`ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* konten jawaban dengan transisi smooth */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-sm leading-relaxed text-slate-700">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden border-b border-emerald-900/15 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white lg:min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1577010768912-19874598a38e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gudang logistik dan area pabrik"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-550/85 via-slate-850/75 to-emerald-950/65" />
          <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
          <div className="absolute -left-14 bottom-[-5rem] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center gap-6 px-4 py-12 lg:min-h-[calc(100vh-4rem)] lg:px-6 xl:px-0 lg:py-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-white/10 px-4 py-1.5 text-xs font-medium text-emerald-100 backdrop-blur"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/90">
                <Recycle className="h-3.5 w-3.5 text-slate-950" />
              </span>
              <span className="tracking-wide">
                Pengelolaan & perdagangan limbah pabrik terkurasi
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Mitra profesional untuk limbah pabrik yang siap didaur ulang
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-slate-200/90 sm:text-lg"
            >
              PT HUZA RAJA INDOTAMA menangani pengambilan, pencatatan, dan
              penyaluran limbah logam, karton, plastik, dan sparepart bekas
              dengan SOP rapi dan dokumentasi yang selalu dibagikan.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 text-sm text-slate-100"
            >
              {[
                "Penjemputan terjadwal atau on-call",
                "Dokumentasi foto & berita acara",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10"
                >
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/50 transition hover:brightness-110 sm:w-auto"
              >
                Hubungi tim penjemputan
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-medium text-emerald-100 transition hover:border-white/40 hover:text-white sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
              >
                Lihat profil perusahaan
                <Sparkles className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.08em] text-emerald-50/90"
            >
              {[
                "Limbah logam & scrap",
                "Karton & plastik industri",
                "Sparepart bekas",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-300/30 bg-emerald-200/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Layanan */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-16 text-foreground sm:py-20 lg:px-6">
        {/* background lembut */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-emerald-200/35 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-lime-200/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Layanan inti
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Layanan limbah yang rapi dan bernilai
              </h2>
              <p className="text-base text-muted-foreground">
                Dari pengambilan hingga transaksi, alur limbah diatur dengan
                jelas, tertib, dan terdokumentasi.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200/80 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span>Armada dan tim siap dijadwalkan</span>
            </motion.div>
          </motion.div>

          {/* Grid card yang rapi dan konsisten */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "Penjemputan terjadwal",
                desc: "Armada rutin atau on-call untuk pabrik di Cakung dan sekitarnya.",
                Icon: Truck,
                highlight: false,
              },
              {
                title: "Sortir dan pencatatan",
                desc: "Material dipilah, ditimbang, dan dicatat dengan bukti yang rapi.",
                Icon: ClipboardList,
                highlight: false,
              },
              {
                title: "Pengelolaan aman",
                desc: "Area penampungan tertata, APD lengkap, dan jalur bongkar muat terkontrol.",
                Icon: ShieldCheck,
                highlight: false,
              },
              {
                title: "Perdagangan material",
                desc: "Harga transparan untuk logam, karton, plastik, dan sparepart bekas.",
                Icon: Recycle,
                highlight: true,
              },
            ].map(({ title, desc, Icon, highlight }) => (
              <motion.div key={title} variants={fadeUp} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
                    highlight
                      ? "border-emerald-300 bg-gradient-to-br from-emerald-500/90 via-emerald-400 to-lime-300 text-slate-950"
                      : "border-emerald-100 bg-white text-slate-900"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${
                      highlight
                        ? // icon card highlight tetap seperti sebelumnya
                          "bg-white/70"
                        : // icon card 1–3 gradient + putih
                          "bg-gradient-to-br from-emerald-500 to-lime-400"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        highlight ? "text-emerald-700" : "text-white"
                      }`}
                    />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">{title}</h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      highlight ? "text-slate-900/90" : "text-slate-700"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mengapa memilih kami */}
      <section className="relative overflow-hidden bg-white px-4 py-16 text-foreground sm:py-20 lg:px-6">
        {/* background lembut */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-0 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading – align dengan section lain */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Mengapa memilih kami
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Mitra limbah pabrik yang transparan, tertib, dan mudah diajak
                kerja sama
              </h2>
              <p className="text-base text-muted-foreground">
                Setiap pengambilan limbah diperlakukan seperti proses logistik
                yang serius: terjadwal, tercatat, dan bisa dipertanggungjawabkan
                saat audit internal maupun eksternal.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Fokus pada ketertiban dan kejelasan data</span>
            </motion.div>
          </motion.div>

          {/* Grid keunggulan + gambar Unsplash (via public/) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "Harga & timbangan transparan",
                desc: "Setiap pengiriman disertai rincian berat per jenis material dan kesepakatan harga yang jelas.",
                image: "/why-pricing-crop.jpeg",
                alt: "Petugas industri memeriksa timbangan dan catatan.",
              },
              {
                title: "Dokumentasi rapi",
                desc: "Foto, berita acara, dan catatan pengambilan disusun sehingga mudah dilacak kapan saja.",
                image: "/why-docs.jpeg",
                alt: "Pekerja pabrik memegang clipboard dan dokumen.",
              },
              {
                title: "Tim berpengalaman",
                desc: "Tenaga kerja terbiasa bekerja di area pabrik dengan prosedur keselamatan yang tertib.",
                image: "/why-team.jpeg",
                alt: "Tim pekerja menggunakan helm dan rompi keselamatan.",
              },
              {
                title: "Jadwal fleksibel",
                desc: "Bisa dijadwalkan rutin maupun on-call, mengikuti pola produksi dan kapasitas gudang.",
                image: "/recycle-car.jpeg",
                alt: "Truk logistik di area bongkar muat pabrik.",
              },
            ].map((item, index) => (
              <motion.article key={item.title} variants={fadeUp}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white/95 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden sm:h-44">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 260px, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/5 to-transparent" />

                    {/* Badge di atas gambar */}
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="inline-flex h-7 min-w-[2.4rem] items-center justify-center rounded-full bg-white/90 text-[11px] font-semibold tracking-[0.14em] text-emerald-700 shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proses & Material */}
      <section className="relative overflow-hidden bg-white px-4 py-16 text-foreground sm:py-20 lg:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Heading – disamakan dengan Layanan */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Proses kerja
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Alur pengelolaan limbah yang jelas dari awal hingga pelaporan
              </h2>
              <p className="text-base text-muted-foreground">
                Proses disusun agar tim pabrik memahami dengan cepat bagaimana
                limbah diambil, dicatat, dan dilaporkan kembali tanpa mengganggu
                aktivitas produksi.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200"
            >
              <FileCheck className="h-4 w-4 text-emerald-600" />
              <span>
                Berita acara dan dokumentasi menyertai setiap pengiriman
              </span>
            </motion.div>
          </motion.div>

          {/* Konten utama */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            {/* Kiri: timeline vertikal */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.ol variants={fadeUp} className="relative space-y-6">
                <div className="pointer-events-none absolute left-[18px] top-4 bottom-4 hidden w-px bg-emerald-100 sm:block" />

                {[
                  {
                    title: "Survey dan penjadwalan",
                    desc: "Jenis material, estimasi volume, titik muat, dan pola pengambilan disepakati lebih dulu bersama tim pabrik.",
                  },
                  {
                    title: "Pengambilan di area pabrik",
                    desc: "Armada tiba sesuai jadwal, material dipilah, ditimbang, dan disusun rapi di area bongkar muat sebelum diangkut.",
                  },
                  {
                    title: "Dokumentasi dan pelaporan",
                    desc: "Foto, berita acara, dan rincian volume per jenis material dibagikan sebagai dasar pelaporan dan transaksi.",
                  },
                ].map((step, index) => (
                  <li key={step.title} className="relative pl-11 sm:pl-14">
                    {/* Badge angka */}
                    <div className="absolute left-0 top-1 flex items-center sm:left-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 text-[11px] font-semibold text-white shadow-md shadow-emerald-400/60">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                <div className="rounded-2xl border border-emerald-100 bg-white px-4 py-3 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                      <p className="text-base font-semibold text-slate-900">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </motion.ol>
            </motion.div>

            {/* Kanan: kartu gambar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-80 overflow-hidden rounded-2xl border border-emerald-200 bg-slate-900 shadow-xl shadow-emerald-900/60 md:h-96 lg:h-[620px]"
            >
              <Image
                src="/recycle-car.jpeg"
                alt="Area penampungan dan pengelolaan limbah daur ulang"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div
                className="absolute left-4 top-4 flex items-center gap-2 rounded-full
  bg-gradient-to-r from-emerald-500/85 via-emerald-400/85 to-lime-300/85
  px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]
  text-white ring-1 ring-white/20 backdrop-blur-md shadow-md shadow-emerald-500/40"
              >
                <Sparkles className="h-3.5 w-3.5 text-white" />
                <span>Area operasional lapangan</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid gap-2 text-xs text-slate-50 sm:grid-cols-3">
                {[
                  "Limbah logam dan scrap",
                  "Karton, kertas, dan plastik",
                  "Sparepart bekas bernilai",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-emerald-200/40 backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-0.5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lokasi & Operasional */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-slate-50 sm:py-20 lg:px-6">
        {/* glow lembut */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-emerald-500/18 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-0 h-64 w-64 rounded-full bg-emerald-400/18 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading – align dengan Layanan & Proses */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Lokasi & operasional
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Basis gudang di Pulo Gebang untuk kawasan industri Cakung dan
                sekitarnya
              </h2>
              <p className="text-base text-slate-200/85">
                Lokasi strategis memudahkan armada menjangkau pabrik dan gudang
                di Jakarta Timur, dengan penjadwalan yang disesuaikan dengan
                pola produksi dan kebijakan akses setiap lokasi.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-emerald-50 ring-1 ring-emerald-300/40 shadow-sm backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-emerald-200" />
              <span>Pulo Gebang · Jakarta Timur</span>
            </motion.div>
          </motion.div>

          {/* 3 kartu info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Alamat */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-emerald-500/35 bg-slate-950/70 p-5 text-sm shadow-lg shadow-emerald-900/60 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/60">
                  <MapPin className="h-4 w-4 text-emerald-200" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Alamat operasional
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-50">
                Gudang Pulo Gebang
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
                Jalan Komarudin Ujung Krawang, RT.8/RW.5, Pulo Gebang, Cakung
                (No. 252), Cakung, Kota Jakarta Timur, DKI Jakarta, ID 13950.
              </p>
            </motion.div>

            {/* Jam operasional */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-emerald-500/35 bg-slate-950/70 p-5 text-sm shadow-lg shadow-emerald-900/60 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/60">
                  <Clock className="h-4 w-4 text-emerald-200" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Jam operasional
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-50">
                Setiap hari, 08.00–18.00 WIB
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
                Penjemputan dapat dijadwalkan mengikuti jam produksi, waktu
                bongkar muat, dan batas akses area pabrik yang telah disepakati.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-emerald-100">
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 uppercase tracking-[0.14em]">
                  Penjemputan terjadwal
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 uppercase tracking-[0.14em]">
                  On-call berdasarkan kesepakatan
                </span>
              </div>
            </motion.div>

            {/* Kontak utama */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-emerald-500/35 bg-slate-950/70 p-5 text-sm shadow-lg shadow-emerald-900/60 backdrop-blur lg:col-span-1 sm:col-span-2 lg:col-span-1"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/60">
                  <Truck className="h-4 w-4 text-emerald-200" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Koordinasi penjemputan
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-50">
                Kontak penerima lapangan
              </p>
              <p className="mt-1 text-sm text-slate-200/90">
                Sofyan Solehuddin
              </p>
              <p className="mt-1 text-sm text-emerald-100">0877 7504 4403</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
                Digunakan untuk konfirmasi jadwal, titik muat di dalam area
                pabrik, dan kebutuhan akses khusus sebelum armada tiba.
              </p>
            </motion.div>
          </motion.div>

          {/* Strip CTA bawah */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-300 px-5 py-4 text-sm text-slate-950 shadow-lg shadow-emerald-500/40 sm:px-6 sm:py-5"
          >
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900/80">
                  Penjemputan limbah pabrik
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  Ingin menjadwalkan survey atau penjemputan pertama di pabrik
                  Anda?
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-900/80">
                  Tim HUZA RAJA INDOTAMA siap membantu menyusun alur penjemputan
                  yang rapi dan tidak mengganggu operasi harian.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-emerald-100 shadow-md shadow-slate-900/60 transition hover:bg-slate-900"
              >
                Hubungi tim kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ / Pertanyaan umum */}
      <section className="relative overflow-hidden bg-white px-4 py-16 text-foreground sm:py-20 lg:px-6">
        {/* glow lembut */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-8 h-52 w-52 rounded-full bg-emerald-200/35 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-0 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading – align dengan section lain */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Pertanyaan umum
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                FAQ seputar layanan PT HUZA RAJA INDOTAMA
              </h2>
              <p className="text-base text-muted-foreground">
                Ringkasan pertanyaan yang paling sering diajukan terkait ruang
                lingkup usaha, suplai material, serta transaksi jual beli limbah
                pabrik.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200"
            >
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>Masih ada pertanyaan? Hubungi tim kami.</span>
            </motion.div>
          </motion.div>

          {/* Daftar FAQ full width */}
          <FAQList />
        </div>
      </section>
    </div>
  );
}
