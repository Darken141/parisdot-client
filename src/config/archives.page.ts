import { IHeroSectionProps } from '@/types/section.types'

const heroSection: IHeroSectionProps = {
  place: 'FRANCE - PARIS',
  date: '19.07 - 21.07',
  heading: 'PROGRAM OF 2022',

  primaryCta: {
    children: 'Coming soon',
    disabled: true,
  },
  // primaryCta: {
  //   label: 'Buy tickets',
  //   href: '/#',
  // },
  // secondaryCta: {
  //   label: 'Aplly to speak',
  //   href: '/#',
  // },
  program: {
    children: 'Program of 2022',
    href: '/archives',
  },
}

const archivesPageConfig = {
  heroSection: heroSection,
}

export default archivesPageConfig
