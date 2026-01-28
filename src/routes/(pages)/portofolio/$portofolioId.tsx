import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink, MoveRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useLayoutEffect, useRef } from 'react'

export const Route = createFileRoute('/(pages)/portofolio/$portofolioId')({
  component: PortfolioDetailComponent,
})

function PortfolioDetailComponent() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const detail = {
    title: 'Sistem Informasi Aset Manajemen',
    client: 'Kementerian Pendidikan',
    year: '2025',
    role: 'Lead Infrastructure',
    status: 'production' as 'production' | 'development', // Sesuai dengan data list
    url: 'https://aset.kemdikbud.go.id',
    description:
      'Membangun tulang punggung data nasional yang mampu menangani jutaan permintaan per detik dengan integrasi keamanan tingkat tinggi serta redundansi data otomatis untuk memastikan ketersediaan layanan publik yang optimal.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
  }

  const isProduction = detail.status === 'production'

  return (
    <main className="min-h-screen text-foreground overflow-x-hidden select-none">
      {/* 1. HERO AREA */}
      <section
        ref={heroRef}
        className="relative h-[80vh] md:h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-foreground"
      >
        <motion.img
          src={detail.image}
          style={{ scale }}
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[0.4]"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-forebg-foreground/60 to-forebg-foreground" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div style={{ opacity }} className="space-y-8">
            <Link
              to="/portofolio"
              className="group inline-flex items-center gap-3 text-white/50 hover:text-amber-500 transition-all uppercase text-[10px] font-black tracking-[0.5em]"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Kembali
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px]">
                  Studi Kasus {detail.year}
                </span>

                {/* Status Badge - Updated style */}
                <div
                  className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border flex items-center gap-2 ${
                    isProduction
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isProduction ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}
                  />
                  {isProduction ? 'Sudah Rilis' : 'Segera Hadir'}
                </div>
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                {detail.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE CONTENT & BROWSER MOCKUP */}
      <section className="relative z-20 -mt-24 md:-mt-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Visual with Browser Frame */}
          <div className="lg:col-span-8 group">
            <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] bg-[#ebebeb] border border-white/10">
              {/* Browser Header */}
              <div className="relative bg-[#ebebeb] dark:bg-slate-800 rounded-t-xl border-t border-x border-slate-200 dark:border-slate-700 flex items-center gap-2 px-4 py-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner" />
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-md text-[10px] py-1 px-3 text-slate-400 truncate text-center font-mono">
                  {detail.url.replace('https://', '')}
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Image Content */}
              <div className="relative overflow-hidden bg-foreground">
                <img
                  src={detail.image}
                  className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.01]"
                  alt="Interface"
                />
              </div>
            </div>
          </div>

          {/* Side Info Panel */}
          <div className="lg:col-span-4">
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-10 sticky top-32">
              <InfoBlock label="Klien Utama" value={detail.client} />
              <InfoBlock label="Tahun Proyek" value={detail.year} />
              <InfoBlock label="Peran Strategis" value={detail.role} />

              <div className="pt-6 border-t border-slate-50">
                {isProduction ? (
                  <a
                    href={detail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full group/link"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/link:text-amber-600 transition-colors">
                      Lihat Live Demo
                    </span>
                    <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center group-hover/link:bg-amber-500 transition-all">
                      <ExternalLink size={14} />
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center justify-between w-full opacity-50 cursor-not-allowed">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Demo Belum Tersedia
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NARRATIVE SECTION */}
      <section className="py-32 md:py-48 px-6 max-w-5xl mx-auto">
        <div className="space-y-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950 leading-tight">
            Menghadirkan{' '}
            <span className="italic text-amber-600">Efisiensi</span> <br />
            Digital Nasional.
          </h2>
          <p className="text-xl md:text-3xl text-slate-500 font-light leading-relaxed">
            {detail.description}
          </p>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="is-dark-section bg-slate-950 py-32 md:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="group block relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.6em] block">
                  Berikutnya
                </span>
                <h3 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white/20 group-hover:text-white transition-all duration-700 uppercase tracking-tighter leading-none">
                  Fleet <br /> Management
                </h3>
              </div>
              <div className="hidden md:block pb-4">
                <MoveRight
                  size={120}
                  className="text-amber-500 opacity-0 -translate-x-20 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-1000" />
          </Link>
        </div>
      </footer>
    </main>
  )
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-3 group/block">
      <p className="text-[10px] font-black text-amber-600/60 group-hover/block:text-amber-600 transition-colors uppercase tracking-[0.4em]">
        {label}
      </p>
      <p className="text-xl font-bold text-foreground leading-tight uppercase tracking-tight">
        {value}
      </p>
    </div>
  )
}
