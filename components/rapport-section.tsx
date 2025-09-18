import Image from "next/image"

export function RapportSection() {
  return (
    <section className="py-16 bg-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="relative w-11 h-11 mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-03%20at%203.38.09%20PM-LclalKibW8CEoB7xBI4rkwZsILhdNV.png"
              alt="Former sport director on padel court"
              fill
              className="rounded-full object-cover object-[center_80%] scale-[3.2] shadow-lg"
            />
          </div>
          <p className="text-lg text-muted-foreground">
            "As a former sport director with marketing and AI expertise, I created IncreaseMembers.com to help
            membership clubs overcome challenges and grow with proven strategies and smart automation."
          </p>
          <p className="text-base font-medium text-foreground mt-4">- Guillermo Frias, Founder, IncreaseMembers.com</p>
        </div>
      </div>
    </section>
  )
}
