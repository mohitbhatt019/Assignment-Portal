// components/SkeletonLoader.js

export default function SkeletonLoader() {
    return (
      <div className="animate-pulse bg-gray-300 rounded-lg shadow-md p-6">
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mb-6"></div>
        <div className="h-8 bg-gray-400 rounded w-full"></div>
      </div>
    );
  }
  