import { Module, Topic, Mode } from './types';

export const modules: Module[] = [
  { id: 'ml', title: 'Machine Learning', description: 'Master algorithms and prediction models', progress: 45, icon: 'Brain', color: '#7aa2f7' },
  { 
    id: 'dl', 
    title: 'Deep Learning', 
    description: 'Delve into neural networks', 
    progress: 10, 
    icon: 'Network', 
    color: '#bb9af7',
    subModules: [
      { id: 'sm1', title: 'Module 1 - What is Deep Learning', topics: [{ id: 't1_1', title: '1. Introduction of Deep L...', completed: false }] },
      { id: 'sm2', title: 'Module 2 - Neural Network basics', topics: Array(5).fill({ completed: false }).map((_, i) => ({ id: `t2_${i}`, title: `Topic ${i + 1}`, completed: false })) },
      { id: 'sm3', title: 'Module 3 - Deep Learning Hyperparameters (ANN)', topics: Array(2).fill({ completed: false }).map((_, i) => ({ id: `t3_${i}`, title: `Topic ${i + 1}`, completed: false })) },
      { id: 'sm4', title: 'Module 4 - Convolutional Neural Network (CNN)', topics: Array(2).fill({ completed: false }).map((_, i) => ({ id: `t4_${i}`, title: `Topic ${i + 1}`, completed: false })) },
      { id: 'sm5', title: 'Module 5 - Recurrent Neural Network (RNN)', topics: Array(4).fill({ completed: false }).map((_, i) => ({ id: `t5_${i}`, title: `Topic ${i + 1}`, completed: false })) },
      { id: 'sm6', title: 'Module 6 - Computer Vision (CV)', topics: [{ id: 't6_1', title: 'Topic 1', completed: false }] },
    ]
  },
  { id: 'sql', title: 'SQL', description: 'Data querying and manipulation', progress: 80, icon: 'Database', color: '#9ece6a' },
  { 
    id: 'genai', 
    title: 'GEN AI', 
    description: 'Create art and text with AI', 
    progress: 20, 
    icon: 'Sparkles', 
    color: '#f7768e',
    subModules: [
      { id: 'gsm1', title: 'Foundations', topics: [{ id: 'gt1', title: '1. Introduction to Generative AI', completed: false }, { id: 'gt2', title: '2. Discriminative vs Generative Models', completed: false }] },
      { id: 'gsm2', title: 'LLM Basics', topics: [{ id: 'gt3', title: '3. Large Language Models (LLMs)', completed: false }, { id: 'gt4', title: '4. Tokenization', completed: false }, { id: 'gt5', title: '5. Transformer Architecture', completed: false }, { id: 'gt6', title: '6. Attention Mechanism', completed: false }] },
      { id: 'gsm3', title: 'Prompt Engineering', topics: [{ id: 'gt7', title: '7. Prompt Engineering Basics', completed: false }, { id: 'gt8', title: '8. Prompt Patterns', completed: false }] },
      { id: 'gsm4', title: 'LLM Parameters', topics: [{ id: 'gt9', title: '9. Temperature', completed: false }, { id: 'gt10', title: '10. Context Window', completed: false }] },
      { id: 'gsm5', title: 'Embeddings', topics: [{ id: 'gt11', title: '11. Embeddings', completed: false }, { id: 'gt12', title: '12. Vector Similarity', completed: false }] },
      { id: 'gsm6', title: 'Retrieval Systems', topics: [{ id: 'gt13', title: '13. Retrieval Augmented Generation (RAG)', completed: false }] },
      { id: 'gsm7', title: 'Tools & Frameworks', topics: [{ id: 'gt14', title: '14. LangChain Overview', completed: false }, { id: 'gt15', title: '15. Vector Databases', completed: false }] },
      { id: 'gsm8', title: 'AI Systems', topics: [{ id: 'gt16', title: '16. AI Chatbots', completed: false }, { id: 'gt17', title: '17. AI Agents', completed: false }] },
    ]
  },
];

export const topics: Record<string, Topic[]> = {
  ml: [
    { id: 't1', title: 'Linear Regression', completed: true },
    { id: 't2', title: 'Classification', completed: false },
    { id: 't3', title: 'Overfitting', completed: false },
    { id: 't4', title: 'Decision Trees', completed: false },
  ],
  sql: [
    { id: 't11', title: 'SELECT statements', completed: false },
    { id: 't12', title: 'Table JOINs', completed: false }
  ]
};



export const modes: Mode[] = [
  { id: 'm1', type: 'Concept', title: 'Understand the Core', character: 'naruto', description: 'Learn the fundamentals with short explanations and visuals.', completed: false, color: 'text-characters-naruto' },
  { id: 'm2', type: 'Lab', title: 'Experiment & Observe', character: 'goko', description: 'Interact with data and see immediate results.', completed: false, color: 'text-characters-goko' },
  { id: 'm3', type: 'Thinking', title: 'Analyze Scenarios', character: 'toji', description: 'Step-by-step decision making and critical thought.', completed: false, color: 'text-characters-toji' },
  { id: 'm4', type: 'Design', title: 'Architect the Flow', character: 'luffy', description: 'Build systems and connect the concepts.', completed: false, color: 'text-characters-luffy' },
  { id: 'm5', type: 'Exam', title: 'Test Your Mastery', character: 'gojo', description: 'Prove your inner domain. Structured challenges.', completed: false, color: 'text-characters-gojo' },
];
