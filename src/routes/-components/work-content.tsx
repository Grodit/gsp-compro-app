'use client'

import { ArrowRightIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
// Menggunakan impor terbaru sesuai contoh Anda
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

function WorkContent() {
  const containerRef = useRef(null)

  // 1. Tangkap progress scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = bagian atas elemen menyentuh bawah layar
    // "end start" = bagian bawah elemen meninggalkan atas layar
    offset: ['start end', 'end start'],
  })

  // 2. Transformasi progress (0 sampai 1) menjadi Scale dan Y
  // Gambar membesar dari 1x ke 1.3x
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  // Gambar bergerak ke atas sejauh 150px (efek parallax)
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-start bg-foreground h-screen w-full p-10 md:p-15 overflow-hidden"
    >
      <div className="absolute -inset-1 overflow-hidden">
        {/* 3. Gunakan motion.img dan hubungkan dengan style animasi */}
        <motion.img
          src="/assets/images/example-karya-1.png"
          alt="images"
          style={{
            scale: scale,
            y: y,
          }}
          className="w-full h-full object-cover object-center brightness-50"
        />
      </div>

      {/* Konten teks tetap di atas (relative) */}
      <div className="relative w-full flex flex-1 flex-col items-start justify-center gap-4">
        <h1 className="text-5xl md:text-6xl text-primary-foreground font-semibold uppercase tracking-wide">
          Karya
        </h1>
        <h3 className="text-3xl md:text-4xl text-primary-foreground">
          Wujudkan visi dengan{' '}
          <strong className="capitalize text-amber-600">
            estetika progresif
          </strong>{' '}
          di Grodit Studio.
        </h3>

        <div className="mt-40 text-center sm:text-left w-full">
          <Button
            variant="ghost"
            className="group relative h-auto p-0 hover:bg-transparent"
          >
            <Link to="/karya">
              <div className="relative flex items-center gap-4 py-4 pr-4 transition-all duration-500">
                <span className="text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight transition-all duration-500 group-hover:pr-8 z-1">
                  Jelajahi Karya
                </span>
                <div className="absolute -right-2 top-5 opacity-0 transition-all duration-500 transform -translate-x-20 group-hover:opacity-100 group-hover:translate-x-0">
                  <HugeiconsIcon
                    icon={ArrowRightIcon}
                    className="size-8 md:size-10 text-amber-600"
                  />
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary-foreground/20" />
                  <div className="absolute inset-0 bg-amber-600 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
                </div>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { WorkContent }
