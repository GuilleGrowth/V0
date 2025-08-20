export function HomepageContactForm() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transform Your Club?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a free strategy session and discover how AI-powered marketing can fill your courts and grow your
              membership.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
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
          </div>
        </div>
      </div>
    </section>
  )
}
