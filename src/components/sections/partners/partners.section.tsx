import React from 'react'

import Container from '@/components/container/container.component'
import Image from 'next/image'

import homePageConfig from '@/config/home.page'

const PartnersSection = () => {
  const { heading, items } = homePageConfig.partnersSection

  return (
    <section id="partners" className="mb-[17rem]">
      <Container>
        <h2 className="text-center mb-[8rem]">{heading}</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[8rem] lg:gap-[4rem]">
          {items.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a {...partner}>
                <Image
                  {...partner.asset}
                  alt={partner.asset.alt}
                  className=" w-full h-[15rem] mb-[2.4rem] object-contain flex items-center justify-center"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: partner.children ?? '' }}
                  className="text-[2rem] font-semibold"
                ></p>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PartnersSection
