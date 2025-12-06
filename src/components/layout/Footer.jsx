import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/30 bg-slate-950 text-slate-50">
      {/* main container */}
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 xl:px-0">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Left — identity */}
          <div className="max-w-xs space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              PT HUZA RAJA INDOTAMA
            </h3>
            <p className="text-sm leading-relaxed text-slate-200/80">
              Perdagangan & pengelolaan limbah pabrik — logam, scrap, karton,
              plastik, dan sparepart bekas dengan proses yang rapi, profesional,
              dan terdokumentasi.
            </p>
          </div>

          {/* Middle — address */}
          <div className="max-w-xs space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <MapPin className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="font-semibold text-slate-50">
                  Alamat operasional
                </p>
                <p className="mt-1 leading-relaxed text-slate-200/80">
                  Jalan Komarudin Ujung Krawang, RT.8/RW.5, Pulo Gebang, Cakung,
                  Jakarta Timur, DKI Jakarta, ID 13950
                </p>
              </div>
            </div>
          </div>

          {/* Right — contact & hours */}
          <div className="max-w-xs space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <Phone className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="font-semibold text-slate-50">Kontak</p>
                <p className="mt-1 leading-relaxed text-slate-200/80">
                  Penerima lapangan: Sofyan Solehuddin <br />
                  <span className="font-medium text-white">0877 7504 4403</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <Clock className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <p className="font-semibold text-slate-50">Jam operasional</p>
                <p className="mt-1 leading-relaxed text-slate-200/80">
                  Setiap hari · 08.00 — 18.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-300/85 sm:flex-row lg:px-6 xl:px-0">
          <p>
            © {new Date().getFullYear()} PT HUZA RAJA INDOTAMA · Semua hak cipta
            dilindungi.
          </p>
          <p className="opacity-80">
            Mitra pengelolaan limbah pabrik yang berkelanjutan & transparan.
          </p>
        </div>
      </div>
    </footer>
  );
}
