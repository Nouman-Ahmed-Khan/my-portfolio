import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const NAV_ITEMS = ['_Hello', '_About-Me', '_Projects', '_Contact-Me'];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('_hello');

  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(item); },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(item);
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
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative pb-1 transition-colors duration-300 ${
                  isActive
                    ? 'text-cyan-500'
                    : isDark
                      ? 'text-gray-400 hover:text-cyan-400'
                      : 'text-slate-600 hover:text-cyan-600'
                }`}
              >
                {item}
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
