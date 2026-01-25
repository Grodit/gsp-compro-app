import { createFileRoute } from '@tanstack/react-router'
import { HeroContent } from './-components/hero-content'
import { PortfolioContent } from './-components/portfolio-content'
import { ProcessContent } from './-components/process-content'
import { WorkContent } from './-components/work-content'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <div id="hero-content">
        <HeroContent />
      </div>
      <div id="process-content" className="is-dark-section">
        <ProcessContent />
      </div>
      <div id="portfolio-content">
        <PortfolioContent />
      </div>
      <div id="work-content" className="is-dark-section">
        <WorkContent />
      </div>
    </>
  )
}
