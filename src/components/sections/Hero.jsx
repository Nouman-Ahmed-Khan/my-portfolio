import React, { useState, useEffect, useCallback } from 'react';

const Hero = () => {
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
      link: "https://toon-swap.vercel.app/"
    },
    {
      id: "02",
      title: "Tech Care",
      role: "Frontend / UI Development",
      desc: "Modern healthcare UI with data visualization and clean interactions",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "#"
    },
    {
      id: "03",
      title: "Proswebtech",
      role: "Frontend Development",
      desc: "Software house website with responsive, user-friendly design",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://proswebtech.com/"
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

  // --- SMOOTH AUTO-PLAY (3 SECONDS) ---
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Intro */}
        <div className="space-y-6">
          <p className="font-mono text-lg text-gray-400">Hi all. I am</p>
          <h1 className="font-mono text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(34,211,209,0.3)]">
            Nouman Ahmed Khan
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-mono text-xl">{">"}</span>
            <span className="font-mono text-xl text-purple-400 tracking-widest">Front-end developer</span>
          </div>
          
          <div className="pt-8 space-y-4">
            <p className="font-mono text-sm text-gray-500">// find my profile on Github:</p>
            <div className="bg-slate-900/50 border-l-2 border-cyan-400/50 px-4 py-3 rounded backdrop-blur-sm">
              <code className="text-sm">
                <span className="text-purple-400">const</span> <span className="text-cyan-400">githubLink</span> = <span className="text-amber-400">"https://github.com/Nouman-Ahmed-Khan"</span>
              </code>
            </div>
          </div>
        </div>

        {/* Right Side: Project Showcase */}
        <div className="flex justify-center lg:justify-end">
          <div 
            className="glass-card rounded-xl p-1 relative max-w-md w-full project-float border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,209,0.15)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 ml-2">projects.showcase</span>
            </div>

            <div className="p-8 relative overflow-hidden h-[460px]">
              {/* Navigation Arrows (Restored) */}
              <button 
                onClick={prevSlide} 
                className="carousel-arrow absolute left-2 top-[40%] -translate-y-1/2 group z-30"
                aria-label="Previous Project"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide} 
                className="carousel-arrow absolute right-2 top-[40%] -translate-y-1/2 group z-30"
                aria-label="Next Project"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div 
                key={currentSlide} 
                className={`transition-all duration-800 ease-in-out ${direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <h3 className="font-mono text-3xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,209,0.7)]">
                      {projects[currentSlide].title}
                    </h3>
                    <span className="font-mono text-xs text-gray-600 self-center">{projects[currentSlide].id}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">// Role</p>
                    <p className="text-sm text-gray-200 font-medium">{projects[currentSlide].role}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">// Description</p>
                    <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
                      {projects[currentSlide].desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">// Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentSlide].tech.map((tag) => (
                        <span key={tag} className="text-[10px] bg-cyan-400/5 text-cyan-400 px-2 py-1 rounded border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,209,0.1)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button 
                      onClick={() => window.open(projects[currentSlide].link, '_blank')}
                      className="flex-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 py-2.5 rounded-lg transition-all font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(34,211,209,0.3)]"
                    >
                      view-live
                    </button>
                    <button className="flex-1 bg-slate-800/30 hover:bg-slate-800/60 border border-gray-700 text-gray-400 py-2.5 rounded-lg transition-all font-mono text-xs hover:text-white">
                      view-code
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center gap-3 mt-10">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentSlide ? 'right' : 'left');
                      setCurrentSlide(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-700 ${currentSlide === index ? 'bg-cyan-400 w-8 shadow-[0_0_12px_rgba(34,211,209,1)]' : 'bg-gray-800 w-2 hover:bg-gray-500'}`}
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