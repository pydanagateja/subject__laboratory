import { Beaker, Target, Lightbulb, Users, Award } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Beaker className="w-10 h-10" />
            <h1 className="text-4xl font-bold">About Digital Laboratory</h1>
          </div>
          <p className="text-center text-primary-100 text-lg max-w-2xl mx-auto">
            An innovative digital platform for hands-on Data Science education
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Digital Laboratory?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digital Laboratory is a comprehensive web-based learning platform designed specifically
            for Data Science education. It serves as a complete digital lab manual where students
            can explore experiments, watch video explanations, study theory, analyze Python code,
            and understand real-world applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Built with modern web technologies, this platform provides an interactive and engaging
            learning experience that goes beyond traditional textbooks and static lab manuals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">10 Comprehensive Experiments</h3>
              <p className="text-sm text-gray-600">
                Covering all major Data Science topics from Pandas basics to advanced case studies
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hands-on Code Examples</h3>
              <p className="text-sm text-gray-600">
                Ready-to-run Python code with detailed explanations and expected outputs
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Simple Explanations</h3>
              <p className="text-sm text-gray-600">
                Step-by-step code breakdowns that make complex concepts easy to understand
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Real-world Applications</h3>
              <p className="text-sm text-gray-600">
                Learn how each concept applies to actual industry scenarios and projects
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Viva Preparation</h3>
              <p className="text-sm text-gray-600">
                Curated viva questions to help students prepare for lab examinations
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Google Colab Integration</h3>
              <p className="text-sm text-gray-600">
                Direct links to run experiments in Google Colab for hands-on practice
              </p>
            </div>
          </div>
        </div>

        {/* Course Information */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Institution</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li><span className="font-medium">University:</span> Mohan Babu University</li>
              </ul>
              <h3 className="font-semibold text-gray-900 mb-2">Course Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Course Name:</span> Data Science</li>
                <li><span className="font-medium">Course Code:</span> 22DS102006</li>
                <li><span className="font-medium">Department:</span> Data Science</li>
                <li><span className="font-medium">Section:</span> 02</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Faculty Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Name:</span> Bosu Babu</li>
                <li><span className="font-medium">Designation:</span> Assistant Professor</li>
              </ul>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Student Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">Name:</span> P. Naga Teja</li>
                  <li><span className="font-medium">Roll No:</span> 24102A030102</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Data Format Operations</h4>
                <p className="text-sm text-gray-600">CSV, JSON, and Excel file handling with Pandas</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Web APIs & Databases</h4>
                <p className="text-sm text-gray-600">RESTful API integration and SQL operations</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Data Cleaning</h4>
                <p className="text-sm text-gray-600">Missing data, duplicates, outliers, and text processing</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Data Wrangling</h4>
                <p className="text-sm text-gray-600">Hierarchical indexing, merging, and reshaping</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">5</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Data Visualization</h4>
                <p className="text-sm text-gray-600">Matplotlib and Seaborn plots and charts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Time Series Analysis</h4>
                <p className="text-sm text-gray-600">Temporal data handling and resampling</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">7</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Data Aggregation</h4>
                <p className="text-sm text-gray-600">GroupBy operations and statistics</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">8</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Web Scraping</h4>
                <p className="text-sm text-gray-600">Beautiful Soup and sentiment analysis</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">9</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Customer Analysis</h4>
                <p className="text-sm text-gray-600">Personality analysis and segmentation</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">10</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Text Emotion Detection</h4>
                <p className="text-sm text-gray-600">NLP and emotion classification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="card p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-gray-700 mb-4">This platform is built using modern web technologies:</p>
          <div className="flex flex-wrap gap-3">
            {['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'React Router', 'Lucide React'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
