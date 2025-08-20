import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary via-secondary to-accent border-0 text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Transform Your Club?</h3>

            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI-powered marketing system can fill your courts, boost memberships, and grow your
              revenue. Book a free strategy call today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4"
                >
                  Book Free Strategy Call
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-background/20 backdrop-blur-sm px-8 py-4"
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
