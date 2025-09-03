export function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
            Built by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sports Industry Experts
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We understand the unique challenges of racket sports clubs because we've lived them. Our founder's
            experience as a sport director combined with cutting-edge AI technology creates the perfect solution for
            club growth.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
