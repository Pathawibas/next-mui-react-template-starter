import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import CssBaseline from '@mui/material/CssBaseline'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEXT APP MUI',
  description: 'DESCRIPTION',
  icons: [{ url: '/images/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/images/favicon.ico" sizes="any" /> */}
      </head>
      <body className={inter.className}>
        <Providers>
          <CssBaseline enableColorScheme />
          {children}
        </Providers>
      </body>
    </html>
  )
}
