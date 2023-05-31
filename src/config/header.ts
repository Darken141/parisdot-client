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
    children: 'Apply to speak',
    // disabled: true,
    href: 'https://forms.gle/d9bWi8y72Lh9nbPXA',
    target: '_blank',
  },
  socials: [contactConfig.socials.discord, contactConfig.socials.twitter],
}

export default headerConfig
