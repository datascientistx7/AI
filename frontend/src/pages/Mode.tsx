import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, Maximize2, MoveRight, HelpCircle, Activity } from 'lucide-react';
import { topics, modes, modules } from '../lib/data';

// --- MOCK COMPONENTS FOR EACH MODE ---
import { mlContent } from '../lib/ml-content';

const ConceptMode = ({ title, content }: { title: string, content?: any }) => (
  <div className="space-y-6">
    <div className="glass-card p-8 border-l-4 border-characters-naruto">
      <h3 className="text-2xl font-display font-bold text-white mb-4">The Ninja Way of {title}</h3>
      <p className="text-gray-300 leading-relaxed text-lg">
        {content?.explanation || `Imagine you're training under Naruto. You don't just memorize the jutsu; you understand the chakra flow. In ${title}, the core philosophy is balance. You have parameters learning from data, much like shadow clones.`}
      </p>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="glass-card p-6 bg-surface/30 flex flex-col justify-center items-center h-48 border border-white/5 text-center">
        <Activity className="w-12 h-12 text-characters-naruto mb-4" />
        <p className="font-bold text-white">{content?.graphTitle || 'Chakra Network (Graph)'}</p>
      </div>
      <div className="glass-card p-6 bg-surface/30 flex flex-col justify-center items-center h-48 border border-white/5 text-center">
        <HelpCircle className="w-12 h-12 text-characters-naruto mb-4" />
        <p className="font-bold text-white text-sm">{content?.analogy || 'Analogy (Metaphor)'}</p>
      </div>
    </div>
  </div>
);

const LabMode = ({ content }: { content?: any }) => {
  const [sliderVal, setSliderVal] = useState(50);
  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-goko">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Hyperbolic Time Chamber</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{content?.instruction || 'Adjust the learning rate and observe the model training. What do you notice?'}</p>
        <div className="space-y-4 max-w-md">
          <label className="text-sm font-bold text-gray-400">{content?.label || 'Learning Rate'}: {sliderVal / 100}</label>
          <input type="range" min="1" max="100" value={sliderVal} onChange={e => setSliderVal(parseInt(e.target.value))} className="w-full h-2 bg-surfaceHover rounded-lg appearance-none cursor-pointer accent-characters-goko" />
        </div>
      </div>
      <div className="glass-card h-64 border border-white/5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
         <div className="w-full h-full p-8 flex items-end space-x-2">
            {[...Array(20)].map((_, i) => (
              <motion.div key={i} className="flex-1 bg-characters-goko" 
                animate={{ height: `${Math.max(10, 100 - (i * (sliderVal/10)))}%` }}
                transition={{ duration: 0.5 }}
              />
            ))}
         </div>
      </div>
    </div>
  );
};

