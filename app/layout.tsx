import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SheetShow - Chrome Extension for Google Sheets',
  description: 'Transform your Google Sheets experience with SheetShow - the ultimate Chrome extension for enhanced productivity and visualization.',
  keywords: 'Chrome extension, Google Sheets, productivity, spreadsheet, data visualization',
  authors: [{ name: 'SheetShow Team' }],
  openGraph: {
    title: 'SheetShow - Chrome Extension for Google Sheets',
    description: 'Transform your Google Sheets experience with SheetShow',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 