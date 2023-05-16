import React from 'react'

import Container from '../container/container.component'
import Image from 'next/image'

import githubIcon from '../../../../public/assets/icons/github-icon.png'
import bottomLeftIlu from '../../../../public/assets/footer/bottom-left.png'
import buttomRightIlu from '../../../../public/assets/footer/bottom-right.png'

import { AcuminVariableConcept } from '@/app/fonts/fonts'

const Footer = () => {
  return (
    <footer className={`relative w-full ${AcuminVariableConcept.className}`}>
      <Container>
        <div className="flex flex-col items-center justify-center py-[4rem]">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-[1.94rem]"
          >
            <Image src={githubIcon} alt="github icon" placeholder="blur" />
          </a>
          <p className="text-center font-light text-[1.6rem] md:text-[2.8rem] color-[#DDDDDD] scale-x-[0.55] scale-y-[1]">
            PDotComm ASBL 10, Giällewee, L-9749 Clervaux
          </p>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0  w-[30%] z-[-1]">
        <Image
          src={bottomLeftIlu}
          alt="bottom left ilu"
          className="object-contain"
          placeholder="blur"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[30%] 2xl:w-[20%] z-[-1]">
        <Image
          src={buttomRightIlu}
          alt="bottom right ilu"
          className="object-contain"
          placeholder="blur"
        />
      </div>
    </footer>
  )
}

export default Footer
