import Image from "next/image"

export function RapportSection() {
  return (
    <section className="py-16 bg-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="relative w-20 h-20 mb-8">
            <Image
              src="/images/founder-guillermo.jpeg"
              alt="Guillermo Frias, Founder of IncreaseMembers.com"
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <p className="text-lg text-muted-foreground">
            "As a former sport director at a prestigious membership club with marketing and AI expertise, I created
            IncreaseMembers.com to help prestigious membership clubs overcome challenges and grow with proven strategies
            and smart automation."
          </p>
          <p className="text-base font-medium text-foreground mt-4">- Guillermo Frias, Founder, IncreaseMembers.com</p>
        </div>
      </div>
    </section>
  )
}
