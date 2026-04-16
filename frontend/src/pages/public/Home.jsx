import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Globe, ShieldCheck, ArrowRight, Server, Users, Satellite, MapPin, CheckCircle2, Headphones, Activity } from 'lucide-react';
import { LOGO_URL } from '../../constants';

const FeatureCard = ({ icon: Icon, title, description, dark = false }) => (
  <div className={`
    p-10 rounded-stitch transition-all duration-500 flex flex-col items-start gap-6
    ${dark ? 'bg-primary text-white' : 'bg-surface-container-lowest text-on-surface shadow-long-fall hover:-translate-y-2'}
  `}>
    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${dark ? 'bg-white/10' : 'bg-primary/5 text-primary'}`}>
      <Icon size={24} className="stroke-[2.5px]" />
    </div>
    <div>
      <h3 className="text-xl font-black mb-3 tracking-tight uppercase italic">{title}</h3>
      <p className={`text-sm leading-relaxed font-medium ${dark ? 'text-white/70' : 'text-on-surface/50'}`}>
        {description}
      </p>
    </div>
  </div>
);

const TrustLogo = ({ name }) => (
  <div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
    <div className="w-8 h-8 bg-on-surface/10 rounded-full"></div>
    <span className="text-[10px] font-black uppercase tracking-widest">{name}</span>
  </div>
);

const Home = () => {
  return (
    <div className="font-display overflow-x-hidden bg-surface">
      {/* HERO SECTION - RECRÉATION FIDÈLE DES CAPTURES */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova_satellite_hero_orbital_1776348655816.png" 
            alt="Orbital Horizon" 
            className="w-full h-full object-cover scale-110 animate-pulse-slow brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-surface"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
           <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Connectivité Illimitée</span>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
             Internet haut débit par satellite – partout à <span className="text-white not-italic underline decoration-primary/50 underline-offset-8">Likasi</span>
           </h1>
           
           <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
             Libérez le potentiel de votre entreprise et de votre foyer avec la vitesse NOVA+. Pas de câbles, pas de limites, juste une connexion pure.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <Link to="/register" className="btn-primary py-5 px-12 text-center text-lg w-full sm:w-auto shadow-2xl shadow-primary/40">
               Découvrir maintenant
             </Link>
             <Link to="/couverture" className="btn-secondary py-5 px-12 text-center text-lg w-full sm:w-auto bg-white/90 backdrop-blur-md text-primary hover:bg-white">
               Tester mon éligibilité
             </Link>
           </div>
        </div>

        {/* Partners Confidence */}
        <div className="absolute bottom-12 left-0 right-0 z-10 hidden md:block">
           <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/40">Partenaires de confiance à Likasi</p>
              <div className="flex gap-12 items-center justify-center">
                 <TrustLogo name="Airtel" />
                 <TrustLogo name="M-Pesa" />
                 <TrustLogo name="Orange" />
                 <TrustLogo name="Gécamines" />
              </div>
           </div>
        </div>
      </section>

      {/* WHY NOVA+ SECTION */}
      <section className="py-32 px-4 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Pourquoi NOVA+</h4>
            <h2 className="text-4xl md:text-6xl font-black text-on-surface leading-[0.95] tracking-tighter uppercase italic mb-8">
              La technologie orbitale au service de vos ambitions.
            </h2>
            <p className="text-lg text-on-surface/50 max-w-xl font-medium leading-relaxed">
              Nous avons conçu une infrastructure qui ignore les obstacles géographiques pour vous offrir le meilleur du web à Likasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap} 
              title="Vitesse Ultra-Rapide" 
              description="Téléchargez des fichiers volumineux et streamez en 4K sans aucune interruption, même en plein cœur de la savane."
            />
            <FeatureCard 
              icon={Globe} 
              title="Couverture Totale" 
              description="Où que vous soyez à Likasi et ses environs, notre constellation de satellites vous garantit un signal puissant 24/7."
              dark={true}
            />
            <FeatureCard 
              icon={Server} 
              title="Multi-appareils" 
              description="Connectez tous vos terminaux simultanément sans perte de performance. Idéal pour les familles et les bureaux."
            />
          </div>
        </div>
      </section>

      {/* LOCAL PRESENCE SECTION - D'APRÈS LES CAPTURES */}
      <section className="py-32 px-4 bg-white">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-primary/5 rounded-stitch transition-all group-hover:inset-0"></div>
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                 alt="Technical Support Likasi" 
                 className="relative z-10 rounded-stitch shadow-2xl object-cover aspect-video"
               />
               <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-stitch shadow-2xl z-20 hidden md:block">
                  <Activity className="text-white mb-4" size={32} />
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Status Réseau</p>
                  <p className="text-xl font-black text-white uppercase italic">Optimal 99.9%</p>
               </div>
            </div>
            
            <div className="space-y-10">
               <div>
                  <h3 className="text-4xl font-black text-on-surface mb-6 tracking-tight uppercase italic underline decoration-primary/20 decoration-8 underline-offset-4">Présence Locale à Likasi</h3>
                  <p className="text-on-surface/60 text-lg leading-relaxed font-medium">
                    Notre équipe d'experts locaux garantit une installation rapide et une maintenance de proximité pour ne jamais vous laisser hors ligne.
                  </p>
               </div>
               
               <div className="space-y-6">
                  {[
                    "Installation sous 48h garantie",
                    "Support technique bilingue (Français/Swahili)",
                    "Bureau physique sur l'Avenue de l'Église"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-6 h-6 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle2 size={14} />
                       </div>
                       <span className="font-bold text-on-surface/80 group-hover:text-primary transition-colors">{item}</span>
                    </div>
                  ))}
               </div>

               <Link to="/support" className="inline-flex items-center gap-3 font-display font-black uppercase tracking-widest text-xs text-primary group">
                 Nous contacter <ArrowRight size={16} className="group-hover:translate-x-2 transition-all" />
               </Link>
            </div>
         </div>
      </section>

      {/* FINAL CTA - D'APRÈS LES CAPTURES */}
      <section className="py-24 px-4">
         <div className="max-w-5xl mx-auto rounded-[40px] bg-primary overflow-hidden relative p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-10">
               <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">Prêt à nous rejoindre ?</h2>
               <p className="text-white/60 text-lg max-w-xl font-medium">
                 Choisissez le forfait qui correspond le mieux à vos besoins et entrez dans l'ère de la connectivité NOVA+.
               </p>
               <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
                 <Link to="/offres" className="btn-secondary py-5 px-12 bg-white text-primary rounded-full hover:bg-white/90">
                   Voir les plans
                 </Link>
                 <Link to="/support" className="py-5 px-12 border-2 border-white text-white rounded-full font-display font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                   Nous contacter
                 </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
