import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: string;
  t: any;
}

export const Footer: React.FC<FooterProps> = ({  t }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-linear-to-br from-green-400 to-emerald-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Ayon Green</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">{t.footer.description}</p>
            {/* <div className="flex space-x-4">
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.nav.services}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5 text-green-500" />
                <span>info@ayongreen.tj</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+992 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>{t.footer.addressText}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Ayon Green. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};