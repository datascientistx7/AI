import { useParams, Link } from 'react-router-dom';
import { modules, getTopicsForModule } from '../lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Brain, Clock, CheckCircle, BookOpen, ChevronDown, Target } from 'lucide-react';
import { useState, type CSSProperties } from 'react';
import { useProgress } from '../lib/progress';

export const ModuleView = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { getTopicProgress, getModuleProgress } = useProgress();
  const mod = modules.find((m) => m.id === moduleId);
  const modTopicsFlat = getTopicsForModule(moduleId || '');
  const [expandedId, setExpandedId] = useState<string | null>(mod?.subModules?.[0]?.id ?? null);

  if (!mod) {
    return <div className="text-white text-center py-20 text-2xl font-display">Module not found</div>;
  }

  const hasSubModules = mod.subModules && mod.subModules.length > 0;
  const moduleProgress = getModuleProgress(mod.id);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto py-10 px-4 sm:px-6 relative">
      <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      {hasSubModules ? (
        <div className="mb-12 space-y-3 relative group">
          <div className="absolute -inset-x-10 -inset-y-10 bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="flex items-center space-x-3 text-secondary relative z-10">
            <div className="p-2 rounded-lg bg-surface/50 border border-white/10">
              <BookOpen className="w-5 h-5 text-characters-naruto" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Current Subject</span>
          </div>

          <div className="relative z-10">
            <h1 className="text-6xl font-display font-black tracking-tighter text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">{mod.title}</span>
              <span className="inline-block ml-3 w-3 h-3 rounded-full bg-primary animate-pulse" />
            </h1>
            <p className="text-gray-400 text-sm font-medium flex items-center space-x-2">
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{moduleProgress.completedTopics}/{moduleProgress.totalTopics} topics mastered</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{moduleProgress.percent}% module progress</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="mb-10 text-center space-y-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color)]/20 to-transparent blur-[80px] -z-10" style={{ '--color': mod.color } as CSSProperties} />
          <Brain className="w-16 h-16 mx-auto" style={{ color: mod.color }} />
          <h1 className="text-5xl font-display font-bold text-white tracking-tight">{mod.title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{mod.description}</p>
          <p className="text-sm text-gray-500">{moduleProgress.completedTopics}/{moduleProgress.totalTopics} topics mastered • {moduleProgress.completedModes}/{moduleProgress.totalModes} modes cleared</p>
        </div>
      )}

      <div className="space-y-5">
        {hasSubModules ? (
          mod.subModules?.map((sm, i) => {
            const isExpanded = expandedId === sm.id;

            return (
              <motion.div
                key={sm.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-3xl border transition-all duration-500 ${isExpanded ? 'border-primary/40 bg-surfaceHover/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-primary/20' : 'border-white/5 bg-surface/40 hover:bg-surfaceHover/50 hover:border-white/10'}`}
              >
                <button onClick={() => setExpandedId(isExpanded ? null : sm.id)} className="w-full text-left p-7 flex items-center justify-between group relative">
                  {isExpanded && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary" />}

                  <div className="relative z-10">
                    <h3 className={`text-2xl font-black tracking-tight transition-all duration-300 ${isExpanded ? 'text-primary scale-[1.02]' : 'text-white/90 group-hover:text-white'}`}>
                      {sm.title}
                    </h3>
                    <div className="flex items-center space-x-3 mt-1.5">
                      <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md ${isExpanded ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-500'}`}>
                        {sm.topics.length} topic{sm.topics.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {isExpanded ? <ChevronDown className="w-5 h-5 text-primary" /> : <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-2 border-t border-white/5 flex flex-col space-y-3">
                        {sm.topics.map((topic) => {
                          const topicProgress = getTopicProgress(topic.id);

                          return (
                            <Link key={topic.id} to={`/dashboard/modules/${mod.id}/${topic.id}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group/topic">
                              <div className="flex items-center space-x-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${topicProgress.completed ? 'border-success bg-success/20' : 'border-characters-naruto'}`} />
                                <span className="text-characters-naruto font-bold text-lg group-hover:brightness-125 transition-all">{topic.title}</span>
                              </div>
                              <div className="text-right text-xs text-gray-500">
                                <div>{topicProgress.completedModes}/{topicProgress.totalModes} modes</div>
                                {topicProgress.examBestScore !== null && <div className="text-characters-gojo">Exam {topicProgress.examBestScore}%</div>}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        ) : (
          <>
            <h2 className="text-2xl font-bold font-display text-white mb-6">Topics ({modTopicsFlat.length})</h2>
            {modTopicsFlat.map((topic, i) => {
              const topicProgress = getTopicProgress(topic.id);

              return (
                <motion.div key={topic.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link to={`/dashboard/modules/${mod.id}/${topic.id}`} className="block">
                    <div className="glass-card p-6 flex items-center justify-between group hover:border-[#7aa2f7]/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${topicProgress.completed ? 'bg-success/20 text-success border border-success/30' : 'bg-surface/50 text-gray-400 border border-white/10'}`}>
                          {topicProgress.completed ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold text-sm">{i + 1}</span>}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#7aa2f7] transition-colors">{topic.title}</h3>
                          <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{topicProgress.completedModes}/{topicProgress.totalModes} modes complete</span>
                            </div>
                            {topicProgress.examBestScore !== null && (
                              <div className="flex items-center space-x-1 text-characters-gojo">
                                <Target className="w-3 h-3" />
                                <span>{topicProgress.examBestScore}% best exam</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white mb-1">{topicProgress.percent}%</div>
                        <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-[#7aa2f7] transform group-hover:translate-x-2 transition-all ml-auto" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </>
        )}
      </div>
    </motion.div>
  );
};
