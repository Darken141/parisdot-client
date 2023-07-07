'use-client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'

import { FiArrowRightCircle, FiArrowUpCircle } from 'react-icons/fi'

interface IProps {
  id: string | number
  item: {
    id: string
    time: string
    title: string
    description?: string | React.ReactNode
    speaker?: {
      name: string
      image: {
        src: string
        alt: string
      }
      logo: {
        src: string
        alt: string
        width?: string | number
        height?: string | number
      }
    }
  }
}

interface IAccordionContainerProps {
  isActive: boolean
}

const SubAccordion: React.FC<IProps> = ({ item }) => {
  const [showContent, setShowContent] = useState(false)

  const toggle = () => {
    setShowContent((prevValue) => !prevValue)
  }

  return (
    <motion.div className="program first:mt-[2rem] last:mb-[4rem] last:[&>.pr-row>.pr-bullet]:bg-[red]">
      <div
        className="pr-row relative grid grid-cols-[auto] max-w-[100rem] mx-auto py-[1rem] gap-[2rem] md:px-[1rem] md:py-[1rem] md:grid-cols-[auto,auto,1fr]"
        style={item.description == null ? { pointerEvents: 'none' } : {}}
        onClick={() => {
          if (item.description != null) {
            toggle()
          }
        }}
      >
        <div className="pt-[1.5rem] text-[2rem] font-black ml-[2rem]">
          <p>{item.time}</p>
        </div>
        <div
          className={`pr-bullet hidden md:flex md:items-center md:justify-center w-[3.1rem] h-[3.1rem] bg-[${
            showContent ? '#FF008C' : '#0C2746'
          }] rounded-full before:content-[""] before:absolute before:top-[4rem] before:w-[1px] before:h-full  before:bg-[#0C2746]`}
        />
        <div
          className={`cursor-pointer flex-grow pt-[1.2rem] px-[2rem] pb-[1rem] border-[2px] border-solid ${
            showContent ? 'border-[#FF008C]' : 'border-[#0C2746]'
          } rounded-[3rem] max-w-[76rem] transition-all ease-in-out duration-300 hover:border-[2px] hover:border-[#CD0F89] sm:pt-[1.3rem] px-[2.5rem] pb-[1rem]`}
        >
          <div
            className={`flex items-start justify-start flex-col md:items-center md:justify-between md:flex-row`}
          >
            <h3 className="text-[1.6rem] font-black uppercase sm:text-[2rem] md:mr-[1rem]">
              {item.title}
            </h3>
            {item.speaker && (
              <div className="w-full h-[1px] my-[1rem] mx-0 bg-[#fff] md:w-[1px] md:h-[5rem] md:justify-self-end md:ml-auto md:mr-[3rem] md:bg-[#0C2746]" />
            )}
            {item.speaker && (
              <div className="flex items-center w-full gap-[1rem] md:max-w-[20rem]">
                <figure className="speaker pt-[0.5rem] flex items-center justify-center">
                  <Image
                    src={item.speaker.image.src}
                    alt={item.speaker.image.alt}
                    width={51}
                    height={51}
                    className="object-contain"
                  />
                </figure>
                <div>
                  <figure className="speaker-logo mb-[0.5rem]">
                    <Image
                      src={item.speaker.logo.src}
                      alt={item.speaker.logo.alt}
                      className="object-contain h-full max-h-[4rem]"
                      width={
                        item.speaker.logo.width ? +item.speaker.logo.width : 80
                      }
                      height={
                        item.speaker.logo.height
                          ? +item.speaker.logo.height
                          : 80
                      }
                      // width={
                      // 	item.speaker.logo.width
                      // 		? item.speaker.logo.width
                      // 		: "80%"
                      // }
                      // height={
                      // 	item.speaker.logo.width
                      // 		? item.speaker.logo.width
                      // 		: "auto"
                      // }
                      // height={"5"}
                    />
                  </figure>
                  <h4 className="text-[1.6rem] font-black uppercase">
                    {item.speaker.name}
                  </h4>
                </div>
                {item.description && (
                  <figure
                    className={`icon flex items-center justify-center text-[3.5rem] p-[0.6rem] rounded-full bg-[${
                      showContent ? '#FF008C' : '#0C2746'
                    }] justify-self-end ml-auto md:hidden`}
                  >
                    {showContent ? <FiArrowUpCircle /> : <FiArrowRightCircle />}
                  </figure>
                )}
              </div>
            )}
          </div>
          <AnimatePresence>
            {showContent && (
              <motion.div
                id={item.id.toString()}
                key={item.id}
                initial="collapsed"
                animate={showContent ? 'open' : 'collapsed'}
                exit={'collapsed'}
                variants={{
                  open: {
                    display: 'block',
                    opacity: 1,
                    // height: width <= 858 ? "64rem" : "28rem",
                    height: 'auto',
                  },
                  collapsed: {
                    opacity: 1,
                    height: 0,
                    transitionEnd: { opacity: 1 },
                  },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.2, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <p className="mt-[1rem] mx-0 mb-[2rem] pt-[1rem] border-[1px] border-solid border-[#0C2746]">
                  {item.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default SubAccordion
