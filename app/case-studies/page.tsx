import { Navigation } from "@/components/navigation"
import { CaseStudiesHero } from "@/components/case-studies-hero"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { CaseStudiesCTA } from "@/components/case-studies-cta"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CaseStudiesHero />
      <FeaturedCaseStudy />
      <CaseStudiesCTA />
    </main>
  )
}
