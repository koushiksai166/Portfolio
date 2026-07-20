import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const colorMap = {
  cyan: { text: 'text-cyber-cyan', border: 'border-cyber-cyan/20', bg: 'bg-cyber-cyan/5', hover: 'hover:border-cyber-cyan/40 hover:shadow-glow-cyan-sm', dot: 'bg-cyber-cyan' },
  violet: { text: 'text-cyber-violet', border: 'border-cyber-violet/20', bg: 'bg-cyber-violet/5', hover: 'hover:border-cyber-violet/40 hover:shadow-glow-violet', dot: 'bg-cyber-violet' },
  green: { text: 'text-cyber-green', border: 'border-cyber-green/20', bg: 'bg-cyber-green/5', hover: 'hover:border-cyber-green/40 hover:shadow-glow-green', dot: 'bg-cyber-green' },
  amber: { text: 'text-cyber-amber', border: 'border-cyber-amber/20', bg: 'bg-cyber-amber/5', hover: 'hover:border-cyber-amber/40', dot: 'bg-cyber-amber' },
  teal: { text: 'text-teal-400', border: 'border-teal-400/20', bg: 'bg-teal-400/5', hover: 'hover:border-teal-400/40', dot: 'bg-teal-400' },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12">
          <code className="font-mono text-sm text-cyber-text-muted block mb-2"><span className="text-cyber-cyan">const</span> skills = <span className="text-cyber-violet">{'{'}</span></code>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold ml-4"><span className="gradient-text-static">Tech Stack</span></h2>
        </motion.div>
        <div className="ml-4 grid gap-6 md:grid-cols-2">
          {resumeData.skills.map((group, i) => {
            const c = colorMap[group.color] || colorMap.cyan;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`glass rounded-xl p-6 ${group.color === 'teal' ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${c.dot} shadow-glow-cyan-sm`} />
                  <h3 className={`font-mono text-sm font-medium uppercase tracking-wider ${c.text}`}>{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span key={j} className={`font-mono text-sm px-3 py-1.5 rounded-lg border ${c.border} ${c.bg} ${c.text} ${c.hover} transition-all duration-200`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        <code className="font-mono text-sm text-cyber-text-muted block mt-8 ml-4"><span className="text-cyber-violet">{'}'}</span></code>
      </div>
    </section>
  );
}