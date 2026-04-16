import React from 'react';
import { Check, ArrowRight, Zap, Users, Briefcase, Star, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlanCard = ({ title, price, speed, data, icon: Icon, description, features, highlight, badge }) => (
  <div className={`
    relative flex flex-col p-10 rounded-stitch transition-all duration-500
    ${highlight ? 'bg-primary text-white scale-105 z-10 shadow-2xl shadow-primary/40' : 'bg-surface-container-lowest text-on-surface shadow-long-fall hover:-translate-y-2'}
  `}>
    {badge && (
      <div className="absolute top-6 right-6">
         <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${highlight ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
            <Flame size={12} fill="currentColor" /> {badge}
         </div>
      </div>
    )}

    <div className="mb-10">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${highlight ? 'bg-white/10' : 'bg-primary/5 text-primary'}`}>
        <Icon size={24} className="stroke-[2.5px]" />
      </div>
      <h3 className="text-3xl font-black tracking-tight uppercase italic mb-2">{title}</h3>
      <p className={`text-xs font-bold leading-relaxed ${highlight ? 'text-white/60' : 'text-on-surface/40'}`}>
        {description}
      </p>
    </div>

    <div className="flex items-baseline gap-1 mb-10">
      <span className="text-6xl font-black tracking-tighter">${price}</span>
      <span className={`text-[10px] font-black uppercase tracking-widest ${highlight ? 'text-white/40' : 'text-on-surface/30'}`}>/ mois</span>
    </div>

    <div className="space-y-8 flex-grow">
      {/* Specs Grid */}
      <div className="grid grid-cols-2 gap-3">
         <div className={`p-4 rounded-stitch-sm ${highlight ? 'bg-white/10' : 'bg-surface-container-low'}`}>
            <p className={`text-[8px] font-black uppercase tracking-widest mb-1 ${highlight ? 'text-white/40' : 'text-on-surface/30'}`}>Vitesse</p>
            <p className="text-lg font-black tracking-tight">{speed}</p>
         </div>
         <div className={`p-4 rounded-stitch-sm ${highlight ? 'bg-white/10' : 'bg-surface-container-low'}`}>
            <p className={`text-[8px] font-black uppercase tracking-widest mb-1 ${highlight ? 'text-white/40' : 'text-on-surface/30'}`}>Volume</p>
            <p className="text-lg font-black tracking-tight">{data}</p>
         </div>
      </div>

      {/* Feature List */}
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 size={16} className={highlight ? 'text-white/40' : 'text-primary/40'} />
            <span className={`text-xs font-bold italic uppercase tracking-tight ${highlight ? 'text-white/80' : 'text-on-surface/60'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <Link 
      to="/register" 
      className={`
        mt-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 transition-all active:scale-95
        ${highlight ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white shadow-xl shadow-primary/20 hover:opacity-90'}
      `}
    >
      Choisir ce plan <ArrowRight size={14} />
    </Link>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Essentiel",
      price: "49",
      speed: "30 Mbps",
      data: "200 Go",
      description: "Idéal pour les petites familles et le travail à domicile.",
      icon: Zap,
      features: ["Router Multi-mode", "Installation standard", "Support 24/7"]
    },
    {
      title: "Populaire",
      price: "129",
      speed: "200 Mbps",
      data: "Illimité",
      description: "La solution ultime pour les entreprises et le streaming.",
      icon: Briefcase,
      highlight: true,
      badge: "Meilleure Vente",
      features: ["Priorité réseau", "Antenne Pro", "Support dédié 1h"]
    },
    {
      title: "Famille",
      price: "50",
      speed: "100 Mbps",
      data: "Illimité",
      description: "Le parfait équilibre entre performance et budget.",
      icon: Users,
      features: ["Streaming HD/4K", "Appareils illimités", "Contrôle parental"]
    }
  ];

  return (
    <div className="bg-surface pb-32 font-display">
      {/* Pricing Header */}
      <section className="pt-40 pb-32 px-4 text-center">
         <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top duration-1000">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Nos Forfaits</h4>
            <h1 className="text-5xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter uppercase italic">
              Choisissez celui qui vous <span className="text-primary not-italic underline decoration-primary/20 underline-offset-8">convient</span> le mieux.
            </h1>
            <p className="text-lg text-on-surface/40 max-w-xl font-medium leading-relaxed italic">
              "L'excellence de la technologie satellite accessible à tous les budgets à Likasi."
            </p>
         </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
        </div>
      </section>

      {/* Comparison Nudge */}
      <section className="max-w-3xl mx-auto px-4 text-center">
         <div className="p-12 rounded-stitch-sm bg-surface-container-low border border-on-surface/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
               <h3 className="text-xl font-black mb-1 uppercase italic tracking-tight">Besoin de plus ?</h3>
               <p className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Contactez notre équipe de vente pour les besoins miniers.</p>
            </div>
            <Link to="/support" className="px-8 py-4 bg-on-surface text-surface rounded-full font-black text-[10px] uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all">
               Nous contacter
            </Link>
         </div>
      </section>

      {/* Local Support Banner */}
      <div className="mt-32 border-t border-on-surface/5 pt-16 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/20">
           Toutes nos offres incluent un support physique à Likasi
         </p>
      </div>
    </div>
  );
};

export default Pricing;
