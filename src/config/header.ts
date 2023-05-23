import contactConfig, { ISocial } from './contact'
import { LinkProps } from 'next/link'
import { IButtonProps } from '@/components/button/button.component'

export interface IProps {
  navItems: LinkProps[]
  cta: IButtonProps
  socials: ISocial[]
}

const headerConfig = {
  navItems: [
    {
      children: 'About',
      href: '/#about',
      scroll: false,
    },
    {
      children: 'Archives',
      href: '/archives',
      scroll: true,
    },
    {
      children: 'Conference',
      href: '/#conference',
      scroll: false,
    },
    {
      children: 'Program',
      href: '/#program',
      scroll: false,
    },
    {
      children: 'Venue',
      href: '/#venue',
      scroll: false,
    },
    {
      children: 'Partners',
      href: '/#partners',
      scroll: false,
    },
  ],
  cta: {
    children: 'Coming soon',
    disabled: true,
  },
  socials: [contactConfig.socials.discord, contactConfig.socials.twitter],
}

export default headerConfig
