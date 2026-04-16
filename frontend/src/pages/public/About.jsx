import React from 'react';
import { Target, Eye, Heart, ShieldCheck, Zap, Globe, Users, Headphones, CheckCircle2 } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-10 rounded-stitch bg-surface-container-lowest shadow-long-fall hover:-translate-y-2 transition-all duration-500 flex flex-col items-start gap-6">
    <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center">
      <Icon size={24} className="stroke-[2.5px]" />
    </div>
    <div>
      <h3 className="text-xl font-black mb-3 tracking-tight uppercase italic">{title}</h3>
      <p className="text-sm font-medium leading-relaxed text-on-surface/50">
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-surface font-display pb-32">
      {/* Header Section */}
      <section className="pt-40 pb-32 px-4 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.02] -skew-y-3 origin-center saturate-200"></div>
        <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in slide-in-from-top duration-1000">
           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 underline decoration-primary/10 underline-offset-8 decoration-4">Notre Histoire</h4>
           <h1 className="text-5xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter uppercase italic">
             Connecter Likasi au reste du <span className="text-primary not-italic">monde.</span>
           </h1>
           <p className="text-xl text-on-surface/40 max-w-2xl mx-auto font-medium leading-relaxed italic mt-10">
             "En tant qu'acteur local majeur, NOVA+ s'engage à transformer l'accessibilité numérique dans le Haut-Katanga avec la technologie satellitaire la plus avancée."
           </p>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-32 px-4 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
           <div className="max-w-3xl mb-24">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Notre Engagement</h4>
              <h2 className="text-4xl md:text-6xl font-black text-on-surface leading-[0.95] tracking-tighter uppercase italic mb-8">
                L'excellence opérationnelle au service de la région.
              </h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard 
                icon={ShieldCheck}
                title="Fiabilité Absolue"
                description="Notre infrastructure satellite LEO garantit une connexion stable même dans les zones les plus isolées de Likasi."
              />
              <ValueCard 
                icon={Zap}
                title="Innovation Continue"
                description="Nous déployons les dernières technologies SpaceX et satellites pour offrir des débits équivalents à la fibre optique."
              />
              <ValueCard 
                icon={Heart}
                title="Ancrage Local"
                description="Nous ne sommes pas juste un fournisseur, nous sommes vos voisins avec un support physique direct sur l'Avenue de l'Église."
              />
           </div>
        </div>
      </section>

      {/* Team / Mission Section */}
      <section className="py-32 px-4 bg-white">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
               <h3 className="text-4xl font-black text-on-surface mb-6 tracking-tight uppercase italic underline decoration-primary/20 decoration-8 underline-offset-4">Notre Appréche</h3>
               <p className="text-on-surface/60 text-lg leading-relaxed font-medium">
                 Depuis notre lancement, nous avons compris que la connectivité n'est plus un luxe, mais un moteur de développement économique essentiel pour Likasi.
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-stitch bg-surface-container-low">
                     <p className="text-4xl font-black text-primary mb-2 tracking-tighter italic">500+</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/30">Clients Actifs</p>
                  </div>
                  <div className="p-6 rounded-stitch bg-surface-container-low">
                     <p className="text-4xl font-black text-primary mb-2 tracking-tighter italic">24/7</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/30">Monitoring Réseau</p>
                  </div>
               </div>

               <div className="space-y-6 pt-6">
                  {[
                    "Transparence totale sur les débits réels",
                    "Installation professionnelle certifiée",
                    "Épanouissement technologique local"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <CheckCircle2 size={16} className="text-primary/40 group-hover:text-primary transition-all" />
                       <span className="font-bold text-on-surface/80 group-hover:text-primary transition-colors italic uppercase tracking-tight text-xs">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative group order-1 lg:order-2">
               <div className="absolute inset-0 bg-primary/5 rounded-[40px] rotate-3 -z-10 animate-pulse"></div>
               <img 
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" 
                 alt="NOVA+ Team Likasi" 
                 className="relative z-10 rounded-[40px] shadow-2xl object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute -top-10 -right-10 bg-primary w-24 h-24 rounded-full flex items-center justify-center shadow-2xl z-20 hidden md:flex hover:rotate-12 transition-all">
                  <Globe className="text-white" size={32} />
               </div>
            </div>
         </div>
      </section>

      {/* Presence Locale Banner */}
      <section className="py-24 px-4 bg-on-surface text-surface text-center overflow-hidden relative">
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[200px]"></div>
         </div>
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase italic underline decoration-white/20 underline-offset-8">Likasi est notre priorité.</h2>
            <p className="text-surface/60 text-lg leading-relaxed font-medium mb-12">
              Nous investissons massivement dans les infrastructures locales et la formation technique pour faire de Likasi un hub numérique de référence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-12 font-black uppercase tracking-[0.3em] text-[10px]">
               <div className="flex items-center gap-3"><MapPin size={16} /> Avenue de l'Église, Likasi</div>
               <div className="flex items-center gap-3"><Headphones size={16} /> +243 00 000 000</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
