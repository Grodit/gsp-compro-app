import { createFileRoute, Link, useLayoutEffect } from '@tanstack/react-router'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/tentang-kami/')({
  head: () => ({
    meta: [{ title: getTitleHead('Tentang Kami') }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden select-none">
      {/* 1. HERO SECTION - Digital Engineering focus */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 animate-fade-in">
            <span className="h-0.5 w-8 md:w-12 bg-amber-500"></span>
            <span className="text-amber-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[11px]">
              Digital Engineering Lab Since 2026
            </span>
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] text-foreground uppercase">
              ARSITEKTUR <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700">
                LOGIKA.
              </span>
            </h1>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 md:gap-10">
            <p className="max-w-xl text-base md:text-xl text-slate-600 leading-relaxed font-light">
              Kami adalah{' '}
              <span className="font-bold text-foreground underline decoration-amber-500/30">
                Grodit Studio
              </span>
              . Partner strategis dalam membangun sistem digital yang skalabel,
              mengubah ide bisnis yang kompleks menjadi infrastruktur kode yang
              kokoh dan efisien.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - System Builder Identity */}
      <section className="py-10 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Visual Identity Case */}
          <div className="md:col-span-8 relative group h-80 sm:h-112 md:h-150 bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[80px] md:blur-[120px] rounded-full" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-center">
              <img
                src="/assets/logos/logoLongPutih.svg"
                alt="Grodit Studio"
                className="w-full max-w-xs sm:max-w-md md:max-w-xl object-contain z-20 drop-shadow-[0_15px_30px_rgba(245,158,11,0.2)]"
              />
              <div className="mt-6 md:mt-8 z-20">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[9px] md:text-xs tracking-widest uppercase">
                  Modern Software Architecture
                </span>
              </div>
            </div>
            {/* Subtle Grid Pattern Overlay to represent coding/systems */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[30px_30px]"></div>
          </div>

          {/* Vision Box */}
          <div className="md:col-span-4 flex flex-col justify-between bg-amber-500 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-amber-950">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 md:mb-8 leading-tight uppercase">
                Sistem yang Melampaui Batas.
              </h2>
              <p className="text-amber-950/90 leading-relaxed font-medium text-base md:text-lg">
                Visi kami sederhana: Menghapus batasan teknis bagi bisnis untuk
                berkembang melalui sistem cerdas, aman, dan performa yang tak
                tertandingi.
              </p>
            </div>

            <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
              <div className="flex justify-between items-end border-b border-amber-600/30 pb-3 md:pb-4">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                  99.9%
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1 md:mb-2">
                  Uptime Reliability
                </span>
              </div>
              <div className="flex justify-between items-end border-b border-amber-600/30 pb-3 md:pb-4">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                  150+
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1 md:mb-2">
                  Deployed Systems
                </span>
              </div>
            </div>
          </div>

          {/* 3. CORE PILLARS - Software House Style */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-2 md:mt-4">
            {[
              {
                title: 'Statis & Cepat',
                desc: 'Optimasi performa maksimal untuk landing page dan company profile yang SEO-friendly.',
              },
              {
                title: 'Dinamis & Skalabel',
                desc: 'Aplikasi web kompleks dengan integrasi database dan manajemen data yang aman.',
              },
              {
                title: 'Clean Architecture',
                desc: 'Penulisan kode yang rapi dan terdokumentasi, memudahkan perawatan jangka panjang.',
              },
            ].map((s, i) => (
              <div
                key={i++}
                className="group p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-lg md:rounded-xl mb-4 md:mb-6 flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 md:py-32 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 md:mb-10 tracking-tight uppercase">
          Bangun Sistem Anda Sekarang
        </h2>
        <Link
          to="/"
          className="inline-block w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-foreground text-white rounded-full font-bold hover:bg-amber-500 hover:text-amber-950 transition-all text-sm md:text-base active:scale-95 shadow-xl shadow-slate-200"
        >
          Konsultasi Teknis Gratis
        </Link>
      </section>

      {/* 5. SIGNATURE OUTRO - Tech focused */}
      <section className="pb-24 pt-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="pt-16 flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold tracking-[0.3em] text-amber-600 uppercase mb-6">
              Core Philosophy
            </h3>
            <p className="text-2xl md:text-4xl font-medium text-slate-400 leading-tight">
              "Di Grodit Studio, kami percaya bahwa{' '}
              <span className="text-slate-950">
                setiap baris kode punya tujuan
              </span>{' '}
              dan setiap sistem harus menjadi solusi, bukan sekadar janji."
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-slate-500 text-sm max-w-50 leading-relaxed">
              Membangun masa depan digital secara presisi.
            </p>
            <div className="h-px w-20 bg-amber-500"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
