import Link from 'next/link';

export default function ScaniaProject() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/work" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>
          
          {/* Project header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              Scania
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              "Next Generation Scania" Campaign
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive campaign launch for Scania's revolutionary new truck series, 
              highlighting breakthrough innovations in sustainability, efficiency, and driver experience.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-green-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🚚</div>
                <div className="text-2xl font-bold mb-2">Next Generation Scania</div>
                <div className="text-lg">Innovation in Motion</div>
              </div>
            </div>
          </div>
          
          {/* Innovation pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-green-200 text-sm leading-relaxed">
                Revolutionary eco-friendly technologies and fuel efficiency innovations for a greener future
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Efficiency</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Advanced engineering delivering superior performance and operational cost savings
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-3">Driver Experience</h3>
              <p className="text-orange-200 text-sm leading-relaxed">
                Enhanced comfort, safety, and connectivity features for the modern professional driver
              </p>
            </div>
          </div>
          
          {/* Campaign showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">📱</div>
                <div className="text-xs font-medium">Digital Launch</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">🎥</div>
                <div className="text-xs font-medium">Video Series</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">🌐</div>
                <div className="text-xs font-medium">Global Reach</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-xs font-medium">Data Insights</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-xs font-medium">B2B Focus</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">🚛</div>
                <div className="text-xs font-medium">Product Demo</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-xs font-medium">Partnership</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl mb-1">🎉</div>
                <div className="text-xs font-medium">Launch Event</div>
              </div>
            </div>
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Campaign Execution</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Global product launch strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">B2B content development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Technical demonstration videos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Trade show activations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Sustainability messaging</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Industry media relations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Customer testimonials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Fleet operator engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Multi-market coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/hugo-boss" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/mcdonalds" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              Next Project
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}