import Link from 'next/link';

export default function Ferrari458MomentsProject() {
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
              "458 Moments" Campaign
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Intimate campaign capturing the emotional connection between drivers and the iconic Ferrari 458. 
              Celebrating the pure, unfiltered moments of automotive passion and the joy of driving perfection.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-red-800 via-gray-900 to-yellow-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏎️</div>
                <div className="text-2xl font-bold mb-2">Ferrari 458 Moments</div>
                <div className="text-lg">Pure Driving Emotion</div>
              </div>
            </div>
          </div>
          
          {/* Moment types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🌅</div>
              <h3 className="text-lg font-semibold mb-2">Dawn Drives</h3>
              <p className="text-red-200 text-sm">
                First light, empty roads, pure connection
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="text-lg font-semibold mb-2">Mountain Passes</h3>
              <p className="text-orange-200 text-sm">
                Winding roads, breathtaking views, driving poetry
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🏁</div>
              <h3 className="text-lg font-semibold mb-2">Track Days</h3>
              <p className="text-gray-200 text-sm">
                Unleashing potential, pushing limits, racing heritage
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-lg font-semibold mb-2">Golden Hour</h3>
              <p className="text-yellow-200 text-sm">
                Perfect light, perfect machine, perfect moment
              </p>
            </div>
          </div>
          
          {/* Visual storytelling grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div key={index} className="aspect-square bg-gradient-to-br from-red-800 to-black rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-lg mb-1">📷</div>
                  <div className="text-xs">Moment {index}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Campaign essence */}
          <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">The Essence of 458</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600 text-sm">
                  The emotional bond between driver and machine, captured in authentic moments
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600 text-sm">
                  Raw power and precision engineering experienced in real-world scenarios
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Artistry</h3>
                <p className="text-gray-600 text-sm">
                  Visual storytelling that elevates automotive photography to fine art
                </p>
              </div>
            </div>
          </div>
          
          {/* Project scope */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Creative Execution</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Cinematic photography & videography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Emotional storytelling approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Location scouting & planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Driver testimonials & experiences</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Social media content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Print & digital asset development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Event documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">Brand heritage integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link 
              href="/work/mcdonalds" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            
            <Link 
              href="/work/vaseline" 
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