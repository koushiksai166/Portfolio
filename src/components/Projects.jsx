import { motion } from 'framer-motion';
import { Brain, Cpu } from 'lucide-react';
import { resumeData } from '../data/resumeData';

function NeuralVisual() {
  const layers = [
    { x: 80, ys: [120, 160, 200, 240] },
    { x: 180, ys: [100, 140, 180, 220, 260] },
    { x: 280, ys: [140, 180, 220] },
    { x: 340, ys: [180] },
  ];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id="nnGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {layers.map((layer, li) =>
        layer.ys.map((y, ni) => {
          const next = layers[li + 1];
          return (
            <g key={`${li}-${ni}`}>
              {next && next.ys.map((ny, nj) => (
                <line key={`l-${li}-${ni}-${nj}`} x1={layer.x} y1={y} x2={next.x} y2={ny} stroke="url(#nnGrad)" strokeWidth="0.5" opacity="0.2" />
              ))}
              <circle cx={layer.x} cy={y} r="5" fill="url(#nnGrad)" filter="url(#nnGlow)" opacity="0.6" />
            </g>
          );
        })
      )}
      <motion.line x1="0" y1="200" x2="400" y2="200" stroke="#39FF88" strokeWidth="1" opacity="0.3" animate={{ y1: [0, 400, 0], y2: [0, 400, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
    </svg>
  );
}

export default function Projects() {
  const project = resumeData.projects[0];
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12">
          <code className="font-mono text-sm text-cyber-text-muted block mb-2"><span className="text-cyber-cyan">const</span> projects = <span className="text-cyber-violet">[</span></code>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold ml-4"><span className="gradient-text-static">Featured Project</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }} className="glass rounded-2xl overflow-hidden border border-cyber-green/20 hover:border-cyber-green/40 transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative bg-cyber-card/50 p-8 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative w-full h-full max-w-[300px] max-h-[300px] mx-auto"><NeuralVisual /></div>
              <span className="absolute top-4 left-4 font-mono text-xs px-3 py-1.5 rounded-full bg-cyber-green/10 text-cyber-green border border-cyber-green/30 shadow-glow-green">{project.badge}</span>
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-cyber-green" size={20} />
                <span className="font-mono text-xs text-cyber-text-muted uppercase tracking-wider">Medical AI / Image Processing</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-cyber-text-primary mb-4 leading-snug">{project.title}</h3>
              <p className="text-cyber-text-muted leading-relaxed mb-4">{project.description}</p>
              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-cyber-text-muted leading-relaxed"><span className="text-cyber-green mt-1 flex-shrink-0">▹</span><span>{point}</span></li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyber-green/5 text-cyber-green border border-cyber-green/15">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {/* Add more projects here as they're completed */}
        <div className="mt-6 grid sm:grid-cols-2 gap-6 opacity-30">
          <div className="glass rounded-2xl border-dashed border-2 border-white/10 p-8 flex items-center justify-center min-h-[200px]">
            <p className="font-mono text-sm text-cyber-text-muted text-center"><Cpu size={24} className="mx-auto mb-2 opacity-50" /><span>awaiting next project...</span></p>
          </div>
          <div className="glass rounded-2xl border-dashed border-2 border-white/10 p-8 flex items-center justify-center min-h-[200px]">
            <p className="font-mono text-sm text-cyber-text-muted text-center"><Cpu size={24} className="mx-auto mb-2 opacity-50" /><span>awaiting next project...</span></p>
          </div>
        </div>
        <code className="font-mono text-sm text-cyber-text-muted block mt-8 ml-4"><span className="text-cyber-violet">]</span></code>
      </div>
    </section>
  );
}
