'use client'

import React, { useState } from 'react'

import Container from '@/components/container/container.component'
import Accordion23 from '@/components/accordion-23/accordion-23.component'
import Image from 'next/image'
import { motion } from 'framer-motion'

import middleLeftIlu from '../../../public/assets/program-section/middle-left-ilu.png'

import day1Ilu from '../../../public/assets/program-section/1.png'
import day2Ilu from '../../../public/assets/program-section/2.png'
import day3Ilu from '../../../public/assets/program-section/3.png'

import { day1Program, day2Program, day3Program } from '@/config/program-2023'

const Program = () => {
  const [day1, setDay1] = useState(day1Program)

  const openEventDay1Program = (
    showContent: boolean,
    i: number
    // dayID: string
  ) => {
    setDay1([
      ...day1.map((e, id) => {
        if (i === id) {
          return {
            ...e,
            showContent: showContent,
          }
        } else {
          return {
            ...e,
            showContent: e.showContent,
          }
        }
      }),
    ])
  }
  const [day2, setDay2] = useState(day2Program)

  const openEventDay2Program = (
    showContent: boolean,
    i: number
    // dayID: string
  ) => {
    setDay2([
      ...day2.map((e, id) => {
        if (i === id) {
          return {
            ...e,
            showContent: showContent,
          }
        } else {
          return {
            ...e,
            showContent: e.showContent,
          }
        }
      }),
    ])
  }
  const [day3, setDay3] = useState(day3Program)

  const openEventDay3Program = (
    showContent: boolean,
    i: number
    // dayID: string
  ) => {
    setDay3([
      ...day3.map((e, id) => {
        if (i === id) {
          return {
            ...e,
            showContent: showContent,
          }
        } else {
          return {
            ...e,
            showContent: e.showContent,
          }
        }
      }),
    ])
  }

  return (
    <section id="conference" className="relative mb-[16.8rem]">
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        <Image
          src={middleLeftIlu}
          alt="Program background"
          className="object-contain"
        />
      </div>

      <Container>
        <div id="day1" className="mb-[15rem]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="flex justify-center mb-[7rem]"
          >
            <Image
              {...day1Ilu}
              alt="Day 1"
              className="w-[16.7rem] h-[17.1rem] object-contain flex items-center justify-center"
            />
          </motion.div>
          {day1.map((day, idx) => (
            <div key={idx}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: +`0.${idx}`,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                {day.heading}
              </motion.h2>

              <div>
                <Accordion23
                  showContent={day1[idx].showContent}
                  openEventDayProgram={openEventDay1Program}
                  idx={idx}
                  item={day}
                  dayID={day.id}
                />
              </div>
            </div>
          ))}
        </div>
        <div id="day2" className="mb-[15rem]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="flex justify-center mb-[7rem]"
          >
            <Image
              {...day2Ilu}
              alt="Day 2"
              className="w-[16.7rem] h-[17.1rem] object-contain flex items-center justify-center"
            />
          </motion.div>
          {day2.map((day, idx) => (
            <div key={idx}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: +`0.${idx}`,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                {day.heading}
              </motion.h2>

              <div>
                <Accordion23
                  showContent={day2[idx].showContent}
                  openEventDayProgram={openEventDay2Program}
                  idx={idx}
                  item={day}
                  dayID={day.id}
                />
              </div>
            </div>
          ))}
        </div>
        <div id="day3" className="mb-[15rem]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="flex justify-center mb-[7rem]"
          >
            <Image
              {...day3Ilu}
              alt="Day 3"
              className="w-[16.7rem] h-[17.1rem] object-contain flex items-center justify-center"
            />
          </motion.div>
          {day3.map((day, idx) => (
            <div key={idx}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: +`0.${idx}`,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                {day.heading}
              </motion.h2>

              <div>
                <Accordion23
                  showContent={day3[idx].showContent}
                  openEventDayProgram={openEventDay3Program}
                  idx={idx}
                  item={day}
                  dayID={day.id}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Program
