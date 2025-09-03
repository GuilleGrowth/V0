import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudyTeaser() {
  return (
    <section className="pt-4 pb-8 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-slate-900 border-0 text-white max-w-2xl mx-auto">
          <CardContent className="p-4 text-center">
            <div className="mb-4">
              <div className="text-2xl font-bold font-heading mb-1">+107%</div>
              <div className="text-base opacity-90">Revenue Growth</div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-heading mb-3">How we doubled revenue in one year</h3>

            <p className="text-sm opacity-90 mb-4 max-w-xl mx-auto leading-relaxed">
              See how our AI-powered marketing system transformed a struggling padel club into a thriving, fully-booked
              facility with consistent bookings and doubled their revenue.
            </p>

            <Link href="/case-studies">
              <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Read Full Case Study
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
