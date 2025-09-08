import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const webServices = [
  {
    title: "Custom Club Websites",
    description: "Mobile-optimized club websites with integrated booking systems.",
    features: ["Responsive design", "Court booking integration", "Member portal access", "SEO optimization"],
    icon: "🌐",
  },
  {
    title: "Booking System Integration",
    description: "Seamless integration with booking platforms for court reservations.",
    features: ["Real-time availability", "Payment processing", "Automated confirmations", "Cancellation management"],
    icon: "📅",
  },
  {
    title: "Landing Pages",
    description: "High-converting pages for campaigns, events, and membership drives.",
    features: ["Conversion optimization", "A/B testing capabilities", "Lead capture forms", "Analytics integration"],
    icon: "🎨",
  },
  {
    title: "Member Management Systems",
    description: "Platforms for managing memberships, payments, and communications.",
    features: ["Membership tracking", "Payment automation", "Communication tools", "Reporting dashboard"],
    icon: "👥",
  },
]

export function WebDevelopmentServices() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-card-foreground mb-6">
            Websites & Digital Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites and tools that streamline operations and enhance member experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webServices.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-secondary transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold font-heading text-foreground">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
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
