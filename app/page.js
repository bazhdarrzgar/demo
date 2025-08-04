'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code,
  Award,
  Users,
  GitBranch,
  CheckCircle,
  ArrowRight,
  Briefcase
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ClientWrapper from '@/components/ClientWrapper'
import jsPDF from 'jspdf'

export default function HomePage() {
  const router = useRouter()
  const [typingText, setTypingText] = useState('')
  const fullText = "Full Stack Software Engineer"
  
  // Auto refresh functionality
  useEffect(() => {
    const hasRefreshed = localStorage.getItem('hasRefreshed')
    
    if (!hasRefreshed) {
      localStorage.setItem('hasRefreshed', 'true')
      setTimeout(() => {
        window.location.reload()
      }, 1000) // Wait 1 second before refreshing
    }
  }, [])
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const handleDownloadCV = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      // CV Header
      pdf.setFontSize(24)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Amez', 20, 30)
      
      pdf.setFontSize(16)
      pdf.setFont('helvetica', 'normal')
      pdf.text('Full Stack Software Engineer', 20, 40)
      
      // Contact Info
      pdf.setFontSize(12)
      pdf.text('San Francisco, CA', 20, 55)
      pdf.text('amez@example.com', 20, 62)
      pdf.text('+1 (555) 123-4567', 20, 69)
      
      // Professional Summary
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Professional Summary', 20, 85)
      
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      const summary = 'Passionate Full Stack Software Engineer with 5+ years of experience in creating robust, scalable applications. Specialized in React, Node.js, Python, and cloud technologies. Proven track record of leading development teams and delivering high-quality solutions.'
      const summaryLines = pdf.splitTextToSize(summary, 170)
      pdf.text(summaryLines, 20, 95)
      
      // Skills
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Technical Skills', 20, 120)
      
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      const skillsText = 'JavaScript/TypeScript, React/Next.js, Node.js/Express, Python/Django, MongoDB/PostgreSQL, AWS/Docker, React Native, GraphQL/REST APIs'
      const skillsLines = pdf.splitTextToSize(skillsText, 170)
      pdf.text(skillsLines, 20, 130)
      
      // Experience
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Work Experience', 20, 150)
      
      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Senior Software Engineer - TechCorp Solutions (2022 - Present)', 20, 165)
      
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      const exp1 = '• Lead development of scalable web applications serving 100k+ users\n• Architected microservices infrastructure using Docker and AWS\n• Mentored 3 junior developers and conducted code reviews'
      const exp1Lines = pdf.splitTextToSize(exp1, 170)
      pdf.text(exp1Lines, 20, 175)
      
      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Full Stack Developer - StartupXYZ (2020 - 2022)', 20, 200)
      
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      const exp2 = '• Built MVP from scratch implementing core features and payment systems\n• Collaborated with design team to create intuitive user experiences\n• Improved application performance by 40% through optimization'
      const exp2Lines = pdf.splitTextToSize(exp2, 170)
      pdf.text(exp2Lines, 20, 210)
      
      // Education
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Education', 20, 235)
      
      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Bachelor of Science in Computer Science - University of Technology', 20, 250)
      
      pdf.setFontSize(11)
      pdf.setFont('helvetica', 'normal')
      pdf.text('Graduated Magna Cum Laude (GPA: 3.8/4.0) | 2015 - 2019', 20, 260)
      
      // Save the PDF
      pdf.save('Amez_CV.pdf')
      
    } catch (error) {
      console.error('Error generating CV:', error)
      alert('Error generating CV. Please try again.')
    }
  }

  const stats = [
    { label: "Years Experience", value: "5+", icon: Award },
    { label: "Projects Completed", value: "50+", icon: CheckCircle },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Code Commits", value: "2000+", icon: GitBranch }
  ]

  const quickLinks = [
    { title: "About Me", description: "Learn about my journey and passion", href: "/about", icon: "👨‍💻" },
    { title: "Skills", description: "Technical expertise and proficiencies", href: "/skills", icon: "🚀" },
    { title: "Projects", description: "Featured work and case studies", href: "/projects", icon: "💼" },
    { title: "Blog", description: "Technical articles and insights", href: "/blog", icon: "📝" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519219788971-8d9797e0928e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx3b29kJTIwZGVza3xlbnwwfHx8fDE3NTQzMDEwMjl8MA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <img
              src="/images/profile.jpg"
              alt="Amez"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-lg object-cover"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <motion.span 
              className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Amez
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-8 md:h-12"
          >
            <ClientWrapper fallback={<span>Full Stack Software Engineer</span>}>
              {typingText}<motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >|</motion.span>
            </ClientWrapper>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
          >
            Passionate about creating innovative solutions and building scalable applications that make a difference. 
            Let's build something amazing together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-8"
          >
            <Button 
              size="lg" 
              onClick={() => router.push('/projects')} 
              className="flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
            >
              <Briefcase className="w-4 h-4" />
              <span>View My Work</span>
            </Button>
            <ClientWrapper>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadCV} 
                className="flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </Button>
            </ClientWrapper>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Explore My Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Discover my journey and expertise</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
                  onClick={() => router.push(link.href)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl mb-2">{link.title}</CardTitle>
                        <CardDescription>{link.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <motion.div 
                      className="flex items-center text-primary font-semibold"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}