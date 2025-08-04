'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, Users, Award, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function ClientTestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 'sarah-johnson-ceo',
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      date: "2024-01-15",
      project: "E-commerce Platform",
      testimonial: "Amez delivered an exceptional e-commerce platform that exceeded our expectations. His technical expertise and attention to detail resulted in a 40% increase in our conversion rates. The project was completed on time and within budget.",
      longTestimonial: "Working with Amez was a game-changing experience for our startup. He didn't just build what we asked for—he brought valuable insights that improved our entire user experience. The e-commerce platform he developed handles our traffic seamlessly, and the admin dashboard makes managing our business so much easier. His code quality is outstanding, and he provided excellent documentation. I would definitely work with him again.",
      highlights: [
        "40% increase in conversion rates",
        "Delivered on time and within budget",
        "Excellent code quality and documentation",
        "Valuable business insights"
      ],
      projectUrl: "https://techstart-demo.amez.dev"
    },
    {
      id: 'michael-chen-cto',
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      date: "2023-12-20",
      project: "API Development & Integration",
      testimonial: "Amez's expertise in API development is remarkable. He built a robust and scalable API architecture that handles millions of requests daily. His documentation and testing practices are top-notch. Highly recommended for any backend development needs.",
      longTestimonial: "As a CTO, I've worked with many developers, but Amez stands out for his systematic approach to problem-solving. The API architecture he designed for us is not only performant but also incredibly well-documented. He anticipated scaling challenges we hadn't even considered and built solutions that have served us well as we've grown 10x. His testing coverage is comprehensive, which has saved us countless hours in debugging.",
      highlights: [
        "Handles millions of daily requests",
        "Comprehensive testing coverage",
        "Scalable architecture design",
        "Excellent documentation"
      ],
      projectUrl: "https://api-docs.innovatelabs.com"
    },
    {
      id: 'emily-davis-founder',
      name: "Emily Davis",
      role: "Founder",
      company: "CreativeStudio Pro",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      date: "2023-11-30",
      project: "Portfolio Website & CMS",
      testimonial: "Amez created a stunning portfolio website for our creative agency. The custom CMS he developed makes it easy for our team to update content. The site's performance is excellent, and we've received numerous compliments from clients.",
      longTestimonial: "Amez perfectly captured our vision for a modern, creative portfolio site. He took the time to understand our brand and business needs, then delivered a solution that not only looks amazing but functions flawlessly. The custom CMS he built is intuitive—even our non-technical team members can easily update content. The site loads incredibly fast and looks perfect on all devices. Our client inquiries have increased significantly since launch.",
      highlights: [
        "Intuitive custom CMS",
        "Perfect responsive design",
        "Fast loading performance",
        "Increased client inquiries"
      ],
      projectUrl: "https://creativestudio-demo.amez.dev"
    },
    {
      id: 'david-rodriguez-pm',
      name: "David Rodriguez",
      role: "Product Manager",
      company: "FinTech Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      date: "2023-10-15",
      project: "Financial Dashboard",
      testimonial: "Working with Amez on our financial dashboard was a fantastic experience. He has a deep understanding of both technical implementation and user experience. The dashboard he built helps our clients make better financial decisions.",
      longTestimonial: "Amez demonstrated exceptional skill in building our complex financial dashboard. He understood the sensitive nature of financial data and implemented robust security measures while maintaining excellent performance. His ability to translate complex financial concepts into intuitive UI components is remarkable. The dashboard has become a key differentiator for our product, and our users love how easy it is to analyze their financial data.",
      highlights: [
        "Robust security implementation",
        "Intuitive financial data visualization",
        "Key product differentiator",
        "Excellent user feedback"
      ],
      projectUrl: "https://fintech-dashboard-demo.amez.dev"
    },
    {
      id: 'lisa-wang-director',
      name: "Lisa Wang",
      role: "Technical Director",
      company: "EduTech Platform",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      date: "2023-09-25",
      project: "Learning Management System",
      testimonial: "Amez developed a comprehensive learning management system for our platform. His understanding of educational workflows and technical execution resulted in a system that both educators and students love using.",
      longTestimonial: "The learning management system Amez built for us has transformed how we deliver education. He took the time to understand the complexities of educational workflows and created a platform that serves both instructors and students seamlessly. The video streaming integration works flawlessly, the progress tracking is comprehensive, and the user interface is clean and intuitive. Our student engagement has increased by 60% since we launched the new platform.",
      highlights: [
        "60% increase in student engagement",
        "Seamless video streaming integration",
        "Comprehensive progress tracking",
        "Clean, intuitive interface"
      ],
      projectUrl: "https://edutech-lms-demo.amez.dev"
    },
    {
      id: 'james-thompson-lead',
      name: "James Thompson",
      role: "Team Lead",
      company: "DevOps Central",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      date: "2023-08-10",
      project: "CI/CD Pipeline & Monitoring",
      testimonial: "Amez transformed our deployment process with his expertise in DevOps. The CI/CD pipeline he implemented reduced our deployment time by 75% and significantly improved our reliability. His monitoring solutions give us complete visibility into our systems.",
      longTestimonial: "Working with Amez on our DevOps transformation was one of the best decisions we made. He redesigned our entire deployment pipeline, implementing modern CI/CD practices that have dramatically improved our development velocity. The monitoring and alerting system he set up gives us confidence in our deployments. What impressed me most was his ability to train our team on the new processes—everyone feels comfortable with the new system.",
      highlights: [
        "75% reduction in deployment time",
        "Improved system reliability",
        "Complete system visibility",
        "Excellent team training"
      ],
      projectUrl: "https://devops-monitoring-demo.amez.dev"
    }
  ]

  const stats = [
    { label: "Happy Clients", value: "50+", icon: Users },
    { label: "Projects Completed", value: "75+", icon: Award },
    { label: "Average Rating", value: "5.0", icon: Star },
    { label: "Client Satisfaction", value: "98%", icon: Heart }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeClient = testimonials[activeTestimonial]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx0ZWFtd29ya3xlbnwwfHx8fDE3NTQzMDE2MTF8MA&ixlib=rb-4.1.0&q=85')`,
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
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Client Testimonials</h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <CardHeader className="text-center pt-20 pb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <CardDescription className="text-lg italic leading-relaxed max-w-2xl mx-auto">
                    "{activeClient.longTestimonial}"
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={activeClient.avatar} alt={activeClient.name} />
                      <AvatarFallback>{activeClient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{activeClient.name}</CardTitle>
                      <div className="text-primary font-medium">{activeClient.role}</div>
                      <div className="text-sm text-muted-foreground">{activeClient.company}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Project: {activeClient.project}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {activeClient.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <Star className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center space-x-4 mt-8">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={prevTestimonial}
                      className="p-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={nextTestimonial}
                      className="p-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Client Feedback</h2>
            <p className="text-xl text-muted-foreground">
              Read what clients have to say about their project experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="text-primary font-medium text-sm">{testimonial.role}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                    
                    <CardDescription className="text-sm italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </CardDescription>
                    
                    <div className="text-center pt-4 border-t">
                      <div className="text-xs text-muted-foreground mb-2">
                        {testimonial.date}
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join My Happy Clients?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to bring your project vision to life with the same dedication and quality my clients love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Users className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                5.0 Average Rating
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-green-500" />
                50+ Happy Clients
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}