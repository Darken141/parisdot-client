import React from 'react'

import Container from '@/app/components/container/container.component'
import Image from 'next/image'

import homePageconfig from '@/app/config/home.page.json'
import day1 from '../../../../public/assets/program-section/1.png'
import day2 from '../../../../public/assets/program-section/2.png'
import day3 from '../../../../public/assets/program-section/3.png'

const ProgramSection = () => {
  const { heading, subHeading, items } = homePageconfig.programSection

  const days = [
    {
      image: {
        src: day1,
        alt: 'day 1',
      },
      ...items[1],
    },
    {
      image: {
        src: day2,
        alt: 'day 2',
      },
      ...items[2],
    },
    {
      image: {
        src: day3,
        alt: 'day 3',
      },
      ...items[3],
    },
  ]

  return (
    <section id="program" className='mb-[25.5rem]'>
      <Container>
        <h2 className="text-center leading-none mb-[1.3rem]">{heading}</h2>
        <h3 className='font-black text-[1.9rem] text-center mb-[9.2rem]'>{subHeading}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2.5rem]">
          {days.map((day, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[2.4rem] mb-[4.8rem]"
            >
              <Image
                {...day.image}
                alt={day.image.alt}
                className="w-[16.7rem] h-[17.1rem] object-contain flex items-center justify-center"
              />
              <div>
                <h4 className="font-black text-[2.9rem] text-center mb-[0.5rem]">
                  {day.dateString}
                </h4>
                <p className="font-semibold text-[2rem] text-center">
                  {day.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProgramSection
