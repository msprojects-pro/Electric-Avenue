import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md py-4 border-slate-800 shadow-2xl'
          : 'bg-transparent py-7 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center editorial-glow-header">
            <Zap className="text-white w-6 h-6" fill="white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tighter text-white leading-none">
              ELECTRIC AVENUE <span className="text-blue-500">IOW</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
              Isle of Wight • Premier Electrical
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onQuoteClick}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-bold editorial-glow-button transition-all hover:scale-105 active:scale-95"
          >
            +44 7584 197802
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 py-8 px-6"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-300 border-b border-slate-900 pb-4"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                onQuoteClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold editorial-glow-button"
            >
              <Phone size={20} />
              Free Quote
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
