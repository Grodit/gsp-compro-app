import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

function ProcessContent() {
  return (
    <div className="min-h-[calc(100vh-40px)] bg-foreground rounded-none lg:rounded-lg mx-0 my-5 lg:m-5 select-none">
      <div className="w-full px-4 py-30">
        <div className="container max-w-7xl mx-auto space-y-16">
          <div className="text-center flex flex-col items-center gap-10 md:gap-16">
            <h2 className="text-xs md:text-lg uppercase tracking-wider text-neutral-300">
              Manifestasi Visi dalam Keanggunan Digital
            </h2>
            <p className="inline-block bg-linear-90 from-[#babad0] to-[#53628d]/80 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl max-w-4xl font-bold px-2">
              Arsitektur web kustom dengan presisi global, dirancang khusus
              untuk entitas yang mengutamakan kesempurnaan sistem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative h-full transition-all duration-300">
              <div className="absolute inset-0 animate-rotate [--start:0deg] rounded-lg bg-linear-[var(--rotate),#5ddcff,#3c67e3_43%,#171b27] blur-lg opacity-80 group-hover:opacity-100 group-hover:animation-duration-[1.5s] group-hover:hue-rotate-30 transition-all"></div>
              <div className="relative h-full p-8 rounded-xl border border-[#36425d] bg-[#3e3e3e] opacity-90 overflow-hidden transition-all duration-300">
                <div className="relative space-y6 h-full flex flex-col">
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary-foreground leading-tight ">
                      Riset Strategis, Bukan Tebakan
                    </h3>
                    <p className="lg:text-xl text-[#babad0] leading-tight">
                      Setiap proyek dimulai dengan riset mendalam tentang pasar
                      Anda, pesaing, dan psikologi pelanggan. Tanpa templat.
                      Tanpa asumsi. Hanya keputusan desain berbasis data yang
                      menghasilkan konversi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative h-full transition-all duration-300">
              <div className="absolute inset-0 animate-rotate [--start:120deg] rounded-lg bg-linear-[var(--rotate),#5ddcff,#3c67e3_43%,#171b27] blur-lg opacity-80 group-hover:opacity-100 group-hover:animation-duration-[1.5s] group-hover:hue-rotate-120 transition-all"></div>
              <div className="relative h-full p-8 rounded-xl border border-[#36425d] bg-[#3e3e3e]/90 overflow-hidden transition-all duration-300">
                <div className="relative space-y6 h-full flex flex-col">
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary-foreground leading-tight ">
                      Kolaborasi Langsung, Dedikasi Personal
                    </h3>
                    <p className="lg:text-xl text-[#babad0] leading-tight">
                      Anda berkolaborasi langsung dengan pakar tanpa perantara.
                      Setiap detail proyek Anda dikurasi secara personal
                      berdasarkan pengalaman panjang dalam membangun solusi
                      digital yang sukses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative h-full transition-all duration-300">
              <div className="absolute inset-0 animate-rotate [--start:240deg] rounded-lg bg-linear-[var(--rotate),#5ddcff,#3c67e3_43%,#171b27] blur-lg opacity-80 group-hover:opacity-100 group-hover:animation-duration-[1.5s] group-hover:hue-rotate-180 transition-all"></div>

              <div className="relative h-full p-8 rounded-xl border border-[#36425d] bg-[#3e3e3e]/90 overflow-hidden transition-all duration-300">
                <div className="relative space-y6 h-full flex flex-col">
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary-foreground leading-tight ">
                      Sinergi Estetika dan Efektivitas
                    </h3>
                    <p className="lg:text-xl text-[#babad0] leading-tight">
                      Situs web yang dirancang untuk melampaui pujian visual.
                      Fokus kami adalah menciptakan pengalaman pengguna yang
                      mulus, mengubah setiap kunjungan menjadi hasil nyata bagi
                      pertumbuhan bisnis Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-20 space-y-10">
            <p className="inline-block bg-linear-90 from-[#babad0] to-[#53628d]/80 bg-clip-text text-transparent text-3xl md:text-4xl/tight max-w-4xl font-bold px-2">
              Jika kehadiran digital Anda belum mencerminkan kualitas
              sesungguhnya dari bisnis Anda, transformasi menuju desain
              eksklusif adalah langkah strategis untuk mengonversi pandangan
              menjadi kepercayaan, dan pengunjung menjadi mitra setia.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button
                variant={'secondary'}
                className="rounded-full px-8 py-7 text-xl"
                asChild
              >
                <Link to="/">Jadwalkan Konsultasi Strategis</Link>
              </Button>
              <p className="text-sm text-neutral-400">
                Panggilan konsultasi 15 menit • Tanpa kewajiban
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProcessContent }
