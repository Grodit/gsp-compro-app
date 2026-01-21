import { Link } from '@tanstack/react-router'

function WorkContent() {
  return (
    <div className="select-none mt-20 pb-30">
      <div className="w-full px-6">
        <div className="text-center flex flex-col items-center justify-center relative mb-20">
          <h2 className="text-md mb-6">Terbaru</h2>
          <h3 className="relative inline-block text-7xl md:text-8xl uppercase font-semibold">
            <span className="inline-block relative">Karya</span>
          </h3>
          <h2 className="mt-6 inline-block text-md">
            Jelajahi Standar Baru Desain Kami di Grodit Studio Production
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative block rounded-lg overflow-hidden bg-card">
            <Link to="/" className="group">
              <img
                src="/src/assets/images/example-karya-1.png"
                alt="images"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-between px-4 py-6 z-2 bg-linear-to-t from-primary/80 to-transparent">
                <div className="flex flex-col flex-1 items-start">
                  <div className="text-primary-foreground mt-1">Website</div>

                  {/* Kontainer teks dengan underline */}
                  <div className="relative inline-block">
                    <span className="text-primary-foreground text-2xl font-semibold">
                      Grodit Studio Production
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-foreground/30"></span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-foreground transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative block rounded-lg overflow-hidden bg-card">
            <Link to="/" className="group">
              <img
                src="/src/assets/images/example-karya-1.png"
                alt="images"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-between px-4 py-6 z-2 bg-linear-to-t from-primary/80 to-transparent">
                <div className="flex flex-col flex-1 items-start">
                  <div className="text-primary-foreground mt-1">Website</div>

                  {/* Kontainer teks dengan underline */}
                  <div className="relative inline-block">
                    <span className="text-primary-foreground text-2xl font-semibold">
                      Grodit Studio Production
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-foreground/30"></span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-foreground transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative hidden lg:block rounded-lg overflow-hidden bg-card">
            <Link to="/" className="group">
              <img
                src="/src/assets/images/example-karya-1.png"
                alt="images"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-between px-4 py-6 z-2 bg-linear-to-t from-primary/80 to-transparent">
                <div className="flex flex-col flex-1 items-start">
                  <div className="text-primary-foreground mt-1">Website</div>

                  {/* Kontainer teks dengan underline */}
                  <div className="relative inline-block">
                    <span className="text-primary-foreground text-2xl font-semibold">
                      Grodit Studio Production
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-foreground/30"></span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-foreground transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <Link to="/" className="group relative">
            <span className="font-medium">Lihat semua situs web</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30"></span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { WorkContent }
