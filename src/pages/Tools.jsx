import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Search, Filter, ExternalLink } from 'lucide-react'
import toolsData from '../data/tools.json'

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Extract unique categories
  const categories = ['All', ...new Set(toolsData.map(tool => tool.category))]

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    let filtered = toolsData

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.shortDescription.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      )
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === activeCategory)
    }

    return filtered
  }, [searchQuery, activeCategory])

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Wrench className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Data Science Tools
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Explore {toolsData.length} essential tools and libraries for data science, 
              machine learning, and data analysis
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900">Search Tools</h2>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tool name, category, or description..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600">
                Found <span className="font-semibold text-orange-600">{filteredTools.length}</span> of {toolsData.length} tool(s)
              </p>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <Wrench className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                }}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredTools.length}</span> tool{filteredTools.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={`/tools/${tool.id}`}
                    className="card p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Tool Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{tool.icon}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tool.difficulty)}`}>
                        {tool.difficulty}
                      </span>
                    </div>

                    {/* Tool Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {tool.name}
                    </h3>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                        {tool.category}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tool.shortDescription}
                    </p>

                    {/* Features Preview */}
                    {tool.features && tool.features.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                        <ul className="space-y-1">
                          {tool.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">
                        {tool.version}
                      </span>
                      <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Why These Tools Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Industry Standard</h3>
                <p className="text-sm">
                  These tools are widely used in the data science industry and 
                  are essential for any data professional.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Comprehensive Learning</h3>
                <p className="text-sm">
                  Each tool includes documentation, examples, and links to 
                  additional resources for deeper learning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Career Ready</h3>
                <p className="text-sm">
                  Master these tools to build a strong foundation for your 
                  data science career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tools
