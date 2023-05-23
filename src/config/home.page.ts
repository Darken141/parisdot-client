import { IProps as IHeroSectinoProps } from '../components/sections/hero/hero.section'

const heroSection: IHeroSectinoProps = {
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

const aboutSection = {}

const homepageConfig = {
  heroSection: heroSection,
  conferenceSection: {
    heading: 'CONFERENCE',
    stages: {
      '1': {
        name: 'main stage',
        description: 'Auditorium  will be dedicated to the the web3 topics',
        list: [
          'Blockchain and Web',
          'Web3 projects',
          'Institutional and corporate',
          'Blockchain interoperability',
        ],
      },
      '2': {
        name: 'second stage',
        description:
          '"Salle du Haut Conseil" will be  dedicated to the Polkadot ecosystem: conferences, panels and workshops',
        list: [],
      },
      '3': {
        name: 'Networking space',
        description:
          'The pillar room will be divided into into 4 spaces to host:',
        list: [
          'catering and chill working space',
          'NFT exhibition with TakTik screens and technology',
          'a press room space will be deployed in the lodges',
        ],
      },
      '4': {
        name: 'Special evening events',
        description: '"La Salle du Haut Conseil" and the rooftop will host:',
        list: [
          'networking event on the first day',
          'networking party on the second day ',
        ],
      },
    },
  },
  programSection: {
    heading: 'Profram 2023',
    subHeading: 'July 18-20th',
    items: {
      '1': {
        dateString: '18th: 9am - 8.30pm',
        description: '(institutional networking event)',
      },
      '2': {
        dateString: '19th: 9am - 10pm',
        description: '(networking party event)',
      },
      '3': {
        dateString: '20th: 9am - 4pm',
        description: '(closing door ceremony)',
      },
    },
  },
  aboutSection: {
    heading: 'What is pasrisdotcomm?',
    description:
      '<p>A 3-day blockchain conference in Paris, highlighting the Polkadot ecosystem, focusing on the blockchain world, real-world applications, and fostering collaboration. The event features expert-led discussions, project presentations, workshops, and networking opportunities for professionals and enthusiasts in the blockchain industry.</p> <p>Offering an inclusive space to meet, greet, talk and exchange thoughts, and perhaps kick off the next interesting collaboration.</p>    ',
    primaryCta: {
      children: 'Buy tickets',
      link: '/#',
    },
    secondaryCta: {
      children: 'Program 2023',
      link: '/#program',
    },
  },
  venueSection: {
    heading: 'VENUE',
    description:
      '<p>was designed to create strong and durable cultural ties while cultivating constructive dialogue between the Arab World, France, and Europe. Since its creation it has become a place of cultural exchange in Paris  but also an interlocutor in the field of mathematics and research.</p>',
    primaryCta: {
      label: 'View in maps',
      link: '/#',
    },
  },
  partnersSection: {
    heading: 'Partners',
    items: {
      '1': {
        label: 'Polkadot Francophonie',
        link: 'https://www.polkafrancophonie.org/',
      },
      '2': {
        label: 'French Federation of Blockchain Professionals',
        link: 'https://www.federation-blockchain.fr/welcome.html',
      },
      '3': {
        label: 'Blockchain Innov',
        link: 'https://www.blockchaininnov.com/',
      },
      '4': {
        label: 'Blockchain HEC',
        link: 'https://blockchain-hec.com/',
      },
    },
  },
}

export default homepageConfig
