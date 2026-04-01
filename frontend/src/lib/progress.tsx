import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getOrderedTopicEntries, getTopicsForModule, modes } from './data';
import type { ModeType, Topic } from './types';

const STORAGE_KEY = 'ahmed-ai-progress-v1';
const PASSING_SCORE = 60;

interface ModeProgressRecord {
  completed: boolean;
  attempts: number;
  bestScore: number | null;
  lastScore: number | null;
  updatedAt: string;
}

interface TopicProgressRecord {
  modes: Partial<Record<ModeType, ModeProgressRecord>>;
}

interface ProgressState {
  topics: Record<string, TopicProgressRecord>;
}

interface LessonPointer {
  moduleId: string;
  moduleTitle: string;
  topicId: string;
  topicTitle: string;
  modeType: ModeType;
}

interface TopicProgressSummary {
  completedModes: number;
  totalModes: number;
  percent: number;
  completed: boolean;
  examBestScore: number | null;
}

interface ModuleProgressSummary {
  completedModes: number;
  totalModes: number;
  percent: number;
  completedTopics: number;
  totalTopics: number;
}

interface LearningSummary {
  completedModes: number;
  totalModes: number;
  completedTopics: number;
  totalTopics: number;
  xp: number;
  level: number;
  levelTitle: string;
}

