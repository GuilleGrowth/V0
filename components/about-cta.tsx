import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary via-secondary to-accent border-0 text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Partner with Us?</h3>

            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our industry expertise and AI-powered systems can transform your membership club.
              Schedule a free strategy call to explore the possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4"
                >
                  Schedule Strategy Call
                </Button>
              </Link>
              {/* Removed "Learn About Our Process" button */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
