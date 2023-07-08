'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

import { ISpeaker } from '@/config/speakers'

export interface IProps {
  speaker: ISpeaker
}

export default function SpeakerOverview({ speaker }: IProps) {
  const [showContent, setShowContent] = useState(false)

  return (
    <article
      onClick={() => speaker.bio && setShowContent(!showContent)}
      className={`grid grid-cols-1 sm:grid-cols-[11rem,1fr] gap-[1.5rem] p-[1.5rem] rounded-[2rem] transition-all ${
        speaker.bio ? 'hover:bg-[#082240] cursor-pointer' : ''
      }`}
    >
      {speaker.image ? (
        <figure className="w-[11rem] h-[11rem] rounded-[50%] overflow-hidden mb-[1.26rem] mt-[1rem]">
          <Image
            {...speaker.image}
            alt={speaker.image.alt}
            className="w-full h-full object-cover"
            placeholder="blur"
          />
        </figure>
      ) : (
        <figure className="w-[11rem] h-[11rem] rounded-[50%] overflow-hidden flex items-center justify-center text-[6rem] bg-[#003059] text-[#041222] mb-[1.26rem]">
          <FaUserAlt />
        </figure>
      )}
      <div className="">
        <div className="flex gap-[1.5rem]">
          <div>
            <h3 className="font-bold text-[2rem]">{speaker.name}</h3>
            {speaker.organization.link ? (
              <a
                href={speaker.organization.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-[#ff008c]"
              >
                <p className="text-[1.6rem]">{speaker?.organization.name}</p>
              </a>
            ) : (
              <p className="text-[1.6rem] ">{speaker?.organization.name}</p>
            )}
          </div>

          {speaker.socials && speaker.socials.twitter && (
            <a
              href={speaker.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[3rem] text-[#ff008c]"
            >
              <IoLogoTwitter />
            </a>
          )}
          {speaker.socials && speaker.socials.linkedin && (
            <a
              href={speaker.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[3rem] text-[#ff008c]"
            >
              <AiFillLinkedin />
            </a>
          )}
        </div>
        <AnimatePresence>
          {showContent && (
            <motion.div
              key={'acco'}
              initial="collapsed"
              animate={showContent ? 'open' : 'collapsed'}
              exit={'collapsed'}
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: {
                  opacity: 1,
                  height: 0,
                },
              }}
              transition={{
                duration: 0.3,
                ease: 'linear',
              }}
              className="color-[#ddd] overflow-hidden"
            >
              <p
                className="text-[1.6rem] my-[1.5rem]"
                dangerouslySetInnerHTML={{ __html: speaker.bio }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}
