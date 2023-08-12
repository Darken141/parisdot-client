import React from 'react'

import Container from '../../container/container.component'
// import Button from '../../button/button.component'
import Link from 'next/link'
import Image from 'next/image'

import topRightIlu from '../../../../public/assets/hero-section/top-right-ilu.png'
import topLeftIlu from '../../../../public/assets/hero-section/top-left-ilu.png'

import { IHeroSectionProps } from '@/types/section.types'

const HeroSection = ({
  talks,
  place,
  date,
  heading,
  description,
  video,
  program,
  primaryCta,
  secondaryCta,
  partners,
}: IHeroSectionProps) => {
  return (
    <section className="pt-[11rem] md:pt-[16rem] mb-[16.7rem] relative">
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
        {place && (
          <p className="text-[1.45rem] sm:text-[1.9rem] font-black text-center">
            {place}
          </p>
        )}
        {date && (
          <p className="text-[1.45rem] sm:text-[1.9rem] font-black text-center">
            {date}
          </p>
        )}
        {heading && (
          <div className="flex justify-center">
            <h1 className="inline-block leading-none text-[3.85rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[11.5rem] font-black text-center mx-auto bg-gradient-to-r from-[#E6007A] to-[#0086FF] text-transparent bg-clip-text">
              {heading}
            </h1>
          </div>
        )}
        {description && (
          <p
            className="w-full max-w-[52.36rem] mx-auto text-[1.7rem] sm:text-[2rem] text-center text-[#CDCDCD] mb-[4.1rem]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {talks && (
          <div
            id="talks-2023"
            className="flex flex-col justify-center items-center"
          >
            <h2>{talks.title}</h2>
            <div className="flex flex-wrap justify-center items-center gap-[2.7rem]">
              {talks.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        )}
        {video && (
          <div className="py-[4rem] flex items-center justify-center mb-[2.3rem]">
            <iframe
              className="aspect-video"
              width={'100%'}
              src={video.src}
              title={video.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {program && (
          <Link
            href={program.href}
            className=" text-[1.7rem] text-white text-center block underline"
          >
            {program.children}
          </Link>
        )}
        <div className="flex flex-col md:flex-row justify-center gap-[2.7rem] mt-[4.5rem] mb-[5.3rem]">
          {primaryCta && (
            <Link className="btn" {...primaryCta}>
              {primaryCta.children}
            </Link>
          )}
          {secondaryCta && (
            <Link className="btn-outline" {...secondaryCta}>
              {secondaryCta.children}
            </Link>
          )}
        </div>
        {partners && (
          <div className="w-full flex flex-wrap justify-center gap-[2.3rem]">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <a {...partner}>
                  <Image
                    {...partner.asset}
                    alt={partner.asset.alt}
                    className=" w-full h-[3.9rem] object-contain flex items-center justify-center"
                  />
                </a>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export default HeroSection
