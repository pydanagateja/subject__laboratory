import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, ChevronRight, ExternalLink, Code2, 
  BookOpen, Lightbulb, CheckCircle2, Download, Wrench 
} from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import toolsData from '../data/tools.json'
import experimentsData from '../data/experiments.json'

const ToolDetail = () => {
  const { id } = useParams()
  const tool = toolsData.find(t => t.id === parseInt(id))

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tool Not Found</h2>
          <p className="text-gray-600 mb-4">The tool you're looking for doesn't exist.</p>
          <Link to="/tools" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </Link>
        </div>
      </div>
    )
  }

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700'
      case 'Advanced':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  // Get related experiments
  const relatedExperiments = tool.relatedExperiments
    ? experimentsData.filter(exp => tool.relatedExperiments.includes(exp.id))
    : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-orange-600">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/tools" className="text-gray-500 hover:text-orange-600">Tools</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{tool.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/tools" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to All Tools
        </Link>

        {/* Tool Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="text-6xl">{tool.icon}</div>
            <div className="flex flex-wrap gap-2 justify-end">
              <span className={`px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-bold`}>
                {tool.category}
              </span>
              <span className={`px-4 py-2 bg-white text-orange-700 rounded-lg text-sm font-bold`}>
                {tool.difficulty}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
          <p className="text-xl text-orange-100 max-w-4xl">{tool.shortDescription}</p>
          <div className="mt-4 flex items-center gap-4 text-orange-100">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Version: {tool.version}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              License: {tool.license}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            About {tool.name}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{tool.description}</p>
        </div>

        {/* Features and Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Features */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-orange-600" />
              Key Features
            </h3>
            <ul className="space-y-3">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-orange-600" />
              Common Use Cases
            </h3>
            <ul className="space-y-3">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl flex-shrink-0">→</span>
                  <span className="text-gray-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Installation */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Download className="w-6 h-6 text-blue-600" />
            Installation
          </h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{tool.installation}</pre>
          </div>
        </div>

        {/* Basic Example */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-orange-600" />
            Basic Example
          </h2>
          <CodeBlock code={tool.basicExample} language="python" />
        </div>

        {/* Resources */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-green-600" />
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.resources.map((resource, index) => {
              const [label, url] = resource.split(': ')
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
                >
                  <ExternalLink className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {label}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{url}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Related Experiments */}
        {relatedExperiments.length > 0 && (
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-orange-600" />
              Related Experiments
            </h2>
            <p className="text-gray-600 mb-6">
              Practice using {tool.name} in these hands-on experiments:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedExperiments.map((experiment) => (
                <Link
                  key={experiment.id}
                  to={`/experiments/${experiment.id}`}
                  className="p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">
                      EXP {experiment.number}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                    {experiment.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {experiment.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
            <p className="text-sm text-gray-600">
              Comprehensive documentation available for learning
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-bold text-gray-900 mb-2">Community Support</h3>
            <p className="text-sm text-gray-600">
              Active community and extensive online resources
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Production Ready</h3>
            <p className="text-sm text-gray-600">
              Battle-tested and used in production environments
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolDetail
