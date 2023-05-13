import HeroSection from '@/app/sections/hero/hero.section'
import Program from '@/app/components/program/program.component'

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
    </main>
  )
}
