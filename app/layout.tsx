import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/lib/providers'
import '@/styles/globals.css'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })




export const metadata: Metadata = {
  title: {
    template: '%s | Jayson Tian',
    default: 'Jayson Tian',
  },
  description: 'Software & Interface Engineer',
  icons: {icon: '/icon.ico'},
  openGraph: {
    title: "Jayson Tian\'s Website",
    url: 'https://jaysontian.com',
    siteName: 'Jayson Tian',
    images: [
      {
        url: 'https://i.imgur.com/QZOGqja.png', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className='my-12'></div>
        <Providers>
          <Header />
          {children}
        </Providers>
        <footer className='w-full flex items-start justify-between gap-6 mt-16 px-6 sm:px-12 pt-6 pb-12 text-sm text-prim opacity-50'>
          <p>Designed by Jayson Tian</p>
          <p className='text-right'>Last updated October 2024</p>
        </footer>
      </body>
    </html>
  )
}
