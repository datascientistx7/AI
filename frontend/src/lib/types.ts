export type ModeType = 'Concept' | 'Lab' | 'Thinking' | 'Design' | 'Exam';

export interface Topic {
  id: string;
  title: string;
  completed: boolean;
}

export interface TopicConceptContent {
  explanation: string;
  analogy: string;
  graphTitle: string;
}

export interface TopicLabContent {
  instruction: string;
  label: string;
}

export interface TopicThinkingContent {
  scenario: string;
  options: string[];
  correctIndex: number;
}

export interface TopicExamContent {
  question: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface TopicModeContent {
  title: string;
  concept: TopicConceptContent;
  lab: TopicLabContent;
  thinking: TopicThinkingContent;
  design: string[];
  exam: TopicExamContent;
  quiz?: QuizQuestion[];
}

export interface SubModule {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon: string;
  color: string;
  subModules?: SubModule[];
}


export interface Mode {
  id: string;
  type: ModeType;
  title: string;
  character: string;
  description: string;
  completed: boolean;
  color: string;
}
