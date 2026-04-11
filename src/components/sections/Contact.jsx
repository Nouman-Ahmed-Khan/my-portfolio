import React, { useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

// ─────────────────────────────────────────────────────────────────────────────
// !! EMAILJS SETUP — Replace these 3 values with your own from emailjs.com !!
const EMAILJS_SERVICE_ID  = 'service_v74quby';
const EMAILJS_TEMPLATE_ID = 'template_pxba3oj';
const EMAILJS_PUBLIC_KEY  = 'Xfv3jiXCvE8NqLNxI';
// ─────────────────────────────────────────────────────────────────────────────

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Nouman-Ahmed-Khan',
    color: 'hover:border-gray-400/60 hover:text-gray-300 hover:shadow-[0_0_16px_rgba(156,163,175,0.2)]',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nouman-ahmed-khan-243713227',
    color: 'hover:border-blue-400/60 hover:text-blue-400 hover:shadow-[0_0_16px_rgba(96,165,250,0.2)]',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923473727277',
    color: 'hover:border-green-400/60 hover:text-green-400 hover:shadow-[0_0_16px_rgba(74,222,128,0.2)]',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:noumanahmedkhan834@gmail.com',
    color: 'hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_16px_rgba(34,211,209,0.2)]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

const Contact = () => {
  const { isDark } = useTheme();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          message:      formData.message,
          to_name:      'Nouman',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const inputClass = `w-full font-mono text-sm px-4 py-3 rounded-lg border outline-none transition-all duration-300 ${
    isDark
      ? 'bg-slate-800/50 border-gray-700/60 text-gray-200 placeholder-gray-600 focus:border-cyan-400/60 focus:shadow-[0_0_12px_rgba(34,211,209,0.15)]'
      : 'bg-white/80 border-slate-300 text-slate-800 placeholder-slate-400 focus:border-cyan-500/60 focus:shadow-[0_0_12px_rgba(6,182,212,0.15)]'
  }`;

  return (
    <section id="_contact-me" className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className={`font-mono text-sm mb-1 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// let's talk</p>
          <h2 className="font-mono text-2xl font-bold text-white">
            <span className="text-purple-400">Contact</span>
            <span className="text-cyan-400">-Me</span>
          </h2>
          <div className="mt-2 h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info + socials */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// get in touch</p>
              <p className={`text-sm leading-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a friendly chat about frontend development. My inbox is always open!
              </p>
              <p className={`text-sm leading-8 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                Fill out the form and I'll get back to you as soon as possible, or reach out directly via any of the links below.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// direct contact</p>
              <div className={`flex items-center gap-3 font-mono text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                <span className="text-cyan-400">📧</span>
                <a href="mailto:noumanahmedkhan834@gmail.com" className="hover:text-cyan-400 transition-colors">
                  noumanahmedkhan834@gmail.com
                </a>
              </div>
              <div className={`flex items-center gap-3 font-mono text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                <span className="text-green-400">📱</span>
                <a href="https://wa.me/923473727277" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  +92 347 3727277 (WhatsApp)
                </a>
              </div>
              <div className={`flex items-center gap-3 font-mono text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                <span className="text-purple-400">📍</span>
                <span>Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="space-y-3">
              <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// find me on</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    title={s.label}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                      isDark
                        ? `bg-slate-800/50 border-gray-700/60 text-gray-400 ${s.color}`
                        : `bg-white/70 border-slate-300 text-slate-500 ${s.color}`
                    }`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={`rounded-xl border p-8 backdrop-blur-sm transition-colors duration-500 ${
            isDark
              ? 'bg-slate-900/50 border-gray-700/50'
              : 'bg-white/60 border-slate-200 shadow-sm'
          }`}>
            {/* Window bar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className={`font-mono text-[10px] uppercase tracking-widest ml-2 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>contact.form</span>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <span className="text-5xl">🚀</span>
                <h3 className="font-mono text-lg font-bold text-cyan-400">Message Sent!</h3>
                <p className={`font-mono text-sm text-center ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// your email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>// message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Nouman, I'd love to work with you on..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-red-400">
                    ⚠ Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full font-mono text-sm py-3.5 rounded-lg border transition-all duration-300 ${
                    status === 'sending'
                      ? 'bg-cyan-400/5 border-cyan-400/20 text-cyan-400/50 cursor-not-allowed'
                      : 'bg-cyan-400/10 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,209,0.25)]'
                  }`}
                >
                  {status === 'sending' ? '// sending...' : 'send-message →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
