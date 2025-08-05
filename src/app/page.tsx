import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-black">
              Hello. I&apos;m Sung.
            </h1>
            
            <div className="text-2xl font-light text-black mb-8">
              –
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto">
              <p>
                I&apos;m a creative strategist with a full-stack marketing background in social, digital and brand planning. For over fifteen years, I&apos;ve been developing and engaging communities in areas that I&apos;m really passionate about. Currently, I&apos;m a Vice President/Group Director at Digitas in Chicago, leading the overall Social Strategy capability.
              </p>
              
              <p>
                Previously, I helped build and lead teams at Weber Shandwick and SapientRazorfish. I&apos;ve worked with some of the biggest brands in the world to help them develop strategy, create award-winning campaigns and distribute content via organic channels, paid media and influencers.
              </p>
              
              <p>
                Additionally, I&apos;ve led marketing efforts for world-famous music producers, bands and DJs and was the founder of an automotive community startup that was eventually acquired by Internet Brands, Inc.
              </p>
              
              <p>
                Please feel free to check out some of the <Link href="/work" className="underline hover:no-underline">projects</Link> I&apos;ve been a part of, learn a few more things <Link href="/about" className="underline hover:no-underline">about me</Link> and <Link href="/contact" className="underline hover:no-underline">get in touch</Link> if you are interested in working together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
