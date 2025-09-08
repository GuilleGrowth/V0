export function HomepageContactForm() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-foreground mb-4 leading-tight max-w-2xl mx-auto">
              Ready to{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent [&]:text-accent">
                Transform Your Club?
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="block md:hidden">Get a free strategy session to grow your membership.</span>
              <span className="hidden md:block">
                Get a free strategy session and discover how AI-powered marketing can fill your courts and grow your
                membership.
              </span>
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
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
