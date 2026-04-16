import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, MapPin, CheckCircle2, AlertCircle, ArrowRight, Satellite, Zap, Radio, Globe, Activity } from 'lucide-react';
import L from 'leaflet';
import { Link } from 'react-router-dom';

// Fix for default marker icons in React-Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const LIKASI_COORDS = [-10.9833, 26.7333];

// Helper to center map
function RecenterMap({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}

const StatusIndicator = ({ type, label, description, active }) => {
  const styles = {
    TOTAL: { color: 'text-green-600', bg: 'bg-green-500', glow: 'shadow-green-500/20' },
    PARTIELLE: { color: 'text-orange-500', bg: 'bg-orange-500', glow: 'shadow-orange-500/20' },
    PREORDER: { color: 'text-red-500', bg: 'bg-red-500', glow: 'shadow-red-500/20' }
  };
  const s = styles[type];

  return (
    <div className={`p-4 rounded-stitch-sm flex items-center gap-4 transition-all ${active ? 'bg-surface-container-lowest shadow-long-fall border border-on-surface/5' : 'opacity-40 grayscale'}`}>
       <div className={`w-3 h-3 rounded-full ${s.bg} shadow-lg ${s.glow} ${active ? 'animate-pulse' : ''}`}></div>
       <div>
          <p className={`text-[10px] font-black uppercase tracking-widest ${s.color}`}>{label}</p>
          <p className="text-[9px] font-bold text-on-surface/40 uppercase tracking-tight">{description}</p>
       </div>
    </div>
  );
};

const Coverage = () => {
  const [address, setAddress] = useState('');
  const [checkResult, setCheckResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!address) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCheckResult({
        type: address.toLowerCase().includes('église') ? 'TOTAL' : 'PARTIELLE',
        signal: 'Extrême',
        latency: '24ms'
      });
    }, 1500);
  };

  return (
    <div className="bg-surface pb-32 font-display">
      {/* Coverage Header */}
      <section className="pt-40 pb-32 px-4 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-primary/[0.02] -skew-y-3 origin-center"></div>
        <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in slide-in-from-top duration-1000">
           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Disponibilité</h4>
           <h1 className="text-5xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter uppercase italic">
             Vérifiez votre éligibilité <span className="text-primary not-italic underline decoration-primary/20 underline-offset-8 decoration-4">NOVA+.</span>
           </h1>
           <p className="text-xl text-on-surface/40 max-w-2xl mx-auto font-medium leading-relaxed italic mt-10">
             "Où que vous soyez à Likasi, nous apportons l'orbite à votre porte. Entrez votre position pour commencer."
           </p>
        </div>
      </section>

      {/* Verification Tool */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
         <div className="grid lg:grid-cols-3 gap-8">
            {/* Search Card */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-10 rounded-stitch shadow-2xl border border-on-surface/5">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface/30 mb-8 italic">Recherche Géographique</h3>
               
               <div className="flex flex-col md:flex-row gap-4 mb-12">
                  <div className="flex-grow relative group">
                     <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={20} />
                     <input 
                        type="text" 
                        placeholder="Quartier, Avenue ou Rue à Likasi..." 
                        className="w-full pl-16 pr-6 py-6 bg-surface-container-low rounded-full outline-none font-bold text-on-surface placeholder:text-on-surface/20 border-2 border-transparent focus:border-primary/10 transition-all"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                     />
                  </div>
                  <button 
                    onClick={handleVerify}
                    disabled={loading}
                    className="btn-primary py-6 px-12 text-center text-xs font-black shadow-2xl shadow-primary/20 disabled:opacity-50"
                  >
                    {loading ? 'Analyse en cours...' : 'Vérifier la connexion'}
                  </button>
               </div>

               {/* Map Container */}
               <div className="h-[400px] rounded-stitch overflow-hidden border border-on-surface/5 relative">
                  <MapContainer center={LIKASI_COORDS} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Circle center={LIKASI_COORDS} radius={5000} pathOptions={{ color: '#00446c', fillColor: '#00446c', fillOpacity: 0.1 }} />
                    <Marker position={LIKASI_COORDS} />
                    <RecenterMap coords={LIKASI_COORDS} />
                  </MapContainer>
                  
                  {/* Floating Legend */}
                  <div className="absolute bottom-6 left-6 z-[1001] bg-white p-4 rounded-stitch-sm shadow-xl flex items-center gap-4">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-on-surface/40">Zone Couverte</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Sidebar Status */}
            <div className="space-y-6">
               <div className="bg-surface-container-lowest p-8 rounded-stitch shadow-long-fall border border-on-surface/5">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface/30 mb-8 italic">États du Réseau</h3>
                  <div className="space-y-4">
                     <StatusIndicator type="TOTAL" label="Couverture Totale" description="Connexion instantanée disponible." active={checkResult?.type === 'TOTAL'} />
                     <StatusIndicator type="PARTIELLE" label="Couverture Partielle" description="Installation sous 48h requise." active={checkResult?.type === 'PARTIELLE'} />
                     <StatusIndicator type="PREORDER" label="Pré-commande" description="Nouveaux équipements en cours." active={checkResult?.type === 'PREORDER'} />
                  </div>
               </div>

               {checkResult ? (
                 <div className="bg-primary p-10 rounded-stitch text-white shadow-2xl shadow-primary/40 animate-in fade-in zoom-in duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                       <Radio size={20} className="animate-pulse" />
                    </div>
                    <h4 className="text-2xl font-black italic tracking-tight mb-6 uppercase">Résultat trouvé</h4>
                    <div className="space-y-4 mb-10">
                       <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Signal</span>
                          <span className="font-bold">{checkResult.signal}</span>
                       </div>
                       <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Latence</span>
                          <span className="font-bold">{checkResult.latency}</span>
                       </div>
                    </div>
                    <Link to="/register" className="w-full py-4 bg-white text-primary rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                       S'inscrire maintenant <ArrowRight size={14} />
                    </Link>
                 </div>
               ) : (
                 <div className="bg-surface-container-low p-10 rounded-stitch border border-dashed border-on-surface/10 text-center flex flex-col items-center gap-6 saturate-0 opacity-50">
                    <Globe size={48} className="text-on-surface/20" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 leading-relaxed">
                      L'IA de géolocalisation attend votre saisie pour analyser l'orbite.
                    </p>
                 </div>
               )}

               <div className="p-8 rounded-stitch bg-atmospheric text-white flex items-center gap-6">
                  <Activity size={32} className="shrink-0 opacity-50" />
                  <div>
                    <h5 className="text-[10px] font-black tracking-widest uppercase mb-1">Status Satellite</h5>
                    <p className="text-sm font-bold italic">En ligne - LEO Konstellation 4</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Coverage;
