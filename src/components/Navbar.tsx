import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/95 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-wider text-white">
          TRUE NORTH <span className="text-primary">AUTO SPA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors',
                location.pathname === link.path ? 'text-primary' : 'text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+15873787829"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-sm font-medium uppercase tracking-wide text-xs transition-all"
          >
            <Phone size={14} />
            <span>(587) 378-7829</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-display uppercase tracking-widest hover:text-primary transition-colors',
                    location.pathname === link.path ? 'text-primary' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <a
                  href="tel:+15873787829"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-sm font-medium uppercase tracking-wide text-sm"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://www.instagram.com/truenorthautospa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/20 text-white px-5 py-3 rounded-sm font-medium uppercase tracking-wide text-sm hover:bg-white/5 transition-colors"
                >
                  <Instagram size={16} />
                  <span>Follow Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
