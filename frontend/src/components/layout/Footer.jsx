import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Zap, Globe, MessageCircle } from 'lucide-react';
import { LOGO_URL } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low pt-24 pb-32 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-stitch-sm flex items-center justify-center overflow-hidden">
                 <img src={LOGO_URL} alt="NOVA+" className="w-8 h-8 object-contain brightness-0 invert" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase italic">
                NOVA<span className="text-primary not-italic">+</span>
              </span>
            </Link>
            <p className="text-on-surface/40 text-sm leading-relaxed mb-8">
              La solution de connectivité satellite haute performance pour Likasi et toute la région du Haut-Katanga.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-stitch-sm bg-surface-container-high text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Offres', 'Couverture', 'À Propos'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-on-surface/60 hover:text-primary font-bold text-sm transition-colors block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Assistant Info */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Assistance</h4>
            <ul className="space-y-4">
              {['Centre d\'aide', 'Espace Client', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link to="/support" className="text-on-surface/60 hover:text-primary font-bold text-sm transition-colors block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Badges */}
          <div className="space-y-6">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Paiements Sécurisés</h4>
             <div className="flex flex-wrap gap-2">
                {['M-Pesa', 'Airtel', 'Orange'].map((badge) => (
                  <div key={badge} className="px-3 py-1.5 bg-surface-container-lowest rounded-md text-[10px] font-black text-on-surface/40 uppercase tracking-widest border border-on-surface/5">
                    {badge}
                  </div>
                ))}
             </div>
             <p className="text-[10px] text-on-surface/30 italic">
               Toutes vos transactions sont sécurisées par cryptage SSL 256 bits.
             </p>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/30 italic">
             Copyright © 2025 NOVA+ – Internet haut débit par satellite à Likasi. Tous droits réservés.
           </p>
           <div className="flex gap-8">
              <Link to="#" className="text-[10px] font-bold text-on-surface/30 hover:text-primary uppercase tracking-widest">Mentions Légales</Link>
              <Link to="#" className="text-[10px] font-bold text-on-surface/30 hover:text-primary uppercase tracking-widest">Confidentialité</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
