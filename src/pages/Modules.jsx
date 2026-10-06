import { Link } from 'react-router-dom'
import { FileText, ArrowRight, BookOpen } from 'lucide-react'
import modulesData from '../data/modules.json'

const Modules = () => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  }

  const bgColorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50',
    red: 'bg-red-50'
  }

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Data Science Modules
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore the complete Data Science syllabus organized into 5 comprehensive modules
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesData.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Module Image */}
                {module.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-full text-sm font-bold shadow-lg">
                        MODULE {module.number}
                      </span>
                    </div>
                    {module.periods && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-full text-xs font-bold shadow-lg">
                          {module.periods} Periods
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Module Header with Gradient */}
                <div className={`bg-gradient-to-r ${colorClasses[module.color]} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold opacity-90">
                      {module.number}
                    </span>
                    <span className="text-4xl">{module.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    {module.title}
                  </h3>
                </div>

                {/* Module Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {module.description}
                  </p>

                  {/* Topics Count */}
                  <div className={`${bgColorClasses[module.color]} rounded-lg p-3 mb-4`}>
                    <div className="flex items-center gap-2">
                      <BookOpen className={`w-5 h-5 ${iconColorClasses[module.color]}`} />
                      <span className={`text-sm font-semibold ${iconColorClasses[module.color]}`}>
                        {module.topicsCount} Topics Covered
                      </span>
                    </div>
                  </div>

                  {/* PDF Button */}
                  <div className="mb-4">
                    <Link
                      to={`/modules/${module.id}`}
                      className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${colorClasses[module.color]} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
                    >
                      <FileText className="w-4 h-4" />
                      Open Module PDF
                    </Link>
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/modules/${module.id}`}
                    className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Module Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              About the Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">📚 Comprehensive Coverage</h3>
                <p className="text-sm">
                  Each module covers essential Data Science topics with detailed explanations, 
                  code examples, and practical applications.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📄 PDF Resources</h3>
                <p className="text-sm">
                  Access detailed PDF materials for each module with complete lecture notes, 
                  diagrams, and reference materials.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">🎯 Structured Learning</h3>
                <p className="text-sm">
                  Follow the modules in sequence for a structured learning path from 
                  basics to advanced Data Science concepts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">💻 Hands-on Practice</h3>
                <p className="text-sm">
                  Each module is linked to practical experiments where you can apply 
                  the concepts through coding exercises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Modules
