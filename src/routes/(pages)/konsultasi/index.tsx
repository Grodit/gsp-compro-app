import { createFileRoute, useLayoutEffect } from '@tanstack/react-router'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/konsultasi/')({
  head: () => ({
    meta: [{ title: getTitleHead('Konsultasi - Bangun Sistem Kustom') }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  // State sederhana untuk form
  const [isSubmitting, setIsSubmitting] = useState(false)

  const channels = [
    {
      title: 'WhatsApp',
      label: 'Respon Cepat',
      val: '+62 812 8502 8666',
      icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'bg-green-500',
    },
    {
      title: 'Email Official',
      label: 'Diskusi Formal',
      val: 'groditstudio@gmail.com',
      icon: <Mail className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'bg-amber-500',
    },
  ]

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden pb-12 select-none">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-8 md:w-12 bg-amber-500"></span>
            <span className="text-amber-600 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[11px]">
              Eksklusif & Terbatas
            </span>
          </div>

          {/* Penyesuaian ukuran font mobile agar tidak pecah */}
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] md:leading-[0.8] text-foreground uppercase italic wrap-break-word">
            MULAI <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700 not-italic">
              DISKUSI.
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mt-8 md:mt-12 pt-8">
            <p className="max-w-xl text-base md:text-xl text-slate-500 leading-relaxed font-light">
              Punya ide besar atau masalah sistem yang kompleks? Kami
              menyediakan waktu khusus untuk membedah kebutuhan bisnis Anda
              secara mendalam.
            </p>

            {/* STATS: Disesuaikan agar rapi di mobile */}
            <div className="group relative flex flex-col border-l-4 border-amber-500 pl-6 md:pl-8 py-1 md:py-2 transition-all duration-500 hover:pl-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-none transition-all duration-500 group-hover:text-amber-600">
                  24
                </span>
                <span className="text-amber-500 font-black text-xl md:text-3xl animate-pulse">
                  /7
                </span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground">
                  Support Teknis
                </span>
                <p className="text-[9px] md:text-[10px] font-medium text-slate-400 max-w-45 md:max-w-48 leading-tight mt-1">
                  Pendampingan strategis untuk ekosistem digital tetap prima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENHANCED CTA CHANNELS */}
      <section className="py-8 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {channels.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-slate-50 border border-slate-100 transition-all duration-700 hover:bg-slate-950 hover:scale-[1.01] overflow-hidden"
            >
              {/* Background Text: Sembunyikan di mobile, muncul di desktop */}
              <div className="hidden md:block absolute -bottom-10 -right-10 text-[10rem] font-black text-slate-200/20 leading-none pointer-events-none group-hover:text-amber-500/10 transition-colors duration-700 uppercase italic">
                {item.title.split(' ')[0]}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12 md:mb-16">
                  <div
                    className={`${item.color} w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-100 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all">
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-amber-500 group-hover:bg-white"></span>
                    </span>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-foreground group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl md:text-5xl font-black text-foreground mb-3 tracking-tighter group-hover:text-white transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-lg text-slate-500 mb-6 md:mb-8 group-hover:text-slate-400 transition-colors max-w-xs font-light">
                    Terhubung langsung dengan tim ahli kami sekarang.
                  </p>

                  <div className="flex items-center gap-3 md:gap-4 mt-4">
                    <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-amber-600 group-hover:text-amber-400 transition-colors">
                      {item.val}
                    </span>
                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-slate-800 transition-colors"></div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECT BRIEF FORM */}
      <section className="py-16 px-5 md:px-12 max-w-7xl mx-auto">
        {/* Container Card Utama */}
        <div className="relative bg-slate-50 border border-slate-100 rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 overflow-hidden">
          <div className="relative z-10 flex flex-col gap-16">
            {/* Header Form */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-slate-50 bg-slate-200"
                      ></div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">
                    Join 50+ Enterprises
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-foreground">
                  Bawa Ide <br />
                  <span className="text-amber-500 italic bg-clip-text">
                    Menjadi Nyata.
                  </span>
                </h2>
              </div>
              <p className="max-w-xs text-slate-500 font-medium text-sm leading-relaxed border-l-2 border-amber-500 pl-6">
                Isi brief singkat di bawah. Tim analis kami akan meninjau
                kelayakan teknis proyek Anda.
              </p>
            </div>

            {/* Form Area */}
            <form
              className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-10"
              onSubmit={(e) => {
                e.preventDefault()
                setIsSubmitting(true)
              }}
            >
              {/* Kolom Kiri: Identitas */}
              <div className="md:col-span-5 space-y-8">
                {[
                  {
                    id: 'full-name',
                    label: 'Nama Lengkap',
                    type: 'text',
                    placeholder: 'John Doe',
                  },
                  {
                    id: 'business-email',
                    label: 'Email Bisnis',
                    type: 'email',
                    placeholder: 'john@company.com',
                  },
                  {
                    id: 'subject',
                    label: 'Apa yang ingin dibangun?',
                    type: 'text',
                    placeholder: 'E-Commerce / ERP / App',
                  },
                ].map((field) => (
                  <div
                    key={field.id}
                    className="group relative flex flex-col gap-3"
                  >
                    <label
                      htmlFor={field.id}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-amber-600 transition-colors"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="bg-white border border-slate-200 rounded-2xl px-6 py-5 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5 outline-none text-lg font-semibold transition-all placeholder:text-slate-300 text-slate-900 shadow-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Kolom Kanan: Detail Proyek */}
              <div className="md:col-span-7">
                <div className="group relative flex flex-col gap-3 h-full">
                  <label
                    htmlFor="project-detail"
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-amber-600 transition-colors"
                  >
                    Detail Project Brief
                  </label>
                  <textarea
                    id="project-detail"
                    placeholder="Deskripsikan masalah teknis atau fitur utama yang Anda butuhkan..."
                    className="w-full h-full min-h-75 md:min-h-full bg-white border border-slate-200 rounded-[2rem] p-8 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5 outline-none text-lg font-medium transition-all resize-none placeholder:text-slate-300 text-slate-900 shadow-sm"
                  ></textarea>
                </div>
              </div>

              {/* Action Button Area - Sekarang di luar textarea */}
              <div className="md:col-span-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200/60">
                <p className="text-xs text-slate-400 max-w-sm text-center md:text-left">
                  Dengan mengirimkan brief ini, Anda setuju untuk dihubungi oleh
                  tim teknis kami via Email atau WhatsApp.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto group relative flex items-center justify-center gap-6 bg-slate-950 text-white pl-10 pr-4 py-4 rounded-full overflow-hidden transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-2xl"
                >
                  <span className="relative z-10 font-black uppercase tracking-[0.2em] text-[12px]">
                    {isSubmitting ? 'Mengirim Brief...' : 'Mulai Kolaborasi'}
                  </span>
                  <div className="relative z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. STEP BY STEP (PROCESS) */}
      <section className="py-16 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">
                Proses <br />
                <span className="text-amber-500 italic">Kolaborasi</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light">
                Langkah sederhana untuk mewujudkan infrastruktur digital yang
                skalabel.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  n: '01',
                  t: 'Discovery Call',
                  d: 'Menganalisis kebutuhan bisnis dan hambatan teknologi yang ada.',
                },
                {
                  n: '02',
                  t: 'Strategic Blueprint',
                  d: 'Menyusun roadmap arsitektur sistem yang paling efisien.',
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 md:gap-6">
                  <span className="text-3xl md:text-4xl font-black text-amber-500/30 font-mono leading-none">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-white font-bold mb-1 md:mb-2 uppercase tracking-widest text-[11px] md:text-sm">
                      {step.t}
                    </h4>
                    <p className="text-slate-500 text-[11px] md:text-sm leading-relaxed">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
