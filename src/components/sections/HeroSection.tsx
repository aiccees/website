"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import herobg0 from '@/public/images/herobg0.jpg'
import herobg1 from '@/public/images/herobg1.jpg'
import herobg2 from '@/public/images/herobg2.jpg'
import herobg3 from '@/public/images/herobg3.jpg'
import herobg4 from '@/public/images/herobg4.jpg'
import herobg5 from '@/public/images/herobg5.jpg'
import herobg6 from '@/public/images/herobg6.jpg'
import herobg7 from '@/public/images/herobg7.jpg'
import Link from 'next/link'
import { Clock } from 'lucide-react'

const BACKGROUND_IMAGES = [
  herobg0,
  herobg1,
  herobg2,
  herobg3,
  herobg4,
  herobg5,
  herobg6,
  herobg7,
]

function CountdownTimer() {
  const targetDate = new Date('2026-09-24T00:00:00Z').getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (timeLeft <= 0) return <span className="text-2xl font-bold text-red-600">Conference is Live!</span>

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-lg md:text-2xl font-semibold bg-black/40 rounded-lg px-3 sm:px-4 py-2 shadow-lg">
      <span className="flex items-center gap-1">
        <Clock className="text-yellow-400 mr-1" />
       <span className="text-white hidden sm:block">Days left:</span>
      </span>
      <span>{days}d</span>:
      <span>{hours}h</span>:
      <span>{minutes}m</span>:
      <span>{seconds}s</span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="w-full relative min-h-[86vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Carousel (always visible) */}
      <div className="absolute inset-0 z-[1]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {BACKGROUND_IMAGES.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Gradient Overlay (always visible) */}
      <div className="absolute z-[2] inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90 transition-all duration-700" />
      
      {/* Hero Content */}
      <div className="relative z-[3] container mx-auto h-full px-4 md:px-6 py-16 md:py-0 flex items-center">
        <div className="flex w-full flex-col items-center space-y-4 text-center">
          <div className="space-y-3 text-center">
            <p className="inline-flex rounded-full bg-red-600/90 px-4 py-1 text-xs sm:text-sm font-semibold text-white shadow-sm">
              Innovation Challenge applications are now open
            </p>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Africa International Conference on Clean Energy & Energy Storage (AICCEES)
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 text-base sm:text-lg md:text-xl">
              Empowering Africa&apos;s Future Through Clean Energy Innovation and Sustainable Storage Solutions
            </p>
          </div>
          <div className="flex w-full max-w-md sm:max-w-none flex-col sm:flex-row items-center justify-center gap-3 !mb-8 md:!mb-10">
            <Button asChild className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700">
              <Link href="/registrations">Register Now</Link>
            </Button>
            <Button asChild className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-100">
              <Link href="/innovation-challenge">Innovation Challenge</Link>
            </Button>
            <Button
              onClick={() => {
                document.getElementById('submissions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="w-full sm:w-auto !text-green-700 border-white hover:bg-green-700 hover:!text-white hover:border-green-700"
            >
              Submit Paper
            </Button>
          </div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
} 