import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, Clock, FileText } from 'lucide-react'
import modulesData from '../data/modulesWithSubtopics.json'

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

  const borderColorClasses = {
    blue: 'border-blue-200',
    green: 'border-green-200',
    purple: 'border-purple-200',
    orange: 'border-orange-200',
    red: 'border-red-200'
  }

  const textColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Data Science Course Modules
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-2">
              Comprehensive study materials organized into 5 modules covering the complete Data Science syllabus
            </p>
            <p className="text-sm text-blue-200">
              Course ID: 22DS102006 | Data Science Section 02
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modulesData.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Module Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 rounded-full text-sm font-bold shadow-lg">
                        MODULE {module.number}
                      </span>
                      <span className="text-5xl">{module.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {module.title}
                    </h3>
                  </div>
                </div>
                
                {/* Module Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Module Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`${bgColorClasses[module.color]} border-2 ${borderColorClasses[module.color]} rounded-xl p-4`}>
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className={`w-5 h-5 ${textColorClasses[module.color]}`} />
                        <span className={`text-sm font-semibold ${textColorClasses[module.color]}`}>
                          Subtopics
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{module.subtopics.length}</p>
                    </div>
                    <div className={`${bgColorClasses[module.color]} border-2 ${borderColorClasses[module.color]} rounded-xl p-4`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className={`w-5 h-5 ${textColorClasses[module.color]}`} />
                        <span className={`text-sm font-semibold ${textColorClasses[module.color]}`}>
                          Duration
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{module.periods} Periods</p>
                    </div>
                  </div>

                  {/* View Module Button */}
                  <Link
                    to={`/modules/${module.id}`}
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${colorClasses[module.color]} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-lg text-lg`}
                  >
                    <FileText className="w-5 h-5" />
                    View Module
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-t-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              📚 How to Use These Modules
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each module provides comprehensive study materials with detailed notes for every subtopic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Select Module</h3>
              <p className="text-sm text-gray-600">
                Click on any module to view its detailed content and subtopics
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Choose Subtopic</h3>
              <p className="text-sm text-gray-600">
                Browse through subtopics and select one to read detailed notes
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Study Notes</h3>
              <p className="text-sm text-gray-600">
                Read comprehensive notes with examples, applications, and concepts
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Download PDF</h3>
              <p className="text-sm text-gray-600">
                Access complete module PDFs for offline study and reference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Info */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-600">
            <p className="font-semibold text-gray-900 mb-1">Data Science Subject Laboratory</p>
            <p>Course: Data Science (22DS102006) | Student: P. Naga Teja (24102A030102) | Section: 02 | Faculty: Bosu Babu</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Modules
