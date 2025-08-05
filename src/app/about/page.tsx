import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-8">
              About
            </h1>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">Shipper</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Focused on executing and delivering work. I believe in getting things done 
                    and turning ideas into reality through systematic execution and attention to detail.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">Hustler</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Started a social network at age 16 and successfully sold the project. 
                    This early entrepreneurial experience shaped my approach to innovation and business development.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">Team Builder</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Prioritizes hiring top talent and developing high-performing teams. 
                    I believe great work comes from great people working together toward shared goals.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">Ambidextrous Thinker</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Values using both analytical and creative sides of the brain. 
                    I combine data-driven insights with creative vision to develop comprehensive strategies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-12 border-t border-gray-200">
              <p className="text-xl text-gray-600 mb-8">
                Action-oriented professional with entrepreneurial background and emphasis on 
                team development and performance.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-black text-white font-medium tracking-wide transition-all hover:bg-gray-800 hover:scale-105"
              >
                Ask Me Anything
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}