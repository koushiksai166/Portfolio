import { Mail, Phone } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="font-mono text-lg font-bold">
            <span className="text-cyber-text-muted">&lt;</span>
            <span className="gradient-text-static mx-0.5">KV</span>
            <span className="text-cyber-text-muted">/&gt;</span>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: GithubIcon, href: resumeData.contact.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: resumeData.contact.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${resumeData.contact.email}`, label: 'Email' },
              { icon: Phone, href: `tel:${resumeData.contact.phone}`, label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={label} className="p-2.5 rounded-lg glass glass-hover text-cyber-text-muted hover:text-cyber-cyan">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-cyber-text-muted text-center">Built with React + Vite // © 2026 Koushik Sai Prakash Valluru</p>
        </div>
      </div>
    </footer>
  );
}
