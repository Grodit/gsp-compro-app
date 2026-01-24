import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

function HeroContent() {
  const [now, setNow] = useState(dayjs())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs())
    }, 60000) // Update setiap menit sudah cukup untuk tanggal

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-[calc(100vh-40px)] flex flex-col relative overflow-hidden bg-background select-none">
      {/* Background Decor - Garis halus khas desain arsitektur */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-px h-full bg-border" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-border" />
      </div>

      <div className="mx-auto w-full grow flex flex-col relative z-10">
        <div className="flex flex-col grow">
          {/* Bagian Atas - Utility Bar */}
          <div className="py-6 border-b border-border/50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                  {now.format('dddd, MMMM DD')}
                </span>
              </div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 text-center">
                Solusi Digital Eksklusif • Tangerang Selatan, ID
              </p>
            </div>
          </div>

          {/* Bagian Tengah (Headline) - The Masterpiece */}
          <div className="flex flex-col items-center justify-center grow text-center px-4">
            <div className="space-y-2 md:space-y-4">
              <h1 className="flex flex-col text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] select-none">
                <span className="bg-linear-to-r from-amber-500 to-amber-800 bg-clip-text text-transparent">
                  BANGUN.
                </span>
                <span className="bg-linear-to-r from-neutral-500 to-neutral-800 bg-clip-text text-transparent">
                  LUNCURKAN.
                </span>
                <span className="relative inline-block">
                  SKALAKAN.
                  {/* Aksen titik fokus */}
                  <span className="absolute -right-4 md:-right-8 bottom-4 md:bottom-8 w-3 md:w-6 h-3 md:h-6 bg-amber-600 rounded-full animate-pulse" />
                </span>
              </h1>
            </div>

            <p className="mt-12 max-w-[40ch] text-sm md:text-base text-neutral-400 uppercase tracking-[0.3em] font-light leading-relaxed">
              Transformasi ide menjadi{' '}
              <span className="text-amber-600 font-medium">
                realitas digital
              </span>{' '}
              dengan standar kualitas tanpa kompromi.
            </p>
          </div>

          {/* Bagian Bawah - Footer Info */}
          <div className="border-t border-border/50 py-10 px-6 lg:px-12">
            <div className="container mx-auto flex justify-between items-end">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Lokasi
                </p>
                <p className="text-xs md:text-sm uppercase font-bold tracking-tighter">
                  Tangerang Selatan <span className="text-neutral-600">/</span>{' '}
                  Indonesia
                </p>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Direksi Kreatif
                </p>
                <p className="text-xs md:text-sm uppercase font-bold tracking-tighter group cursor-default">
                  Designed by{' '}
                  <span className="text-amber-600 group-hover:text-white transition-colors duration-300">
                    Raditya Dwi
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroContent }
