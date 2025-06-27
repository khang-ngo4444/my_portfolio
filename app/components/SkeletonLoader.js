'use client';

export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="persona-card p-6 rounded-xl skeleton-shimmer bg-gray-800/60 skeleton-glow">
        <div className="h-4 bg-gray-600/80 rounded w-3/4 mb-4 skeleton-enhanced"></div>
        <div className="h-3 bg-gray-600/80 rounded w-1/2 mb-3 skeleton-enhanced"></div>
        <div className="h-3 bg-gray-600/80 rounded w-full mb-2 skeleton-enhanced"></div>
        <div className="h-3 bg-gray-600/80 rounded w-5/6 skeleton-enhanced"></div>
      </div>
    </div>
  );
}

export function SkeletonProject() {
  return (
    <div className="animate-pulse">
      <div className="persona-card p-6 rounded-xl skeleton-shimmer bg-gray-800/60 skeleton-glow">
        <div className="w-full h-48 bg-gray-600/80 rounded-lg mb-4 skeleton-persona"></div>
        <div className="h-5 bg-gray-600/80 rounded w-3/4 mb-3 skeleton-enhanced"></div>
        <div className="h-3 bg-gray-600/80 rounded w-full mb-2 skeleton-enhanced"></div>
        <div className="h-3 bg-gray-600/80 rounded w-4/5 mb-4 skeleton-enhanced"></div>
        <div className="flex gap-2">
          <div className="h-8 bg-gray-600/80 rounded-full w-24 skeleton-enhanced"></div>
          <div className="h-8 bg-gray-600/80 rounded-full w-20 skeleton-enhanced"></div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonSkill() {
  return (
    <div className="animate-pulse">
      <div className="persona-card p-6 rounded-xl text-center skeleton-shimmer bg-gray-800/60 skeleton-glow">
        <div className="w-12 h-12 bg-gray-600/80 rounded-full mx-auto mb-4 skeleton-persona"></div>
        <div className="h-5 bg-gray-600/80 rounded w-2/3 mx-auto mb-2 skeleton-enhanced"></div>
        <div className="h-3 bg-gray-600/80 rounded w-4/5 mx-auto skeleton-enhanced"></div>
      </div>
    </div>
  );
}

export function SkeletonExperience() {
  return (
    <div className="animate-pulse">
      <div className="persona-card p-8 rounded-xl mb-6 skeleton-shimmer bg-gray-800/60 skeleton-glow">
        <div className="h-6 bg-gray-600/80 rounded w-1/2 mb-3 skeleton-enhanced"></div>
        <div className="h-4 bg-gray-600/80 rounded w-3/4 mb-3 skeleton-enhanced"></div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-600/80 rounded w-full skeleton-enhanced"></div>
          <div className="h-3 bg-gray-600/80 rounded w-5/6 skeleton-enhanced"></div>
          <div className="h-3 bg-gray-600/80 rounded w-4/5 skeleton-enhanced"></div>
        </div>
        <div className="h-4 bg-gray-600/80 rounded w-full skeleton-enhanced"></div>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="animate-pulse min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <div className="persona-card p-8 rounded-2xl mb-8 lg:mb-0 skeleton-shimmer bg-gray-800/60 skeleton-glow">
              <div className="h-16 bg-gray-600/80 rounded w-4/5 mb-4 skeleton-enhanced"></div>
              <div className="h-12 bg-gray-600/80 rounded w-3/4 mb-6 skeleton-enhanced"></div>
              <div className="h-6 bg-gray-600/80 rounded w-full mb-2 skeleton-enhanced"></div>
              <div className="h-6 bg-gray-600/80 rounded w-5/6 mb-8 skeleton-enhanced"></div>
              <div className="h-12 bg-gray-600/80 rounded-full w-48 skeleton-persona"></div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gray-600/80 skeleton-persona skeleton-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonContact() {
  return (
    <div className="animate-pulse py-24 text-center">
      <div className="skeleton-shimmer bg-gray-800/60 skeleton-glow p-8 rounded-xl">
        <div className="h-16 bg-gray-600/80 rounded w-2/3 mx-auto mb-4 skeleton-enhanced"></div>
        <div className="h-8 bg-gray-600/80 rounded w-1/2 mx-auto mb-4 skeleton-enhanced"></div>
        <div className="h-6 bg-gray-600/80 rounded w-3/4 mx-auto mb-2 skeleton-enhanced"></div>
        <div className="h-6 bg-gray-600/80 rounded w-2/3 mx-auto mb-12 skeleton-enhanced"></div>
        <div className="flex justify-center space-x-6">
          <div className="w-16 h-16 bg-gray-600/80 rounded-full skeleton-persona"></div>
          <div className="w-16 h-16 bg-gray-600/80 rounded-full skeleton-persona"></div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonNavbar() {
  return (
    <div className="animate-pulse fixed top-0 w-full z-50 p-4">
      <div className="flex justify-between items-center bg-gray-800/60 backdrop-blur-md rounded-lg p-4 skeleton-glow">
        <div className="h-8 bg-gray-600/80 rounded w-32 skeleton-enhanced"></div>
        <div className="hidden md:flex space-x-8">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="h-6 bg-gray-600/80 rounded w-16 skeleton-enhanced"></div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="h-8 w-8 bg-gray-600/80 rounded skeleton-enhanced"></div>
        </div>
      </div>
    </div>
  );
}

export default function SkeletonLoader({ type = 'card', count = 1 }) {
  const components = {
    card: SkeletonCard,
    project: SkeletonProject,
    skill: SkeletonSkill,
    experience: SkeletonExperience,
    hero: SkeletonHero,
    contact: SkeletonContact,
    navbar: SkeletonNavbar,
  };

  const Component = components[type] || SkeletonCard;

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Component key={i} />
      ))}
    </>
  );
}
