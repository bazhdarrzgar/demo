'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Server, Smartphone, Globe, Cloud, Zap, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function ClientSkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-blue-500",
      skills: [
        { name: 'React/Next.js', level: 95, experience: '4+ years' },
        { name: 'TypeScript', level: 90, experience: '3+ years' },
        { name: 'Vue.js/Nuxt.js', level: 85, experience: '2+ years' },
        { name: 'Tailwind CSS', level: 92, experience: '3+ years' },
        { name: 'SASS/SCSS', level: 88, experience: '4+ years' }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-500",
      skills: [
        { name: 'Node.js/Express', level: 90, experience: '4+ years' },
        { name: 'Python/Django', level: 85, experience: '3+ years' },
        { name: 'PHP/Laravel', level: 80, experience: '2+ years' },
        { name: 'GraphQL', level: 88, experience: '2+ years' },
        { name: 'REST APIs', level: 95, experience: '5+ years' }
      ]
    },
    {
      title: "Database Technologies",
      icon: Database,
      color: "text-purple-500",
      skills: [
        { name: 'MongoDB', level: 88, experience: '3+ years' },
        { name: 'PostgreSQL', level: 85, experience: '4+ years' },
        { name: 'MySQL', level: 82, experience: '3+ years' },
        { name: 'Redis', level: 78, experience: '2+ years' },
        { name: 'Elasticsearch', level: 75, experience: '1+ years' }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-pink-500",
      skills: [
        { name: 'React Native', level: 88, experience: '2+ years' },
        { name: 'Flutter/Dart', level: 75, experience: '1+ years' },
        { name: 'iOS (Swift)', level: 70, experience: '1+ years' },
        { name: 'Android (Kotlin)', level: 72, experience: '1+ years' }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-orange-500",
      skills: [
        { name: 'AWS', level: 85, experience: '3+ years' },
        { name: 'Docker', level: 88, experience: '3+ years' },
        { name: 'Kubernetes', level: 80, experience: '2+ years' },
        { name: 'CI/CD', level: 85, experience: '3+ years' },
        { name: 'Terraform', level: 75, experience: '1+ years' }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      color: "text-yellow-500",
      skills: [
        { name: 'Git/GitHub', level: 95, experience: '5+ years' },
        { name: 'VS Code', level: 95, experience: '5+ years' },
        { name: 'Figma', level: 85, experience: '3+ years' },
        { name: 'Postman', level: 90, experience: '4+ years' },
        { name: 'Jest/Testing', level: 88, experience: '3+ years' }
      ]
    }
  ]

  const certifications = [
    { name: "AWS Certified Developer", year: 2023, level: "Associate" },
    { name: "Google Cloud Professional", year: 2023, level: "Professional" },
    { name: "MongoDB Certified Developer", year: 2022, level: "Associate" },
    { name: "React Developer Certification", year: 2022, level: "Advanced" }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8fHx8MTc1NDMwMTA5Nnww&ixlib=rb-4.1.0&q=85')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Technical Skills</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Expertise across the full technology stack
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-xl text-muted-foreground">
              Over 5 years of hands-on experience with modern technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-primary/10`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>
                          {category.skills.length} technologies
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.experience}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <Progress value={skill.level} className="h-2" />
                          <div className="flex justify-end">
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Recognized expertise in key technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                  <Badge variant="outline" className="mb-2">
                    {cert.level}
                  </Badge>
                  <p className="text-muted-foreground text-sm">{cert.year}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Learning Philosophy</h2>
              <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground leading-relaxed">
                "Technology evolves rapidly, and so should we. I believe in continuous learning, 
                staying curious, and always being ready to adapt to new challenges."
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