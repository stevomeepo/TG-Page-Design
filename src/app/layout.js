import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top Greener Store - New & On Sale',
  description: 'Discover the latest products and great deals at Top Greener Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} min-h-screen bg-white`}>{children}</body>
    </html>
  )
}
