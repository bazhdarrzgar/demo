import React from 'react'
import { Mail, Phone, MapPin, MessageSquare, Github, Linkedin, Twitter, Clock, CheckCircle, Send, User, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import ClientContactPage from './client-page'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Amez - Full Stack Software Engineer. Available for freelance projects and consulting.'
}

export default function ContactPage() {
  return <ClientContactPage />
}