import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    tick();
  }, [inView, value]);
  return <div ref={ref} className="font-heading text-3xl sm:text-4xl font-bold gradient-text-static">{count}{suffix}</div>;
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
          <code className="font-mono text-sm text-cyber-text-muted block mb-2"><span className="text-cyber-cyan">const</span> about = <span className="text-cyber-violet">{'{'}</span></code>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8 ml-4"><span className="gradient-text-static">About Me</span></h2>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.1 }} className="text-cyber-text-muted text-lg leading-relaxed mb-12 ml-4">
          {resumeData.summary}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {resumeData.stats.map((stat, i) => (
            <div key={i} className="glass glass-hover rounded-xl p-6 text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-cyber-text-muted text-sm mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="flex items-center gap-2 mb-4 ml-4">
            <GraduationCap className="text-cyber-cyan" size={20} />
            <h3 className="font-mono text-sm font-medium text-cyber-text-muted uppercase tracking-wider">Education</h3>
          </div>
          <div className="ml-4 space-y-3">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="glass glass-hover rounded-lg p-4">
                <p className="text-cyber-text-primary font-medium">{edu.degree}</p>
                <p className="text-cyber-text-muted text-sm">{edu.institution}</p>
                {edu.detail && <p className="text-cyber-cyan text-sm font-mono mt-1">{edu.detail}</p>}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-4 ml-4">
            <Award className="text-cyber-amber" size={20} />
            <h3 className="font-mono text-sm font-medium text-cyber-text-muted uppercase tracking-wider">Certifications</h3>
          </div>
          <div className="ml-4 flex flex-wrap gap-2">
            {resumeData.certifications.map((cert, i) => (
              <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-full glass border border-cyber-amber/20 text-cyber-text-muted hover:border-cyber-amber/40 hover:text-cyber-amber transition-all">{cert}</span>
            ))}
          </div>
        </motion.div>
        <code className="font-mono text-sm text-cyber-text-muted block mt-8 ml-4"><span className="text-cyber-violet">{'}'}</span></code>
      </div>
    </section>
  );
}
