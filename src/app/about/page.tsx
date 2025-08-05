import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-12">
              I Am A:
            </h1>
            
            <div className="space-y-8 text-lg md:text-xl text-black leading-relaxed">
              <div>
                <strong>Shipper</strong>
                <br />
                I like putting great work into the world.
              </div>
              
              <div className="text-2xl font-light text-black">
                –
              </div>
              
              <div>
                <strong>Hustler at heart</strong>
                <br />
                I started a social network when I was 16, led it and sold it.
              </div>
              
              <div className="text-2xl font-light text-black">
                –
              </div>
              
              <div>
                <strong>Team builder</strong>
                <br />
                I believe in finding and developing top talent.
              </div>
              
              <div className="text-2xl font-light text-black">
                –
              </div>
              
              <div>
                <strong>Ambidextrous thinker</strong>
                <br />
                I enjoy using both sides of my brain.
              </div>
              
              <div className="text-2xl font-light text-black">
                –
              </div>
              
              <div className="pt-8">
                Have more questions? <Link href="/contact" className="underline hover:no-underline">Ask me anything</Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}