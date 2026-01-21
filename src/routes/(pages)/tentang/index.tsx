import { createFileRoute } from '@tanstack/react-router'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/tentang/')({
  head: () => ({
    meta: [
      {
        title: getTitleHead('Tentang'),
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(pages)/tentang/"!</div>
}
