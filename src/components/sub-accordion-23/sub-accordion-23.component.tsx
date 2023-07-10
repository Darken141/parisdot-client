'use-client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import { FaUserAlt } from 'react-icons/fa'

import { FiArrowRightCircle, FiArrowUpCircle } from 'react-icons/fi'

import { ISpeaker } from '@/config/speakers'

interface IProps {
  id: string | number
  item: {
    type?: string
    id: string
    time: string
    title: string
    description?: string | React.ReactNode
    speakers?: ISpeaker[]
  }
}

interface IAccordionContainerProps {
  isActive: boolean
}

const SubAccordion23: React.FC<IProps> = ({ item }) => {
  const [showContent, setShowContent] = useState(false)

  const toggle = () => {
    setShowContent((prevValue) => !prevValue)
  }

  return (
    <motion.div className="program first:mt-[2rem] last:mb-[4rem] last:[&>.pr-row>.pr-bullet]:bg-[red]">
      <div
        className="pr-row relative grid grid-cols-[auto] max-w-[100rem] mx-auto py-[1rem] gap-[2rem] md:px-[1rem] md:py-[1rem] md:grid-cols-[auto,auto,1fr]"
        style={!item.speakers ? { pointerEvents: 'none' } : {}}
        onClick={() => {
          if (item.speakers) {
            toggle()
          }
        }}
      >
        <div className="pt-[1.5rem] text-[2rem] font-black ml-[2rem]">
          <p>{item.time}</p>
        </div>
        <div
          className={`mt-[1.4rem] pr-bullet hidden md:flex md:items-center md:justify-center w-[3.1rem] h-[3.1rem] bg-[${
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
            <div>
              {item?.type && (
                <p className="text-[1.6rem] font-black uppercase sm:text-[2rem] md:mr-[1rem]">
                  {item.type}
                </p>
              )}
              <h3 className="text-[1.6rem] font-black uppercase sm:text-[2rem] md:mr-[1rem]">
                {item.title}
              </h3>
            </div>

            <figure
              className={`icon flex items-center justify-center text-[3.5rem] p-[0.6rem] rounded-full bg-[${
                showContent ? '#FF008C' : '#0C2746'
              }] justify-self-end ml-auto md:hidden`}
            >
              {showContent ? <FiArrowUpCircle /> : <FiArrowRightCircle />}
            </figure>
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
                <div className="w-full h-[3rem]" />
                {item.speakers &&
                  item.speakers.length &&
                  item.speakers.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-[5.1rem,1fr] py-[1rem] gap-[1.1rem]"
                    >
                      {speaker.image ? (
                        <figure className="speaker w-[5.1rem] h-[5.1rem] flex items-center justify-center rounded-[50%] overflow-hidden">
                          <Image
                            {...speaker.image}
                            alt={speaker.image.alt}
                            className="w-full h-full object-cover"
                            placeholder="blur"
                          />
                        </figure>
                      ) : (
                        <figure className="w-[5.1rem] h-[5.1rem] rounded-[50%] overflow-hidden flex items-center justify-center text-[2.5rem] bg-[#003059] text-[#041222] mb-[1.26rem]">
                          <FaUserAlt />
                        </figure>
                      )}
                      <div>
                        {/* {speaker.organization.logo ? (
                          <figure className="speaker-logo mb-[0.5rem]">
                            <Image
                              src={speaker.organization.logo?.src}
                              alt={speaker.organization.logo?.alt}
                              className="object-contain h-full max-h-[4rem]"
                              width={80}
                              height={80}
                            />
                          </figure>
                        ) : (
                          <p>{speaker.organization.name}</p>
                        )} */}
                        <h4 className="text-[2rem] font-black uppercase">
                          {speaker.name}
                        </h4>
                        <p className="text-[2rem]">
                          {speaker.organization.name}
                        </p>
                      </div>
                    </div>
                  ))}
                {/* {item.speakers && item.speakers.length && (
                  <>
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
                            item.speaker.logo.width
                              ? +item.speaker.logo.width
                              : 80
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
                  </>
                )} */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default SubAccordion23
