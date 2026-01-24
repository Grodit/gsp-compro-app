import { Link, useLayoutEffect } from '@tanstack/react-router'
import { Button } from './ui/button'

function PageMaintenance() {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-40px)] p-4 flex items-center justify-center select-none">
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-3xl text-center">
        {/* Ikon Animasi atau Badge */}
        <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-pulse">
          Perawatan Terjadwal
        </div>

        <h1 className="text-5xl md:text-7xl uppercase font-extrabold tracking-tight text-slate-900">
          Ups! Kami Sedang <span className="text-primary">Berbenah Diri</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
          Halo! Kami sedang merapikan beberapa sudut website agar pengalaman
          berkunjungmu jadi lebih seru. Jangan khawatir, kami tidak akan lama.
        </p>

        {/* Garis Dekoratif */}
        <div className="flex gap-2 py-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
        </div>

        <Button
          asChild
          className="w-fit py-7 px-10 text-xl rounded-full transition-all duration-300"
        >
          <Link to="/">Sampai jumpa sebentar lagi!</Link>
        </Button>
      </div>
    </div>
  )
}

export { PageMaintenance }
