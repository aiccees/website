import TestimonialV2 from "@/components/ui/testimonial-v2"
import { partners } from "@/components/data_models/conferences"

export function Partners() {
  const items = partners.map((partner) => ({
    name: partner.name,
    image: partner.logo,
    href: partner.url,
  }))

  return <TestimonialV2 items={items} variant="logo" showHeading={false} />
}
