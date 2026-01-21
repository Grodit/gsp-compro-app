import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'

function HeroContent() {
  const [now, setNow] = useState(dayjs())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-[calc(100vh-40px)] pt-5 flex flex-col">
      <div className="mx-auto w-full grow flex flex-col">
        <div className="relative flex flex-col justify-between grow">
          {/* Bagian Atas */}
          <div className="">
            <h2 className="flex flex-wrap justify-center items-center gap-3 text-sm mx-2.5">
              <Badge className="text-sm rounded-sm select-none font-semibold">
                {now.format('MMM DD, YYYY')}
              </Badge>
              <span className="tracking-wide text-center">
                Terima kasih telah mengunjungi situs kami. Kami siap membantu
                kebutuhan Anda.
              </span>
            </h2>
          </div>

          {/* Bagian Tengah (Headline) */}
          <div className="flex items-center justify-center text-center my-auto">
            <h3 className="relative inline-block text-balance uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight select-none">
              Bangun. <br /> Luncurkan. <br /> Skalakan.
            </h3>
          </div>

          {/* Bagian Bawah */}
          <div className="flex justify-between pb-25 lg:pb-10 mt-auto px-10">
            <p className="uppercase text-start">
              Berbasis di <span className="font-bold">Indonesia</span>
            </p>
            <p className="uppercase text-end">
              dibuat oleh <span className="font-bold">Raditya dwi</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroContent }
