import { Card, CardContent } from "@/components/ui/card"

const growthPillars = [
  {
    title: "Lead Generation",
    icon: "📱",
  },
  {
    title: "Funnel Optimization",
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
    title: "Database Reactivation",
    icon: "📊",
  },
]

export function GrowthSystem() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-foreground mb-4 max-w-2xl mx-auto">
            Our Growth System
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {growthPillars.map((pillar, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-colors group shadow-sm rounded-2xl"
            >
              <CardContent className="p-5 text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-foreground leading-tight">
                  {pillar.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
