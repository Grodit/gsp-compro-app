import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const STEPS = [
  {
    title: 'Riset Strategis, Bukan Tebakan',
    description:
      'Setiap proyek dimulai dengan riset mendalam tentang pasar, pesaing, dan psikologi pelanggan. Tanpa asumsi. Hanya keputusan desain berbasis data.',
    rotation: '[--start:0deg]',
    label: '01 / ANALYSIS',
  },
  {
    title: 'Kolaborasi Langsung, Dedikasi Personal',
    description:
      'Anda berkolaborasi langsung dengan pakar tanpa perantara. Setiap detail dikurasi secara personal berdasarkan pengalaman panjang solusi digital.',
    rotation: '[--start:120deg]',
    label: '02 / COLLABORATION',
  },
  {
    title: 'Sinergi Estetika dan Efektivitas',
    description:
      'Situs web yang dirancang untuk melampaui pujian visual. Fokus kami adalah menciptakan pengalaman pengguna yang mulus dan menghasilkan konversi nyata.',
    rotation: '[--start:240deg]',
    label: '03 / SYNERGY',
  },
]

function ProcessContent() {
  return (
    <div className="min-h-[calc(100vh-40px)] bg-black rounded-none lg:rounded-[2rem] mx-0 my-5 lg:m-5 select-none overflow-hidden relative border border-white/5">
      {/* Background Decor - Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-6 py-24 md:py-32 relative z-10">
        <div className="container max-w-7xl mx-auto space-y-24">
          {/* Header Section */}
          <div className="text-center flex flex-col items-center gap-6">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-400 font-medium">
              The Methodology
            </span>
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 font-light">
              Manifestasi Visi dalam Keanggunan Digital
            </h2>
            <p className="bg-linear-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl max-w-5xl font-bold leading-[1.1] tracking-tight">
              Arsitektur kustom dengan presisi global.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {STEPS.map((step, index) => (
              <div key={index++} className="group relative h-full">
                {/* Subtle Animated Border */}
                <div
                  className={`absolute -inset-px animate-rotate ${step.rotation} rounded-2xl bg-linear-to-r from-blue-500/50 via-purple-500/50 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* Main Card Content */}
                <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-md flex flex-col gap-8 transition-all duration-500 group-hover:bg-[#121212]/90 group-hover:-translate-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest text-blue-400 font-bold">
                      {step.label}
                    </span>
                    <div className="w-8 h-px bg-white/20 mt-2" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed font-light text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-20 space-y-12">
            <div className="max-w-4xl mx-auto">
              <p className="bg-linear-to-r from-[#babad0] via-white to-[#babad0] bg-clip-text text-transparent text-2xl md:text-4xl font-medium leading-relaxed italic">
                "Ubah setiap kunjungan menjadi kepercayaan, dan setiap klik
                menjadi kemitraan setia."
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button
                variant="secondary"
                className="rounded-full px-10 py-8 text-xl font-semibold bg-white text-black hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                asChild
              >
                <Link to="/">Jadwalkan Konsultasi Strategis</Link>
              </Button>
              <div className="flex items-center gap-3 text-sm text-neutral-500 uppercase tracking-widest font-light">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                15 Menit • Sesi Strategi Gratis
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProcessContent }
