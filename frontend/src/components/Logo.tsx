import { Sparkles } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer py-2">
      <div className="relative flex items-center justify-center w-12 h-12">
        {/* Outer ambient glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-secondary opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
        
        {/* Core round shape */}
        <div className="relative w-full h-full bg-[#0a0f1a] border border-white/20 rounded-full flex items-center justify-center overflow-hidden z-10 shadow-[inset_0_0_20px_rgba(59,130,246,0.5)] group-hover:border-primary/60 transition-all duration-500 group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.8)]">
          
          {/* Inner animated radar sweep */}
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.08)_280deg,rgba(59,130,246,0.6)_360deg)] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] z-0" />

          {/* AI Robot SVG */}
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary/90 drop-shadow-[0_0_12px_rgba(59,130,246,1)] group-hover:scale-110 transition-transform duration-500 z-10 relative">
            {/* Robot Head Outer Structure */}
            <rect x="4" y="6" width="16" height="12" rx="4" stroke="currentColor" strokeWidth="1.5" className="opacity-90" />
            
            {/* Antenna Base & Pole */}
            <path d="M12 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70" />
            <path d="M9 6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70" />
            
            {/* Glowing Antenna Tip */}
            <circle cx="12" cy="2.5" r="1.5" fill="white" className="shadow-[0_0_8px_white] animate-pulse" />
            
            {/* Ears / Side Modules */}
            <path d="M2 10H4V14H2V10Z" fill="currentColor" className="opacity-80" />
            <path d="M20 10H22V14H20V10Z" fill="currentColor" className="opacity-80" />
            
            {/* Glowing Eyes */}
            <rect x="7" y="10" width="3" height="3" rx="1" fill="white" className="shadow-[0_0_8px_white] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            <rect x="14" y="10" width="3" height="3" rx="1" fill="white" className="shadow-[0_0_8px_white] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            
            {/* Tech Nodes/Mouth */}
            <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-80" />
            <circle cx="12" cy="16" r="0.5" fill="currentColor" />
          </svg>
          
          {/* Sparkles on hover */}
          <Sparkles className="absolute top-1 right-2 w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 animate-spin-slow z-20" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-2xl font-display font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-500 group-hover:from-white group-hover:via-white group-hover:to-primary transition-all duration-700 drop-shadow-sm">
          NEX
        </span>
        <span className="text-[0.6rem] font-mono tracking-[0.4em] text-primary/80 uppercase -mt-0.5 group-hover:text-secondary transition-colors duration-500 group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">
          Intelligence
        </span>
      </div>
    </div>
  );
};
