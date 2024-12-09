import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Component Library',
  description: 'A showcase of our custom React components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'development' && (
          <script
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`}
          />
        )}
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}