import { MenuIcon, XCircle } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { Dialog } from 'radix-ui'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const NAV_LINKS = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami', resetScroll: true },
  { label: 'Portofolio', path: '/portofolio' },
  { label: 'Karya', path: '/karya' },
  { label: 'Layanan', path: '/layanan', resetScroll: true },
]

function MenuFloat() {
  const [isDarkBg, setIsDarkBg] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const lastPathname = useRef(location.pathname)

  // Deteksi warna background di bawah menu
  const handleScroll = useCallback(() => {
    const wrapper = document.getElementById('menu-float')
    if (!wrapper) return

    const menuRect = wrapper.getBoundingClientRect()
    const x = window.innerWidth / 2
    const y = menuRect.bottom - menuRect.height / 2

    wrapper.style.pointerEvents = 'none'
    const elementUnderMenu = document.elementFromPoint(x, y)
    wrapper.style.pointerEvents = 'auto'

    const isDark = !!elementUnderMenu?.closest('.is-dark-section')
    setIsDarkBg(isDark)
  }, [])

  // Sinkronisasi navigasi dan event listener
  useEffect(() => {
    if (lastPathname.current !== location.pathname) {
      lastPathname.current = location.pathname
      setIsDarkBg(false)
      setIsOpen(false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll, location.pathname])

  const activeLinkSyles = {
    className:
      'border-primary-foreground bg-primary-foreground/10 text-white font-bold pointer-events-none',
  }

  return (
    <div
      id="menu-float"
      className="z-50 fixed left-0 bottom-4 w-full text-[13px]"
    >
      <div className="mx-auto flex justify-center">
        {/* AnimatePresence dihilangkan di sini karena kontainer ini selalu ada */}
        <div
          id="menu-float-container"
          className={cn(
            'relative flex flex-col min-w-0 max-w-fit p-1.5 rounded-xl backdrop-blur-xl transition-colors duration-300',
            isDarkBg ? 'bg-background/30' : 'bg-accent/60',
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="bg-primary text-primary-foreground size-15 flex items-center justify-center rounded-lg">
              <div className="inline-flex items-center justify-center">
                <img
                  src="/assets/logos/logoShortPutih.svg"
                  alt="logo"
                  draggable={false}
                  className="w-10 h-auto"
                />
              </div>
            </div>

            <div className="bg-[#3e3e3e] text-secondary-foreground px-1.5 h-15 flex items-center rounded-lg">
              <ul className="flex items-center gap-1.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      resetScroll={link.resetScroll}
                      activeProps={activeLinkSyles}
                      className="inline-flex items-center h-11 px-3 rounded-lg border border-ring hover:border-primary-foreground transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/"
              className="h-15 flex items-center px-[1.2em] font-semibold bg-tertiary text-foreground rounded-lg hover:bg-tertiary/80 transition-all"
            >
              Konsultasikan
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger asChild>
                <Button className="size-15 bg-primary text-primary-foreground p-0 rounded-lg">
                  <HugeiconsIcon
                    icon={isOpen ? XCircle : MenuIcon}
                    className="size-6"
                  />
                </Button>
              </Dialog.Trigger>

              <AnimatePresence>
                {isOpen && (
                  <Dialog.Portal forceMount>
                    <Dialog.Overlay asChild>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-51 bg-black/40 backdrop-blur-sm"
                      />
                    </Dialog.Overlay>

                    <Dialog.Content asChild>
                      <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{
                          type: 'spring',
                          damping: 25,
                          stiffness: 200,
                        }}
                        className="fixed inset-0 z-52 bg-sidebar flex flex-col w-full h-screen shadow-2xl"
                      >
                        <div className="p-8 border-b border-white/5 flex justify-between items-center">
                          <Dialog.Title className="text-2xl font-semibold text-foreground">
                            Menu
                          </Dialog.Title>
                          <Dialog.Description className="sr-only">
                            Navigasi utama untuk menjelajahi halaman website
                            kami.
                          </Dialog.Description>
                          <Dialog.Close asChild>
                            <button
                              className="p-2 hover:bg-white/5 rounded-full transition-colors"
                              type="button"
                            >
                              <HugeiconsIcon
                                icon={XCircle}
                                className="size-8 text-foreground"
                              />
                            </button>
                          </Dialog.Close>
                        </div>

                        <nav className="flex-1 overflow-y-auto p-8">
                          <ul className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.path}
                                  resetScroll={link.resetScroll}
                                  onClick={() => setIsOpen(false)}
                                  activeProps={{
                                    className:
                                      'bg-primary text-primary-foreground rounded-xl px-4 font-bold pointer-events-none',
                                  }}
                                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors block py-2"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>

                        <div className="p-8 flex justify-center border-t border-white/5">
                          <img
                            src="/assets/logos/logoLong.svg"
                            alt="logo"
                            className="w-32"
                          />
                        </div>
                      </motion.div>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MenuFloat }
