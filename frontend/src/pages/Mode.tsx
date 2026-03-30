import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, Maximize2, MoveRight, HelpCircle, Activity } from 'lucide-react';
import { topics, modes, modules } from '../lib/data';

// --- MOCK COMPONENTS FOR EACH MODE ---
import { mlContent } from '../lib/ml-content';

const ConceptMode = ({ title, content }: { title: string, content?: any }) => {
  const [flipped, setFlipped] = useState(false);
  return (
  <div className="space-y-6">
    <div className="glass-card p-8 border-l-4 border-characters-naruto">
      <h3 className="text-2xl font-display font-bold text-white mb-4">The Ninja Way of {title}</h3>
      <p className="text-gray-300 leading-relaxed text-lg mb-6">
        {content?.explanation || `Imagine you're training under Naruto. You don't just memorize the jutsu; you understand the chakra flow. In ${title}, the core philosophy is balance. You have parameters learning from data, much like shadow clones.`}
      </p>
      
      <a href="https://gemini.google.com/gem/1OJ_BILMH4moZ8I13Dqj7FYpyB1s59byx?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-characters-naruto hover:bg-opacity-90 text-[#0d0e15] font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(255,158,100,0.4)]">
        <Activity className="w-5 h-5" />
        <span>Summon Concept Sensei (Gemini Gem)</span>
      </a>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="glass-card p-6 bg-surface/30 flex flex-col justify-center items-center h-48 border border-white/5 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-characters-naruto/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Activity className="w-12 h-12 text-characters-naruto mb-4 group-hover:scale-110 transition-transform duration-500" />
        <p className="font-bold text-white relative z-10">{content?.graphTitle || 'Chakra Network (Graph)'}</p>
        <span className="text-xs text-characters-naruto mt-2 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Visual Model</span>
      </div>
      <div 
         className="glass-card p-6 bg-surface/30 flex flex-col justify-center items-center h-48 border border-white/5 text-center cursor-pointer group hover:border-characters-naruto/50 transition-all relative"
         onClick={() => setFlipped(!flipped)}
      >
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div key="front" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
               <HelpCircle className="w-12 h-12 text-white/50 mb-4 group-hover:text-characters-naruto transition-colors" />
               <p className="font-bold text-white">Interactive Metaphor</p>
               <span className="text-xs text-gray-500 mt-2 tracking-widest uppercase">Click to Reveal</span>
            </motion.div>
          ) : (
            <motion.div key="back" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
               <p className="font-bold text-characters-naruto text-sm leading-relaxed max-w-xs">{content?.analogy || 'Analogy (Metaphor)'}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </div>
)};

