import { ImageProps } from 'next/image'
import TwitterIcon from '../../public/assets/icons/twitter_header_icon.svg'
import DiscordIcon from '../../public/assets/icons/discord_header_icon.svg'

export interface ISocial {
  icon: ImageProps
  link: string
  alt: string
  target: string
  rel: string
}

export interface IProps {
  socials: {
    discord: ISocial
    twitter: ISocial
  }
}

const contactConfig: IProps = {
  socials: {
    discord: {
      icon: DiscordIcon,
      link: 'https://discord.parisdotcomm.org/',
      alt: 'Discord',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    twitter: {
      icon: TwitterIcon,
      link: 'https://twitter.com/parisdotcomm',
      alt: 'Twitter',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
}

export default contactConfig
