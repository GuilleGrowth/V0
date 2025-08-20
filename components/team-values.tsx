import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    title: "Transparency",
    description: "Clear reporting, honest communication, and full visibility into your marketing performance.",
  },
  {
    title: "Results-Driven",
    description: "Every decision is backed by data and focused on measurable outcomes for your club.",
  },
  {
    title: "Innovation",
    description: "Continuously evolving our AI systems to stay ahead of industry trends and opportunities.",
  },
  {
    title: "Partnership",
    description: "We succeed when you succeed. Your growth is our primary measure of success.",
  },
]

export function TeamValues() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do for our racket sports club partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-border text-center hover:border-primary transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold font-heading text-card-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
