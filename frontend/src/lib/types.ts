export type ModeType = 'Concept' | 'Lab' | 'Thinking' | 'Design' | 'Exam';

export interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon: string;
  color: string;
}

export interface Topic {
  id: string;
  moduleId: string;
  title: string;
  completed: boolean;
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
