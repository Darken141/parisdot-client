import { IHeroSectionProps } from '@/types/section.types'

const heroSection: IHeroSectionProps = {
  place: 'FRANCE - PARIS',
  date: '19.07 - 21.07',
  heading: 'PROGRAM OF 2022',

  primaryCta: {
    children: "Buy tickets",
    href: "https://www.eventbrite.fr/e/parisdotcomm-2023-tickets-651595759457",
    target: "_blank",
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
