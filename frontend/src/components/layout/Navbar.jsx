import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronRight, LayoutDashboard, LogOut } from 'lucide-react';
import { LOGO_URL } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Offres', path: '/offres' },
    { name: 'Couverture', path: '/couverture' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          transition-all duration-500 border border-on-surface/5
          ${isScrolled ? 'bg-surface-container-lowest/80 backdrop-blur-xl shadow-long-fall' : 'bg-transparent border-transparent'}
        `}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-stitch-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 overflow-hidden">
               <img src={LOGO_URL} alt="NOVA+" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-on-surface uppercase italic">
              NOVA<span className="text-primary not-italic">+</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-5 py-2 rounded-full font-display font-bold text-sm uppercase tracking-widest transition-all duration-300
                  ${location.pathname === link.path 
                    ? 'text-primary bg-primary/5' 
                    : 'text-on-surface/60 hover:text-primary hover:bg-primary/5'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User / Dashboard */}
          <div className="flex items-center gap-3">
            <Link 
              to="/dashboard"
              className="hidden sm:flex items-center gap-2 bg-on-surface text-surface py-2.5 px-6 rounded-full font-display font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
            >
              <LayoutDashboard size={16} />
              <span>Espace Client</span>
            </Link>
            
            <Link 
              to="/login"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary hover:text-white transition-all duration-500"
            >
              <User size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
