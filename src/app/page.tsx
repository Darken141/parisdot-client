import HeroSection from "@/app/components/sections/hero/hero.section"
import AboutSection from "@/app/components/sections/about/about.section"
import ConferenceSection from "./components/sections/conference/conference.section"
import ProgramSection from "./components/sections/program/program.section"
import VenueSection from "./components/sections/venue/venue.section"
import PartnersSection from "./components/sections/partners/partners.section"
import SeeYouThereSection from "./components/sections/see-you-there/see-you-there.section"

import homePageConfig from '@/app/config/home.page.json'
import polkadotFrancophonie from '../../public/assets/partners/polkadot-francophonie.png'
import frenchFederationOfBlockchainProfessionals from '../../public/assets/partners/french-federation-of-blockchain-professionals.png'
import blockchainInnov from '../../public/assets/partners/blockchain-innov.png'
import blockchainHec from '../../public/assets/partners/blockchain-hec.png'


export default function Home() {
  const {
    place,
    date,
    heading,
    description,
    program,
    primaryCta,
    secondaryCta,
  } = homePageConfig.heroSection



  const partners = [
    {
      label: 'Polkadot Francophonie',
      link: '#',
      image: polkadotFrancophonie,
    },
    {
      label: 'French Federation of<br/> Blockchain Professionals',
      link: '#',
      image: frenchFederationOfBlockchainProfessionals,
    },
    {
      label: 'Blockchain Innov',
      link: '#',
      image: blockchainInnov,
    },
    {
      label: 'Blockchain HEC',
      link: '#',
      image: blockchainHec,
    },
  ]

  return (
    <main>
      <HeroSection 
        place={place}
        date={date}
        heading={heading}
        description={description}
        video={{
          src: '#',
          alt: 'hero video',
        }}
        program={program}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        partners={partners}

      />
      <AboutSection />
      <ConferenceSection/>
      <ProgramSection />
      <VenueSection />
      <PartnersSection />
      <SeeYouThereSection />
    </main>
  )
}
