import React from 'react'

import Container from '@/app/components/container/container.component'
import Button from '@/app/components/button/button.component'
import Image from 'next/image'

import homePageConfig from '@/app/config/home.page.json'
import venueIlu from '../../../../public/assets/venue-section/venue-ilu.png'

const VenueSection = () => {
  const { heading, description, primaryCta } = homePageConfig.venueSection

  return (
    <section id='venue' className='mb-[20rem]'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-[2fr,1fr]'>
          <div>
          <h2>{heading}</h2>
            <div
              className="about-description-container mb-[3.18rem]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex gap-[2.6rem] flex-wrap">
              <Button outline>{primaryCta.label}</Button>
            </div>
          </div>
          <div className="self-center justify-self-center">
          <Image
              src={venueIlu}
              alt="about ilu"
              className='object-contain'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default VenueSection
