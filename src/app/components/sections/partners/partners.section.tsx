import React from 'react'

import Container from '@/app/components/container/container.component'
import Image from 'next/image'

import polkadotFrancophonie from '../../../../../public/assets/partners/polkadot-francophonie.png'
import frenchFederationOfBlockchainProfessionals from '../../../../../public/assets/partners/french-federation-of-blockchain-professionals.png'
import blockchainInnov from '../../../../../public/assets/partners/blockchain-innov.png'
import blockchainHec from '../../../../../public/assets/partners/blockchain-hec.png'

import homePageConfig from '@/app/config/home.page.json'

const PartnersSection = () => {
  const {heading, items} = homePageConfig.partnersSection

  const partners = [
    {
      label: items[1].label,
      link: items[1].link,
      image: polkadotFrancophonie,
    },
    {
      label: items[2].label,
      link: items[2].link,
      image: frenchFederationOfBlockchainProfessionals,
    },
    {
      label: items[3].label,
      link: items[3].link,
      image: blockchainInnov,
    },
    {
      label: items[4].label,
      link: items[4].link,
      image: blockchainHec,
    },
  ]

  return (
    <section id="partners" className="mb-[17rem]">
      <Container>
        <h2 className="text-center mb-[8rem]">{heading}</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[8rem] lg:gap-[4rem]">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.image}
                  alt={partner.label}
                  className=" w-full h-[15rem] mb-[2.4rem] object-contain flex items-center justify-center"
                  placeholder="blur"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: partner.label }}
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
