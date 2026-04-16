import React from 'react';
import { Shield, Globe, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="card border border-primary/5 hover:bg-primary/5 transition-all group">
    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-on-surface">{title}</h3>
    <p className="text-on-surface/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="bg-surface pb-24 font-body">
      {/* Hero Section - Aligné sur Stitch Final */}
      <section className="bg-surface-lowest pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-on-surface leading-tight">
            Connecter le Haut-Katanga au <span className="text-primary tracking-tight">reste du monde</span>.
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-6">Notre Vision</h2>
            <p className="text-2xl text-on-surface/80 leading-relaxed mb-8 font-light">
              Chez NOVA+, nous croyons que l'accès à l'information est un droit fondamental. Dans le paysage vaste et diversifié du Haut-Katanga, les infrastructures terrestres traditionnelles ne suffisent plus.
            </p>
            <div className="p-8 bg-surface-container-low border-l-4 border-primary rounded-r-stitch italic text-lg text-primary/80">
              "Nous déployons la technologie satellite LEO pour apporter le haut débit là où les câbles ne peuvent pas aller."
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] rotate-3 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800"
              alt="Likasi Connectivity"
              className="rounded-[40px] shadow-2xl relative z-10 w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Values Section - Aligné sur Stitch */}
      <section className="py-24 bg-surface px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-on-surface">Le socle de notre engagement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title="Reliability"
              description="Une connexion stable, peu importe la météo ou la géographie de Likasi et ses environs."
            />
            <ValueCard
              icon={Target}
              title="Innovation"
              description="Utilisation des dernières constellations de satellites en orbite basse pour une latence minimale."
            />
            <ValueCard
              icon={Users}
              title="Local Commitment"
              description="Un bureau technique et un support client basés directement à Likasi pour une proximité totale."
            />
          </div>
        </div>
      </section>

      {/* Local Presence - Aligné sur Stitch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
        <div className="card bg-atmospheric text-white p-12 overflow-hidden relative">
          <Globe size={300} className="absolute -right-20 -bottom-20 text-white/5 -z-0" />
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-display font-bold mb-6 italic">Présence Locale à Likasi</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Notre équipe d'experts katangais assure une installation rapide et une maintenance de proximité.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Bureau Technique Likasi</h4>
                  <p className="text-sm text-white/60">Situé au cœur de la ville, notre centre opérationnel gère le déploiement sur l'ensemble du territoire du Haut-Katanga.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 tracking-tight">Prêt à nous rejoindre ?</h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Choisissez le forfait qui correspond à vos besoins et entrez dans l'ère de la connectivité NOVA+.
          </p>
          <Link to="/offres" className="inline-flex items-center gap-3 py-4 px-10 bg-white text-primary font-bold rounded-stitch hover:bg-surface-container-low transition-all shadow-xl hover:-translate-y-1">
            Découvrir les offres <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
