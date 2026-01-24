import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

// Sub-komponen untuk Kartu Portofolio agar kode tidak berulang
function PortfolioCard({
  title,
  category,
  image,
  delay,
}: {
  title: string
  category: string
  image: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group rounded-xl overflow-hidden aspect-4/5 md:aspect-square lg:aspect-4/5"
    >
      <Link to="/" className="block h-full w-full">
        {/* Gambar dengan Overlay Gelap */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Konten Teks */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
          <motion.span
            className={cn(
              'text-amber-500 text-xs md:text-sm font-medium uppercase tracking-[0.2em] mb-2 block transition-all duration-500',
              // Mobile: Muncul (opacity-100, translate-0)
              // Desktop (md): Sembunyi, baru muncul saat hover group
              'opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0',
            )}
          >
            {category}
          </motion.span>

          <div className="relative overflow-hidden">
            <h4 className="text-white text-2xl md:text-3xl font-semibold leading-tight mb-4">
              {title}
            </h4>

            {/* Dekorasi Garis Bawah */}
            <div className="h-0.5 w-full bg-white/20 relative overflow-hidden">
              <div
                className={cn(
                  'absolute inset-0 bg-amber-600 transition-transform duration-500 ease-in-out',
                  // Mobile: Garis sudah di posisi (translate-x-0)
                  // Desktop (md): Mulai dari kiri (-translate-x-full)
                  'translate-x-0 lg:-translate-x-full lg:group-hover:translate-x-0',
                )}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function PortfolioContent() {
  return (
    <section className="mt-20 pb-30 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center justify-center relative mb-24 max-w-4xl mx-auto select-none">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-600 font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            Our Masterpiece
          </motion.span>

          <h3 className="relative text-6xl md:text-7xl uppercase font-black tracking-tighter leading-[1.1] italic py-2">
            <span className="inline-block px-4 text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-600">
              Evolusi
            </span>
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Menambahkan properti ini agar animasi hanya jalan sekali
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 text-neutral-400 text-sm md:text-lg max-w-2xl leading-relaxed"
          >
            Menggabungkan presisi teknis dengan kreativitas tanpa batas. Selamat
            datang di era baru desain bersama{' '}
            <span className="text-foreground font-semibold">Grodit Studio</span>
            .
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <PortfolioCard
            title="Grodit Studio Production"
            category="Website Design"
            image="/assets/images/example-karya-1.png"
            delay={0.1}
          />
          <PortfolioCard
            title="E-Commerce Brand"
            category="Digital Experience"
            image="/assets/images/example-karya-1.png"
            delay={0.2}
          />
          <PortfolioCard
            title="Creative Agency"
            category="Brand Identity"
            image="/assets/images/example-karya-1.png"
            delay={0.3}
          />
        </div>

        {/* Footer Link Section */}
        <div className="flex flex-col items-center justify-center mt-20">
          <Link to="/portofolio" className="group relative py-2">
            {/* Teks dengan spasi antar huruf yang elegan */}
            <span className="font-semibold text-lg tracking-wider text-neutral-400 group-hover:text-amber-500 transition-colors duration-500 ease-in-out">
              Lihat Semua Portofolio
            </span>

            {/* Garis Dasar (Statik/Muted) - Memberikan kesan struktural */}
            <div className="h-0.5 w-full bg-neutral-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { PortfolioContent }
