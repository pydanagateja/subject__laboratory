import { Search, X } from 'lucide-react'

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-base"
        placeholder="Search experiments, topics, technologies or keywords..."
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-primary-600 transition-colors"
          aria-label="Clear search"
        >
          <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  )
}

export default SearchBar
