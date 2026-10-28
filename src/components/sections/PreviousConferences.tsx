"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Lightbulb } from "lucide-react";

// "AICCEES in Retrospect": past editions, newest first.
// Text from the AICCEES 2027 Information Booklet. To add a new year,
// copy one block to the top of the list and change the details.
type Edition = {
  year: string;
  edition: string;
  paragraphs: string[];
  highlight?: { title: string; text: string };
  stats?: string[];
  topics?: string[];
};

const editions: Edition[] = [
  {
    year: "2026",
    edition: "4th Edition",
    paragraphs: [
      "The 4th edition held on 24th & 25th September, 2026 at the Institute of Petroleum and Energy Studies (IPES) Hall, University of Port Harcourt, Nigeria. The two-day convergence was a hybrid event, themed \u201CAdvancing Africa\u2019s Clean Energy Future: Integrated Pathways for Access, Innovation, and a Just Transition\u201D.",
      "The event featured 4 keynote addresses and 2 plenary sessions, one of which was a special session on Next Generation Solar anchored by the Africa Centre of Excellence in Future Energies and Electrochemical Systems (ACE-FUELS).",
      "Exhibitions were held by clean energy companies including Power Base and Lapomik Energies, showcasing technologies, products and services across the clean energy and energy storage value chain.",
    ],
    highlight: {
      title: "Clean Energy Innovation Challenge",
      text: "A defining feature of the edition was the first Clean Energy Innovation Challenge, in which 15 finalists selected from 110 applicants were mentored by industry experts and pitched their innovations at the conference.",
    },
    stats: [
      "321 total attendees",
      "40% female participation",
      "21 papers presented",
      "5 scholarship beneficiaries",
      "15 key sector players",
    ],
  },
  {
    year: "2025",
    edition: "3rd Edition",
    paragraphs: [
      "The 3rd edition held on 26th & 27th September, 2025 at the Institute of Petroleum and Energy Studies (IPES) Hall, University of Port Harcourt, Nigeria. The two-day convergence was a hybrid event and attracted attendance from various countries.",
      "The event highlighted 7 insightful keynote speeches, 2 expository plenary sessions and a Business Innovation and Mentorship session, focused on Knowledge Exchange, Collaboration and Networking, Policy Development, and Capacity Building.",
    ],
    stats: ["1,826 participants", "46% female participation"],
  },
  {
    year: "2024",
    edition: "2nd Edition",
    paragraphs: [
      "The 2nd edition held physically and virtually on the 26th & 27th of September 2024 at the Institute of Petroleum and Energy Studies (IPES) hall, University of Port Harcourt. This edition was themed \u201CEmpowering Africa\u2019s Sustainable Energy Future\u201D, which underscored our commitment to catalyzing positive change in the continent\u2019s energy landscape.",
    ],
    topics: [
      "Energy Storage & Sustainable Battery Manufacturing",
      "Hydrogen Development",
      "Renewable Energy Systems",
      "Energy Transition Finance",
      "Energy Supply & Access",
      "Clean Mobility",
      "Mini-grids & Hydropower",
      "Energy Efficiency & Smart Systems",
      "Clean Cooking",
      "Waste to Energy",
    ],
  },
  {
    year: "2023",
    edition: "Maiden Edition",
    paragraphs: [
      "The maiden edition of AICCEES was successfully held virtually (via Zoom) on the 23rd & 24th September, 2023. The two-day virtual event witnessed a cumulative of 670 participants from across Africa, with two major keynote speakers who addressed \u201CAfrican Energy Future: Beyond Extractivism\u201D and \u201CThe role of Industry-Academia Collaboration in Advancing Clean Energy Innovation in Africa\u201D.",
      "A total of 13 professionals from the industry constituted panelists for 4 insightful plenaries covering clean cooking challenges, financing Africa\u2019s energy transition, the clean mobility landscape, and battery materials and manufacturing in Africa. The event experienced 40% inclusion of women in participation, both as attendees, panelists, paper presenters and keynote speakers.",
    ],
    topics: [
      "Battery Material & Manufacturing",
      "Hydrogen Development",
      "Energy Transition in Africa",
      "Energy Transition Economics",
      "Renewable Energy Systems",
      "Clean Mobility",
      "Clean Cooking",
      "Energy Transition Finance",
      "Mini-grids",
    ],
  },
];

export default function PreviousConferences() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4 text-green-800">
          AICCEES in Retrospect
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {editions.map((item, index) => {
          const red = index % 2 === 0;
          return (
            <Card
              key={item.year}
              className={`${red ? "border-red-200" : "border-green-200"} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader
                className={`bg-gradient-to-r border-b ${red ? "from-red-50 to-red-100 border-red-200" : "from-green-50 to-green-100 border-green-200"}`}
              >
                <CardTitle
                  className={`text-2xl flex flex-wrap items-center gap-x-3 gap-y-1 ${red ? "text-red-700" : "text-green-700"}`}
                >
                  <span className="flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    AICCEES {item.year}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {item.edition}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {item.paragraphs.map((text, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {text}
                    </p>
                  ))}

                  {item.highlight && (
                    <div className="border-l-4 border-green-600 bg-green-50 rounded-r-md p-4">
                      <p className="flex items-center text-sm font-semibold uppercase tracking-wide text-green-800 mb-1">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        {item.highlight.title}
                      </p>
                      <p className="text-gray-700 leading-relaxed">{item.highlight.text}</p>
                    </div>
                  )}

                  {item.stats && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.stats.map((stat) => (
                        <Badge
                          key={stat}
                          className={
                            red
                              ? "bg-red-100 text-red-700 border-red-300 hover:bg-red-100"
                              : "bg-green-100 text-green-700 border-green-300 hover:bg-green-100"
                          }
                        >
                          {stat}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {item.topics && (
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Topics covered</p>
                      <div className="flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="font-normal text-gray-700">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
