import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Modules', path: '/modules' },
    { name: 'Experiments', path: '/experiments' },
    { name: 'Tools', path: '/tools' },
    { name: 'Resources', path: '/resources' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/assets/mbu-logo.png" 
              alt="Mohan Babu University Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                // If PNG fails, try SVG
                e.target.src = '/assets/mbu-logo.svg';
                e.target.onerror = () => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                };
              }}
            />
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-lg items-center justify-center text-white font-bold text-xl shadow-md hidden">
              MBU
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">SUBJECT LABORATORY</h1>
              <p className="text-sm text-primary-600 font-medium">Data Science • 22DS102006</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Student Profile Icon */}
          <div className="hidden md:flex items-center">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary-600" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
