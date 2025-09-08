export function HomepageContactForm() {
  return (
    <section className="py-10 sm:py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-foreground mb-4 leading-tight">
              Ready to{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent">
                Transform Your Club?
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get a free strategy session and discover how AI-powered marketing can fill your courts and grow your
              membership.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="w-full flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXmh0MHKY8MsSiMy6bteO0ScgNedg6mqiWeu4zeoDqjWmxCQ/viewform?embedded=true"
                width="100%"
                height="906"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="max-w-2xl w-full h-auto aspect-video sm:aspect-auto sm:h-[906px]"
                loading="lazy"
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
