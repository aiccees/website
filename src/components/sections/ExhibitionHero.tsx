import { Badge } from "../ui/badge";

import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { officeNumber } from "@/lib/utils";

export function ExhibitionHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-emerald-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 pb-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 px-4 py-2 bg-green-500/20 text-green-100 border-green-400/30">
            <Star className="w-4 h-4 mr-2" />
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-lime-400 bg-clip-text text-transparent">
            Exhibitions
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Exhibitions are paid for and negotiable. Companies, Organisations and Individuals interested in exhibiting
            their products and services at the conference should contact the conference organisers on {officeNumber} or
            via email: aiccees@uniport.edu.ng.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
        </div>
        </div>
      </div>
    </div>
  );
}
