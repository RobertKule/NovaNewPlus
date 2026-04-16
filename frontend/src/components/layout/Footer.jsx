import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../../constants';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-lowest pt-20 pb-10 border-t border-primary/5 font-body relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={LOGO_URL} alt="NOVA+" className="h-10 w-auto" />
            </Link>
            <p className="text-on-surface/60 text-sm leading-relaxed max-w-xs">
              Connecter Likasi au reste du monde grâce à l'innovation satellitaire de nouvelle génération. Pas de limites, juste du haut débit.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#EE1B22] text-white text-[10px] font-black rounded uppercase tracking-tighter">M-PESA</span>
              <span className="px-3 py-1 bg-[#FF0000] text-white text-[10px] font-black rounded uppercase tracking-tighter">AIRTEL</span>
              <span className="px-3 py-1 bg-[#FF7900] text-white text-[10px] font-black rounded uppercase tracking-tighter">ORANGE</span>
            </div>
            <p className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">Paiements Mobiles Acceptés</p>
          </div>

          {/* Solutions Column */}

          <div>
            <h4 className="text-sm font-black text-on-surface uppercase tracking-widest mb-8 border-l-4 border-primary pl-4">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-on-surface/60">
              <li><Link to="/offres" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Résidentiel</Link></li>
              <li><Link to="/offres" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Entreprise</Link></li>
              <li><Link to="/offres" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Secteur Minier</Link></li>
              <li><Link to="/revendeurs" className="hover:text-primary transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> Programme Revendeur</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-sm font-black text-on-surface uppercase tracking-widest mb-8 border-l-4 border-primary pl-4">Aide & Support</h4>
            <ul className="space-y-4 text-sm font-medium text-on-surface/60">
              <li><Link to="/support" className="hover:text-primary transition-colors">Centre d'assistance</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Installation & Guide</Link></li>
              <li><Link to="/couverture" className="hover:text-primary transition-colors">Vérifier l'éligibilité</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Actualités NOVA+</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-black text-on-surface uppercase tracking-widest mb-8 border-l-4 border-primary pl-4">Nous trouver</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-on-surface/60 font-medium">Avenue de l'Église, Likasi, Republic of the Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-on-surface/60 font-medium">+243 (0) 00 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-on-surface/60 font-medium font-bold">contact@novaplus.cd</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Footer - Aligné Stitch */}
        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-on-surface/40 uppercase tracking-widest text-center md:text-left leading-relaxed">
            Copyright © 2025 <span className="text-primary">NOVA+</span> – Internet haut débit par satellite à Likasi. <br className="md:hidden" /> All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">
            <Link to="#" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link to="#" className="hover:text-primary transition-colors">CGV</Link>
            <Link to="/support" className="hover:text-primary transition-colors">Assistance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple ChevronRight for the list
const ChevronRight = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size} height={size}
    viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default Footer;
