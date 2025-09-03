import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 relative">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-background/95 backdrop-blur-sm border-border max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-heading text-foreground mb-4">
              Get Your Free Strategy Call
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXmh0MHKY8MsSiMy6bteO0ScgNedg6mqiWeu4zeoDqjWmxCQ/viewform?embedded=true"
                width="100%"
                height="906"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="max-w-2xl"
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
