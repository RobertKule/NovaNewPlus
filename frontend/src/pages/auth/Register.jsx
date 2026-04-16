import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User as UserIcon,
  Mail,
  Lock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Zap,
  Globe
} from 'lucide-react';
import { LOGO_URL } from '../../constants';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    quartier: '',
    name: '',
    email: '',
    password: '',
    offer: 'Famille'
  });

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    // Simulate registration
    localStorage.setItem('token', 'mock_token_new');
    localStorage.setItem('user', JSON.stringify({ name: formData.name, role: 'USER' }));
    navigate('/dashboard');
  };

  const plans = [
    { id: 'Essentiel', price: '79$', speed: '30 Mbps', icon: Zap },
    { id: 'Famille', price: '99$', speed: '100 Mbps', icon: Globe, popular: true },
    { id: 'Pro', price: '149$', speed: '200 Mbps', icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-surface font-body overflow-x-hidden relative flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-primary/5 -z-10 -skew-y-6 origin-top"></div>

      <div className="max-w-xl w-full mx-auto relative z-10">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <Link to="/">
            <img src={LOGO_URL} alt="NOVA+" className="h-10 w-auto mx-auto mb-6" />
          </Link>
          <h2 className="text-3xl font-display font-bold text-on-surface tracking-tight">Rejoindre NOVA+</h2>
          <p className="mt-2 text-on-surface/50 font-medium">L'internet satellite haut débit à Likasi</p>
        </div>

        {/* Progress Stepper - Aligné Design Stitch */}
        <div className="flex items-center justify-between mb-12 px-2 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>

          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 transition-all duration-300 ${step > s ? 'bg-primary border-primary text-white' :
                  step === s ? 'bg-white border-primary text-primary shadow-lg shadow-primary/20 scale-110' :
                    'bg-white border-primary/10 text-on-surface/30'
                }`}>
                {step > s ? <CheckCircle2 size={18} /> : s}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest mt-3 transition-colors ${step >= s ? 'text-primary' : 'text-on-surface/30'}`}>
                {s === 1 ? 'Couverture' : s === 2 ? 'Compte' : 'Forfait'}
              </span>
            </div>
          ))}
        </div>

        <div className="card shadow-2xl bg-white border border-primary/5 p-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <form onSubmit={handleNext} className="space-y-8">

            {/* Étape 1 : Zone de Couverture */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold mb-2 text-on-surface flex items-center gap-2">
                  <MapPin size={22} className="text-primary" /> Vérifier votre zone
                </h3>
                <p className="text-sm text-on-surface/60 mb-8 leading-relaxed">
                  Confirmez que votre domicile à Likasi est prêt pour l'installation satellite.
                </p>
                <div className="space-y-4">
                  <label className="block text-[10px] font-bold text-on-surface/40 uppercase tracking-widest px-1">Quartier / Adresse</label>
                  <input
                    type="text" required
                    className="w-full p-4 bg-surface-container-high rounded-stitch text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium border-none"
                    placeholder="Ex: Kikula, Avenue de l'Église..."
                    value={formData.quartier}
                    onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                  />
                  <div className="flex gap-4 p-4 bg-green-500/5 rounded-stitch border border-green-500/10">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-green-800 leading-relaxed font-medium">Signal optimal détecté. La latence sera inférieure à 30ms avec notre équipement de nouvelle génération.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Étape 2 : Identifiants */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
                <h3 className="text-xl font-bold mb-2 text-on-surface flex items-center gap-2">
                  <UserIcon size={22} className="text-primary" /> Création du profil
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mb-2 px-1">Nom Complet</label>
                    <input
                      type="text" required
                      className="w-full p-4 bg-surface-container-high rounded-stitch text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium border-none"
                      placeholder="Jean Kalambay"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mb-2 px-1">Adresse Email</label>
                    <input
                      type="email" required
                      className="w-full p-4 bg-surface-container-high rounded-stitch text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium border-none"
                      placeholder="jean@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mb-2 px-1">Mot de passe</label>
                    <input
                      type="password" required
                      className="w-full p-4 bg-surface-container-high rounded-stitch text-on-surface outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium border-none"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Étape 3 : Forfait */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold mb-6 text-on-surface">Choisissez votre forfait</h3>
                <div className="space-y-4">
                  {plans.map((p) => (
                    <label key={p.id} className={`flex items-center justify-between p-5 rounded-stitch border-2 cursor-pointer transition-all group ${formData.offer === p.id ? 'border-primary bg-primary/5 ring-4 ring-primary/5' : 'border-primary/5 hover:border-primary/20'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${formData.offer === p.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                          <p.icon size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{p.id} {p.popular && <span className="ml-2 bg-primary/10 text-primary text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">POPULAIRE</span>}</p>
                          <p className="text-xs text-on-surface/50 font-medium">{p.speed} • Illimité</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-display font-bold text-lg text-primary">{p.price}</span>
                        <input
                          type="radio"
                          name="offer"
                          className="w-5 h-5 text-primary bg-surface border-primary/20 focus:ring-primary/30"
                          checked={formData.offer === p.id}
                          onChange={() => setFormData({ ...formData, offer: p.id })}
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-primary/5">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="btn-secondary py-3 flex-1 flex items-center justify-center gap-2">
                  Précédent
                </button>
              )}
              <button type="submit" className="btn-primary py-3 flex-[2] flex items-center justify-center gap-2 text-lg">
                {step === 3 ? "Finaliser l'inscription" : "Continuer"} <ChevronRight size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center animate-in fade-in duration-1000 delay-300">
          <p className="text-sm text-on-surface/60 font-medium">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="text-primary font-bold hover:underline decoration-2 underline-offset-4">Connectez-vous</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
