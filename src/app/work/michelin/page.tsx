import Link from 'next/link';

export default function MichelinProject() {
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
              Michelin
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              What drives you? Passion. Caring. Pursuits.
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Social AOR for Michelin North America, developing comprehensive social media strategies 
              that connect with automotive enthusiasts and everyday drivers alike.
            </p>
          </div>
          
          {/* Project image */}
          <div className="mb-16">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🚗</div>
                <div className="text-xl font-medium">Michelin Campaign Visual</div>
                <div className="text-sm">High-quality campaign imagery would be displayed here</div>
              </div>
            </div>
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Scope</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Overall strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Content development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Campaign ideation & execution</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Community management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Paid media distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Influencer partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation to next project */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work" 
              className="text-gray-600 hover:text-gray-900 transition-colors underline-animation"
            >
              All Projects
            </Link>
            
            <Link 
              href="/work/nutella" 
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