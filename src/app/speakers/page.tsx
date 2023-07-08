import SeeYouThereSection from '@/components/sections/see-you-there/see-you-there.section'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/container/container.component'
import topRightIlu from '../../../public/assets/hero-section/top-right-ilu.png'
import topLeftIlu from '../../../public/assets/hero-section/top-left-ilu.png'
import SpeakerOverview from '@/components/speaker-overview/speaker-overview.component'

import { speakersPageConfig } from '@/config/speakers.page'
import { speakers } from '@/config/speakers'

export default function Home() {
  const { heading, primaryCta } = speakersPageConfig.heroSection

  return (
    <main className="scroll-smooth">
      <section className="pt-[14rem] md:pt-[16rem] mb-[16.7rem] relative">
        <div className="absolute top-0 right-0 w-[30%] 2xl:w-[25%] h-[40%] z-[-1]">
          <Image
            src={topRightIlu}
            alt="top right ilu"
            className="object-contain"
            placeholder="blur"
          />
        </div>

        <div className="absolute top-0 left-0 w-[40%] h-[40%] z-[-1]">
          <Image
            src={topLeftIlu}
            alt="top left ilu"
            className="object-contain"
            placeholder="blur"
          />
        </div>

        <Container>
          {heading && (
            <div className="flex justify-center">
              <h1 className="inline-block leading-none text-[3.85rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[11.5rem] font-black text-center mx-auto ">
                {heading}
              </h1>
            </div>
          )}

          <div className="flex flex-col md:flex-row justify-center gap-[2.7rem] mt-[4.5rem] mb-[5.3rem]">
            {primaryCta && (
              <Link className="btn" {...primaryCta}>
                {primaryCta.children}
              </Link>
            )}
          </div>
        </Container>
      </section>

      <section className="mb-[19.9rem]">
        <Container>
          <div className="grid gap-[2rem] gap-y-[6rem] md:gap-[6rem] grid-cols-1 md:grid-cols-2">
            {speakers.map((speaker, idx) => (
              <SpeakerOverview key={idx} speaker={speaker} />
            ))}
          </div>
        </Container>
      </section>
      <SeeYouThereSection />
    </main>
  )
}
