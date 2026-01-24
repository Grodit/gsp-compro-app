function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-between pointer-events-none -z-1">
      <div className="w-px h-full bg-border/30"></div>
      <div className="w-px h-full bg-border/30"></div>
      <div className="w-px h-full bg-border/30"></div>
      <div className="w-px h-full bg-border/30"></div>
      <div className="w-px h-full bg-border/30"></div>
      <div className="w-px h-full bg-border/30 max-lg:hidden"></div>
      <div className="w-px h-full bg-border/30 max-lg:hidden"></div>
      <div className="w-px h-full bg-border/30 max-lg:hidden"></div>
      <div className="w-px h-full bg-border/30 max-lg:hidden"></div>
      <div className="w-px h-full bg-border/30 max-lg:hidden"></div>
    </div>
  )
}

export { GridBackground }
