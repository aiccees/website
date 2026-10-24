import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building2 } from 'lucide-react'
import { advisoryCouncilInfo, conferenceChairInfo } from "../data_models/conference-chairs"
import AOS from "../layout/AOS"
import Image, { type StaticImageData } from "next/image"

type Person = {
    id: number
    name: string
    role: string
    school: string
    portfolio?: string
    image: StaticImageData | string
}

function PersonCard({ person }: { person: Person }) {
    return (
        <Card className="group hover:shadow-lg transition-shadow bg-white border-slate-200 h-full">
            <CardHeader className="text-center pb-4">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                    {typeof person.image === 'string' ? (
                        <Avatar className="w-full h-full">
                            <AvatarImage src={person.image} alt={person.name} />
                            <AvatarFallback className="bg-white rounded-full border-green-800 border text-slate-600 text-xl">
                                {person.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                    ) : (
                        <Image
                            src={person.image}
                            alt={person.name}
                            width={96}
                            height={96}
                            className="rounded-full object-cover w-full h-full"
                        />
                    )}
                </div>
                <CardTitle className="text-slate-800">{person.name}</CardTitle>
                <CardDescription className="font-medium text-green-700">
                    {person.role}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-center mb-4">{person.portfolio}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <Building2 className="w-4 h-4" />
                    <span>{person.school}</span>
                </div>
            </CardContent>
        </Card>
    )
}

function PeopleSection({ title, subtitle, people }: { title: string; subtitle: string; people: Person[] }) {
    return (
        <div className="container mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl tracking-tighter sm:text-5xl text-center font-bold mb-4 text-green-800">
                    {title}
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>
            {/* Cards are centred, so a short list (like the Advisory Council for now) still looks balanced */}
            <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-6">
                {people.map((person) => (
                    <div key={person.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                        <PersonCard person={person} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function ConferenceChairs() {
    return (
        <AOS>
            <section className="py-12 bg-white space-y-16">
                <PeopleSection
                    title="AICCEES Advisory Council"
                    subtitle="Distinguished leaders providing strategic guidance to AICCEES"
                    people={advisoryCouncilInfo}
                />
                <PeopleSection
                    title="Conference Chairs"
                    subtitle="Meet our distinguished conference chairs"
                    people={conferenceChairInfo}
                />
            </section>
        </AOS>
    )
} 