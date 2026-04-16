import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, MapPin, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

// Correction des icônes Leaflet par défaut
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const LIKASI_QUARTERS = [
  { name: 'Kikula', coords: [-10.9833, 26.7333], eligible: true },
  { name: 'Shituru', coords: [-10.9667, 26.75], eligible: true },
  { name: 'Panda', coords: [-10.95, 26.7167], eligible: true },
  { name: 'Centre-Ville', coords: [-10.985, 26.735], eligible: true },
  { name: 'Kampatshi', coords: [-11.0, 26.75], eligible: true },
];

const Coverage = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const checkEligibility = (e) => {
    e.preventDefault();
    const found = LIKASI_QUARTERS.find(q => q.name.toLowerCase().includes(search.toLowerCase()));
    setResult(found || { name: search, eligible: false });
  };

  return (
    <div className="bg-surface pb-24 font-body">
      {/* Header - Aligné sur Stitch Premium */}
      <section className="bg-atmospheric py-24 px-4 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Couverture & Éligibilité</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Vérifiez si votre zone est déjà couverte par notre réseau satellite haute performance à Likasi et ses environs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Vérificateur d'éligibilité - Design Stitch style Card */}
          <div className="lg:col-span-1">
            <div className="card shadow-2xl bg-surface-lowest border-t-4 border-primary p-8">
              <h2 className="text-2xl font-bold mb-6 text-on-surface">Vérifier mon antenne</h2>
              <form onSubmit={checkEligibility} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface/40">
                    <MapPin size={20} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Quartier à Likasi (ex: Kikula)"
                    className="w-full pl-11 p-4 rounded-stitch bg-surface-container-high outline-none focus:ring-2 focus:ring-primary transition-all text-on-surface font-medium"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 shadow-lg">
                  Tester ma zone <Search size={20} />
                </button>
              </form>

              {result && (
                <div className={`mt-8 p-6 rounded-stitch animate-in fade-in slide-in-from-top-4 duration-300 ${result.eligible ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    {result.eligible ? <CheckCircle2 className="text-green-600" size={28} /> : <AlertCircle className="text-red-600" size={28} />}
                    <p className="font-bold text-lg text-on-surface">{result.name}</p>
                  </div>
                  <p className={`text-sm leading-relaxed ${result.eligible ? 'text-green-800' : 'text-red-800'}`}>
                    {result.eligible
                      ? "Bonne nouvelle ! Le signal NOVA+ est excellent dans votre quartier. Vous pouvez procéder à l'inscription."
                      : "Désolé, cette zone n'est pas encore optimisée pour notre signal direct. Contactez notre support pour une étude sur-mesure."}
                  </p>
                  {result.eligible && (
                    <button className="mt-6 w-full py-3 bg-green-600 text-white font-bold rounded-stitch flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                      S'abonner ici <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Info Card - Aligné design system */}
            <div className="card mt-8 bg-surface-lowest border border-primary/5">
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-4">Note Technique</h4>
              <p className="text-on-surface/60 text-sm leading-relaxed">
                L'internet satellite NOVA+ ne dépend pas des infrastructures terrestres. Si vous voyez le ciel à Likasi, vous êtes éligible !
              </p>
            </div>
          </div>

          {/* Carte Interactive - Aligné sur Stitch */}
          <div className="lg:col-span-2">
            <div className="card p-0 overflow-hidden shadow-2xl relative border-2 border-surface-lowest">
              <div className="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur-md p-3 rounded-stitch shadow-lg border border-primary/5">
                <div className="flex items-center gap-2 text-xs font-bold text-on-surface/70">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                  Signal Satellite Optimal
                </div>
              </div>
              <div className="h-[600px] w-full z-10">
                <MapContainer center={[-10.9833, 26.7333]} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />
                  {LIKASI_QUARTERS.map((q, i) => (
                    <Circle
                      key={i}
                      center={q.coords}
                      radius={1200}
                      pathOptions={{
                        fillColor: '#0A5C8E',
                        color: '#0A5C8E',
                        fillOpacity: 0.15,
                        weight: 1
                      }}
                    >
                      <Popup>
                        <div className="font-body p-2">
                          <p className="font-bold text-primary mb-1">{q.name}</p>
                          <p className="text-xs text-on-surface/60 italic">Signal 4.5/5 • Service Actif</p>
                        </div>
                      </Popup>
                    </Circle>
                  ))}
                  <Marker position={[-10.9833, 26.7333]}>
                    <Popup>Siège NOVA+ Likasi</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
