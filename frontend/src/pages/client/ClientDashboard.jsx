import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
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
  Zap
} from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, color }) => (
  <div className="card border border-primary/5 flex items-center justify-between p-6">
    <div>
      <p className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest mb-1">{label}</p>
      <h4 className="text-2xl font-display font-bold text-on-surface">{value}</h4>
      <p className="text-xs text-on-surface/50 mt-1">{subtext}</p>
    </div>
    <div className={`p-4 rounded-2xl ${color}`}>
      <Icon size={24} />
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

  const menuItems = [
    { id: 'forfait', label: 'Mon Abonnement', icon: Activity },
    { id: 'factures', label: 'Paiements & Factures', icon: FileText },
    { id: 'installation', label: 'Suivi Installation', icon: HardDrive },
    { id: 'support', label: 'Centre de Support', icon: HelpCircle },
    { id: 'profil', label: 'Paramètres Profil', icon: Settings },
  ];

  return (
    <div className="bg-surface min-h-screen font-body pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-atmospheric -z-10 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="animate-in fade-in slide-in-from-left duration-500">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                  {user?.name?.charAt(0) || 'C'}
               </div>
               <span className="bg-white/80 backdrop-blur-sm self-center px-3 py-1 rounded-full text-[10px] font-bold text-primary border border-primary/10 uppercase tracking-wider">
                  Compte Particulier
               </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-on-surface">
               Espace <span className="text-primary tracking-tight">Client</span> — NOVA+
            </h1>
          </div>
          <div className="flex items-center gap-4 animate-in fade-in duration-700">
             <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Dernière connexion</p>
                <p className="text-sm font-medium text-on-surface/70">Aujourd'hui, 11:45</p>
             </div>
             <button onClick={handleLogout} className="p-3 bg-red-50 text-red-500 rounded-stitch hover:bg-red-100 transition-colors shadow-sm border border-red-100">
                <LogOut size={20} />
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar Nav - Aligné Stitch Premium style */}
          <div className="lg:col-span-3 space-y-2">
            <div className="card p-2 space-y-1 bg-white/50 backdrop-blur-md border border-primary/5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-between w-full p-4 rounded-stitch transition-all group ${
                    activeTab === item.id 
                    ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20' 
                    : 'text-on-surface/60 hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className={activeTab === item.id ? 'text-white' : 'text-primary/70 group-hover:text-primary'} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className={activeTab === item.id ? 'opacity-50' : 'opacity-0'} />
                </button>
              ))}
            </div>
            
            {/* Quick Support Card */}
            <div className="card bg-atmospheric p-6 mt-6 text-white relative overflow-hidden group">
               <ShieldCheck size={100} className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-700" />
               <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Besoin d'aide ?</p>
               <h4 className="font-bold mb-4 leading-tight">Accédez au support prioritaire 24h/24</h4>
               <button className="text-xs font-bold py-2 px-4 bg-white text-primary rounded-full hover:bg-surface-container-low transition-colors">
                  Ouvrir un ticket
               </button>
            </div>
          </div>

          {/* Main Area */}
          <div className="lg:col-span-9 animate-in fade-in slide-in-from-right duration-500">
            
            {/* Tab: Forfait - Aligné sur le design Stitch Premium */}
            {activeTab === 'forfait' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  <StatCard label="Statut" value="Actif" subtext="Depuis le 15.01.2025" icon={ShieldCheck} color="bg-green-100 text-green-700" />
                  <StatCard label="Vitesse Actuelle" value="100 Mbps" subtext="Satellite Link #44" icon={Zap} color="bg-primary/10 text-primary" />
                  <StatCard label="Data Restante" value="Illimité" subtext="Cycle se termine en 12j" icon={Activity} color="bg-blue-100 text-blue-700" />
                </div>

                <div className="card p-0 overflow-hidden border border-primary/5 shadow-xl">
                  <div className="bg-primary p-8 text-white relative flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                     <div className="relative z-10 text-center md:text-left">
                        <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Votre Offre Actuelle</p>
                        <h2 className="text-4xl font-display font-bold mb-2 tracking-tight">NOVA+ Famille</h2>
                        <p className="text-white/80 font-medium">99.00$ par mois • Data illimitée</p>
                     </div>
                     <div className="relative z-10 flex gap-4">
                        <button className="px-6 py-3 bg-white text-primary rounded-stitch font-bold shadow-lg hover:shadow-white/20 transition-all">Gérer l'offre</button>
                        <button className="px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-stitch font-bold hover:bg-white/10 transition-colors">Détails</button>
                     </div>
                  </div>
                  
                  <div className="p-8 bg-surface-lowest grid md:grid-cols-2 gap-12">
                     <div>
                        <h4 className="font-bold text-on-surface mb-6 flex items-center gap-2">
                           <Activity size={18} className="text-primary"/> Consommation du cycle
                        </h4>
                        <div className="relative w-full h-4 bg-surface-container-high rounded-full overflow-hidden shadow-inner p-1">
                           <div className="h-full bg-primary rounded-full transition-all duration-1000 w-[65%] shadow-[0_0_15px_rgba(10,92,142,0.4)]"></div>
                        </div>
                        <div className="flex justify-between mt-4">
                           <p className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">0 GB</p>
                           <p className="text-xs font-bold text-primary uppercase tracking-widest leading-none text-right">
                              Utilisé : 648 GB <br />
                              <span className="text-[10px] opacity-50 font-medium">Volume illimité activé</span>
                           </p>
                        </div>
                     </div>
                     
                     <div className="p-6 bg-surface-container-low rounded-stitch border border-primary/5 flex items-start gap-4">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0"><ShieldCheck size={20}/></div>
                        <div>
                           <p className="text-sm font-bold text-on-surface mb-1">Protection Satellite Activée</p>
                           <p className="text-xs text-on-surface/60 leading-relaxed">Votre antenne dispose d'une redondance active garantissant une stabilité de 99.9% même sous fortes pluies.</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Factures - Simulation Design Stitch */}
            {activeTab === 'factures' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <h2 className="text-2xl font-display font-bold text-on-surface">Historique des Paiements</h2>
                  <button className="btn-primary flex items-center gap-2 py-3">
                     <CreditCard size={18} /> Recharger via MoMo
                  </button>
                </div>
                
                <div className="card p-0 border border-primary/5 overflow-hidden">
                   <table className="w-full text-left">
                     <thead>
                       <tr className="bg-surface-container-low border-b border-primary/5 text-xs font-bold text-on-surface/40 uppercase tracking-widest">
                         <th className="p-6">Date</th>
                         <th className="p-6">Référence</th>
                         <th className="p-6">Montant</th>
                         <th className="p-6">Statut</th>
                         <th className="p-6 text-right">Actions</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-primary/5">
                        {[
                          { date: "15 Avril 2025", ref: "FAC-25-0089", amount: "99.00$", status: "Payé", payMethod: "M-Pesa" },
                          { date: "15 Mars 2025", ref: "FAC-25-0045", amount: "99.00$", status: "Payé", payMethod: "MoMo" },
                          { date: "15 Fév 2025", ref: "FAC-25-0012", amount: "249.00$", status: "Payé", sub: "Inclut Frais d'Installation" },
                        ].map((invoice, i) => (
                           <tr key={invoice.ref} className="group hover:bg-primary/5 transition-colors">
                             <td className="p-6">
                                <p className="font-bold text-on-surface">{invoice.date}</p>
                                <p className="text-[10px] text-on-surface/40 uppercase tracking-widest">{invoice.payMethod || 'Automatique'}</p>
                             </td>
                             <td className="p-6 text-on-surface/60 font-medium text-sm">
                                {invoice.ref}
                                {invoice.sub && <p className="text-[10px] text-primary italic lowercase">{invoice.sub}</p>}
                             </td>
                             <td className="p-6 font-display font-bold text-on-surface">{invoice.amount}</td>
                             <td className="p-6">
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                   {invoice.status}
                                </span>
                             </td>
                             <td className="p-6 text-right">
                                <button className="text-primary hover:text-primary-dark font-bold text-sm flex items-center justify-end gap-2 ml-auto group-hover:gap-3 transition-all">
                                   PDF <ChevronRight size={16} />
                                </button>
                             </td>
                           </tr>
                        ))}
                     </tbody>
                   </table>
                </div>
              </div>
            )}
            
            {/* Disclaimer Other Tabs */}
            {activeTab !== 'forfait' && activeTab !== 'factures' && (
              <div className="card flex flex-col items-center justify-center p-20 text-center border-dashed border-2 border-primary/10 bg-transparent">
                 <div className="p-6 bg-primary/5 text-primary rounded-full mb-6">
                    <Activity size={48} className="opacity-40" />
                 </div>
                 <h3 className="text-2xl font-display font-bold text-on-surface mb-2">Module en cours d'optimisation</h3>
                 <p className="text-on-surface/60 max-w-sm mb-8">
                    Nous mettons à jour l'interface "{activeTab}" pour vous offrir l'expérience NOVA+ Premium.
                 </p>
                 <button onClick={() => setActiveTab('forfait')} className="btn-secondary">Retour au tableau de bord</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
