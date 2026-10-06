import { useState, useMemo } from 'react'
import { FlaskConical, Search, Filter } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ExperimentGrid from '../components/ExperimentGrid'
import experimentsData from '../data/experiments.json'

const ExperimentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Pandas',
    'Data Cleaning',
    'Data Wrangling',
    'Visualization',
    'Time Series',
    'Data Aggregation',
    'Web Scraping',
    'Case Studies'
  ]

  const filteredExperiments = useMemo(() => {
    let filtered = experimentsData

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(exp =>
        exp.title.toLowerCase().includes(query) ||
        exp.number.includes(query) ||
        exp.shortDescription.toLowerCase().includes(query) ||
        exp.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        exp.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
        exp.subExperiments.some(sub => sub.title.toLowerCase().includes(query))
      )
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(exp => {
        const categoryLower = activeCategory.toLowerCase()
        return (
          exp.title.toLowerCase().includes(categoryLower) ||
          exp.technologies.some(tech => tech.toLowerCase().includes(categoryLower)) ||
          exp.keywords.some(keyword => keyword.toLowerCase().includes(categoryLower))
        )
      })
    }

    return filtered
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <FlaskConical className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Data Science Experiments
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore {experimentsData.length} hands-on experiments with code examples, 
              video tutorials, and real-world applications
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
              <h2 className="text-lg font-semibold text-gray-900">Search Experiments</h2>
            </div>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600">
                Found <span className="font-semibold text-green-600">{filteredExperiments.length}</span> of {experimentsData.length} experiment(s)
              </p>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
            </div>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredExperiments.length === 0 ? (
            <div className="text-center py-12">
              <FlaskConical className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No experiments found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredExperiments.length}</span> experiment{filteredExperiments.length !== 1 ? 's' : ''}
                </p>
              </div>
              <ExperimentGrid experiments={filteredExperiments} />
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              About the Experiments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Hands-on Coding</h3>
                <p className="text-sm">
                  Each experiment includes complete Python code examples that you can 
                  run, edit, and experiment with.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Video Tutorials</h3>
                <p className="text-sm">
                  Watch step-by-step video explanations to understand concepts 
                  and see live demonstrations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Real-world Applications</h3>
                <p className="text-sm">
                  Learn how each concept applies to actual business problems 
                  and data science projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperimentsPage
