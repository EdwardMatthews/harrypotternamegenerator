import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { sharedMetadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = sharedMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1a0f2e] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
