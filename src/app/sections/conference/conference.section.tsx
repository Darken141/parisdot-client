import React from 'react'

import Container from '@/app/components/container/container.component'
import Image from 'next/image'

import homePageConfig from '@/app/config/home.page.json'
import mainStage from '../../../../public/assets/conference-section/main-stage.png'
import secondStage from '../../../../public/assets/conference-section/second-stage.png'
import networkingSpace from '../../../../public/assets/conference-section/networking-space.png'
import specialEvents from '../../../../public/assets/conference-section/special-events.png'

const ConferenceSection = () => {
  const { heading, stages } = homePageConfig.conferenceSection

  const items = [
    {
      image: {
        src: mainStage,
        alt: 'main stage',
      },
      ...stages[1],
    },
    {
      image: {
        src: secondStage,
        alt: 'second stage',
      },
      ...stages[2],
    },
    {
      image: {
        src: networkingSpace,
        alt: 'networking space',
      },
      ...stages[3],
    },
    {
      image: {
        src: specialEvents,
        alt: 'special events',
      },
      ...stages[4],
    },
  ]

  return (
    <section id="conference" className='mb-[12.4rem]'>
      <Container>
        <h2 className="text-center mb-[4.94rem]">{heading}</h2>
        <div className='grid grid-cols-1 gap-[7.6rem] md:grid-cols-2 '>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[2.4rem] mb-[4.8rem]"
            >
              <Image
                {...item.image}
                alt={item.image.alt}
                className="w-full object-contain flex items-center justify-center border-r-[3.rem] overflow-hidden"
              />
              <div>
                <h4 className="font-black uppercase text-[2.9rem]">
                  {item.name}
                </h4>
                <p className="font-semibold text-[2rem] mb-[1.3rem]">
                  {item.description}
                </p>

                <ul>
                  {item.list.map((subItem, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-[1.2rem] mb-[.5rem]"
                    >
                      <span className="w-[1.2rem] h-[1.2rem] bg-[#CB0F89] rounded-[50%]" />
                      <p className="text-[1.6rem] text-[#CDCDCD]">
                        {subItem}
                      </p>
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
