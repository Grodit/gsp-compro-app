import { createFileRoute } from '@tanstack/react-router'
import { HeroContent } from './-components/hero-content'
import { ProcessContent } from './-components/process-content'
import { WorkContent } from './-components/work-content'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <div id="header-content">
        <HeroContent />
      </div>
      <div id="process-content" className="is-dark-section relative z-10">
        <ProcessContent />
      </div>
      <div id="work-content">
        <WorkContent />
      </div>
    </>
  )
}
