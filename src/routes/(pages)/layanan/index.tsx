import { createFileRoute, Link, useLayoutEffect } from '@tanstack/react-router'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/layanan/')({
  head: () => ({
    meta: [{ title: getTitleHead('Layanan Sistem & Web') }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const services = [
    {
      id: '01',
      title: 'Sistem Dinamis',
      sub: 'Scalable Web Applications',
      desc: 'Pengembangan sistem berbasis data yang kompleks seperti Dashboard Admin, E-commerce, hingga platform SaaS. Kami fokus pada arsitektur yang kuat dan performa backend yang stabil.',
      tags: [
        'React/Next.js',
        'API Integration',
        'Database Design',
        'Auth System',
      ],
    },
    {
      id: '02',
      title: 'Sistem Statis',
      sub: 'High Performance Landing Pages',
      desc: 'Pembuatan website statis modern yang super cepat dan aman. Cocok untuk Landing Page produk, Company Profile, atau Portofolio yang memerlukan optimasi SEO maksimal.',
      tags: [
        'Static Site Gen',
        'Edge Delivery',
        'SEO Optimized',
        'Tailwind CSS',
      ],
    },
    {
      id: '03',
      title: 'UI/UX & Re-Design',
      sub: 'Digital Experience',
      desc: 'Transformasi ide bisnis menjadi desain antarmuka yang intuitif. Kami merancang alur pengguna (user journey) yang meminimalisir friksi dan meningkatkan konversi.',
      tags: ['Prototyping', 'User Research', 'Design System', 'Responsive'],
    },
  ]

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden select-none">
      {/* 1. HERO SECTION - Tech Focused */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-12 bg-amber-500"></span>
            <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px]">
              Technology & Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] text-foreground uppercase">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-700">
              DIGITAL LOGIC.
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-500 mt-6 leading-relaxed font-light">
            Dari landing page yang ringan hingga sistem manajemen data yang
            kompleks. Kami membangun infrastruktur digital yang mendukung
            pertumbuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <div
              key={index++}
              className="group relative bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-slate-100 hover:bg-white hover:border-amber-200 transition-all duration-500"
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* 1. Header Area: ID, Sub, & Mobile Indicator */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-start lg:justify-start">
                  <div>
                    <span className="block text-5xl md:text-7xl font-black text-slate-200 group-hover:text-amber-500/20 transition-colors">
                      {service.id}
                    </span>
                    <span className="block mt-2 md:mt-4 text-amber-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">
                      {service.sub}
                    </span>
                  </div>

                  {/* Indikator hanya muncul di samping angka saat layar Mobile/Tablet */}
                  <div className="lg:hidden flex flex-col items-end animate-fade-in">
                    <span className="text-3xl font-light text-slate-300 font-mono leading-none">
                      {'</>'}
                    </span>
                    <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      Verified
                    </span>
                  </div>
                </div>

                {/* 2. Main Content */}
                <div className="lg:col-span-6">
                  <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-slate-200 text-slate-400 text-[9px] md:text-[10px] font-mono uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Desktop Indicator Area */}
                <div className="hidden lg:col-span-3 lg:flex lg:justify-end lg:items-center">
                  <div className="relative flex flex-col items-end group-hover:-translate-x-2.5 transition-transform duration-500">
                    <span className="text-6xl font-light text-slate-200 group-hover:text-amber-500/20 leading-none font-mono">
                      {'</>'}
                    </span>
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em] mt-2">
                      Verified Code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TECH STACK & METHODOLOGY */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-950 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8 tracking-tighter">
                METODE KAMI.
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Kami tidak hanya menulis baris kode. Kami membangun solusi
                menggunakan standar industri terbaru untuk memastikan sistem
                Anda aman, cepat, dan mudah dirawat di masa depan.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-amber-500 font-bold mb-2">Modern Stack</h4>
                <p className="text-sm text-slate-500">
                  Menggunakan teknologi berbasis JavaScript/TypeScript yang
                  modern dan efisien.
                </p>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold mb-2">Clean Code</h4>
                <p className="text-sm text-slate-500">
                  Struktur kode yang rapi untuk mempermudah pengembangan fitur
                  di masa depan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING */}
      <section className="pb-32 pt-10 px-6 md:px-12 max-w-7xl mx-auto">
        <h3 className="text-sm font-bold tracking-[0.3em] text-amber-600 uppercase mb-8 text-center md:text-left">
          Diskusikan Projek Anda
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-3xl md:text-5xl font-medium text-slate-400 max-w-3xl leading-tight text-center md:text-left">
            Bawa bisnis Anda ke level berikutnya dengan{' '}
            <span className="text-foreground underline decoration-amber-500/30">
              arsitektur sistem
            </span>{' '}
            yang tepat.
          </p>
          <Link
            to="/"
            className="px-10 py-5 bg-amber-500 text-amber-950 rounded-full font-black hover:bg-foreground hover:text-white transition-all whitespace-nowrap active:scale-95"
          >
            Kirim Brief Sistem
          </Link>
        </div>
      </section>
    </main>
  )
}
