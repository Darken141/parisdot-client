'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button.component'
import HamButton from '../ham-button/ham-button.component'

import Logo from '../../../../public/assets/pdot-v4.svg'
import TwitterIcon from '../../../../public/assets/icons/twitter_header_icon.svg'
import DiscordIcon from '../../../../public/assets/icons/discord_header_icon.svg'
import headerConfig from '../../config/header.json'
import contactConfig from '../../config/contact.json'

const Header: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const socials = [
    {
      icon: DiscordIcon,
      ...(contactConfig.socials.discord.blank && {
        target: '_blank',
        rel: 'noopener noreferrer',
      }),
      ...contactConfig.socials.discord,
    },
    {
      icon: TwitterIcon,
      ...(contactConfig.socials.twitter.blank && {
        target: '_blank',
        rel: 'noopener noreferrer',
      }),
      ...contactConfig.socials.twitter,
    },
  ]

  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 w-full z-[9999] overflow-hidden backdrop-blur-xl">
        <div className="flex justify-between items-center gap-8 max-w-[124rem] px-[1.5rem] py-[2.4rem] my-0 mx-auto sm:px-[3rem]">
          <a href={'/'} className="block max-w-[17rem] w-full">
            <figure className="relative flex items-center justify-center w-full">
              <Image src={Logo} alt="ParisDOT Logo" />
            </figure>
          </a>

          <div className="flex items-center justify-between gap-8 lg:max-w-[85.2rem] lg:w-full">
            <nav className=" lg:max-w-[58.8rem] lg:flex-grow">
              <ul className="hidden lg:flex items-center w-full justify-between gap-4 list-none m-0 p-0">
                {headerConfig.navItems.map((item, idx) => (
                  <li key={idx} className="">
                    <Link
                      className="block no-underline text-white hover:underline"
                      href={item.link}
                      scroll={item.scroll}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden sm:block">
              <Button disabled>Coming soon</Button>
              {/* <Button>{headerConfig.cta.name}</Button> */}
            </div>
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <figure>
                  <Image src={social.icon} alt={social.alt} />
                </figure>
              </a>
            ))}
            <div className="lg:hidden">
              <HamButton
                isOpen={showMobileNav}
                onClick={() => {
                  setShowMobileNav((prev) => !prev)
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            onClick={() => {
              setShowMobileNav((prev) => !prev)
            }}
            className="fixed top-0 right-0 bottom-0 w-full h-screen bg-[#00000080] z-[998] px-[1.5rem] py-[10rem] lg:hidden"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: 1000,
            }}
            transition={{
              duration: 0.8,
            }}
            className="fixed top-0 right-0 bottom-0 w-[24rem] h-screen bg-[#041222] z-[999] px-[1.5rem] py-[10rem] lg:hidden"
          >
            <ul className="list-none">
              {headerConfig.navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="mb-[1rem]"
                  onClick={() => {
                    setShowMobileNav((prev) => !prev)
                  }}
                >
                  <Link
                    className="block no-underline text-white hover:underline"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mb-6">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden"
                >
                  <figure>
                    <Image src={social.icon} alt={social.alt} />
                  </figure>
                </a>
              ))}
            </div>
            <div className="w-full flex flex-col sm:hidden">
              <Button className="w-full">{headerConfig.cta.name}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  )
}

export default Header
