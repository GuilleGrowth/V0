import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudyTeaser() {
  return (
    <section className="pt-8 pb-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary to-secondary border-0 text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="text-4xl font-bold font-heading mb-2">+107%</div>
              <div className="text-lg opacity-90">Revenue Growth</div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">How we doubled revenue in one year</h3>

            <p className="text-base opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              See how our AI-powered marketing system transformed a struggling padel club into a thriving, fully-booked
              facility with consistent bookings and doubled their revenue.
            </p>

            <Link href="/case-studies">
              <Button
                size="lg"
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Read Full Case Study
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
