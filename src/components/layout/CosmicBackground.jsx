import React, { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';

const CosmicBackground = () => {
  const { isDark } = useTheme();

  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1 + 'px',
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
  }, []);

  const dots = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1 + 'px',
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 4}s`,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700"
      style={{ background: isDark ? '#0a0e1a' : '#eef1f7' }}
    >
      {isDark ? (
        <>
          {/* Dark mode — deep space gradient */}
          <div className="absolute inset-0 bg-radial-at-t from-cyan-900/10 via-slate-950 to-black" />

          {/* Twinkling stars */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                opacity: 0.2,
                animationDelay: star.delay,
                animationDuration: star.duration,
                boxShadow: '0 0 10px rgba(255,255,255,0.3)',
              }}
            />
          ))}

          {/* Nebula glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" />
        </>
      ) : (
        <>
          {/* Light mode — soft gradient */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, #dff4f4 0%, #eef1f7 50%, #e8e8f5 100%)' }} />

          {/* Floating dark dots */}
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute rounded-full animate-twinkle"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                background: '#7a8cb0',
                opacity: 0.25,
                animationDelay: dot.delay,
                animationDuration: dot.duration,
              }}
            />
          ))}

          {/* Circuit board SVG — bottom right */}
          <svg
            className="absolute bottom-0 right-0 opacity-[0.12]"
            width="600" height="500"
            viewBox="0 0 600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal lines */}
            <line x1="100" y1="80"  x2="500" y2="80"  stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="60"  y1="160" x2="420" y2="160" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="140" y1="240" x2="560" y2="240" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="80"  y1="320" x2="480" y2="320" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="120" y1="400" x2="540" y2="400" stroke="#0e7490" strokeWidth="1.5"/>
            {/* Vertical lines */}
            <line x1="160" y1="40"  x2="160" y2="460" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="260" y1="60"  x2="260" y2="380" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="360" y1="80"  x2="360" y2="440" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="460" y1="40"  x2="460" y2="340" stroke="#0e7490" strokeWidth="1.5"/>
            {/* Diagonal connectors */}
            <path d="M160 80 L260 160"  stroke="#0e7490" strokeWidth="1.5"/>
            <path d="M360 160 L460 80"  stroke="#0e7490" strokeWidth="1.5"/>
            <path d="M260 240 L360 320" stroke="#0e7490" strokeWidth="1.5"/>
            <path d="M160 320 L260 400" stroke="#0e7490" strokeWidth="1.5"/>
            <path d="M460 320 L560 240" stroke="#0e7490" strokeWidth="1.5"/>
            {/* Circuit nodes */}
            {[
              [160,80],[260,80],[360,80],[460,80],
              [160,160],[260,160],[360,160],[460,160],
              [160,240],[260,240],[360,240],[460,240],[560,240],
              [160,320],[260,320],[360,320],[460,320],
              [160,400],[260,400],[360,400],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="#0e7490" />
            ))}
            {/* Larger accent nodes */}
            <circle cx="260" cy="160" r="8" fill="none" stroke="#0e7490" strokeWidth="1.5"/>
            <circle cx="360" cy="320" r="8" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
            <circle cx="460" cy="240" r="8" fill="none" stroke="#0e7490" strokeWidth="1.5"/>
          </svg>

          {/* Circuit board SVG — top left (mirrored, lighter) */}
          <svg
            className="absolute top-0 left-0 opacity-[0.07]"
            width="350" height="300"
            viewBox="0 0 350 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0"   y1="60"  x2="300" y2="60"  stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="40"  y1="140" x2="320" y2="140" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="0"   y1="220" x2="280" y2="220" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="80"  y1="0"   x2="80"  y2="300" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="180" y1="20"  x2="180" y2="280" stroke="#0e7490" strokeWidth="1.5"/>
            <line x1="280" y1="0"   x2="280" y2="220" stroke="#0e7490" strokeWidth="1.5"/>
            <path d="M80 60 L180 140"  stroke="#0e7490" strokeWidth="1.5"/>
            <path d="M180 60 L280 140" stroke="#0e7490" strokeWidth="1.5"/>
            {[
              [80,60],[180,60],[280,60],
              [80,140],[180,140],[280,140],
              [80,220],[180,220],
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="#0e7490"/>
            ))}
          </svg>

          {/* Subtle cyan glow top-right */}
          <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-cyan-300/20 rounded-full blur-[100px]" />
          {/* Subtle purple glow bottom-left */}
          <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-purple-300/15 rounded-full blur-[100px]" />
        </>
      )}
    </div>
  );
};

export default CosmicBackground;
