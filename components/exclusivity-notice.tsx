import { AlertCircle } from "lucide-react"

export function ExclusivityNotice() {
  return (
    <section
      className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/modern-padel-tennis-action.png')" }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">Limited Availability</h2>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
            We partner with only two clubs in each area for exceptional results.
          </h3>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            This ensures dedicated resources for maximum growth.{" "}
            <span className="text-white font-medium">Secure your spot today.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
