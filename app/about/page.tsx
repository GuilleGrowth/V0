import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { FounderStory } from "@/components/founder-story"
import { MissionSection } from "@/components/mission-section"
import { WhyItWorks } from "@/components/why-it-works"
import { TeamValues } from "@/components/team-values"
import { AboutCTA } from "@/components/about-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <FounderStory />
      <MissionSection />
      <WhyItWorks />
      <TeamValues />
      <AboutCTA />
    </main>
  )
}
