function MarqueTop() {
  const items = [
    { id: 'gst-1', text: 'Grodit Studio Production' },
    { id: 'gst-2', text: 'Grodit Studio Production' },
    { id: 'gst-3', text: 'Grodit Studio Production' },
    { id: 'gst-4', text: 'Grodit Studio Production' },
    { id: 'gst-5', text: 'Grodit Studio Production' },
    { id: 'gst-6', text: 'Grodit Studio Production' },
    { id: 'gst-7', text: 'Grodit Studio Production' },
    { id: 'gst-8', text: 'Grodit Studio Production' },
  ]

  const displayItems = [
    ...items,
    ...items.map((item) => ({ ...item, id: `${item.id}-copy` })),
  ]

  return (
    <div
      className="relative flex overflow-hidden border-y border-amber-500/20 bg-white/50 backdrop-blur-sm w-full items-center whitespace-nowrap h-8 py-1 select-none"
      id="marque-top"
    >
      <div className="flex items-center h-full w-max animate-marquee">
        {displayItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex shrink-0 items-center"
          >
            {/* Teks dengan warna Amber yang elegan dan tipis */}
            <span className="mx-8 text-[10px] font-medium uppercase tracking-[0.3em] text-amber-600/80">
              {item.text}
            </span>

            {/* Separator berupa titik atau garis vertikal kecil untuk kesan minimalis */}
            <div className="h-1 w-1 rounded-full bg-amber-400/50" />
          </div>
        ))}
      </div>
    </div>
  )
}

export { MarqueTop }
