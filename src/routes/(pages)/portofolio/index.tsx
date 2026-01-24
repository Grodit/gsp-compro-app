import { createFileRoute, useLayoutEffect } from '@tanstack/react-router'
import { PageMaintenance } from '@/components/page-maintenance'
import { getTitleHead } from '@/lib/meta'

export const Route = createFileRoute('/(pages)/portofolio/')({
  head: () => ({
    meta: [
      {
        title: getTitleHead('Portofolio'),
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  useLayoutEffect(() => {
    // Berikan delay 0 atau gunakan instant behavior untuk menimpa logic router
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [])

  return <PageMaintenance />
}
