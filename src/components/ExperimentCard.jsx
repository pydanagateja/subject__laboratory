import { Link } from 'react-router-dom'
import { ArrowRight, Play, Layers } from 'lucide-react'

const ExperimentCard = ({ experiment }) => {
  const subExpCount = experiment.subExperiments?.length || 0

  return (
    <div className="card p-6 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
      {/* Experiment Number */}
      <div className="flex items-center justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold">
          EXPERIMENT {experiment.number}
        </span>
        {subExpCount > 0 && (
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Layers className="w-3 h-3" />
            {subExpCount} Sub-Exp
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
        {experiment.title}
      </h3>

      {/* Video Preview with YouTube Thumbnail - Clickable */}
      {experiment.video && (() => {
        // Extract YouTube video ID
        let videoId = '';
        try {
          const url = new URL(experiment.video);
          if (url.hostname.includes('youtube.com')) {
            videoId = url.searchParams.get('v');
          } else if (url.hostname.includes('youtu.be')) {
            videoId = url.pathname.slice(1);
          }
        } catch (e) {
          console.error('Invalid video URL:', experiment.video);
        }

        const thumbnailUrl = videoId 
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : null;

        return (
          <Link 
            to={`/experiments/${experiment.id}`}
            className="mb-4 rounded-lg aspect-video flex items-center justify-center group relative overflow-hidden cursor-pointer"
            style={thumbnailUrl ? {
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            } : {}}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
            
            {/* Play Button */}
            <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
            </div>
            
            {/* Click to Watch Badge */}
            <span className="absolute bottom-3 right-3 text-xs bg-blue-600 text-white px-3 py-1 rounded-full group-hover:bg-blue-700 transition-colors font-medium shadow-md">
              Click to Watch
            </span>
          </Link>
        );
      })()}

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
        {experiment.shortDescription}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experiment.technologies?.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
        {experiment.technologies?.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
            +{experiment.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Real-world Application */}
      {experiment.realWorldApplication && (
        <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded">
          <p className="text-xs text-gray-700">
            <span className="font-semibold text-green-700">Real-world: </span>
            {experiment.realWorldApplication.slice(0, 100)}
            {experiment.realWorldApplication.length > 100 ? '...' : ''}
          </p>
        </div>
      )}

      {/* View Button */}
      <Link
        to={`/experiments/${experiment.id}`}
        className="mt-auto btn-primary w-full justify-center"
      >
        View Experiment
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

export default ExperimentCard
