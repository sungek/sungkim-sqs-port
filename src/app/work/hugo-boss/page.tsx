import Link from 'next/link';

export default function HugoBossProject() {
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
              Hugo Boss
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Global Agency of Record
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive global social media strategy for Hugo Boss, elevating the luxury fashion brand's 
              digital presence while maintaining sophistication and style across all international markets.
            </p>
          </div>
          
          {/* Project showcase */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-3">👔</div>
                <div className="text-lg font-medium">Men's Fashion</div>
              </div>
            </div>
            
            <div className="aspect-[4/5] bg-gradient-to-br from-rose-800 to-rose-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-rose-100">
                <div className="text-5xl mb-3">👗</div>
                <div className="text-lg font-medium">Women's Fashion</div>
              </div>
            </div>
          </div>
          
          {/* Brand pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 text-white">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Luxury Heritage</h3>
              <p className="text-slate-300 text-sm">
                Showcasing the brand's rich history and commitment to premium craftsmanship
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 text-white">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-300 text-sm">
                Coordinating consistent messaging across diverse international markets
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg p-6 text-white">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Modern Sophistication</h3>
              <p className="text-blue-200 text-sm">
                Balancing timeless elegance with contemporary digital innovation
              </p>
            </div>
          </div>
          
          {/* Content showcase grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-xl mb-1">📸</div>
                  <div className="text-xs">Style {index}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Global Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Global brand strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Multi-market content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Fashion campaign coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Influencer & celebrity partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Fashion week activations</span>
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
                    <span className="text-gray-700">E-commerce integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Cross-platform optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Global performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Brand governance & compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/ferrari-ferrari-does-it-again" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/scania" 
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