'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { 
  User, Code, Target, Briefcase, Github, FileText, Award, BookOpen, Quote, MessageSquare,
  Sun, Moon, Menu, X, Terminal, Brackets, Code2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    { id: '/', label: 'Home', icon: User },
    { id: '/about', label: 'About', icon: User },
    { id: '/skills', label: 'Skills', icon: Code },
    { id: '/services', label: 'Services', icon: Target },
    { id: '/projects', label: 'Projects', icon: Briefcase },
    { id: '/repositories', label: 'Repositories', icon: Github },
    { id: '/blog', label: 'Blog', icon: FileText },
    { id: '/experience', label: 'Experience', icon: Award },
    { id: '/education', label: 'Education', icon: BookOpen },
    { id: '/testimonials', label: 'Testimonials', icon: Quote },
    { id: '/contact', label: 'Contact', icon: MessageSquare }
  ]

  const handleNavigation = (path) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Developer-Focused Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/')}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg overflow-hidden"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Code brackets background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <Brackets className="w-6 h-6 absolute top-1 left-1" />
                  <Terminal className="w-4 h-4 absolute bottom-1 right-1" />
                </div>
                {/* Main logo letter with code styling */}
                <span className="relative z-10 font-mono">{'<A/>'}</span>
              </motion.div>
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent flex items-center">
                  <span className="font-mono">&lt;</span>
                  <span>Amez</span>
                  <span className="font-mono">/&gt;</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono opacity-60">
                  developer.build()
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 6).map((item) => (
              <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={pathname === item.id ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.id)}
                  className="flex items-center space-x-2 text-sm transition-all duration-300"
                  size="sm"
                >
                  <item.icon className="w-3 h-3" />
                  <span className="hidden xl:inline">{item.label}</span>
                </Button>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-2"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="grid grid-cols-2 gap-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Button
                      variant={pathname === item.id ? "default" : "ghost"}
                      onClick={() => handleNavigation(item.id)}
                      className="flex items-center justify-start space-x-2 text-sm w-full transition-all duration-300"
                      size="sm"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}