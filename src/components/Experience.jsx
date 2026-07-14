import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12">
          <code className="font-mono text-sm text-cyber-text-muted block mb-2"><span className="text-cyber-cyan">const</span> experience = <span className="text-cyber-violet">[</span></code>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold ml-4"><span className="gradient-text-static">Experience</span></h2>
        </motion.div>
        <div className="relative ml-4">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyber-cyan via-cyber-violet to-transparent" />
          {resumeData.experience.map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative pl-8 pb-8 last:pb-0">
              <div className={`absolute left-0 top-3 w-3 h-3 rounded-full -translate-x-1/2 ${job.current ? 'bg-cyber-green shadow-glow-green animate-pulse-slow' : 'bg-cyber-cyan shadow-glow-cyan-sm'}`} />
              <div className="glass glass-hover rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cyber-text-primary">{job.role}</h3>
                    <p className="text-cyber-cyan font-mono text-sm">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs px-2 py-1 rounded-md bg-cyber-violet/10 text-cyber-violet border border-cyber-violet/20">{job.period}</span>
                    <p className="text-cyber-text-muted text-xs mt-1 flex items-center gap-1 justify-end"><MapPin size={10} />{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-cyber-text-muted leading-relaxed"><span className="text-cyber-cyan mt-1 flex-shrink-0">▹</span><span>{point}</span></li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <code className="font-mono text-sm text-cyber-text-muted block mt-4 ml-4"><span className="text-cyber-violet">]</span></code>
      </div>
    </section>
  );
}
