import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Meta Ads & Lead Generation",
    features: ["Facebook & Instagram Ads", "Lead Qualification", "Conversion Tracking"],
    icon: "📱",
  },
  {
    title: "Automation & AI Systems",
    features: ["Email/SMS Automation", "AI Personalized Outreach", "Follow-up Sequences"],
    icon: "🤖",
  },
  {
    title: "Reporting & Analytics",
    features: ["Court Usage Reports", "Database Reactivation", "Performance Analytics"],
    icon: "📊",
  },
]

export function ServicesSnapshot() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-black">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-white">Some of Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full rounded-2xl"
            >
              <CardHeader className="text-center pb-4 sm:pb-6 p-5">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{service.icon}</div>
                <CardTitle className="text-lg sm:text-xl font-bold font-heading text-foreground leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 p-5">
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center text-sm font-medium">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
