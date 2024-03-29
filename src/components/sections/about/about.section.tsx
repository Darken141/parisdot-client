import React from 'react'

import Container from '@/components/container/container.component'
import Image from 'next/image'
import Button from '@/components/button/button.component'
import Link from 'next/link'

import homePageConfig from '@/config/home.page'
import middleRightIlu from '../../../../public/assets/about-section/middle-right-ilu.png'
import middleLeftIlu from '../../../../public/assets/about-section/middle-left-ilu.png'
import middleLeftDarkIlu from '../../../../public/assets/program-section/middle-left-ilu.png'

const AboutSection = () => {
  const { heading, description, primaryCta, secondaryCta, asset } =
    homePageConfig.aboutSection

  return (
    <section id="about" className="relative mb-[16.7rem] scroll-pt-[14rem]">
      <div className="absolute top-[0rem] sm:top-[-10rem] lg:top-[-30rem] w-[30%] sm:w-[20%] lg:w-[10%] 2xl:w-[9%] right-0  z-[-1]">
        <Image
          src={middleRightIlu}
          alt="middle right ilu"
          className="object-contain"
          placeholder="blur"
        />
      </div>

      <div className="absolute top-[-60rem] left-0 w-[40%] h-full z-[-2]">
        <Image
          src={middleLeftDarkIlu}
          alt="Program background"
          className="object-contain"
          placeholder="blur"
        />
      </div>

      <div className="absolute bottom-[0rem] sm:bottom-[-20rem] lg:bottom-[-70rem] w-[40%] left-0 z-[-1]">
        <Image
          src={middleLeftIlu}
          alt="middle left ilu"
          className="object-contain"
          placeholder="blur"
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-[4rem]">
          <div className="self-center justify-self-center">
            <Image
              {...asset}
              alt="about ilu"
              className="object-contain w-[14rem] md:w-[26.7rem] md:h-[37rem]"
            />
          </div>
          <div>
            <h2>{heading}</h2>
            <div
              className="about-description-container mb-[3.18rem]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex flex-col md:flex-row  gap-[2.6rem] flex-wrap">
              {primaryCta && (
                <Link className="btn" {...primaryCta}>
                  {primaryCta.children}
                </Link>
              )}
              <Link
                className="btn-outline"
                {...secondaryCta}
                href={secondaryCta.href}
              >
                {secondaryCta.children}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
