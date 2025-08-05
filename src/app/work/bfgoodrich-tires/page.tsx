import Link from 'next/link';

export default function BFGoodrichTiresProject() {
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
              BFGoodrich Tires
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Social Agency of Record
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive social media strategy for BFGoodrich Tires, connecting with driving enthusiasts 
              and everyday consumers through authentic storytelling about performance, durability, and adventure.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-red-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏁</div>
                <div className="text-2xl font-bold mb-2">BFGoodrich Tires</div>
                <div className="text-lg">Performance That Delivers</div>
              </div>
            </div>
          </div>
          
          {/* Campaign highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 text-white">
              <div className="text-3xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">Performance Focus</h3>
              <p className="text-slate-300 text-sm">
                Showcasing tire performance in racing, off-road, and everyday driving scenarios
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-lg p-6 text-white">
              <div className="text-3xl mb-4">🛣️</div>
              <h3 className="text-xl font-semibold mb-2">Adventure Ready</h3>
              <p className="text-red-300 text-sm">
                Highlighting durability and reliability for all road conditions and adventures
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-lg p-6 text-white">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-orange-300 text-sm">
                Engaging automotive enthusiasts and building loyalty through shared experiences
              </p>
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
                    <span className="text-gray-700">Social media strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Content creation & curation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Community management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Racing event coverage</span>
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
                    <span className="text-gray-700">Performance analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Crisis management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Paid social media optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/godiva" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/oracle" 
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