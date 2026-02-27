import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artist Growth Hub',
  description: 'All-in-one platform for independent artists: analytics, promotion, tours, smart links.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    &lt;html lang=&quot;en&quot;&gt;
      &lt;body&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  )
}