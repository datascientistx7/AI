export type ModeType = 'Concept' | 'Lab' | 'Thinking' | 'Design' | 'Exam';

export interface Topic {
  id: string;
  title: string;
  completed: boolean;
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
