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

export const conferenceVenue = 'Port Harcourt, Nigeria'

// Countdown target, in Nigerian time. Example: '2027-09-23T09:00:00+01:00'
export const conferenceStartDate: string | null = null

// Text shown on the site. Example: 'Sept. 23rd & 24th 2027'
export const conferenceDateLabel: string | null = null
export const paperSubmissionOpenLabel: string | null = null
export const paperSubmissionDeadlineLabel: string | null = null

export const TO_BE_ANNOUNCED = 'To be announced'