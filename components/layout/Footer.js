'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-background border-t border-border mt-auto"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="text-center md:text-left mb-4 md:mb-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground">
              © 2024 Amez. Built with Next.js and Tailwind CSS.
            </p>
          </motion.div>
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm">Privacy Policy</Button>
            </motion.div>
            <Separator orientation="vertical" className="h-4" />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm">Terms of Service</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}