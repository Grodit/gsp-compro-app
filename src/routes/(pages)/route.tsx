import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)')({
  component: PagesLayout,
})

function PagesLayout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
    </>
  )
}
