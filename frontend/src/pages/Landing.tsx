import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Rocket, ShieldCheck, Zap, ArrowRight, Play, Star, CheckCircle2, Sparkles, Network } from 'lucide-react';
import { Logo } from '../components/Logo';

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 relative group overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
      <Icon size={120} color={color} />
    </div>
    <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 relative z-10" style={{ boxShadow: `0 0 20px ${color}15` }}>
      <Icon size={28} color={color} />
    </div>
    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">{title}</h3>
    <p className="text-gray-400 leading-relaxed relative z-10">{description}</p>
  </motion.div>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-display font-black text-white mb-1">{value}</div>
    <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{label}</div>
  </div>
);

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#07080d] selection:bg-primary/30 overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[180px] rounded-full animate-pulse transition-all duration-1000 delay-500" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-accent/10 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-md bg-[#07080d]/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-wider">
            <a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Curriculum</a>
            <a href="#outcomes" className="text-gray-400 hover:text-primary transition-colors">Outcomes</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-xl border border-white/10 transition-all active:scale-95">
                Sign In
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="bg-primary hover:bg-primary/90 text-[#07080d] font-black py-2.5 px-8 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(122,162,247,0.4)]">
                JOIN NEXORA
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
              <Sparkles size={14} />
              <span>The #1 AI Mastering Platform</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[1.05] tracking-tight text-white">
              Forge Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">AI Future.</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Nexora transcends traditional learning. Dive into an immersive saga where you don't just study AI—you engineer it. From neural foundations to generative frontiers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Link to="/dashboard" className="w-full sm:w-auto">
                <button className="w-full bg-primary hover:bg-primary/90 text-[#07080d] font-black py-5 px-10 rounded-2xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.03] active:scale-95 shadow-[0_15px_30px_rgba(122,162,247,0.3)]">
                  <Rocket size={24} />
                  <span className="text-lg">START THE MISSION</span>
                </button>
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center space-x-3 text-white font-bold hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play size={18} fill="currentColor" />
                </div>
                <span>WATCH THE TRAILER</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-surface overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[#07080d] font-bold text-xs uppercase">
                  50k+
                </div>
              </div>
              <div>
                <div className="flex text-warning space-x-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-gray-500 font-medium italic">Join 52,431+ students already learning</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative glass-card border-white/10 p-4 rotate-3 transform transition-transform hover:rotate-0 duration-700">
              <img 
                src="/hero.png" 
                alt="Nexora AI Platform" 
                className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-square"
              />
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card p-4 flex items-center space-x-4 border-primary/20 bg-primary/10 shadow-[0_10px_20px_rgba(122,162,247,0.2)] z-20"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-primary font-black uppercase">Certified</p>
                  <p className="text-sm text-white font-bold">IBM & NVIDIA Credits</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass-card p-4 flex items-center space-x-4 border-secondary/20 bg-secondary/10 shadow-[0_10px_20px_rgba(187,154,247,0.2)] z-20"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Brain size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary font-black uppercase">Adaptive AI</p>
                  <p className="text-sm text-white font-bold">Personalized Roadmap</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="outcomes" className="py-20 bg-white/5 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <StatItem value="98%" label="Completion Rate" />
          <StatItem value="142k+" label="Missions Completed" />
          <StatItem value="Top 1%" label="Global Ranking" />
          <StatItem value="24/7" label="AI Mentor Support" />
        </div>
      </section>

      {/* Features Section */}
      <section id="experience" className="py-40 px-6 max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-primary font-black uppercase tracking-[0.2em] text-sm">Deep Curriculum</h2>
          <h3 className="text-5xl lg:text-7xl font-display font-black text-white">Master the AI Stack.</h3>
          <p className="text-xl text-gray-400">Everything you need to go from a curious beginner to a world-class AI researcher and builder.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Cpu}
            title="Foundation ML"
            description="Master Regressions, Classifications, and the mathematical bedrock that powers everything."
            color="#7aa2f7"
          />
          <FeatureCard 
            icon={Network}
            title="Neural Architectures"
            description="Build CNNs, LSTMs, and Advanced Perceptrons from the ground up with interactive design labs."
            color="#bb9af7"
          />
          <FeatureCard 
            icon={Zap}
            title="Generative Frontier"
            description="Harness the power of Transformers, LLMs, and Diffusion models to build the next gen of AI apps."
            color="#ff9e64"
          />
          <FeatureCard 
            icon={Globe}
            title="Scale & Deploy"
            description="Learn how to deploy massive models with RAG (Retrieval Augmented Generation) and Vector Databases."
            color="#73daca"
          />
          <FeatureCard 
            icon={Brain}
            title="Logic & Thinking"
            description="Step beyond just 'coding'—learn the architectural thinking and decision-making behind AI system design."
            color="#f7768e"
          />
          <FeatureCard 
            icon={Rocket}
            title="Career Launcher"
            description="Work on real-world projects that mimic high-end corporate AI tasks to build your elite portfolio."
            color="#e0af68"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto glass-card bg-gradient-to-br from-primary/20 via-surface to-secondary/10 border-white/10 p-16 relative overflow-hidden text-center space-y-10 group">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[60px] rounded-full group-hover:bg-accent/40 transition-all duration-700" 
          />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/40 transition-all duration-700" 
          />
          
          <div className="relative z-10 space-y-6">
             <h4 className="text-6xl font-display font-black text-white leading-tight">
              The AI revolution <br /> won't wait. <span className="text-primary italic">Will you?</span>
             </h4>
             <p className="text-xl text-gray-400 max-w-xl mx-auto">
              Join thousands of students who are building their future today. One mission at a time.
             </p>
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-6">
             <Link to="/dashboard">
                <button className="bg-white text-[#07080d] font-black py-6 px-16 rounded-2xl flex items-center space-x-4 transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
                  <span className="text-xl">INITIATE CLEARANCE</span>
                  <ArrowRight size={24} />
                </button>
             </Link>
             <div className="flex items-center space-x-3 text-sm text-gray-500 font-bold uppercase tracking-wider">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Lifetime Access</span>
                <span className="text-gray-700">•</span>
                <CheckCircle2 size={16} className="text-primary" />
                <span>Expert Mentorship</span>
                <span className="text-gray-700">•</span>
                <CheckCircle2 size={16} className="text-primary" />
                <span>Hands-on Labs</span>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 opacity-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
             <Logo />
             <span className="text-xs font-bold text-gray-500 font-display tracking-widest uppercase">© 2026 NEXORA SYSTEMS INC.</span>
          </div>
          <div className="flex space-x-10 text-xs font-black uppercase tracking-widest text-gray-400">
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="hover:text-primary transition-colors">Discord</a>
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
