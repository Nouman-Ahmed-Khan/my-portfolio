import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: '_hello',      label: '_Hello'      },
  { id: '_about-me',  label: '_About-me'   },
  { id: '_projects',  label: '_Projects'   },
  { id: '_contact-me',label: '_Contact-me' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('_hello');

  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-500 ${
      isDark
        ? 'bg-slate-900/20 border-b border-gray-700/60'
        : 'bg-white/50 border-b border-gray-300/60 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className={`font-mono text-lg font-semibold transition-colors duration-500 ${
          isDark ? 'text-gray-200' : 'text-slate-800'
        }`}>
          Nouman-Ahmed-Khan
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`relative pb-1 transition-colors duration-300 ${
                  isActive
                    ? 'text-cyan-500'
                    : isDark
                      ? 'text-gray-400 hover:text-cyan-400'
                      : 'text-slate-500 hover:text-cyan-600'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,209,0.8)]" />
                )}
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 hover:ring-2 ring-cyan-400/50 ${
              isDark
                ? 'bg-gray-800/50 text-cyan-400'
                : 'bg-slate-200/70 text-slate-600 hover:text-cyan-600'
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
