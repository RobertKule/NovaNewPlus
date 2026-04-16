import React, { useState } from 'react';
import { Mail, MapPin, Clock, ChevronDown, Send, MessageCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Comment puis-je m'abonner à NOVA+ ?",
    answer: "C'est très simple ! Vous pouvez vérifier votre éligibilité sur notre page de couverture, choisir votre forfait et remplir le formulaire d'inscription. Notre équipe vous contactera sous 24h pour planifier l'installation."
  },
  {
    question: "Quel est le délai d'installation ?",
    answer: "Une fois votre commande validée, nous intervenons généralement sous 48h à 72h ouvrables partout à Likasi."
  },
  {
    question: "Comment payer mon abonnement mensuel ?",
    answer: "Nous acceptons les paiements via M-Pesa, Airtel Money et Orange Money directement depuis votre espace client."
  },
  {
    question: "L'internet satellite fonctionne-t-il pendant la pluie ?",
    answer: "La technologie NOVA+ est conçue pour résister aux conditions climatiques du Haut-Katanga. Une légère baisse de débit peut survenir lors de très fortes averses, mais la connexion reste stable."
  }
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-surface pb-24 font-body">
      {/* Hero Section - Aligné sur Stitch */}
      <section className="bg-surface-lowest py-24 px-4 border-b border-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-on-surface leading-tight">
            Besoin d'aide ? Notre équipe est à <span className="text-primary">votre écoute</span>.
          </h1>
          <p className="text-xl text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            Solutions de connectivité ultra-rapides pour la communauté de Likasi et du Haut-Katanga.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid lg:grid-cols-3 gap-12">

        {/* Colonne de Gauche : Contact & Info Visite */}
        <div className="lg:col-span-1 space-y-8">
          <div className="card bg-primary text-white p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Mail className="text-white/80" /> Envoyez un message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 rounded-stitch bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 rounded-stitch bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all"
              />
              <textarea
                rows="4"
                placeholder="Votre message"
                className="w-full p-3 rounded-stitch bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all shadow-inner"
              ></textarea>
              <button className="w-full py-4 bg-white text-primary font-bold rounded-stitch flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors shadow-lg">
                Envoyer <Send size={18} />
              </button>
            </form>
          </div>

          <div className="card border border-primary/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
              <MapPin size={22} /> Visitez-nous
            </h3>
            <p className="font-bold text-on-surface mb-1">Notre agence centrale à Likasi</p>
            <p className="text-on-surface/60 mb-6 leading-relaxed">
              Avenue de l'Église<br />
              Likasi, République Démocratique du Congo
            </p>

            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
              <Clock size={22} /> Heures d'ouverture
            </h3>
            <p className="text-on-surface/60 leading-relaxed">
              Lundi - Vendredi: 08h00 - 17h00<br />
              Samedi - Dimanche: Fermé
            </p>
          </div>
        </div>

        {/* Colonne de Droite : FAQ */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-display font-bold mb-8 text-on-surface">Foire aux questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="card p-0 border border-primary/5 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors"
                >
                  <span className="font-bold text-lg text-on-surface pr-8">{item.question}</span>
                  <ChevronDown
                    className={`text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="p-6 pt-0 text-on-surface/70 leading-relaxed border-t border-primary/5 bg-surface-lowest">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action Support Direct */}
          <div className="mt-12 p-8 bg-surface-container-low rounded-stitch border border-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <MessageCircle size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Assistance technique en direct</h4>
                <p className="text-on-surface/60 text-sm">Disponible via WhatsApp pour nos clients actifs.</p>
              </div>
            </div>
            <button className="btn-secondary whitespace-nowrap">Ouvrir WhatsApp</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
