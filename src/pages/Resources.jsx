import { BookOpen, ExternalLink, Github, TrendingUp } from 'lucide-react'

const Resources = () => {
  const textBooks = [
    {
      title: "A Hands-on Introduction to Data Science",
      author: "Chirag Shah",
      publisher: "Cambridge University Press",
      year: "2020"
    },
    {
      title: "Think Stats: Exploratory Data Analysis",
      author: "Allen B. Downey",
      publisher: "O'Reilly",
      edition: "2nd Edition",
      year: "2014"
    }
  ]

  const referenceBooks = [
    {
      title: "Python for Data Analysis",
      author: "Wes McKinney",
      publisher: "O'Reilly",
      edition: "2nd Edition",
      year: "2017"
    },
    {
      title: "Practical Data Science with Hadoop and Spark",
      author: "Ofer Mendelevitch, Casey Stella, Douglas Eadline",
      publisher: "Addison Wesley",
      year: "2017"
    },
    {
      title: "Doing Data Science",
      author: "Rachel Schutt, Cathy O'Neil",
      publisher: "O'Reilly",
      year: "2014"
    },
    {
      title: "Python Data Science Handbook",
      author: "Jake VanderPlas",
      publisher: "O'Reilly",
      year: "2017"
    }
  ]

  const additionalTopics = [
    "Ethics in Data Science and Responsible AI",
    "Automated Feature Engineering",
    "Interactive Dashboards with Plotly Dash or Streamlit",
    "Bootstrapping and Resampling Techniques",
    "Deep Learning for Time Series (LSTM, GRU, Transformers)"
  ]

  const webResources = [
    {
      name: "W3Schools Data Science",
      url: "https://www.w3schools.com/datascience/",
      description: "Interactive tutorials and references for data science basics",
      icon: "📚"
    },
    {
      name: "Python Data Science Handbook",
      url: "https://github.com/jakevdp/PythonDataScienceHandbook",
      description: "Complete handbook available on GitHub with Jupyter notebooks",
      icon: "📖"
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/",
      description: "Data science competitions, datasets, and learning resources",
      icon: "🏆"
    },
    {
      name: "Towards Data Science",
      url: "https://towardsdatascience.com/",
      description: "Articles and tutorials on data science and machine learning",
      icon: "✍️"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Learning Resources</h1>
          </div>
          <p className="text-center text-primary-100 text-lg max-w-2xl mx-auto">
            Comprehensive collection of textbooks, references, and online resources
            for Data Science learning.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Text Books */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Text Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {textBooks.map((book, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{book.author}</p>
                    <p className="text-sm text-gray-500">
                      {book.publisher}
                      {book.edition && `, ${book.edition}`}, {book.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reference Books */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reference Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {referenceBooks.map((book, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{book.author}</p>
                    <p className="text-sm text-gray-500">
                      {book.publisher}
                      {book.edition && `, ${book.edition}`}, {book.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Learning Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Learning Topics</h2>
          <div className="card p-6">
            <ul className="space-y-3">
              {additionalTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Web Resources */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Web Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-[1.02] transition-transform duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{resource.icon}</span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="mt-12 card p-6 bg-blue-50 border-2 border-blue-200">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> These resources complement the laboratory experiments.
            Students are encouraged to explore both textbooks and online resources for
            comprehensive understanding of Data Science concepts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resources
