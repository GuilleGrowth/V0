import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudyTeaser() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Card className="bg-slate-900 border-0 text-white max-w-2xl mx-auto">
          <CardContent className="p-6 md:p-8 text-center">
            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">+107%</div>
              <div className="text-base md:text-lg opacity-90">Revenue Growth</div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-heading mb-4 max-w-xl mx-auto">
              How we doubled revenue in one year
            </h3>

            <p className="text-sm md:text-base opacity-90 mb-6 max-w-xl mx-auto leading-relaxed">
              See how our AI-powered marketing system transformed a padel club into a thriving, fully-booked facility
              with consistent bookings and doubled their revenue.
            </p>

            <Link href="/case-studies">
              <Button
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11 px-6 rounded-xl"
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
