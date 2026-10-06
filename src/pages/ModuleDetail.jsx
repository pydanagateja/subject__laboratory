import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, FileText, Download, ExternalLink, BookOpen, X } from 'lucide-react'
import modulesData from '../data/modules.json'

const ModuleDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showPDFViewer, setShowPDFViewer] = useState(true)
  const [pdfError, setPdfError] = useState(false)
  
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

  const handlePDFError = () => {
    setPdfError(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={`bg-gradient-to-r ${colorClasses[module.color]} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/modules')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Modules
          </button>
          
          <div className="flex items-start gap-6">
            <div className="text-6xl">{module.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold opacity-90 mb-2">MODULE {module.number}</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {module.title}
              </h1>
              <p className="text-lg text-white/90">
                {module.description}
              </p>
              {module.periods && (
                <p className="text-sm text-white/80 mt-2">
                  📅 {module.periods} Periods
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* PDF Viewer Section */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    📄 Module PDF Document
                  </h2>
                  <div className="flex items-center gap-2">
                    <a
                      href={module.pdfPath}
                      download
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${colorClasses[module.color]} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm`}
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* PDF Controls */}
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {module.title} - Complete Study Material
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={module.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-600" />
                      </a>
                      <button
                        onClick={() => setShowPDFViewer(!showPDFViewer)}
                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                        title={showPDFViewer ? "Hide PDF" : "Show PDF"}
                      >
                        {showPDFViewer ? <X className="w-5 h-5 text-gray-600" /> : <FileText className="w-5 h-5 text-gray-600" />}
                      </button>
                    </div>
                  </div>

                  {/* PDF Viewer */}
                  {showPDFViewer && (
                    !pdfError ? (
                      <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200" style={{ height: '700px' }}>
                        <iframe
                          src={module.pdfPath}
                          className="w-full h-full"
                          title={`${module.title} PDF`}
                          onError={handlePDFError}
                        />
                      </div>
                    ) : (
                      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 text-center">
                        <FileText className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          📄 PDF Not Available Yet
                        </h3>
                        <p className="text-gray-600 mb-4">
                          The PDF file for this module has not been uploaded yet. Please check back later.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Expected location: <code className="bg-gray-200 px-2 py-1 rounded">{module.pdfPath}</code>
                        </p>
                        <a
                          href={module.pdfPath}
                          download
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Try downloading anyway
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Topics Covered */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  📚 Topics Covered in This Module
                </h2>
                <ul className="space-y-4">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${colorClasses[module.color]} text-white flex items-center justify-center font-semibold text-sm`}>
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Module Info */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Module Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Module Number</p>
                    <p className="font-semibold text-gray-900">{module.number}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Topics Count</p>
                    <p className="font-semibold text-gray-900">{module.topicsCount} Topics</p>
                  </div>
                  {module.periods && (
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900">{module.periods} Periods</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-500">Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Experiments */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Related Experiments</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Practice the concepts from this module through hands-on experiments.
                </p>
                <Link
                  to="/experiments"
                  className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colorClasses[module.color]} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
                >
                  View Experiments
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Navigation</h3>
                <div className="space-y-2">
                  <Link
                    to="/modules"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    ← All Modules
                  </Link>
                  <Link
                    to="/tools"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Tools & Technologies →
                  </Link>
                  <Link
                    to="/resources"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Additional Resources →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ModuleDetail
