import SeeYouThereSection from '@/components/sections/see-you-there/see-you-there.section'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/container/container.component'
import topRightIlu from '../../../public/assets/hero-section/top-right-ilu.png'
import topLeftIlu from '../../../public/assets/hero-section/top-left-ilu.png'
import { FaUserAlt } from 'react-icons/fa'

import { speakersPageConfig } from '@/config/speakers.page'
import { speakers } from '@/config/speakers'

import { IoLogoTwitter } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'

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
              <article
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-[11rem,1fr] gap-[3rem]"
              >
                {speaker.image ? (
                  <figure className="w-[11rem] h-[11rem] rounded-[50%] overflow-hidden mb-[1.26rem] mt-[1rem]">
                    <Image
                      {...speaker.image}
                      alt={speaker.image.alt}
                      className="w-full h-full object-cover"
                      placeholder="blur"
                    />
                  </figure>
                ) : (
                  <figure className="w-[11rem] h-[11rem] rounded-[50%] overflow-hidden flex items-center justify-center text-[6rem] bg-[#003059] text-[#041222] mb-[1.26rem]">
                    <FaUserAlt />
                  </figure>
                )}
                <div>
                  <div className="flex gap-[1.5rem]">
                    <div>
                      <h3 className="font-bold text-[2rem]">{speaker.name}</h3>
                      {speaker.organization.link ? (
                        <a
                          href={speaker.organization.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all text-[#ff008c]"
                        >
                          <p className="text-[1.6rem]">
                            {speaker?.organization.name}
                          </p>
                        </a>
                      ) : (
                        <p className="text-[1.6rem] ">
                          {speaker?.organization.name}
                        </p>
                      )}
                    </div>

                    {speaker.socials && speaker.socials.twitter && (
                      <a
                        href={speaker.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[3rem] text-[#ff008c]"
                      >
                        <IoLogoTwitter />
                      </a>
                    )}
                    {speaker.socials && speaker.socials.linkedin && (
                      <a
                        href={speaker.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[3rem] text-[#ff008c]"
                      >
                        <AiFillLinkedin />
                      </a>
                    )}
                  </div>
                  <p
                    className="text-[1.6rem] mt-[1.5rem]"
                    dangerouslySetInnerHTML={{ __html: speaker.bio }}
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <SeeYouThereSection />
    </main>
  )
}
