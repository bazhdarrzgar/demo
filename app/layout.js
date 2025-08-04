import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: {
    default: 'Amez - Full Stack Software Engineer',
    template: '%s | Amez Portfolio'
  },
  description: 'Professional portfolio of Amez - Full Stack Software Engineer specializing in React, Node.js, Python, and modern web technologies.',
  keywords: ['software engineer', 'full stack developer', 'react', 'nodejs', 'python', 'web development'],
  authors: [{ name: 'Amez' }],
  creator: 'Amez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amez.dev',
    title: 'Amez - Full Stack Software Engineer',
    description: 'Professional portfolio showcasing modern web development expertise',
    siteName: 'Amez Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amez - Full Stack Software Engineer',
    description: 'Professional portfolio showcasing modern web development expertise',
    creator: '@amez',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background" suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}