import HeroSection from '@/components/sections/hero/hero.section'
import AboutSection from '@/components/sections/about/about.section'
import ConferenceSection from '@/components/sections/conference/conference.section'
import ProgramSection from '@/components/sections/program/program.section'
import VenueSection from '@/components/sections/venue/venue.section'
import PartnersSection from '@/components/sections/partners/partners.section'
import SeeYouThereSection from '@/components/sections/see-you-there/see-you-there.section'

import homePageConfig from '@/config/home.page'
import polkadotFrancophonie from '../../public/assets/partners/polkadot-francophonie.png'
import frenchFederationOfBlockchainProfessionals from '../../public/assets/partners/french-federation-of-blockchain-professionals.png'
import blockchainInnov from '../../public/assets/partners/blockchain-innov.png'
import blockchainHec from '../../public/assets/partners/blockchain-hec.png'

export default function Home() {
  const { heroSection } = homePageConfig

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
        partners={partners}
      />
      <AboutSection />
      <ConferenceSection />
      <ProgramSection />
      <VenueSection />
      <PartnersSection />
      <SeeYouThereSection />
    </main>
  )
}
