import React from 'react'

import Container from '../../components/container/container.component'
import Button from '../../components/button/button.component'
import Link from 'next/link'

import homePageConfig from '../../config/home.page.json'

const HeroSection = () => {
  const {
    place,
    date,
    heading,
    description,
    program,
    primaryCta,
    secondaryCta,
  } = homePageConfig.heroSection

  return (
    <section className='pt-[6rem]'>
      <Container>
        <p className="text-[1.9rem] font-black text-center">{place}</p>
        <p className="text-[1.9rem] font-black text-center">{date}</p>
        <div className="flex justify-center">
          <h1 className="inline-block leading-none text-[13.5rem] font-black text-center mx-auto bg-gradient-to-r from-[#E6007A] to-[#0086FF] text-transparent bg-clip-text">
            {heading}
          </h1>
        </div>
        <p
          className="text-[2rem] text-center text-[#CDCDCD]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div>VIDEO</div>
        <Link href={program.link} className='mb-[4.28rem] text-[1.7rem] text-white text-center block underline'>{program.label}</Link>
        <div
          className="flex justify-center gap-[2.7rem]"
        >
          <Button>{primaryCta.label}</Button>
          <Button outline>{secondaryCta.label}</Button>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
