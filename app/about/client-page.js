'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Heart, Code, Globe, Coffee } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ClientAboutPage() {
  const interests = [
    { name: 'Open Source', icon: Code, description: 'Contributing to open source projects and community' },
    { name: 'Machine Learning', icon: Globe, description: 'Exploring AI/ML applications in web development' },
    { name: 'UI/UX Design', icon: Heart, description: 'Creating beautiful and intuitive user experiences' },
    { name: 'Cloud Computing', icon: Coffee, description: 'Building scalable cloud-native applications' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1625496235025-d783abf061c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxuYXR1cmFsJTIwd29vZHxlbnwwfHx8fDE3NTQzMDEwMzR8MA&ixlib=rb-4.1.0&q=85')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face&auto=format"
                  alt="Amez - Full Stack Software Engineer"
                  className="w-full rounded-2xl shadow-2xl object-cover aspect-square"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-12 h-12 text-primary-foreground" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafting Digital Experiences</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    With over <span className="text-primary font-semibold">5 years of experience</span> in software development, 
                    I specialize in creating robust, scalable applications that solve real-world problems. 
                    My journey started with curiosity about how things work, and has evolved into a passion 
                    for building innovative solutions.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    I believe in writing <span className="text-primary font-semibold">clean, maintainable code</span> and 
                    staying up-to-date with the latest technologies. When I'm not coding, you'll find me contributing 
                    to open-source projects, learning new frameworks, or sharing knowledge with the developer community.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    My approach combines <span className="text-primary font-semibold">technical expertise</span> with 
                    creative problem-solving, ensuring that every project I work on not only functions flawlessly 
                    but also provides an exceptional user experience.
                  </motion.p>
                </div>
              </div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <h3 className="font-semibold text-xl mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>amez@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="text-muted-foreground">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spanish</span>
                      <span className="text-muted-foreground">Conversational</span>
                    </div>
                    <div className="flex justify-between">
                      <span>French</span>
                      <span className="text-muted-foreground">Basic</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interests & Passions</h2>
            <p className="text-xl text-muted-foreground">What drives me beyond coding</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <interest.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-3">{interest.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">My Philosophy</h2>
              <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground leading-relaxed">
                "Code is not just about solving problems—it's about creating experiences, 
                building connections, and making the digital world a better place, one line at a time."
              </blockquote>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}