import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudiesCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary via-secondary to-accent border-0 text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Be Our Next Success Story?</h3>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4"
                >
                  Schedule Strategy Call
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
