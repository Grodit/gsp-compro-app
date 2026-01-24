import {
  CustomerService01Icon,
  MenuIcon,
  XCircle,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { Dialog, VisuallyHidden } from 'radix-ui'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const NAV_LINKS = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami', resetScroll: true },
  { label: 'Portofolio', path: '/portofolio' },
  { label: 'Karya', path: '/karya' },
  { label: 'Layanan', path: '/layanan', resetScroll: true },
]

// --- Custom Hook ---
function useDynamicTheme() {
  const [isDarkBg, setIsDarkBg] = useState(false)

  const handleScroll = useCallback(() => {
    const wrapper = document.getElementById('menu-float')
    if (!wrapper) return

    const menuRect = wrapper.getBoundingClientRect()
    const x = window.innerWidth / 2
    const y = menuRect.bottom - menuRect.height / 2

    wrapper.style.pointerEvents = 'none'
    const elementUnderMenu = document.elementFromPoint(x, y)
    wrapper.style.pointerEvents = 'auto'

    setIsDarkBg(!!elementUnderMenu?.closest('.is-dark-section'))
  }, [])

  useEffect(() => {
    // Reset state setiap kali pathname berubah
    setIsDarkBg(false)
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
    // handleScroll adalah memoized, pathname memicu re-run saat navigasi
  }, [handleScroll])

  return isDarkBg
}

