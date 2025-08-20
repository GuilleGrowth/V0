import { Card } from "@/components/ui/card"

export function FounderStory() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-background border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/founder-padel-director.png"
                  alt="Founder at padel wellness club"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                    From Sport Director to Growth Expert
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our founder spent years as a sport director at a leading racket sports wellness club, experiencing
                    firsthand the daily challenges of filling courts, retaining members, and growing revenue.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Managing court utilization, member engagement, and growth with outdated systems and manual
                        processes that consumed valuable time and resources.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">The Vision</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Combining deep industry knowledge with AI technology to create automated systems that solve real
                        problems faced by racket sports clubs every day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">The Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        RacketGrowth was born from this experience - a specialized agency that understands both the
                        business side and the technical solutions needed for sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
