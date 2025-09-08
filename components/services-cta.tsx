import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-slate-900 border-0 text-white max-w-2xl mx-auto">
          <CardContent className="p-7 text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Ready to Transform Your Club?</h3>

            <p className="text-base opacity-90 mb-5 max-w-xl mx-auto leading-relaxed">
              <span className="block md:hidden">Book a free strategy call to grow your club.</span>
              <span className="hidden md:block">
                Let's discuss how our AI-powered marketing system can fill your courts, boost memberships, and grow your
                revenue. Book a free strategy call today.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="default"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3"
                >
                  Book Free Strategy Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="default"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-white/20 backdrop-blur-sm px-6 py-3"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
