import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { RapportSection } from "@/components/rapport-section"
import { ServicesCTA } from "@/components/services-cta"

const customerJourneys = [
  {
    title: "More Members",
    description:
      "Attract and convert new people into long-term members using AI-powered lead generation, reactivation, and outreach.",
    steps: ["Lead Generation", "Database Reactivation", "Cold Outreach", "Community Building", "Membership Enrollment"],
    icon: "🎯",
    color: "bg-blue-500",
  },
  {
    title: "Engage & Retain Members",
    description:
      "Keep current members active, satisfied, and renewing through AI-driven retention, engagement, and loyalty systems.",
    steps: [
      "AI Retention Triggers",
      "Member Experience Optimization",
      "Community Engagement",
      "Upsell & Loyalty Programs",
      "Renewal Automation",
    ],
    icon: "🤝",
    color: "bg-green-500",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Two Pathways to Membership Growth
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every customer journey leads to the same destination: engaged community members
          </p>
        </div>
      </div>

      <section className="py-2 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {customerJourneys.map((journey, index) => (
              <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{journey.icon}</div>
                    <h3 className="text-xl font-bold font-heading text-foreground">{journey.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{journey.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {journey.steps.map((step, stepIndex) => (
                      <span
                        key={stepIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServicesCTA />
      <RapportSection />
    </main>
  )
}
