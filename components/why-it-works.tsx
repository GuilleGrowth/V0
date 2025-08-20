import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    title: "Industry Expertise",
    description:
      "We've managed racket sports facilities and understand the operational challenges, seasonal patterns, and member behavior unique to this industry.",
    icon: "🏆",
  },
  {
    title: "Technology Innovation",
    description:
      "Our AI systems are specifically designed for racket sports clubs, not generic marketing tools adapted for our industry.",
    icon: "⚡",
  },
  {
    title: "Proven Methodology",
    description:
      "Our growth system is battle-tested across different club types, sizes, and markets with consistent, measurable results.",
    icon: "🔬",
  },
  {
    title: "Ongoing Partnership",
    description:
      "We don't just set up systems and leave. We continuously optimize and adapt strategies based on your club's evolving needs.",
    icon: "🤝",
  },
]

export function WhyItWorks() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-card-foreground mb-6">
            Why Our System Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The perfect combination of industry expertise and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-background border-border hover:border-accent transition-colors group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
