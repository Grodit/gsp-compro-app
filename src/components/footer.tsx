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
      <div className="h-dvh relative" aria-hidden="true"></div>
      <footer className="sticky bg-foreground py-40 space-y-30 -bottom-160 md:-bottom-130">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:mt-10">
          <div className="grid gap-8 items-center place-items-center mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold text-center text-pretty max-w-[16ch] text-white">
              Maksimalkan Efisiensi dan Profitabilitas Investasi Anda dengan
              Desain Web di Indonesia
            </h2>
            <p className="max-w-[60ch] text-center text-pretty font-medium text-xs sm:text-sm text-neutral-400">
              Bisnis profesional membutuhkan situs web profesional. Jika tidak,
              Anda akan terlihat tidak serius dengan kesuksesan Anda.
            </p>
          </div>
        </div>
        <div className="h-px bg-border opacity-50 w-full"></div>
        <div className="container mx-auto px-4 sm:px-8 space-y-12 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
            <div className="shrink-0">
              <img
                src="/public/assets/logos/logoLongPutih.svg"
                alt="logo"
                className="w-50 h-auto"
              />
            </div>
            <div className="grid gap-10 lg:gap-4 justify-center">
              <p className="text-neutral-400 text-wrap">
                Pondok Kacang Prima, Blok C2/3, Jl. Bougenvile, Pondok Kacang
                Timur, Pondok Aren, Tangerang Selatan
              </p>
              <p className="text-neutral-400">groditstudio@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-8 flex flex-col gap-10 sm:flex-row justify-between items-center">
          <ul className="flex gap-8 text-neutral-300">
            <li>
              <Link to="/">
                <HugeiconsIcon icon={InstagramIcon} className="size-8" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <HugeiconsIcon icon={YoutubeIcon} className="size-8" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <HugeiconsIcon icon={TiktokIcon} className="size-8" />
              </Link>
            </li>
          </ul>
          <p className="text-sm text-neutral-400 text-pretty text-right">
            © 2026 Grodit Studio Production
          </p>
        </div>
      </footer>
    </div>
  )
}

export { Footer }
