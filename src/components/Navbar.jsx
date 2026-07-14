import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';
import { resumeData } from '../data/resumeData';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'chat', label: 'Chat With My AI' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="font-mono text-lg font-bold text-cyber-cyan hover:shadow-glow-cyan-sm transition-all">
            <span className="text-cyber-text-muted">&lt;</span>
            <span className="gradient-text-static mx-0.5">KV</span>
            <span className="text-cyber-text-muted">/&gt;</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === link.id ? 'text-cyber-cyan shadow-glow-cyan-sm' : 'text-cyber-text-muted hover:text-cyber-text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={resumeData.resumeUrl}
              download
              className="ml-2 flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium rounded-md border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-glow-cyan transition-all duration-200"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-cyber-text-primary" aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-md transition-all ${
                    activeSection === link.id ? 'text-cyber-cyan bg-cyber-cyan/5' : 'text-cyber-text-muted hover:text-cyber-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={resumeData.resumeUrl}
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-medium rounded-md border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
