"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Kontak", href: "/contact" },
];

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-emerald-900/10 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 lg:px-6 xl:px-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-emerald-500/40 ring-1 ring-emerald-100">
            <Image
              src="/logo.jpeg"
              alt="PT HUZA RAJA INDOTAMA"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-emerald-700">
              PT HUZA RAJA INDOTAMA
            </span>
            <span className="text-xs text-muted-foreground">
              Pengelolaan dan Perdagangan Limbah Daur Ulang
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-emerald-700"
              >
                {item.label}
              </Link>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto block h-px w-0 bg-emerald-600 transition-all duration-200 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile nav button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-card p-2 text-foreground shadow-sm md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="border-t border-emerald-900/10 bg-background/95 px-4 pb-4 pt-2 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
