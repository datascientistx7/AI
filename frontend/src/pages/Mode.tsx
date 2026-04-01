import { useMemo, useState, type CSSProperties } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  ChevronLeft,
  HelpCircle,
  Maximize2,
  MoveRight,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import { allContent } from '../lib/content-index';
import { getTopicById, modes, modules } from '../lib/data';
import { PASSING_SCORE, getTopicSequenceForModule, useProgress } from '../lib/progress';
import type { ModeType, QuizQuestion, TopicModeContent } from '../lib/types';

function getModeNavigation(moduleId: string, topicId: string, modeType: ModeType) {
  const topicSequence = getTopicSequenceForModule(moduleId);
  const topicIndex = topicSequence.findIndex((topic) => topic.id === topicId);
  const modeIndex = modes.findIndex((mode) => mode.type === modeType);

  const resolveStep = (direction: -1 | 1) => {
    let nextTopicIndex = topicIndex;
    let nextModeIndex = modeIndex + direction;

    if (nextModeIndex < 0) {
      nextTopicIndex -= 1;
      if (nextTopicIndex < 0) return null;
      nextModeIndex = modes.length - 1;
    }

    if (nextModeIndex >= modes.length) {
      nextTopicIndex += 1;
      if (nextTopicIndex >= topicSequence.length) return null;
      nextModeIndex = 0;
    }

    const nextTopic = topicSequence[nextTopicIndex];
    const nextMode = modes[nextModeIndex];

    return {
      href: `/dashboard/modules/${moduleId}/${nextTopic.id}/mode/${nextMode.type.toLowerCase()}`,
      topicTitle: nextTopic.title,
      modeType: nextMode.type,
    };
  };

  return { previous: resolveStep(-1), next: resolveStep(1) };
}

const moduleLabColors: Record<string, string> = {
  ml: '#7aa2f7',
  dl: '#bb9af7',
  genai: '#f7768e',
  sql: '#9ece6a',
  agentic: '#e0af68',
};

function getModuleKey(topicId: string) {
  return topicId.split('_')[0] || 'ml';
}

function getLabInsight(topicId: string, sliderVal: number) {
  if (topicId.startsWith('ml_')) {
    return sliderVal < 35
      ? 'The model is too simple and misses structure.'
      : sliderVal > 70
        ? 'Complexity is high. Watch for unstable or fragmented behavior.'
        : 'This is the stable middle zone where the pattern often fits best.';
  }

  if (topicId.startsWith('dl_')) {
    return sliderVal > 60
      ? 'The network is activating more strongly and deeper signals are passing through.'
      : 'Lower settings make the network more conservative and weaker signals fade.';
  }

  if (topicId.startsWith('genai_')) {
    return sliderVal > 60
      ? 'The model is exploring more context, variability, or retrieval depth.'
      : 'The system is staying tighter, more focused, and more deterministic.';
  }

  if (topicId.startsWith('sql_')) {
    return sliderVal > 60
      ? 'The query is processing a heavier workload or stricter threshold.'
      : 'The query remains lightweight and easier to reason about.';
  }

  if (topicId.startsWith('agentic_')) {
    return sliderVal > 60
      ? 'The agent is handling more steps, memory, or coordination overhead.'
      : 'The workflow stays compact with fewer tools or loop iterations.';
  }

  return 'Use the slider to see how system behavior shifts.';
}

