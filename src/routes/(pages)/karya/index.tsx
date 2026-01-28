import { createFileRoute, Link, useLayoutEffect } from '@tanstack/react-router'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/karya/')({
  head: () => ({
    meta: [{ title: getTitleHead('Karya - Showcase Sistem') }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const projects = [
    {
      id: 'eduflow-platform',
      title: 'EduFlow Platform',
      category: 'Sistem Dinamis',
      status: 'production' as 'production' | 'development',
      desc: 'Sistem manajemen pembelajaran (LMS) dengan fitur real-time analytics untuk institusi pendidikan.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'glow-aesthetics',
      title: 'Glow Aesthetics',
      category: 'Sistem Statis',
      status: 'production' as 'production' | 'development',
      desc: 'Landing page premium untuk klinik kecantikan dengan optimasi Core Web Vitals dan SEO.',
      image:
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'inventrack-pro',
      title: 'InvenTrack Pro',
      category: 'Sistem Dinamis',
      status: 'development' as 'production' | 'development',
      desc: 'Dashboard manajemen stok barang terintegrasi dengan sistem POS dan notifikasi otomatis.',
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'fintech-nexus',
      title: 'Fintech Nexus',
      category: 'Enterprise Solution',
      status: 'development' as 'production' | 'development',
      desc: 'Sistem enkripsi transaksi tingkat tinggi untuk keamanan perbankan digital masa depan.',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden pb-24 select-none">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-12 bg-amber-500"></span>
            <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px]">
              Showcase Sistem Terbaik
            </span>
          </div>

          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] text-foreground uppercase">
            Karya <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700">
              Terpilih.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 ">
            <p className="max-w-xl text-lg text-slate-500 leading-relaxed font-light">
              Eksplorasi bagaimana kami membantu bisnis bertransformasi melalui
              solusi digital yang presisi, menggabungkan performa tinggi dengan
              estetika visual yang modern.
            </p>

            <div className="group relative flex flex-col border-l-4 border-amber-500 pl-8 py-2">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-amber-600 transition-colors duration-500">
                  12
                </span>
                <span className="text-amber-500 font-black text-2xl md:text-3xl">
                  +
                </span>
              </div>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-900 mt-2">
                Sistem Kritikal Aktif
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT GRID */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto min-h-150">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-16 md:gap-y-32">
          {projects.map((project) => {
            const isSoon = project.status === 'development'

            return (
              <div
                key={project.id}
                className={`group flex flex-col transition-all duration-700 ${isSoon ? 'opacity-80' : ''}`}
              >
                {/* Box Gambar */}
                <Link
                  to="/karya/$karyaId"
                  params={{ karyaId: project.id }}
                  disabled={isSoon}
                  className="relative aspect-16/11 overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 group-hover:border-amber-200 transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(245,158,11,0.2)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-110 ${isSoon ? 'grayscale blur-md' : 'grayscale-[0.2] group-hover:grayscale-0'}`}
                  />

                  {isSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[2px]">
                      <span className="px-6 py-2 bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        Segera Hadir
                      </span>
                    </div>
                  )}

                  {!isSoon && (
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-amber-950 shadow-2xl">
                        <span className="text-2xl font-bold">↗</span>
                      </div>
                    </div>
                  )}
                </Link>

                {/* Konten Teks */}
                <Link
                  to="/karya/$karyaId"
                  params={{ karyaId: project.id }}
                  disabled={isSoon}
                  className="mt-8 px-4 block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">
                        {project.category}
                      </span>
                      <span className="h-px w-8 bg-slate-200"></span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {isSoon ? 'TBA' : '2026'}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div
                      className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${
                        project.status === 'production'
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                          : 'bg-amber-50 border-amber-100 text-amber-600'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${project.status === 'production' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}
                      ></span>
                      {project.status === 'production'
                        ? 'Sudah Rilis'
                        : 'Pengembangan'}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 text-slate-950 group-hover:text-amber-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 text-base font-light leading-relaxed max-w-md mb-8">
                    {project.desc}
                  </p>

                  {!isSoon ? (
                    <div className="inline-flex flex-col gap-2 w-fit overflow-hidden">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest text-slate-950 transition-colors duration-300 group-hover:text-amber-600">
                          Lihat Detail Projek
                        </span>
                      </div>
                      <div className="relative h-0.5 w-full bg-slate-200">
                        <div className="absolute inset-0 bg-amber-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 italic">
                        Tahap Pengembangan
                      </span>
                    </div>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="group relative rounded-[4rem] bg-slate-950 p-12 md:p-24 overflow-hidden text-center md:text-left">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full group-hover:bg-amber-500/20 transition-all duration-1000"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                Butuh Sistem <br />{' '}
                <span className="text-amber-500 italic">Custom?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Tim kami siap membantu Anda membangun infrastruktur digital yang
                skalabel dan menginspirasi bisnis Anda ke level berikutnya.
              </p>
            </div>
            <Link
              to="/"
              className="shrink-0 px-16 py-6 bg-white text-slate-950 rounded-full font-black text-sm uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Mulai Konsultasi
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
