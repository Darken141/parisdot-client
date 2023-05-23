import React from 'react'

import Container from '@/components/container/container.component'
import Image from 'next/image'

import seeYouThereIlu from '../../../../public/assets/general/see-you-there.png'

const SeeYouThereSection = () => {
  return (
    <section id="see-you-there" className="mb-[2rem] lg:mb-[19.5rem]">
      <Container>
        <h2 className="text-center hidden">See you there!</h2>
        <div className="flex items-center justify-center">
          <Image
            src={seeYouThereIlu}
            alt="see you there ilu"
            className="w-full max-w-[73.1rem] object-contain flex items-center justify-center"
            placeholder="blur"
          />
        </div>
      </Container>
    </section>
  )
}

export default SeeYouThereSection
