import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Users, Wifi, DollarSign, Activity, Settings, Radio, Bell } from 'lucide-react';
import { LOGO_URL } from '../../constants';

const KPICard = ({ title, value, change, icon: Icon }) => (
  <div className="card p-6 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-primary/10 text-primary rounded-lg"><Icon size={24} /></div>
      {change && (
        <span className={`text-xs font-bold px-2 py-1 rounded ${change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {change}
        </span>
      )}
    </div>
    <p className="text-sm text-on-surface/50 font-bold uppercase tracking-widest mb-1">{title}</p>
    <h3 className="text-3xl font-display font-bold text-on-surface">{value}</h3>
  </div>
);

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeMenu, setActiveMenu] = useState('overview');

  // Strict route protection
  if (!user && !localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }
  
  if (user && user.role !== 'ADMIN') {
    return <div className="min-h-screen flex items-center justify-center text-red-500 font-bold p-8 text-center bg-surface">Accès refusé. Réservé aux administrateurs.</div>;
  }

  const navItems = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Activity },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'offres', label: 'Offres & Tarifs', icon: Wifi },
    { id: 'commandes', label: 'Commandes', icon: DollarSign },
    { id: 'equipements', label: 'Équipements', icon: Radio },
  ];

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-surface-lowest border-r border-primary/5 flex flex-col fixed inset-y-0 z-10">
        <div className="p-6 border-b border-primary/5">
          <img src={LOGO_URL} alt="NOVA+" className="h-8 w-auto mb-4" />
          <p className="text-xs font-bold text-primary uppercase tracking-widest">Admin Control</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-stitch transition-all text-sm font-medium ${
                  activeMenu === item.id 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-on-surface/70 hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-primary/5">
           <button onClick={() => { logout(); window.location.href='/login'; }} className="w-full text-left text-sm text-red-500 font-medium hover:underline">Déconnexion</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        
        {/* Topbar */}
        <header className="flex justify-between items-center mb-8">
           <h2 className="text-2xl font-bold capitalize">{navItems.find(i => i.id === activeMenu)?.label}</h2>
           <div className="flex items-center gap-4">
              <button className="p-2 relative text-on-surface/60 hover:text-primary transition-colors">
                 <Bell size={20} />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 px-4 py-2 bg-surface-lowest rounded-full border border-primary/5 shadow-sm">
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                   CO
                 </div>
                 <span className="text-sm font-bold opacity-80">Admin Center</span>
              </div>
           </div>
        </header>

        {activeMenu === 'overview' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <KPICard title="Clients Actifs" value="1,248" change="+12%" icon={Users} />
              <KPICard title="CA Mensuel" value="124K $" change="+5%" icon={DollarSign} />
              <KPICard title="Réseau" value="100%" change="Stable" icon={Wifi} />
              <KPICard title="Tickets Ouverts" value="12" change="-2" icon={Activity} />
            </div>

            {/* Quick Actions & Recent */}
            <div className="grid lg:grid-cols-3 gap-6">
               <div className="card lg:col-span-2">
                 <h3 className="font-bold mb-6">Dernières souscriptions</h3>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-primary/5 opacity-50 uppercase tracking-widest text-[10px]">
                          <th className="pb-3">Client</th>
                          <th className="pb-3">Offre</th>
                          <th className="pb-3">Zone</th>
                          <th className="pb-3">Statut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { nom: 'Marc K.', offre: 'Famille', zone: 'Kikula', statut: 'Attente Install' },
                          { nom: 'Sophie B.', offre: 'Populaire', zone: 'Centre', statut: 'Actif' },
                          { nom: 'Entreprise XYZ', offre: 'Essentiel', zone: 'Panda', statut: 'Actif' },
                        ].map((row, i) => (
                           <tr key={i} className="border-b border-primary/5 last:border-0 hover:bg-surface-container-low transition-colors">
                              <td className="py-3 font-medium">{row.nom}</td>
                              <td className="py-3">{row.offre}</td>
                              <td className="py-3">{row.zone}</td>
                              <td className="py-3">
                                 <span className={`px-2 py-1 rounded text-xs ${row.statut === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{row.statut}</span>
                              </td>
                           </tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
               </div>
               
               <div className="card">
                 <h3 className="font-bold mb-6 text-primary flex items-center gap-2"><Radio size={18}/> État Satellite</h3>
                 <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1"><span className="opacity-50 uppercase tracking-wide">Liaison Montante</span><span className="text-green-600">Stable</span></div>
                      <div className="w-full h-1.5 bg-surface-container-high rounded"><div className="h-full bg-green-500 w-full rounded"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1"><span className="opacity-50 uppercase tracking-wide">Liaison Descendante</span><span className="text-green-600">Stable</span></div>
                      <div className="w-full h-1.5 bg-surface-container-high rounded"><div className="h-full bg-green-500 w-[95%] rounded"></div></div>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-800 text-xs rounded mt-6">
                      <p className="font-bold mb-1">Météo Likasi</p>
                      <p>Dégagé • Impact réseau : 0%</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeMenu !== 'overview' && (
          <div className="card h-[70vh] flex flex-col items-center justify-center text-center animate-in fade-in text-on-surface/50">
             <Settings size={48} className="mb-4 opacity-20" />
             <h3 className="text-xl font-bold mb-2">Module en développement</h3>
             <p className="max-w-md">La gestion complète de ce module sera disponible dans la version finale du backoffice admin.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
