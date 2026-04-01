import { TopicModeContent } from './types';
import { mlContent } from './content-ml';
import { dlContent } from './content-dl';
import { genaiContent } from './content-genai';
import { sqlContent } from './content-sql';
import { agenticContent } from './content-agentic';

// Master content map — keyed by topic ID across ALL modules
export const allContent: Record<string, TopicModeContent> = {
  ...mlContent,
  ...dlContent,
  ...genaiContent,
  ...sqlContent,
  ...agenticContent,
};

export { mlContent, dlContent, genaiContent, sqlContent, agenticContent };
