import React, { useState, useEffect, useRef } from 'react';
import profilePhoto from '../../assets/My_Professional_Image.png';
import { useTheme } from '../../context/ThemeContext';

// ── DATA ──────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: 'ProsWebtech',
    role: 'Junior Frontend Web Developer',
    duration: 'Oct 2021 – Sep 2022',
    type: 'On-site · Full-time',
    color: 'cyan',
    initial: 'P',
    desc: 'Developed responsive, visually appealing websites from scratch. Debugged and optimized frontend code, reducing page load time by 40%. Applied PHP & MySQL to build dynamic, data-driven pages, improving user engagement by 30%.',
  },
  {
    company: 'in2itivebiz',
    role: 'Virtual Assistant',
    duration: 'Dec 2022 – Jan 2023',
    type: 'Remote · Contract',
    color: 'purple',
    initial: 'i',
    desc: 'Conducted quality checks on deliverables, reducing content errors and improving brand consistency. Designed branded visuals using Canva and Photoshop. Managed social media accounts, leading to a 45% increase in followers and engagement.',
  },
  {
    company: 'Develop Me This',
    role: 'Frontend Intern',
    duration: 'Aug 2019 – Apr 2020',
    type: 'On-site · Internship',
    color: 'amber',
    initial: 'D',
    desc: 'Learned core frontend technologies through hands-on tasks. Recreated real-world UI layouts improving design understanding and responsiveness. Built static pages to strengthen code structure and reduce layout inconsistencies.',
  },
];

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⌨',
    skills: ['ReactJS (Vite)', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend & DB',
    icon: '⚙',
    skills: ['PHP', 'MySQL', 'WordPress'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠',
    skills: ['Git', 'GitHub', 'Figma', 'Vite'],
  },
  {
    category: 'Design',
    icon: '✦',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'Canva'],
  },
];

const achievements = [
  {
    icon: '⚡',
    title: '40% Faster Load Times',
    desc: 'Debugged and optimized frontend code at ProsWebtech, cutting page load time by 40%.',
    tag: 'Performance',
  },
  {
    icon: '📈',
    title: '45% Engagement Growth',
    desc: 'Managed and optimized social media accounts at in2itivebiz, growing followers and engagement by 45%.',
    tag: 'Growth',
  },
  {
    icon: '🚀',
    title: '30% More User Engagement',
    desc: 'Applied PHP & MySQL to build dynamic pages that improved site user engagement by over 30%.',
    tag: 'Development',
  },
  {
    icon: '🎯',
    title: '20% Social Boost',
    desc: 'Designed branded visuals using Canva and Photoshop that boosted social engagement by 20%.',
    tag: 'Design',
  },
  {
    icon: '🏅',
    title: 'HackerRank Certified',
    desc: 'Certified in JavaScript Essentials 1 and Python Essentials 1 on HackerRank.',
    tag: 'Certification',
  },
  {
    icon: '🤖',
    title: 'AI & Data Science',
    desc: 'Completed ITU-DTC courses in Modern AI and Introduction to Data Science.',
    tag: 'Upskilling',
  },
];

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

