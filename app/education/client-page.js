'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, Award, BookOpen, Calendar, 
  ExternalLink, Star, CheckCircle, Trophy 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ClientEducationPage() {
  const education = [
    {
      id: 'computer-science-degree',
      type: 'Degree',
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2014 - 2018",
      duration: "4 years",
      gpa: "3.8/4.0",
      description: "Comprehensive computer science education covering algorithms, data structures, software engineering principles, and system design.",
      highlights: [
        "Graduated Magna Cum Laude",
        "Dean's List for 6 semesters",
        "President of Programming Club",
        "Led team in hackathon winning 2nd place"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Machine Learning",
        "Web Development"
      ]
    }
  ]

  const certifications = [
    {
      id: 'aws-certified-developer',
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      issueDate: "2023",
      expiryDate: "2026",
      credentialId: "AWS-DEV-2023-001",
      description: "Validates expertise in developing and maintaining applications on the AWS platform.",
      skills: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "CloudWatch"],
      verificationUrl: "https://aws.amazon.com/verification",
      badge: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
    },
    {
      id: 'google-cloud-professional',
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      issueDate: "2023",
      expiryDate: "2025",
      credentialId: "GCP-ARCH-2023-002",
      description: "Demonstrates ability to design, develop, and manage robust, secure, scalable, and dynamic solutions.",
      skills: ["GCP Architecture", "Kubernetes", "BigQuery", "Compute Engine", "Cloud Storage"],
      verificationUrl: "https://cloud.google.com/certification/verify",
      badge: "https://images.credly.com/images/71ab1484-0022-4c6b-b60c-8b99b3bd6081/image.png"
    },
    {
      id: 'mongodb-certified-developer',
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      issueDate: "2022",
      expiryDate: "2025",
      credentialId: "MONGO-DEV-2022-003",
      description: "Validates skills in MongoDB development, including data modeling, queries, and performance optimization.",
      skills: ["MongoDB", "Aggregation", "Indexing", "Replication", "Sharding"],
      verificationUrl: "https://university.mongodb.com/verify",
      badge: "https://images.credly.com/images/5ca7b236-6062-4a4b-a2b8-73cd5bfb0595/image.png"
    },
    {
      id: 'react-advanced-certification',
      title: "React Developer Certification - Advanced",
      issuer: "Meta (Facebook)",
      issueDate: "2022",
      expiryDate: "2024",
      credentialId: "META-REACT-2022-004",
      description: "Advanced certification covering React ecosystem, performance optimization, and modern development practices.",
      skills: ["React", "Redux", "Next.js", "Testing", "Performance Optimization"],
      verificationUrl: "https://developers.facebook.com/verify",
      badge: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/image.png"
    }
  ]

  const onlineCourses = [
    {
      title: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      completionDate: "2023",
      duration: "8 hours",
      skills: ["React", "Advanced Patterns", "Performance"]
    },
    {
      title: "System Design Interview",
      platform: "Educative",
      instructor: "Alex Xu",
      completionDate: "2023",
      duration: "12 hours",
      skills: ["System Design", "Scalability", "Architecture"]
    },
    {
      title: "Docker & Kubernetes",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      completionDate: "2022",
      duration: "23 hours",
      skills: ["Docker", "Kubernetes", "DevOps"]
    },
    {
      title: "GraphQL with React",
      platform: "Pluralsight",
      instructor: "Adhithi Ravichandran",
      completionDate: "2022",
      duration: "6 hours",
      skills: ["GraphQL", "Apollo Client", "React"]
    }
  ]

  const achievements = [
    {
      title: "Hackathon Winner",
      event: "TechCrunch Disrupt SF",
      year: "2023",
      description: "1st place for developing an AI-powered code review tool",
      award: "$10,000 Prize"
    },
    {
      title: "Open Source Contributor",
      event: "Hacktoberfest",
      year: "2022, 2023",
      description: "Contributed to 15+ open source projects",
      award: "Digital Swag & Recognition"
    },
    {
      title: "Technical Speaker",
      event: "React Conf 2023",
      year: "2023",
      description: "Spoke about 'Performance Optimization in React Applications'",
      award: "Speaker Badge"
    },
    {
      title: "Mentor of the Year",
      event: "CodePath.org",
      year: "2022",
      description: "Mentored 20+ aspiring developers in web development",
      award: "Recognition Certificate"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb258ZW58MHx8fHwxNzU0MzAxNTMyfDA&ixlib=rb-4.1.0&q=85')`,
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
              <GraduationCap className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Education</h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development journey
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Degree</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{onlineCourses.length}</div>
                <div className="text-sm text-muted-foreground">Online Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{achievements.length}</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formal Education */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formal Education</h2>
            <p className="text-xl text-muted-foreground">
              Academic foundation in computer science and software engineering
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-3 bg-gradient-to-r from-primary to-blue-600">
                          {edu.type}
                        </Badge>
                        <CardTitle className="text-2xl">{edu.title}</CardTitle>
                        <div className="text-lg text-primary font-semibold mt-2">
                          {edu.institution}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{edu.gpa}</div>
                        <div className="text-sm text-muted-foreground">GPA</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <CardDescription className="text-base">
                      {edu.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                        Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <Star className="w-3 h-3 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                        Key Courses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map(course => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Industry-recognized certifications and credentials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <div className="text-primary font-semibold">{cert.issuer}</div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mt-2">
                      <span>Issued: {cert.issueDate}</span>
                      <span>•</span>
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription>
                      {cert.description}
                    </CardDescription>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          ID: {cert.credentialId}
                        </span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-xl text-muted-foreground">
              Recent online courses and skill development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-sm font-semibold">{course.title}</CardTitle>
                    <div className="text-xs text-primary">{course.platform}</div>
                    <div className="text-xs text-muted-foreground">{course.instructor}</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="text-xs text-muted-foreground">
                      {course.duration} • {course.completionDate}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 justify-center">
                      {course.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-xs text-green-600">Completed</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground">
              Awards and recognition in the tech community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                  <div className="text-primary font-semibold mb-2">{achievement.event}</div>
                  <Badge variant="outline" className="mb-3">{achievement.year}</Badge>
                  <CardDescription className="mb-4">
                    {achievement.description}
                  </CardDescription>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600">
                    {achievement.award}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}