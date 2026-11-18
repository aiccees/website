"use client"
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import AOS from '../layout/AOS'
import {
  BatteryCharging,
  Building2,
  CarFront,
  CookingPot,
  Cpu,
  Factory,
  Flame,
  Landmark,
  PlugZap,
  Recycle,
  ShieldCheck,
  Sun,
  type LucideIcon,
} from 'lucide-react'

// The twelve thematic areas (AICCEES 2027 Information Booklet; theme 11 updated November 2026).
// Each theme shows its topics as bullet points.
const themes: { title: string; icon: LucideIcon; points: string[] }[] = [
  {
    title: 'Energy Access, Reliability and Productive Use',
    icon: PlugZap,
    points: [
      'Universal access, mini-grids and small hydropower',
      'Distributed energy and rural electrification',
      'Energy for healthcare, education, agriculture and MSMEs',
    ],
  },
  {
    title: 'Renewable Energy Manufacturing and African Industrialisation',
    icon: Factory,
    points: [
      'African manufacture of solar modules, inverters and balance-of-system components',
      'Wind technologies and clean energy appliances',
      'Supply chains, local content and quality assurance',
    ],
  },
  {
    title: 'Energy Storage, Battery Value Chains and Critical Minerals',
    icon: BatteryCharging,
    points: [
      'Battery technologies and long-duration storage',
      'Mineral beneficiation and local assembly',
      'Testing and standards',
      'Recycling and second-life batteries',
    ],
  },
  {
    title: 'Next-Generation Solar and Emerging Clean Energy Technologies',
    icon: Sun,
    points: [
      'Perovskites, organic photovoltaics and tandem cells',
      'Advanced materials and smart energy materials',
      'Emerging storage',
      'Routes from laboratory to product',
    ],
  },
  {
    title: 'Grid Modernisation, Digital Energy and Artificial Intelligence',
    icon: Cpu,
    points: [
      'Smart grids, forecasting and demand response',
      'Flexibility, advanced metering and digital twins',
      'AI, IoT and cybersecurity',
      'Data-driven energy planning',
    ],
  },
  {
    title: 'Clean Cooking, Household Energy and Inclusive Energy Transition',
    icon: CookingPot,
    points: [
      'Electric cooking, LPG, biogas and ethanol',
      'Improved cooking systems',
      'Appliance finance and carbon finance',
      'Health, gender and underserved households',
    ],
  },
  {
    title: 'Sustainable Mobility, Electric Transport and Clean Fuels',
    icon: CarFront,
    points: [
      'Electric vehicles, two- and three-wheelers and public transport',
      'Battery swapping and charging',
      'Mobility manufacturing',
      'CNG, biofuels and hydrogen mobility',
    ],
  },
  {
    title: 'Hydrogen, Gas Transition and Industrial Decarbonisation',
    icon: Flame,
    points: [
      'Green and turquoise hydrogen and methane pyrolysis',
      'Gas utilisation and flare conversion',
      'Industrial heat',
      'Fertiliser, steel, cement and hard-to-abate sectors',
    ],
  },
  {
    title: 'Circular Economy, Waste-to-Energy and Carbon Value Creation',
    icon: Recycle,
    points: [
      'Waste valorisation, biomass and biochar',
      'Biogas and e-waste',
      'Industrial symbiosis and circular manufacturing',
      'Carbon utilisation and carbon markets',
    ],
  },
  {
    title: 'Climate Resilience, Energy Security and Resilient Infrastructure',
    icon: ShieldCheck,
    points: [
      'Climate-proof energy systems',
      'Extreme weather resilience and disaster preparedness',
      'The water-energy-food nexus',
      'Resilient cities and energy security',
    ],
  },
  {
    title: 'Energy Efficiency, Green Buildings and Smart Architecture',
    icon: Building2,
    points: [
      'Passive cooling, natural ventilation and daylighting',
      'Energy-efficient roofs, walls and windows',
      'Efficient air conditioning, fans and lighting',
      'Smart controls and building energy management',
      'Energy audits, retrofits and measured savings',
      'Green building standards and lifecycle costs',
    ],
  },
  {
    title: 'Finance, Policy, Regional Markets and a Just Energy Transition',
    icon: Landmark,
    points: [
      'Blended, local currency and carbon finance',
      'Policy reform and standards',
      'Regional electricity markets and AfCFTA opportunities',
      'Skills, jobs, gender and youth',
    ],
  },
]

const ConferenceThemes = () => {
  return (
    <AOS>
      <section id="themes" className="w-full bg-green-50 py-12 md:pb-24">
        <div className="container md:w-11/12 mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">
            Conference Thematic Areas
          </h2>
          <p className="text-gray-500 mb-8">
            The scope of the Africa International Conference on Clean Energy and
            Energy Storage (AICCEES) includes contemporary and original research,
            as well as innovative solutions for the clean energy sector and energy
            storage systems. The twelve thematic areas below guide paper
            submissions, panels, demonstrations and partnership proposals; the
            final programme may combine related topics into sessions. Manuscripts
            should be between 6 to 12 pages, including references. Once submitted,
            papers are promptly forwarded to our reviewers, with decisions typically
            provided within 48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => {
              const Icon = theme.icon
              return (
                <Card
                  key={theme.title}
                  className="border hover:shadow-lg transition-shadow duration-200"
                >
                  <CardHeader>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-10 h-10" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <CardTitle className="text-center text-lg leading-snug">
                        <span className="text-green-700">{index + 1}.</span> {theme.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm text-gray-600 leading-relaxed">
                      {theme.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="text-gray-500 mt-8">
            We encourage work that combines technical evidence with implementation
            conditions. Affordability, local skills, ownership, gender inclusion,
            environmental performance and the needs of underserved communities
            should be considered wherever relevant.
          </p>
        </div>
      </section>
    </AOS>
  )
}

export default ConferenceThemes
