export type FocusArea = {
  id: number
  title: string
  icon: string
}

export type ProgramStage = {
  id: number
  title: string
  description: string
  highlights?: string[]
}

export const innovationChallengeLink = 'https://bit.ly/AICCEES-INNOVATION'

const today = new Date()
const applicationCloseDate = new Date('2026-07-31')
export const innovationChallengeApplicationsClosed = today > applicationCloseDate

export const focusAreas: FocusArea[] = [
  { id: 1, title: 'Energy access and off-grid solutions', icon: '/innovation-challenge/energy-access.svg' },
  { id: 2, title: 'Renewable energy systems and productive use', icon: '/innovation-challenge/renewable-systems.svg' },
  { id: 3, title: 'Clean cooking technologies and fuels', icon: '/innovation-challenge/clean-cooking.svg' },
  { id: 4, title: 'Energy storage, smart grids, and digital energy solutions', icon: '/innovation-challenge/energy-storage.svg' },
  { id: 5, title: 'Sustainable mobility and clean transport', icon: '' },
  { id: 6, title: 'Waste-to-energy and circular economy solutions', icon: '/innovation-challenge/waste-to-energy.svg' },
  { id: 7, title: 'Climate adaptation and resilience technologies', icon: '/innovation-challenge/climate-adaptation.svg' },
  { id: 8, title: 'Hydrogen, biofuels, and clean transition fuels', icon: '/innovation-challenge/hydrogen-biofuels.svg' },
]

export const innovationProgramStages: ProgramStage[] = [
  {
    id: 1,
    title: 'Call for Innovators',
    description: 'Open call for applications across Africa via the AICCEES website.',
    highlights: ['www.aiccees.com'],
  },
  {
    id: 2,
    title: 'Screening and Shortlisting',
    description: 'Independent technical review to select 10-15 high-potential finalists.',
  },
  {
    id: 3,
    title: 'Mentorship Bootcamp (Pre-Conference)',
    description: 'Shortlisted innovators receive targeted mentorship on:',
    highlights: ['Pitch development', 'Market readiness', 'Business and impact models'],
  },
  {
    id: 4,
    title: 'Live Pitch Session',
    description:
      'Finalists deliver 5-minute pitches and Q&A during the Clean Energy Business Innovation and Mentorship Session at AICCEES 2026.',
  },
]

export const eligibilityCriteria = [
  'African-led startups, SMEs, and scale-ups',
  'Research institutions and university spin-offs',
  'Innovators at prototype, pilot, or early commercial stage',
  'Women-led and youth-led clean energy enterprises',
]

export const awardsAndBenefits = [
  'Proof-of-concept or seed funding support',
  'Sponsored incubation or accelerator placements',
  'Business mentorship and advisory support',
  'Investor introductions and partnership opportunities',
  'Media exposure and conference recognition',
  'All finalists will be featured in the AICCEES Innovation Showcase Publication',
]

export const timelineItems = [
  { label: 'Call for Innovators', date: '1st April 2026' },
  { label: 'Shortlisting', date: '31st August 2026' },
  { label: 'Mentorship Bootcamp', date: '1st-20th September 2026' },
  { label: 'Live Pitch Session', date: '24th-25th September 2026' },
]

export const intellectualProperty = [
  'Innovators retain full ownership of their intellectual property',
  'No equity is required for participation',
  'Confidential information is protected throughout the process',
]
