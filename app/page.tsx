import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { GrowthSystem } from "@/components/growth-system"
import { CaseStudyTeaser } from "@/components/case-study-teaser"
import { ExclusivityNotice } from "@/components/exclusivity-notice"
import { HomepageContactForm } from "@/components/homepage-contact-form"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GrowthSystem />
      <ExclusivityNotice />
      <CaseStudyTeaser />
      <HomepageContactForm />
      {/* Mobile sticky CTA - Optional enhancement */}
      <div className="pb-20 md:pb-0"></div>
    </main>
  )
}