const LabMode = ({ content, topicId }: { content?: any, topicId?: string }) => {
  const [sliderVal, setSliderVal] = useState(50);
  
  const renderInteractiveGraphic = () => {
    switch(topicId) {
      case 't1': // Linear Regression
        const slope = (sliderVal - 50) / 25; // mapped roughly
        return (
          <svg className="w-full h-full p-8" viewBox="0 0 100 100" overflow="visible">
             <circle cx="20" cy="80" r="3" fill="#fff" opacity="0.8"/>
             <circle cx="40" cy="60" r="3" fill="#fff" opacity="0.8"/>
             <circle cx="60" cy="50" r="3" fill="#fff" opacity="0.8"/>
             <circle cx="80" cy="20" r="3" fill="#fff" opacity="0.8"/>
             <line x1="0" y1={50 + slope * 50} x2="100" y2={50 - slope * 50} stroke="#f7768e" strokeWidth="3" className="transition-all duration-300" />
          </svg>
        );
      case 't2': // Classification
        const threshold = sliderVal;
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <rect x="0" y="0" width={threshold} height="100" fill="#f7768e" opacity="0.1" className="transition-all duration-300"/>
             <rect x={threshold} y="0" width={100 - threshold} height="100" fill="#7aa2f7" opacity="0.1" className="transition-all duration-300"/>
             
             {/* Class A points */}
             <circle cx="20" cy="30" r="4" fill="#f7768e" />
             <circle cx="35" cy="70" r="4" fill="#f7768e" />
             <circle cx="45" cy="50" r="4" fill="#f7768e" />
             {/* Class B points */}
             <circle cx="60" cy="30" r="4" fill="#7aa2f7" />
             <circle cx="80" cy="80" r="4" fill="#7aa2f7" />
             <circle cx="90" cy="40" r="4" fill="#7aa2f7" />
             
             <line x1={threshold} y1="0" x2={threshold} y2="100" stroke="#fff" strokeWidth="2" strokeDasharray="4" className="transition-all duration-300" />
          </svg>
        );
      case 't3': // Overfitting
        return (
          <svg className="w-full h-full p-4" viewBox="0 0 100 100" preserveAspectRatio="none">
             <circle cx="10" cy="20" r="3" fill="#fff" />
             <circle cx="30" cy="65" r="3" fill="#fff" />
             <circle cx="50" cy="80" r="3" fill="#fff" />
             <circle cx="70" cy="65" r="3" fill="#fff" />
             <circle cx="90" cy="20" r="3" fill="#fff" />
             {/* Dynamic Curve depending on complexity slider */}
             {sliderVal < 33 ? (
                // Underfit (straight line)
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f7768e" strokeWidth="3" className="transition-all" />
             ) : sliderVal < 66 ? (
                // Good fit (parabola)
                <path d="M 0 0 Q 50 160 100 0" fill="transparent" stroke="#9ece6a" strokeWidth="3" />
             ) : (
                // Overfit (zig zag to hit points exactly)
                <path d="M 10 20 L 30 65 L 50 80 L 70 65 L 90 20" fill="transparent" stroke="#f7768e" strokeWidth="3" />
             )}
          </svg>
        );
      case 't4': // Decision Trees
        const depth = Math.floor(sliderVal / 25);
        return (
          <div className="w-full h-full flex flex-col items-center py-6">
             <div className="w-32 h-10 bg-surface border-2 border-[#f7768e] rounded-xl flex items-center justify-center font-bold text-xs">Root Splitting</div>
             {depth >= 1 && (
               <div className="flex w-full justify-around mt-6 relative">
                 <div className="absolute top-[-24px] left-[25%] w-[1px] h-6 bg-white/20 transform rotate-[-45deg]"></div>
                 <div className="absolute top-[-24px] right-[25%] w-[1px] h-6 bg-white/20 transform rotate-[45deg]"></div>
                 <div className="w-24 h-8 bg-surface border-2 border-[#f7768e] rounded-xl"></div>
                 <div className="w-24 h-8 bg-surface border-2 border-[#f7768e] rounded-xl"></div>
               </div>
             )}
             {depth >= 2 && (
               <div className="flex w-full justify-around px-8 mt-6">
                 <div className="w-12 h-6 bg-surface border border-[#f7768e] rounded-lg"></div>
                 <div className="w-12 h-6 bg-surface border border-[#f7768e] rounded-lg"></div>
                 <div className="w-12 h-6 bg-surface border border-[#f7768e] rounded-lg"></div>
                 <div className="w-12 h-6 bg-surface border border-[#f7768e] rounded-lg"></div>
               </div>
             )}
             {depth >= 3 && (
               <div className="text-[#f7768e] font-bold text-sm mt-8 animate-pulse shadow-[0_0_10px_rgba(247,118,142,0.5)] p-2 rounded-lg">Over-fragmented Leaf Nodes Reached!</div>
             )}
          </div>
        );
      case 't5': // Perceptron
        const fire = sliderVal > 60;
        return (
          <svg className="w-full h-full p-6" viewBox="0 0 100 100" overflow="visible">
             <circle cx="20" cy="20" r="10" fill="#24283b" stroke="#7aa2f7" strokeWidth="2" />
             <circle cx="20" cy="50" r="10" fill="#24283b" stroke="#7aa2f7" strokeWidth="2" />
             <circle cx="20" cy="80" r="10" fill="#24283b" stroke="#7aa2f7" strokeWidth="2" />
             <circle cx="80" cy="50" r="15" fill={fire ? "#e0af68" : "#24283b"} stroke="#e0af68" strokeWidth="3" className="transition-all duration-300" />
             <line x1="30" y1="20" x2="65" y2="45" stroke="#7aa2f7" strokeWidth={sliderVal/20} opacity="0.6" className="transition-all" />
             <line x1="30" y1="50" x2="65" y2="50" stroke="#7aa2f7" strokeWidth={sliderVal/15} opacity="0.6" className="transition-all" />
             <line x1="30" y1="80" x2="65" y2="55" stroke="#7aa2f7" strokeWidth={sliderVal/20} opacity="0.6" className="transition-all" />
          </svg>
        );
      case 't6': // CNN
        return (
          <div className="w-full h-full flex items-center justify-center p-4 relative">
             <div className="grid grid-cols-5 gap-1 w-48 h-48 bg-white/5 p-1 rounded-xl">
               {[...Array(25)].map((_, i) => <div key={i} className="bg-white/10 rounded-sm"></div>)}
             </div>
             <div className="absolute border-4 border-[#9ece6a] rounded-lg shadow-[0_0_15px_rgba(158,206,106,0.5)] transition-all duration-300 ease-in-out z-10"
                  style={{ width: '3.3rem', height: '3.3rem', top: `calc(15% + ${Math.floor((sliderVal/100)*3) * 1.05}rem)`, left: `calc(32% + ${((sliderVal % 30)/30)*3 * 1.05}rem)` }}>
             </div>
          </div>
        );
      case 't7': // LLM (Transformers)
        const layers = Math.max(1, Math.floor(sliderVal/20));
        return (
           <div className="w-full h-full flex flex-col items-center justify-center py-4 space-y-2">
              <div className="px-4 py-2 border border-[#bb9af7] text-[#bb9af7] rounded-full text-xs font-bold">Word Embeddings</div>
              {[...Array(layers)].map((_, i) => (
                <div key={i} className="w-32 h-6 bg-[#bb9af7]/20 border border-[#bb9af7] rounded flex items-center justify-center animate-pulse">
                   <span className="text-[8px] text-[#bb9af7]">Self-Attention {i+1}</span>
                </div>
              ))}
              <div className="text-white text-sm font-bold mt-2 pt-2 border-t border-white/20">Next Token Probabilities</div>
           </div>
        );
      case 't8': // Prompt Engineering
        const chaos = sliderVal / 100;
        return (
           <div className="w-full h-full flex items-center justify-center p-6 relative overflow-hidden">
              <span className="text-4xl text-white font-bold tracking-widest z-10 mix-blend-difference">Output Engine</span>
              {[...Array(20)].map((_, i) => (
                <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-[#f7768e]"
                  animate={{ x: (Math.random() - 0.5) * 300 * chaos, y: (Math.random() - 0.5) * 200 * chaos, scale: 1 + Math.random() * chaos * 3, opacity: 0.2 + (chaos * 0.8) }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity, repeatType: 'reverse' }}
                />
              ))}
           </div>
        );
      case 't9': // RAG
        const dist = sliderVal;
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <rect x="5" y="40" width="20" height="20" rx="4" fill="transparent" stroke="#7aa2f7" strokeWidth="2" />
             <text x="15" y="52" fill="#7aa2f7" fontSize="5" textAnchor="middle">Query</text>
             <rect x="75" y="40" width="20" height="20" rx="4" fill="transparent" stroke="#e0af68" strokeWidth="2" />
             <text x="85" y="52" fill="#e0af68" fontSize="5" textAnchor="middle">LLM</text>
             <path d="M 40 20 Q 50 10 60 20 L 60 80 Q 50 90 40 80 Z" fill="transparent" stroke="#9ece6a" strokeWidth="2"/>
             <text x="50" y="52" fill="#9ece6a" fontSize="5" textAnchor="middle" transform="rotate(-90 50 50)">Vector DB</text>
             {dist > 30 && (
                <rect x={50 + (dist-30)/2} y="35" width="8" height="10" fill="#fff" className="transition-all duration-300" opacity={dist > 80 ? 0 : 1} />
             )}
          </svg>
        );
      case 't10': // Diffusion
        const noise = 100 - sliderVal;
        return (
          <div className="w-full h-full flex items-center justify-center bg-black rounded-b-xl border border-white/5">
             <div className="w-32 h-32 relative overflow-hidden rounded-xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#bb9af7] to-[#7aa2f7] rounded-full transform scale-75 opacity-100 shadow-[0_0_20px_#bb9af7]"></div>
                <div className="absolute inset-0 bg-black transition-opacity duration-300 z-20" style={{ opacity: noise/100 * 0.9 }}></div>
                <div className="absolute inset-0 mix-blend-overlay opacity-50 z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}></div>
             </div>
          </div>
        );
      case 't11': // SQL Select
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="flex w-full mb-2 bg-[#9ece6a]/20 p-2 font-bold text-[#9ece6a] text-xs rounded">
               <div className="flex-1">ID</div><div className="flex-1">Name</div><div className="flex-1">Value</div>
            </div>
            {[10, 30, 50, 70, 90].map((val, i) => (
               <div key={i} className={`flex w-full p-2 border-b border-white/10 text-xs text-gray-400 transition-all duration-500 ${val > sliderVal ? 'opacity-100 scale-100 bg-white/5' : 'opacity-10 scale-95'}`}>
                 <div className="flex-1">#{i+1}</div><div className="flex-1">Row {i}</div><div className="flex-1 text-white">{val}</div>
               </div>
            ))}
          </div>
        );
      case 't12': // Sql JOINS
        const overlap = sliderVal / 2; // up to 50
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" overflow="visible">
             <circle cx={40 + overlap/2} cy="50" r="25" fill="#7aa2f7" opacity="0.4" className="transition-all duration-500" />
             <text x={25 + overlap/2} y="52" fill="#fff" fontSize="6">Table A</text>
             <circle cx={90 - overlap} cy="50" r="25" fill="#f7768e" opacity="0.4" className="transition-all duration-500" />
             <text x={95 - overlap} y="52" fill="#fff" fontSize="6">Table B</text>
             {sliderVal > 70 && <text x="50" y="85" fill="#9ece6a" fontSize="6" textAnchor="middle" className="animate-pulse">INNER JOIN MATCH</text>}
          </svg>
        );
      default:
        return (
         <div className="w-full h-full p-8 flex items-end space-x-2">
            {[...Array(20)].map((_, i) => (
              <motion.div key={i} className="flex-1 bg-characters-goko" 
                animate={{ height: `${Math.max(10, 100 - (i * (sliderVal/10)))}%` }}
                transition={{ duration: 0.5 }}
              />
            ))}
         </div>
        );
    }
  }

  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-goko">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Hyperbolic Time Chamber</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{content?.instruction || 'Adjust the learning rate and observe the model training. What do you notice?'}</p>
        <div className="space-y-4 max-w-md mb-8">
          <label className="text-sm font-bold text-gray-400">{content?.label || 'Learning Rate'}: {sliderVal}</label>
          <input type="range" min="1" max="100" value={sliderVal} onChange={e => setSliderVal(parseInt(e.target.value))} className="w-full h-2 bg-surfaceHover rounded-lg appearance-none cursor-pointer accent-characters-goko" />
        </div>
        
        <a href="https://gemini.google.com/gem/1Sj47-XyfbV2dMCfNE8NWgAxehTPLEFQu?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-characters-goko hover:bg-opacity-90 text-[#0d0e15] font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(247,118,142,0.4)]">
          <Activity className="w-5 h-5" />
          <span>Summon Lab Sensei (Gemini Gem)</span>
        </a>
      </div>
      <div className="glass-card h-64 border border-white/5 flex items-center justify-center relative overflow-hidden bg-black/20">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        {renderInteractiveGraphic()}
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
      <div className="space-y-4 mb-8">
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
      
      <a href="https://gemini.google.com/gem/1cBFpx-dUISq_tBVMmJGhwuz2AcJLUplo?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-characters-toji hover:bg-opacity-90 text-[#0d0e15] font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(158,206,106,0.4)]">
        <Activity className="w-5 h-5" />
        <span>Summon Thinking Sensei (Gemini Gem)</span>
      </a>
    </div>
  </div>
)};

