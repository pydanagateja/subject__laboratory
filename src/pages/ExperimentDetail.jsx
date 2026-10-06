import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { 
  ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, 
  Target, Lightbulb, Code2, ExternalLink, BookOpen,
  CheckCircle2, Brain, TrendingUp, HelpCircle, Play
} from 'lucide-react'
import VideoPlayer from '../components/VideoPlayer'
import CodeBlock from '../components/CodeBlock'
import experimentsData from '../data/experiments.json'

const ExperimentDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const experiment = experimentsData.find(exp => exp.id === parseInt(id))
  const [activeTab, setActiveTab] = useState(0)

  if (!experiment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Experiment Not Found</h2>
          <p className="text-gray-600 mb-4">The experiment you're looking for doesn't exist.</p>
          <Link to="/experiments" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Experiments
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = experimentsData.findIndex(exp => exp.id === parseInt(id))
  const previousExperiment = currentIndex > 0 ? experimentsData[currentIndex - 1] : null
  const nextExperiment = currentIndex < experimentsData.length - 1 ? experimentsData[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/experiments" className="text-gray-500 hover:text-primary-600">Experiments</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Experiment {experiment.number}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/experiments" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to All Experiments
        </Link>

        {/* Experiment Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              EXPERIMENT {experiment.number}
            </span>
            {/* Technologies moved here */}
            <div className="flex flex-wrap gap-2 justify-end">
              {experiment.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{experiment.title}</h1>
          <p className="text-xl text-green-100 max-w-4xl">{experiment.shortDescription}</p>
        </div>

        {/* Large Overview Video Section */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Overview Video Tutorial</h2>
          </div>
          <VideoPlayer videoSrc={experiment.video} title={experiment.title} />
          <p className="text-gray-300 mt-4 text-center">
            Watch the complete walkthrough of this experiment
          </p>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Aim */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Aim</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{experiment.aim}</p>
          </div>

          {/* Learning Objectives */}
          {experiment.learningObjectives && (
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Learning Objectives</h3>
              </div>
              <ul className="space-y-2">
                {experiment.learningObjectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{experiment.overview}</p>
        </div>

        {/* Sub-Experiments with Tabs */}
        {experiment.subExperiments && experiment.subExperiments.length > 0 && (
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sub-Experiments</h2>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-2">
              {experiment.subExperiments.map((subExp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                    activeTab === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subExp.id}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {experiment.subExperiments.map((subExp, index) => (
              <div
                key={index}
                className={`${activeTab === index ? 'block' : 'hidden'}`}
              >
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {subExp.id}: {subExp.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">{subExp.description}</p>
                  
                  {/* Code */}
                  {subExp.code && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-lg">
                        <Code2 className="w-5 h-5 text-green-600" />
                        Code
                      </h4>
                      <CodeBlock code={subExp.code} language="python" />
                    </div>
                  )}

                  {/* Code Explanation - Step by Step */}
                  {subExp.explanation && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-lg">
                        <Brain className="w-5 h-5 text-purple-600" />
                        Code Explanation - Step by Step
                      </h4>
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-6">
                        <p className="text-sm text-gray-600 mb-4 italic">
                          Follow these steps to understand what the code does:
                        </p>
                        <ol className="space-y-3">
                          {subExp.explanation.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {i + 1}
                              </span>
                              <span className="text-gray-800 leading-relaxed pt-0.5">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* Expected Output */}
                  {subExp.expectedOutput && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Expected Output
                      </h4>
                      
                      {/* Text Output */}
                      <p className="text-gray-800 leading-relaxed mb-4">{subExp.expectedOutput}</p>
                      
                      {/* Image Output (if available) */}
                      {subExp.outputImage && (
                        <div className="mt-4">
                          <img 
                            src={subExp.outputImage} 
                            alt={`Output for ${subExp.title}`}
                            className="w-full rounded-lg border-2 border-green-200 shadow-md"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'block'
                            }}
                          />
                          <div 
                            className="hidden bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
                          >
                            <div className="text-4xl mb-2">🖼️</div>
                            <p className="text-sm text-gray-600">
                              Output image will be added soon
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Navigation between tabs */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                    disabled={activeTab === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous Sub-Experiment
                  </button>
                  
                  <div className="text-sm text-gray-600">
                    {activeTab + 1} of {experiment.subExperiments.length}
                  </div>
                  
                  <button
                    onClick={() => setActiveTab(Math.min(experiment.subExperiments.length - 1, activeTab + 1))}
                    disabled={activeTab === experiment.subExperiments.length - 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === experiment.subExperiments.length - 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    Next Sub-Experiment
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Theory */}
        {experiment.theory && (
          <div className="card p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Theory</h2>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{experiment.theory}</p>
          </div>
        )}

        {/* Real-World Application */}
        {experiment.realWorldApplication && (
          <div className="card p-6 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Real-World Application</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{experiment.realWorldApplication}</p>
          </div>
        )}

        {/* Result */}
        {experiment.result && (
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Result</h2>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <p className="text-gray-700">{experiment.result}</p>
            </div>
          </div>
        )}

        {/* Google Colab Button - Prominent Section */}
        <div className="card p-8 mb-8 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Try it Yourself in Google Colab!
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Run this experiment in Google Colab - a free cloud-based Jupyter notebook environment. 
              Edit the code, experiment with different inputs, and see results instantly.
            </p>
            {experiment.colabUrl && experiment.colabUrl !== "https://colab.research.google.com/" ? (
              <a
                href={experiment.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-6 h-6" />
                Open in Google Colab
              </a>
            ) : (
              <div className="inline-block">
                <button
                  disabled
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-300 text-gray-600 rounded-lg font-semibold text-lg cursor-not-allowed"
                >
                  <ExternalLink className="w-6 h-6" />
                  Colab Notebook Coming Soon
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  The Google Colab notebook for this experiment is being prepared
                </p>
              </div>
            )}
          </div>
          
          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">☁️</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Cloud-Based</h4>
              <p className="text-xs text-gray-600">No installation needed</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🆓</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Free to Use</h4>
              <p className="text-xs text-gray-600">Google account required</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Instant Results</h4>
              <p className="text-xs text-gray-600">Run code immediately</p>
            </div>
          </div>
        </div>

        {/* Viva Questions */}
        {experiment.vivaQuestions && experiment.vivaQuestions.length > 0 && (
          <div className="card p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Viva Questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiment.vivaQuestions.map((question, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-green-600">{index + 1}. </span>
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          {previousExperiment ? (
            <Link
              to={`/experiments/${previousExperiment.id}`}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-gray-500">Previous</p>
                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                  Exp {previousExperiment.number}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextExperiment ? (
            <Link
              to={`/experiments/${nextExperiment.id}`}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500">Next</p>
                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                  Exp {nextExperiment.number}
                </p>
              </div>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperimentDetail
