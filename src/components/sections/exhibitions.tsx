"use client"

import React from "react"
// import { Button } from "@/components/ui/button"
import { officeNumber } from "@/lib/utils"

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#008751] sm:text-4xl md:text-5xl mb-4">
            Exhibitions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Exhibitions are paid for and negotiable. Companies, Organisations and Individuals interested in exhibiting
            their products and services at the conference should contact the conference organisers on {officeNumber} or
            via email: aiccees@uniport.edu.ng.
          </p>
        </div>
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="outline" className="border-[#008751] text-[#008751] hover:bg-[#008751]/10">
            <a href={`tel:${officeNumber}`}>
              Call: {officeNumber}
            </a>
          </Button>
          <Button asChild variant="outline" className="border-[#008751] text-[#008751] hover:bg-[#008751]/10">
            <a href="mailto:aiccees@uniport.edu.ng">
              Email: aiccees@uniport.edu.ng
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  )
}