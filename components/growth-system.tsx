import { Card, CardContent } from "@/components/ui/card"

const growthPillars = [
  {
    title: "Meta Ads & Lead Generation",
    icon: "📱",
  },
  {
    title: "Booking and Lesson Sign-up Funnel",
    icon: "🌐",
  },
  {
    title: "Target Messaging & Community Building",
    icon: "💬",
  },
  {
    title: "Automation & Follow-up System",
    icon: "🔄",
  },
  {
    title: "AI Personalized Outreach System",
    icon: "🤖",
  },
  {
    title: "Membership & Court Usage Automation",
    icon: "📊",
  },
]

export function GrowthSystem() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Our Growth System</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {growthPillars.map((pillar, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-colors group shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{pillar.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
