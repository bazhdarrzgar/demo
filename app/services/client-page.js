'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, Smartphone, Database, Cloud, Zap, Shield, 
  ArrowRight, CheckCircle, Star, Clock, Users 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ClientServicesPage() {
  const services = [
    {
      id: 'web-development',
      title: "Web Application Development",
      description: "Full-stack web applications using modern frameworks like React, Next.js, and Node.js",
      icon: Code,
      color: "text-blue-500",
      price: "From $5,000",
      duration: "4-8 weeks",
      features: [
        "Responsive Design",
        "Modern Tech Stack",
        "SEO Optimized",
        "Performance Optimized",
        "Testing & QA"
      ],
      demoLink: "https://demo-webapp.amez.dev",
      popular: true
    },
    {
      id: 'mobile-development',
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      color: "text-green-500",
      price: "From $8,000",
      duration: "6-12 weeks",
      features: [
        "Cross-platform",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
        "Offline Support"
      ],
      demoLink: "https://demo-mobile.amez.dev"
    },
    {
      id: 'api-development',
      title: "API Development",
      description: "RESTful APIs and GraphQL services with comprehensive documentation",
      icon: Database,
      color: "text-purple-500",
      price: "From $3,000",
      duration: "2-4 weeks",
      features: [
        "REST & GraphQL",
        "Auto Documentation",
        "Authentication",
        "Rate Limiting",
        "Testing Suite"
      ],
      demoLink: "https://api-docs.amez.dev"
    },
    {
      id: 'cloud-deployment',
      title: "Cloud Deployment & DevOps",
      description: "Deploy and manage applications on AWS, Google Cloud, or Azure",
      icon: Cloud,
      color: "text-orange-500",
      price: "From $2,000",
      duration: "1-3 weeks",
      features: [
        "Multi-cloud Support",
        "CI/CD Pipelines",
        "Monitoring",
        "Auto-scaling",
        "Security Setup"
      ],
      demoLink: "https://infrastructure.amez.dev"
    },
    {
      id: 'performance-optimization',
      title: "Performance Optimization",
      description: "Optimize existing applications for speed, scalability, and user experience",
      icon: Zap,
      color: "text-yellow-500",
      price: "From $1,500",
      duration: "1-2 weeks",
      features: [
        "Performance Audit",
        "Code Optimization",
        "Database Tuning",
        "Caching Strategy",
        "Monitoring Setup"
      ],
      demoLink: "https://performance-report.amez.dev"
    },
    {
      id: 'security-audit',
      title: "Security Audit & Consultation",
      description: "Comprehensive security assessment and implementation of best practices",
      icon: Shield,
      color: "text-red-500",
      price: "From $2,500",
      duration: "1-2 weeks",
      features: [
        "Security Assessment",
        "Vulnerability Testing",
        "Best Practices",
        "Compliance Check",
        "Security Training"
      ],
      demoLink: "https://security-report.amez.dev"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your requirements, goals, and create a detailed project plan."
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Creating wireframes, designs, and developing your solution with regular updates."
    },
    {
      step: "03",
      title: "Testing & Refinement",
      description: "Thorough testing, bug fixes, and refinements based on your feedback."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Going live with your project and providing ongoing support and maintenance."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlc3xlbnwwfHx8fDE3NTQzMDEyODl8MA&ixlib=rb-4.1.0&q=85')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Professional Services</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-primary to-blue-600">
                    Popular
                  </Badge>
                )}
                
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-primary/10 mb-4`}>
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        What's included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="w-full" size="sm">
                        View Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work Together</h2>
            <p className="text-xl text-muted-foreground">
              A proven process that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Portfolio
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                5.0 Client Rating
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                100+ Projects Completed
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}