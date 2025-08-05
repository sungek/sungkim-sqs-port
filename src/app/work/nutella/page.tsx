import Link from 'next/link';

export default function NutellaProject() {
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
              Nutella
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Spread the happy. Every day.
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Social Agency of Record for Nutella USA, creating engaging content that brings 
              joy and sweetness to everyday moments while building authentic brand connections.
            </p>
          </div>
          
          {/* Project images grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg flex items-center justify-center">
              <div className="text-center text-orange-800">
                <div className="text-5xl mb-3">🥜</div>
                <div className="text-lg font-medium">Social Content</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg flex items-center justify-center">
              <div className="text-center text-amber-800">
                <div className="text-5xl mb-3">📱</div>
                <div className="text-lg font-medium">Campaign Assets</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg flex items-center justify-center">
              <div className="text-center text-yellow-800">
                <div className="text-5xl mb-3">🎨</div>
                <div className="text-lg font-medium">Creative Executions</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-red-200 to-red-400 rounded-lg flex items-center justify-center">
              <div className="text-center text-red-800">
                <div className="text-5xl mb-3">✨</div>
                <div className="text-lg font-medium">Brand Moments</div>
              </div>
            </div>
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services Provided</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Content development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Community management</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Paid media distribution consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Influencer partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/michelin" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/ferrari-california-t" 
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