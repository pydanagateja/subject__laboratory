const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-md transform scale-105'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-400 hover:text-primary-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
