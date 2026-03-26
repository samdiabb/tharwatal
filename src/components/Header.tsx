import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tharwat AL LLC</h1>
              <p className="text-xs text-gray-600">Real Estate Investments</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Portfolio</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg">Home</a>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg">About</a>
            <a href="#portfolio" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg">Portfolio</a>
            <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg">Services</a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
}
