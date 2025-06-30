import React from 'react'
import Link from 'next/link'
import { BarChart3, ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SheetShow</span>
            </Link>
            <Link href="/" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Terms and Conditions for SheetShow
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the SheetShow application, you agree to be bound by these Terms and Conditions. 
                  If you do not agree with any part of the terms, you must not use the application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p>
                  SheetShow is a Google Sheets add-on that enables users to present data from spreadsheets in a live 
                  slideshow format. The application may evolve and new features may be introduced at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Conduct</h2>
                <p>
                  You agree to use SheetShow only for lawful purposes and in a way that does not infringe the rights 
                  of others or restrict their use and enjoyment of the application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Privacy Policy</h2>
                <p>
                  Your use of SheetShow is also governed by our <Link href="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link>, 
                  which outlines how we collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Continued use of the 
                  application after changes constitutes your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to SheetShow if you violate any of these 
                  Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p>
                  SheetShow is provided 'as is' without warranties of any kind. We are not liable for any damages 
                  resulting from the use or inability to use the application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, you may contact us at{' '}
                  <a href="mailto:giladwilk1@gmail.com" className="text-primary-600 hover:text-primary-700">
                    giladwilk1@gmail.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 