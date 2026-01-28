import { createFileRoute, Link, useLayoutEffect } from '@tanstack/react-router'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/portofolio/')({
  head: () => ({
    meta: [{ title: getTitleHead('Portofolio Strategis') }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const portfolio = [
    {
      id: 'kementerian-pendidikan-data',
      client: 'Kementerian Pendidikan',
      project: 'Sistem Data Terpadu',
      industry: 'Sektor Publik',
      year: '2025',
      status: 'production' as 'production' | 'development',
      description:
        'Membangun infrastruktur data nasional yang menghubungkan ribuan titik institusi secara real-time.',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'nexus-logistic-dashboard',
      client: 'Nexus Logistic Group',
      project: 'Fleet Management Dashboard',
      industry: 'Logistik',
      year: '2026',
      status: 'development' as 'production' | 'development',
      description:
        'Optimalisasi rute dan pemantauan armada logistik dengan latensi rendah untuk efisiensi operasional.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'aura-coffee-pos',
      client: 'Aura Coffee & Roastery',
      project: 'Retail Inventory & POS',
      industry: 'F&B Business',
      year: '2025',
      status: 'production' as 'production' | 'development',
      description:
        'Transformasi digital operasional ritel dengan sistem inventori cerdas dan integrasi pembayaran multi-kanal.',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'urban-mobility-transit',
      client: 'Urban Mobility Corp',
      project: 'Smart Transit System',
      industry: 'Transportation',
      year: '2026',
      status: 'development' as 'production' | 'development',
      description:
        'Analisis prediktif untuk jadwal transportasi publik berbasis kepadatan penumpang real-time.',
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    },
  ]

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden select-none">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-12 bg-amber-500"></span>
            <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px]">
              Portofolio Terpilih
            </span>
          </div>

          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] text-foreground uppercase">
            Mitra <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700">
              Strategis.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12">
            <p className="max-w-xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
              Kami membantu bisnis skala besar bertransformasi melalui solusi
              digital yang presisi, skalabel, dan berorientasi pada hasil nyata.
            </p>

            <div className="group relative flex flex-col border-l-4 border-amber-500 pl-8 py-2">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none group-hover:text-amber-600 transition-colors duration-500">
                  42
                </span>
                <span className="text-amber-500 font-black text-2xl md:text-3xl">
                  +
                </span>
              </div>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-900 mt-2">
                Solusi Terakreditasi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO GRID */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
          {portfolio.map((item, index) => {
            const isSoon = item.status === 'development'

            return (
              <div
                key={item.id}
                className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''} ${isSoon ? 'opacity-85' : ''}`}
              >
                {/* Box Gambar */}
                <Link
                  to="/portofolio/$portofolioId"
                  params={{ portofolioId: item.id }}
                  disabled={isSoon}
                  className="relative aspect-square overflow-hidden rounded-[3rem] bg-slate-100 border border-slate-100 transition-all duration-1000 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-4"
                >
                  <img
                    src={item.image}
                    alt={item.client}
                    className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 ${isSoon ? 'blur-md' : ''}`}
                  />

                  {isSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10 backdrop-blur-[2px]">
                      <span className="px-6 py-2 bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        Segera Hadir
                      </span>
                    </div>
                  )}
                </Link>

                {/* Detail Teks */}
                <div className="mt-10 px-2 block">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-600 shadow-xl transition-transform duration-500 group-hover:scale-[2.5]"></span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {item.industry} — {item.year}
                      </span>
                    </div>

                    {/* Status Badge (Dipindah ke Luar) */}
                    <div
                      className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${
                        !isSoon
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                          : 'bg-amber-50 border-amber-100 text-amber-600'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${!isSoon ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}
                      />
                      {isSoon ? 'Segera Hadir' : 'Sudah Rilis'}
                    </div>
                  </div>

                  <Link
                    to="/portofolio/$portofolioId"
                    params={{ portofolioId: item.id }}
                    disabled={isSoon}
                    className="group-text"
                  >
                    <h3 className="text-xs font-black text-amber-600 uppercase tracking-[0.3em] mb-4">
                      {item.client}
                    </h3>

                    <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[0.95] mb-6 transition-all duration-500 group-hover:tracking-tighter">
                      {item.project}
                    </h2>

                    <p className="text-slate-500 text-lg leading-relaxed font-light max-w-md mb-8">
                      {item.description}
                    </p>

                    {!isSoon ? (
                      <div className="inline-flex flex-col gap-2 w-fit overflow-hidden">
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground group-hover:text-amber-600 transition-colors duration-300">
                            Lihat Studi Kasus
                          </span>
                          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2 group-hover:text-amber-600">
                            →
                          </span>
                        </div>
                        <div className="relative h-0.5 w-full bg-slate-200">
                          <div className="absolute inset-0 w-full h-full bg-amber-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 italic">
                        Tahap Pengembangan
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. SIGNATURE CTA */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center md:text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full group-hover:bg-amber-500/20 transition-all duration-1000"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.85] uppercase mb-8 tracking-tighter">
                Siap Membangun <br />{' '}
                <span className="text-amber-500">Standar Baru?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Mari diskusikan bagaimana solusi teknologi kami dapat akselerasi
                pertumbuhan bisnis Anda ke level berikutnya.
              </p>
            </div>
            <Link
              to="/konsultasi"
              className="shrink-0 px-12 py-6 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Mulai Konsultasi
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
