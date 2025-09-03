import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedCaseStudy() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Featured Success Story</h2>
          </div>

          <Card className="bg-card border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reserve%20Padel.jpg-FEBNT2zTSTcs9w9XEhI2vlob1UUHgk.jpeg"
                  alt="Reserve Padel Design District logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl md:text-3xl font-bold font-heading text-card-foreground mb-2">
                    Reserve Padel Design District
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold font-heading text-accent mb-1">+110%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold font-heading text-accent mb-1">89%</div>
                      <div className="text-sm text-muted-foreground">Court Utilization</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 mb-6">
                    <p className="text-card-foreground italic mb-2">
                      "RacketGrowth transformed our business completely. We went from worrying about empty courts to
                      having consistent bookings and achieved 110% revenue growth in just one year."
                    </p>
                    <cite className="text-sm text-muted-foreground">— Reserve Padel Design District Team</cite>
                  </blockquote>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
