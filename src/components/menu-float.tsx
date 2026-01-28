import {
  CustomerService01Icon,
  MenuIcon,
  XCircle,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

// --- Konfigurasi ---
const NAV_LINKS = [
  { label: 'Beranda', path: '/', resetScroll: true },
  { label: 'Tentang Kami', path: '/tentang-kami', resetScroll: true },
  { label: 'Portofolio', path: '/portofolio', resetScroll: true },
  { label: 'Karya', path: '/karya', resetScroll: true },
  { label: 'Layanan', path: '/layanan', resetScroll: true },
]

const ANIMATION_VARIANTS: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        type: 'spring',
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
}

// --- Hook: Deteksi Background ---
function useDynamicTheme() {
  const [isDarkBg, setIsDarkBg] = useState(false)

  const handleScroll = useCallback(() => {
    const wrapper = document.getElementById('menu-float')
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const x = window.innerWidth / 2
    const y = rect.top + rect.height / 2

    wrapper.style.pointerEvents = 'none'
    const elementUnder = document.elementFromPoint(x, y)
    wrapper.style.pointerEvents = 'auto'

    setIsDarkBg(!!elementUnder?.closest('.is-dark-section'))
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return isDarkBg
}

// --- Sub-komponen: Mobile Drawer (Refaktor Shadcn) ---
function MobileDrawer({
  isOpen,
  setIsOpen,
  isDarkBg,
}: {
  isOpen: boolean
  setIsOpen: (o: boolean) => void
  isDarkBg: boolean
}) {
  return (
    <div className="sm:hidden">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'size-14 p-0 rounded-2xl transition-all duration-500 shadow-2xl border-2 active:scale-90',
              isDarkBg
                ? 'bg-white text-black border-white/20'
                : 'bg-zinc-950 text-white border-white/10',
            )}
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              <HugeiconsIcon
                icon={isOpen ? XCircle : MenuIcon}
                className="size-6"
              />
            </motion.div>
          </Button>
        </DialogTrigger>

        <AnimatePresence>
          {isOpen && (
            <DialogContent
              forceMount
              className={cn(
                'fixed bottom-6 left-6 right-6 z-101 w-auto max-w-none p-0 border-none bg-transparent shadow-none translate-x-0! translate-y-0! top-auto! ring-0',
                '[&>button]:hidden',
              )}
            >
              <motion.div
                variants={ANIMATION_VARIANTS.container}
                initial="hidden"
                animate="visible"
                exit="exit"
                /* PERBAIKAN KEDUA:
                   Pastikan max-height tidak membuat konten terpotong.
                */
                className={cn(
                  'w-full max-h-[85vh] rounded-[2.5rem] border-2 shadow-2xl backdrop-blur-3xl overflow-hidden flex flex-col relative',
                  isDarkBg
                    ? 'bg-zinc-900/95 border-white/10 text-white'
                    : 'bg-white/95 border-zinc-200 text-black',
                )}
              >
                {/* Header Branding */}
                <DialogHeader className="sr-only">
                  <DialogTitle>Menu Utama</DialogTitle>
                  <DialogDescription>Navigasi Grodit Studio</DialogDescription>
                </DialogHeader>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'absolute top-5 right-5 size-10 flex items-center justify-center rounded-full transition-colors z-20',
                    isDarkBg
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'bg-black/5 hover:bg-black/10',
                  )}
                >
                  <HugeiconsIcon icon={XCircle} className="size-6 opacity-50" />
                </button>

                <motion.div
                  variants={ANIMATION_VARIANTS.item}
                  className="flex flex-col items-center py-8 shrink-0"
                >
                  <div
                    className={cn(
                      'size-12 rounded-2xl flex items-center justify-center mb-2',
                      isDarkBg ? 'bg-white/10' : 'bg-zinc-100',
                    )}
                  >
                    <img
                      src={
                        isDarkBg
                          ? '/assets/logos/logoShortPutih.svg'
                          : '/assets/logos/logoShort.svg'
                      }
                      className="w-6 h-auto"
                      alt="logo"
                    />
                  </div>
                  <h2 className="font-bold text-lg">Grodit Studio</h2>
                  <p className="text-[9px] opacity-40 uppercase tracking-widest">
                    Creative Production
                  </p>
                </motion.div>

                {/* Navigasi Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1.5 custom-scrollbar min-h-50">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      activeOptions={{ exact: true }}
                      onClick={(e) => {
                        const target = e.currentTarget
                        // Cek apakah link ini memiliki attribute data-active
                        if (target.dataset.active === 'true') {
                          e.preventDefault()
                          return
                        }
                        setIsOpen(false)
                      }}
                    >
                      {({ isActive }) => (
                        <div
                          // Gunakan data attribute untuk membantu pengecekan di onClick
                          data-active={isActive}
                          className={cn(
                            'relative flex items-center h-14 px-6 rounded-3xl transition-all text-base font-medium',
                            isDarkBg ? 'hover:bg-white/5' : 'hover:bg-black/5',
                            // Gunakan pointer-events-none agar tidak bisa diklik sama sekali saat aktif
                            isActive && 'pointer-events-none',
                          )}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeTabMobile"
                              className="absolute inset-0 bg-amber-600 rounded-3xl -z-10 shadow-lg shadow-amber-600/30"
                            />
                          )}
                          <span
                            className={cn(
                              'relative z-10',
                              isActive ? 'text-white' : 'opacity-60',
                            )}
                          >
                            {link.label}
                          </span>
                        </div>
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Footer Section */}
                <div className="p-4 pt-2 shrink-0 border-t border-current/5">
                  <motion.div variants={ANIMATION_VARIANTS.item}>
                    <Link
                      to="/konsultasi"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between h-15 px-6 rounded-3xl bg-amber-600 text-white shadow-xl active:scale-95"
                    >
                      <span className="font-bold">Konsultasikan</span>
                      <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                        <HugeiconsIcon
                          icon={CustomerService01Icon}
                          className="size-5"
                        />
                      </div>
                    </Link>
                  </motion.div>
                  <p className="mt-4 pb-2 text-[8px] opacity-20 uppercase tracking-[0.3em] text-center">
                    © 2026 Grodit Studio
                  </p>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </div>
  )
}

