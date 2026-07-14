import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration placeholder — configure with your keys later
    // import emailjs from '@emailjs/browser'
    // emailjs.send('service_id', 'template_id', form, 'public_key')
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${resumeData.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactButtons = [
    { icon: Mail, label: 'Email', value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}`, color: 'cyan' },
    { icon: Phone, label: 'Phone', value: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}`, color: 'green' },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'Connect on LinkedIn', href: resumeData.contact.linkedin, color: 'violet' },
    { icon: GithubIcon, label: 'GitHub', value: 'View on GitHub', href: resumeData.contact.github, color: 'cyan' },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <code className="font-mono text-sm text-cyber-text-muted block mb-2"><span className="text-cyber-cyan">const</span> contact = <span className="text-cyber-violet">{'{'}</span></code>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold"><span className="gradient-text-static">Get In Touch</span></h2>
          <p className="text-cyber-text-muted mt-2">Open to opportunities — let's build something together.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="space-y-3">
            {contactButtons.map(({ icon: Icon, label, value, href, color }, i) => (
              <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 glass glass-hover rounded-xl p-4 group">
                <div className={`p-3 rounded-lg border ${color === 'cyan' ? 'border-cyber-cyan/30 text-cyber-cyan' : ''} ${color === 'violet' ? 'border-cyber-violet/30 text-cyber-violet' : ''} ${color === 'green' ? 'border-cyber-green/30 text-cyber-green' : ''}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-cyber-text-muted uppercase">{label}</p>
                  <p className="text-cyber-text-primary text-sm group-hover:text-cyber-cyan transition-colors">{value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 glass rounded-xl p-4">
              <div className="p-3 rounded-lg border border-cyber-amber/30 text-cyber-amber"><MapPin size={20} /></div>
              <div>
                <p className="font-mono text-xs text-cyber-text-muted uppercase">Location</p>
                <p className="text-cyber-text-primary text-sm">{resumeData.location}</p>
              </div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
            <div>
              <label className="font-mono text-xs text-cyber-text-muted uppercase block mb-1.5">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-cyber-base/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-cyber-text-primary focus:outline-none focus:border-cyber-cyan/40 focus:shadow-glow-cyan-sm transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="font-mono text-xs text-cyber-text-muted uppercase block mb-1.5">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-cyber-base/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-cyber-text-primary focus:outline-none focus:border-cyber-cyan/40 focus:shadow-glow-cyan-sm transition-all" placeholder="you@example.com" />
            </div>
            <div>
              <label className="font-mono text-xs text-cyber-text-muted uppercase block mb-1.5">Message</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-cyber-base/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-cyber-text-primary focus:outline-none focus:border-cyber-cyan/40 focus:shadow-glow-cyan-sm transition-all resize-none" placeholder="Your message..." />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-cyber text-cyber-base font-semibold hover:shadow-glow-cyan transition-all">
              {sent ? 'Opening email...' : <>Send Message<Send size={16} /></>}
            </button>
          </motion.form>
        </div>
        <code className="font-mono text-sm text-cyber-text-muted block mt-8 text-center"><span className="text-cyber-violet">{'}'}</span></code>
      </div>
    </section>
  );
}