const DesignMode = ({ content }: { content?: string[] }) => {
  const blocks = content || ["User Request", "API Gateway", "Drop Model Here"];
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="glass-card w-full p-8 border-l-4 border-characters-luffy text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Architect the Grand Line</h3>
        <p className="text-gray-300 mb-6">Drag and connect blocks to design the system flow.</p>
        
        <a href="https://gemini.google.com/gem/13NM9fZdkkzi946oKrBdcCDqKckuRpfnH?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-characters-luffy hover:bg-opacity-90 text-[#0d0e15] font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(224,175,104,0.4)]">
          <Activity className="w-5 h-5" />
          <span>Summon Design Sensei (Gemini Gem)</span>
        </a>
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
      <div className="mt-6 flex justify-between items-center">
        <a href="https://gemini.google.com/gem/1z7yjRFWk9DuRcY6xGdj-wrPVPNSpnVWR?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 border border-characters-gojo/50 text-characters-gojo hover:bg-characters-gojo hover:text-[#0d0e15] font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(187,154,247,0.2)]">
          <Activity className="w-5 h-5" />
          <span>Summon Exam Sensei (Gemini Gem)</span>
        </a>
        <button className="bg-characters-gojo hover:bg-opacity-80 text-[#0d0e15] font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(187,154,247,0.4)]">
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

  const topicContent = topicId ? mlContent[topicId] : null;

  const renderContent = () => {
    switch(modeType?.toLowerCase()) {
      case 'concept': return <ConceptMode title={topicData.title} content={topicContent?.concept} />;
      case 'lab': return <LabMode content={topicContent?.lab} topicId={topicId} />;
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
