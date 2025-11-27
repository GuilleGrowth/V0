export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Blue to black gradient section */}
      <div className="h-32 bg-gradient-to-b from-blue-600 to-black" />

      {/* Main footer content */}
      <div className="bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Copyright and registration info */}
          <p className="text-sm md:text-base">Copyright© 2023 INCREASE MEMBERS LLC</p>
          <p className="text-sm md:text-base">
            Registered number:
            <br />
            <span className="font-semibold">L25000514771</span>
          </p>
          <p className="text-sm md:text-base">Registered Office Address: 255 SW 11TH ST 302</p>

          {/* Facebook disclaimer */}
          <p className="text-xs md:text-sm max-w-3xl mx-auto pt-4">
            This site is not part of a Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by
            Facebook in any way. FACEBOOK is a trademark of FACEBOOK, inc.
          </p>

          {/* Legal links */}
          <div className="pt-4">
            <div className="flex justify-center items-center gap-2 text-sm md:text-base flex-wrap">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/terms" className="hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="/earnings-disclaimer" className="hover:text-blue-400 transition-colors">
                Earnings Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
