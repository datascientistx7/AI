import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { ModuleView } from './pages/ModuleView';
import { ModulesList } from './pages/ModulesList';
import { TopicView } from './pages/TopicView';
import { Leaderboard } from './pages/Leaderboard';
import { ModeView } from './pages/Mode';
import { Landing } from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="modules" element={<ModulesList />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="modules/:moduleId" element={<ModuleView />} />
        <Route path="modules/:moduleId/:topicId" element={<TopicView />} />
        <Route path="modules/:moduleId/:topicId/mode/:modeType" element={<ModeView />} />
      </Route>
    </Routes>
  );
}

export default App;
