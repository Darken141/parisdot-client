import React from 'react'

import Container from '@/app/components/container/container.component'
import Button from '@/app/components/button/button.component'
import Image from 'next/image'

import homePageConfig from '@/app/config/home.page.json'
import venueIlu from '../../../../../public/assets/venue-section/venue-ilu.png'
import middleLeftIlu from '../../../../../public/assets/venue-section/middle-left-ilu.png'
import middleRightIlu from '../../../../../public/assets/venue-section/middle-right-ilu.png'

const VenueSection = () => {
  const { heading, description, primaryCta } = homePageConfig.venueSection

  return (
    <section id="venue" className="relative mb-[20rem]">
      <div className="absolute top-[-20rem] sm:top-[-10rem] w-[30%] sm:w-[22%] lg:w-[20%] right-0  z-[-1]">
        <Image
          src={middleRightIlu}
          alt="middle right ilu"
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-[-35rem] sm:bottom-[-20rem] lg:bottom-[-70rem] w-[40%] left-0 z-[-1]">
        <Image
          src={middleLeftIlu}
          alt="middle left ilu"
          className="object-contain"
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-[4rem]">
          <div className="row-start-2 lg:row-start-1 w-full max-w-[54.7rem]">
            <h2>{heading}</h2>
            <div
              className="about-description-container mb-[3.18rem]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex flex-col md:flex-row gap-[2.6rem] flex-wrap">
              <Button outline>{primaryCta.label}</Button>
            </div>
          </div>
          <div className="self-center justify-self-center">
            <Image src={venueIlu} alt="about ilu" className="object-contain" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default VenueSection
