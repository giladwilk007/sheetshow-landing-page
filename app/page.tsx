import React from 'react'
import Link from 'next/link'
import { Download, Star, Users, Zap, Shield, BarChart3, Chrome, ArrowRight } from 'lucide-react'

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
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Reviews</a>
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
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex -space-x-1 mr-3">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 from 10,000+ users</span>
                </div>
              </div>
            </div>
          </div>
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

      {/* Testimonials Section */}
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