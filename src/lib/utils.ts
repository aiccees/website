import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const officeNumber = '+2348037641860'
export const formatPrice = (price: number, isOpenAccess = false, showNGN = false) => {
  if (showNGN) {
    if (isOpenAccess) {
      return `₦400,000.00`
    }
    return `₦${(price * 1000).toLocaleString()}`
  }
  if (isOpenAccess) {
    return `$400.00`
  }
  return `$${price.toLocaleString()}`
}

// --- AICCEES conference settings ------------------------------------
// Update these when details are confirmed. Any date left as null shows
// as "To be announced" on the site.

export const conferenceYear = 2027
export const conferenceEdition = '5th Edition'
export const conferenceTheme = 'From Transition to Transformation: Powering Africa’s Energy Sovereignty through Innovation, Industrialisation and Resilience'

export const conferenceVenue = 'Port Harcourt, Nigeria'

// Countdown target, in Nigerian time. Example: '2027-09-23T09:00:00+01:00'
export const conferenceStartDate: string | null = '2027-10-20T08:30:00+01:00'

// Text shown on the site. Example: 'Sept. 23rd & 24th 2027'
export const conferenceDateLabel: string | null = 'October 20th & 21st 2027'

// After this moment the homepage shows "Thank you for joining" instead of "Conference is Live!"
export const conferenceEndDate: string | null = '2027-10-22T00:00:00+01:00'

// Pre-conference events (Innovation Challenge pitch), shown on the Conference Date card
export const preConferenceDateLabel: string | null = 'October 18th & 19th 2027'

// Innovation Challenge: 'opening-soon', 'open' or 'closed'.
// Controls the homepage banner, the homepage Innovation Challenge section and the Apply buttons.
export type InnovationChallengeStatus = 'opening-soon' | 'open' | 'closed'
export const innovationChallengeStatus = 'opening-soon' as InnovationChallengeStatus

// Red banner at the top of the homepage (follows the status above)
export const innovationChallengeBanner =
  innovationChallengeStatus === 'open'
    ? `${conferenceYear} Innovation Challenge: applications are now open`
    : innovationChallengeStatus === 'closed'
      ? `${conferenceYear} Innovation Challenge: applications are now closed`
      : `${conferenceYear} Innovation Challenge: applications opening soon`

// Keynote speakers: change to true once the AICCEES 2027 speakers have been added
export const keynoteSpeakersAnnounced: boolean = false
export const paperSubmissionOpenLabel: string | null = 'November 1st 2026'
export const paperSubmissionDeadlineLabel: string | null = 'July 31st 2027'

// Conference fees: early-bird payment deadline (shown in the fees table)
export const earlyBirdDeadlineLabel = 'July 31st 2027'

export const TO_BE_ANNOUNCED = 'To be announced'

// About page "Previous Conferences" section: hidden until real write-ups replace the placeholder text
export const showPreviousConferences: boolean = false

// Conference Materials (Call for Papers section): 2026 documents.
// Paste each document's link between the quotes when it is ready. While empty, the button shows "coming soon" and does nothing.
export const brochure2026Link = 'https://drive.google.com/file/d/1SpHgzTwEew8xIePlWVrEypGgADKgpiq0/view?usp=drive_link'
export const report2026Link = ''
export const proceedings2026Link = ''

// Programme page: false shows "The AICCEES 2027 programme will be published soon".
// Change to true once the 2027 programme has been added to the page.
export const programmePublished: boolean = false