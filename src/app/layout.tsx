import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {cn} from "@/utils/cn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-full" )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
