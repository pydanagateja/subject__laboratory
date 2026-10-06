import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Target, Lightbulb, CheckCircle2, AlertCircle, TrendingUp, XCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import modulesData from '../data/modulesWithSubtopics.json'
import subtopicNotesData from '../data/subtopicNotes.json'

const SubtopicNotes = () => {
  const { moduleId, subtopicSlug } = useParams()
  const navigate = useNavigate()
  
  const module = modulesData.find(m => m.id === parseInt(moduleId))
  
  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h2>
          <Link to="/modules" className="text-blue-600 hover:underline">← Back to Modules</Link>
        </div>
      </div>
    )
  }

  const subtopicIndex = module.subtopics.findIndex(st => st.slug === subtopicSlug)
  const subtopic = module.subtopics[subtopicIndex]
  
  if (!subtopic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subtopic Not Found</h2>
          <Link to={`/modules/${moduleId}`} className="text-blue-600 hover:underline">
            ← Back to Module
          </Link>
        </div>
      </div>
    )
  }

  const notes = subtopicNotesData[subtopic.id]
  const previousSubtopic = subtopicIndex > 0 ? module.subtopics[subtopicIndex - 1] : null
  const nextSubtopic = subtopicIndex < module.subtopics.length - 1 ? module.subtopics[subtopicIndex + 1] : null

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/modules" className="text-blue-600 hover:text-blue-700 font-medium">
              Modules
            </Link>
            <span className="text-gray-400">/</span>
            <Link to={`/modules/${moduleId}`} className="text-blue-600 hover:text-blue-700 font-medium">
              Module {module.number}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-semibold">{subtopic.title}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className={`bg-gradient-to-r ${colorClasses[module.color]} text-white py-12`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(`/modules/${moduleId}`)}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Module
          </button>
          
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold opacity-90 mb-1 uppercase tracking-wide">
                Module {module.number} • Topic {subtopicIndex + 1} of {module.subtopics.length}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                {subtopic.title}
              </h1>
              <p className="text-lg text-white/95">
                {subtopic.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
            
            {/* Introduction */}
            {notes && notes.introduction && (
              <div className="p-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {notes.introduction}
                </p>
              </div>
            )}

            {/* Definition */}
            {notes && notes.definition && (
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-b-2 border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Definition</h2>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-sm">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {notes.definition}
                  </p>
                </div>
              </div>
            )}

            {/* Objectives */}
            {notes && notes.objectives && notes.objectives.length > 0 && (
              <div className="p-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Objectives</h2>
                </div>
                <ul className="space-y-3">
                  {notes.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Concepts */}
            {notes && notes.keyConcepts && notes.keyConcepts.length > 0 && (
              <div className="p-8 bg-purple-50 border-b-2 border-purple-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Concepts</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {notes.keyConcepts.map((concept, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{concept.term}</h3>
                      <p className="text-gray-700 leading-relaxed">{concept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Explanation */}
            {notes && notes.detailedExplanation && (
              <div className="p-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Detailed Explanation</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  {notes.detailedExplanation.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Types/Components */}
            {notes && notes.types && notes.types.length > 0 && (
              <div className="p-8 bg-orange-50 border-b-2 border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Types & Components</h2>
                </div>
                <div className="space-y-4">
                  {notes.types.map((type, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                      <p className="text-gray-700 leading-relaxed">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Examples */}
            {notes && notes.examples && notes.examples.length > 0 && (
              <div className="p-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Examples</h2>
                </div>
                <div className="space-y-6">
                  {notes.examples.map((example, index) => (
                    <div key={index} className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        {example.scenario}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{example.application}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Real-world Applications */}
            {notes && notes.realWorldApplications && notes.realWorldApplications.length > 0 && (
              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-b-2 border-green-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Real-world Applications</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {notes.realWorldApplications.map((application, index) => (
                    <li key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border-2 border-green-200">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advantages */}
            {notes && notes.advantages && notes.advantages.length > 0 && (
              <div className="p-8 border-b-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Advantages</h2>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                  {notes.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Limitations */}
            {notes && notes.limitations && notes.limitations.length > 0 && (
              <div className="p-8 bg-red-50 border-b-2 border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitations</h2>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                  {notes.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-red-200">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Summary */}
            {notes && notes.summary && (
              <div className="p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Summary</h2>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-indigo-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {notes.summary}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Navigation between topics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previousSubtopic ? (
              <Link
                to={`/modules/${moduleId}/${previousSubtopic.slug}`}
                className="group bg-white rounded-xl shadow-md border-2 border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-3 text-blue-600 mb-2">
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-semibold">Previous Topic</span>
                </div>
                <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                  {previousSubtopic.title}
                </p>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextSubtopic && (
              <Link
                to={`/modules/${moduleId}/${nextSubtopic.slug}`}
                className="group bg-white rounded-xl shadow-md border-2 border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all text-right"
              >
                <div className="flex items-center justify-end gap-3 text-blue-600 mb-2">
                  <span className="text-sm font-semibold">Next Topic</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                  {nextSubtopic.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubtopicNotes
