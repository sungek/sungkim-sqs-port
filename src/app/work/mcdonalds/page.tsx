import Link from 'next/link';

export default function McDonaldsProject() {
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
              McDonald's
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              "Food Vision" Campaign
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strategic campaign showcasing McDonald's commitment to quality ingredients, 
              sustainability, and food innovation while celebrating the joy of shared meals and community connections.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🍟</div>
                <div className="text-2xl font-bold mb-2">McDonald's Food Vision</div>
                <div className="text-lg">Quality. Community. Joy.</div>
              </div>
            </div>
          </div>
          
          {/* Campaign pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-red-200 text-sm">
                Fresh, high-quality ingredients and improved recipes
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-green-200 text-sm">
                Responsible sourcing and environmental stewardship
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-yellow-200 text-sm">
                Bringing families and friends together through food
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-orange-200 text-sm">
                Embracing new technologies and menu innovations
              </p>
            </div>
          </div>
          
          {/* Content showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="aspect-square bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🍔</div>
                <div className="text-lg font-medium">Product Focus</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                <div className="text-lg font-medium">Family Moments</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🌾</div>
                <div className="text-lg font-medium">Farm to Table</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-lg font-medium">Digital Innovation</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🎉</div>
                <div className="text-lg font-medium">Joy & Celebration</div>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🌍</div>
                <div className="text-lg font-medium">Global Impact</div>
              </div>
            </div>
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Campaign Elements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Brand storytelling & messaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Food photography & videography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Sustainability communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Community engagement campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Nutritional transparency</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Digital experience optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Influencer partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Social media activations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Consumer education initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Performance measurement & optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/scania" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/ferrari-458-moments" 
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