// --- Sub-komponen: Desktop ---
function DesktopNav({ isDarkBg }: { isDarkBg: boolean }) {
  const getActiveProps = useCallback(
    () => ({
      className: cn(
        'font-bold scale-105 shadow-md transition-all duration-300 pointer-events-none',
        isDarkBg ? 'bg-white text-black' : 'bg-accent/30 text-white',
      ),
    }),
    [isDarkBg],
  )

  return (
    <div className="hidden sm:flex items-center gap-2">
      <div
        className={cn(
          'group size-14 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm',
          isDarkBg ? 'bg-white text-accent' : 'bg-accent text-white',
        )}
      >
        <img
          src={
            isDarkBg
              ? '/assets/logos/logoShort.svg'
              : '/assets/logos/logoShortPutih.svg'
          }
          alt="logo"
          className="w-8 h-auto group-hover:rotate-6 transition-transform"
        />
      </div>

      <nav
        className={cn(
          'px-1.5 h-14 flex items-center rounded-xl border transition-all duration-300',
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
                resetScroll={link.resetScroll}
                activeProps={getActiveProps()}
                className={cn(
                  'inline-flex items-center h-11 px-4 rounded-lg transition-all duration-300',
                  isDarkBg
                    ? 'text-zinc-400 hover:text-white font-medium'
                    : 'text-zinc-500 hover:text-black font-medium',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        to="/"
        className={cn(
          'size-14 flex items-center justify-center rounded-xl transition-all duration-300 shadow-lg active:scale-90 group',
          isDarkBg
            ? 'bg-amber-500 hover:bg-amber-400 text-accent'
            : 'bg-amber-600 hover:bg-amber-700 text-white',
        )}
      >
        <HugeiconsIcon
          icon={CustomerService01Icon}
          className="size-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
        />

        {/* Tooltip sederhana yang muncul saat hover di desktop */}
        <span className="sr-only">Konsultasikan</span>
      </Link>
    </div>
  )
}

// --- Sub-komponen: Mobile ---
function MobileDrawer({
  isOpen,
  setIsOpen,
  isDarkBg,
}: {
  isOpen: boolean
  setIsOpen: (o: boolean) => void
  isDarkBg: boolean
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  }

  return (
    <div className="sm:hidden">
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'size-14 p-0 rounded-2xl transition-all duration-500 shadow-2xl border-2 active:scale-90',
              isDarkBg
                ? 'bg-white text-black border-white/20'
                : 'bg-zinc-950 text-white border-white/10',
            )}
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <HugeiconsIcon
                icon={isOpen ? XCircle : MenuIcon}
                className="size-6"
              />
            </motion.div>
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal forceMount>
          <AnimatePresence>
            {isOpen && (
              <>
                <Dialog.Overlay asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-100 bg-black/60 backdrop-blur-md"
                  />
                </Dialog.Overlay>

                <Dialog.Content asChild>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed bottom-28 left-6 right-6 z-101 outline-none"
                  >
                    {/* Mengatasi Peringatan Aksesibilitas Radix */}
                    <VisuallyHidden.Root>
                      <Dialog.Title>Menu Navigasi Utama</Dialog.Title>
                      <Dialog.Description>
                        Gunakan menu ini untuk berpindah halaman
                      </Dialog.Description>
                    </VisuallyHidden.Root>

                    <div
                      className={cn(
                        'w-full p-3 rounded-[3rem] border-2 shadow-2xl backdrop-blur-3xl relative overflow-hidden',
                        isDarkBg
                          ? 'bg-zinc-900/95 border-white/10 text-white'
                          : 'bg-white/95 border-zinc-200 text-black',
                      )}
                    >
                      {/* Brand Logo & Title (Visible) */}
                      <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center py-6 gap-2"
                      >
                        <div
                          className={cn(
                            'size-12 rounded-2xl flex items-center justify-center shadow-inner',
                            isDarkBg ? 'bg-white/10' : 'bg-zinc-100',
                          )}
                        >
                          <img
                            src={
                              isDarkBg
                                ? '/assets/logos/logoShortPutih.svg'
                                : '/assets/logos/logoShort.svg'
                            }
                            alt="logo"
                            className="w-7 h-auto"
                          />
                        </div>
                        <div className="text-center">
                          <h2 className="font-bold text-lg tracking-tight">
                            Grodit Studio
                          </h2>
                          <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">
                            Creative Production
                          </p>
                        </div>
                      </motion.div>

                      <nav className="flex flex-col gap-1.5">
                        {NAV_LINKS.map((link) => (
                          <motion.div key={link.label} variants={itemVariants}>
                            <Link
                              to={link.path}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                'relative flex items-center h-14 px-6 rounded-[1.8rem] transition-all duration-300 text-base font-medium',
                                isDarkBg
                                  ? 'hover:bg-white/5'
                                  : 'hover:bg-black/5',
                              )}
                            >
                              {({ isActive }) => (
                                <>
                                  {isActive && (
                                    <motion.div
                                      layoutId="activeTabMobile"
                                      className="absolute inset-0 bg-amber-600 rounded-[1.8rem] -z-10 shadow-lg shadow-amber-600/40"
                                      transition={{
                                        type: 'spring',
                                        bounce: 0.2,
                                        duration: 0.6,
                                      }}
                                    />
                                  )}
                                  <span
                                    className={cn(
                                      'relative z-10',
                                      isActive ? 'text-white' : 'opacity-70',
                                    )}
                                  >
                                    {link.label}
                                  </span>
                                </>
                              )}
                            </Link>
                          </motion.div>
                        ))}

                        <motion.div variants={itemVariants} className="mt-2">
                          <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'flex items-center justify-between h-16 px-6 rounded-[1.8rem] transition-all duration-300 shadow-xl active:scale-95 group bg-accent text-white',
                            )}
                          >
                            <span className="font-bold text-base">
                              Konsultasikan
                            </span>
                            <div
                              className={cn(
                                'size-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12',
                                isDarkBg ? 'bg-black/10' : 'bg-white/20',
                              )}
                            >
                              <HugeiconsIcon
                                icon={CustomerService01Icon}
                                className="size-6"
                              />
                            </div>
                          </Link>
                        </motion.div>
                      </nav>

                      <motion.div
                        variants={itemVariants}
                        className="mt-4 pt-4 border-t border-current/5 pb-2 text-[9px] opacity-20 uppercase tracking-[0.3em] text-center"
                      >
                        © 2026 Grodit Studio
                      </motion.div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

// --- Komponen Utama ---
export function MenuFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkBg = useDynamicTheme() // Hook menangani pathname secara internal

  return (
    <div
      id="menu-float"
      className="z-50 fixed left-0 bottom-8 w-full text-[13px] select-none px-4"
    >
      <div className="mx-auto flex justify-center">
        <div
          className={cn(
            'relative flex flex-col min-w-0 max-w-fit p-1.5 rounded-2xl backdrop-blur-2xl transition-all duration-500 border-2',
            isDarkBg
              ? 'bg-accent/40 border-white/10 shadow-2xl'
              : 'bg-white/40 border-zinc-200 shadow-xl',
          )}
        >
          <DesktopNav isDarkBg={isDarkBg} />
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
