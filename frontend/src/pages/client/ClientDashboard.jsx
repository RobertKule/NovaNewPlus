import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { 
  Activity, 
  FileText, 
  HelpCircle, 
  HardDrive, 
  CreditCard, 
  LogOut, 
  Settings, 
  User as UserIcon,
  ChevronRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Laptop,
  Tv,
  Wallet,
  ArrowUpRight
} from 'lucide-react';

const DeviceItem = ({ icon: Icon, name, type, status }) => (
  <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-stitch-sm border border-transparent hover:border-primary/10 transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-on-surface/40 group-hover:text-primary transition-colors">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-tight">{name}</p>
        <p className="text-[10px] font-bold text-on-surface/30 uppercase tracking-widest">{type}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{status}</span>
    </div>
  </div>
);

const ClientDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('forfait');

  if (!user && !localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="bg-surface min-h-screen font-display pb-32">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-primary/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-in fade-in slide-in-from-top duration-700">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full mb-4 border border-primary/10">
               <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
               <span className="text-[9px] font-black uppercase tracking-widest text-primary">Status: Optimal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-on-surface leading-none tracking-tighter uppercase italic">
              Bonjour, <span className="text-primary not-italic">{user?.name || 'Client'}</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={handleLogout} className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface/40 hover:text-red-500 hover:bg-red-50 transition-all border border-on-surface/5">
                <LogOut size={20} />
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
             
             {/* Consumption Circle Section */}
             <div className="bg-surface-container-lowest p-10 rounded-stitch shadow-long-fall flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 -z-0"></div>
                
                {/* CSS Circle Progress */}
                <div className="relative w-48 h-48 shrink-0">
                   <svg className="w-full h-full transform -rotate-90">
                      <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-surface-container-low" />
                      <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={552.92} strokeDashoffset={552.92 * (1 - 0.75)} className="text-primary transition-all duration-1000 ease-out" strokeLinecap="round" />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <p className="text-4xl font-black text-on-surface tracking-tighter">75%</p>
                      <p className="text-[9px] font-black text-on-surface/30 uppercase tracking-widest">Utilisé</p>
                   </div>
                </div>

                <div className="relative z-10 text-center md:text-left">
                   <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">Volume de données consommé</h3>
                   <p className="text-on-surface/50 text-sm font-medium leading-relaxed mb-6">
                      Vous avez utilisé 648 Go sur votre cycle actuel. Étant sur le forfait Illimité, votre vitesse reste optimale.
                   </p>
                   <div className="flex gap-8">
                      <div>
                         <p className="text-[9px] font-black text-on-surface/30 uppercase tracking-widest mb-1">Session Actuelle</p>
                         <p className="text-xl font-black text-primary italic">12.4 GB</p>
                      </div>
                      <div>
                         <p className="text-[9px] font-black text-on-surface/30 uppercase tracking-widest mb-1">Moyenne / Jour</p>
                         <p className="text-xl font-black text-on-surface italic">21.0 GB</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Service Details Grid */}
             <div className="grid md:grid-cols-2 gap-8">
                {/* Forfait Card */}
                <div className="bg-atmospheric p-10 rounded-stitch text-white relative overflow-hidden group">
                   <Zap size={100} className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-700" />
                   <h4 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-8 border-b border-white/10 pb-4 flex justify-between items-center">
                      Mon Forfait <Link to="/offres" className="hover:text-white"><ArrowUpRight size={14}/></Link>
                   </h4>
                   <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">Populaire</h2>
                   <p className="text-white/60 font-bold text-xs uppercase tracking-widest mb-10 italic">Vitesse Max: 200 Mbps</p>
                   <div className="flex items-center gap-3">
                      <div className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Actif</div>
                      <p className="text-[9px] font-bold text-white/40">Prochaine facturation le 15.05.2025</p>
                   </div>
                </div>

                {/* Billing Card */}
                <div className="bg-surface-container-lowest p-10 rounded-stitch shadow-long-fall border border-on-surface/5">
                   <h4 className="text-[9px] font-black uppercase tracking-widest text-on-surface/30 mb-8 border-b border-on-surface/5 pb-4 flex justify-between items-center">
                      Prochaine Facture <Link to="#" className="hover:text-primary"><ArrowUpRight size={14}/></Link>
                   </h4>
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center">
                         <Wallet size={20} />
                      </div>
                      <div>
                         <p className="text-3xl font-black text-on-surface tracking-tighter uppercase italic">$129.00</p>
                         <p className="text-[10px] font-black text-on-surface/30 uppercase tracking-widest">Solde à payer - 15 Mai</p>
                      </div>
                   </div>
                   <button className="w-full py-4 mt-6 bg-surface-container-low text-primary rounded-full font-black text-[10px] uppercase tracking-widest border border-primary/10 hover:bg-primary/5 transition-all">
                      Payer avec M-Pesa
                   </button>
                </div>
             </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
             {/* Connected Devices */}
             <div className="bg-surface-container-lowest p-8 rounded-stitch shadow-long-fall border border-on-surface/5">
                <h4 className="text-[9px] font-black uppercase tracking-widest text-on-surface/30 mb-8 italic">Appareils Connectés</h4>
                <div className="space-y-3">
                   <DeviceItem icon={Laptop} name="MacBook Pro" type="MacOS • Likasi" status="Connecté" />
                   <DeviceItem icon={Smartphone} name="iPhone 15" type="iOS • Mobile" status="Connecté" />
                   <DeviceItem icon={Tv} name="Android TV" type="Living Room" status="Inactif" />
                </div>
                <button className="w-full mt-6 py-4 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-on-surface/40 hover:text-primary transition-colors">
                   <Settings size={14} /> Gérer le réseau
                </button>
             </div>

             {/* Support Nudge */}
             <div className="bg-white p-8 rounded-stitch shadow-2xl border-l-8 border-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <HelpCircle size={64}/>
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tight mb-3">Besoin d'aide ?</h4>
                <p className="text-[11px] font-medium text-on-surface/50 leading-relaxed mb-6">
                   Accédez au support prioritaire NOVA+ directement depuis votre interface client. Nos experts à Likasi vous répondent en moins d'une heure.
                </p>
                <Link to="/support" className="inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-primary group">
                   Centre d'aide <ChevronRight size={14} className="group-hover:translate-x-1 transition-all" />
                </Link>
             </div>
             
             {/* App Link Placeholder */}
             <div className="p-8 rounded-stitch bg-surface-container-low border border-on-surface/5 flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                   <Smartphone size={20} className="text-primary/40" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface/30 mb-1">NOVA+ App Connect</p>
                   <p className="text-xs font-bold italic text-primary">Bientôt sur iOS & Android</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
