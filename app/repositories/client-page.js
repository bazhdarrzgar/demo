'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, Eye, Calendar, Code, ExternalLink, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function ClientRepositoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  const repositories = [
    {
      id: 'nextjs-ecommerce-template',
      name: "nextjs-ecommerce-template",
      description: "A modern, fully-featured e-commerce template built with Next.js, TypeScript, and Tailwind CSS. Includes authentication, payment processing, and admin dashboard.",
      language: "TypeScript",
      stars: 2847,
      forks: 563,
      watchers: 89,
      size: "15.2 MB",
      lastUpdated: "2024-01-15",
      topics: ["nextjs", "ecommerce", "typescript", "tailwindcss", "stripe"],
      isPrivate: false,
      url: "https://github.com/amez/nextjs-ecommerce-template",
      demoUrl: "https://ecommerce-template-demo.amez.dev",
      featured: true
    },
    {
      id: 'react-task-manager',
      name: "react-task-manager",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      language: "JavaScript",
      stars: 1523,
      forks: 287,
      watchers: 45,
      size: "8.7 MB",
      lastUpdated: "2024-01-10",
      topics: ["react", "nodejs", "socketio", "postgresql", "redux"],
      isPrivate: false,
      url: "https://github.com/amez/react-task-manager",
      demoUrl: "https://taskmanager-demo.amez.dev"
    },
    {
      id: 'api-analytics-dashboard',
      name: "api-analytics-dashboard",
      description: "Real-time API analytics and monitoring dashboard with custom metrics, alerts, and beautiful data visualizations using D3.js.",
      language: "JavaScript",
      stars: 983,
      forks: 156,
      watchers: 32,
      size: "12.4 MB",
      lastUpdated: "2023-12-28",
      topics: ["api", "analytics", "d3js", "nodejs", "monitoring"],
      isPrivate: false,
      url: "https://github.com/amez/api-analytics-dashboard",
      demoUrl: "https://analytics-demo.amez.dev"
    },
    {
      id: 'microservices-auth-system',
      name: "microservices-auth-system",
      description: "Scalable authentication microservice with JWT tokens, OAuth integration, rate limiting, and comprehensive security features.",
      language: "Node.js",
      stars: 756,
      forks: 134,
      watchers: 28,
      size: "5.3 MB",
      lastUpdated: "2024-01-05",
      topics: ["microservices", "authentication", "jwt", "oauth", "security"],
      isPrivate: false,
      url: "https://github.com/amez/microservices-auth-system",
      demoUrl: "https://auth-demo.amez.dev"
    },
    {
      id: 'python-data-pipeline',
      name: "python-data-pipeline",
      description: "Automated data processing pipeline with Apache Airflow, data validation, transformation, and integration with multiple data sources.",
      language: "Python",
      stars: 654,
      forks: 89,
      watchers: 21,
      size: "3.8 MB",
      lastUpdated: "2023-12-20",
      topics: ["python", "airflow", "data-engineering", "etl", "automation"],
      isPrivate: false,
      url: "https://github.com/amez/python-data-pipeline",
      demoUrl: "https://data-pipeline-docs.amez.dev"
    },
    {
      id: 'vue-admin-dashboard',
      name: "vue-admin-dashboard",
      description: "Comprehensive admin dashboard template built with Vue.js 3, featuring dark/light themes, responsive design, and extensive components.",
      language: "Vue",
      stars: 2156,
      forks: 412,
      watchers: 67,
      size: "18.9 MB",
      lastUpdated: "2023-12-15",
      topics: ["vue", "admin-dashboard", "vuetify", "typescript", "responsive"],
      isPrivate: false,
      url: "https://github.com/amez/vue-admin-dashboard",
      demoUrl: "https://vue-admin-demo.amez.dev"
    },
    {
      id: 'golang-api-server',
      name: "golang-api-server",
      description: "High-performance RESTful API server built with Go, featuring middleware, database integration, testing, and Docker deployment.",
      language: "Go",
      stars: 445,
      forks: 72,
      watchers: 18,
      size: "2.1 MB",
      lastUpdated: "2023-12-10",
      topics: ["golang", "api", "gin", "postgresql", "docker"],
      isPrivate: false,
      url: "https://github.com/amez/golang-api-server",
      demoUrl: "https://go-api-docs.amez.dev"
    },
    {
      id: 'react-native-fitness-app',
      name: "react-native-fitness-app",
      description: "Cross-platform fitness tracking mobile application with workout logging, progress tracking, and social features.",
      language: "JavaScript",
      stars: 1287,
      forks: 234,
      watchers: 41,
      size: "25.6 MB",
      lastUpdated: "2023-11-30",
      topics: ["react-native", "fitness", "mobile", "expo", "firebase"],
      isPrivate: false,
      url: "https://github.com/amez/react-native-fitness-app",
      demoUrl: "https://fitness-app-demo.amez.dev"
    },
    {
      id: 'devops-automation-scripts',
      name: "devops-automation-scripts",
      description: "Collection of DevOps automation scripts for deployment, monitoring, and infrastructure management using various tools and technologies.",
      language: "Shell",
      stars: 892,
      forks: 167,
      watchers: 35,
      size: "4.2 MB",
      lastUpdated: "2023-11-25",
      topics: ["devops", "automation", "docker", "kubernetes", "ci-cd"],
      isPrivate: false,
      url: "https://github.com/amez/devops-automation-scripts",
      demoUrl: "https://devops-docs.amez.dev"
    }
  ]

  const languages = ['All', ...Array.from(new Set(repositories.map(repo => repo.language)))]

  const filteredRepositories = repositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         repo.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLanguage = selectedLanguage === 'All' || repo.language === selectedLanguage
    
    return matchesSearch && matchesLanguage
  })

  const totalStars = repositories.reduce((sum, repo) => sum + repo.stars, 0)
  const totalForks = repositories.reduce((sum, repo) => sum + repo.forks, 0)
  const featuredRepo = repositories.find(repo => repo.featured)

  const getLanguageColor = (language) => {
    const colors = {
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-green-500',
      'Go': 'bg-cyan-500',
      'Vue': 'bg-emerald-500',
      'Node.js': 'bg-lime-500',
      'Shell': 'bg-gray-500'
    }
    return colors[language] || 'bg-gray-400'
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnaXRodWJ8ZW58MHx8fHwxNzU0MzAxNDI5fDA&ixlib=rb-4.1.0&q=85')`,
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
              <Github className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Open Source</h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore my contributions to the developer community through open source projects
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{repositories.length}</div>
                <div className="text-sm text-muted-foreground">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalStars.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalForks.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Forks</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Repository */}
      {featuredRepo && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-blue-600">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Repository
                </Badge>
              </div>
              
              <Card className="max-w-4xl mx-auto p-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl lg:text-3xl flex items-center justify-center">
                    <Github className="w-8 h-8 mr-3" />
                    {featuredRepo.name}
                  </CardTitle>
                  <CardDescription className="text-lg mt-4">
                    {featuredRepo.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{featuredRepo.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <GitFork className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold">{featuredRepo.forks.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">{featuredRepo.watchers}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(featuredRepo.language)}`}></div>
                      <span className="font-semibold">{featuredRepo.language}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {featuredRepo.topics.map(topic => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg">
                      <Github className="w-4 h-4 mr-2" />
                      View Repository
                    </Button>
                    <Button variant="outline" size="lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search repositories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map(language => (
                  <Button
                    key={language}
                    variant={selectedLanguage === language ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(language)}
                    className="text-xs"
                  >
                    {language !== 'All' && (
                      <div className={`w-2 h-2 rounded-full ${getLanguageColor(language)} mr-2`}></div>
                    )}
                    {language}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Found {filteredRepositories.length} {filteredRepositories.length === 1 ? 'repository' : 'repositories'}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedLanguage !== 'All' && ` in ${selectedLanguage}`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Repositories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.filter(repo => !repo.featured).map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center">
                        <Github className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="truncate">{repo.name}</span>
                      </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-3 text-sm">
                      {repo.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{repo.stars.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3 text-blue-500" />
                          <span>{repo.forks}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                        <span className="text-xs text-muted-foreground">{repo.language}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          #{topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{repo.topics.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>Updated {repo.lastUpdated}</span>
                      </div>
                      <span>{repo.size}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredRepositories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <Github className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No repositories found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or language filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Github className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Like what you see?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow me on GitHub to stay updated with my latest projects and contributions.
            </p>
            
            <Button size="lg" className="text-lg px-8">
              <Github className="w-5 h-5 mr-2" />
              Follow on GitHub
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}