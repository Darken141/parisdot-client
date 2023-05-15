import localFonts from 'next/font/local'

export const AvenirNext = localFonts({
  src: [
    {
      path: './avenir-next/AvenirNext-Heavy-09.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './avenir-next/AvenirNext-DemiBold-03.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './avenir-next/AvenirNext-Regular-08.ttf',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const AcuminVariableConcept = localFonts({
  src: './acumin-variable-concept/Acumin-Variable-Concept.woff2',
  weight: '200',
})
