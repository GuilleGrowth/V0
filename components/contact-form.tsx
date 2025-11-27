"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 relative">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#2d4a8f] rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full px-8 py-6 rounded-full text-lg bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all"
              />
              <MessageSquare className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-8 py-6 rounded-full text-lg bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-8 py-6 rounded-full text-lg bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-4 pt-4">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                required
                className="w-6 h-6 mt-1 rounded border-2 border-white bg-white focus:ring-2 focus:ring-blue-300 flex-shrink-0"
              />
              <label htmlFor="consent" className="text-white text-base md:text-lg leading-relaxed">
                I consent to be contacted by INCREASE MEMBERS regarding their Sales Android and other services that may
                be applicable via SMS & Email. I also consent to their Privacy Policy.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-xl md:text-2xl font-bold py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 border-4 border-white"
              >
                Test Drive The Sales Android 👉
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
