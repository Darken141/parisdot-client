import React from 'react'

import Container from '../container/container.component'
import Image from 'next/image'

import githubIcon from '../../../../public/assets/icons/github-icon.png'
import bottomLeftIlu from '../../../../public/assets/footer/bottom-left.png'
import buttomRightIlu from '../../../../public/assets/footer/bottom-right.png'

const Footer = () => {
  return (
    <footer className="relative w-full">


      <Container>
        <div className="flex flex-col items-center justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-[1.94rem]"
          >
            <Image src={githubIcon} alt="github icon" />
          </a>
          <p className="text-center text-[1.6rem] md:text-[2.8rem] color-[#DDDDDD]">
            PDotComm ASBL 10, Giällewee, L-9749 Clervaux
          </p>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0  w-[30%] z-[-1]">
        <Image
          src={bottomLeftIlu}
          alt="bottom left ilu"
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[20%] z-[-1]">
        <Image
          src={buttomRightIlu}
          alt="bottom right ilu"
          className="object-contain"
        />
      </div>
    </footer>
  )
}

export default Footer
