import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react'; // Suggested: npm install lucide-react

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-700/60 backdrop-blur-md bg-slate-900/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono text-lg font-semibold text-gray-200 dark:text-white">
          Nouman-Ahmed-Khan
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {['_hello', '_about-me', '_projects', '_contact-me'].map((item) => (
            <a key={item} href={`#${item}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
              {item}
            </a>
          ))}
          
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