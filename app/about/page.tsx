import Navigation from "../../components/navigation"
import AboutHero from "../../components/about-hero"
import FounderStory from "../../components/founder-story"
import { AboutCTA } from "../../components/about-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <FounderStory />
      <AboutCTA />
    </main>
  )
}
