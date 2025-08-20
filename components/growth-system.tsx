import { Card, CardContent } from "@/components/ui/card"

const growthPillars = [
  {
    title: "Community Growth & Engagement",
    description: "Personal automatic messaging, SMS & email campaigns",
    icon: "👥",
  },
  {
    title: "Company Event Acquisition",
    description: "Personalized outreach to attract corporate events",
    icon: "🏢",
  },
  {
    title: "Database Reactivation",
    description: "Re-engage past players with targeted invites",
    icon: "🔄",
  },
  {
    title: "AI Court Utilization Reports",
    description: "Analyze & optimize court scheduling to make the most of your slow hours",
    icon: "📊",
  },
  {
    title: "Smart AI Coach Lesson System",
    description: "Automated system for setting up coaching lessons and scheduling",
    icon: "🎯",
  },
  {
    title: "Member and Player Experience Optimization",
    description:
      "Feedback loops, satisfaction tracking & automated personalized responses to inquiries. Membership onboarding AI system",
    icon: "⭐",
  },
]

export function GrowthSystem() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-card-foreground mb-4">Our Growth System</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Six proven pillars that transform racket sports clubs into thriving, profitable businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {growthPillars.map((pillar, index) => (
            <Card key={index} className="bg-background border-border hover:border-accent transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{pillar.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
