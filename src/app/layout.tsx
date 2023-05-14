import '@/app/globals.css'
import Header from '@/app/components/header/header.component'
import Footer from '@/app/components/footer/footer.component'

export const metadata = {
  title: 'ParisDot Conf W-shops',
  description:
    '3 days of conference and workshops, organized by leading Polkadot projects for the broader crypto family. 6/19 - 21 in Paris, France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
