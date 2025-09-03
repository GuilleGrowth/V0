import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { GrowthSystem } from "@/components/growth-system"
import { ServicesSnapshot } from "@/components/services-snapshot"
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
      <ServicesSnapshot />
      <CaseStudyTeaser />
      <HomepageContactForm />
    </main>
  )
}
