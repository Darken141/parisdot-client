import HeroSection from '@/components/sections/hero/hero.section'
import Program from '@/components/program/program.component'
import SeeYouThereSection from '@/components/sections/see-you-there/see-you-there.section'

import archivesPageConfig from '../../config/archives.page'

export default function Home() {
  const { heroSection } = archivesPageConfig

  return (
    <main>
      <HeroSection
        place={heroSection.place}
        date={heroSection.date}
        heading={heroSection.heading}
        primaryCta={heroSection?.primaryCta}
        secondaryCta={heroSection?.secondaryCta}
      />

      <Program />
      <SeeYouThereSection />
    </main>
  )
}
