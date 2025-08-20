import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advertisingServices = [
  {
    title: "Paid Advertising Campaigns",
    description:
      "Strategic ad campaigns across Google, Facebook, and Instagram designed specifically for racket sports clubs.",
    features: [
      "Google Ads optimization",
      "Facebook & Instagram advertising",
      "Local search domination",
      "Conversion tracking & ROI analysis",
    ],
    icon: "🎯",
  },
  {
    title: "Lead Generation Systems",
    description: "Comprehensive lead capture and nurturing systems that convert prospects into paying members.",
    features: ["Landing page optimization", "Lead magnet creation", "Automated lead scoring", "CRM integration"],
    icon: "🧲",
  },
  {
    title: "Corporate Event Marketing",
    description: "Specialized campaigns targeting businesses for corporate events, team building, and tournaments.",
    features: [
      "B2B outreach campaigns",
      "Corporate package development",
      "Event promotion strategies",
      "Partnership development",
    ],
    icon: "🏢",
  },
  {
    title: "Social Media Growth",
    description: "Engaging content strategies and community management that build your club's online presence.",
    features: [
      "Content calendar planning",
      "Community engagement",
      "Influencer partnerships",
      "User-generated content campaigns",
    ],
    icon: "📱",
  },
]

export function AdvertisingServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Advertising & Growth Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic advertising campaigns that attract new members, fill courts, and generate consistent revenue
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advertisingServices.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold font-heading text-card-foreground">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-card-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
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
