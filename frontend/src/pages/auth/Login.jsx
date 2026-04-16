import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, ArrowRight, AlertCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { LOGO_URL } from '../../constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'test@client.com' && password === 'Test123!') {
        localStorage.setItem('token', 'mock_token_client');
        localStorage.setItem('user', JSON.stringify({ name: 'Client Test', role: 'USER' }));
        navigate('/dashboard');
      } else {
        setError("Identifiants incorrects. Testez: test@client.com / Test123!");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-surface relative overflow-hidden font-display py-12 px-4">
      {/* Orbital Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center mb-10">
           <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-primary rounded-stitch-sm flex items-center justify-center group-hover:rotate-12 transition-all">
                 <img src={LOGO_URL} alt="NOVA+" className="w-8 h-8 object-contain brightness-0 invert" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase italic">
                NOVA<span className="text-primary not-italic">+</span>
              </span>
           </Link>
           <h2 className="text-4xl font-black text-on-surface tracking-tighter uppercase italic mb-2">Accès Client</h2>
           <p className="text-on-surface/40 text-xs font-bold uppercase tracking-widest italic">Connectez-vous à votre portail satellite</p>
        </div>

        <div className="bg-surface-container-lowest/80 backdrop-blur-xl rounded-[32px] shadow-long-fall border border-on-surface/5 p-10 animate-in fade-in zoom-in-95 duration-700">
           {error && (
             <div className="mb-8 p-4 bg-red-50 text-red-500 rounded-stitch-sm flex items-center gap-3 border border-red-100">
                <AlertCircle size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">{error}</span>
             </div>
           )}

           <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                 <label className="block text-[9px] font-black text-on-surface/30 uppercase tracking-[0.2em] px-1">Identifiant Email</label>
                 <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within:text-primary transition-colors" size={18} />
                    <input 
                      type="email" 
                      required
                      className="w-full pl-14 pr-6 py-5 bg-surface-container-low rounded-full outline-none font-bold text-on-surface placeholder:text-on-surface/20 border-2 border-transparent focus:border-primary/10 transition-all text-sm"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between items-center px-1">
                    <label className="block text-[9px] font-black text-on-surface/30 uppercase tracking-[0.2em]">Mot de passe</label>
                    <button type="button" className="text-[9px] font-black text-primary uppercase tracking-widest hover:underline">Oublié ?</button>
                 </div>
                 <div className="relative group">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within:text-primary transition-colors" size={18} />
                    <input 
                      type="password" 
                      required
                      className="w-full pl-14 pr-6 py-5 bg-surface-container-low rounded-full outline-none font-bold text-on-surface placeholder:text-on-surface/20 border-2 border-transparent focus:border-primary/10 transition-all text-sm"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                 </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full btn-primary py-5 rounded-full shadow-2xl shadow-primary/30 flex justify-center items-center gap-3 disabled:opacity-50"
              >
                <span className="text-xs uppercase tracking-widest leading-none pt-0.5">{isLoading ? 'Identification...' : 'Se Connecter'}</span>
                {!isLoading && <ArrowRight size={16} />}
              </button>
           </form>

           <div className="mt-12 pt-8 border-t border-on-surface/5 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full text-[9px] font-black uppercase tracking-widest text-on-surface/40">
                 <ShieldCheck size={12} /> Sécurité SSL 256 bits
              </div>
              <p className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">
                 Pas encore membre ? <Link to="/register" className="text-primary hover:underline underline-offset-4 decoration-2">Créer un compte</Link>
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
