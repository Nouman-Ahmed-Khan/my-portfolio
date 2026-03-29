import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: "01",
      title: "ToonSwap",
      role: "Frontend / UI Development",
      desc: "Crypto wallet UI built from Figma with responsive design and dynamic charts",
      tech: ["React.js", "Tailwind CSS", "Chart.js"],
      link: "https://toon-swap.vercel.app/",
      code: "https://github.com/Nouman-Ahmed-Khan/Toon-Swap"
    },
    {
      id: "02",
      title: "Tech Care",
      role: "Frontend / UI Development",
      desc: "Modern healthcare UI with data visualization and clean interactions",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://tech-care-eosin.vercel.app/",
      code: "https://github.com/Nouman-Ahmed-Khan/Tech-Care"
    },
    {
      id: "03",
      title: "Proswebtech",
      role: "Frontend Development",
      desc: "Software house website with responsive, user-friendly design",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://proswebtech.com/",
      code: "https://github.com/Nouman-Ahmed-Khan"
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <main id="_hello" className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-7">
          <p className="font-mono text-sm text-cyan-500 tracking-widest uppercase">// Front-End Developer</p>

          <h1 className={`font-mono text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Crafting Interfaces That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              Look Great
            </span>
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Feel Fast
            </span>
            , and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              Work Perfectly
            </span>
            .
          </h1>

          <p className={`text-sm leading-8 max-w-md transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
            Front-End Developer based in{' '}
            <span className={isDark ? 'text-gray-200' : 'text-slate-700'}>Islamabad, Pakistan</span>.
            {' '}Specialized in building responsive web apps with{' '}
            <span className="text-cyan-500">ReactJS</span>,{' '}
            <span className="text-cyan-500">TailwindCSS</span>, and modern{' '}
            <span className="text-cyan-500">JavaScript</span>{' '}
            — from pixel-perfect UIs to production-ready applications.
          </p>

          <div className="flex items-center gap-4 pt-2 flex-wrap">
            <a
              href="#_contact-me"
              onClick={e => { e.preventDefault(); document.getElementById('_contact-me')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`font-mono text-sm px-6 py-3 rounded-lg border transition-all duration-300 ${
                isDark
                  ? 'bg-cyan-400/10 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,209,0.3)]'
                  : 'bg-cyan-500 border-cyan-500 text-white hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              }`}
            >
              Connect With Me →
            </a>
            <a
              href="#_projects"
              onClick={e => { e.preventDefault(); document.getElementById('_projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`font-mono text-sm px-6 py-3 rounded-lg border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/50 border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
                  : 'bg-white/70 border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
              }`}
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side: Project Showcase */}
        <div className="flex justify-center lg:justify-end">
          <div
            className={`rounded-xl p-1 relative max-w-md w-full project-float border transition-all duration-500 ${
              isDark
                ? 'border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,209,0.15)]'
                : 'border-slate-400 bg-white/70 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.15)]'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? 'border-gray-700/30' : 'border-slate-200'}`}>
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className={`font-mono text-[10px] uppercase tracking-widest ml-2 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>projects.showcase</span>
            </div>

            <div className="p-8 relative overflow-hidden h-[460px]">
              {/* Arrows */}
              <button onClick={prevSlide} className="carousel-arrow absolute left-2 top-[40%] -translate-y-1/2 group z-30" aria-label="Previous Project">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextSlide} className="carousel-arrow absolute right-2 top-[40%] -translate-y-1/2 group z-30" aria-label="Next Project">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div key={currentSlide} className={`transition-all duration-800 ease-in-out ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <h3 className="font-mono text-3xl font-bold text-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,209,0.5)]">
                      {projects[currentSlide].title}
                    </h3>
                    <span className={`font-mono text-xs self-center ${isDark ? 'text-gray-600' : 'text-slate-400'}`}>{projects[currentSlide].id}</span>
                  </div>

                  <div className="space-y-1">
                    <p className={`font-mono text-[10px] uppercase tracking-tighter ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// Role</p>
                    <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>{projects[currentSlide].role}</p>
                  </div>

                  <div className="space-y-1">
                    <p className={`font-mono text-[10px] uppercase tracking-tighter ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// Description</p>
                    <p className={`text-sm leading-relaxed min-h-[60px] ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                      {projects[currentSlide].desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className={`font-mono text-[10px] uppercase tracking-tighter ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentSlide].tech.map((tag) => (
                        <span key={tag} className={`text-[10px] px-2 py-1 rounded border ${
                          isDark
                            ? 'bg-cyan-400/5 text-cyan-400 border-cyan-400/20'
                            : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button
                      onClick={() => window.open(projects[currentSlide].link, '_blank')}
                      className={`cursor-pointer flex-1 py-2.5 rounded-lg transition-all font-mono text-sm font-bold border ${
                        isDark
                          ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/50 text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,209,0.3)]'
                          : 'bg-cyan-500 hover:bg-cyan-600 border-cyan-500 text-white'
                      }`}
                    >
                      view-live
                    </button>
                    <button
                      onClick={() => window.open(projects[currentSlide].code, '_blank')}
                      className={`cursor-pointer flex-1 py-2.5 rounded-lg transition-all font-mono text-sm border ${
                        isDark
                          ? 'bg-slate-800/30 hover:bg-slate-800/60 border-gray-700 text-gray-400 hover:text-white'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      view-code
                    </button>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-3 mt-10">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setDirection(index > currentSlide ? 'right' : 'left'); setCurrentSlide(index); }}
                    className={`h-1.5 rounded-full transition-all duration-700 ${
                      currentSlide === index
                        ? 'bg-cyan-400 w-8 shadow-[0_0_12px_rgba(34,211,209,1)]'
                        : isDark ? 'bg-gray-800 w-2 hover:bg-gray-500' : 'bg-slate-300 w-2 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
