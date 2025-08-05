import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'michelin',
    title: 'Michelin',
    subtitle: 'Social AOR',
    image: '/images/work-thumbnails/michelin.png',
  },
  {
    id: 'nutella',
    title: 'Nutella',
    subtitle: 'Social AOR',
    image: '/images/work-thumbnails/nutella.jpeg',
  },
  {
    id: 'ferrari-california-t',
    title: 'Ferrari',
    subtitle: 'California T Campaign',
    image: '/images/work-thumbnails/ferrari-california-t.jpeg',
  },
  {
    id: 'godiva',
    title: 'Godiva',
    subtitle: 'Holiday Campaign',
    image: '/images/work-thumbnails/godiva.jpeg',
  },
  {
    id: 'bfgoodrich-tires',
    title: 'BFGoodrich Tires',
    subtitle: 'Social AOR',
    image: '/images/work-thumbnails/bfgoodrich-tires.jpeg',
  },
  {
    id: 'oracle',
    title: 'Oracle',
    subtitle: 'Social AOR',
    image: '/images/work-thumbnails/oracle.png',
  },
  {
    id: 'ferrari-ferrari-does-it-again',
    title: 'Ferrari',
    subtitle: 'Ferrari Does It Again Campaign',
    image: '/images/work-thumbnails/ferrari-ferrari-does-it-again.jpeg',
  },
  {
    id: 'hugo-boss',
    title: 'Hugo Boss',
    subtitle: 'Global AOR',
    image: '/images/work-thumbnails/hugo-boss.png',
  },
  {
    id: 'scania',
    title: 'Scania',
    subtitle: 'Next Generation Scania Campaign',
    image: '/images/work-thumbnails/scania.jpeg',
  },
  {
    id: 'mcdonalds',
    title: 'McDonald\'s',
    subtitle: 'Food Vision Campaign',
    image: '/images/work-thumbnails/mcdonalds.jpeg',
  },
  {
    id: 'ferrari-458-moments',
    title: 'Ferrari',
    subtitle: '458 Moments Campaign',
    image: '/images/work-thumbnails/ferrari-458-moments.png',
  },
  {
    id: 'vaseline',
    title: 'Unilever Vaseline',
    subtitle: 'Global Brand Governance & Strategy',
    image: '/images/work-thumbnails/vaseline.png',
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
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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