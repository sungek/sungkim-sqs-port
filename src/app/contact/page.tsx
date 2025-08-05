export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-8">
              Get in touch.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Use the information below, connect with me on LinkedIn, or reach out directly via email.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email</h2>
                <a 
                  href="mailto:sungek@gmail.com"
                  className="text-lg text-gray-600 hover:text-gray-900 transition-colors inline-block group"
                >
                  sungek@gmail.com
                  <span className="block h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">LinkedIn</h2>
                <a 
                  href="https://linkedin.com/in/sungkim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-600 hover:text-gray-900 transition-colors inline-block group"
                >
                  Connect on LinkedIn
                  <span className="block h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I&apos;m always interested in discussing new opportunities, creative challenges, 
                and strategic partnerships. Whether you&apos;re looking for consultation, 
                collaboration, or just want to chat about the industry, feel free to reach out.
              </p>
              
              <div className="space-y-3 text-sm text-gray-500">
                <p>• Strategic consulting</p>
                <p>• Creative campaign development</p>
                <p>• Team building and leadership</p>
                <p>• Industry insights and trends</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-600">
              Based in <span className="font-medium">San Francisco Bay Area</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}