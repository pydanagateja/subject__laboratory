import { Play } from 'lucide-react'

const VideoPlayer = ({ videoSrc, poster, title }) => {
  // Check if it's a YouTube URL
  const isYouTubeVideo = videoSrc && (
    videoSrc.includes('youtube.com') || 
    videoSrc.includes('youtu.be')
  )

  // Extract YouTube video ID
  const getYouTubeId = (url) => {
    if (!url) return null
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1]?.split('?')[0]
    }
    
    // Handle youtube.com/watch?v= format
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1])
      return urlParams.get('v')
    }
    
    // Handle youtube.com/embed/ format
    if (url.includes('youtube.com/embed/')) {
      return url.split('embed/')[1]?.split('?')[0]
    }
    
    return null
  }

  // YouTube video (check this FIRST)
  if (isYouTubeVideo) {
    const videoId = getYouTubeId(videoSrc)
    
    if (videoId) {
      return (
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title || 'Experiment Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    }
  }

  // Check if video source exists and is not placeholder
  const hasVideo = videoSrc && 
    videoSrc !== '/videos/experiment-01.mp4' && 
    videoSrc !== '/videos/experiment-02.mp4' &&
    videoSrc !== '/videos/experiment-03.mp4' &&
    videoSrc !== '/videos/experiment-04.mp4' &&
    videoSrc !== '/videos/experiment-05.mp4' &&
    videoSrc !== '/videos/experiment-06.mp4' &&
    videoSrc !== '/videos/experiment-07.mp4' &&
    videoSrc !== '/videos/experiment-08.mp4' &&
    videoSrc !== '/videos/experiment-09.mp4' &&
    videoSrc !== '/videos/experiment-10.mp4'

  // If no valid video
  if (!hasVideo) {
    return (
      <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex flex-col items-center justify-center text-white">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Play className="w-10 h-10" />
        </div>
        <h4 className="text-lg font-semibold mb-2">Experiment Overview Video</h4>
        <p className="text-sm text-gray-300">Video coming soon</p>
      </div>
    )
  }

  // Regular video file
  return (
    <video
      controls
      poster={poster}
      className="w-full rounded-lg shadow-lg"
      preload="metadata"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer
