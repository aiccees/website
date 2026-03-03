import { registrationLink } from "@/components/data_models/conferences";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function PublicationsPage() {
  const editorialBoard = [

    {
      id: 1,
      name: "Professor Roland Uhunmwangho",
      school: "University of Port Harcourt",
    },
    {
      id: 3,
      name: "Professor Sunday Oyedepo",
      school: "Bells University",
    },
    {
      id: 5,
      name: "Dr. Veronica Akpasoh",
      school: "CEO Tovero Energy Ltd.",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#008751] tracking-tight sm:text-4xl md:text-5xl">
          Journal of Clean Energy, Circular Economy and Digitalisation
        </h1>
      </div>

      <section className="flex flex-col-reverse md:flex-row-reverse gap-8">
        <div className="p-2 md:p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Journal</h2>
          <p className="text-gray-700 leading-relaxed">
            The <span className="text-red-600 font-bold">Journal of Clean Energy, Circular Economy, and Digitalisation</span> (JCECED; ISSN:3092-9199; ISSN-L:3092-9199;) is a peer-reviewed publication dedicated to advancing research and innovation in
            sustainable energy, circular economy strategies, and digital transformation.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 my-3">Scope of the Journal</h3>
          <p className="text-gray-700 mb-3">
            The journal covers topics related to the <span className="text-red-600 font-bold">Africa International Conference on Clean Energy and Energy Storage (AICCEES)</span>, including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Theme 1 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Energy Access, Supply & Transition Pathways</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Universal access (grid, mini-grids, stand-alone systems)</li>
                <li>Policy, governance, and enabling regulations</li>
                <li>Energy transition finance and investment models</li>
              </ul>
            </Card>
            {/* Theme 2 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Renewable Energy Systems & Productive Use</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Solar, wind, hydro, geothermal innovations</li>
                <li>Productive use of energy in agriculture, industry, and services</li>
                <li>Energy-water-food nexus</li>
              </ul>
            </Card>
            {/* Theme 3 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Hydrogen, Biofuels & Clean Fuels for Africa</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Hydrogen economy opportunities</li>
                <li>Bioenergy and biofuels for transport and industry</li>
                <li>CNG, LNG, and other transition fuels</li>
              </ul>
            </Card>
            {/* Theme 4 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Energy Storage, Smart Grids & Digital Solutions</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Battery manufacturing & recycling in Africa</li>
                <li>Grid integration, flexibility, and digital energy systems</li>
                <li>AI, IoT, and blockchain for energy efficiency</li>
              </ul>
            </Card>
            {/* Theme 5 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Clean Cooking, Health & Social Inclusion</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>E-cooking, LPG, and modern cooking fuels</li>
                <li>Gender, health, and social impacts of clean cooking</li>
                <li>Financing and scaling adoption</li>
              </ul>
            </Card>
            {/* Theme 6 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Sustainable Mobility & Transport Decarbonization</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Electric vehicles (EVs), charging infrastructure, e-mobility</li>
                <li>CNG for transport and hybrid systems</li>
                <li>Policies for clean, affordable mobility</li>
              </ul>
            </Card>
            {/* Theme 7 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Waste-to-Energy, Circular Economy & Carbon Markets</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Waste valorization for energy</li>
                <li>Recycling, e-waste, and circular economy approaches</li>
                <li>Carbon credits and climate finance mechanisms</li>
              </ul>
            </Card>
            {/* Theme 8 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Climate Change, Adaptation & Resilience in Africa</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Energy solutions for climate adaptation</li>
                <li>Resilient infrastructure for vulnerable communities</li>
                <li>Role of youth and innovation in climate action</li>
              </ul>
            </Card>
            {/* Theme 9 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Hydropower & Agri-food Systems</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Small- and large-scale hydro development</li>
                <li>Energy for irrigation, processing, and storage</li>
                <li>Reducing post-harvest losses with clean energy</li>
              </ul>
            </Card>
            {/* Theme 10 */}
            <Card className="border hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="font-semibold text-green-800">Policy, Capacity Building & Just Energy Transition</CardHeader>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-600 space-y-1 pb-4">
                <li>Skills development for Africa’s energy workforce</li>
                <li>Equity, inclusion, and just transition principles</li>
                <li>Strengthening academia-industry-government collaboration</li>
              </ul>
            </Card>
          </div>
          <p className="text-gray-700 mt-3">
            Papers from AICCEES are published in this journal, contributing to the global discourse on clean energy and sustainable development.
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            <Button asChild className="bg-green-800 text-white hover:bg-green-700">
              <Link target="_blank" href={registrationLink}>
                Register for conference
              </Link>
            </Button>
            <Link
              href="mailto:aiccees@uniport.edu.ng"
              target="_blank"
              className="bg-red-600 text-white hover:bg-red-700 rounded-md px-4 py-2 text-sm font-medium"
            >
              Submit Your Paper
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white shadow border border-stone-200 rounded-lg p-6 w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Volume 1, Issue 1</h3>
            <p className="text-gray-600 mb-4">
              Explore the latest research and advancements in clean energy, circular economy, and digitalization.
            </p>
            <a
              href="https://drive.google.com/file/d/1v3Q0suPYSBnveEoNYcoyW2uyUDKamZ7C/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#008751] text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              View Issue
            </a>
          </div>
          <div className="bg-white shadow border border-stone-200 rounded-lg p-6 w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Volume 2, Issue 1</h3>
            <p className="text-gray-600 mb-4">
              Explore the latest research and advancements in clean energy, circular economy, and digitalization.
            </p>
            <a
              href="https://drive.google.com/file/d/1ar-jhplcWQMt8iKeM689RguY3RpUN8_Z/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#008751] text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              View Issue
            </a>
          </div>
        </div>
      </section>



      <section className="mt-12 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-green-800 pb-4">
          Editorial Board
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Editor-in-Chief
            </h3>
            <h4 className="text-lg font-medium text-gray-800 mb-1">
              Professor Ogheneruona Diemuodeke
            </h4>
            <p className="text-gray-600">University of Port Harcourt</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Managing/Associate Editor
            </h3>
            <h4 className="text-lg font-medium text-gray-800 mb-1">
              Professor Abam Fidelis
            </h4>
            <p className="text-gray-600">University of Calabar</p>
          </div>
        </div>


        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Editorial Advisory Board Members
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorialBoard.map((member) => (
              <div
                key={member.id}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-2 border-green-600"
              >
                <h4 className="text-lg font-medium text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
