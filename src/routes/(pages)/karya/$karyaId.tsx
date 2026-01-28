import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Globe,
  LayoutGrid,
  Lock,
  MousePointer2,
  Radio,
  Users,
  Zap,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useLayoutEffect, useRef } from 'react'

export const Route = createFileRoute('/(pages)/karya/$karyaId')({
  component: KaryaDetailComponent,
})

function KaryaDetailComponent() {
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
    title: 'EduFlow Learning System',
    category: 'Platform Edukasi',
    year: '2025',
    status: 'production' as 'production' | 'development',
    tagline: 'Solusi Pembelajaran Digital Tanpa Batas',
    url: 'https://eduflow.example.com',
    description:
      'EduFlow dirancang untuk memudahkan interaksi antara pengajar dan siswa dalam satu ekosistem digital. Dengan antarmuka yang bersih, fokus pengguna tetap terjaga sepenuhnya pada materi pembelajaran tanpa gangguan.',
    features: [
      {
        title: 'Kuis Interaktif',
        desc: 'Evaluasi belajar secara real-time dengan sistem ranking otomatis bagi siswa.',
      },
      {
        title: 'Pantau Progres',
        desc: 'Analitik visual untuk melihat perkembangan pemahaman materi setiap siswa.',
      },
      {
        title: 'Sinkronisasi Cloud',
        desc: 'Akses semua materi belajar dari perangkat apa pun, kapan pun, tanpa takut kehilangan data.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  }

  return (
    <main className="min-h-screen text-foreground selection:bg-amber-200 overflow-x-hidden select-none">
      {/* 1. HERO AREA */}
      <section
        ref={heroRef}
        className="relative h-[80vh] flex items-center bg-foreground px-6 overflow-hidden"
      >
        <motion.img
          src={detail.image}
          style={{ scale }}
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full ">
          <motion.div style={{ opacity }} className="space-y-6">
            <Link
              to="/karya"
              className="inline-flex items-center gap-2 text-amber-500 font-black uppercase text-[10px] tracking-[0.4em] group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Kembali ke Koleksi
            </Link>

            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-amber-500 text-foreground px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded">
                  {detail.category}
                </span>

                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded border text-[10px] font-black uppercase tracking-widest ${
                    detail.status === 'production'
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                      : 'bg-amber-500/10 border-amber-500/50 text-amber-400'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      detail.status === 'production'
                        ? 'bg-emerald-400'
                        : 'bg-amber-400'
                    }`}
                  />
                  {detail.status === 'production'
                    ? 'Sudah Rilis'
                    : 'Dalam Pengembangan'}
                </div>
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-6">
                {detail.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl italic leading-relaxed">
                "{detail.tagline}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION GRID - Warna Gelap / Dark Mode Style */}
      <section className="relative z-20 bg-foreground border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <AppValue
            icon={<Users size={24} />}
            label="Target Pengguna"
            value="Siswa & Pengajar"
          />
          <AppValue
            icon={<Globe size={24} />}
            label="Aksesibilitas"
            value="Web & Mobile"
          />
          <AppValue
            icon={
              detail.status === 'production' ? (
                <Zap size={24} />
              ) : (
                <Radio size={24} />
              )
            }
            label="Ketersediaan"
            value={detail.status === 'production' ? 'Publik' : 'Beta Tertutup'}
          />
        </div>
      </section>

      {/* 3. EXPERIENCE JOURNEY */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          {/* BAGIAN GAMBAR DENGAN BINGKAI BROWSER */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="group relative">
              {/* Bingkai Browser */}
              <div className="relative bg-[#ebebeb] dark:bg-slate-800 rounded-t-xl border-t border-x border-slate-200 dark:border-slate-700 flex items-center gap-2 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 max-w-md mx-auto">
                  <div className="bg-white/50 dark:bg-slate-900/50 rounded-md text-[10px] py-1 px-3 text-slate-400 truncate text-center font-mono">
                    eduflow.framer.app
                  </div>
                </div>
              </div>

              {/* Kontainer Gambar */}
              <div className="relative overflow-hidden rounded-b-xl border border-slate-200 dark:border-slate-700 shadow-2xl transition-all duration-700 group-hover:shadow-amber-500/10">
                <motion.img
                  src={detail.image}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  alt="Pratinjau Antarmuka"
                />

                {/* Overlay jika status Development */}
                {detail.status === 'development' && (
                  <div className="absolute inset-0 bg-foreground/60 backdrop-blur-md flex items-center justify-center">
                    <div className="text-center p-8 border border-white/20 bg-white/10 rounded-3xl">
                      <Lock className="text-amber-500 mx-auto mb-3" size={40} />
                      <p className="text-white font-black uppercase text-xs tracking-[0.2em]">
                        Pratinjau Terkunci
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BAGIAN TEKS DESKRIPSI */}
          <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-foreground">
                Menciptakan <br />{' '}
                <span className="text-amber-500 underline decoration-slate-200 underline-offset-8">
                  Kemudahan
                </span>{' '}
                Belajar.
              </h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                {detail.description}
              </p>
            </div>

            <div className="space-y-8">
              {detail.features.map((feature, index) => (
                <div key={index++} className="flex gap-6 group">
                  <div className="mt-1 shrink-0 p-3 bg-amber-50 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500 text-amber-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="is-dark-section bg-slate-950 py-32 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
          <h3 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {detail.status === 'production'
              ? 'Siap Mencoba EduFlow?'
              : 'Nantikan Kehadirannya.'}
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {detail.status === 'production' ? (
              <a
                href={detail.url}
                target="_blank"
                className="flex items-center gap-3 px-12 py-6 bg-amber-500 text-foreground font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-amber-500/10 group"
              >
                Kunjungi Aplikasi{' '}
                <ExternalLink
                  size={18}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
            ) : (
              <div className="flex items-center gap-3 px-12 py-6 border-2 border-slate-800 text-slate-500 font-black uppercase text-xs tracking-[0.2em] cursor-not-allowed">
                <MousePointer2 size={18} /> Segera Hadir
              </div>
            )}

            <Link
              to="/karya"
              className="text-white/40 hover:text-white font-bold uppercase text-[10px] tracking-[0.4em] transition-colors inline-flex items-center gap-2"
            >
              <LayoutGrid size={14} /> Lihat Karya Lainnya
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

interface AppValueProps {
  icon: React.ReactNode
  label: string
  value: string
}

function AppValue({ icon, label, value }: AppValueProps) {
  return (
    <div className="p-12 flex flex-col items-center text-center space-y-4 group transition-colors duration-500">
      <div className="text-amber-500 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          {label}
        </p>
        <p className="text-lg font-bold text-white uppercase tracking-tight">
          {value}
        </p>
      </div>
    </div>
  )
}
