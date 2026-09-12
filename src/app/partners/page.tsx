"use client";

import { partners } from "@/components/data_models/conferences";
import { PartnersHero } from "@/components/sections/PartnersHero";
import { Button } from "@/components/ui/button";
import TestimonialV2 from "@/components/ui/testimonial-v2";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PartnersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = partners.map((partner) => ({
    name: partner.name,
    image: partner.logo,
    href: partner.url,
  }))

  return (
    <div>
      <PartnersHero />

      {/* Partners Display */}

      <TestimonialV2 items={items} variant="logo" showHeading={false} />

        <section className="container mx-auto pt-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-green-800 font-bold text-center">
              Ready to Become a Partner?
            </h2>
            <p className="text-center text-gray-600 md:text-lg mt-2">
              Join us in creating positive change and driving innovation.
              Together, we can achieve more.
            </p>

            <Button
              variant="outline"
              className="w-fit text-green-700 border-green-700 rounded-lg font-semibold transition-colors duration-200 mt-4"
              onClick={() => setIsModalOpen(true)}
            >
              Become a Partner
            </Button>
          </div>
      </section>

      {/* Modal for Google Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] h-full overflow-hidden pb-32">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-green-800">
                Become a Partner
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Modal Content */}
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScVIYFm-SzrXsJCaO2Lt6gYAjoYgUgVte_VFZNTHt8ZCSfhBA/viewform?embedded=true" width="100%" height="100%" className="h-full w-full" >Loading…</iframe>
          </div>
        </div>
      )}
    </div>
  );
}
