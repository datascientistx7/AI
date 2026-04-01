import { Link } from 'react-router-dom';
import { modules } from '../lib/data';
import { motion } from 'framer-motion';
import { Brain, Network, Sparkles, Database, Bot, MoveRight } from 'lucide-react';
import { useProgress } from '../lib/progress';

const iconMap: Record<string, any> = {
  Brain,
  Network,
  Sparkles,
  Database,
  Bot,
};

export const ModulesList = () => {
  const { getModuleProgress } = useProgress();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-12 pb-20 pt-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-display font-bold text-white mb-4">All Training Modules</h1>
        <p className="text-gray-400 text-lg">Select a discipline to begin or continue your AI mastery journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod, i) => {
          const Icon = iconMap[mod.icon] || Brain;
          const moduleProgress = getModuleProgress(mod.id);

          return (
            <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={`/dashboard/modules/${mod.id}`} className="block h-full">
                <div className="glass-card glass-card-hover h-full p-8 flex flex-col items-start relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Icon className="w-32 h-32" style={{ color: mod.color }} />
                  </div>

                  <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-white/5 border border-white/10 relative z-10 shadow-2xl" style={{ boxShadow: `0 0 20px ${mod.color}20` }}>
                    <Icon className="w-8 h-8" style={{ color: mod.color }} />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">{mod.title}</h3>
                  <p className="text-gray-400 mb-8 relative z-10 flex-1">{mod.description}</p>

                  <div className="w-full relative z-10 mt-auto space-y-4">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span style={{ color: mod.color }}>{moduleProgress.percent}% Mastered</span>
                      <MoveRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-2" />
                    </div>
                    <div className="text-xs text-gray-500">
                      {moduleProgress.completedTopics}/{moduleProgress.totalTopics} topics complete • {moduleProgress.completedModes}/{moduleProgress.totalModes} modes cleared
                    </div>
                    <div className="w-full bg-background rounded-full h-2 overflow-hidden border border-white/5">
                      <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${moduleProgress.percent}%`, backgroundColor: mod.color }} />
                    </div>
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
