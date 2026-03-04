'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface Tier {
    name: string
    description: string
    priceUSD: number
    priceNGN: number
    benefits: string[]
    featured?: boolean
}

const tiers: Tier[] = [
    {
        name: "Platinum",
        description: "The highest level of sponsorship with maximum visibility and speaking opportunities",
        priceUSD: 14000,
        priceNGN: 21000000,
        featured: true,
        benefits: [
            "A keynote speaking opportunity by a member of the sponsor organisation.",
            "Research paper presentation and publication opportunity by a member of the sponsor organisation.",
            "Prominent branding on all the conference materials and banners.",
            "Advertising opportunities during the event.",
            "Recognition in conference materials",
            "Panel discussion by a team from your organisation.",
            "Direct contact to presenters and researchers.",
            "Soft copy of the Book of Abstract."
        ]
    },
    {
        name: "Gold",
        description: "Premium sponsorship with strong branding and publication visibility",
        priceUSD: 7000,
        priceNGN: 10500000,
        benefits: [
            "Research paper presentation and publication opportunity by a member of the sponsor organisation.",
            "Prominent branding on all the conference materials and banners.",
            "Advertising opportunities during the event.",
            "Recognition in conference materials",
            "Direct contact to presenters and researchers."
        ]
    },
    {
        name: "Silver",
        description: "Mid-tier sponsorship package with event visibility",
        priceUSD: 3500,
        priceNGN: 5250000,
        benefits: [
            "Research paper presentation and publication opportunity by a member of the sponsor organisation.",
            "Advertising opportunities during the event.",
            "Recognition in conference materials"
        ]
    },
    {
        name: "Research Paper",
        description: "Sponsor researchers to attend and publish with full recognition",
        priceUSD: 2000,
        priceNGN: 3000000,
        benefits: [
            "Companies and organisations can sponsor 15-20 researchers to attend the conference and publish their papers and receive recognition for it.",
            "The sponsorship will cover transportation, accommodation, conference attendance fee, and publication fee of the researcher.",
            "The sponsor will be highlighted on all media platforms and will receive a recognition award."
        ]
    },
    {
        name: "Session",
        description: "Sponsor plenary, business innovation, mentorship, or thematic sessions",
        priceUSD: 2000,
        priceNGN: 3000000,
        benefits: [
            "Companies and organisations can sponsor plenary sessions, business innovation and mentorship sessions, or specific themes of the conference.",
            "Available themes include climate adaptation, hydropower and agri-food systems, energy access and transition pathways, storage and smart grids, policy and capacity building, hydrogen and clean fuels, clean cooking, renewable energy systems, waste-to-energy and circular economy, and sustainable mobility.",
            "Sponsors will be highlighted on all media platforms and will receive an award of recognition."
        ]
    }
]

export default function Partnerships() {
    const [showNGN, setShowNGN] = useState(false)
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({})

    const toggleCard = (tierName: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [tierName]: !prev[tierName]
        }))
    }

    return (
        <div className="py-20">
            <div className="px-4 md:px-6">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Sponsorship Packages</h1>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Choose from our range of sponsorship packages designed to provide maximum value and visibility for your organization.
                    </p>
                    <div className="flex items-center justify-center space-x-4 pt-4">
                        <Label htmlFor="currency" className="text-gray-700 font-medium">Show prices in NGN</Label>
                        <Switch
                            id="currency"
                            checked={showNGN}
                            onCheckedChange={setShowNGN}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`flex flex-col h-full transition-all duration-300 hover:shadow-lg ${tier.featured
                                    ? 'border-green-600 shadow-lg scale-105'
                                    : 'border-gray-200 hover:border-green-300'
                                }`}
                        >
                            <CardHeader className="pb-6">
                                <CardTitle className="text-green-600 text-xl">{tier.name} Sponsorship</CardTitle>
                                <CardDescription className="text-gray-600 text-base leading-relaxed">{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col space-y-6">
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {showNGN
                                            ? `₦${tier.priceNGN.toLocaleString()}`
                                            : `$${tier.priceUSD.toLocaleString()}`
                                        }
                                    </span>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <ul className={`space-y-3 ${expandedCards[tier.name] ? '' : 'max-h-[120px] overflow-hidden'}`}>
                                        {tier.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 leading-relaxed">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {tier.benefits.length >= 3 && (
                                        <div className="mt-6 grid place-items-center pt-4 border-t border-gray-200">
                                            <Button
                                                className="p-0 h-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors"
                                                onClick={() => toggleCard(tier.name)}
                                            >
                                                {expandedCards[tier.name] ? 'Show Less' : 'Read More'}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>

                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

