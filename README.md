# Amez - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing software engineering expertise and professional experience.

## 🚀 Features

- **Multi-page Architecture**: Organized sections across dedicated pages
- **Responsive Design**: Mobile-first approach with seamless adaptation across devices
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Interactive Elements**: Dynamic components with hover effects and micro-interactions
- **Professional Content**: Comprehensive showcase of skills, projects, and experience
- **Contact Integration**: Functional contact form with backend API
- **CV Generation**: Downloadable PDF resume with complete professional information
- **Blog System**: Technical blog posts with professional imagery
- **Open Source**: GitHub repositories showcase with live statistics
- **Performance Optimized**: Fast loading times and SEO-friendly structure

## 🛠 Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful, customizable icons

### Backend
- **Next.js API Routes** - Serverless backend functions
- **JSON Response Handling** - RESTful API design

### Development Tools
- **TypeScript Ready** - Type-safe development environment
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with autoprefixer

### Libraries & Utilities
- **jsPDF** - Client-side PDF generation
- **html2canvas** - HTML to canvas conversion
- **next-themes** - Dark/light theme management
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

## 📁 Project Structure

```
/app
├── app/
│   ├── page.js                 # Home/Landing page
│   ├── about/
│   │   └── page.js            # About page
│   ├── skills/
│   │   └── page.js            # Skills & expertise
│   ├── services/
│   │   └── page.js            # Professional services
│   ├── projects/
│   │   └── page.js            # Featured projects
│   ├── repositories/
│   │   └── page.js            # GitHub repositories
│   ├── blog/
│   │   ├── page.js            # Blog listing
│   │   └── [slug]/
│   │       └── page.js        # Individual blog posts
│   ├── experience/
│   │   └── page.js            # Work experience
│   ├── education/
│   │   └── page.js            # Education & certifications
│   ├── testimonials/
│   │   └── page.js            # Client testimonials
│   ├── contact/
│   │   └── page.js            # Contact form
│   ├── api/
│   │   └── [[...path]]/
│   │       └── route.js       # API endpoints
│   ├── layout.js              # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Layout components
│   └── shared/                # Shared components
├── lib/
│   └── utils.js               # Utility functions
└── public/                    # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Modern blue gradient
- **Secondary**: Complementary accent colors
- **Background**: Dynamic light/dark theme support
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable typography
- **Code**: Monospace for technical content

### Components
- **Cards**: Elevated surfaces with subtle shadows
- **Buttons**: Interactive with hover states
- **Forms**: Clean inputs with validation
- **Navigation**: Smooth transitions between pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amez-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   MONGO_URL=your_database_connection
   NEXT_PUBLIC_BASE_URL=your_domain_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build and Deployment

### Production Build
```bash
npm run build
npm start
```

### Static Export (Optional)
```bash
npm run build
npm run export
```

### Deployment Options
- **Vercel**: Optimal for Next.js applications
- **Netlify**: Static site deployment
- **AWS**: Full cloud deployment
- **Docker**: Containerized deployment

## 🔧 Configuration

### Theme Customization
Modify `tailwind.config.js` to customize:
- Color schemes
- Typography scales
- Spacing system
- Breakpoints

### Content Management
Update content in component files:
- `/app/*/page.js` - Page-specific content
- `/lib/data.js` - Centralized data management

## 📱 Features Overview

### Home Page
- Hero section with dynamic typing animation
- Professional statistics
- Quick navigation to key sections

### About Page
- Personal story and professional journey
- Technical interests and specializations
- Professional photo and contact information

### Skills Page
- Interactive skill progress bars
- Technology expertise levels
- Categorized technical competencies

### Projects Page
- Featured project showcase
- Technology stack highlights
- Live demo and source code links

### Blog System
- Technical blog posts
- Categorized content
- Professional imagery
- Reading time estimates

### Contact Integration
- Functional contact form
- API-powered message handling
- Professional contact information
- Social media links

## 🔒 Security

- **Form Validation**: Client and server-side validation
- **API Security**: Protected endpoints with error handling
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Built-in Next.js security features

## 🧪 Testing

### Running Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
- API endpoint testing
- Form validation testing
- Component rendering tests

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic bundle optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the incredible React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **shadcn/ui** - For the beautiful component library
- **Unsplash** - For high-quality professional imagery
- **Open Source Community** - For inspiration and continuous learning

## 📞 Contact

**Amez** - Full Stack Software Engineer
- Email: amez@example.com
- LinkedIn: [linkedin.com/in/amez](https://linkedin.com/in/amez)
- GitHub: [github.com/amez](https://github.com/amez)
- Portfolio: [amez.dev](https://amez.dev)

---

*Built with ❤️ using Next.js and modern web technologies*