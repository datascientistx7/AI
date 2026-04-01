import { Link } from 'react-router-dom';
import { modules } from '../lib/data';
import { motion } from 'framer-motion';
import { Brain, Network, Sparkles, Database, Bot, Flame, MoveRight, Play } from 'lucide-react';
import { useProgress } from '../lib/progress';

const iconMap: Record<string, any> = {
  Brain,
  Network,
  Sparkles,
  Database,
  Bot,
};

export const Home = () => {
  const { getModuleProgress, getNextLesson, getSummary } = useProgress();
  const nextLesson = getNextLesson();
  const summary = getSummary();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Welcome back, Student.</h1>
          <p className="text-gray-400 text-lg">Your AI proficiency is growing. Ready for today's training?</p>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-xl border border-warning/20">
            <Flame className="w-5 h-5" />
            <span className="font-bold">{Math.max(1, summary.completedTopics)} Topic Streak</span>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display">Continue Training</h2>
        </div>
        <div className="glass-card hover:border-primary/30 transition-all p-8 flex justify-between items-center group cursor-pointer relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center space-x-6 z-10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary font-bold uppercase tracking-wider mb-1">{nextLesson?.moduleTitle ?? 'Learning Path'}</p>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{nextLesson?.topicTitle ?? 'Start your first topic'}</h3>
              <p className="text-gray-400">
                {nextLesson ? `${nextLesson.modeType} Mode • Next recommended step` : 'Everything is complete. Revisit any topic to improve your scores.'}
              </p>
            </div>
          </div>
          <Link to={nextLesson ? `/dashboard/modules/${nextLesson.moduleId}/${nextLesson.topicId}/mode/${nextLesson.modeType.toLowerCase()}` : '/dashboard/modules'} className="z-10">
            <button className="bg-primary hover:bg-primary/90 text-[#0d0e15] font-bold py-3 px-6 rounded-xl flex items-center space-x-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(122,162,247,0.3)]">
              <span>{nextLesson ? 'Resume' : 'Browse'}</span>
              <Play className="w-4 h-4 fill-current" />
            </button>
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display">Your Modules</h2>
          <Link to="/dashboard/modules" className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors">
            <span>View All</span>
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => {
            const Icon = iconMap[mod.icon] || Brain;
            const moduleProgress = getModuleProgress(mod.id);

            return (
              <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/dashboard/modules/${mod.id}`} className="block h-full">
                  <div className="glass-card glass-card-hover h-full p-6 flex flex-col items-start relative group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-300">
                      <Icon className="w-24 h-24" style={{ color: mod.color }} />
                    </div>
                    <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 relative z-10" style={{ boxShadow: `0 0 15px ${mod.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: mod.color }} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">{mod.title}</h3>
                    <p className="text-sm text-gray-400 mb-6 relative z-10 flex-1">{mod.description}</p>

                    <div className="w-full relative z-10 mt-auto">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-400">{moduleProgress.completedTopics}/{moduleProgress.totalTopics} topics mastered</span>
                        <span className="font-medium text-white">{moduleProgress.percent}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${moduleProgress.percent}%`, backgroundColor: mod.color }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};
