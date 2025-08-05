import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
              Hi, I&apos;m Sung.
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <p>
                I&apos;m a creative strategist with 15+ years of marketing experience, 
                currently VP/Group Director at Digitas.
              </p>
              
              <p>
                I&apos;ve worked with major brands across marketing, music, and automotive industries, 
                focusing on strategic campaigns that drive meaningful results.
              </p>
              
              <p>
                My approach combines analytical thinking with creative vision to develop 
                strategies that resonate with audiences and deliver business impact.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link 
              href="/work" 
              className="px-8 py-3 bg-black text-white font-medium tracking-wide transition-all hover:bg-gray-800 hover:scale-105"
            >
              View My Work
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium tracking-wide transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
