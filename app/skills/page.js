import React from 'react'
import { Code, Database, Server, Smartphone, Globe, Cloud, Zap, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import ClientSkillsPage from './client-page'

export const metadata = {
  title: 'Skills',
  description: 'Technical skills and expertise of Amez - Full Stack Software Engineer with proficiency in modern technologies.'
}

export default function SkillsPage() {
  return <ClientSkillsPage />
}