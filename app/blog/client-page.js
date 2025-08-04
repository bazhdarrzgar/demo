'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ClientBlogPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      slug: 'building-scalable-react-applications',
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large React applications with proper state management and component architecture.",
      content: "Comprehensive guide to building scalable React applications...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHR8ZW58MHx8fHwxNzU0MzAxMTUyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      slug: 'nextjs-full-stack-development',
      title: "Next.js Full-Stack Development Guide",
      excerpt: "From API routes to SSR, explore how to build complete applications with Next.js and modern deployment strategies.",
      content: "Complete guide to Next.js full-stack development...",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Next.js",
      tags: ["Next.js", "Full-Stack", "SSR"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxuZXh0JTIwanN8ZW58MHx8fHwxNzU0MzAxMTYyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      slug: 'mongodb-aggregation-pipelines',
      title: "Mastering MongoDB Aggregation Pipelines",
      excerpt: "Deep dive into MongoDB's powerful aggregation framework for complex data processing and analytics.",
      content: "Advanced MongoDB aggregation techniques...",
      date: "2024-01-03",
      readTime: "10 min read",
      category: "Database",
      tags: ["MongoDB", "Database", "Aggregation"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZXxlbnwwfHx8fDE3NTQzMDExNzF8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      slug: 'typescript-advanced-patterns',
      title: "Advanced TypeScript Patterns",
      excerpt: "Explore advanced TypeScript features including utility types, conditional types, and advanced generics for better code quality.",
      content: "Advanced TypeScript techniques and patterns...",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Advanced", "Patterns"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0fGVufDB8fHx8MTc1NDMwMTE4MHww&ixlib=rb-4.1.0&q=85"
    },
    {
      slug: 'docker-containerization-guide',
      title: "Docker Containerization for Developers",
      excerpt: "Complete guide to containerizing applications with Docker, from basics to production deployments.",
      content: "Comprehensive Docker containerization guide...",
      date: "2023-12-20",
      readTime: "11 min read",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Containerization"],
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxkb2NrZXJ8ZW58MHx8fHwxNzU0MzAxMTg5fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      slug: 'performance-optimization-techniques',
      title: "Web Performance Optimization Techniques",
      excerpt: "Essential techniques for optimizing web applications including code splitting, lazy loading, and caching strategies.",
      content: "Web performance optimization strategies...",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZXxlbnwwfHx8fDE3NTQzMDExOTh8MA&ixlib=rb-4.1.0&q=85"
    }
  ]

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const handlePostClick = (slug) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxibG9nfGVufDB8fHx8MTc1NDMwMTIwN3ww&ixlib=rb-4.1.0&q=85')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Technical Blog</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </motion.div>
        </div>
      </section>

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
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Read more
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to get notified about new blog posts and technical insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}