import React from 'react'

import Container from '../container/container.component'
import Image from 'next/image'

import githubIcon from '../../../../public/assets/icons/github-icon.png'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <a href="#" target="_blank" rel="noopener noreferrer" className='block mb-[1.94rem]'>
            <Image src={githubIcon} alt="github icon" />
          </a>
          <p className='text-[2.8rem] color-[#DDDDDD]'>PDotComm ASBL 10, Giällewee, L-9749 Clervaux</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
