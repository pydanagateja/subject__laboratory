import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, FileText, Download, Eye, Target, CheckCircle2 } from 'lucide-react'
import modulesData from '../data/modulesWithSubtopics.json'

const ModuleDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const module = modulesData.find(m => m.id === parseInt(id))

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h2>
          <Link to="/modules" className="text-blue-600 hover:underline">
            ← Back to Modules
          </Link>
        </div>
      </div>
    )
  }

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

  const borderColorClasses = {
    blue: 'border-blue-200 hover:border-blue-300',
    green: 'border-green-200 hover:border-green-300',
    purple: 'border-purple-200 hover:border-purple-300',
    orange: 'border-orange-200 hover:border-orange-300',
    red: 'border-red-200 hover:border-red-300'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={`bg-gradient-to-r ${colorClasses[module.color]} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/modules')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to All Modules
          </button>
          
          <div className="flex items-start gap-8">
            <div className="text-7xl">{module.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold opacity-90 mb-2 uppercase tracking-wide">
                Module {module.number}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {module.title}
              </h1>
              <p className="text-xl text-white/95 leading-relaxed mb-6">
                {module.detailedDescription}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <BookOpen className="w-4 h-4" />
                  <span>{module.subtopics.length} Subtopics</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FileText className="w-4 h-4" />
                  <span>{module.periods} Class Periods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-12 bg-white border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[module.color]} flex items-center justify-center`}>
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Learning Objectives</h2>
          </div>
          <p className="text-gray-600 mb-6">After completing this module, you will be able to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {module.learningObjectives.map((objective, index) => (
              <div 
                key={index}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 ${borderColorClasses[module.color]} ${bgColorClasses[module.color]} transition-colors`}
              >
                <CheckCircle2 className={`w-6 h-6 flex-shrink-0 text-${module.color}-600 mt-0.5`} />
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subtopics Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[module.color]} flex items-center justify-center`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Module Subtopics</h2>
              <p className="text-gray-600">Click on any subtopic to read detailed notes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {module.subtopics.map((subtopic, index) => (
              <Link
                key={subtopic.id}
                to={`/modules/${module.id}/${subtopic.slug}`}
                className="group bg-white rounded-xl shadow-md border-2 border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[module.color]} flex items-center justify-center text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {subtopic.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {subtopic.shortDescription}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    Read Notes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Module PDF Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-indigo-200 overflow-hidden">
            <div className={`bg-gradient-to-r ${colorClasses[module.color]} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">📚 Complete Module Notes</h2>
                  <p className="text-white/90">Comprehensive study material in PDF format</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Get the complete study material for <span className="font-semibold">{module.title}</span> in a single PDF document. 
                This includes all subtopics, detailed explanations, examples, diagrams, and reference materials.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">📄 What's Included:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All {module.subtopics.length} subtopics with detailed explanations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Code examples and implementation details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Diagrams, flowcharts, and visual representations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Real-world applications and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Practice questions and exercises</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={module.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 bg-gradient-to-r ${colorClasses[module.color]} text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-lg text-lg`}
                >
                  <Eye className="w-5 h-5" />
                  View PDF
                </a>
                
                <a
                  href={module.pdfPath}
                  download
                  className="flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all text-lg"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                💡 Tip: Download the PDF for offline access and better reading experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-8 bg-white border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/modules"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Modules
            </Link>
            <Link
              to="/experiments"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              Practice with Experiments
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModuleDetail
