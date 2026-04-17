import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

// ── DATA ──────────────────────────────────────────────────────────────────────

const featured = [
  {
    id: '01',
    title: 'ToonSwap',
    role: 'Frontend / UI Development',
    desc: 'Crypto wallet UI built from Figma designs with responsive layout, dynamic charts, and smooth interactions across all devices.',
    tech: ['React.js', 'Tailwind CSS', 'Chart.js'],
    live: 'https://toon-swap.vercel.app/',
    code: 'https://github.com/Nouman-Ahmed-Khan/Toon-Swap',
    accent: 'cyan',
  },
  {
    id: '02',
    title: 'Tech Care',
    role: 'Frontend / UI Development',
    desc: 'Modern healthcare dashboard UI with data visualization, clean component structure, and accessible interactions built for medical workflows.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    live: 'https://tech-care-eosin.vercel.app/',
    code: 'https://github.com/Nouman-Ahmed-Khan/Tech-Care',
    accent: 'purple',
  },
  {
    id: '03',
    title: 'Proswebtech',
    role: 'Frontend Development',
    desc: 'Full corporate website for a software house built from scratch — responsive, fast, and user-friendly across all screen sizes.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    live: 'https://proswebtech.com/',
    code: 'https://github.com/Nouman-Ahmed-Khan',
    accent: 'amber',
  },
  {
    id: '04',
    title: 'Campaigncy',
    role: 'WordPress Development',
    desc: 'Professional WordPress website for a Florida-based Search Engine Marketing agency — covers SEO, PPC, and web design services with a modern conversion-focused design.',
    tech: ['WordPress', 'CSS', 'HTML'],
    live: 'https://campaigncy.com/',
    code: null,
    accent: 'cyan',
  },
];

const mini = [
  {
    id: '05',
    title: 'Box Shadow App',
    role: 'Frontend / Tool',
    desc: 'Interactive web tool that lets users customize CSS box shadows using sliders and instantly copy the generated CSS code.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    code: 'https://github.com/Nouman-Ahmed-Khan/Box-Shadow-App',
    accent: 'purple',
  },
  {
    id: '06',
    title: 'Live Clock',
    role: 'Frontend / Practice',
    desc: 'Real-time live clock built with vanilla JavaScript, featuring a clean UI that updates every second.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://clock-eight-theta.vercel.app',
    code: 'https://github.com/Nouman-Ahmed-Khan/Clock',
    accent: 'cyan',
  },
  {
    id: '07',
    title: 'Notes App',
    role: 'Frontend / Practice',
    desc: 'A clean notes application with create, read, and delete functionality, built with Tailwind CSS and vanilla JS.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    live: 'https://notes-app-gamma-sandy.vercel.app',
    code: 'https://github.com/Nouman-Ahmed-Khan/Notes-App',
    accent: 'amber',
  },
];

// ── COLOR MAP ─────────────────────────────────────────────────────────────────

const accentMap = {
  cyan: {
    border:     'border-cyan-400/30',
    hoverBorder:'hover:border-cyan-400/70',
    text:       'text-cyan-400',
    bg:         'bg-cyan-400/10',
    glow:       'hover:shadow-[0_0_30px_rgba(34,211,209,0.15)]',
    tag:        'border-cyan-400/20 bg-cyan-400/5 text-cyan-400',
    num:        'text-cyan-400/40',
    btnLive:    'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_16px_rgba(34,211,209,0.3)]',
  },
  purple: {
    border:     'border-purple-400/30',
    hoverBorder:'hover:border-purple-400/70',
    text:       'text-purple-400',
    bg:         'bg-purple-400/10',
    glow:       'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    tag:        'border-purple-400/20 bg-purple-400/5 text-purple-400',
    num:        'text-purple-400/40',
    btnLive:    'bg-purple-500/10 border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_16px_rgba(168,85,247,0.3)]',
  },
  amber: {
    border:     'border-amber-400/30',
    hoverBorder:'hover:border-amber-400/70',
    text:       'text-amber-400',
    bg:         'bg-amber-400/10',
    glow:       'hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    tag:        'border-amber-400/20 bg-amber-400/5 text-amber-400',
    num:        'text-amber-400/40',
    btnLive:    'bg-amber-500/10 border-amber-500/50 text-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_16px_rgba(251,191,36,0.3)]',
  },
};

