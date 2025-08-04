import React from 'react'
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ClientBlogPage from './client-page'

export const metadata = {
  title: 'Blog',
  description: 'Technical blog posts, tutorials, and insights from Amez - Full Stack Software Engineer.'
}

export default function BlogPage() {
  return <ClientBlogPage />
}