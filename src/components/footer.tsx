import {
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'

function Footer() {
  return (
    <div className="mt-[-100dvh]">
      {/* Spacer untuk efek reveal sticky */}
      <div className="h-dvh relative" aria-hidden="true"></div>

      <footer className="sticky bg-foreground py-24 md:py-32 space-y-20 -bottom-160 md:-bottom-130">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center max-w-5xl mx-auto text-center space-y-8">
            {/* Judul dengan gradasi yang lebih halus dan tracking-tight */}
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-pretty bg-linear-to-r from-amber-500 to-amber-800 bg-clip-text text-transparent leading-[1.1]">
              Maksimalkan Efisiensi dan Profitabilitas Investasi Anda
            </h2>

            {/* Deskripsi dengan line-height yang lebih lega */}
            <p className="max-w-[55ch] text-balance font-light text-sm md:text-lg text-neutral-400 leading-relaxed">
              Bisnis profesional membutuhkan situs web profesional. Jangan
              biarkan potensi Anda terhambat oleh kehadiran digital yang kurang
              maksimal.
            </p>
          </div>
        </div>

        {/* Divider tipis dengan opacity rendah */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent opacity-30 w-full"></div>

        <div className="container mx-auto px-6 lg:px-12 space-y-16">
          {/* Baris Logo dan Alamat */}
          {/* Baris Logo dan Alamat */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-12">
            {/* Bagian Logo: Tambahkan flex dan justify-center untuk mobile */}
            <div className="w-full md:w-auto flex justify-center md:justify-start shrink-0 group">
              <img
                src="/assets/logos/logoLongPutih.svg"
                alt="Grodit Studio"
                className="w-35 md:w-52 h-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Bagian Teks: Tambahkan text-center untuk mobile agar selaras dengan logo */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm lg:text-base text-center md:text-left">
              <div className="max-w-[30ch] mx-auto md:mx-0">
                <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-[10px]">
                  Alamat
                </h4>
                <p className="text-neutral-400 leading-relaxed font-light">
                  Pondok Kacang Prima, Blok C2/3, Jl. Bougenvile, Pondok Aren,
                  Tangerang Selatan
                </p>
              </div>
              <div className="mx-auto md:mx-0">
                <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-[10px]">
                  Email kami
                </h4>
                <a
                  href="mailto:groditstudio@gmail.com"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
                >
                  groditstudio@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Baris Sosial Media dan Copyright */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <ul className="flex gap-6 items-center">
              {[
                { icon: InstagramIcon, to: '/' },
                { icon: YoutubeIcon, to: '/' },
                { icon: TiktokIcon, to: '/' },
              ].map((item, index) => (
                <li key={index++}>
                  <Link
                    to={item.to}
                    className="text-neutral-400 hover:text-white transition-all duration-300 hover:-translate-y-1 block"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className="size-6 md:size-7"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
              © 2026 Grodit Studio Production — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export { Footer }
