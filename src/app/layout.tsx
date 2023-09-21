import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
