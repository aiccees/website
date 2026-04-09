import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CarFront, CalendarDays, Trophy, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AOS from '@/components/layout/AOS'
import {
  awardsAndBenefits,
  eligibilityCriteria,
  focusAreas,
  innovationChallengeLink,
  innovationProgramStages,
  intellectualProperty,
  timelineItems,
} from '@/components/data_models/innovation-challenge'

export const metadata: Metadata = {
  title: 'Innovation Challenge',
  description:
    'AICCEES 2026 Clean Energy Innovation Challenge for startups, SMEs, researchers, and innovators across Africa.',
}

export default function InnovationChallengePage() {
  return (
    <main className="flex-1 bg-white">
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-green-700 via-green-800 to-green-950 text-white">
          <div className="pointer-events-none absolute -top-20 -left-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          {/* <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-lime-100/15 blur-3xl" /> */}
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:46px_46px]" />

          <div className="relative container w-11/12 mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1 text-xs md:text-sm font-semibold tracking-wide">
                  AICCEES 2026 CLEAN ENERGY INNOVATION CHALLENGE
                </p>
                <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl">
                  Accelerating climate and clean energy innovators across Africa
                </h1>
                <p className="mt-5 text-green-50 text-base md:text-lg max-w-3xl block lg:hidden">
                  Showcase your innovation, receive mentorship, and pitch to technical reviewers, investors, and
                  ecosystem leaders at AICCEES 2026.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700">
                    <Link href={innovationChallengeLink} target="_blank">
                      Apply now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-100">
                    <Link href="#program">See programme structure</Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 sm:hidden">
                  <div className="rounded-lg border border-white/25 bg-white/10 px-4 py-2">
                    <p className="text-xl font-bold">10-15</p>
                    <p className="text-xs text-green-100">Finalists shortlisted</p>
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 px-4 py-2">
                    <p className="text-xl font-bold">4 Stages</p>
                    <p className="text-xs text-green-100">From call to live pitch</p>
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 px-4 py-2">
                    <p className="text-xl font-bold">Africa-wide</p>
                    <p className="text-xs text-green-100">Open applications</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative rounded-2xl border border-white/20 bg-black/15 p-8 backdrop-blur-sm">
                  <div className="space-y-6 text-6xl xl:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight">
                    <h2 className="text-[#FDE68A] [text-shadow:0_1px_0_rgba(255,255,255,0.22),0_4px_0_rgba(0,0,0,0.3),0_14px_30px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]">
                      Build
                    </h2>
                    <h2 className="pl-10 text-[#FFFFFF] [text-shadow:0_1px_0_rgba(255,255,255,0.14),0_4px_0_rgba(0,0,0,0.32),0_14px_28px_rgba(0,0,0,0.52)]">
                      Pitch
                    </h2>
                    <h2 className="pl-20 text-[#A7F3D0] [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_4px_0_rgba(0,0,0,0.3),0_14px_28px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.06)]">
                      Scale
                    </h2>
                  </div>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <p className="mt-5 text-sm text-green-100">
                    Innovation journey designed for startups, SMEs, researchers, and university spin-offs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      <AOS>
        <section className="w-full py-14 md:py-20">
          <div className="container w-11/12 mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center">Focus Areas</h2>
            <p className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
              Innovations align with AICCEES 2026 thematic areas.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {focusAreas.map((area) => (
                <Card key={area.id} className="border-green-100 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center gap-3">
                      {/* <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-white text-sm font-bold">
                        {area.id}
                      </span> */}
                      <div className="relative h-24 w-24 overflow-hidden rounded-xl flex items-center justify-center">
                        {area.icon ? (
                          <Image src={area.icon} alt={area.title} fill sizes="56px" className="object-contain" />
                        ) : (
                          <CarFront className="h-7 w-7 text-green-700" />
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-center leading-snug text-green-800">{area.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AOS>

      <AOS>
        <section id="program" className="w-full py-14 md:py-20 bg-green-50">
          <div className="container w-11/12 mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center">Programme Structure</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {innovationProgramStages.map((stage) => (
                <Card key={stage.id} className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-2xl">Stage {stage.id}</CardTitle>
                    <p className="font-semibold text-lg">{stage.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{stage.description}</p>
                    {stage.highlights ? (
                      <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                        {stage.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AOS>

      <AOS>
        <section className="w-full py-14 md:py-20">
          <div className="container w-11/12 mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 text-2xl">Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {eligibilityCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 text-2xl">Awards and Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {awardsAndBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 text-2xl">How to Submit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Use the registration link below to submit your innovation application.</p>
                <Button asChild className="mt-4 bg-green-700 text-white hover:bg-green-800">
                  <Link href={innovationChallengeLink} target="_blank">
                    Open application form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <p className="mt-3 text-sm text-gray-500">bit.ly/AICCEES-INNOVATION</p> */}
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 text-2xl">Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  {timelineItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <CalendarDays className="h-4 w-4 mt-1 text-green-700 flex-shrink-0" />
                      <span>
                        <strong>{item.label}:</strong> {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </AOS>

      <AOS>
        <section className="w-full pb-16 md:pb-24">
          <div className="container w-11/12 mx-auto px-4 md:px-6">
            <Card className="bg-green-900 text-white border-0">
              <CardContent className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="rounded-xl bg-white/10 p-5">
                    <ShieldCheck className="h-8 w-8 mb-3 text-green-200" />
                    <h3 className="font-bold text-xl">Intellectual Property</h3>
                    <ul className="mt-3 space-y-2 text-green-50 text-sm">
                      {intellectualProperty.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white/10 p-5">
                    <Trophy className="h-8 w-8 mb-3 text-yellow-300" />
                    <h3 className="font-bold text-xl">Finalist Visibility</h3>
                    <p className="mt-3 text-green-50 text-sm">
                      All finalists will be featured in the AICCEES Innovation Showcase Publication and conference
                      ecosystem engagements.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-5">
                    <CalendarDays className="h-8 w-8 mb-3 text-green-200" />
                    <h3 className="font-bold text-xl">Need Support?</h3>
                    <p className="mt-3 text-green-50 text-sm">
                      For enquiries on participation and sponsorship, contact us at{' '}
                      <Link className="underline" href="mailto:info@toveroenergy.com">
                        info@toveroenergy.com
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AOS>
    </main>
  )
}
