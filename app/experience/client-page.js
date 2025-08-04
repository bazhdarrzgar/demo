'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, MapPin, Calendar, ExternalLink, 
  Award, TrendingUp, Users, Code 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ClientExperiencePage() {
  const experiences = [
    {
      id: 'senior-fullstack-dev',
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      period: "2022 - Present",
      duration: "2+ years",
      description: "Lead developer for multiple high-traffic web applications serving 100K+ users. Architected and implemented scalable solutions using modern technologies and best practices.",
      achievements: [
        "Led development of e-commerce platform resulting in 40% increase in conversion rates",
        "Mentored team of 5 junior developers and conducted technical interviews",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Optimized application performance achieving 95+ Lighthouse scores"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"],
      companyUrl: "https://techcorp.example.com",
      current: true
    },
    {
      id: 'fullstack-developer',
      title: "Full Stack Developer",
      company: "StartupHub Inc",
      location: "Remote",
      type: "Full-time",
      period: "2020 - 2022",
      duration: "2 years",
      description: "Developed and maintained multiple client projects from concept to deployment. Collaborated with cross-functional teams to deliver high-quality solutions within tight deadlines.",
      achievements: [
        "Built 15+ web applications from scratch serving various industries",
        "Reduced average load time by 60% through performance optimizations",
        "Established code review processes improving code quality by 85%",
        "Integrated third-party APIs and payment systems for various clients"
      ],
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Stripe", "Digital Ocean"],
      companyUrl: "https://startuphub.example.com"
    },
    {
      id: 'frontend-developer',
      title: "Frontend Developer",
      company: "Creative Agency Pro",
      location: "New York, NY",
      type: "Full-time",
      period: "2019 - 2020",
      duration: "1 year",
      description: "Specialized in creating responsive, interactive user interfaces for high-end client websites. Worked closely with designers to bring creative visions to life.",
      achievements: [
        "Developed 20+ responsive websites with 100% cross-browser compatibility",
        "Collaborated with UX team to improve user engagement by 45%",
        "Implemented advanced animations and micro-interactions",
        "Maintained 98% client satisfaction rating"
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Figma", "Adobe Creative Suite"],
      companyUrl: "https://creativeagency.example.com"
    },
    {
      id: 'junior-developer',
      title: "Junior Web Developer",
      company: "Digital Solutions Co",
      location: "Remote",
      type: "Full-time",
      period: "2018 - 2019",
      duration: "1 year",
      description: "Started my professional journey developing websites and learning industry best practices. Gained hands-on experience with various technologies and frameworks.",
      achievements: [
        "Contributed to 10+ successful project deliveries",
        "Learned and implemented modern web development practices",
        "Participated in code reviews and team meetings",
        "Built responsive landing pages and corporate websites"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
      companyUrl: "https://digitalsolutions.example.com"
    }
  ]

  const skills = [
    { category: "Frontend", technologies: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", technologies: ["Node.js", "Python", "PHP", "Go", "GraphQL"] },
    { category: "Database", technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Cloud & DevOps", technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"] }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU0MzAxNDg5fDA&ixlib=rb-4.1.0&q=85')`,
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
              <Briefcase className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Experience</h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              5+ years of professional software development experience
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h2>
            <p className="text-xl text-muted-foreground">
              Professional experience and growth over the years
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-600"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <div className={`flex flex-col md:flex-row items-start md:items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ml-16 md:ml-0`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-xl flex items-center">
                              {experience.title}
                              {experience.current && (
                                <Badge className="ml-2 bg-green-500">Current</Badge>
                              )}
                            </CardTitle>
                            <div className="flex items-center text-primary font-semibold mt-1">
                              <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                                {experience.company}
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                          <Badge variant="outline">{experience.type}</Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {experience.duration}
                          </Badge>
                        </div>
                        
                        <CardDescription className="mt-3">
                          {experience.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-yellow-500" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <TrendingUp className="w-3 h-3 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-blue-500" />
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map(tech => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`w-full md:w-1/2 hidden md:block ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    {/* Optional: Add company logos or additional content here */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Core technologies gained through professional experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs m-1">
                          {tech}
                        </Badge>
                      ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how my experience can contribute to your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Users className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}