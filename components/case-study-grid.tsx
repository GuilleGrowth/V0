import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    title: "Tennis Pro Academy",
    location: "Barcelona, Spain",
    type: "Tennis Club • 12 Courts",
    challenge: "Low junior program enrollment and seasonal revenue fluctuations",
    results: [
      { metric: "127%", description: "Junior enrollment increase" },
      { metric: "43%", description: "Off-season revenue growth" },
    ],
    quote: "Our junior programs are now fully booked year-round thanks to their targeted campaigns.",
    author: "Maria Santos, Director",
    image: "/young-tennis-academy.png",
  },
  {
    title: "Urban Pickleball Hub",
    location: "Austin, Texas",
    type: "Pickleball Club • 6 Courts",
    challenge: "New club struggling to build awareness and attract members in competitive market",
    results: [
      { metric: "89%", description: "Membership target achieved" },
      { metric: "156%", description: "Social media growth" },
    ],
    quote: "We reached our first-year membership goals in just 4 months with their help.",
    author: "Jake Thompson, Founder",
    image: "/modern-pickleball-courts-players.png",
  },
]

export function CaseStudyGrid() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-card-foreground mb-6">
            More Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary transition-colors group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold font-heading text-foreground">{study.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <div>{study.location}</div>
                  <div>{study.type}</div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Challenge: {study.challenge}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold font-heading text-accent mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-accent pl-3 mb-4">
                  <p className="text-sm text-foreground italic mb-2">"{study.quote}"</p>
                  <cite className="text-xs text-muted-foreground">— {study.author}</cite>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
