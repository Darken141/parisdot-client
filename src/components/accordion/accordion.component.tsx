'use-client'
// Utils
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import SubAccordion from '../sub-accordion/sub-accordion.component'

// Icons
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'

interface IProps {
  showContent: boolean
  idx: number
  dayID: string
  item: {
    id: string
    title: string
    items: {
      id: string
      time: string
      title: string
      description?: string | React.ReactNode
    }[]
    showContent: boolean
  }
  openEventDayProgram: (showContent: boolean, idx: number) => void
}

interface IAccordionContainerProps {
  isActive: boolean
}

const Accordion: React.FC<IProps> = ({
  item,
  showContent,
  openEventDayProgram,
  idx,
}) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay: +`0.${idx}`,
      }}
      viewport={{ once: true }}
      className="mb-[3rem]"
    >
      <div
        onClick={() => openEventDayProgram(!showContent, idx)}
        className={`flex gap-[1rem] items-center justify-between py-[1.2rem] pr-[1.5rem] pl-[2rem] md:py-[1.2rem] md:px-[3rem] cursor-pointer border-[2px] border-solid rounded-full transition-all hover:${
          showContent ? 'border-[#FF008C]' : 'border-[#fff]'
        } ${showContent ? 'border-[#FF008C]' : 'border-[#0C2746]'}`}
      >
        <h2 className="mb-0 text-[1.66rem] font-black uppercase leading-none sm:pt-[0.2rem] sm:text-[2.2rem] md:pt-[0.4rem] md:text-[2.9rem]">
          {item.title}
        </h2>
        <figure
          className={`flex items-center justify-center text-[2.5rem] p-[0.6rem] rounded-[50%] ${
            showContent ? 'bg-[#FF008C]' : 'bg-[#0C2746]'
          }`}
        >
          {showContent ? <FiArrowUpCircle /> : <FiArrowDownCircle />}
        </figure>
      </div>

      <AnimatePresence>
        {showContent && (
          <motion.div
            id={item.id}
            key={item.id}
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
              duration: 1,
              ease: 'linear',
            }}
            className="color-[#ddd] overflow-hidden"
          >
            {item.items.map((i, idx) => (
              <SubAccordion item={i} id={idx} key={idx} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Accordion
