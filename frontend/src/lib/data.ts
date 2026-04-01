import { Module, Topic, Mode } from './types';

export const modules: Module[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Master algorithms and prediction models',
    progress: 45,
    icon: 'Brain',
    color: '#7aa2f7',
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    description: 'Delve into neural networks and modern AI architectures',
    progress: 10,
    icon: 'Network',
    color: '#bb9af7',
    subModules: [
      {
        id: 'dl_sm1',
        title: 'Module 1 – What is Deep Learning?',
        topics: [
          { id: 'dl_t1', title: 'Introduction to Deep Learning', completed: false },
          { id: 'dl_t2', title: 'Deep Learning vs Machine Learning', completed: false },
        ],
      },
      {
        id: 'dl_sm2',
        title: 'Module 2 – Neural Network Basics',
        topics: [
          { id: 'dl_t3', title: 'Perceptrons & Neurons', completed: false },
          { id: 'dl_t4', title: 'Activation Functions', completed: false },
          { id: 'dl_t5', title: 'Forward Propagation', completed: false },
          { id: 'dl_t6', title: 'Backpropagation', completed: false },
          { id: 'dl_t7', title: 'Loss Functions', completed: false },
        ],
      },
      {
        id: 'dl_sm3',
        title: 'Module 3 – Deep Learning Hyperparameters (ANN)',
        topics: [
          { id: 'dl_t8', title: 'Learning Rate & Optimizers', completed: false },
          { id: 'dl_t9', title: 'Regularization (Dropout & Batch Norm)', completed: false },
        ],
      },
      {
        id: 'dl_sm4',
        title: 'Module 4 – Convolutional Neural Networks (CNN)',
        topics: [
          { id: 'dl_t10', title: 'Convolution & Pooling Layers', completed: false },
          { id: 'dl_t11', title: 'CNN Architectures (VGG, ResNet)', completed: false },
        ],
      },
      {
        id: 'dl_sm5',
        title: 'Module 5 – Recurrent Neural Networks (RNN)',
        topics: [
          { id: 'dl_t12', title: 'Sequence Modeling & RNNs', completed: false },
          { id: 'dl_t13', title: 'LSTMs & GRUs', completed: false },
          { id: 'dl_t14', title: 'Vanishing Gradient Problem', completed: false },
          { id: 'dl_t15', title: 'Encoder-Decoder Architecture', completed: false },
        ],
      },
      {
        id: 'dl_sm6',
        title: 'Module 6 – Computer Vision (CV)',
        topics: [
          { id: 'dl_t16', title: 'Object Detection (YOLO, R-CNN)', completed: false },
        ],
      },
    ],
  },
  {
    id: 'genai',
    title: 'GEN AI',
    description: 'Create art and text with cutting-edge generative AI',
    progress: 20,
    icon: 'Sparkles',
    color: '#f7768e',
    subModules: [
      {
        id: 'genai_sm1',
        title: 'Foundations',
        topics: [
          { id: 'genai_t1', title: 'Introduction to Generative AI', completed: false },
          { id: 'genai_t2', title: 'Discriminative vs Generative Models', completed: false },
        ],
      },
      {
        id: 'genai_sm2',
        title: 'LLM Basics',
        topics: [
          { id: 'genai_t3', title: 'Large Language Models (LLMs)', completed: false },
          { id: 'genai_t4', title: 'Tokenization', completed: false },
          { id: 'genai_t5', title: 'Transformer Architecture', completed: false },
          { id: 'genai_t6', title: 'Attention Mechanism', completed: false },
        ],
      },
      {
        id: 'genai_sm3',
        title: 'Prompt Engineering',
        topics: [
          { id: 'genai_t7', title: 'Prompt Engineering Basics', completed: false },
          { id: 'genai_t8', title: 'Prompt Patterns & Chain of Thought', completed: false },
        ],
      },
      {
        id: 'genai_sm4',
        title: 'LLM Parameters',
        topics: [
          { id: 'genai_t9', title: 'Temperature & Sampling', completed: false },
          { id: 'genai_t10', title: 'Context Window & Token Limits', completed: false },
        ],
      },
      {
        id: 'genai_sm5',
        title: 'Embeddings',
        topics: [
          { id: 'genai_t11', title: 'Embeddings & Semantic Search', completed: false },
          { id: 'genai_t12', title: 'Vector Similarity', completed: false },
        ],
      },
      {
        id: 'genai_sm6',
        title: 'Retrieval Systems',
        topics: [
          { id: 'genai_t13', title: 'Retrieval Augmented Generation (RAG)', completed: false },
        ],
      },
      {
        id: 'genai_sm7',
        title: 'Tools & Frameworks',
        topics: [
          { id: 'genai_t14', title: 'LangChain Overview', completed: false },
          { id: 'genai_t15', title: 'Vector Databases (Pinecone, Weaviate)', completed: false },
        ],
      },
      {
        id: 'genai_sm8',
        title: 'AI Systems',
        topics: [
          { id: 'genai_t16', title: 'AI Chatbots & Conversation Design', completed: false },
          { id: 'genai_t17', title: 'AI Agents & Tool Use', completed: false },
        ],
      },
    ],
  },
  {
    id: 'sql',
    title: 'SQL',
    description: 'Query, join, optimize, and reason about relational data systems',
    progress: 15,
    icon: 'Database',
    color: '#9ece6a',
  },
  {
    id: 'agentic',
    title: 'Agentic AI',
    description: 'Build tool-using AI systems that plan, act, recover, and stay safe',
    progress: 8,
    icon: 'Bot',
    color: '#e0af68',
  },
];

