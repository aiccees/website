"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserRound, ArrowRight } from 'lucide-react'
import AOS from '@/components/layout/AOS'
import { Button } from '@/components/ui/button'
import {
  innovationChallengeMentors,
  type InnovationChallengeMentor,
} from '@/components/data_models/innovation-challenge-mentors'

type InnovationChallengeMentorsProps = {
  variant?: 'full' | 'highlight'
}

/**
 * Interactive mentor showcase for the Innovation Challenge.
 * Portrait strip selects an active mentor; the spotlight panel mirrors the flyer-style
 * profile (photo + red label + bio) without embedding flyer assets.
 */
const InnovationChallengeMentors = ({
  variant = 'full',
}: InnovationChallengeMentorsProps) => {
  const mentors = innovationChallengeMentors
  const [activeMentorId, setActiveMentorId] = useState(mentors[0]?.id ?? '')
  const activeMentor =
    mentors.find((mentor) => mentor.id === activeMentorId) ?? mentors[0]

  if (!activeMentor) {
    return null
  }

  const isHighlight = variant === 'highlight'
  const visibleMentors = isHighlight ? mentors.slice(0, 4) : mentors

  return (
    <AOS>
      <section
        id="innovation-mentors"
        className={`w-full ${isHighlight ? 'py-12 md:py-16' : 'py-14 md:py-20'} bg-white`}
      >
        <div className="container w-11/12 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-700">
                Mentorship Bootcamp
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-green-700">
                Meet the Innovation Challenge Mentors
              </h2>
              <p className="mt-3 text-gray-600">
                Industry operators, researchers, and ecosystem builders guiding finalists on pitch,
                market readiness, and impact models ahead of AICCEES 2026.
              </p>
            </div>
            {isHighlight ? (
              <Button asChild className="bg-green-700 text-white hover:bg-green-800 w-full sm:w-auto">
                <Link href="/innovation-challenge#innovation-mentors">
                  View all mentors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>

          <div className="mt-8 flex justify-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {visibleMentors.map((mentor) => (
              <MentorPortraitButton
                key={mentor.id}
                mentor={mentor}
                isActive={mentor.id === activeMentor.id}
                onSelect={() => setActiveMentorId(mentor.id)}
              />
            ))}
          </div>

          <MentorSpotlight mentor={activeMentor} compact={isHighlight} />
        </div>
      </section>
    </AOS>
  )
}

type MentorPortraitButtonProps = {
  mentor: InnovationChallengeMentor;
  isActive: boolean;
  onSelect: () => void;
};

function MentorPortraitButton({ mentor, isActive, onSelect }: MentorPortraitButtonProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group min-w-[7.5rem] max-w-[8.5rem] shrink-0 text-center transition ${
        isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
      }`}
    >
      <div
        className={`relative h-28 w-full overflow-hidden rounded-xl border-2 ${
          isActive ? 'border-red-600 shadow-md' : 'border-transparent'
        }`}
      >
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          sizes="136px"
          className="object-cover object-top transition duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-2 text-sm font-semibold text-green-900 leading-tight line-clamp-2">
        {mentor.name}
      </p>
    </button>
  )
}

type MentorSpotlightProps = {
  mentor: InnovationChallengeMentor
  compact?: boolean
}

function MentorSpotlight({ mentor, compact = false }: MentorSpotlightProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-800 via-green-900 to-green-950 text-white shadow-sm">
      {/* Fixed card height keeps every mentor layout consistent; images use contain so faces stay fully visible. */}
      <div className="grid h-auto lg:h-[440px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative h-[320px] lg:h-full bg-green-950">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain object-center p-2"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950 via-green-950/85 to-transparent p-5">
            <p className="text-2xl font-bold">{mentor.name}</p>
            <p className="mt-1 text-sm text-green-100">{mentor.title}</p>
          </div>
        </div>

        <div className="flex h-full min-h-0 flex-col p-6 md:p-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
            <UserRound className="h-4 w-4" />
            Mentor&apos;s Profile
          </div>
          <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
            <p
              className={`text-green-50 leading-relaxed ${
                compact ? 'line-clamp-6' : ''
              }`}
            >
              {mentor.bio}
            </p>
          </div>
          {compact ? (
            <div className="pt-6">
              <Button asChild variant="outline" className="border-white text-green-800">
                <Link href="/innovation-challenge#innovation-mentors">Read full mentor profiles</Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default InnovationChallengeMentors
