import Link from 'next/link';

export default function FerrariDoesItAgainProject() {
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
              Ferrari
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              "Ferrari Does It Again" Campaign
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Integrated global campaign celebrating Ferrari's continuous innovation and racing heritage. 
              A tribute to the brand's relentless pursuit of excellence and their ability to consistently exceed expectations.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-red-900 via-black to-red-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏆</div>
                <div className="text-2xl font-bold mb-2">Ferrari Does It Again</div>
                <div className="text-lg">Excellence Redefined</div>
              </div>
            </div>
          </div>
          
          {/* Campaign pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-xl font-bold mb-3">Racing Heritage</h3>
              <p className="text-red-200 text-sm leading-relaxed">
                Celebrating decades of Formula 1 dominance and motorsport innovation that continues to push boundaries
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Showcasing cutting-edge technology and engineering prowess that sets new industry standards
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6 text-white">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-yellow-200 text-sm leading-relaxed">
                Demonstrating the unwavering commitment to perfection in every detail and experience
              </p>
            </div>
          </div>
          
          {/* Campaign visuals grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-red-900 to-black rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">🎬</div>
                  <div className="text-xs font-medium">Visual {index}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Campaign scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Campaign Execution</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Global campaign strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Multi-platform content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Video production & storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Heritage brand positioning</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Influencer partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Event marketing integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Digital activation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Performance measurement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/oracle" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/hugo-boss" 
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