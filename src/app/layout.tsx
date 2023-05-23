import { Metadata } from 'next'

import '@/app/globals.css'
import Header from '@/components/header/header.component'
import Footer from '@/components/footer/footer.component'

import { AvenirNext } from '../fonts/fonts'

export const metadata: Metadata = {
  title: 'ParisDot Conf W-shops',
  description:
    '3 days of conference and workshops, organized by leading Polkadot projects for the broader crypto family. 6/19 - 21 in Paris, France',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
      type: 'image/png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
      type: 'image/png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
      type: 'image/png',
    },
  ],
  manifest: '/favicon/site.webmanifest',
  themeColor: '#fff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${AvenirNext.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
