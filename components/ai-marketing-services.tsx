import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aiServices = [
  {
    title: "Personal Automated Messaging",
    description:
      "AI-driven personalized communication that speaks directly to each member's interests and playing habits.",
    features: [
      "Behavioral trigger campaigns",
      "Personalized court recommendations",
      "Automated birthday & milestone messages",
      "Smart re-engagement sequences",
    ],
    icon: "💬",
  },
  {
    title: "Email & SMS Campaigns",
    description:
      "Sophisticated multi-channel campaigns that nurture leads and retain members through intelligent automation.",
    features: [
      "Drip campaign automation",
      "A/B testing optimization",
      "Segmented audience targeting",
      "Performance analytics dashboard",
    ],
    icon: "📧",
  },
  {
    title: "Database Reactivation",
    description: "Intelligent systems that identify and re-engage past players with targeted, compelling offers.",
    features: [
      "Predictive win-back modeling",
      "Personalized return incentives",
      "Automated follow-up sequences",
      "Success rate tracking",
    ],
    icon: "🔄",
  },
  {
    title: "AI Utilization Reports",
    description: "Advanced analytics that optimize court scheduling and identify revenue opportunities.",
    features: [
      "Peak time analysis",
      "Revenue optimization suggestions",
      "Member behavior insights",
      "Predictive booking patterns",
    ],
    icon: "📊",
  },
]

export function AIMarketingServices() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-card-foreground mb-6">
            AI-Powered Marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate your marketing, personalize member experiences, and
            maximize court utilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiServices.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary transition-all duration-300 group"
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
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
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
