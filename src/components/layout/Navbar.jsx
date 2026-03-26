import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const NAV_ITEMS = ['_hello', '_about-me', '_projects', '_contact-me'];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('_hello');

  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const el = document.getElementById(item);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(item);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-700/60 backdrop-blur-md bg-slate-900/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono text-lg font-semibold text-gray-200 dark:text-white">
          Nouman-Ahmed-Khan
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`transition-colors relative pb-1 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,209,0.8)]" />
                )}
              </a>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800/50 text-cyan-400 hover:ring-2 ring-cyan-400/50 transition-all"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;