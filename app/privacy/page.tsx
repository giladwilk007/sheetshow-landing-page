import React from 'react'
import Link from 'next/link'
import { BarChart3, ArrowLeft } from 'lucide-react'

export default function Privacy() {
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
              Privacy Policy for SheetShow
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  This Privacy Policy describes how SheetShow ('we', 'us', or 'our') collects, uses, and discloses 
                  information when you use our Google Sheets add-on ('the App'). By using the App, you agree to the 
                  collection and use of information in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <p>
                  SheetShow does not collect or store personal information or Google Sheets content. The App only 
                  processes the data locally to present it in slideshow format. No data is transmitted to our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of Data</h2>
                <p>
                  The App processes your data locally to enable slideshow presentation of spreadsheet content. We do 
                  not use your data for any analytics, advertising, or third-party purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing of Information</h2>
                <p>
                  We do not share any user data with third parties. Your data remains within your Google environment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security</h2>
                <p>
                  We take reasonable precautions to protect your information within the scope of the App. Since data 
                  is not stored or transmitted, exposure risk is minimized.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
                <p>
                  Our App does not integrate with or share data with third-party services. Any interactions with 
                  external services (such as Google APIs) are governed by Google's privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p>
                  SheetShow is not intended for use by individuals under the age of 13. We do not knowingly collect 
                  personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. You are advised to review this page periodically 
                  for any changes. Continued use of the App after changes indicates acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
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