import React from 'react'

import Container from '@/app/components/container/container.component'
import Image from 'next/image'

import polkadotFrancophonie from '../../../../../public/assets/partners/polkadot-francophonie.png'
import frenchFederationOfBlockchainProfessionals from '../../../../../public/assets/partners/french-federation-of-blockchain-professionals.png'
import blockchainInnov from '../../../../../public/assets/partners/blockchain-innov.png'
import blockchainHec from '../../../../../public/assets/partners/blockchain-hec.png'

const PartnersSection = () => {
  const partners = [
    {
      label: 'Polkadot Francophonie',
      link: '#',
      image: polkadotFrancophonie,
    },
    {
      label: 'French Federation of<br/> Blockchain Professionals',
      link: '#',
      image: frenchFederationOfBlockchainProfessionals,
    },
    {
      label: 'Blockchain Innov',
      link: '#',
      image: blockchainInnov,
    },
    {
      label: 'Blockchain HEC',
      link: '#',
      image: blockchainHec,
    },
  ]

  return (
    <section id="partners" className='mb-[17rem]'>
      <Container>
        <h2 className="text-center mb-[8rem]">Partners</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4rem]">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.image}
                  alt={partner.label}
                  className=" w-full h-[15rem] mb-[2.4rem] object-contain flex items-center justify-center"
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
