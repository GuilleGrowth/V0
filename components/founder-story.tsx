import { Card } from "@/components/ui/card"

export default function FounderStory() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-background border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-03%20at%203.38.09%20PM-GZ9vuVl8vP46GU89T8gAbQdql4Ury1.png"
                  alt="Founder at padel wellness club"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                    From Sport Director to Growth Expert
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Guillermo Frias worked as a sport director at multiple racket sports clubs, gaining deep insights
                    into the industry's challenges. With extensive experience in marketing and AI technology, he
                    combined these skills to create the ultimate growth strategy for racket sports clubs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Industry Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Years of hands-on experience as a sport director in racket clubs, understanding every aspect
                        from court operations to member retention and revenue optimization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Marketing & AI Expertise</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Advanced expertise in digital marketing strategies combined with cutting-edge AI technology to
                        create automated systems that drive consistent growth and member engagement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">The Ultimate Strategy</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        RacketGrowth represents the perfect fusion of industry knowledge, marketing expertise, and AI
                        innovation - delivering the ultimate growth strategy specifically designed for racket sports
                        clubs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
