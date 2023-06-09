import React from 'react'

import Container from '@/components/container/container.component'
import Image from 'next/image'

import homePageConfig from '@/config/home.page'
import middleRightIlu from '../../../../public/assets/conference-section/middle-right-ilu.png'

const ConferenceSection = () => {
  const { heading, stages } = homePageConfig.conferenceSection

  return (
    <section id="conference" className="relative mb-[12.4rem]">
      <div className="absolute top-[-20rem] sm:top-[-10rem] lg:top-[0rem] w-[30%] sm:w-[22%] lg:w-[12%] right-0  z-[-1]">
        <Image
          src={middleRightIlu}
          alt="middle right ilu"
          className="object-contain"
          placeholder="blur"
        />
      </div>

      <Container>
        <h2 className="text-center mb-[4.94rem]">{heading}</h2>
        <div className="grid grid-cols-1 gap-[2rem] md:gap-[7.6rem] md:grid-cols-2 ">
          {stages.map((item, index) => (
            <div key={index} className="flex flex-col gap-[2.4rem] mb-[4.8rem]">
              <Image
                {...item.image}
                alt={item.image.alt}
                className="w-full object-contain flex items-center justify-center border-r-[3.rem] overflow-hidden"
              />
              <div>
                <h4 className="font-black uppercase text-[2rem] md:text-[2.9rem]">
                  {item.name}
                </h4>
                <p className="font-semibold text-[1.8rem] md:text-[2rem] mb-[1.3rem]">
                  {item.description}
                </p>

                <ul>
                  {item.list.map((subItem, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-[1.2rem] mb-[.5rem]"
                    >
                      <span className="w-[1.2rem] h-[1.2rem] bg-[#CB0F89] rounded-[50%]" />
                      <p className="text-[1.6rem] text-[#CDCDCD]">{subItem}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ConferenceSection
