"use client"
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import Image from 'next/image'
import AOS from '../layout/AOS'

const themes = [
	{
		title: 'Energy Access, Supply & Transition Pathways',
		image: '/images/aicess/svg1.png',
		bullets: [
			'Universal access (grid, mini-grids, stand-alone systems)',
			'Policy, governance, and enabling regulations',
			'Energy transition finance and investment models',
		],
	},
	{
		title: 'Renewable Energy Systems & Productive Use',
		image: '/images/aicess/svg2.png',
		bullets: [
			'Solar, wind, hydro, geothermal innovations',
			'Productive use of energy in agriculture, industry, and services',
			'Energy-water-food nexus',
		],
	},
	{
		title: 'Hydrogen, Biofuels & Clean Fuels for Africa',
		image: '/images/aicess/svg3.png',
		bullets: [
			'Hydrogen economy opportunities',
			'Bioenergy and biofuels for transport and industry',
			'CNG, LNG, and other transition fuels',
		],
	},
	{
		title: 'Energy Storage, Smart Grids & Digital Solutions',
		image: '/images/aicess/svg4.png',
		bullets: [
			'Battery manufacturing & recycling in Africa',
			'Grid integration, flexibility, and digital energy systems',
			'AI, IoT, and blockchain for energy efficiency',
		],
	},
	{
		title: 'Clean Cooking, Health & Social Inclusion',
		image: '/images/aicess/svg5.png',
		bullets: [
			'E-cooking, LPG, and modern cooking fuels',
			'Gender, health, and social impacts of clean cooking',
			'Financing and scaling adoption',
		],
	},
	{
		title: 'Sustainable Mobility & Transport Decarbonization',
		image: '/images/aicess/svg6.png',
		bullets: [
			'Electric vehicles (EVs), charging infrastructure, e-mobility',
			'CNG for transport and hybrid systems',
			'Policies for clean, affordable mobility',
		],
	},
	{
		title: 'Waste-to-Energy, Circular Economy & Carbon Markets',
		image: '/images/aicess/svg7.png',
		bullets: [
			'Waste valorization for energy',
			'Recycling, e-waste, and circular economy approaches',
			'Carbon credits and climate finance mechanisms',
		],
	},
	{
		title: 'Climate Change, Adaptation & Resilience in Africa',
		image: '/images/aicess/svg8.png',
		bullets: [
			'Energy solutions for climate adaptation',
			'Resilient infrastructure for vulnerable communities',
			'Role of youth and innovation in climate action',
		],
	},
	{
		title: 'Hydropower & Agri-food Systems',
		image: '/images/aicess/svg9.png',
		bullets: [
			'Small- and large-scale hydro development',
			'Energy for irrigation, processing, and storage',
			'Reducing post-harvest losses with clean energy',
		],
	},
	{
		title: 'Policy, Capacity Building & Just Energy Transition',
		image: '/images/aicess/svg1.png',
		bullets: [
			'Skills development for Africa’s energy workforce',
			'Equity, inclusion, and just transition principles',
			'Strengthening academia-industry-government collaboration',
		],
	},
]

const ConferenceThemes = () => {
	return (
		<AOS>
			<section id="themes" className="w-full bg-green-50 py-12 md:pb-24">
				<div className="container md:w-11/12 mx-auto px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-green-600">
						Conference Themes
					</h2>
					<p className="text-gray-500 mb-8">
						The scope of the Africa International Conference on Clean Energy and
						Energy Storage (AICCEES) includes contemporary and original research,
						as well as innovative solutions for the clean energy sector and energy
						storage systems. Manuscripts which cut across the conference sub-themes
						should be between 6 to 12 pages, including references. Once submitted,
						papers are promptly forwarded to our reviewers, with decisions typically
						provided within 48 hours. The sub-themes are:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{themes.map((theme) => (
							<Card
								key={theme.title}
								className={`border hover:shadow-lg transition-shadow duration-200`}
							>
								<CardHeader>
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 relative flex-shrink-0">
											<Image
												src={theme.image}
												alt={theme.title}
												fill
												className="object-contain"
											/>
										</div>
										<CardTitle className="text-left">
											{theme.title}
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="mt-2 text-sm space-y-1 list-disc list-inside">
										{theme.bullets.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</AOS>
	)
}

export default ConferenceThemes