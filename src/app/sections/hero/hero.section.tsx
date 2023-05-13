import React from 'react'

import Container from '../../components/container/container.component'
import Button from '../../components/button/button.component'
import Link from 'next/link'
import Image, {StaticImageData} from 'next/image'

import homePageConfig from '../../config/home.page.json'
import polkadotFrancophonie from '../../../../public/assets/partners/polkadot-francophonie.png'
import frenchFederationOfBlockchainProfessionals from '../../../../public/assets/partners/french-federation-of-blockchain-professionals.png'
import blockchainInnov from '../../../../public/assets/partners/blockchain-innov.png'
import blockchainHec from '../../../../public/assets/partners/blockchain-hec.png'

export interface IProps {
  place?: string
  date?: string
  heading?: string
  description?: string
  video?: {
    src: string
    alt: string
  }
  program?: {
    label: string
    link: string
  }
  primaryCta?: {
    label: string
    link: string
  }
  secondaryCta?: {
    label: string
    link: string
  }
  partners?: {
    label: string
    link: string
    image: StaticImageData
  }[]
}


const HeroSection = ({
  place,
  date,
  heading,
  description,
  video,
  program,
  primaryCta,
  secondaryCta,
  partners
}: IProps) => {


  return (
    <section className='pt-[1rem] md:pt-[6rem] mb-[8rem]'>
      <Container>
        {place && <p className="text-[1.45rem] sm:text-[1.9rem] font-black text-center">{place}</p>}
        {date && <p className="text-[1.45rem] sm:text-[1.9rem] font-black text-center">{date}</p>}
        {heading && <div className="flex justify-center">
          <h1 className="inline-block leading-none text-[3.85rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[11.5rem] font-black text-center mx-auto bg-gradient-to-r from-[#E6007A] to-[#0086FF] text-transparent bg-clip-text">
            {heading}
          </h1>
        </div>}
        {description && <p
          className="w-full max-w-[52.36rem] mx-auto text-[1.7rem] sm:text-[2rem] text-center text-[#CDCDCD] mb-[4.1rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        />}
        {video && <div className='bg-[#555] p-[4rem] flex items-center justify-center mb-[2.3rem]'>VIDEO</div>}
        {program && <Link href={program.link} className='mb-[4.28rem] text-[1.7rem] text-white text-center block underline'>{program.label}</Link>}
        <div
          className="flex flex-col md:flex-row justify-center gap-[2.7rem] mb-[5.3rem]"
        >
          {primaryCta && <Button>{primaryCta.label}</Button>}
          {secondaryCta && <Button outline>{secondaryCta.label}</Button>}
        </div>
        {partners && <div className="w-full flex flex-wrap justify-center gap-[2.3rem]">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  {...partner.image}
                  alt={partner.label}
                  className=" w-full h-[3.9rem] object-contain flex items-center justify-center"
                />
              </a>
            </div>
          ))}
        </div>}
      </Container>
    </section>
  )
}

export default HeroSection
