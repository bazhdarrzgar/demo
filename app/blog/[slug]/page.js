'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function BlogPostPage({ params }) {
  const router = useRouter()
  const { slug } = params

  // Mock blog post data - in a real app, this would come from a CMS or API
  const blogPosts = {
    'building-scalable-react-applications': {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large React applications with proper state management and component architecture.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices", "State Management"],
      image: "https://images.unsplash.com/photo-1528921581519-52b9d779df2b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHx0ZWNoJTIwYmxvZ3xlbnwwfHx8Ymx1ZXwxNzU0MzAwMDMzfDA&ixlib=rb-4.1.0&q=85",
      content: `
        # Building Scalable React Applications

        When building large React applications, architecture becomes crucial for maintainability, performance, and developer experience. In this comprehensive guide, we'll explore proven patterns and best practices for scaling React applications.

        ## 1. Component Architecture

        ### Atomic Design Principles
        
        Structure your components using atomic design methodology:
        - **Atoms**: Basic UI elements (buttons, inputs, labels)
        - **Molecules**: Groups of atoms (search form, navigation item)
        - **Organisms**: Groups of molecules (header, sidebar, product list)
        - **Templates**: Page-level layouts
        - **Pages**: Specific instances of templates

        ### Component Composition

        \`\`\`jsx
        // Good: Composable components
        const UserProfile = ({ user }) => (
          <Card>
            <Avatar src={user.avatar} />
            <UserInfo name={user.name} email={user.email} />
            <UserActions onEdit={handleEdit} onDelete={handleDelete} />
          </Card>
        )
        \`\`\`

        ## 2. State Management

        ### Context vs Redux vs Zustand

        Choose the right state management solution based on your needs:

        **React Context**: Perfect for theme, auth, and simple global state
        **Redux Toolkit**: Complex state logic with time-travel debugging
        **Zustand**: Lightweight alternative with great TypeScript support

        ### State Structure Best Practices

        \`\`\`jsx
        // Good: Normalized state structure
        const initialState = {
          users: {
            byId: {},
            allIds: []
          },
          posts: {
            byId: {},
            allIds: []
          },
          ui: {
            loading: false,
            error: null
          }
        }
        \`\`\`

        ## 3. Performance Optimization

        ### Code Splitting

        Implement route-based and component-based code splitting:

        \`\`\`jsx
        import { lazy, Suspense } from 'react'

        const LazyComponent = lazy(() => import('./LazyComponent'))

        function App() {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          )
        }
        \`\`\`

        ### Memoization Strategies

        Use React.memo, useMemo, and useCallback strategically:

        \`\`\`jsx
        const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
          const processedData = useMemo(
            () => processData(data),
            [data]
          )

          const handleUpdate = useCallback(
            (id) => onUpdate(id),
            [onUpdate]
          )

          return <DataVisualization data={processedData} />
        })
        \`\`\`

        ## 4. Testing Strategy

        ### Component Testing

        Test components in isolation with React Testing Library:

        \`\`\`jsx
        import { render, screen, fireEvent } from '@testing-library/react'
        import UserProfile from './UserProfile'

        test('displays user information correctly', () => {
          const user = { name: 'John Doe', email: 'john@example.com' }
          render(<UserProfile user={user} />)
          
          expect(screen.getByText('John Doe')).toBeInTheDocument()
          expect(screen.getByText('john@example.com')).toBeInTheDocument()
        })
        \`\`\`

        ## 5. Project Structure

        Organize your project for scalability:

        \`\`\`
        src/
        ├── components/
        │   ├── ui/           # Reusable UI components
        │   ├── forms/        # Form components
        │   └── layout/       # Layout components
        ├── hooks/            # Custom hooks
        ├── services/         # API services
        ├── utils/            # Utility functions
        ├── types/            # TypeScript types
        └── pages/            # Page components
        \`\`\`

        ## Conclusion

        Building scalable React applications requires careful planning and adherence to best practices. Focus on component composition, proper state management, performance optimization, and comprehensive testing. Remember that architecture decisions should be driven by your specific use case and team needs.

        The key is to start simple and evolve your architecture as your application grows. Don't over-engineer from the beginning, but keep scalability in mind as you make decisions.
      `,
      relatedPosts: [
        { slug: 'modern-javascript-patterns', title: 'Modern JavaScript Patterns' },
        { slug: 'nodejs-performance-optimization', title: 'Node.js Performance Optimization' }
      ]
    },
    'microservices-docker-aws': {
      title: "Microservices with Docker and AWS",
      excerpt: "A comprehensive guide to building and deploying microservices architecture using containerization and cloud services.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["Docker", "AWS", "Microservices", "Cloud"],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTQzMDAwNDN8MA&ixlib=rb-4.1.0&q=85",
      content: `
        # Microservices with Docker and AWS

        Microservices architecture has revolutionized how we build and deploy applications. Combined with Docker containers and AWS cloud services, it provides unprecedented scalability and flexibility.

        ## Understanding Microservices

        Microservices break down monolithic applications into smaller, independent services that communicate over well-defined APIs. Each service:

        - Owns its data and business logic
        - Can be developed and deployed independently
        - Scales based on demand
        - Uses the best technology for its specific needs

        ## Docker Containerization

        ### Creating Efficient Dockerfiles

        \`\`\`dockerfile
        FROM node:18-alpine

        WORKDIR /app

        # Copy package files first for better caching
        COPY package*.json ./
        RUN npm ci --only=production

        # Copy application code
        COPY . .

        # Create non-root user
        RUN addgroup -g 1001 -S nodejs
        RUN adduser -S nextjs -u 1001
        USER nextjs

        EXPOSE 3000
        CMD ["npm", "start"]
        \`\`\`

        ### Multi-stage Builds

        \`\`\`dockerfile
        # Build stage
        FROM node:18-alpine AS builder
        WORKDIR /app
        COPY package*.json ./
        RUN npm ci
        COPY . .
        RUN npm run build

        # Production stage
        FROM node:18-alpine AS runner
        WORKDIR /app
        COPY --from=builder /app/dist ./dist
        COPY --from=builder /app/node_modules ./node_modules
        CMD ["node", "dist/server.js"]
        \`\`\`

        ## AWS Deployment Strategy

        ### Amazon ECS with Fargate

        Deploy containerized microservices without managing servers:

        \`\`\`yaml
        # docker-compose.yml for ECS
        version: '3.8'
        services:
          user-service:
            image: your-registry/user-service:latest
            ports:
              - "3001:3001"
            environment:
              - DATABASE_URL=\${DATABASE_URL}
            deploy:
              replicas: 2
              resources:
                limits:
                  memory: 512M
                reservations:
                  memory: 256M
        \`\`\`

        ### API Gateway Integration

        Use AWS API Gateway to route requests to appropriate services:

        \`\`\`javascript
        // Lambda function for API Gateway
        exports.handler = async (event) => {
          const { path, httpMethod } = event
          
          const serviceMap = {
            '/users': 'user-service',
            '/orders': 'order-service',
            '/products': 'product-service'
          }
          
          const service = serviceMap[path.split('/')[1]]
          
          // Route to appropriate microservice
          return await routeToService(service, event)
        }
        \`\`\`

        ## Service Communication

        ### Event-Driven Architecture

        \`\`\`javascript
        // Using AWS EventBridge
        const AWS = require('aws-sdk')
        const eventbridge = new AWS.EventBridge()

        const publishEvent = async (source, detailType, detail) => {
          const params = {
            Entries: [{
              Source: source,
              DetailType: detailType,
              Detail: JSON.stringify(detail)
            }]
          }
          
          return await eventbridge.putEvents(params).promise()
        }

        // Publish user creation event
        await publishEvent(
          'user-service',
          'User Created',
          { userId: '123', email: 'user@example.com' }
        )
        \`\`\`

        ## Monitoring and Observability

        ### Distributed Tracing

        \`\`\`javascript
        const AWS = require('aws-sdk')
        const AWSXRay = require('aws-xray-sdk-core')
        const awsSDK = AWSXRay.captureAWS(AWS)

        // Automatic tracing for AWS services
        const dynamodb = new awsSDK.DynamoDB.DocumentClient()

        exports.handler = AWSXRay.captureAsyncFunc('lambda_handler', async (event) => {
          const subsegment = AWSXRay.getSegment().addNewSubsegment('custom_operation')
          
          try {
            // Your business logic here
            const result = await processRequest(event)
            return result
          } catch (error) {
            subsegment.addError(error)
            throw error
          } finally {
            subsegment.close()
          }
        })
        \`\`\`

        ## Best Practices

        ### 1. Database Per Service
        Each microservice should have its own database to maintain independence.

        ### 2. Circuit Breaker Pattern
        \`\`\`javascript
        const CircuitBreaker = require('opossum')

        const options = {
          timeout: 3000,
          errorThresholdPercentage: 50,
          resetTimeout: 30000
        }

        const breaker = new CircuitBreaker(callExternalService, options)
        \`\`\`

        ### 3. Health Checks
        \`\`\`javascript
        app.get('/health', (req, res) => {
          const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            timestamp: Date.now()
          }
          
          res.status(200).send(healthcheck)
        })
        \`\`\`

        ## Conclusion

        Microservices with Docker and AWS provide a powerful foundation for scalable applications. While the initial complexity is higher than monolithic architectures, the benefits of independent deployment, scaling, and technology choices make it worthwhile for growing applications.

        Remember to start with a well-defined domain model, implement proper monitoring from day one, and gradually migrate from monolithic to microservices architecture.
      `,
      relatedPosts: [
        { slug: 'nodejs-performance-optimization', title: 'Node.js Performance Optimization' },
        { slug: 'database-design-principles', title: 'Database Design Principles' }
      ]
    },
    'modern-javascript-patterns': {
      title: "Modern JavaScript Patterns",
      excerpt: "Explore advanced JavaScript patterns and techniques for writing clean, maintainable, and performant code.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES6+", "Patterns", "Best Practices"],
      image: "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0dXRvcmlhbHxlbnwwfHx8Ymx1ZXwxNzU0MzAwMDM4fDA&ixlib=rb-4.1.0&q=85",
      content: `
        # Modern JavaScript Patterns

        JavaScript has evolved tremendously over the past few years. Modern patterns and techniques help us write more readable, maintainable, and performant code.

        ## Destructuring and Spread Operators

        ### Object Destructuring
        \`\`\`javascript
        // Extract specific properties
        const { name, email, age = 25 } = user

        // Rename while destructuring
        const { name: userName, email: userEmail } = user

        // Nested destructuring
        const { address: { city, country } } = user
        \`\`\`

        ### Array Destructuring
        \`\`\`javascript
        const [first, second, ...rest] = numbers
        const [, , third] = numbers  // Skip elements
        \`\`\`

        ## Async/Await Patterns

        ### Error Handling
        \`\`\`javascript
        const fetchUserData = async (userId) => {
          try {
            const user = await api.getUser(userId)
            const posts = await api.getUserPosts(userId)
            return { user, posts }
          } catch (error) {
            console.error('Failed to fetch user data:', error)
            throw new Error('User data unavailable')
          }
        }
        \`\`\`

        ### Concurrent Requests
        \`\`\`javascript
        // Parallel execution
        const [users, posts, comments] = await Promise.all([
          fetchUsers(),
          fetchPosts(),
          fetchComments()
        ])

        // Sequential with results from previous calls
        const user = await fetchUser(id)
        const posts = await fetchUserPosts(user.id)
        const enrichedPosts = await enrichPosts(posts)
        \`\`\`

        ## Functional Programming Patterns

        ### Higher-Order Functions
        \`\`\`javascript
        const withLogging = (fn) => (...args) => {
          console.log(\`Calling \${fn.name} with:\`, args)
          const result = fn(...args)
          console.log(\`Result:\`, result)
          return result
        }

        const add = (a, b) => a + b
        const loggedAdd = withLogging(add)
        \`\`\`

        ### Currying
        \`\`\`javascript
        const multiply = (a) => (b) => a * b
        const multiplyBy2 = multiply(2)
        const multiplyBy10 = multiply(10)

        console.log(multiplyBy2(5))  // 10
        console.log(multiplyBy10(5)) // 50
        \`\`\`

        ## Module Patterns

        ### ES6 Modules
        \`\`\`javascript
        // utils.js
        export const formatDate = (date) => {
          return new Intl.DateTimeFormat('en-US').format(date)
        }

        export const debounce = (fn, delay) => {
          let timeoutId
          return (...args) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => fn(...args), delay)
          }
        }

        export default class ApiClient {
          // Class implementation
        }
        \`\`\`

        ### Dynamic Imports
        \`\`\`javascript
        const loadFeature = async (featureName) => {
          const { default: Feature } = await import(\`./features/\${featureName}\`)
          return new Feature()
        }
        \`\`\`

        ## Advanced Object Patterns

        ### Proxy for Property Validation
        \`\`\`javascript
        const createValidatedUser = (userData) => {
          return new Proxy(userData, {
            set(target, property, value) {
              if (property === 'email' && !value.includes('@')) {
                throw new Error('Invalid email address')
              }
              if (property === 'age' && value < 0) {
                throw new Error('Age must be positive')
              }
              target[property] = value
              return true
            }
          })
        }
        \`\`\`

        ### Object Composition
        \`\`\`javascript
        const canWalk = (state) => ({
          walk() {
            console.log(\`\${state.name} is walking\`)
          }
        })

        const canSwim = (state) => ({
          swim() {
            console.log(\`\${state.name} is swimming\`)
          }
        })

        const createPerson = (name) => {
          const state = { name }
          return Object.assign(
            state,
            canWalk(state),
            canSwim(state)
          )
        }
        \`\`\`

        ## Performance Patterns

        ### Memoization
        \`\`\`javascript
        const memoize = (fn) => {
          const cache = new Map()
          return (...args) => {
            const key = JSON.stringify(args)
            if (cache.has(key)) {
              return cache.get(key)
            }
            const result = fn(...args)
            cache.set(key, result)
            return result
          }
        }

        const expensiveCalculation = memoize((n) => {
          // Expensive operation
          return n * n * n
        })
        \`\`\`

        ### Lazy Evaluation
        \`\`\`javascript
        class LazyValue {
          constructor(fn) {
            this.fn = fn
            this.computed = false
            this.value = undefined
          }

          get() {
            if (!this.computed) {
              this.value = this.fn()
              this.computed = true
            }
            return this.value
          }
        }

        const expensiveValue = new LazyValue(() => {
          console.log('Computing expensive value...')
          return performExpensiveOperation()
        })
        \`\`\`

        ## Conclusion

        Modern JavaScript patterns help us write more expressive, maintainable code. By leveraging destructuring, async/await, functional programming concepts, and advanced object manipulation, we can create robust applications that are easier to understand and maintain.

        The key is to use these patterns judiciously—not every situation requires the most advanced technique, but knowing them gives you powerful tools for when they're needed.
      `,
      relatedPosts: [
        { slug: 'building-scalable-react-applications', title: 'Building Scalable React Applications' },
        { slug: 'nodejs-performance-optimization', title: 'Node.js Performance Optimization' }
      ]
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${post.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button 
              variant="ghost" 
              onClick={() => router.push('/blog')}
              className="mb-8 hover:bg-background/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-background/50">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Button size="sm" variant="outline" className="bg-background/50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" variant="outline" className="bg-background/50">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.split('\n').map(line => {
                    if (line.startsWith('# ')) {
                      return \`<h1 class="text-3xl font-bold mt-8 mb-4">\${line.slice(2)}</h1>\`
                    } else if (line.startsWith('## ')) {
                      return \`<h2 class="text-2xl font-bold mt-6 mb-3">\${line.slice(3)}</h2>\`
                    } else if (line.startsWith('### ')) {
                      return \`<h3 class="text-xl font-bold mt-4 mb-2">\${line.slice(4)}</h3>\`
                    } else if (line.startsWith('```')) {
                      return \`<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>\`
                    } else if (line === '') {
                      return '<br>'
                    } else {
                      return \`<p class="mb-4 leading-relaxed">\${line}</p>\`
                    }
                  }).join('')
                }}
              />
            </motion.article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        onClick={() => router.push(\`/blog/\${relatedPost.slug}\`)}
                      >
                        <CardContent className="p-0">
                          <h3 className="font-semibold text-lg mb-2 hover:text-primary">
                            {relatedPost.title}
                          </h3>
                          <motion.div 
                            className="flex items-center text-primary text-sm font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span>Read article</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}