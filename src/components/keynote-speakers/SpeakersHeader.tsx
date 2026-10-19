import { Separator } from "@/components/ui/separator";
import AOS from "@/components/layout/AOS";
import { conferenceYear, keynoteSpeakersAnnounced } from "@/lib/utils";

const SpeakersHeader = () => (
  <AOS>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Meet Our Distinguished Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the brilliant minds and industry leaders who shared their expertise 
            and insights at AICCEES conferences across the years.
          </p>
          {!keynoteSpeakersAnnounced && (
            <p className="mt-4 text-lg font-semibold text-green-700">
              AICCEES {conferenceYear} keynote speakers will be announced soon.
            </p>
          )}
        </div>
        <Separator />
      </div>
    </section>
  </AOS>
);

export default SpeakersHeader;
