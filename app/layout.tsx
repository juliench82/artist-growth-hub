import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artist Growth Hub',
  description: 'All-in-one platform for independent artists: analytics, promotion, tours, smart links.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
