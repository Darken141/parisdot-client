import { IHeroSectionProps } from '@/types/section.types'

const heroSection: IHeroSectionProps = {
  place: 'FRANCE - PARIS',
  date: '19.07 - 21.07',
  heading: 'PROGRAM OF 2022',

  primaryCta: {
    children: 'Apply to speak',
    href: 'https://forms.gle/d9bWi8y72Lh9nbPXA',
    target: '_blank',
  },
  secondaryCta: {
    children: 'Playlist',
    href: 'https://www.youtube.com/playlist?list=PLJ0w0pqhMKhA3c-xA-w1YzGqSRazAbSPs',
    target: '_blank',
  },
  // primaryCta: {
  //   label: 'Buy tickets',
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
