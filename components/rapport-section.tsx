import Image from "next/image"

export function RapportSection() {
  return (
    <section className="py-8 bg-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="relative w-40 h-40 mb-5">
            <Image
              src="/founder-racket-portrait.png"
              alt="Founder with racket equipment"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <p className="text-base text-muted-foreground">
            "As a former sport director, I understand the unique challenges racket sports clubs face. That's why I
            created RacketGrowth - to help clubs like yours thrive with proven marketing strategies."
          </p>
          <p className="text-sm font-medium text-foreground mt-3">- Founder, RacketGrowth</p>
        </div>
      </div>
    </section>
  )
}
