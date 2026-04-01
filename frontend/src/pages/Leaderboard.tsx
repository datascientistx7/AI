import { motion } from 'framer-motion';
import { Trophy, Flame, Brain, Medal, Crown } from 'lucide-react';
import { useProgress } from '../lib/progress';

export const Leaderboard = () => {
  const { getSummary } = useProgress();
  const summary = getSummary();

  const leaderboard = [
    { id: 1, name: 'Satoru', rank: 1, xp: 9500, level: 'Master', streak: 45, current: false },
    { id: 2, name: 'Itachi', rank: 2, xp: 8200, level: 'Jonin', streak: 30, current: false },
    { id: 3, name: 'Light', rank: 3, xp: 7500, level: 'Jonin', streak: 21, current: false },
    { id: 4, name: 'Student (You)', rank: 4, xp: summary.xp, level: summary.levelTitle, streak: Math.max(1, summary.completedTopics), current: true },
    { id: 5, name: 'Ash', rank: 5, xp: 950, level: 'Genin', streak: 5, current: false },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto py-10">
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-warning/10 blur-[100px] w-64 h-64 mx-auto -z-10 rounded-full" />
        <Trophy className="w-16 h-16 mx-auto mb-4 text-warning" />
        <h1 className="text-5xl font-display font-bold text-white mb-2">Global Arena</h1>
        <p className="text-gray-400 text-lg">Compare your AI mastery against the best.</p>
      </div>

      <div className="flex justify-center items-end space-x-6 mb-16">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card flex flex-col items-center p-6 w-52 h-64 justify-between border-t-4 border-[#C0C0C0]">
          <div className="w-16 h-16 rounded-full bg-surface border-4 border-[#C0C0C0] flex items-center justify-center mb-4">
            <Medal className="w-8 h-8 text-[#C0C0C0]" />
          </div>
          <h3 className="text-xl font-bold text-white text-center">Itachi</h3>
          <p className="text-[#C0C0C0] font-bold">8,200 XP</p>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">Rank #2</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="glass-card flex flex-col items-center p-8 w-64 h-72 justify-between border-t-8 border-warning shadow-[0_0_30px_rgba(224,175,104,0.3)] relative z-10 bottom-4">
          <div className="absolute -top-6">
            <Crown className="w-12 h-12 text-warning fill-warning/20 transform -rotate-12" />
          </div>
          <div className="w-20 h-20 rounded-full bg-surface border-4 border-warning flex items-center justify-center mt-4 mb-4">
            <Trophy className="w-10 h-10 text-warning" />
          </div>
          <h3 className="text-2xl font-bold text-white text-center">Satoru</h3>
          <p className="text-warning font-bold text-xl">9,500 XP</p>
          <span className="text-sm bg-warning/20 text-warning font-bold px-4 py-1 rounded-full shadow-[0_0_10px_rgba(224,175,104,0.5)]">Rank #1</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="glass-card flex flex-col items-center p-6 w-52 h-56 justify-between border-t-4 border-[#CD7F32]">
          <div className="w-12 h-12 rounded-full bg-surface border-4 border-[#CD7F32] flex items-center justify-center mb-4">
            <Medal className="w-6 h-6 text-[#CD7F32]" />
          </div>
          <h3 className="text-xl font-bold text-white text-center">Light</h3>
          <p className="text-[#CD7F32] font-bold">7,500 XP</p>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">Rank #3</span>
        </motion.div>
      </div>

      <div className="space-y-4">
        {leaderboard.map((user, i) => (
          <motion.div key={user.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <div className={`flex items-center justify-between p-5 rounded-2xl glass-card transition-all ${user.current ? 'border border-primary/50 bg-primary/10 shadow-[0_0_15px_rgba(122,162,247,0.2)]' : 'hover:bg-white/5 border border-white/5'}`}>
              <div className="flex items-center space-x-6">
                <div className="w-10 text-center font-display font-bold text-xl text-gray-500">{user.rank}</div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${user.current ? 'bg-primary text-[#0d0e15]' : 'bg-surface border border-white/10 text-gray-400'}`}>
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold flex items-center ${user.current ? 'text-primary' : 'text-white'}`}>
                    {user.name}
                    {user.current && <span className="ml-3 text-xs bg-primary text-[#0d0e15] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">You</span>}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5">{user.level}</p>
                </div>
              </div>

              <div className="flex items-center space-x-12">
                <div className="flex items-center space-x-2 text-warning">
                  <Flame className="w-5 h-5" />
                  <span className="font-bold">{user.streak} Days</span>
                </div>
                <div className="w-32 text-right">
                  <span className={`text-xl font-bold font-display tracking-tight ${user.current ? 'text-white' : 'text-gray-300'}`}>{user.xp.toLocaleString()} XP</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
