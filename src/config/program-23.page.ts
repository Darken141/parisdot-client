import { IHeroSectionProps } from '@/types/section.types'

const heroSection: IHeroSectionProps = {
  place: 'FRANCE - PARIS',
  date: '18.07 - 20.07',
  heading: 'PROGRAM OF 2023',

  primaryCta: {
    children: 'Talks 2023',
    href: '/#talks-2023',
  },
  secondaryCta: {
    children: 'All speeches from 2022',
    href: 'https://www.youtube.com/playlist?list=PLJ0w0pqhMKhA3c-xA-w1YzGqSRazAbSPs',
    target: '_blank',
  },
  // primaryCta: {
  //   label: 'Buy tickets',
  //   href: '/#',
  // },
  program: {
    children: 'Program of 2023',
    href: '/program',
  },
}

const archivesPageConfig = {
  heroSection: heroSection,
}

export default archivesPageConfig