const SectionLabel = ({ comment, title, isDark }) => {
  const parts = title.split(/-(.+)/);
  return (
    <div className="mb-10">
      <p className={`font-mono text-sm mb-1 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>{comment}</p>
      <h3 className="font-mono text-2xl font-bold text-white">
        <span className="text-purple-400">{parts[0]}</span>
        {parts[1] && <span className="text-cyan-400">-{parts[1]}</span>}
      </h3>
      <div className="mt-2 h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
    </div>
  );
};

const colorMap = {
  cyan:   { border: 'border-cyan-400/30',   text: 'text-cyan-400',   bg: 'bg-cyan-400/10',   glow: 'shadow-[0_0_20px_rgba(34,211,209,0.08)]',  hover: 'hover:border-cyan-400/60' },
  purple: { border: 'border-purple-400/30', text: 'text-purple-400', bg: 'bg-purple-400/10', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.08)]',  hover: 'hover:border-purple-400/60' },
  amber:  { border: 'border-amber-400/30',  text: 'text-amber-400',  bg: 'bg-amber-400/10',  glow: 'shadow-[0_0_20px_rgba(251,191,36,0.08)]',  hover: 'hover:border-amber-400/60' },
};

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

const AboutMe = () => {
  const { isDark } = useTheme();
  const [expandedExp, setExpandedExp] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const expGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close expanded card when clicking outside the experience grid
  useEffect(() => {
    if (expandedExp === null) return;
    const handleClickOutside = (e) => {
      if (expGridRef.current && !expGridRef.current.contains(e.target)) {
        setExpandedExp(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedExp]);

  return (
    <section id="_about-me" ref={sectionRef} className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* ── ABOUT ME BIO ── */}
        <div>
          <SectionLabel comment="// who am i" title="About-Me" isDark={isDark} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-400 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500" />
                {/* Photo */}
                <div className="relative w-80 h-80 rounded-full border-2 border-cyan-400/50 overflow-hidden shadow-[0_0_60px_rgba(34,211,209,0.25)]">
                  <img
                    src={profilePhoto}
                    alt="Nouman Ahmed Khan"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                {/* Floating status badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-900 border border-cyan-400/40 rounded-full px-4 py-1.5 shadow-[0_0_14px_rgba(34,211,209,0.2)] whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)] animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400">available for work</span>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-5">
              <p className={`font-mono text-sm uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// summary</p>
              <h3 className={`font-mono text-2xl font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-800'}`}>
                Hi, I'm <span className="text-cyan-500">Nouman</span> 👋
              </h3>
              <p className={`text-sm leading-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                I'm a <span className="text-cyan-500 font-semibold">Front-End Developer</span> specializing in building responsive, high-quality user interfaces using <span className="text-cyan-500">ReactJS</span>, <span className="text-cyan-500">TailwindCSS</span>, and modern <span className="text-cyan-500">JavaScript (ES6+)</span>.
              </p>
              <p className={`text-sm leading-8 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                I've shipped everything from crypto wallets and medical dashboards to full corporate websites — always focused on clean code, cross-browser compatibility, and experiences users actually enjoy.
              </p>
              <p className={`text-sm leading-8 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                Comfortable in Agile teams, I collaborate closely with designers and backend devs, and bring a sharp eye for UI/UX detail to every pixel I touch.
              </p>
              <div className="pt-2 flex gap-3 flex-wrap">
                {['Open to Work', 'Freelance OK', 'Remote Friendly'].map(tag => (
                  <span key={tag} className={`font-mono text-[12px] px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                    isDark
                      ? 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5'
                      : 'border-cyan-500/40 text-cyan-600 bg-cyan-50'
                  }`}>
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <div>
          <SectionLabel comment="// where i've worked" title="Professional-Experience" isDark={isDark} />
          <div ref={expGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              const isOpen = expandedExp === i;
              return (
                <div
                  key={i}
                  className={`group relative border ${c.border} ${c.hover} ${c.glow} rounded-xl p-6 backdrop-blur-sm transition-all duration-300 flex flex-col bg-slate-900/80`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center font-mono font-bold ${c.text} text-lg shrink-0`}>
                      {exp.initial}
                    </div>
                    <div className="min-w-0">
                      <h4 className={`font-mono text-sm font-bold ${c.text}`}>{exp.company}</h4>
                      <p className="font-mono text-sm text-white mt-0.5 leading-tight">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`font-mono text-[12px] px-2 py-1 rounded border ${c.border} ${c.bg} ${c.text}`}>{exp.duration}</span>
                  </div>

                  <p className="text-gray-300 text-sm leading-6 flex-1">
                    {isOpen ? exp.desc : exp.desc.slice(0, 100) + '...'}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/40">
                    <span className="font-mono text-[12px] text-gray-400">📍 {exp.type}</span>
                    <button
                      onClick={() => setExpandedExp(isOpen ? null : i)}
                      className={`font-mono text-[12px] ${c.text} hover:underline transition-colors`}
                    >
                      {isOpen ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SKILLS & TECHNOLOGIES ── */}
        <div>
          <SectionLabel comment="// what i work with" title="Skills-and-Technologies" isDark={isDark} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-gray-700/40 hover:border-cyan-400/30 rounded-xl p-5 backdrop-blur-sm transition-colors duration-300 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg text-gray-200">{group.icon}</span>
                  <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[12px] px-2.5 py-1 rounded-md border border-gray-700/60 bg-slate-800/80 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── KEY ACHIEVEMENTS ── */}
        <div>
          <SectionLabel comment="// what i've accomplished" title="Key-Achievements" isDark={isDark} />
          <p className={`font-mono text-xs -mt-6 mb-8 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// proven track record of delivering measurable impact</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="group bg-slate-900/80 border border-gray-700/40 hover:border-cyan-400/30 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(34,211,209,0.08)]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transitionProperty: 'opacity, transform, border-color, box-shadow',
                  transitionDuration: '0.5s',
                  transitionTimingFunction: 'ease',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5 shrink-0">{ach.icon}</span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{ach.title}</h4>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-purple-400/30 text-purple-400 bg-purple-400/5">{ach.tag}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-6">{ach.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
