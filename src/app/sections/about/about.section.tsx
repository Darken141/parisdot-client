import React from 'react'

import Container from '@/app/components/container/container.component'
import Image from 'next/image'
import Button from '@/app/components/button/button.component'

import homePageConfig from '@/app/config/home.page.json'
import aboutIlu from '../../../../public/assets/about-section/about-ilu.png'

const AboutSection = () => {
  const { heading, description, primaryCta, secondaryCta } =
    homePageConfig.aboutSection

  return (
    <section id="about" className='mb-[16.7rem]'>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr]">
          <div className="self-center justify-self-center">
            <Image
              src={aboutIlu}
              alt="about ilu"
              className='object-contain'
            />
          </div>
          <div>
            <h2>{heading}</h2>
            <div
              className="about-description-container mb-[3.18rem]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex gap-[2.6rem] flex-wrap">
              <Button>{primaryCta.label}</Button>
              <Button outline>{secondaryCta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