// --- Komponen Utama ---
export function MenuFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkBg = useDynamicTheme()

  return (
    <div
      id="menu-float"
      className="z-50 fixed left-0 bottom-8 w-full select-none px-4"
    >
      <div className="mx-auto flex justify-center">
        <div
          className={cn(
            'relative flex flex-col p-1.5 rounded-2xl backdrop-blur-2xl transition-all duration-500 border-2',
            isDarkBg
              ? 'bg-zinc-900/40 border-white/10 shadow-2xl'
              : 'bg-white/40 border-zinc-200 shadow-xl',
          )}
        >
          {/* Desktop Nav: Tidak menggunakan Dialog */}
          <div className="hidden sm:flex items-center gap-2">
            <div
              className={cn(
                'group size-14 flex items-center justify-center rounded-xl transition-all shadow-sm',
                isDarkBg ? 'bg-white text-accent' : 'bg-amber-600 text-white',
              )}
            >
              <img
                src={
                  isDarkBg
                    ? '/assets/logos/logoShort.svg'
                    : '/assets/logos/logoShortPutih.svg'
                }
                className="w-8 h-auto"
                alt="logo"
              />
            </div>
            <nav
              className={cn(
                'px-1.5 h-14 flex items-center rounded-xl border transition-colors',
                isDarkBg
                  ? 'bg-white/5 border-white/10'
                  : 'bg-zinc-100 border-zinc-200',
              )}
            >
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className={cn(
                        'relative inline-flex items-center h-11 px-4 rounded-lg transition-all font-medium text-sm',
                        isDarkBg
                          ? 'text-zinc-400 hover:text-white'
                          : 'text-zinc-500 hover:text-black',
                      )}
                      activeOptions={{ exact: true }}
                      activeProps={{
                        className: cn(
                          '!text-white shadow-sm pointer-events-none',
                          isDarkBg ? 'bg-amber-500' : 'bg-amber-600',
                        ),
                      }}
                    >
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              to="/konsultasi"
              className={cn(
                'size-14 flex items-center justify-center rounded-xl transition-all shadow-lg active:scale-90 group',
                isDarkBg
                  ? 'bg-amber-500 text-accent'
                  : 'bg-amber-600 text-white',
              )}
            >
              <HugeiconsIcon icon={CustomerService01Icon} className="size-6" />
            </Link>
          </div>

          <MobileDrawer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isDarkBg={isDarkBg}
          />
        </div>
      </div>
    </div>
  )
}
