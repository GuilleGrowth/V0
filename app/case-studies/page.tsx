import { Navigation } from "@/components/navigation"
import { CaseStudiesHero } from "@/components/case-studies-hero"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { CaseStudyGrid } from "@/components/case-study-grid"
import { ResultsOverview } from "@/components/results-overview"
import { CaseStudiesCTA } from "@/components/case-studies-cta"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CaseStudiesHero />
      <ResultsOverview />
      <FeaturedCaseStudy />
      <CaseStudyGrid />
      <CaseStudiesCTA />
    </main>
  )
}
