'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, ExternalLink, Star, GitFork, Eye, Clock, 
  Search, Filter, Code, Users, Calendar, TrendingUp,
  BookOpen, Heart, Download, Share2
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function ClientRepositoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock repository data - in real app, this would come from GitHub API
  const mockRepos = [
    {
      id: 1,
      name: 'react-dashboard',
      description: 'A modern React dashboard with charts, tables, and real-time data visualization.',
      language: 'JavaScript',
      stars: 1234,
      forks: 456,
      watchers: 123,
      updated: '2024-08-01',
      topics: ['react', 'dashboard', 'charts', 'typescript'],
      category: 'frontend',
      isPrivate: false,
      liveDemo: 'https://react-dashboard.amez.dev',
      featured: true
    },
    {
      id: 2,
      name: 'node-api-boilerplate',
      description: 'Production-ready Node.js API boilerplate with authentication, validation, and testing.',
      language: 'TypeScript',
      stars: 892,
      forks: 234,
      watchers: 67,
      updated: '2024-07-28',
      topics: ['nodejs', 'api', 'typescript', 'express'],
      category: 'backend',
      isPrivate: false,
      liveDemo: 'https://api-docs.amez.dev'
    },
    {
      id: 3,
      name: 'mobile-expense-tracker',
      description: 'Cross-platform mobile app for expense tracking built with React Native.',
      language: 'JavaScript',
      stars: 567,
      forks: 123,
      watchers: 45,
      updated: '2024-07-25',
      topics: ['react-native', 'mobile', 'fintech', 'ios', 'android'],
      category: 'mobile',
      isPrivate: false
    },
    {
      id: 4,
      name: 'python-ml-toolkit',
      description: 'Machine learning toolkit with common algorithms and data preprocessing utilities.',
      language: 'Python',
      stars: 2345,
      forks: 678,
      watchers: 234,
      updated: '2024-08-02',
      topics: ['python', 'machine-learning', 'data-science', 'ai'],
      category: 'ai-ml',
      isPrivate: false,
      liveDemo: 'https://ml-demo.amez.dev'
    },
    {
      id: 5,
      name: 'docker-microservices',
      description: 'Microservices architecture example using Docker, Kubernetes, and service mesh.',
      language: 'Go',
      stars: 1456,
      forks: 345,
      watchers: 89,
      updated: '2024-07-30',
      topics: ['docker', 'kubernetes', 'microservices', 'devops'],
      category: 'devops',
      isPrivate: false
    },
    {
      id: 6,
      name: 'vue-portfolio-template',
      description: 'Beautiful and responsive portfolio template built with Vue.js and Tailwind CSS.',
      language: 'Vue',
      stars: 789,
      forks: 234,
      watchers: 56,
      updated: '2024-07-22',
      topics: ['vuejs', 'portfolio', 'tailwindcss', 'template'],
      category: 'frontend',
      isPrivate: false,
      liveDemo: 'https://vue-portfolio.amez.dev'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Repositories', count: mockRepos.length },
    { id: 'frontend', label: 'Frontend', count: mockRepos.filter(r => r.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: mockRepos.filter(r => r.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: mockRepos.filter(r => r.category === 'mobile').length },
    { id: 'ai-ml', label: 'AI/ML', count: mockRepos.filter(r => r.category === 'ai-ml').length },
    { id: 'devops', label: 'DevOps', count: mockRepos.filter(r => r.category === 'devops').length }
  ]

  const languageColors = {
    'JavaScript': 'bg-yellow-500',
    'TypeScript': 'bg-blue-500',
    'Python': 'bg-green-500',
    'Go': 'bg-cyan-500',
    'Vue': 'bg-emerald-500'
  }

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setRepos(mockRepos)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         repo.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || repo.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredRepo = repos.find(repo => repo.featured)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnaXRodWJ8ZW58MHx8fHwxNzU0MzAxMzI0fDA&ixlib=rb-4.1.0&q=85')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Open Source Contributions</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore my public repositories and contributions to the developer community
            </p>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm">
              <div className="flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>{repos.length} Public Repos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>{repos.reduce((sum, repo) => sum + repo.stars, 0)} Stars</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitFork className="w-5 h-5" />
                <span>{repos.reduce((sum, repo) => sum + repo.forks, 0)} Forks</span>
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
                <Badge className="text-sm px-4 py-2 bg-white text-gray-800 border-2 border-primary">
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
                  <div className="flex flex-wrap justify-center gap-2">
                    {featuredRepo.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-1" />
                        <span className="text-2xl font-bold">{featuredRepo.stars}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Stars</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <GitFork className="w-5 h-5 text-blue-500 mr-1" />
                        <span className="text-2xl font-bold">{featuredRepo.forks}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Forks</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Eye className="w-5 h-5 text-green-500 mr-1" />
                        <span className="text-2xl font-bold">{featuredRepo.watchers}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Watchers</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full ${languageColors[featuredRepo.language]} mr-2`} />
                        <span className="text-lg font-semibold">{featuredRepo.language}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Language</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="flex items-center">
                      <Github className="w-5 h-5 mr-2" />
                      View Source Code
                    </Button>
                    {featuredRepo.liveDemo && (
                      <Button variant="outline" size="lg" className="flex items-center">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search repositories, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repositories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Repositories ({filteredRepos.length})
            </h2>
            <p className="text-lg text-muted-foreground">
              {searchTerm || selectedCategory !== 'all' 
                ? `Filtered results for "${searchTerm || categories.find(c => c.id === selectedCategory)?.label}"`
                : 'Browse through all my public repositories'
              }
            </p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded mb-2" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-primary" />
                          {repo.name}
                        </CardTitle>
                        {repo.featured && (
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        )}
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {repo.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {repo.topics.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{repo.topics.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${languageColors[repo.language]} mr-1`} />
                            {repo.language}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {repo.stars}
                          </div>
                          <div className="flex items-center">
                            <GitFork className="w-3 h-3 mr-1 text-blue-500" />
                            {repo.forks}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        Updated {formatDate(repo.updated)}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                        {repo.liveDemo && (
                          <Button variant="outline" size="sm" className="flex-1">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {filteredRepos.length === 0 && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Github className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No repositories found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* GitHub Profile CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Github className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to see more?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check out my complete GitHub profile for more repositories, contributions, and open source work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Heart className="w-5 h-5 mr-2" />
                Sponsor My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}