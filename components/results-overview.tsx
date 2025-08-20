import { Card, CardContent } from "@/components/ui/card"

const overallResults = [
  {
    metric: "78%",
    description: "% of revenue",
    period: "increase in one year",
  },
  {
    metric: "92%",
    description: "% of book classes",
    period: "over 6 months",
  },
  {
    metric: "65%",
    description: "% of corporate events booked",
    period: "within 4 months",
  },
  {
    metric: "84%",
    description: "% of new memberships",
    period: "growth in 8 months",
  },
]

export function ResultsOverview() {
  return (
    <section className="py-8 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold font-heading text-card-foreground mb-2">
            Results That Speak for Themselves
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Aggregate results across all our racket sports club clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {overallResults.map((result, index) => (
            <Card key={index} className="bg-background border-border text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold font-heading text-accent mb-1">{result.metric}</div>
                <div className="text-xs text-foreground font-semibold mb-1">{result.description}</div>
                <div className="text-xs text-muted-foreground">{result.period}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