// ── FEATURED CARD ─────────────────────────────────────────────────────────────

const FeaturedCard = ({ project, isDark }) => {
  const a = accentMap[project.accent];
  return (
    <div className={`group relative bg-slate-900/80 border ${a.border} ${a.hoverBorder} ${a.glow} rounded-xl p-6 backdrop-blur-sm transition-all duration-300 flex flex-col`}>
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className={`font-mono text-4xl font-bold ${a.num} select-none`}>{project.id}</span>
        <div className="flex gap-2">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700/50 text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
              title="View Live"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700/50 text-gray-500 hover:text-purple-400 hover:border-purple-400/40 transition-all duration-200"
              title="View Code"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Title & role */}
      <h3 className={`font-mono text-xl font-bold mb-1 ${a.text} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}>
        {project.title}
      </h3>
      <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">// {project.role}</p>

      {/* Desc */}
      <p className="text-sm text-gray-300 leading-7 flex-1 mb-5">{project.desc}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => (
          <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-md border ${a.tag}`}>{t}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4 border-t border-gray-700/30">
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className={`flex-1 text-center font-mono text-sm py-2.5 rounded-lg border transition-all duration-300 ${a.btnLive}`}
          >
            view-live
          </a>
        ) : (
          <span className="flex-1 text-center font-mono text-sm py-2.5 rounded-lg border border-gray-700/30 text-gray-600 cursor-not-allowed">
            no-live-demo
          </span>
        )}
        {project.code ? (
          <a href={project.code} target="_blank" rel="noopener noreferrer"
            className={`flex-1 text-center font-mono text-sm py-2.5 rounded-lg border transition-all duration-300 ${
              isDark
                ? 'bg-slate-800/30 hover:bg-slate-800/60 border-gray-700 text-gray-400 hover:text-white'
                : 'bg-white/80 hover:bg-slate-50 border-slate-300 text-slate-600 hover:text-slate-900'
            }`}
          >
            view-code
          </a>
        ) : (
          <span className="flex-1 text-center font-mono text-sm py-2.5 rounded-lg border border-gray-700/30 text-gray-600 cursor-not-allowed">
            private-repo
          </span>
        )}
      </div>
    </div>
  );
};

// ── MINI CARD ─────────────────────────────────────────────────────────────────

const MiniCard = ({ project, isDark }) => {
  const a = accentMap[project.accent];
  return (
    <div className={`group bg-slate-900/80 border ${a.border} ${a.hoverBorder} ${a.glow} rounded-xl p-5 backdrop-blur-sm transition-all duration-300 flex flex-col`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${a.bg} border ${a.border} flex items-center justify-center font-mono text-xs font-bold ${a.text}`}>
            {project.id}
          </div>
          <h4 className={`font-mono text-sm font-bold ${a.text} group-hover:drop-shadow-[0_0_6px_currentColor] transition-all duration-300`}>
            {project.title}
          </h4>
        </div>
        <div className="flex gap-1.5">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-gray-700/50 text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-gray-700/50 text-gray-500 hover:text-purple-400 hover:border-purple-400/40 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">// {project.role}</p>
      <p className="text-sm text-gray-400 leading-6 flex-1 mb-4">{project.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span key={t} className={`font-mono text-[10px] px-2 py-0.5 rounded border ${a.tag}`}>{t}</span>
        ))}
      </div>
    </div>
  );
};

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section id="_projects" className="relative z-10 px-6 pt-24">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section header */}
        <div>
          <p className={`font-mono text-sm mb-1 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// what i've built</p>
          <h2 className="font-mono text-2xl font-bold text-white">
            <span className="text-purple-400">My</span>
            <span className="text-cyan-400">-Projects</span>
          </h2>
          <div className="mt-2 h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        {/* ── FEATURED ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// featured projects</p>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map(p => <FeaturedCard key={p.id} project={p} isDark={isDark} />)}
          </div>
        </div>

        {/* ── MINI PROJECTS ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// mini & practice projects</p>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mini.map(p => <MiniCard key={p.id} project={p} isDark={isDark} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
