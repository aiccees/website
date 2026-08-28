"use client"

import Image from 'next/image'
import Link from 'next/link'
import { CarFront, ArrowRight, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import AOS from '@/components/layout/AOS'
import { focusAreas, innovationChallengeApplicationsClosed, innovationChallengeLink } from '@/components/data_models/innovation-challenge'

const InnovationChallengeHighlight = () => {
  return (
    <AOS>
      <section id="innovation-challenge" className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container w-11/12 mx-auto px-4 md:px-6">
          <div className="text-center ">
            <p className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700">
              AICCEES 2026 Clean Energy Innovation Challenge
            </p>
            <h2 className="mt-4 text-3xl md:text-8xl font-bold tracking-tight text-green-700 uppercase">
              Build <span className="text-red-600 text-3xl">•</span> Pitch <span className="text-red-600 text-3xl">•</span> Scale
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              The challenge supports high-potential African innovators within the underlisted focus areas with technical review, mentorship, investor
              visibility, and a live conference pitch session.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area) => (
              <Card key={area.id} className="h-full border-green-100 hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex flex-col items-center gap-">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl flex items-center justify-center">
                      {area.icon ? (
                        <Image
                          src={area.icon}
                          alt={area.title}
                          fill
                          className="object-contain"
                          sizes="56px"
                        />
                      ) : (
                        <CarFront className="h-7 w-7 text-green-700" />
                      )}
                    </div>
                    {/* <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-white text-sm font-bold">
                      {area.id}
                    </span> */}
                  </div>
                  <CardTitle className="text-lg text-center text-green-800">{area.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-green-700 px-6 py-8 md:px-10 md:py-10 text-white flex flex-col gap-5 lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-center">
                {innovationChallengeApplicationsClosed
                  ? 'Applications are now closed'
                  : 'Applications are open across Africa'}
              </h3>
              <p className="mt-2 text-green-50 max-w-2xl text-center">
                {innovationChallengeApplicationsClosed
                  ? 'The application deadline for AICCEES 2026 has passed. Thank you for your interest. Shortlisted innovators will be contacted directly.'
                  : 'Finalists pitch live during AICCEES 2026 after screening and a mentorship bootcamp.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-1/2 lg:w-48 bg-white text-green-700 hover:bg-green-100"
              >
                <Link href="/innovation-challenge">View full details</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className={`w-full sm:w-1/2 lg:w-48 ${innovationChallengeApplicationsClosed
                  ? 'bg-gray-300 text-gray-500 hover:bg-gray-300 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                disabled={innovationChallengeApplicationsClosed}
              >
                <Link
                  href={innovationChallengeApplicationsClosed ? '#' : innovationChallengeLink}
                  target="_blank"
                  tabIndex={innovationChallengeApplicationsClosed ? -1 : 0}
                >
                  {innovationChallengeApplicationsClosed ? (
                    <>
                      Applications closed
                      <Lock className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Apply now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Link>
              </Button>
            </div>
          </div>
     
        </div>
      </section>
    </AOS>
  )
}

export default InnovationChallengeHighlight
