import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To empower racket sports clubs with AI-driven marketing solutions that transform empty courts into thriving
            communities and struggling businesses into profitable enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-card border-border text-center">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-primary-foreground">🎯</div>
              </div>
              <CardTitle className="text-xl font-bold font-heading text-card-foreground">Targeted Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We focus exclusively on racket sports clubs, understanding the unique dynamics of padel, tennis, and
                pickleball communities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-accent-foreground">🤖</div>
              </div>
              <CardTitle className="text-xl font-bold font-heading text-card-foreground">AI-Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our systems leverage artificial intelligence to automate marketing, optimize operations, and deliver
                personalized member experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-white">📈</div>
              </div>
              <CardTitle className="text-xl font-bold font-heading text-card-foreground">Measurable Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Every strategy is data-driven with clear metrics and ROI tracking to ensure sustainable, profitable
                growth for your club.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
