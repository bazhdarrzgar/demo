'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, MessageSquare, Github, Linkedin, Twitter,
  Clock, CheckCircle, Send, User, FileText
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function ClientContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          projectType: ''
        })
        setSubmitSuccess(false)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amez@example.com",
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster"
    }
  ]

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/amez" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/in/amez" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/amez" }
  ]

  const projectTypes = [
    "Web Application",
    "Mobile App", 
    "API Development",
    "Database Design",
    "Consulting",
    "Code Review",
    "Other"
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb250YWN0fGVufDB8fHx8MTc1NDMwMTEyNHww&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let's Work Together</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl">Send me a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-0 pb-0">
                    {submitSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thanks for reaching out! I'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="mt-2"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="mt-2"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="john.doe@example.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="projectType">Project Type</Label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            required
                            className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="Project inquiry"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="mt-2"
                            placeholder="Tell me about your project, timeline, and any specific requirements..."
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                          size="lg"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 mr-2"
                              >
                                <MessageSquare className="w-4 h-4" />
                              </motion.div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0 space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          <p className="text-sm font-mono">{info.value}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-xl">Connect Online</CardTitle>
                    <CardDescription>
                      Follow me on social media for updates and insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid grid-cols-3 gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                          className="flex flex-col items-center p-4 border rounded-lg hover:bg-accent transition-colors group"
                        >
                          <social.icon className="w-6 h-6 mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-xs font-medium">{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-xl">Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Status</span>
                        <Badge variant="default" className="bg-green-500">
                          Available
                        </Badge>
                      </div>
                      <Separator />
                      <div className="text-sm text-muted-foreground">
                        Currently accepting new projects. Typical project start time is 1-2 weeks.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}