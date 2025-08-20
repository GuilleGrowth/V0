import { Card, CardContent } from "@/components/ui/card"

export function ContactCTA() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary via-secondary to-accent border-0 text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Join 50+ Successful Racket Sports Clubs
            </h3>

            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't let another month go by with empty courts and missed opportunities. Take the first step toward
              transforming your club today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">24 Hours</div>
                <div className="text-sm opacity-80">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">30 Minutes</div>
                <div className="text-sm opacity-80">Free Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">Zero</div>
                <div className="text-sm opacity-80">Obligation</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
