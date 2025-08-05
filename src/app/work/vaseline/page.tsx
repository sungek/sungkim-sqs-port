import Link from 'next/link';

export default function VaselineProject() {
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
              Unilever Vaseline
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Global Brand Governance & Strategy
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive global brand governance and strategic oversight for Vaseline, 
              ensuring consistent messaging and brand integrity across 190+ markets while driving innovation and growth.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🌍</div>
                <div className="text-2xl font-bold mb-2">Vaseline Global</div>
                <div className="text-lg">Healing Wonder for All</div>
              </div>
            </div>
          </div>
          
          {/* Global scope */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-blue-200 text-sm">
                190+ markets worldwide with localized strategies
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Brand Governance</h3>
              <p className="text-teal-200 text-sm">
                Consistent brand standards and messaging guidelines
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-green-200 text-sm">
                New product development and market expansion
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-purple-200 text-sm">
                Data-driven insights and performance optimization
              </p>
            </div>
          </div>
          
          {/* Brand pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6">
              <div className="text-3xl mb-4 text-blue-800">🤲</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Healing Wonder</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Celebrating the trusted healing properties that have made Vaseline a household staple for over 150 years
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg p-6">
              <div className="text-3xl mb-4 text-teal-800">❤️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-3">Care & Protection</h3>
              <p className="text-teal-800 text-sm leading-relaxed">
                Demonstrating gentle, effective care for all skin types and conditions across diverse global markets
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6">
              <div className="text-3xl mb-4 text-green-800">🌟</div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Universal Trust</h3>
              <p className="text-green-800 text-sm leading-relaxed">
                Building on the universal trust and recognition that makes Vaseline the world's most beloved skincare brand
              </p>
            </div>
          </div>
          
          {/* Regional showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
            {['Americas', 'Europe', 'Asia Pacific', 'Africa', 'Middle East', 'India'].map((region, index) => (
              <div key={region} className={`aspect-square bg-gradient-to-br ${
                ['from-blue-500 to-blue-600', 'from-green-500 to-green-600', 'from-purple-500 to-purple-600', 
                 'from-orange-500 to-orange-600', 'from-red-500 to-red-600', 'from-teal-500 to-teal-600'][index]
              } rounded-lg flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-lg mb-1">🌍</div>
                  <div className="text-xs font-medium">{region}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Strategic Responsibilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Global brand architecture & positioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Brand governance framework development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Cross-market strategy coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Innovation pipeline management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Global campaign oversight</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Market research & consumer insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Regulatory compliance coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Partnership & licensing management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Performance measurement & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Crisis management & communications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/ferrari-458-moments" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work" 
              className="text-gray-600 hover:text-gray-900 transition-colors underline-animation"
            >
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}