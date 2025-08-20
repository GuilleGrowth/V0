import { Navigation } from "@/components/navigation"
import { AIMarketingServices } from "@/components/ai-marketing-services"
import { AdvertisingServices } from "@/components/advertising-services"
import { ServicesCTA } from "@/components/services-cta"
import { RapportSection } from "@/components/rapport-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AIMarketingServices />
      <RapportSection />
      <AdvertisingServices />
      <ServicesCTA />
    </main>
  )
}
