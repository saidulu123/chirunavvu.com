import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo area */}
          <div className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/dk3zwqnsq/image/upload/v1756795718/Page_logo_baij6g.png"   
              alt="Logo"
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" 
            />
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-900">8919769488</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
