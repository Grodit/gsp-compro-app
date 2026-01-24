import { ArrowRightIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

function WorkContent() {
  const containerRef = useRef(null)

  // 1. Progress Scroll
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // 2. Animasi Background (Subtle Parallax)
  const scale = useTransform(smoothProgress, [0, 1], [1.05, 1.15])
  const yBg = useTransform(smoothProgress, [0, 1], ['-5%', '5%'])

  // 3. Animasi Teks (Floating Parallax)
  // Membuat teks terasa mengambang di depan gambar
  const yText = useTransform(smoothProgress, [0, 1], [0, -30])

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 12 }, // Jarak geser panah
  }

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-start bg-foreground h-screen w-full p-10 md:p-15 overflow-hidden"
    >
      {/* Container Gambar dengan Overlay Gradien agar teks lebih terbaca */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ scale, y: yBg }}
          className="relative w-full h-full"
        >
          <img
            src="/assets/images/example-karya-1.png"
            alt="Portfolio Background"
            className="w-full h-full object-cover object-center brightness-[0.35]"
          />
          {/* Vignette Overlay untuk menambah kedalaman visual */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-foreground/50" />
        </motion.div>
      </div>

      {/* Konten Utama dengan Animasi Reveal */}
      <motion.div
        style={{ y: yText }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full flex flex-1 flex-col items-start justify-center gap-6"
      >
        <div className="space-y-2">
          <motion.h1 className="text-4xl md:text-7xl text-primary-foreground font-bold uppercase tracking-tighter">
            Karya
          </motion.h1>
          <div className="h-1 w-20 bg-amber-600 rounded-full" />
        </div>

        <h3 className="text-2xl md:text-5xl text-primary-foreground max-w-[20ch] leading-tight">
          Wujudkan visi dengan{' '}
          <span className="italic text-amber-500 font-serif">
            estetika progresif
          </span>{' '}
          di Grodit Studio.
        </h3>

        <div className="mt-12 text-center sm:text-left w-full">
          <Button
            variant="ghost"
            className="group relative h-auto p-0 hover:bg-transparent"
            asChild
          >
            <Link to="/karya">
              {/* 2. Ubah div pembungkus menjadi motion.div 
          Tambahkan 'initial' dan 'whileHover' di sini sebagai satu kesatuan GROUP
        */}
              <motion.div
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-6 py-4 pr-6 transition-all duration-500"
              >
                <span className="text-2xl md:text-3xl font-medium text-primary-foreground tracking-tight transition-all duration-500 group-hover:text-amber-500 z-1">
                  Jelajahi Karya
                </span>

                {/* 3. Hubungkan ikon dengan variants tadi.
            Hapus 'whileHover' yang ada di sini sebelumnya.
          */}
                <motion.div
                  variants={arrowVariants}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center"
                >
                  <HugeiconsIcon
                    icon={ArrowRightIcon}
                    className="size-8 md:size-10 text-amber-600 transition-transform group-hover:scale-110"
                  />
                </motion.div>

                {/* Garis Bawah */}
                <div className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary-foreground/10" />
                  <div className="absolute inset-0 bg-amber-600 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0" />
                </div>
              </motion.div>
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Indikator Scroll di pojok bawah (Opsional) */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 vertical-text rotate-90 origin-right">
          Scroll to explore
        </div>
      </div>
    </section>
  )
}

export { WorkContent }
