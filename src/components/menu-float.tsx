import { MenuIcon, XCircle } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { Dialog } from 'radix-ui'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

function MenuFloat() {
  const [isDarkBg, setIsDarkBg] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Ambil elemen paling luar (wrapper yang fixed)
      const wrapper = document.getElementById('menu-float')
      if (!wrapper) return

      const menuRect = wrapper.getBoundingClientRect()

      // Ambil koordinat tengah dari container menu
      const x = window.innerWidth / 2
      const y = menuRect.bottom - menuRect.height / 2

      // 1. Matikan pointer-events pada SELURUH wrapper menu
      wrapper.style.pointerEvents = 'none'

      // 2. Ambil elemen di bawahnya (sekarang harusnya tembus ke section)
      const elementUnderMenu = document.elementFromPoint(x, y)

      // 3. Hidupkan kembali agar tombol bisa diklik
      wrapper.style.pointerEvents = 'auto'

      // 4. Cari section gelap
      const isDark = elementUnderMenu?.closest('.is-dark-section')

      // console.log('SEKARANG TERDETEKSI:', elementUnderMenu)

      setIsDarkBg(!!isDark)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      className="z-50 fixed left-0 bottom-4 w-full text-[13px]"
      id="menu-float"
    >
      <div className="mx-auto flex justify-center">
        <AnimatePresence>
          <motion.div
            id="menu-float-container"
            className={cn(
              'relative flex flex-col min-w-0 max-w-fit p-1.5 rounded-xl backdrop-blur-xl transition-colors duration-200',
              isDarkBg ? 'bg-background/30' : 'bg-accent/60',
            )}
          >
            <div className="hidden sm:block">
              <div className="relative flex justify-center gap-1.5">
                <div className="flex relative bg-primary text-primary-foreground items-center justify-center size-15 px-1.5 rounded-lg">
                  <Link
                    to="/"
                    className="relative inline-flex size-15 items-center justify-center"
                  >
                    <img
                      src="/public/assets/logos/logoShortPutih.svg"
                      alt="logo"
                      draggable="false"
                      className="w-10 h-auto"
                    />
                  </Link>
                </div>
                <div className="relative flex bg-[#3e3e3e] text-secondary-foreground items-center px-1.5 rounded-lg">
                  <ul className="relative flex items-center justify-center gap-1.5">
                    <li className="flex ">
                      <Link
                        to="/tentang"
                        className="inline-flex items-center h-11 px-3 rounded-lg whitespace-nowrap border border-ring hover:border hover:border-primary-foreground transition duration-300 ease-in-out"
                      >
                        Tentang Kami
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        to="/"
                        className="inline-flex items-center h-11 px-3 rounded-lg whitespace-nowrap border border-ring hover:border hover:border-primary-foreground transition duration-300 ease-in-out"
                      >
                        Portofolio
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        to="/"
                        className="inline-flex items-center h-11 px-3 rounded-lg whitespace-nowrap border border-ring hover:border hover:border-primary-foreground transition duration-300 ease-in-out"
                      >
                        Karya
                      </Link>
                    </li>
                    <li className="flex">
                      <Link
                        to="/"
                        className="inline-flex items-center h-11 px-3 rounded-lg whitespace-nowrap border border-ring hover:border hover:border-primary-foreground transition duration-300 ease-in-out"
                      >
                        Layanan
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="relative flex items-center h-15 rounded-lg">
                  <Link
                    to="/"
                    className="w-full h-full flex justify-center items-center rounded-lg px-[1.2em] font-semibold bg-tertiary text-foreground hover:bg-tertiary/80 transition duration-300 ease-in-out"
                  >
                    Konsultasikan
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:hidden">
              <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative inline-flex size-15 items-center justify-center"
                    asChild
                  >
                    <div className="flex relative bg-primary text-primary-foreground items-center justify-center size-15 px-1.5 rounded-lg">
                      <HugeiconsIcon
                        icon={isOpen ? XCircle : MenuIcon}
                        className="size-6"
                      />
                    </div>
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
                          className="fixed inset-0 z-51 bg-black/20 backdrop-blur-sm"
                        />
                      </Dialog.Overlay>

                      <Dialog.Content asChild forceMount>
                        <motion.div
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          exit={{ y: '100%' }}
                          transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 200,
                          }}
                          className="fixed inset-0 z-52 bg-sidebar flex flex-col w-full h-screen"
                        >
                          {/* Header Menu */}
                          <div className="p-8 border-b border-gray-200/20 flex justify-between items-center">
                            <Dialog.Title className="text-2xl text-foreground font-semibold">
                              Menu
                            </Dialog.Title>
                            <Dialog.Description className="sr-only">
                              Navigasi utama untuk menjelajahi halaman website
                              kami.
                            </Dialog.Description>
                            <Dialog.Close asChild>
                              <button
                                className="p-2 rounded-full hover:bg-white/10"
                                type="button"
                              >
                                <HugeiconsIcon
                                  icon={XCircle}
                                  className="size-8 text-foreground"
                                />
                              </button>
                            </Dialog.Close>
                          </div>

                          {/* Link Navigasi */}
                          <nav className="flex-1 overflow-y-auto p-8">
                            <ul className="flex flex-col gap-6 text-xl">
                              {[
                                { label: 'Beranda', path: '/' },
                                { label: 'Tentang Kami', path: '/tentang' },
                                { label: 'Portofolio', path: '/' },
                                { label: 'Karya', path: '/' },
                                { label: 'Layanan', path: '/' },
                              ].map((item) => (
                                <li key={item.label}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground hover:text-primary transition-colors block w-full py-2"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>

                          <div className="flex items-center justify-center my-6">
                            <div className="relative">
                              <img
                                src="/public/assets/logos/logoLong.svg"
                                alt="logo"
                                className="w-40 h-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  )}
                </AnimatePresence>
              </Dialog.Root>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export { MenuFloat }
