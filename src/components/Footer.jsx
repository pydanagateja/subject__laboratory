import { Link } from 'react-router-dom'
import { User, IdCard, Building2, Users, GraduationCap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">DIGITAL LABORATORY</h3>
            <p className="text-sm mb-2">Data Science</p>
            <p className="text-sm text-gray-400">Course ID: 22DS102006</p>
            <p className="text-sm text-gray-400 mt-4">
              An interactive digital laboratory for learning Data Science through
              experiments, code, and real-world applications.
            </p>
            <p className="text-sm text-gray-400 mt-4 font-medium">
              Mohan Babu University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary-400 transition-colors">
                Home
              </Link>
              <Link to="/experiments" className="text-sm hover:text-primary-400 transition-colors">
                Experiments
              </Link>
              <Link to="/resources" className="text-sm hover:text-primary-400 transition-colors">
                Resources
              </Link>
              <Link to="/about" className="text-sm hover:text-primary-400 transition-colors">
                About
              </Link>
              <Link to="/disclaimer" className="text-sm hover:text-primary-400 transition-colors">
                Disclaimer
              </Link>
            </nav>
          </div>

          {/* Student & Faculty Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">P. Naga Teja</p>
                  <p className="text-gray-400">Roll No: 24102A030102</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Department: Data Science</p>
                  <p className="text-gray-400">Section: 02</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Bosu Babu</p>
                  <p className="text-gray-400">Assistant Professor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">&copy; {new Date().getFullYear()} Digital Laboratory - Data Science, Mohan Babu University. All rights reserved.</p>
          <p className="text-xs">Educational Project - Non-Commercial Use | Videos embedded from YouTube for educational purposes</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
