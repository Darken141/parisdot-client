import HeroSection from '@/app/components/sections/hero/hero.section'
import Program from '@/app/components/program/program.component'
import SeeYouThereSection from '@/app/components/sections/see-you-there/see-you-there.section'

export default function Home() {
 
  return (
    <main>
      <HeroSection
        place={'FRANCE - PARIS'}
        date={'19.07 - 21.07'}
        heading={'PROGRAM OF 2022'}
        primaryCta={{
          label: 'Buy Tickets',
          link: '#',
        }}
        secondaryCta={{
          label: 'Aplly to speak',
          link: '#',
        }}
      />

        <Program/>
        <SeeYouThereSection/>
    </main>
  )
}
