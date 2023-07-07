import aboutIlu from '../../public/assets/about-section/about-ilu.png'
import mainStage from '../../public/assets/conference-section/main-stage.png'
import secondStage from '../../public/assets/conference-section/second-stage.png'
import networkingSpace from '../../public/assets/conference-section/networking-space.png'
import specialEvents from '../../public/assets/conference-section/special-events.png'
import day1 from '../../public/assets/program-section/1.png'
import day2 from '../../public/assets/program-section/2.png'
import day3 from '../../public/assets/program-section/3.png'
import venueIlu from '../../public/assets/venue-section/venue-ilu.png'
import polkadotFrancophonie from '../../public/assets/partners/polkadot-francophonie.png'
import frenchFederationOfBlockchainProfessionals from '../../public/assets/partners/french-federation-of-blockchain-professionals.png'
import blockchainInnov from '../../public/assets/partners/blockchain-innov.png'
import blockchainHec from '../../public/assets/partners/blockchain-hec.png'

import {
  IAboutProps,
  IConferenceSectionProps,
  IHeroSectionProps,
  IPartnersSectionProps,
  IProgramSectionProps,
  IVenueSectionProps,
} from '@/types/section.types'

const heroSection: IHeroSectionProps = {
  place: 'PARIS, FRANCE - ARAB WORLD INSTITUTE',
  date: 'July 18-20th 2023',
  heading: 'CONF W-SHOP',
  video: {
    src: 'https://www.youtube.com/embed/bXwbey9SEZU',
    alt: 'ParisDotComm 2022 Aftermovie',
  },
  description:
    '3 days of web3 conference and workshops sessions organized by the Polkadot Community',
  primaryCta: {
    children: 'Buy tickets',
    // disabled: true,
    href: 'https://www.eventbrite.fr/e/parisdotcomm-2023-tickets-651595759457',
    target: '_blank',
  },
  // primaryCta: {
  //   label: 'Buy tickets',
  //   href: '/#',
  // },
  // secondaryCta: {
  //   children: 'Apply to speak',
  //   // disabled: true,
  //   href: 'https://forms.gle/d9bWi8y72Lh9nbPXA',
  //   target: '_blank',
  // },
  partners: [
    {
      children: 'Polkadot Francophonie',
      href: 'https://www.polkafrancophonie.org/',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...polkadotFrancophonie,
        placeholder: 'blur',
        alt: 'Polkadot Francophonie',
      },
    },
    {
      children: 'French Federation of Blockchain Professionals',
      href: 'https://www.federation-blockchain.fr/welcome.html',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...frenchFederationOfBlockchainProfessionals,
        placeholder: 'blur',
        alt: 'French Federation of Blockchain Professionals',
      },
    },
    {
      children: 'Blockchain Innov',
      href: 'https://www.blockchaininnov.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...blockchainInnov,
        placeholder: 'blur',
        alt: 'Blockchain Innov',
      },
    },
    {
      children: 'Blockchain HEC',
      href: 'https://blockchain-hec.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...blockchainHec,
        placeholder: 'blur',
        alt: 'Blockchain HEC',
      },
    },
  ],

  program: {
    children: 'Program of 2022',
    href: '/archives',
  },
}

const aboutSection: IAboutProps = {
  heading: 'What is parisdotcomm?',
  description:
    '<p>A 3-day blockchain conference in Paris, highlighting the Polkadot ecosystem, focusing on the blockchain world, real-world applications, and fostering collaboration. The event features expert-led discussions, project presentations, workshops, and networking opportunities for professionals and enthusiasts in the blockchain industry.</p> <p>Offering an inclusive space to meet, greet, talk and exchange thoughts, and perhaps kick off the next interesting collaboration.</p>    ',
  primaryCta: {
    children: 'Buy tickets',
    // disabled: true,
    href: 'https://www.eventbrite.fr/e/parisdotcomm-2023-tickets-651595759457',
    target: '_blank',
  },
  secondaryCta: {
    children: 'Program 2023',
    href: '/#program',
  },
  asset: {
    ...aboutIlu,
    placeholder: 'blur',
    alt: 'ParisDotComm 2022 Aftermovie',
  },
}

