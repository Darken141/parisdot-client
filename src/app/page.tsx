import HeroSection from "@/app/sections/hero/hero.section"
import AboutSection from "@/app/sections/about/about.section"

import ProgramSection from "./sections/program/program.section"
import VenueSection from "./sections/venue/venue.section"
import PartnersSection from "./sections/partners/partners.section"
import SeeYouThereSection from "./sections/see-you-there/see-you-there.section"


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <VenueSection />
      <PartnersSection />
      <SeeYouThereSection />
    </main>
  )
}
