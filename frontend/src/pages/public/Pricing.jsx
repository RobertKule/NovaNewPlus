import React from 'react';
import { Check, ArrowRight, Zap, Users, Briefcase, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlanCard = ({ title, price, speed, data, features, highlight, icon: Icon, subtext }) => (
  <div className={`card relative flex flex-col h-full transition-all duration-500 border-2 ${highlight ? 'border-primary ring-4 ring-primary/5 bg-surface-lowest scale-105 z-10' : 'border-primary/5 hover:border-primary/20'}`}>
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
        Le plus populaire
      </div>
    )}

    <div className="mb-8">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-primary/5 text-primary'}`}>
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-display font-bold text-on-surface mb-2">{title}</h3>
      <p className="text-on-surface/50 text-xs font-bold uppercase tracking-widest mb-4">{subtext}</p>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-4xl font-extrabold text-on-surface">{price}</span>
        <span className="text-on-surface/60 font-medium">/mois</span>
      </div>
      {title === "Essentiel" && (
        <p className="text-sm font-medium text-primary/70">Ou environ 220 000 FC</p>
      )}
    </div>

    <div className="space-y-6 flex-grow">
      <div className="p-4 bg-surface-container-low rounded-stitch border border-primary/5">
        <div className="flex items-center gap-3 mb-3">
          <Zap size={20} className="text-primary" />
          <div>
            <p className="text-xl font-bold text-on-surface">{speed}</p>
            <p className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest leading-none">Vitesse de téléchargement</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Info size={20} className="text-primary" />
          <div>
            <p className="text-xl font-bold text-on-surface">{data}</p>
            <p className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest leading-none">Volume mensuel inclus</p>
          </div>
        </div>
      </div>

      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-on-surface/70">
            <Check size={18} className="text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
        {title === "Famille" && (
          <li className="flex items-start gap-3 text-xs font-bold text-primary italic">
            <Info size={16} className="shrink-0" />
            <span>Engagement 12 mois</span>
          </li>
        )}
      </ul>
    </div>

    <div className="mt-10">
      <Link to="/register" className={`w-full py-4 rounded-stitch font-bold flex items-center justify-center gap-2 transition-all ${highlight ? 'bg-primary text-white shadow-xl hover:opacity-90 active:scale-95' : 'bg-surface-container-high text-primary hover:bg-primary/10'}`}>
        Choisir ce forfait <ArrowRight size={18} />
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="bg-surface pb-24 font-body">
      {/* Header - Aligné sur Stitch */}
      <section className="bg-surface-lowest pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3 origin-top-left -z-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-on-surface">
            La haute vitesse, <span className="text-primary underline decoration-primary/20 underline-offset-8">sans limites</span>.
          </h1>
          <p className="text-xl text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            Des forfaits conçus pour connecter Likasi au reste du monde.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlanCard
            title="Essentiel"
            subtext="Idéal pour les particuliers"
            price="79$"
            speed="30 Mbps"
            data="200 Go"
            icon={Zap}
            features={[
              "Installation standard incluse",
              "Router Wi-Fi inclus",
              "Support technique 24/7",
              "Équipement NOVA standard"
            ]}
          />
          <PlanCard
            title="Pro"
            subtext="Performance maximale"
            highlight={true}
            price="149$"
            speed="200 Mbps"
            data="Illimité"
            icon={Briefcase}
            features={[
              "Données illimitées",
              "Priorité réseau haute",
              "Installation prioritaire",
              "Équipement Haute Performance",
              "Support technique VIP"
            ]}
          />
          <PlanCard
            title="Famille"
            subtext="Multi-utilisateurs"
            price="99$"
            speed="100 Mbps"
            data="Illimité"
            icon={Users}
            features={[
              "Idéal pour le streaming 4K",
              "Navigation sans compter",
              "Router Mesh compatible",
              "Portail parent disponible"
            ]}
          />
        </div>
      </section>

      {/* Solution Sur-mesure - Aligné sur Stitch */}
      <section className="max-w-5xl mx-auto px-4 mt-24">
        <div className="card bg-surface-container-low border border-primary/5 p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-display font-bold mb-4">Besoin d'une solution sur-mesure ?</h2>
            <p className="text-on-surface/60 text-lg leading-relaxed">
              Pour les grandes entreprises, les institutions ou le secteur minier, contactez notre équipe dédiée pour une infrastructure personnalisée.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <button className="w-full btn-primary py-4 flex items-center justify-center gap-3">
              Découvrir l'offre Entreprise <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ rapide Pricing */}
      <section className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <p className="text-on-surface/50 text-sm italic">
          * Les frais d'équipements sont à régler une seule fois lors de la première commande. Nos tarifs incluent la TVA applicable.
        </p>
      </section>
    </div>
  );
};

export default Pricing;