const ThinkingMode = ({ content }: { content?: any }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const options = content?.options || ['Quantize the model weights', 'Increase server size', 'Ignore it, speed doesn\'t matter'];
  
  return (
   <div className="space-y-6">
    <div className="glass-card p-8 border-l-4 border-characters-toji">
      <h3 className="text-2xl font-display font-bold text-white mb-4">Tactical Assessment</h3>
      <p className="text-gray-300 leading-relaxed mb-8">
        {content?.scenario || "You're deploying a model in production, but latency is extremely high. The payload is heavy. What's your next move?"}
      </p>
      <div className="space-y-4">
        {options.map((option: string, i: number) => {
          const isSelected = selected === i;
          const isCorrect = isSelected && content?.correctIndex === i;
          const isWrong = isSelected && content?.correctIndex !== i;
          return (
            <button key={i} onClick={() => setSelected(i)} className={`w-full text-left p-4 rounded-xl border transition-colors text-gray-200 ${isCorrect ? 'border-success bg-success/10 text-success' : isWrong ? 'border-accent bg-accent/10 text-accent' : 'border-white/10 hover:border-characters-toji hover:bg-characters-toji/10'}`}>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  </div>
)};

const DesignMode = ({ content }: { content?: string[] }) => {
  const blocks = content || ["User Request", "API Gateway", "Drop Model Here"];
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="glass-card w-full p-8 border-l-4 border-characters-luffy text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Architect the Grand Line</h3>
        <p className="text-gray-300">Drag and connect blocks to design the system flow.</p>
      </div>
      <div className="flex space-x-4 items-center flex-wrap justify-center py-10 w-full glass-card min-h-[300px]">
          {blocks.map((block, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="p-4 border border-characters-luffy/50 bg-surface rounded-xl font-bold w-40 text-center shadow-[0_0_15px_rgba(224,175,104,0.1)] hover:scale-105 transition-transform cursor-pointer">
                {block}
              </div>
              {i < blocks.length - 1 && <MoveRight className="text-characters-luffy w-8 h-8" />}
            </div>
          ))}
      </div>
    </div>
  );
};

const ExamMode = ({ content }: { content?: any }) => (
  <div className="space-y-6">
    <div className="glass-card p-8 border-l-4 border-characters-gojo">
      <h3 className="text-2xl font-display font-bold text-white mb-4">Domain Expansion: Infinite Void</h3>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-300">Question 1/5</p>
        <span className="text-characters-gojo font-bold font-display text-2xl tracking-widest">04:59</span>
      </div>
      <p className="text-xl text-white mb-8">{content?.question || "Explain the trade-off between bias and variance in your own words. (5 Marks)"}</p>
      <textarea 
        className="w-full h-40 bg-surfaceHover border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-characters-gojo transition-colors font-sans resize-none"
        placeholder="Type your structured answer here..."
      />
      <div className="mt-6 flex justify-end">
        <button className="bg-characters-gojo hover:bg-opacity-80 text-[#0d0e15] font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-characters-gojo/20">
          Submit Answer
        </button>
      </div>
    </div>
  </div>
);

export const ModeView = () => {
  const { moduleId, topicId, modeType } = useParams<{ moduleId: string, topicId: string, modeType: string }>();
  const navigate = useNavigate();
  
  const modeData = modes.find(m => m.type.toLowerCase() === modeType?.toLowerCase());
  const topicData = topics[moduleId || '']?.find(t => t.id === topicId);
  const modData = modules.find(m => m.id === moduleId);

  if (!modeData || !topicData) return <div className="text-center py-20 text-white">Mode not found</div>;

  const topicContent = moduleId === 'ml' && topicId ? mlContent[topicId] : null;

  const renderContent = () => {
    switch(modeType?.toLowerCase()) {
      case 'concept': return <ConceptMode title={topicData.title} content={topicContent?.concept} />;
      case 'lab': return <LabMode content={topicContent?.lab} />;
      case 'thinking': return <ThinkingMode content={topicContent?.thinking} />;
      case 'design': return <DesignMode content={topicContent?.design} />;
      case 'exam': return <ExamMode content={topicContent?.exam} />;
      default: return <div>Content Coming Soon</div>;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto py-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span>Exit Training</span>
        </button>
        <div className="flex items-center space-x-3 text-sm font-bold tracking-wider text-gray-500 uppercase">
          <span>{modData?.title}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          <span>{topicData.title}</span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      <header className="mb-12 relative flex items-center justify-between glass-card p-6 overflow-hidden">
        <div className={`absolute top-0 left-0 w-2 h-full ${modeData.color.replace('text', 'bg')}`} />
        <div className={`absolute right-0 bottom-0 w-64 h-64 blur-[100px] opacity-20 ${modeData.color.replace('text', 'bg')} pointer-events-none`} />
        
        <div className="relative z-10 pl-6 space-y-2">
          <h1 className="text-sm font-bold uppercase tracking-widest text-white/50">{modeData.title}</h1>
          <h2 className={`text-5xl font-display font-black tracking-tight ${modeData.color}`}>{modeData.type}</h2>
        </div>
        
        <div className="relative z-10 text-right pr-6">
           <span className="text-gray-400 uppercase tracking-widest text-xs font-bold font-display opacity-50 block mb-1">Guiding Spirit</span>
           <span className="text-2xl font-bold text-white capitalize font-display italic">"{modeData.character}"</span>
        </div>
      </header>

      <main className="mb-12">
        <AnimatePresence mode="wait">
          <motion.div key={modeType} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
         <button className="border border-white/20 hover:bg-white/5 text-white font-bold py-3 px-6 rounded-xl transition-all">Previous</button>
         <button className={`bg-gradient-to-r from-surfaceHover to-surface border border-white/10 hover:border-[var(--color)] hover:shadow-[0_0_20px_var(--color-shadow)] transition-all font-bold py-3 px-8 rounded-xl flex items-center space-x-2 text-white group`} style={{ '--color': `theme('colors.${modeData.color.replace('text-', '')}')`, '--color-shadow': `theme('colors.${modeData.color.replace('text-', '')} / 20%')` } as React.CSSProperties}>
           <span>Next Step</span>
           <MoveRight className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform`} />
         </button>
      </div>
    </motion.div>
  );
};
