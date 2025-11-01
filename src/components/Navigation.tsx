import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollY: number;
  t: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  language,
  setLanguage,
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
  t,
}) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-linear-to-br from-green-400 to-emerald-600 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${scrollY > 50 ? 'text-gray-900' : 'text-white'}`}>
              Ayon Green Energy
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? scrollY > 50 ? 'text-green-600' : 'text-gray-700'
                  : scrollY > 50
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white hover:text-green-300'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about')
                  ? scrollY > 50 ? 'text-green-600' : 'text-gray-700'
                  : scrollY > 50
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white hover:text-green-300'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors ${
                isActive('/services')
                  ? scrollY > 50 ? 'text-green-600' : 'text-gray-700'
                  : scrollY > 50
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white hover:text-green-300'
              }`}
            >
              {t.nav.services}
            </Link>
            <div className="flex items-center space-x-2">
              {['en', 'ru', 'tj'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    language === lang
                      ? 'bg-green-600 text-white'
                      : scrollY > 50
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <button
            className={`md:hidden ${scrollY > 50 ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                isActive('/') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                isActive('/about') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                isActive('/services') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.nav.services}
            </Link>
            <div className="flex space-x-2 pt-2">
              {['en', 'ru', 'tj'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    language === lang ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
