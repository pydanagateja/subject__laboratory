import { Link } from 'react-router-dom'
import { ArrowRight, Beaker, BookOpen, FlaskConical, Wrench } from 'lucide-react'
import StudentProfile from '../components/StudentProfile'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-gray-900 py-20 lg:py-28 overflow-hidden">
        {/* Professional Data Science Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')`,
          }}
        >
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/50 to-white/60"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-8 top-24 hidden lg:block z-10">
          <div className="space-y-4">
            <div className="w-20 h-20 relative">
              <svg viewBox="0 0 100 100" className="text-blue-600/40">
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl">📊</div>
            </div>
            <div className="w-20 h-20 relative ml-10">
              <svg viewBox="0 0 100 100" className="text-blue-500/40">
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl">🗄️</div>
            </div>
          </div>
        </div>

        <div className="absolute right-16 top-20 hidden lg:block z-10">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-white text-4xl">🐍</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Beaker Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 shadow-xl">
              <Beaker className="w-10 h-10 text-white" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              SUBJECT <span className="text-blue-600">LABORATORY</span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
              Data Science
            </h2>
            
            {/* Course ID Badge */}
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-base font-semibold mb-8 shadow-md border border-blue-200">
              Course ID: 22DS102006
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 mb-10 leading-relaxed">
              An interactive subject laboratory for learning Data Science through modules, experiments, 
              practical coding, tools, visual explanations and real-world applications.
            </p>
          </div>
        </div>

        {/* Tech Stack - Bottom Left */}
        <div className="absolute bottom-12 left-8 hidden lg:block z-10">
          <div className="space-y-2">
            <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded shadow-lg">PYTHON</div>
            <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded shadow-lg">PANDAS</div>
            <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded shadow-lg">DATA VISUALIZATION</div>
            <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded shadow-lg">MACHINE LEARNING</div>
          </div>
        </div>
      </section>

      {/* Student Profile Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StudentProfile />
        </div>
      </section>

      {/* Three Main Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Modules Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Modules
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                Explore the complete Data Science syllabus module by module.
              </p>
              
              <Link 
                to="/modules" 
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Modules
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Experiments Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-8 h-8 text-green-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Experiments
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                Practice Data Science through hands-on experiments and coding.
              </p>
              
              <Link 
                to="/experiments" 
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Experiments
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Tools Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Tools
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                Explore the tools and technologies used throughout the subject.
              </p>
              
              <Link 
                to="/tools" 
                className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore Tools
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