interface ProgressContextValue {
  progress: ProgressState;
  completeMode: (topicId: string, modeType: ModeType) => void;
  submitExamResult: (topicId: string, score: number, totalQuestions: number) => void;
  getModeProgress: (topicId: string, modeType: ModeType) => ModeProgressRecord | undefined;
  getTopicProgress: (topicId: string) => TopicProgressSummary;
  getModuleProgress: (moduleId: string) => ModuleProgressSummary;
  getSummary: () => LearningSummary;
  getNextLesson: () => LessonPointer | null;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function createModeRecord(overrides: Partial<ModeProgressRecord> = {}): ModeProgressRecord {
  return {
    completed: false,
    attempts: 0,
    bestScore: null,
    lastScore: null,
    updatedAt: new Date().toISOString(),
    ...overrides,
  };
}

function sanitizeProgress(raw: unknown): ProgressState {
  if (!raw || typeof raw !== 'object' || !('topics' in raw)) {
    return { topics: {} };
  }

  const topicRecords = (raw as ProgressState).topics ?? {};
  return {
    topics: Object.fromEntries(
      Object.entries(topicRecords).map(([topicId, topicValue]) => {
        const modesRecord = topicValue?.modes ?? {};
        const sanitizedModes = Object.fromEntries(
          Object.entries(modesRecord).map(([modeKey, modeValue]) => [
            modeKey,
            createModeRecord(modeValue ?? {}),
          ]),
        ) as Partial<Record<ModeType, ModeProgressRecord>>;

        return [topicId, { modes: sanitizedModes }];
      }),
    ),
  };
}

function calculateXp(progress: ProgressState) {
  let xp = 0;

  Object.values(progress.topics).forEach((topic) => {
    Object.entries(topic.modes).forEach(([modeType, modeProgress]) => {
      if (!modeProgress?.completed) return;

      if (modeType === 'Exam') {
        xp += 50 + Math.round((modeProgress.bestScore ?? 0) / 2);
      } else {
        xp += 25;
      }
    });
  });

  return xp;
}

function levelTitle(level: number) {
  if (level >= 10) return 'Grandmaster';
  if (level >= 8) return 'Master';
  if (level >= 6) return 'Jonin';
  if (level >= 4) return 'Chunin';
  if (level >= 2) return 'Genin';
  return 'Rookie';
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === 'undefined') return { topics: {} };

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? sanitizeProgress(JSON.parse(stored)) : { topics: {} };
    } catch {
      return { topics: {} };
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeMode = (topicId: string, modeType: ModeType) => {
    setProgress((current) => {
      const existingTopic = current.topics[topicId] ?? { modes: {} };
      const existingMode = existingTopic.modes[modeType] ?? createModeRecord();

      return {
        topics: {
          ...current.topics,
          [topicId]: {
            modes: {
              ...existingTopic.modes,
              [modeType]: createModeRecord({
                ...existingMode,
                completed: true,
                attempts: Math.max(1, existingMode.attempts),
                updatedAt: new Date().toISOString(),
              }),
            },
          },
        },
      };
    });
  };

  const submitExamResult = (topicId: string, score: number, totalQuestions: number) => {
    const percent = Math.round((score / totalQuestions) * 100);

    setProgress((current) => {
      const existingTopic = current.topics[topicId] ?? { modes: {} };
      const existingExam = existingTopic.modes.Exam ?? createModeRecord();
      const bestScore = Math.max(existingExam.bestScore ?? 0, percent);

      return {
        topics: {
          ...current.topics,
          [topicId]: {
            modes: {
              ...existingTopic.modes,
              Exam: createModeRecord({
                ...existingExam,
                completed: bestScore >= PASSING_SCORE,
                attempts: existingExam.attempts + 1,
                lastScore: percent,
                bestScore,
                updatedAt: new Date().toISOString(),
              }),
            },
          },
        },
      };
    });
  };

  const getModeProgress = (topicId: string, modeType: ModeType) => progress.topics[topicId]?.modes[modeType];

  const getTopicProgress = (topicId: string): TopicProgressSummary => {
    const topicProgress = progress.topics[topicId]?.modes ?? {};
    const completedModes = modes.filter((mode) => topicProgress[mode.type]?.completed).length;
    const examBestScore = topicProgress.Exam?.bestScore ?? null;

    return {
      completedModes,
      totalModes: modes.length,
      percent: Math.round((completedModes / modes.length) * 100),
      completed: completedModes === modes.length,
      examBestScore,
    };
  };

  const getModuleProgress = (moduleId: string): ModuleProgressSummary => {
    const moduleTopics = getTopicsForModule(moduleId);
    const totalModes = moduleTopics.length * modes.length;
    const completedModes = moduleTopics.reduce((sum, topic) => sum + getTopicProgress(topic.id).completedModes, 0);
    const completedTopics = moduleTopics.filter((topic) => getTopicProgress(topic.id).completed).length;

    return {
      completedModes,
      totalModes,
      percent: totalModes === 0 ? 0 : Math.round((completedModes / totalModes) * 100),
      completedTopics,
      totalTopics: moduleTopics.length,
    };
  };

  const getSummary = (): LearningSummary => {
    const orderedTopics = getOrderedTopicEntries();
    const totalTopics = orderedTopics.length;
    const totalModes = totalTopics * modes.length;
    const completedModes = orderedTopics.reduce((sum, entry) => sum + getTopicProgress(entry.topic.id).completedModes, 0);
    const completedTopics = orderedTopics.filter((entry) => getTopicProgress(entry.topic.id).completed).length;
    const xp = calculateXp(progress);
    const level = Math.max(1, Math.floor(xp / 150) + 1);

    return {
      completedModes,
      totalModes,
      completedTopics,
      totalTopics,
      xp,
      level,
      levelTitle: levelTitle(level),
    };
  };

  const getNextLesson = (): LessonPointer | null => {
    const orderedTopics = getOrderedTopicEntries();

    for (const entry of orderedTopics) {
      for (const mode of modes) {
        const modeProgress = getModeProgress(entry.topic.id, mode.type);
        if (!modeProgress?.completed) {
          return {
            moduleId: entry.moduleId,
            moduleTitle: entry.moduleTitle,
            topicId: entry.topic.id,
            topicTitle: entry.topic.title,
            modeType: mode.type,
          };
        }
      }
    }

    if (orderedTopics[0]) {
      return {
        moduleId: orderedTopics[0].moduleId,
        moduleTitle: orderedTopics[0].moduleTitle,
        topicId: orderedTopics[0].topic.id,
        topicTitle: orderedTopics[0].topic.title,
        modeType: 'Concept',
      };
    }

    return null;
  };

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      completeMode,
      submitExamResult,
      getModeProgress,
      getTopicProgress,
      getModuleProgress,
      getSummary,
      getNextLesson,
    }),
    [progress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}

export function getTopicSequenceForModule(moduleId: string): Topic[] {
  return getTopicsForModule(moduleId);
}

export { PASSING_SCORE };
