import Link from 'next/link';

const projects = [
  {
    id: 'michelin',
    title: 'Michelin',
    subtitle: 'Social AOR',
    image: '/projects/michelin-thumb.jpg',
  },
  {
    id: 'nutella',
    title: 'Nutella',
    subtitle: 'Social AOR',
    image: '/projects/nutella-thumb.jpg',
  },
  {
    id: 'ferrari-california-t',
    title: 'Ferrari',
    subtitle: 'California T Campaign',
    image: '/projects/ferrari-california-thumb.jpg',
  },
  {
    id: 'godiva',
    title: 'Godiva',
    subtitle: 'Holiday Campaign',
    image: '/projects/godiva-thumb.jpg',
  },
  {
    id: 'bfgoodrich-tires',
    title: 'BFGoodrich Tires',
    subtitle: 'Social AOR',
    image: '/projects/bfgoodrich-thumb.jpg',
  },
  {
    id: 'oracle',
    title: 'Oracle',
    subtitle: 'Social AOR',
    image: '/projects/oracle-thumb.jpg',
  },
  {
    id: 'ferrari-ferrari-does-it-again',
    title: 'Ferrari',
    subtitle: 'Ferrari Does It Again Campaign',
    image: '/projects/ferrari-again-thumb.jpg',
  },
  {
    id: 'hugo-boss',
    title: 'Hugo Boss',
    subtitle: 'Global AOR',
    image: '/projects/hugo-boss-thumb.jpg',
  },
  {
    id: 'scania',
    title: 'Scania',
    subtitle: 'Next Generation Scania Campaign',
    image: '/projects/scania-thumb.jpg',
  },
  {
    id: 'mcdonalds',
    title: 'McDonald\'s',
    subtitle: 'Food Vision Campaign',
    image: '/projects/mcdonalds-thumb.jpg',
  },
  {
    id: 'ferrari-458-moments',
    title: 'Ferrari',
    subtitle: '458 Moments Campaign',
    image: '/projects/ferrari-458-thumb.jpg',
  },
  {
    id: 'vaseline',
    title: 'Unilever Vaseline',
    subtitle: 'Global Brand Governance & Strategy',
    image: '/projects/vaseline-thumb.jpg',
  },
];

export default function WorkPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-8">
            Select Client Work.
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group block bg-white overflow-hidden transition-all duration-300 hover:opacity-75"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📸</div>
                    <div className="text-sm font-medium">{project.title}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-black mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}