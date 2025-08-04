import React from 'react'
import { MapPin, Mail, Phone, Heart, Code, Globe, Coffee } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import ClientAboutPage from './client-page'

export const metadata = {
  title: 'About Me',
  description: 'Learn about Amez - Full Stack Software Engineer with 5+ years of experience in modern web development.'
}

export default function AboutPage() {
  return <ClientAboutPage />
}