// Flat topics for modules that don't use subModules.
export const topics: Record<string, Topic[]> = {
  ml: [
    { id: 'ml_t1', title: 'Linear Regression', completed: true },
    { id: 'ml_t2', title: 'Classification', completed: false },
    { id: 'ml_t3', title: 'Overfitting & Regularization', completed: false },
    { id: 'ml_t4', title: 'Decision Trees & Random Forests', completed: false },
    { id: 'ml_t5', title: 'Support Vector Machines (SVM)', completed: false },
    { id: 'ml_t6', title: 'K-Means Clustering', completed: false },
    { id: 'ml_t7', title: 'Model Evaluation & Metrics', completed: false },
  ],
  sql: [
    { id: 'sql_t1', title: 'SELECT, WHERE & ORDER BY', completed: false },
    { id: 'sql_t2', title: 'JOINs & Relational Thinking', completed: false },
    { id: 'sql_t3', title: 'Aggregation, GROUP BY & HAVING', completed: false },
    { id: 'sql_t4', title: 'Subqueries & CTEs', completed: false },
    { id: 'sql_t5', title: 'Indexes & Query Optimization', completed: false },
    { id: 'sql_t6', title: 'Transactions, ACID & Concurrency', completed: false },
  ],
  agentic: [
    { id: 'agentic_t1', title: 'What Is an AI Agent?', completed: false },
    { id: 'agentic_t2', title: 'Tool Use & Function Calling', completed: false },
    { id: 'agentic_t3', title: 'Planning, ReAct & Control Loops', completed: false },
    { id: 'agentic_t4', title: 'Memory, State & Context Management', completed: false },
    { id: 'agentic_t5', title: 'Multi-Agent Systems', completed: false },
    { id: 'agentic_t6', title: 'Evaluation, Guardrails & Reliability', completed: false },
  ],
};

// Helper: get a topic by ID from any module (handles subModules too)
export function getTopicById(topicId: string): Topic | undefined {
  // Search flat topics
  for (const moduleTopics of Object.values(topics)) {
    const found = moduleTopics.find((t) => t.id === topicId);
    if (found) return found;
  }
  // Search subModules
  for (const mod of modules) {
    if (mod.subModules) {
      for (const sm of mod.subModules) {
        const found = sm.topics.find((t) => t.id === topicId);
        if (found) return found;
      }
    }
  }
  return undefined;
}

export function getTopicsForModule(moduleId: string): Topic[] {
  const moduleTopics = topics[moduleId];
  if (moduleTopics) return moduleTopics;

  const moduleData = modules.find((mod) => mod.id === moduleId);
  if (!moduleData?.subModules) return [];

  return moduleData.subModules.flatMap((subModule) => subModule.topics);
}

export function getOrderedTopicEntries(): Array<{ moduleId: string; moduleTitle: string; topic: Topic }> {
  return modules.flatMap((module) =>
    getTopicsForModule(module.id).map((topic) => ({
      moduleId: module.id,
      moduleTitle: module.title,
      topic,
    })),
  );
}

export const modes: Mode[] = [
  { id: 'm1', type: 'Concept', title: 'Understand the Core', character: 'naruto', description: 'Learn the fundamentals with short explanations and visuals.', completed: false, color: 'text-characters-naruto' },
  { id: 'm2', type: 'Lab', title: 'Experiment & Observe', character: 'goko', description: 'Interact with data and see immediate results.', completed: false, color: 'text-characters-goko' },
  { id: 'm3', type: 'Thinking', title: 'Analyze Scenarios', character: 'toji', description: 'Step-by-step decision making and critical thought.', completed: false, color: 'text-characters-toji' },
  { id: 'm4', type: 'Design', title: 'Architect the Flow', character: 'luffy', description: 'Build systems and connect the concepts.', completed: false, color: 'text-characters-luffy' },
  { id: 'm5', type: 'Exam', title: 'Test Your Mastery', character: 'gojo', description: 'Prove your inner domain. Structured challenges.', completed: false, color: 'text-characters-gojo' },
];
