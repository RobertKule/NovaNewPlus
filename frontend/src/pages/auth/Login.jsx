import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
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

    // Simulate login for frontend demo
    setTimeout(() => {
      if (email === 'admin@novaplus.com' && password === 'Admin123!') {
        localStorage.setItem('token', 'mock_token_admin');
        localStorage.setItem('user', JSON.stringify({ name: 'Admin NOVA+', role: 'ADMIN' }));
        navigate('/admin');
      } else if (email === 'test@client.com' && password === 'Test123!') {
        localStorage.setItem('token', 'mock_token_client');
        localStorage.setItem('user', JSON.stringify({ name: 'Client Test', role: 'USER' }));
        navigate('/dashboard');
      } else {
        setError("Identifiants incorrects. Testez avec test@client.com / Test123!");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-surface relative overflow-hidden font-body py-12 px-4 sm:px-6 lg:px-8">
      {/* Design Orbital Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link to="/">
            <div className="flex justify-center items-center gap-2 mb-8">
              <img src={LOGO_URL} alt="NOVA+" className="h-10 w-auto" />
            </div>
          </Link>
          <h2 className="text-3xl font-display font-bold text-on-surface tracking-tight">Accès Espace Client</h2>
          <p className="mt-2 text-on-surface/50 font-medium">Gérez votre connexion satellite haut débit</p>
        </div>

        <div className="card shadow-2xl bg-white/80 backdrop-blur-xl border border-white/40 p-10 animate-in fade-in zoom-in-95 duration-500">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-600 text-sm rounded-stitch flex items-start gap-3">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mb-2 px-1">Adresse Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface/30 group-focus-within:text-primary transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 p-4 bg-surface-container-high border-none rounded-stitch text-on-surface placeholder:text-on-surface/30 outline-none ring-2 ring-transparent focus:ring-primary/20 transition-all font-medium"
                  placeholder="nom@exemple.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <label className="block text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">Mot de passe</label>
                <a href="#" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                  Oublié ?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface/30 group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 p-4 bg-surface-container-high border-none rounded-stitch text-on-surface placeholder:text-on-surface/30 outline-none ring-2 ring-transparent focus:ring-primary/20 transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-primary bg-surface border-primary/20 rounded focus:ring-primary/30" />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-on-surface/60 font-medium">
                Rester connecté
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-4 px-6 flex justify-center items-center gap-3 text-lg shadow-xl shadow-primary/20 group overflow-hidden relative"
            >
              <span className="relative z-10">{isLoading ? 'Identification...' : 'Se connecter'}</span>
              {!isLoading && <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
              {isLoading && <div className="absolute inset-0 bg-primary-dark/20 animate-pulse"></div>}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-primary/5 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck size={14} /> Connexion 256-bit SSL
            </div>
            <p className="text-sm text-on-surface/60 font-medium">
              Nouveau chez NOVA+ ?{' '}
              <Link to="/register" className="text-primary font-bold hover:underline decoration-2 underline-offset-4">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
