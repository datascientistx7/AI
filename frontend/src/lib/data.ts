import { Module, Topic, Mode } from './types';

export const modules: Module[] = [
  { id: 'ml', title: 'Machine Learning', description: 'Master algorithms and prediction models', progress: 45, icon: 'Brain', color: '#7aa2f7' },
  { id: 'dl', title: 'Deep Learning', description: 'Delve into neural networks', progress: 10, icon: 'Network', color: '#bb9af7' },
  { id: 'sql', title: 'SQL', description: 'Data querying and manipulation', progress: 80, icon: 'Database', color: '#9ece6a' },
  { id: 'genai', title: 'Generative AI', description: 'Create art and text with AI', progress: 20, icon: 'Sparkles', color: '#f7768e' },
];

export const topics: Record<string, Topic[]> = {
  ml: [
    { id: 't1', moduleId: 'ml', title: 'Linear Regression', completed: true },
    { id: 't2', moduleId: 'ml', title: 'Classification', completed: false },
    { id: 't3', moduleId: 'ml', title: 'Overfitting', completed: false },
    { id: 't4', moduleId: 'ml', title: 'Decision Trees', completed: false },
  ],
  dl: [
    { id: 't5', moduleId: 'dl', title: 'Perceptrons', completed: false },
    { id: 't6', moduleId: 'dl', title: 'CNNs', completed: false },
  ],
  genai: [
    { id: 't7', moduleId: 'genai', title: 'Intro to Large Language Models', completed: true },
    { id: 't8', moduleId: 'genai', title: 'Prompt Engineering', completed: false },
    { id: 't9', moduleId: 'genai', title: 'Retrieval Augmented Generation (RAG)', completed: false },
    { id: 't10', moduleId: 'genai', title: 'Diffusion Models', completed: false },
  ],
  sql: [
    { id: 't11', moduleId: 'sql', title: 'SELECT statements', completed: false },
    { id: 't12', moduleId: 'sql', title: 'Table JOINs', completed: false }
  ]
};

export const modes: Mode[] = [
  { id: 'm1', type: 'Concept', title: 'Understand the Core', character: 'naruto', description: 'Learn the fundamentals with short explanations and visuals.', completed: false, color: 'text-characters-naruto' },
  { id: 'm2', type: 'Lab', title: 'Experiment & Observe', character: 'goko', description: 'Interact with data and see immediate results.', completed: false, color: 'text-characters-goko' },
  { id: 'm3', type: 'Thinking', title: 'Analyze Scenarios', character: 'toji', description: 'Step-by-step decision making and critical thought.', completed: false, color: 'text-characters-toji' },
  { id: 'm4', type: 'Design', title: 'Architect the Flow', character: 'luffy', description: 'Build systems and connect the concepts.', completed: false, color: 'text-characters-luffy' },
  { id: 'm5', type: 'Exam', title: 'Test Your Mastery', character: 'gojo', description: 'Prove your inner domain. Structured challenges.', completed: false, color: 'text-characters-gojo' },
];
