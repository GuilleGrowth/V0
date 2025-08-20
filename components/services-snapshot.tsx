import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "AI & Automation",
    description: "Email/SMS automation, personalized messaging, data reporting",
    features: ["Smart Campaign Management", "Behavioral Triggers", "Performance Analytics"],
    icon: "🤖",
  },
  {
    title: "Marketing & Ads",
    description: "Paid ads, lead generation, event promotions",
    features: ["Targeted Ad Campaigns", "Lead Nurturing", "Event Marketing"],
    icon: "📈",
  },
  {
    title: "Web Development",
    description: "Club websites optimized for booking & lead capture",
    features: ["Booking Integration", "Mobile Optimization", "Conversion Tracking"],
    icon: "💻",
  },
]

export function ServicesSnapshot() {
  return (
    <section className="py-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Some of Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your racket sports club into a thriving business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold font-heading text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-card-foreground flex items-center justify-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
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
