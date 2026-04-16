import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Globe, ShieldCheck, ArrowRight, Server, Users } from 'lucide-react';
import { LOGO_URL } from '../../constants';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="card group hover:bg-primary transition-all duration-500">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-on-surface/70 group-hover:text-white/80 transition-colors leading-relaxed">
      {description}
    </p>
  </div>
);

const Home = () => {
  return (
    <div className="font-body overflow-x-hidden">
      {/* Hero Section - Aligné sur Stitch Premium */}
      <section className="relative min-h-[90vh] flex items-center bg-surface-lowest overflow-hidden">
        {/* Cercles décoratifs Design "Orbital" */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-on-surface leading-[1.1] mb-8">
              Libérez le potentiel avec la vitesse <span className="text-primary">NOVA+</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface/70 mb-10 max-w-xl leading-relaxed">
              Libérez le potentiel de votre entreprise et de votre foyer avec la vitesse NOVA+. Pas de câbles, pas de limites, juste une connexion pure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/offres" className="btn-primary py-4 px-8 text-center text-lg flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform">
                Découvrir nos offres <ArrowRight size={20} />
              </Link>
              <Link to="/couverture" className="btn-secondary py-4 px-8 text-center text-lg border border-primary/10 hover:bg-surface-container-low transition-colors">
                Vérifier ma couverture
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 p-4 border-l-4 border-primary bg-primary/5 rounded-r-stitch">
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Partenaires de Confiance à Likasi</p>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            {/* Image placeholder for Satellite Dish / Connection visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-[40px] rotate-3 -z-10 blur-sm"></div>
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="Connexion Satellite NOVA+"
                className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-[4/5] object-cover"
              />
              {/* Badge flottant Vitesse */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-stitch shadow-2xl z-20 flex items-center gap-4 border border-primary/5 animate-bounce-slow">
                <div className="p-3 bg-primary text-white rounded-full"><Zap size={24} /></div>
                <div>
                  <p className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Vitesse Max</p>
                  <p className="text-2xl font-display font-bold text-primary">200 Mbps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Aligné sur Stitch */}
      <section className="py-24 bg-surface px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6 text-on-surface">Une infrastructure sans obstacles</h2>
            <p className="text-on-surface/60 text-lg leading-relaxed">
              Nous avons conçu une infrastructure qui ignore les obstacles géographiques pour vous offrir le meilleur du web.
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
            />
            <FeatureCard
              icon={Users}
              title="Multi-utilisateurs"
              description="Connectez tous vos terminaux simultanément sans perte de performance. Idéal pour les familles et les bureaux."
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Redéfinir la connectivité */}
      <section className="py-24 bg-atmospheric text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/4 -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Redéfinir la connectivité en Afrique centrale
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light italic">
              "L'innovation satellitaire de pointe au service du développement de Likasi."
            </p>
            <Link to="/register" className="inline-flex items-center gap-3 py-4 px-10 bg-white text-primary font-bold rounded-stitch hover:bg-surface-container-low transition-colors shadow-2xl">
              S'inscrire maintenant <ShieldCheck size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-lowest border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center font-display">
          <div>
            <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-sm font-bold text-on-surface/40 uppercase tracking-widest">Disponibilité</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">Likasi</p>
            <p className="text-sm font-bold text-on-surface/40 uppercase tracking-widest">Siège Social</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-sm font-bold text-on-surface/40 uppercase tracking-widest">Support Technique</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">Fiber-like</p>
            <p className="text-sm font-bold text-on-surface/40 uppercase tracking-widest">Expérience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
