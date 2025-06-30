import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Download, Star, Users, Zap, Shield, BarChart3, Chrome, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react'

// Product Carousel Component
function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Google Sheets Integration",
      description: "Seamlessly works within your existing Google Sheets workflow",
      image: "/api/placeholder/800/500",
      features: ["One-click activation", "Preserves your data", "No setup required"]
    },
    {
      title: "Beautiful Slideshows",
      description: "Transform spreadsheet rows into stunning presentation cards",
      image: "/api/placeholder/800/500", 
      features: ["Card-based layout", "Professional design", "Real-time updates"]
    },
    {
      title: "Smart Filtering",
      description: "Filter and organize your data for focused presentations",
      image: "/api/placeholder/800/500",
      features: ["Dynamic filters", "Custom grouping", "Easy navigation"]
    },
    {
      title: "Customizable Views",
      description: "Choose columns, layout, and styling to match your needs",
      image: "/api/placeholder/800/500",
      features: ["Column selection", "Layout options", "Custom styling"]
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {slide.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {slide.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <a 
                      href={process.env.NEXT_PUBLIC_CHROME_STORE_URL || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center btn-primary"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Try It Now
                    </a>
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center border border-primary-200">
                    <div className="text-center p-8">
                      <BarChart3 className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <p className="text-primary-700 font-medium">{slide.title}</p>
                      <p className="text-primary-600 text-sm mt-2">Screenshot Preview</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-300 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-primary-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SheetShow</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/terms" className="text-gray-500 hover:text-primary-600 transition-colors">Terms</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors">Privacy</Link>
              </div>
              <a 
                href={process.env.NEXT_PUBLIC_CHROME_STORE_URL || "#download"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Add to Chrome
              </a>
            </nav>
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
                <Chrome className="w-4 h-4 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-primary-700">Chrome Extension</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Supercharge Your
                <span className="text-primary-600 block">Google Sheets</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your spreadsheet experience with powerful visualization tools, enhanced productivity features, and seamless integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={process.env.NEXT_PUBLIC_CHROME_STORE_URL || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Add to Chrome - Free
                </a>
{/* User rating - hidden until we have real reviews
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-1 mr-3">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 from 10,000+ users</span>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See SheetShow in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your Google Sheets data into beautiful, interactive presentations with just a few clicks.
            </p>
          </div>
          
          <ProductCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to excel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your Google Sheets experience more productive and enjoyable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Advanced Visualizations",
                description: "Create stunning charts and graphs with one click. Transform raw data into beautiful, interactive visualizations."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed and performance. Process large datasets without slowing down your browser."
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your data never leaves your browser. We prioritize your privacy and security above all else."
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Enhanced sharing and collaboration features to work seamlessly with your team members."
              },
              {
                icon: Chrome,
                title: "Chrome Integration",
                description: "Seamlessly integrates with Google Sheets. No setup required - just install and go."
              },
              {
                icon: Star,
                title: "Premium Support",
                description: "Get help when you need it with our responsive customer support team."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 
      Testimonials Section - HIDDEN FOR NOW (will be re-enabled when real reviews are available)
      
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by thousands of users
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say about SheetShow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Data Analyst",
                content: "SheetShow has completely transformed how I work with Google Sheets. The visualization tools are incredible!",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Project Manager",
                content: "Our team's productivity has increased by 40% since we started using SheetShow. Highly recommended!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director",
                content: "The best Chrome extension for Google Sheets. Clean interface, powerful features, and great support.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section id="download" className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to supercharge your sheets?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their Google Sheets experience with SheetShow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={process.env.NEXT_PUBLIC_CHROME_STORE_URL || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Add to Chrome - It's Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          <p className="text-primary-200 text-sm mt-4">
            No credit card required • Install in seconds • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SheetShow</span>
              </div>
              <p className="text-gray-400">
                The ultimate Chrome extension for Google Sheets power users.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SheetShow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 