function renderLabScene(topicId: string, sliderVal: number) {
  if (topicId.startsWith('ml_')) {
    if (topicId === 'ml_t1') {
      const slope = (sliderVal - 50) / 22;
      return (
        <svg className="w-full h-full p-6" viewBox="0 0 100 100">
          {[{ x: 18, y: 74 }, { x: 32, y: 63 }, { x: 52, y: 48 }, { x: 68, y: 36 }, { x: 84, y: 22 }].map((point, i) => (
            <circle key={i} cx={point.x} cy={point.y} r="3" fill="#fff" opacity="0.8" />
          ))}
          <line x1="10" y1={70 + slope * 8} x2="90" y2={30 - slope * 8} stroke="#7aa2f7" strokeWidth="3" />
        </svg>
      );
    }

    return (
      <div className="w-full h-full flex items-end justify-center gap-4 p-8">
        {[30, 45, 60, 78].map((value, i) => (
          <div
            key={i}
            className={`w-16 rounded-t-xl ${value <= sliderVal ? 'bg-[#7aa2f7]' : 'bg-white/10'}`}
            style={{ height: `${value * 1.5}px` }}
          />
        ))}
      </div>
    );
  }

  if (topicId.startsWith('dl_')) {
    const fire = sliderVal > 55;

    return (
      <svg className="w-full h-full p-6" viewBox="0 0 100 100">
        {[20, 50, 80].map((y) => (
          <circle key={y} cx="18" cy={y} r="8" fill="#24283b" stroke="#bb9af7" strokeWidth="2" />
        ))}
        <circle cx="78" cy="50" r="14" fill={fire ? '#bb9af7' : '#24283b'} stroke="#bb9af7" strokeWidth="3" />
        {[20, 50, 80].map((y, i) => (
          <line key={i} x1="26" y1={y} x2="64" y2="50" stroke="#bb9af7" strokeWidth={2 + sliderVal / 25} opacity="0.55" />
        ))}
      </svg>
    );
  }

  if (topicId.startsWith('genai_')) {
    const layers = Math.max(1, Math.floor(sliderVal / 20));

    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
        {[...Array(layers)].map((_, i) => (
          <div key={i} className="w-44 h-8 rounded-full border border-[#f7768e] bg-[#f7768e]/15 flex items-center justify-center text-xs text-white">
            Attention Head {i + 1}
          </div>
        ))}
      </div>
    );
  }

  if (topicId.startsWith('sql_')) {
    return (
      <div className="w-full h-full flex flex-col justify-center gap-2 p-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`h-8 rounded-lg border px-4 flex items-center ${
              i < Math.max(1, Math.floor(sliderVal / 18))
                ? 'border-[#9ece6a] bg-[#9ece6a]/20 text-white'
                : 'border-white/10 bg-white/5 text-gray-500'
            }`}
          >
            row_{i + 1} - status = active
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center gap-4 p-8">
      {['Goal', 'Act', 'Observe', sliderVal > 55 ? 'Reflect' : 'Respond'].map((step, i) => (
        <div key={step} className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-[#e0af68] bg-[#e0af68]/10 flex items-center justify-center text-xs text-center text-white">
            {step}
          </div>
          {i < 3 && <MoveRight className="text-[#e0af68]" />}
        </div>
      ))}
    </div>
  );
}

function ConceptMode({ title, content }: { title: string; content?: TopicModeContent | null }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-naruto">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Concept Brief: {title}</h3>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">{content?.concept?.explanation || 'Build intuition first, then formulas.'}</p>

        <div className="inline-flex items-center gap-2 rounded-full border border-characters-naruto/30 bg-characters-naruto/10 px-4 py-2 text-sm text-characters-naruto">
          <Activity className="w-4 h-4" />
          <span>Focus on understanding the core idea before moving ahead.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 bg-surface/30 flex flex-col justify-center items-center h-48 border border-white/5 text-center">
          <Activity className="w-12 h-12 text-characters-naruto mb-4" />
          <p className="font-bold text-white">{content?.concept?.graphTitle || 'Core topic graph'}</p>
        </div>

        <button
          className="glass-card p-6 bg-surface/30 flex flex-col justify-center items-center h-48 border border-white/5 text-center hover:border-characters-naruto/50 transition-all"
          onClick={() => setFlipped((current) => !current)}
        >
          <AnimatePresence mode="wait">
            {flipped ? (
              <motion.p
                key="back"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="font-bold text-characters-naruto text-sm leading-relaxed max-w-xs"
              >
                {content?.concept?.analogy || 'Topic analogy'}
              </motion.p>
            ) : (
              <motion.div
                key="front"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="flex flex-col items-center"
              >
                <HelpCircle className="w-12 h-12 text-white/50 mb-4" />
                <p className="font-bold text-white">Interactive Metaphor</p>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}

function LabMode({ content, topicId }: { content?: TopicModeContent | null; topicId: string }) {
  const [sliderVal, setSliderVal] = useState(50);
  const accent = moduleLabColors[getModuleKey(topicId)] ?? '#f7768e';

  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-goko">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Interactive Lab</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{content?.lab?.instruction || 'Adjust the control and inspect the behavior change.'}</p>

        <div className="space-y-4 max-w-md mb-6">
          <label className="text-sm font-bold text-gray-400">
            {content?.lab?.label || 'Control'}: {sliderVal}
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={sliderVal}
            onChange={(e) => setSliderVal(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-surfaceHover rounded-lg appearance-none cursor-pointer accent-characters-goko"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface/40 px-4 py-3 text-sm text-gray-300">
          <span className="font-bold" style={{ color: accent }}>
            Simulation Insight:
          </span>{' '}
          {getLabInsight(topicId, sliderVal)}
        </div>
      </div>

      <div className="glass-card h-72 border border-white/5 flex items-center justify-center relative overflow-hidden bg-black/20 p-6">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        {renderLabScene(topicId, sliderVal)}
      </div>
    </div>
  );
}

function ThinkingMode({ content }: { content?: TopicModeContent | null }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-toji">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Scenario Practice</h3>
        <p className="text-gray-300 leading-relaxed mb-8">{content?.thinking?.scenario || 'Evaluate the scenario and choose the strongest answer.'}</p>

        <div className="space-y-4">
          {(content?.thinking?.options || []).map((option, i) => {
            const selectedNow = selected === i;
            const isCorrect = selectedNow && content?.thinking?.correctIndex === i;
            const isWrong = selectedNow && content?.thinking?.correctIndex !== i;

            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left p-4 rounded-xl border transition-colors ${
                  isCorrect
                    ? 'border-success bg-success/10 text-success'
                    : isWrong
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-white/10 text-gray-200 hover:border-characters-toji hover:bg-characters-toji/10'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DesignMode({ content }: { content?: TopicModeContent | null }) {
  const blocks = content?.design || ['Input', 'Process', 'Output'];

  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-luffy">
        <h3 className="text-2xl font-display font-bold text-white mb-4">System Flow</h3>
        <p className="text-gray-300 mb-6">Use this mode to understand how the topic fits into a larger workflow.</p>
      </div>

      <div className="glass-card min-h-[240px] flex items-center justify-center p-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {blocks.map((block, i) => (
            <div key={`${block}-${i}`} className="flex items-center gap-4">
              <div className="px-5 py-4 rounded-xl border border-characters-luffy/40 bg-surface/60 text-white font-bold text-center min-w-[170px]">
                {block}
              </div>
              {i < blocks.length - 1 && <MoveRight className="text-characters-luffy w-6 h-6" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function buildQuiz(topicId: string, topicTitle: string, content?: TopicModeContent | null): QuizQuestion[] {
  if (!content) return [];
  if (content.quiz?.length) return content.quiz;

  const steps = content.design;
  const firstOptions = Array.from(new Set([steps[0], ...steps.slice(1, 4), 'Random Guessing'])).slice(0, 4) as string[];
  const secondOptions = Array.from(new Set([steps[1], steps[0], ...steps.slice(2, 5), 'Output Validation'])).slice(0, 4) as string[];

  return [
    {
      id: `${topicId}-scenario`,
      prompt: content.thinking.scenario,
      options: content.thinking.options,
      correctIndex: content.thinking.correctIndex,
      explanation: `Use the scenario logic for ${topicTitle}.`,
    },
    {
      id: `${topicId}-first`,
      prompt: `Which step appears first in the ${topicTitle} design flow?`,
      options: firstOptions,
      correctIndex: Math.max(0, firstOptions.indexOf(steps[0])),
    },
    {
      id: `${topicId}-second`,
      prompt: `After "${steps[0]}", what comes next?`,
      options: secondOptions,
      correctIndex: Math.max(0, secondOptions.indexOf(steps[1] ?? secondOptions[0])),
    },
  ];
}

function ExamMode({
  topicId,
  title,
  content,
}: {
  topicId: string;
  title: string;
  content?: TopicModeContent | null;
}) {
  const { submitExamResult, getModeProgress } = useProgress();
  const examProgress = getModeProgress(topicId, 'Exam');
  const quiz = useMemo(() => buildQuiz(topicId, title, content), [content, title, topicId]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const allAnswered = quiz.every((question) => answers[question.id] !== undefined);
  const percent = quiz.length ? Math.round((score / quiz.length) * 100) : 0;
  const passed = percent >= PASSING_SCORE;

  const handleSubmit = () => {
    const nextScore = quiz.reduce(
      (total, question) => total + (answers[question.id] === question.correctIndex ? 1 : 0),
      0,
    );

    setScore(nextScore);
    setSubmitted(true);
    submitExamResult(topicId, nextScore, quiz.length);
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-8 border-l-4 border-characters-gojo">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Checkpoint Assessment</h3>
            <p className="text-gray-400">{content?.exam?.question || `Complete the ${title} checkpoint quiz.`}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface/40 px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-widest text-gray-500">Passing Score</p>
            <p className="text-2xl font-display font-bold text-characters-gojo">{PASSING_SCORE}%</p>
          </div>
        </div>

        {examProgress?.bestScore !== null && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-characters-gojo/20 bg-characters-gojo/10 px-4 py-2 text-sm text-characters-gojo">
            <Trophy className="w-4 h-4" />
            <span>Best score: {examProgress?.bestScore}%</span>
          </div>
        )}

        <div className="space-y-5">
          {quiz.map((question, index) => (
            <div key={question.id} className="rounded-2xl border border-white/10 bg-surface/40 p-5">
              <p className="text-sm text-gray-500 mb-2">
                Question {index + 1}/{quiz.length}
              </p>
              <p className="text-lg text-white mb-4">{question.prompt}</p>

              <div className="space-y-3">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[question.id] === optionIndex;
                  const correct = submitted && optionIndex === question.correctIndex;
                  const wrong = submitted && selected && optionIndex !== question.correctIndex;

                  return (
                    <button
                      key={optionIndex}
                      disabled={submitted}
                      onClick={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                      className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                        correct
                          ? 'border-success bg-success/10 text-success'
                          : wrong
                            ? 'border-accent bg-accent/10 text-accent'
                            : selected
                              ? 'border-characters-gojo bg-characters-gojo/10 text-white'
                              : 'border-white/10 text-gray-200 hover:border-characters-gojo/60 hover:bg-white/5'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {submitted && question.explanation && <p className="mt-4 text-sm text-gray-400">{question.explanation}</p>}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-between items-center">
          {!submitted ? (
            <button
              disabled={!allAnswered}
              onClick={handleSubmit}
              className="bg-characters-gojo disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-80 text-[#0d0e15] font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(187,154,247,0.4)]"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                setScore(0);
              }}
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white font-bold py-3 px-5 rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake</span>
            </button>
          )}
        </div>
      </div>

      {submitted && (
        <div className={`glass-card p-6 border ${passed ? 'border-success/40' : 'border-accent/40'}`}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">Exam Result</p>
              <h4 className={`text-2xl font-display font-bold ${passed ? 'text-success' : 'text-accent'}`}>
                {score}/{quiz.length} correct - {percent}%
              </h4>
              <p className="text-gray-400 mt-2">
                {passed ? 'Checkpoint passed successfully.' : `You need ${PASSING_SCORE}% to pass this checkpoint.`}
              </p>
            </div>
            {passed && <CheckCircle2 className="w-10 h-10 text-success" />}
          </div>
        </div>
      )}
    </div>
  );
}

export const ModeView = () => {
  const { moduleId, topicId, modeType } = useParams<{ moduleId: string; topicId: string; modeType: string }>();
  const navigate = useNavigate();
  const { completeMode, getModeProgress } = useProgress();

  const modeData = modes.find((mode) => mode.type.toLowerCase() === modeType?.toLowerCase());
  const topicData = getTopicById(topicId || '');
  const modData = modules.find((module) => module.id === moduleId);

  if (!modeData || !topicData || !moduleId || !topicId) {
    return <div className="text-center py-20 text-white">Mode not found</div>;
  }

  const topicContent = allContent[topicId] ?? null;
  const modeProgress = getModeProgress(topicId, modeData.type);
  const navigation = getModeNavigation(moduleId, topicId, modeData.type);

  const handleCompleteAndContinue = () => {
    completeMode(topicId, modeData.type);
    navigate(navigation.next?.href ?? `/dashboard/modules/${moduleId}/${topicId}`);
  };

  const renderContent = () => {
    switch (modeData.type) {
      case 'Concept':
        return <ConceptMode title={topicData.title} content={topicContent} />;
      case 'Lab':
        return <LabMode topicId={topicId} content={topicContent} />;
      case 'Thinking':
        return <ThinkingMode content={topicContent} />;
      case 'Design':
        return <DesignMode content={topicContent} />;
      case 'Exam':
        return <ExamMode topicId={topicId} title={topicData.title} content={topicContent} />;
      default:
        return <div className="text-white">Content coming soon.</div>;
    }
  };

  const actionStyle = {
    '--color': modeData.color.replace('text-', ''),
  } as CSSProperties;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto py-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
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
          <h1 className="text-sm font-bold uppercase tracking-widest text-white/50">Learning Step</h1>
          <h2 className={`text-5xl font-display font-black tracking-tight ${modeData.color}`}>{modeData.type}</h2>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-3 py-1 text-xs text-gray-300">
            {modeProgress?.completed ? <CheckCircle2 className="w-3.5 h-3.5 text-success" /> : <Activity className="w-3.5 h-3.5 text-info" />}
            <span>{modeProgress?.completed ? 'Completed' : 'Available now'}</span>
            {modeData.type === 'Exam' && modeProgress?.bestScore !== null && <span>- Best {modeProgress?.bestScore}%</span>}
          </div>
        </div>

        <div className="relative z-10 text-right pr-6">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold font-display opacity-50 block mb-1">Step Type</span>
          <span className="text-2xl font-bold text-white font-display">{modeData.title}</span>
        </div>
      </header>

      <main className="mb-12">
        <AnimatePresence mode="wait">
          <motion.div key={modeType} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="flex justify-between items-center border-t border-white/10 pt-6 text-sm text-gray-500 gap-4">
        <button
          onClick={() => navigate(navigation.previous?.href ?? `/dashboard/modules/${moduleId}/${topicId}`)}
          className="border border-white/20 hover:bg-white/5 text-white font-bold py-3 px-6 rounded-xl transition-all"
        >
          Previous
        </button>

        {modeData.type === 'Exam' ? (
          <div>{navigation.next ? `Next step: ${navigation.next.topicTitle} - ${navigation.next.modeType}` : 'This is the final step in the guided path.'}</div>
        ) : (
          <button
            onClick={handleCompleteAndContinue}
            className="bg-gradient-to-r from-surfaceHover to-surface border border-white/10 hover:border-white/30 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 group"
            style={actionStyle}
          >
            <span>{modeProgress?.completed ? 'Continue' : 'Mark Complete & Continue'}</span>
            <MoveRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
