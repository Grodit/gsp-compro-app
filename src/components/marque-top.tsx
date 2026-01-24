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
      className="relative flex overflow-hidden bg-accent text-accent-foreground w-full items-center whitespace-nowrap h-10 py-2 select-none"
      id="marque-top"
    >
      <div className="flex items-center h-full w-max animate-marquee">
        {displayItems.map((item) => (
          <div key={item.id} className="flex shrink-0 items-center">
            <span className="mx-6 text-sm font-semibold uppercase tracking-wider">
              {item.text}
            </span>
            <img
              src="/assets/logos/logoShortPutih.svg"
              alt="separator"
              draggable="false"
              className="size-5"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { MarqueTop }
