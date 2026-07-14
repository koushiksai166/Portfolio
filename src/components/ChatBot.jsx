import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { resumeData } from '../data/resumeData';

const SUGGESTED_PROMPTS = [
  "What's your current role?",
  'Walk me through the knee osteoarthritis project',
  "What's your tech stack?",
  'What are you looking for next?',
];

const SYSTEM_PROMPT = `You are Koushik's AI interview assistant. Answer questions about Koushik Sai Prakash Valluru's background, projects, and skills based ONLY on the resume data provided below.

Rules:
1. Answer ONLY using facts present in the resume data. Never invent metrics, numbers, team sizes, company names, or outcomes not in the data.
2. If asked something the resume doesn't cover (e.g. salary expectations, notice period, personal life), say plainly that it's a good question for Koushik directly rather than guessing.
3. Keep a natural, honest, first-person-adjacent professional tone — confident but not exaggerated. Say "Koushik currently works on..." or "Koushik built..." rather than "I".
4. Never upgrade "developed" to "led" or "built" to "architected from scratch" unless the resume says so.
5. Keep responses concise and scannable. Use bullet points for lists and bold for tech stack terms.

Resume Data:
${JSON.stringify(resumeData, null, 2)}`;

function buildLocalResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  if (msg.includes('current role') || msg.includes('current') || msg.includes('now'))
    return "Koushik currently works as a **Full Stack Developer** at **Lasarkaali Life Sciences Pvt. Ltd.** in Hyderabad (Sep 2025 – Present). He develops and maintains healthcare web and mobile applications using **React.js, React Native, FastAPI, Node.js, and MongoDB**, builds secure authentication systems with role-based access control, and develops real-time features using **Socket.IO**.";
  if (msg.includes('knee') || msg.includes('osteoarthritis') || msg.includes('mri') || msg.includes('project'))
    return "Koushik built an **AI-Based Knee Osteoarthritis Progression Prediction** system using **3D MRI data**. The project applies image preprocessing and machine learning techniques to improve disease prediction, working with medical imaging datasets for feature extraction and classification. It was built during an AI with Image Processing internship covering **TensorFlow, OpenCV**, and medical image analysis. Stack: **Python, TensorFlow, OpenCV, Machine Learning, Image Processing**.";
  if (msg.includes('tech stack') || msg.includes('stack') || msg.includes('technologies') || msg.includes('skills'))
    return "Koushik's core tech stack:\n\n- **Frontend:** React.js, React Native, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Expo\n- **Backend:** Python, FastAPI, Node.js, Express.js, REST APIs, WebSockets, Socket.IO\n- **Database & DevOps:** MongoDB, Docker, Nginx, Linux, CI/CD, Production Deployment\n- **Integrations & Tools:** Razorpay, Twilio, JWT Auth, Nodemailer, Chart.js, Recharts, Git\n- **AI / ML:** Python, TensorFlow, OpenCV, Image Processing, Machine Learning";
  if (msg.includes('experience') || msg.includes('work') || msg.includes('job'))
    return "Koushik has held **3 roles** in full-stack development:\n\n1. **Full Stack Developer** — Lasarkaali Life Sciences Pvt. Ltd. (Sep 2025 – Present): Healthcare web/mobile apps with React.js, React Native, FastAPI, Node.js, MongoDB. Real-time features via Socket.IO, Docker/Nginx deployment.\n2. **Junior Full Stack Developer** — SnapTics Branding Agency (Jul 2025 – Sep 2025): Responsive web apps with React.js and Tailwind CSS, backend APIs with Node.js/Express.js.\n3. **Full Stack Developer Intern** — SnapTics Business Solutions (Jan 2025 – Jun 2025): Built web interfaces with React.js, assisted in backend API development with Node.js/Express.js.";
  if (msg.includes('education') || msg.includes('degree') || msg.includes('college') || msg.includes('university'))
    return "Koushik's education:\n\n- **MTech (Pursuing)** — Computer Science, Gokula Krishna College of Engineering\n- **BTech** — Computer Science, Sree Venkateswara College of Engineering (CGPA 7.2)";
  if (msg.includes('certification') || msg.includes('certificate'))
    return "Koushik's certifications:\n\n- NPTEL Cloud Computing\n- IBM SkillsBuild Front-End Development\n- Microsoft Certified Azure Data Fundamentals\n- AI with Image Processing Internship — BrainOvision Solutions India Pvt. Ltd.";
  if (msg.includes('looking for') || msg.includes('next') || msg.includes('future') || msg.includes('goal'))
    return "That's a great question for Koushik directly — the resume doesn't specify what he's looking for next. What I can share is that he has **1+ year building production applications** across healthcare, web, and mobile, with strong full-stack expertise in **React.js, React Native, FastAPI, Node.js, and MongoDB**.";
  if (msg.includes('contact') || msg.includes('email') || msg.includes('reach'))
    return "You can reach Koushik at:\n\n- **Email:** saikoushik166@gmail.com\n- **Phone:** +91 9059856466\n- **Location:** Hyderabad, Telangana\n\nLinkedIn and GitHub links are available in the Contact section below.";
  return "I can answer questions about Koushik's experience, projects, skills, education, and certifications based on his resume. Try asking about his current role, the knee osteoarthritis AI project, his tech stack, or his work history. For anything outside the resume (like salary expectations or personal details), it's best to ask Koushik directly.";
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="w-2 h-2 rounded-full bg-cyber-cyan" />
      ))}
    </div>
  );
}

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm Koushik's AI interview assistant. Ask me anything about his background, experience, projects, or skills. I'll answer based strictly on his resume." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = { role: 'user', content: text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY || '', 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1024, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: text }] }),
      });
      if (!res.ok) throw new Error('API unavailable');
      const data = await res.json();
      const reply = data.content?.[0]?.text || buildLocalResponse(text);
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch {
      const reply = buildLocalResponse(text);
      await new Promise((r) => setTimeout(r, 600));
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chat" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-8 text-center">
          <code className="font-mono text-sm text-cyber-text-muted block mb-2"><span className="text-cyber-cyan">$</span> ./AI_Interview_Assistant.exe</code>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold"><span className="gradient-text-static">Chat With My AI</span></h2>
          <p className="text-cyber-text-muted text-sm mt-2">Ask me anything about Koushik — I answer strictly from his resume.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.1 }} className="glass rounded-2xl border-cyber-cyan/20 shadow-glow-cyan-sm overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-cyber-card/50">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-amber-500/60" />
              <span className="w-3 h-3 rounded-full bg-cyber-green/60" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Terminal size={14} className="text-cyber-cyan" />
              <span className="font-mono text-xs text-cyber-text-muted">&gt; AI_Interview_Assistant.exe — Ask me anything about Koushik</span>
            </div>
          </div>
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center font-mono text-xs text-cyber-cyan">KV</div>
                )}
                <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-text-primary' : 'bg-cyber-cyan/5 border border-cyber-cyan/20 text-cyber-text-primary'}`}>
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-sm prose-invert max-w-none [&_strong]:text-cyber-cyan [&_li]:text-cyber-text-muted [&_ul]:space-y-1 [&_li]:list-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : msg.content}
                </div>
              </motion.div>
            ))}
            <AnimatePresence>
              {loading && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center font-mono text-xs text-cyber-cyan">KV</div>
                  <div className="bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-xl px-4 py-3"><TypingIndicator /></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt, i) => (
                <button key={i} onClick={() => sendMessage(prompt)} className="font-mono text-xs px-3 py-1.5 rounded-full glass border border-cyber-cyan/20 text-cyber-text-muted hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all">{prompt}</button>
              ))}
            </div>
          )}
          <div className="border-t border-white/5 p-4 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)} placeholder="Ask about Koushik's experience, projects, skills..." className="flex-1 bg-cyber-base/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-cyber-text-primary placeholder:text-cyber-text-muted/50 focus:outline-none focus:border-cyber-cyan/40 focus:shadow-glow-cyan-sm transition-all" />
            <button onClick={() => sendMessage(input)} disabled={loading || !input.trim()} className="p-2.5 rounded-lg bg-gradient-cyber text-cyber-base disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-glow-cyan transition-all" aria-label="Send message"><Send size={18} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
