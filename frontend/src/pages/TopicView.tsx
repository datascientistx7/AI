import { useParams, Link } from 'react-router-dom';
import { topics, modes, modules } from '../lib/data';
import { motion } from 'framer-motion';
import { Sparkles, FlaskConical, BrainCircuit, Columns, GraduationCap, ChevronLeft } from 'lucide-react';

const CharacterIcons = {
  Concept: Sparkles, // Naruto
  Lab: FlaskConical, // Goko
  Thinking: BrainCircuit, // Toji
  Design: Columns, // Luffy
  Exam: GraduationCap, // Gojo
};

export const TopicView = () => {
  const { moduleId, topicId } = useParams<{ moduleId: string, topicId: string }>();
  const modTopics = topics[moduleId || ''] || [];
  const topic = modTopics.find(t => t.id === topicId);
  const mod = modules.find(m => m.id === moduleId);

  if (!topic) return <div className="text-white text-center py-20">Topic not found</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto py-10 space-y-12">
      <Link to={`/dashboard/modules/${moduleId}`} className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
        <ChevronLeft className="w-4 h-4" />
        <span>Back to {mod?.title || 'Module'}</span>
      </Link>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{mod?.title}</p>
        <h1 className="text-5xl font-display font-bold text-white mb-4">{topic.title}</h1>
        <p className="text-gray-400 text-lg">Master this topic through 5 ascending layers of understanding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {modes.map((mode, idx) => {
          const Icon = CharacterIcons[mode.type];
          return (
            <motion.div key={mode.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="h-full">
              <Link to={`/dashboard/modules/${moduleId}/${topicId}/mode/${mode.type.toLowerCase()}`} className="block h-full">
                <div className="glass-card hover:-translate-y-2 transition-all p-6 text-center space-y-4 h-full flex flex-col items-center group relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity ${mode.color.replace('text', 'bg')}`} />
                  
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-surface border border-white/5 relative group-hover:scale-110 transition-transform shadow-2xl z-10">
                   <div className={`absolute inset-0 blur-lg opacity-20 group-hover:opacity-50 transition-opacity rounded-2xl ${mode.color.replace('text', 'bg')}`} />
                    <Icon className={`w-8 h-8 ${mode.color} relative z-10`} />
                  </div>
                  
                  <div className="z-10 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold font-display text-white mt-4">{mode.title}</h3>
                    <p className={`text-xs uppercase font-bold tracking-wider mt-1 ${mode.color}`}>{mode.type} Mode</p>
                    <p className="text-sm text-gray-400 mt-4 flex-1">{mode.description}</p>
                  </div>
                  
                  <div className="w-full pt-4 border-t border-white/5 mt-4 z-10">
                    <span className="text-xs text-gray-500 font-medium">Character: <span className="capitalize">{mode.character}</span></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
