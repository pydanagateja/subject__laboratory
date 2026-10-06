import ExperimentCard from './ExperimentCard'

const ExperimentGrid = ({ experiments }) => {
  if (experiments.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-block p-8 bg-gray-100 rounded-full mb-4">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No experiments found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {experiments.map((experiment) => (
        <ExperimentCard key={experiment.id} experiment={experiment} />
      ))}
    </div>
  )
}

export default ExperimentGrid
