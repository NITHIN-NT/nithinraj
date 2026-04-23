import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PreloaderWrapper } from '@/components/preloader'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Nithin Raj NT | Developer',
  description: 'I build complete digital products from idea to deployment. Developer focused on Python, Django, React, and Next.js.',
  keywords: ['developer', 'portfolio', 'python', 'django', 'react', 'nextjs', 'web development'],
  authors: [{ name: 'Nithin Raj NT' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-white text-black">
        <PreloaderWrapper>
          {children}
        </PreloaderWrapper>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
