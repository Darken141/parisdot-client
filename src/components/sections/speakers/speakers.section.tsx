'use client'

import Image from 'next/image'
import Container from '@/components/container/container.component'
import Button from '@/components/button/button.component'
import { FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import { speakers } from '@/config/speakers'

import LeftArrow from '../../../../public/assets/icons/left-arrow.svg'
import RightArrow from '../../../../public/assets/icons/right-arrow.svg'

import '@splidejs/react-splide/css'

const SpeakersSection = () => {
  return (
    <section id="speakers" className="mb-[15.1rem]">
      <Container>
        <h2 className="text-center uppercase leading-none mb-[7.3rem]">
          Speakers of 2023
        </h2>

        <Splide
          aria-label="Speakers"
          hasTrack={false}
          options={{
            type: 'loop',
            perPage: 5,
            gap: '2rem',
            pagination: false,
            arrows: true,
            breakpoints: {
              640: {
                perPage: 1,
                gap: '1rem',
              },
              1024: {
                perPage: 3,
                gap: '2rem',
              },
            },
          }}
        >
          <div className="custom-wrapper">
            <SplideTrack>
              {speakers.map((speaker, idx) => (
                <SplideSlide key={idx}>
                  <article className="flex flex-col items-center">
                    {speaker.image ? (
                      <figure className="w-[11rem] h-[11rem] rounded-[50%] overflow-hidden mb-[1.26rem]">
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
                    {speaker.socials ? (
                      <a
                        href={
                          speaker.socials.linkedin ?? speaker.socials.twitter
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center transition-all hover:text-[#ff008c]"
                      >
                        <h3 className="font-bold text-[1.7rem] text-center">
                          {speaker.name}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="font-bold text-[1.7rem] text-center">
                        {speaker.name}
                      </h3>
                    )}
                    {speaker.organization.link ? (
                      <a
                        href={speaker.organization.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center transition-all hover:text-[#ff008c]"
                      >
                        <p className="text-[1.6rem] text-center">
                          {speaker?.organization.name}
                        </p>
                      </a>
                    ) : (
                      <p className="text-[1.6rem] text-center">
                        {speaker?.organization.name}
                      </p>
                    )}
                  </article>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows mb-[4rem]">
              <button className="splide__arrow--prev bg-transparent absolute bottom-[-9.6rem] right-[52%] sm:right-[68%] md:right-[65%] lg:right-[62%] ">
                <Image
                  {...LeftArrow}
                  alt="left arrow"
                  className="w-[5.6rem] h-[5.6rem]"
                />
              </button>
              <button className="splide__arrow--next bg-transparent absolute bottom-[-9.6rem] left-[52%] sm:left-[68%] md:left-[65%] lg:left-[62%] ">
                <Image
                  {...RightArrow}
                  alt="right arrow"
                  className="w-[5.6rem] h-[5.6rem]"
                />
              </button>
            </div>
          </div>
        </Splide>

        <div className="flex justify-center mt-[12rem] sm:mt-[unset]">
          <Link href={'/speakers'}>
            <Button outline>View all</Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default SpeakersSection
