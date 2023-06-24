import HeroSection from '@/components/sections/hero/hero.section'
import AboutSection from '@/components/sections/about/about.section'
import ConferenceSection from '@/components/sections/conference/conference.section'
import ProgramSection from '@/components/sections/program/program.section'
import VenueSection from '@/components/sections/venue/venue.section'
import PartnersSection from '@/components/sections/partners/partners.section'
import SeeYouThereSection from '@/components/sections/see-you-there/see-you-there.section'
import SpeakersSection from '@/components/sections/speakers/speakers.section'

import homePageConfig from '@/config/home.page'

export default function Home() {
  const { heroSection } = homePageConfig
  return (
    <main className="scroll-smooth">
      <HeroSection
        place={heroSection.place}
        date={heroSection.date}
        heading={heroSection.heading}
        description={heroSection.description}
        video={heroSection.video}
        program={heroSection.program}
        primaryCta={heroSection?.primaryCta}
        secondaryCta={heroSection?.secondaryCta}
        partners={heroSection.partners}
      />
      <AboutSection />
      <ConferenceSection />
      <ProgramSection />
      <SpeakersSection />
      <VenueSection />
      <PartnersSection />
      <SeeYouThereSection />
    </main>
  )
}
