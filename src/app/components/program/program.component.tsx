'use client'

import React, { useState } from 'react'

import SpeakerDescription from '@/app/components/speaker-description/speaker-description.component'
import Container from '@/app/components/container/container.component'
import Accordion from '@/app/components//accordion/accordion.component'
import Image from 'next/image'

import middleLeftIlu from '../../../../public/assets/program-section/middle-left-ilu.png'

const Program = () => {
  const [program, setProgram] = useState([
    {
      id: 'day-1',
      title: 'Program for 19.07 - AUDITORIUM',
      showContent: false,
      items: [
        {
          id: 'item-1',
          time: '12:00 - 14:00',
          title: 'Registration - pillar room',
        },
        {
          id: 'item-2',
          time: '14:00 - 14:15',
          title: 'Opening the conference Hello from the organizers',
        },
        {
          id: 'item-3',
          time: '14:15 - 14:45',
          title: 'Blockchains That Evolve with Your Business',
          description: (
            <SpeakerDescription
              speakerName="Gautam Dhameja, Parity Technologies / Director of Solution Delivery"
              speakerBio={
                <div>
                  Gautam leads the Solution Delivery team at Parity, where he
                  focuses on designing decentralized solutions for the Polkadot
                  ecosystem. Before joining the team at Parity, he built Cloud
                  and IoT solutions at Microsoft. For the last several years,
                  Gautam has been working on blockchain solutions and their
                  integration with hyper-scale systems. He has a deep
                  understanding of the decentralized stack, cloud solutions
                  architecture, and distributed systems design. Gautam has also
                  co-authored a book on blockchain fundamentals,{' '}
                  <a href="https://link.springer.com/book/10.1007/978-1-4842-3444-0">
                    Beginning Blockchain
                  </a>
                </div>
              }
              talkDescription="Blockchains are hard to change. There are a lot of times when we need to fix bugs, change business logic and rules, and implement new features even for blockchain solutions. While the data and state on the blockchain must be immutable, the logic to store and process data should be easy to upgrade.
						When you build your blockchain with Substrate, you can upgrade it as per your needs, at any time. The talk give a deep dive of how Substrate-based blockchains improve efficiency and reduce effort in maintaining large scale decentralized solutions."
            />
          ),
          speaker: {
            name: 'Gautam Dhameja',
            image: {
              src: '/assets/speakers/gautam-dhameja.png',
              alt: 'Gautam Dhameja',
            },
            logo: {
              src: '/assets/partners/day-1/parity.png',
              alt: 'parity',
            },
          },
        },
        {
          id: 'item-4',
          time: '14:45 - 15:15',
          title: 'Mojo over Ego: decentralizing leadership',
          description: (
            <SpeakerDescription
              speakerName="Lisa Wocken, Talent DAO"
              speakerBio="Lisa Wocken is a founding member of talentDAO and an educator in the DAO ecosystem. She holds a PhD in Organizational Leadership, is an Adjunct Instructor at the University of Minnesota, and has 15 years experience in enterprise leadership development within large corporate contexts. Her research on DAO leadership and start-up, Bolster Leadership, focus on developing leaders for the more decentralized future."
            />
          ),
          speaker: {
            name: 'Lisa Wocken',
            image: {
              src: '/assets/speakers/lisa-wocken.png',
              alt: 'Lisa Wocken',
            },
            logo: {
              src: '/assets/partners/day-1/talent-dao.png',
              alt: 'Talent Dao',
            },
          },
        },
        {
          id: 'item-5',
          time: '15:15 - 15:45',
          title: 'What it means to be decentralized in Web3.0?',
          description: (
            <SpeakerDescription
              speakerName="Hoon Kim, Astar/ CTO"
              speakerBio=" Hoon is the CTO of Astar Network. He won the gold prize in the Korean Olympiad in Informatics National competition at age 16. He received the outstanding thesis award for his undergraduate thesis on using interoperable blockchains for corporate asset management. He first met Sota in 2019, who was creating a parachain for Polkadot network. Now, Hoon is working with Astar network to make Web3 the frontier for creative and innovative minds worldwide."
              talkDescription="We see a lot of people talk about governance and decentralization in the blockchain space, but why? This talk will cover the benefits of decentralization, compare and contrast with centralized models, what it takes to make a decentralized network, and how this could change the future of the internet."
            />
          ),
          speaker: {
            name: 'Hoon Kim',
            image: {
              src: '/assets/speakers/hoon-kim.png',
              alt: 'Hoon Kim',
            },
            logo: {
              src: '/assets/partners/day-1/astar.png',
              alt: 'Astar',
              width: 33,
              height: 26,
            },
          },
        },

        {
          id: 'item-6',
          time: '15:45 - 16:15',
          title: 'Break - pillar room',
        },
        {
          id: 'item-7',
          time: '16:15 - 16:40',
          title: 'Intro to Phala World - Gamifying the Meta-Soul',
          description: (
            <SpeakerDescription talkDescription="I will introduce PhalaWorld, the new gamification layer for the Phala community. In PhalaWorld, users are able to gain attributes by contributing to the Phala community, such as delegating, voting, tweeting." />
          ),
          speaker: {
            name: 'Zoe Meckbach',
            image: {
              src: '/assets/speakers/zoe-meckbach.png',
              alt: 'Zoe Meckbach',
            },
            logo: {
              src: '/assets/partners/day-1/phala-network.png',
              alt: 'Phala',
            },
          },
        },
        {
          id: 'item-8',
          time: '16:40 - 17:05',
          title: 'Moonbeam in an Interoperable Future',
          description: (
            <SpeakerDescription
              speakerName="Alberto, Developer Relations, Moonbeam"
              speakerBio="Mechanical Eng. with a Ph.D. in Internal Combustion Engines. You might ask yourself, What is this guy doing here? The old saying goes, Choose a job you love and you will never have to work a day in your life. I've been very passionate about blockchain since around 2013, so I decided to switch careers to join something that I believe is part of the future. Since then, I joined the Moonbeam project in June 2020 and have worked in Developer Relations."
              talkDescription="In this presentation, we'll go over the different interoperability protocols that developers can leverage on Moonbeam to interoperate within and outside the Polkadot Ecosystem. It will provide a high level overview of XCM, and how it can be combined with other interoperability protocols to expand Polkadot to other blockchain ecosystems."
            />
          ),
          speaker: {
            name: 'Alberto',
            image: {
              src: '/assets/speakers/alberto.png',
              alt: 'Alberto',
            },
            logo: {
              src: '/assets/partners/day-1/moonbeam.png',
              alt: 'Moonbeam',
            },
          },
        },
        {
          id: 'item-9',
          time: '17:05 - 17:30',
          title: 'Managed services for Web3 builders',
          description: (
            <SpeakerDescription
              speakerName="Matjaž Sobočan, CEO & Co-Founder of Authtrail"
              speakerBio="Matjaž is a seasoned professional with over 20 years of experience in various IT roles. Before stepping up to become Authtrail’s CEO, he held different senior positions at large enterprises, such as Fujitsu and Commvault, where he gained a deep understanding of the value of data. Matjaž leads the Authtrail venture backed by extensive experience in the IT sector and acute interest in distributed business models."
              talkDescription="The rise of Web3 era, where users are in control, will grow through builders of the Web3 world - developers. Polkadot is one of the key agents that foster Web3 evolution, but to speed up its adoption, we need to decrease Polkadot’s abstraction level and technical entry barrier.

					At Authtrail, we are building a unified gateway to Web3, a complete toolbox that developers can easily use to launch ideas to Web3 using their existing know-how. By compressing functionalities of the parachain verticals and offering managed services in the form of APIs and SDKs, Authtrail will become a go-to place for builders searching for faster development and seamless transition to Web3.
					"
            />
          ),
          speaker: {
            name: 'Matjaz Sobocan',
            image: {
              src: '/assets/speakers/matiaz-sobocan.png',
              alt: 'Matjaz Sobocan',
            },
            logo: {
              src: '/assets/partners/day-1/authtrail.png',
              alt: 'Authrail',
            },
          },
        },
        {
          id: 'item-10',
          time: '17:30 - 17:55',
          title:
            'Restricted delivery of NFT underlying assets to the sole NFT owner: a logion revolutionary capability for safe digital ownership',
          description: (
            <SpeakerDescription
              speakerName="Elie Auvray, logion/ Cofounder"
              speakerBio="Seasoned software entrepreneur (20+ years of international experience), I'm passionate about people, technology, privacy, open-source, and blockchain. I'm co-founder of logion, the public blockchain infrastructure for safe digital ownership, enabling people to protect the value they create and exchange in the web 3.0 world. logion is the first and only public blockchain where token data can be transformed into certified evidence and tokens are safeguarded by a decentralized network of international Legal Officers. All projects built with the logion infrastructure protect their digital asset holders."
              talkDescription="Digital Ownership is unsafe.
					Bitcoin value in lost wallets reaches $140B. Over 80% of NFTs on OpenSea are plagiarized works. Your token underlying asset can disappear overnight by being stored on centralized storage. You will have a certificate of property that is linked to no property at all.
					The same thing goes with the transaction documentation that proves the authenticity of your ownership and rights.
					You’ll still “own” the NFT (i.e. the string of numbers and letters that says it belongs to you), but the image itself or any other kind of underlying asset and ownership proofs could disappear.
					If the NFT is permanent, underlying right proofs and assets are … not.
					More importantly, as all NFT underlying digital assets are stored on public online storage, the entire world can have and use “your” underlying assets, which you paid for, by acquiring its NFT.
					And in a digital world, there is no difference between a file and its multiple copies.
					This situation jeopardizes the core value of the NFT you “own”.
					"
            />
          ),
          speaker: {
            name: 'Elie Auvray',
            image: {
              src: '/assets/speakers/elie-auvray.png',
              alt: 'Elie Auvray',
            },
            logo: {
              src: '/assets/partners/day-1/logion.png',
              alt: 'Logion',
              width: 25,
              height: 30,
            },
          },
        },
        {
          id: 'item-11',
          time: '17:55 - 18:20',
          title: 'Forex Markets and Stable Coins on Pendulum',
          description: (
            <SpeakerDescription
              speakerName="Dr. Torsten Stüber, Pendulum"
              speakerBio="Torsten Stüber has been a researcher in Computer Linguistics and Machine Learning and holds a PhD in Computer Science. He co-founded multiple tech startups and became interested in the exciting possibilities and challenges of blockchain technology. He joined SatoshiPay as CTO, a company that pioneered blockchain-based payment solutions. He is the CTO of Pendulum, a Polkadot parachain project that connects fiat networks to the Defi ecosystem."
              talkDescription="Pendulum is a parachain project whose vision is to connect fiat networks with the DeFi ecosystem. As a main hub for stable coins it will connect to other blockchains through the unified Spacewalk bridge that is trust-minimized and decentralized. Pendulum is the foundational layer for a rich ecosystem of forex markets and ground-breaking automated market makers optimized for fiat."
            />
          ),
          speaker: {
            name: 'Dr. Torsten Stüber',
            image: {
              src: '/assets/speakers/torn-stuber.png',
              alt: 'Dr. Torsten Stuber',
            },
            logo: {
              src: '/assets/partners/day-1/pendulum.png',
              alt: 'Pendulum',
            },
          },
        },
        {
          id: 'item-8',
          time: '18:30 - 18:35',
          title: 'Closing',
        },
      ],
    },
    {
      id: 'day-2',
      title: 'Program for 20.07 - AUDITORIUM',
      showContent: false,
      items: [
        {
          id: 'item-1',
          time: '10:30 - 11:00',
          title: 'Coffee, mingling - pillar room',
        },
        {
          id: 'item-2',
          time: '11:00 - 11:25',
          title: 'On-chain privacy in Polkadot and web3',
          description: (
            <SpeakerDescription
              talkDescription="The importance of privacy for the scalability and usability of web3"
              speakerName="Kenny Li, Manta network/Cofounder"
              speakerBio="Kenny Li is the cofounder of Manta Network, the privacy hub for web3. Kenny is a tech entrepreneur. He started his first company in the cloud computing space. He started in the blockchain space through bitcoin mining, has since built various projects, and contributed to thought leadership and content. He received his MBA from MIT Sloan in 2020, where he was the teaching assistant for the cryptocurrency and blockchain courses. In his free time, Kenny enjoys spending time with his dog and exercising."
            />
          ),
          speaker: {
            name: 'Kenny Li',
            image: {
              src: '/assets/speakers/kenny-li.png',
              alt: 'Kenny Li',
            },
            logo: {
              src: '/assets/partners/manta.png',
              alt: 'Manta network',
            },
          },
        },
        {
          id: 'item-3',
          time: '11:25 - 11:55',
          title: 'Light Clients for Unstoppable Apps',
          description: (
            <SpeakerDescription
              speakerName="Radha Dasari, Web3 Foundation, Technical education lead"
              speakerBio="Radha is the Technical Education Lead at the Web3 Foundation which nurtures technologies and applications in the fields of decentralized web software protocols. Prior to joining, he was a faculty at the Department of Computer Science at University of Vermont and has an MS and PhD in Computer Science from the University at Buffalo, The State University of New York. Radha is excited to put his skills to use for educating professionals and the general public about the vision of Web3 and its technology stack!"
              talkDescription="In the world of blockchains, the term “light client” is commonly associated with the software that can run on resource constrained environments like browsers and can interact with the blockchain through fully synchronized (RPC) nodes. It is well known that these light clients have to place their trust on third party RPC nodes for querying and/or transacting with the blockchain network. Is it possible to build light clients that can interact with the blockchain network, without forfeiting any of the blockchain security guarantees? What is the state of the art in the space of light clients? What is Substrate Connect? This talk explores these questions in depth and highlights what it takes to build unstoppable apps leveraging the Blockchain technology."
            />
          ),
          speaker: {
            name: 'Radha Dasari',
            image: {
              src: '/assets/speakers/radha-dasari.png',
              alt: 'Radha Dasari',
            },
            logo: {
              src: '/assets/partners/day-2/web3-foundation.png',
              alt: 'Web3 foundation',
            },
          },
        },
        {
          id: 'item-4',
          time: '11:55 - 12:20',
          title: "Composable's cross-chain virtual machine (XCVM)",
          description: (
            <SpeakerDescription
              speakerName="0xbrainjar | Founder & CEO of Composable Finance"
              speakerBio="Brainjar brings a deep understanding of the blockchain space and a comprehensive vision of cross-chain DeFi. He is focused on researching blockchain infrastructure and relevant trends to advise on Composable’s development and designing products that can best leverage the Composable tech stack. Brainjar writes about the R&D at Composable on Twitter and Medium."
              talkDescription="The XCVM is the primary technology that will finally allow for true composability across multiple ecosystems within DeFi, facilitated by its natively cross-chain smart contracts."
            />
          ),
          speaker: {
            name: '0xbrainjar',
            image: {
              src: '/assets/speakers/0x-brainjar.png',
              alt: '0xbrainjar',
            },
            logo: {
              src: '/assets/partners/day-2/composable.png',
              alt: 'Composable finance',
            },
          },
        },
        {
          id: 'item-5',
          time: '12:20 - 12:45',
          title: 'Real DeFi with real use cases.',
          description: (
            <SpeakerDescription
              speakerName="LucasVo, Cofounder/Centrifuge"
              speakerBio="Lucas Vogelsang is the CEO and Cofounder at Centrifuge, focusing on bringing Real World Assets to DeFi since the early days of Ethereum. Before diving into crypto in 2017 Lucas has been working at the intersection of tech and business since dropping out of University. He co-founded the Swiss e-commerce startup DeinDeal as it’s CTO. After it’s successful sale, he helped the German startup KaufDA with their international expansion. Lucas spent 6 years in Silicon Valley where he was working at early stage startups including Taulia where he met his Centrifuge cofounders."
              talkDescription="How do we get to mass adoption of DeFi: A look at what's missing for DeFi to grow beyond its current use case for crypto native assets and become the banking backend for all asset classes."
            />
          ),
          speaker: {
            name: 'LucasVo',
            image: {
              src: '/assets/speakers/lucas-vo.png',
              alt: 'LucasVo',
            },
            logo: {
              src: '/assets/partners/day-2/centrifuge.png',
              alt: 'Centriguge',
            },
          },
        },
        {
          id: 'item-6',
          time: '12:45 - 13:10',
          title: 'sTAL, the Smart coin for Smart people',
          description: (
            <SpeakerDescription
              speakerName="Alain Parize, Talsafe/Stablecoin designer"
              talkDescription="A new kind of trustable stablecoin for the Polkadot ecosystem and
					beyond"
              speakerBio="Experienced entrepreneur with a demonstrated history of founding,
					funding, managing and coaching high growth companies and innovative
					teams. Practicing in various sectors with an emphasis on financial
					technology companies and customer relationship strategy.
					"
            />
          ),
          speaker: {
            name: 'Alain Parize',
            image: {
              src: '/assets/speakers/alain-parize.png',
              alt: 'Alain Parize',
            },
            logo: {
              src: '/assets/partners/day-2/tal.png',
              alt: 'Tal',
              width: 40,
            },
          },
        },
        {
          id: 'item-7',
          time: '13:10 - 14:30',
          title: 'Lunch Break (outside)',
        },
        {
          id: 'item-8',
          time: '14:30 - 14:55',
          title:
            'The biggest problems with metaverses today and how to solve them!',
          description: (
            <SpeakerDescription
              speakerName="Bruno Skvorc"
              speakerBio={
                <div>
                  Bruno is the founder of{' '}
                  <a href="https://www.rmrk.app/">RMRK.app</a>, the world&aposs
                  most advanced NFT protocol. After a long career in web2
                  developing web applications and interactive media, he moved
                  into web3 with the advent of Ethereum in 2015. Since then,
                  Bruno has run a fiat-to-crypto on-ramp, has been developing
                  and auditing smart contracts, has been technically educating
                  developers on conferences and online in video and written
                  form, and worked for <a href="https://status.im/">Status</a>{' '}
                  on the Ethereum 2.0 project as well as Web3 Foundation on the{' '}
                  <a href="https://polkadot.network/">Polkadot</a> and{' '}
                  <a href="https://kusama.network/">Kusama</a> projects. Since
                  2020 he&aposs been working on RMRK full time. In what little
                  free time he has, he enjoys gaming board and PC/VR, nature,
                  and living vicariously through his daughter
                </div>
              }
              talkDescription="Metaverses have many problems. Critical, dealbreaking, web2 problems. Most people don't care. I will tell you why they should, and will also outline bulletproof solutions to these problems."
            />
          ),
          speaker: {
            name: 'Bruno Skvorc',
            image: {
              src: '/assets/speakers/bruno-skvorc.png',
              alt: 'Bruno Skvorc',
            },
            logo: {
              src: '/assets/partners/day-2/rmrk.png',
              alt: 'RMRK',
            },
          },
        },
        {
          id: 'item-9',
          time: '14:55 - 16:00',
          title:
            'Panel + QA: Why is it important to rely on independent validators?',
          description: (
            <SpeakerDescription
              speakerName="Participants"
              speakerBio="Will Pankiewicz (Parity), bLd Nodes / Jimmy Tudeski / Skynode (Validator Alliance), Ioannis (Stake Baby) + guests"
            />
          ),
          speaker: {
            name: 'Validator Alliance',
            image: {
              src: '/assets/speakers/validator-v.png',
              alt: 'Validator Alliance',
            },
            logo: {
              src: '/assets/partners/day-2/validator-alliance.png',
              alt: 'Validator Alliance',
            },
          },
        },
        {
          id: 'item-10',
          time: '16:00 - 16:30',
          title: 'Coffee break',
        },
        {
          id: 'item-11',
          time: '16:30 - 17:00',
          title: 'Crypto Regulation: Current Issues and Possible Solutions',
          description: (
            <SpeakerDescription
              speakerName="Adam Berker, Managing partner at Berker Crypto Law and Senior Legal Counsel at Mercuryo"
              talkDescription="Over the past year, the world has seen rapid growth in the cryptocurrency market. The total volume of their capitalization in December 2021 reached 2.3 trillion US dollars, corresponding to approximately 1% of global financial assets.
					Today the market continues to develop rapidly, acquiring new forms and solving new problems. The crypto community, in turn, is also gaining momentum and proliferating. What's next? Crypto regulation is just around the corner. The regulator is in a hurry to form a regulatory framework for the cryptocurrency market before it harms the financial system. With growing regulatory pressure on crypto exchanges, DeFi, stablecoins and even NFT projects, crypto companies must figure out how to adapt to changing circumstances."
              speakerBio="A qualified international lawyer with skills in cryptocurrency, anti-money laundering, blockchain regulations, corporate, trade, tax and intellectual property law areas. Has extensive experience in providing full legal support to the holding company with subsidiaries in 4 jurisdictions for conducting its activity in the EU, UK, US, Latin America, Africa and Asia."
            />
          ),
          speaker: {
            name: 'Adam Berker',
            image: {
              src: '/assets/speakers/adam-berker.png',
              alt: 'Adam Berker',
            },
            logo: {
              src: '/assets/partners/day-2/mercurio.png',
              alt: 'Mercurio',
            },
          },
        },
        {
          id: 'item-12',
          time: '17:00 - 17:25',
          title:
            'The Kusamaverse - Momentum: an open source, decentralized, user owned metaverse for the Dotsama ecosystem',
          description: (
            <SpeakerDescription
              speakerName="Nic Rutherford, Momentum.XYZ"
              speakerBio="Starting his development journey on a BBC Microcomputer many moons ago, Nic is a UK based game developer who is incredibly passionate about everything to do with the Metaverse and how it will change global collaboration. Spending many years working behind the scenes in Web2, he now finds himself on the Web3 adventure which is bringing fresh life to a stagnant internet.  Nic was the first developer to join Momentum, where he focuses on Unity development"
              talkDescription="The Kusamaverse is live! A real-time persistent 3D home for the Kusama ecosystem in which you stake, nominate, vote and more. A new way to navigate, connect, contribute to and benefit from the ecosystem. Gather and engage into on and off-chain activities, tailored to collective value creation, build your own social network economy. We give a live demo of Momentum - Kusamaverse and go into the tech and vision behind the product. We share our roadmap and welcome your input in an interactive session."
            />
          ),
          speaker: {
            name: 'Nic Rutherford',
            image: {
              src: '/assets/speakers/nic-rutherford.png',
              alt: 'Nic Rutherford',
            },
            logo: {
              src: '/assets/partners/day-2/momentum.png',
              alt: 'Momentum',
              width: '60',
              height: '30',
            },
          },
        },
        {
          id: 'item-13',
          time: '17:25 - 17:50',
          title: 'Polkadot Alliance, what is it?',
          description: (
            <SpeakerDescription
              speakerName="Toma Sadova"
              speakerBio={
                <div>
                  I`m Toma - Market Growth Lead at Supercolony, Product Owner of{' '}
                  <a href="https://openbrush.io/">OpenBrush</a>. I started my
                  career when I was 14. Since then, I have gained a lot of
                  experience in IT technologies, management, leadership and
                  crypto. I switched 4 career paths and figured out that
                  blockchain/crypto is my calling! I`m leading more than 4
                  infrastructure tools for smart contracts, one of the biggest
                  events in Polkadot, and audits on ink!.
                </div>
              }
              talkDescription="Supercolony is going to accelerate the most active key players in the ecosystem and create the next breakthrough, which will speed up the ecosystem growth - Polkadot Alliance. The goal of Polkadot Alliance is to build and give a vision for the whole ecosystem, push processes and free up the right dots. We will talk about it more... in the speech"
            />
          ),
          speaker: {
            name: 'Toma Sadova',
            image: {
              src: '/assets/speakers/toma-sadova.png',
              alt: 'Toma Sadova',
            },
            logo: {
              src: '/assets/partners/day-2/supercolony.png',
              alt: 'Supercolony',
            },
          },
        },
        {
          id: 'item-14',
          time: '17:50 - 18:15',
          title: 'Staying secure in Web 3.0',
          description: (
            <SpeakerDescription
              speakerName="Yevheniia Broshevan"
              talkDescription="Cybersecurity is one of the major risks for Web 3.0 projects. That’s why project owners should be proactive on this matter. The talk will cover basic steps for founders to do to be able to minimize risks of being hacked: security-first mindset, internal security, external audits, bug bounty and insurance. It includes tips on how to integrate security into a product at its early stage and how to develop the security of a project as a whole (web, mobile, dApps, infrastructure, operations, protocol). As a result, cybersecurity should be treated as an attractive investment rather than business costs with a clear understanding of how to be ready for an external security audit."
              speakerBio="Yevheniia Broshevan is the co-founder and CBDO at Hacken, a leading Web 3.0 cybersecurity company. Yevheniia is responsible for establishing partnership relationships with industry players and coordinating the work with clients. She is a Certified Ethical Hacker with >10 years of expertise in cybersecurity and a recognized female tech leader."
            />
          ),
          speaker: {
            name: 'Yev',
            image: {
              src: '/assets/speakers/yev.png',
              alt: 'Yev',
            },
            logo: {
              src: '/assets/partners/day-2/hacken.png',
              alt: 'Hacken',
            },
          },
        },
        {
          id: 'item-10',
          time: '18:30 - 18:35',
          title: 'Closing',
        },
      ],
    },
    {
      id: 'day-3',
      title: 'Program for 21.07 - AUDITORIUM',
      showContent: false,
      items: [
        {
          id: 'item-1',
          time: '10:30 - 11:00',
          title: 'Coffee, mingling - pillar room',
        },
        {
          id: 'item-2',
          time: '11:00 - 11:25',
          title: 'The State of Music NFTs in Dotsama',
          description: (
            <SpeakerDescription
              speakerName="Antoine Estienne, Independant"
              speakerBio="Ex Consensys and Moonbeam, Antoine is now a consultant focused on Ethereum and Dotsama and runs multiple NFT projects on EVM and RMRK"
              talkDescription="Dotsama is an exciting ecosystem that brings many new features to create and use NFTs. Let's look at what buidlers have been making and the different platforms and standards that will shape the future of Music NFTs on Dotsama."
            />
          ),
          speaker: {
            name: 'Antoine Estienne',
            image: {
              src: '/assets/speakers/antoine-estienne.png',
              alt: 'Antoine Estienne',
            },
            logo: {
              src: '/assets/partners/day-3/independent.png',
              alt: 'Independant',
            },
          },
        },
        {
          id: 'item-3',
          time: '11:25 - 11:55',
          title:
            'Polkadot & Ethereum: opening up a whole new space for innovation where NFTs will grow up',
          description: (
            <SpeakerDescription
              talkDescription="While Ethereum is in the midst of its trascendental transition, already experts envisage that the upgrades won't be enough to achieve an ideal decentralized Web. Polkadot's Blockchain was created to fill the gaps by deploying the necessary 3rd generation functionalities while collaborating with different blockchains making the decentralized Web3 a reality and give life to NFTs"
              speakerName="Irina Karagyaur"
              speakerBio="Irina Karagyaur is the Head of Ecosystem Growth and Business Development at Unique Network, where she leads the business ecosystem growth activities for the organisation. She focuses on establishing strategic partnerships and ecosystem building to enable bridging the off-chain world with the Open Metaverse. She is the Head Ambassador for Western Europe of the Polkadot network, and also London’s Regional Co-Chair to FIBREE (Foundation for International Blockchain and Real Estate Expertise)."
            />
          ),
          speaker: {
            name: 'Irina Karagyaur',
            image: {
              src: '/assets/speakers/irina-karagyaur.png',
              alt: 'Irina Karagyaur',
            },
            logo: {
              src: '/assets/partners/unique.png',
              alt: 'Unique',
            },
          },
        },
        {
          id: 'item-4',
          time: '11:55 - 12:20',
          title: "Subsquid: indexing for Web3's mass adoption",
          description: (
            <SpeakerDescription
              speakerName="Massimo, Developer Advocate at Subsquid"
              speakerBio="MsC in Information Engineering, 8+ years experience working as Software Engineer, Data Engineer, Product Manager and now, Developer Advocate. Crypto fan since 2018, working on blockchain for last 6 months"
              talkDescription="Discussing the necessity of on-chain data indexing and indexing middleware to provide quality of service the great public is used to"
            />
          ),
          speaker: {
            name: 'Massimo',
            image: {
              src: '/assets/speakers/massimo-luraschi.png',
              alt: 'Massimo',
            },
            logo: {
              src: '/assets/partners/day-3/subsquid.png',
              alt: 'Subsquid',
            },
          },
        },
        {
          id: 'item-5',
          time: '12:20 - 13:05',
          title:
            'Panel 2 + QA: Outside the Polkadot box - how to reach massadoption',
          speaker: {
            name: 'Zoé Meckbach',
            image: {
              src: '/assets/speakers/zoe-meckbach.png',
              alt: 'Zoe Meckbech',
            },
            logo: {
              src: '/assets/partners/day-1/logo-polkadot.png',
              alt: 'Polkadot',
            },
          },
        },
        {
          id: 'item-6',
          time: '13:05 - 13:30',
          title: 'IMP Metaverse Protocol - base of the real metaverse',
          description: (
            <SpeakerDescription
              speakerName="Markian Ivanichok"
              speakerBio="I started my engineering careerStats when I was 16. Since then I have dived deeply in both software and hardware. Founded and led a couple of startups.
					A year and a half ago I founded venture studio called Supercolony. We enabled Wasm smart contracts on Polkadot and co-founded Asylum - a metaverse. With IMP Metaverse protocol we are looking to the job we did with Openbrush/PSP22 but to a more broader metaverse space."
              talkDescription="Most metaverse projects that we currently see on the market are rather metaverse application/space. 
					Meanwhile a key aspect of metaverse is connectivity (interoperability) between those spaces. Similarly to internet procol like TCP/IP, IMP protocol sets the foundation for metaverse to work."
            />
          ),
          speaker: {
            name: 'Markian Ivanichok',
            image: {
              src: '/assets/speakers/markian-ivanichok.png',
              alt: 'Markian Ivanichok',
            },
            logo: {
              src: '/assets/partners/day-2/supercolony.png',
              alt: 'Supercolony',
            },
          },
        },
        {
          id: 'item-7',
          time: '13:30 - 14:30',
          title: 'Lunch break (outside)',
        },
        {
          id: 'item-8',
          time: '14:30 - 14:55',
          title:
            'Unified Liquidity Standard for Staking and Crowdloan Derivatives',
          description: (
            <SpeakerDescription
              speakerName="Terry Lam, Co-founder of NUTS Finance"
              speakerBio="Co-founder of NUTS Finance"
              talkDescription="As parachains continue to go live on Polkadot, we are seeing an increasing number of staking and crowdloan derivatives. The primary objective of these derivative solutions is to free up liquidity and increase asset usability. However this also creates a variety of liquidity formats which ultimately causes liquidity silos and low capital efficiency for the network as a whole.   
 Tapio Protocol solves this problem by introducing an unified liquidity standard to standardize different formats of staking and crowdloan derivatives without sacrificing the underlying staking yield and crowdloan rewards. tDOT is the first synthetic asset solution that effectively mitigates liquidity fragmentation and serves a common good function to the Polkadot ecosystem.
					"
            />
          ),
          speaker: {
            name: 'Terry',
            image: {
              src: '/assets/speakers/terry-lam.png',
              alt: 'Terry',
            },
            logo: {
              src: '/assets/partners/day-3/tapio-protocol.png',
              alt: 'Nuts',
            },
          },
        },
        {
          id: 'item-9',
          time: '14:55 - 16:00',
          title: 'Panel 3 + QA: Scaling Polkadot education',
          speaker: {
            name: 'Radha Dasari',
            image: {
              src: '/assets/speakers/radha-dasari.png',
              alt: 'Radha Dasari',
            },
            logo: {
              src: '/assets/partners/day-3/web3-foundation.png',
              alt: 'Web3 foundation',
            },
          },
        },
        {
          id: 'item-10',
          time: '16:00 - 16:30',
          title: 'Coffee break - pillar room',
        },
        {
          id: 'item-11',
          time: '16:30 - 17:00',
          title: 'Carbon credits decoded',
          description: (
            <SpeakerDescription
              talkDescription="Carbon Credits Decoded
At Polkadot Decoded, Bitgreen announced a partnership with Sequester to enable parachains to convert fees into carbon credits. In this talk, we'll go more in depth on what carbon credits are, the real impact they represent, and how projects can use carbon credits to attract users and build community."
              speakerName="Gilad Goren"
              speakerBio="Gilad is Cofounder of Bitgreen and heads Partnerships. Gilad previously founded two sustainable enterprise startups, Raleigh & Drake and Only Six Degrees. He holds an Executive MSc Social Business and Entrepreneurship from the London School of Economics.
					"
            />
          ),
          speaker: {
            name: 'Gilad Goren',
            image: {
              src: '/assets/speakers/gilad-goren.png',
              alt: 'Gilad Goren',
            },
            logo: {
              src: '/assets/partners/day-3/bitgreen_white.38aed596.png',
              alt: 'Bitgreen',
            },
          },
        },
        {
          id: 'item-12',
          time: '17:00 - 17:25',
          title: 'Standardizing cross-chain communication',
          description: (
            <SpeakerDescription
              speakerName="Jacob Kowalewski – Chief Strategy Officer @ t3rn"
              speakerBio="Jacob has worked full-time in the blockchain space for six years, starting at Lisk, before joining t3rn as the first team member and its Chief Strategy Officer. "
              talkDescription="The presentation will primarily cover the current state of cross-chain development, explaining trust-free bridging and framing the problem (with examples of hacks); we will then look at the state of the industry, it's search for the next narrative and detail why we believe cross-chain is the next driver for the next blockchain bull cycle. The talk will then provide brief context to what XCM is, before diving into XBI, the XCM based-standard developed by t3rn that makes XCM more seamless to adopt while broadening its utility."
            />
          ),
          speaker: {
            name: 'Jacob Kowalewski',
            image: {
              src: '/assets/speakers/jacob-kowalewski.png',
              alt: 'Jacob Kowalewski',
            },
            logo: {
              src: '/assets/partners/day-3/t3rn.png',
              alt: 'T3RN',
              width: 40,
            },
          },
        },
        {
          id: 'item-13',
          time: '17:25 - 17:50',
          title: 'How to (not) build a parachain',
          speaker: {
            name: 'Jakub Greguš',
            image: {
              src: '/assets/speakers/jakub-gregus.png',
              alt: 'Jakub Greguš',
            },
            logo: {
              src: '/assets/partners/day-3/hydra-dx.png',
              alt: 'HydraDX',
            },
          },
        },
        {
          id: 'item-14',
          time: '18:15 - 18:30',
          title: `Thank you from the organizers - "Salle du Haut"`,
        },
        {
          id: 'item-14',
          time: '18:30 - 20:00',
          title: `Closing cocktail - "Salle du Haut"`,
        },
      ],
    },
  ])

  const openEventDayProgram = (
    showContent: boolean,
    i: number
    // dayID: string
  ) => {
    setProgram([
      ...program.map((e, id) => {
        if (i === id) {
          return {
            ...e,
            showContent: showContent,
          }
        } else {
          return {
            ...e,
            showContent: e.showContent,
          }
        }
      }),
    ])
  }

  return (
    <section id="conference" className="relative mb-[16.8rem]">
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        <Image
          src={middleLeftIlu}
          alt="Program background"
          className="object-contain"
        />
      </div>

      <Container>
        <h2 className="text-center">PROGRAM</h2>

        <div>
          {program.map((day, idx) => (
            <Accordion
              showContent={program[idx].showContent}
              openEventDayProgram={openEventDayProgram}
              key={idx}
              idx={idx}
              //TODO: fix
              //@ts-ignore
              item={day}
              dayID={day.id}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Program
