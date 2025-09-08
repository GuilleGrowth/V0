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
      {/* Mobile sticky CTA - Optional enhancement */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-accent/95 backdrop-blur p-4 border-t border-accent/20 md:hidden">
        <div className="max-w-screen-xl mx-auto">
          <a
            href="/contact"
            className="block w-full bg-accent-foreground text-accent text-center py-3 px-4 rounded-xl font-semibold transition-colors hover:bg-accent-foreground/90"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
      <div className="pb-20 md:pb-0"></div>
    </main>
  )
}
