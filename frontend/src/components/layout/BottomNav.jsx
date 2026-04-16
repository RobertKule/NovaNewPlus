import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Tag, Headphones, UserCircle } from 'lucide-react';

const BottomNav = () => {
  const tabs = [
    { name: 'ACCUEIL', path: '/', icon: Home },
    { name: 'OFFRES', path: '/offres', icon: Tag },
    { name: 'SUPPORT', path: '/support', icon: Headphones },
    { name: 'PROFIL', path: '/dashboard', icon: UserCircle },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest/90 backdrop-blur-xl border-t border-on-surface/5 pb-safe z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) => `
              flex flex-col items-center justify-center gap-1 transition-all duration-300
              ${isActive ? 'text-primary' : 'text-on-surface/40 hover:text-on-surface/60'}
            `}
          >
            <tab.icon size={20} className="stroke-[2.5px]" />
            <span className="text-[10px] font-black uppercase tracking-tight leading-none">
              {tab.name}
            </span>
            {/* Active Indicator */}
            <div className={`
              h-1 w-1 rounded-full bg-primary mt-0.5 transition-all duration-300
              opacity-0 scale-0 origin-center
            `} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
