import HeroSection from '@/components/sections/hero/hero.section'
import Program from '@/components/program-23/program-23.component'
import SeeYouThereSection from '@/components/sections/see-you-there/see-you-there.section'

import programPageConfig from '../../config/program-23.page'

export default function Program23() {
  const { heroSection } = programPageConfig

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
