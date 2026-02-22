import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold tracking-wider text-white block">
              TRUE NORTH <span className="text-primary">AUTO SPA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Detailing done right. Precision & shine. We provide ultra-luxury automotive detailing services for discerning clients who demand perfection.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/truenorthautospa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:truenorthautospa@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {['Ceramic Coating', 'Paint Correction', 'Interior Detailing', 'Exterior Detailing', 'Full Packages'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="tel:+15873787829" className="hover:text-white transition-colors">
                  +1 (587) 378-7829
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:truenorthautospa@gmail.com" className="hover:text-white transition-colors">
                  truenorthautospa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Serving Calgary & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} True North Auto Spa. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs uppercase tracking-wider">
            Designed for Luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
