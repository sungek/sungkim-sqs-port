import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-black">
              Hi, I&apos;m Sung.
            </h1>
            
            <div className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
              <p>
                I&apos;m a creative strategist with 15+ years of marketing experience, 
                currently VP/Group Director at Digitas.
              </p>
              
              <p>
                I&apos;ve worked with major brands across marketing, music, and automotive industries. 
                I started a social network at 16 and sold it. I believe in shipping great work, 
                building incredible teams, and using both sides of my brain.
              </p>
              
              <p>
                <Link href="/work" className="underline hover:no-underline">
                  Take a look at my work
                </Link> or <Link href="/contact" className="underline hover:no-underline">
                  reach out
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
