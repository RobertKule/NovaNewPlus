import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, User } from 'lucide-react';
import { LOGO_URL } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Offres', path: '/offres' },
    { name: 'Couverture', path: '/couverture' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Actualités', path: '/blog' },
    { name: 'Revendeurs', path: '/revendeurs' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 font-body ${scrolled
        ? 'bg-surface-lowest/80 backdrop-blur-xl border-b border-primary/5 py-3 shadow-lg'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={LOGO_URL}
              alt="NOVA+"
              className={`h-8 md:h-9 w-auto transition-transform group-hover:scale-105 ${scrolled ? '' : 'filter brightness-110'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full ${location.pathname === link.path
                    ? 'text-primary after:w-full'
                    : 'text-on-surface/70 hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <Link to={user.role === 'ADMIN' ? '/admin' : '/dashboard'} className="flex items-center gap-2 group">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest leading-none mb-1">Mon Compte</p>
                  <p className="text-xs font-bold text-primary group-hover:underline">{user.name}</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center border border-primary/5 shadow-inner">
                  <User size={20} />
                </div>
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-sm font-black text-on-surface/70 hover:text-primary transition-all uppercase tracking-widest px-4">
                  Connexion
                </Link>
                <Link to="/register" className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2 shadow-xl shadow-primary/10 hover:shadow-primary/20">
                  Inscription <ChevronRight size={16} />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-on-surface/70 hover:text-primary transition-all"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-surface-lowest z-[999] transition-transform duration-500 ease-in-out lg:hidden pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="px-6 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-3xl font-display font-bold text-on-surface hover:text-primary transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-primary/5 space-y-4">
            {user ? (
              <Link
                to={user.role === 'ADMIN' ? '/admin' : '/dashboard'}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-4 bg-primary/5 rounded-stitch text-primary font-bold"
              >
                Mon Espace Client <ChevronRight size={20} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-bold text-on-surface"
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg shadow-lg"
                >
                  S'inscrire <ChevronRight size={20} />
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile decorative circles */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-y-1/2"></div>
      </div>
    </nav>
  );
};

export default Navbar;
