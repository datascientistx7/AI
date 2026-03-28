import { useParams, Link } from 'react-router-dom';
import { modules, topics } from '../lib/data';
import { motion } from 'framer-motion';
import { ChevronRight, Brain, Clock, CheckCircle } from 'lucide-react';

export const ModuleView = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = modules.find((m) => m.id === moduleId);
  const modTopics = topics[moduleId || ''] || [];

  if (!mod) {
    return <div className="text-white text-center py-20 text-2xl font-display">Module not found</div>;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto py-10">
      <div className="mb-10 text-center space-y-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color)]/20 to-transparent blur-[80px] -z-10" style={{ '--color': mod.color } as React.CSSProperties} />
        <Brain className="w-16 h-16 mx-auto" style={{ color: mod.color }} />
        <h1 className="text-5xl font-display font-bold text-white tracking-tight">{mod.title}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{mod.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-display text-white mb-6">Topics ({modTopics.length})</h2>
        {modTopics.map((topic, i) => (
          <motion.div key={topic.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <Link to={`/modules/${mod.id}/${topic.id}`} className="block">
              <div className="glass-card p-6 flex items-center justify-between group hover:border-[#7aa2f7]/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${topic.completed ? 'bg-success/20 text-success border border-success/30' : 'bg-surface/50 text-gray-400 border border-white/10'}`}>
                    {topic.completed ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold text-sm">{i + 1}</span>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#7aa2f7] transition-colors">{topic.title}</h3>
                    <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>~45 mins to complete</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-[#7aa2f7] transform group-hover:translate-x-2 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
