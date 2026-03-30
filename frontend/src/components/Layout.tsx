import { ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Trophy, BookOpen, Brain } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-0 border-r border-white/5 bg-surface/50 backdrop-blur-xl flex flex-col p-6 space-y-8 z-50">
      <div className="flex items-center space-x-3">
        <Brain className="w-8 h-8 text-primary animate-glow" />
        <span className="text-2xl font-display font-bold text-white tracking-wider">NEX</span>
      </div>

      <nav className="flex-1 space-y-2">
        <NavLink to="/" className={({isActive}) => `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
          <Home className="w-5 h-5" />
          <span className="font-medium">Training Ground</span>
        </NavLink>
        <NavLink to="/modules" className={({isActive}) => `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
          <BookOpen className="w-5 h-5" />
          <span className="font-medium">Modules</span>
        </NavLink>
        <NavLink to="/leaderboard" className={({isActive}) => `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
          <Trophy className="w-5 h-5" />
          <span className="font-medium">Leaderboard</span>
        </NavLink>
      </nav>

      <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-surfaceHover to-surface border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col space-y-2">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Level 12</span>
          <span className="text-sm text-gray-300">Chunin</span>
          <div className="w-full bg-background rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary h-full w-3/4 rounded-full" />
          </div>
          <p className="text-xs text-gray-500 mt-2">1,200 / 2,000 XP</p>
        </div>
      </div>
    </div>
  );
};

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-background text-gray-100 selection:bg-primary/30">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full point-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full point-events-none -z-10" />
        <Outlet />
        {children}
      </main>
    </div>
  );
};

export default Layout;
