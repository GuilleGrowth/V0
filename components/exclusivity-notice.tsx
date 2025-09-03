import { AlertCircle } from "lucide-react"

export function ExclusivityNotice() {
  return (
    <section
      className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/modern-padel-tennis-action.png')" }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Limited Availability</h2>
          </div>
          <p className="text-lg text-slate-200 mb-4 max-w-3xl mx-auto">
            To ensure exceptional results and personalized attention, we partner with only{" "}
            <span className="text-amber-400 font-semibold">two racket sports clubs per discipline</span> in each
            regional area.
          </p>
          <p className="text-slate-300 max-w-2xl mx-auto">
            This exclusive approach allows us to dedicate the resources needed to maximize your club's growth potential.{" "}
            <span className="text-white font-medium">Secure your spot today.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
