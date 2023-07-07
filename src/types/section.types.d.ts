import { LinkProps } from 'next/link'
import { IButtonProps } from '@/components/button/button.component'
import { ImageProps } from 'next/image'

export interface ICTAProps extends IButtonProps {}
export interface IAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string | React.ReactNode
}
export interface ILinkProps extends LinkProps {
  children: string | React.ReactNode
}

export interface IHeroSectionProps {
  place?: string
  date?: string
  heading?: string
  description?: string
  video?: {
    src: string
    alt: string
  }
  program?: ILinkProps
  primaryCta?: any
  secondaryCta?: any
  partners?: IPartnerProps[]
}

export interface IAboutProps {
  heading: string
  description: string
  primaryCta: any
  secondaryCta: ILinkProps
  asset: ImageProps
}

export interface IStage {
  name: string
  description: string
  list: string[]
  image: ImageProps
}

export interface IConferenceSectionProps {
  heading: string
  stages: IStage[]
}

export interface IProgramSectionProps {
  heading: string
  subHeading: string
  items: {
    image: ImageProps
    dateString: string
    primaryCta: ILinkProps
    description: string
    description2?: string
    description3?: string
  }[]
}

export interface IVenueSectionProps {
  asset: ImageProps
  heading: string
  description: string
  primaryCta: IAnchorProps
}

export interface IPartnerProps extends IAnchorProps {
  asset: ImageProps
}

export interface IPartnersSectionProps {
  heading: string
  items: IPartnerProps[]
}
