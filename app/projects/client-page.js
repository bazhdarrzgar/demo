'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Zap, Filter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ClientProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 'ecommerce-platform',
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      longDescription: "Built using Next.js, Node.js, MongoDB, and Stripe. Features include user authentication, product catalog, shopping cart, order management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2V8ZW58MHx8fHwxNzU0MzAxMzI5fDA&ixlib=rb-4.1.0&q=85",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Web App",
      status: "Completed",
      year: "2024",
      duration: "3 months",
      team: "Solo Project",
      demoUrl: "https://ecommerce-demo.amez.dev",
      githubUrl: "https://github.com/amez/ecommerce-platform",
      featured: true
    },
    {
      id: 'task-management-app',
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
      longDescription: "React-based application with real-time collaboration features, drag-and-drop task management, team chat, and progress analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx0YXNrfGVufDB8fHx8MTc1NDMwMTMzN3ww&ixlib=rb-4.1.0&q=85",
      technologies: ["React", "Express.js", "Socket.io", "PostgreSQL", "Redux"],
      category: "Web App",
      status: "Completed",
      year: "2024",
      duration: "2 months",
      team: "2 Developers",
      demoUrl: "https://taskmanager-demo.amez.dev",
      githubUrl: "https://github.com/amez/task-manager"
    },
    {
      id: 'fitness-mobile-app',
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      longDescription: "React Native app with features like workout tracking, nutrition logging, progress photos, social sharing, and integration with wearable devices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxmaXRuZXNzfGVufDB8fHx8MTc1NDMwMTM0NXww&ixlib=rb-4.1.0&q=85",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Charts.js"],
      category: "Mobile App",
      status: "In Development",
      year: "2024",
      duration: "4 months",
      team: "3 Developers",
      demoUrl: "https://fitness-app-demo.amez.dev",
      githubUrl: "https://github.com/amez/fitness-tracker"
    },
    {
      id: 'api-analytics-dashboard',
      title: "API Analytics Dashboard",
      description: "Real-time analytics dashboard for monitoring API performance, usage statistics, and error tracking.",
      longDescription: "Built with React and D3.js for data visualization, featuring real-time monitoring, custom alerts, and detailed analytics reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3N8ZW58MHx8fHwxNzU0MzAxMzUzfDA&ixlib=rb-4.1.0&q=85",
      technologies: ["React", "D3.js", "Node.js", "Redis", "WebSocket"],
      category: "Dashboard",
      status: "Completed",
      year: "2023",
      duration: "6 weeks",
      team: "Solo Project",
      demoUrl: "https://analytics-demo.amez.dev",
      githubUrl: "https://github.com/amez/api-analytics"
    },
    {
      id: 'restaurant-ordering-system',
      title: "Restaurant Ordering System",
      description: "Complete restaurant ordering system with customer app, kitchen display, and admin panel.",
      longDescription: "Multi-platform solution including customer mobile app, web ordering, kitchen display system, and administrative dashboard with real-time order tracking.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTc1NDMwMTM2MXww&ixlib=rb-4.1.0&q=85",
      technologies: ["Vue.js", "Laravel", "MySQL", "Pusher", "Stripe"],
      category: "Web App",
      status: "Completed",
      year: "2023",
      duration: "3 months",
      team: "4 Developers",
      demoUrl: "https://restaurant-demo.amez.dev",
      githubUrl: "https://github.com/amez/restaurant-ordering"
    },
    {
      id: 'crypto-portfolio-tracker',
      title: "Cryptocurrency Portfolio Tracker",
      description: "Advanced portfolio tracking application with real-time prices, P&L analysis, and market insights.",
      longDescription: "React application with real-time cryptocurrency data, portfolio performance analytics, alerts, and integration with major exchanges.",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjcnlwdG98ZW58MHx8fHwxNzU0MzAxMzY5fDA&ixlib=rb-4.1.0&q=85",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
      category: "Web App",
      status: "Completed",
      year: "2023",
      duration: "2 months",
      team: "Solo Project",
      demoUrl: "https://crypto-tracker-demo.amez.dev",
      githubUrl: "https://github.com/amez/crypto-tracker"
    }
  ]

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProject = projects.find(p => p.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9qZWN0c3xlbnwwfHx8fDE3NTQzMDEzNzd8MA&ixlib=rb-4.1.0&q=85')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Featured Projects</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions and creative problem-solving
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-blue-600">
                  <Zap className="w-4 h-4 mr-2" />
                  Featured Project
                </Badge>
              </div>
              
              <Card className="overflow-hidden max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{featuredProject.category}</Badge>
                        <Badge 
                          variant={featuredProject.status === 'Completed' ? 'default' : 'secondary'}
                        >
                          {featuredProject.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl">{featuredProject.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {featuredProject.longDescription}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-0 space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map(tech => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Duration:</span>
                          <p>{featuredProject.duration}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Team:</span>
                          <p>{featuredProject.team}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Buttons */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <Filter className="w-5 h-5 text-muted-foreground mr-2 mt-2" />
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className="bg-background/90 backdrop-blur-sm"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map(tech => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="w-3 h-3 mr-1" />
                          Code
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
    </div>
  )
}