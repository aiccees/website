"use client"
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import AOS from '../layout/AOS'
import {
  BatteryCharging,
  CarFront,
  CookingPot,
  Cpu,
  Factory,
  Flame,
  Landmark,
  Lightbulb,
  PlugZap,
  Recycle,
  ShieldCheck,
  Sun,
  type LucideIcon,
} from 'lucide-react'

// The twelve thematic areas, from the AICCEES 2027 Information Booklet.
const themes: { title: string; icon: LucideIcon; description: string }[] = [
  {
    title: 'Energy Access, Reliability and Productive Use',
    icon: PlugZap,
    description:
      'Universal access, mini-grids, small hydropower, distributed energy and rural electrification. Energy for healthcare, education, agriculture and MSMEs.',
  },
  {
    title: 'Renewable Energy Manufacturing and African Industrialisation',
    icon: Factory,
    description:
      'African manufacture of solar modules, inverters, balance-of-system components, wind technologies and clean energy appliances. Supply chains, local content and quality assurance.',
  },
  {
    title: 'Energy Storage, Battery Value Chains and Critical Minerals',
    icon: BatteryCharging,
    description:
      'Battery technologies and long-duration storage; mineral beneficiation; local assembly; testing and standards; recycling and second-life batteries.',
  },
  {
    title: 'Next-Generation Solar and Emerging Clean Energy Technologies',
    icon: Sun,
    description:
      'Perovskites, organic photovoltaics, tandem cells and advanced materials. Emerging storage, smart energy materials and routes from laboratory to product.',
  },
  {
    title: 'Grid Modernisation, Digital Energy and Artificial Intelligence',
    icon: Cpu,
    description:
      'Smart grids, forecasting, demand response, flexibility, advanced metering and digital twins. AI, IoT, cybersecurity and data-driven energy planning.',
  },
  {
    title: 'Clean Cooking, Household Energy and Inclusive Energy Transition',
    icon: CookingPot,
    description:
      'Electric cooking, LPG, biogas, ethanol and improved cooking systems. Appliance finance, carbon finance, health, gender and underserved households.',
  },
  {
    title: 'Sustainable Mobility, Electric Transport and Clean Fuels',
    icon: CarFront,
    description:
      'Electric vehicles, two- and three-wheelers, public transport, battery swapping and charging. Mobility manufacturing, CNG, biofuels and hydrogen mobility.',
  },
  {
    title: 'Hydrogen, Gas Transition and Industrial Decarbonisation',
    icon: Flame,
    description:
      'Green and turquoise hydrogen, methane pyrolysis, gas utilisation and flare conversion. Industrial heat, fertiliser, steel, cement and hard-to-abate sectors.',
  },
  {
    title: 'Circular Economy, Waste-to-Energy and Carbon Value Creation',
    icon: Recycle,
    description:
      'Waste valorisation, biomass, biochar, biogas, e-waste and industrial symbiosis. Circular manufacturing, carbon utilisation and carbon markets.',
  },
  {
    title: 'Climate Resilience, Energy Security and Resilient Infrastructure',
    icon: ShieldCheck,
    description:
      'Climate-proof energy systems, extreme weather resilience and disaster preparedness. The water-energy-food nexus, resilient cities and energy security.',
  },
  {
    title: 'Research Commercialisation, Innovation and Academia\u2013Industry Partnership',
    icon: Lightbulb,
    description:
      'Technology transfer, university spin-outs, intellectual property, prototypes and industry-sponsored research. Innovation finance and testing centres.',
  },
  {
    title: 'Finance, Policy, Regional Markets and a Just Energy Transition',
    icon: Landmark,
    description:
      'Blended, local currency and carbon finance; policy reform and standards. Regional electricity markets, AfCFTA opportunities, skills, jobs, gender and youth.',
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
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {theme.description}
                    </p>
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