const conferenceSection: IConferenceSectionProps = {
  heading: 'CONFERENCE',
  stages: [
    {
      image: {
        ...mainStage,
        placeholder: 'blur',
        alt: 'ParisDotComm 2022 Aftermovie',
      },
      name: 'main stage',
      description: 'Auditorium  will be dedicated to the the web3 topics',
      list: [
        'Blockchain and Web',
        'Web3 projects',
        'Institutional and corporate',
        'Blockchain interoperability',
      ],
    },
    {
      image: {
        ...secondStage,
        placeholder: 'blur',
        alt: 'ParisDotComm 2022 Aftermovie',
      },
      name: 'second stage',
      description:
        '"Salle du Haut Conseil" will be  dedicated to the Polkadot ecosystem: conferences, panels and workshops',
      list: [],
    },
    {
      image: {
        ...networkingSpace,
        placeholder: 'blur',
        alt: 'ParisDotComm 2022 Aftermovie',
      },
      name: 'Networking space',
      description:
        'The pillar room will be divided into into 4 spaces to host:',
      list: [
        'catering and chill working space',
        'NFT exhibition with TakTik screens and technology',
        'a press room space will be deployed in the lodges',
      ],
    },
    {
      image: {
        ...specialEvents,
        placeholder: 'blur',
        alt: 'ParisDotComm 2022 Aftermovie',
      },
      name: 'Special evening events',
      description: '"La Salle du Haut Conseil" and the rooftop will host:',
      list: [
        'networking event on the first day',
        'networking party on the second day ',
      ],
    },
  ],
}

const programSection: IProgramSectionProps = {
  heading: 'Program 2023',
  subHeading: 'July 18-20th',
  items: [
    {
      image: {
        src: day1,
        alt: 'day 1',
        placeholder: 'blur',
      },
      dateString: '18th: 9am - 8.30pm',
      primaryCta: {
        children: 'Check PROGRAM',
        href: '/program/#day1',
      },
      description: '(Program main stage)',
      description2: '(Polkadot stage)',
      description3: '(Rooftop)',
    },
    {
      image: {
        src: day2,
        alt: 'day 1',
        placeholder: 'blur',
      },
      dateString: '19th: 9am - 10pm',
      primaryCta: {
        children: 'Check PROGRAM',
        href: '/program/#day2',
      },
      description: '(Program main stage)',
      description2: '(Polkadot stage)',
      description3: '(Rooftop)',
    },
    {
      image: {
        src: day3,
        alt: 'day 1',
        placeholder: 'blur',
      },
      dateString: '20th: 9am - 4pm',
      primaryCta: {
        children: 'Check PROGRAM',
        href: '/program/#day3',
      },
      description: '(Program main stage)',
      description2: '(Polkadot stage)',
    },
  ],
}

const venueSection: IVenueSectionProps = {
  asset: {
    ...venueIlu,
    placeholder: 'blur',
    alt: 'ParisDotComm 2022',
  },
  heading: 'VENUE',
  description:
    '<p>was designed to create strong and durable cultural ties while cultivating constructive dialogue between the Arab World, France, and Europe. Since its creation it has become a place of cultural exchange in Paris  but also an interlocutor in the field of mathematics and research.</p>',
  primaryCta: {
    children: 'View in maps',
    href: 'https://www.google.com/maps/place/Institut+du+Monde+Arabe/@48.8489257,2.3572313,15z/data=!4m5!3m4!1s0x0:0xbed555c58f020e74!8m2!3d48.8489257!4d2.3572313?shorturl=1',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
}

const partnersSection: IPartnersSectionProps = {
  heading: 'Partners',
  items: [
    {
      children: 'Polkadot Francophonie',
      href: 'https://www.polkafrancophonie.org/',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...polkadotFrancophonie,
        placeholder: 'blur',
        alt: 'Polkadot Francophonie',
      },
    },
    {
      children: 'French Federation of Blockchain Professionals',
      href: 'https://www.federation-blockchain.fr/welcome.html',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...frenchFederationOfBlockchainProfessionals,
        placeholder: 'blur',
        alt: 'French Federation of Blockchain Professionals',
      },
    },
    {
      children: 'Blockchain Innov',
      href: 'https://www.blockchaininnov.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...blockchainInnov,
        placeholder: 'blur',
        alt: 'Blockchain Innov',
      },
    },
    {
      children: 'Blockchain HEC',
      href: 'https://blockchain-hec.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
      asset: {
        ...blockchainHec,
        placeholder: 'blur',
        alt: 'Blockchain HEC',
      },
    },
  ],
}

const homepageConfig = {
  heroSection: heroSection,
  conferenceSection: conferenceSection,
  programSection: programSection,
  aboutSection: aboutSection,
  venueSection: venueSection,
  partnersSection: partnersSection,
}

export default homepageConfig
