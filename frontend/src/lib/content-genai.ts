import { TopicModeContent } from './types';

export const genaiContent: Record<string, TopicModeContent> = {
  genai_t1: {
    title: 'Introduction to Generative AI',
    concept: {
      explanation: 'Generative AI refers to models that can generate new content — text, images, audio, code — that did not exist before. Unlike discriminative models that classify existing inputs, generative models learn the underlying data distribution and sample from it to produce novel outputs.',
      analogy: 'A discriminative model is like a judge rating paintings. A generative model is like an artist who can paint entirely new paintings in any style, on demand.',
      graphTitle: 'Generative vs Discriminative Output',
    },
    lab: {
      instruction: 'Adjust the "creativity" slider (temperature). Low = repetitive, predictable outputs. High = wild, diverse, sometimes incoherent outputs.',
      label: 'Generation Temperature',
    },
    thinking: {
      scenario: 'You need a system that can write personalized product descriptions for 10,000 SKUs automatically. Is Generative AI appropriate here?',
      options: [
        'No — generative AI only works for creative art tasks.',
        'Yes — large language models excel at generating varied, contextual text at scale from structured prompts.',
        'Yes, but only if you fine-tune a model from scratch on your product catalog.',
      ],
      correctIndex: 1,
    },
    design: ['Define Task Goal', 'Choose Generative Model Type (LLM / Diffusion)', 'Design Prompt / Input Conditioning', 'Sample Output', 'Post-process & Filter'],
    exam: {
      question: 'Define Generative AI and explain the key distinction between generative and discriminative models with examples of each. (5 Marks)',
    },
  },
  genai_t2: {
    title: 'Discriminative vs Generative Models',
    concept: {
      explanation: 'Discriminative models learn P(Y|X) — given an input, what is the label? Generative models learn P(X) or the joint P(X,Y) — how is data actually distributed? This is why generative models can produce new samples while discriminative ones can only classify existing ones.',
      analogy: 'Discriminative: A sommelier who tastes wine and guesses the year. Generative: A winemaker who crafts an entirely new wine that tastes like it came from that year.',
      graphTitle: 'P(Y|X) vs P(X,Y) Modeling',
    },
    lab: {
      instruction: 'Slide between "Classify" and "Generate" mode. In classify mode the model outputs a label. In generate mode it samples from the learned distribution.',
      label: 'Mode: 0=Discriminative → 100=Generative',
    },
    thinking: {
      scenario: 'Your team needs to both detect fake emails (spam classification) AND generate realistic synthetic training emails. Which model type(s) do you need?',
      options: [
        'Only a discriminative model — it can do both tasks.',
        'Both — a discriminative model to classify spam, and a generative model (LLM) to synthesize training examples.',
        'Only a generative model — it encompasses discriminative capabilities.',
      ],
      correctIndex: 1,
    },
    design: ['Training Data P(X, Y)', 'Discriminative: Learn decision boundary P(Y|X)', 'Generative: Learn data distribution P(X)', 'Discriminative → Classification', 'Generative → New Sample Creation'],
    exam: {
      question: 'Mathematically distinguish between discriminative and generative models using probability notation. Give two real-world examples of each. (5 Marks)',
    },
  },
  genai_t3: {
    title: 'Large Language Models (LLMs)',
    concept: {
      explanation: 'LLMs are massive neural networks (billions of parameters) trained on vast text corpora to predict the next token given a sequence. They encode world knowledge implicitly in weights. GPT, LLaMA, Gemini and Claude are all autoregressive LLMs using the Transformer architecture.',
      analogy: 'Like autocomplete on your smartphone, but it has read the entire internet and understands the nuanced grammatical and factual context of your entire conversation history.',
      graphTitle: 'Autoregressive Token Prediction',
    },
    lab: {
      instruction: 'Increase the number of Transformer decoder layers. Watch how deeper models capture richer contextual relationships across the token sequence.',
      label: 'Transformer Layer Depth',
    },
    thinking: {
      scenario: 'Your LLM writes beautifully but confidently invents historical facts that never happened. What is this phenomenon called and why does it occur?',
      options: [
        'The model lacks data syntax processing capability.',
        'Hallucination — an inherent flaw of probabilistic next-token generation without a truth ground state.',
        'You need to increase the dropout rate during inference.',
      ],
      correctIndex: 1,
    },
    design: ['Tokenize Input', 'Positional Embeddings', 'N × Transformer Decoder Blocks', 'Language Model Head', 'Sample Next Token → Autoregressive Output'],
    exam: {
      question: 'What is Self-Attention in the Transformer and why was it a breakthrough over RNNs for language modeling? (10 Marks)',
    },
  },
  genai_t4: {
    title: 'Tokenization',
    concept: {
      explanation: 'Tokenization splits raw text into sub-word tokens (e.g. BPE — Byte Pair Encoding). "unhappiness" → ["un", "happiness"]. Each token maps to a vocabulary ID. LLMs never see raw characters or words — they see integer sequences. Token count determines context window usage.',
      analogy: 'Like how LEGO bricks represent any structure — not whole furniture pieces but universal sub-units that can be combined infinitely. Tokens are the LEGO bricks of language.',
      graphTitle: 'BPE Subword Tokenization',
    },
    lab: {
      instruction: 'Type text in the box and slide to watch how BPE tokenization splits the words into progressively smaller subword units.',
      label: 'Tokenization Granularity',
    },
    thinking: {
      scenario: '"ChatGPT" costs $0.002 per 1,000 tokens. Your 5,000-word document is submitted as a single prompt. Roughly how many tokens is this?',
      options: [
        'Approximately 5,000 tokens — one word equals one token always.',
        'Approximately 6,500–7,500 tokens — words average ~1.3 tokens due to punctuation and subword splitting.',
        'Approximately 25,000 tokens — each character is one token.',
      ],
      correctIndex: 1,
    },
    design: ['Raw Text String', 'BPE Tokenizer → Token IDs', 'Embedding Lookup Table', 'Token Embedding Vectors', 'Input to Transformer Layers'],
    exam: {
      question: 'Explain Byte Pair Encoding (BPE) tokenization. Why is subword tokenization preferred over word-level or character-level approaches for LLMs? (5 Marks)',
    },
  },
  genai_t5: {
    title: 'Transformer Architecture',
    concept: {
      explanation: 'The Transformer (Vaswani et al., 2017) replaced RNNs with Self-Attention — processing all tokens in parallel rather than sequentially. It consists of: Multi-Head Self-Attention, Feed-Forward layers, Residual Connections, and Layer Normalization. This enables massive parallelism and long-range dependency capture.',
      analogy: 'An RNN reads a book word-by-word like a human. A Transformer reads all words simultaneously and lets every word "attend" to every other word — like a room full of experts all cross-referencing each other at once.',
      graphTitle: 'Multi-Head Attention Architecture',
    },
    lab: {
      instruction: 'Increase the number of attention heads. Each head learns to attend to different types of relationships (syntax, coreference, positional).',
      label: 'Number of Attention Heads',
    },
    thinking: {
      scenario: 'An RNN takes 10 seconds to process a 1,000-word document. A Transformer takes 0.5 seconds. Why is it so much faster?',
      options: [
        'Transformers use smaller embedding dimensions.',
        'Transformers process all tokens in parallel (no sequential dependency), enabling full GPU utilization.',
        'Transformers skip punctuation tokens automatically.',
      ],
      correctIndex: 1,
    },
    design: ['Input Embeddings + Positional Encoding', 'Multi-Head Self-Attention Block', 'Add & Layer Norm', 'Feed-Forward Network', 'Add & Layer Norm → Output'],
    exam: {
      question: 'Describe the full Transformer encoder block. Why do Residual Connections and Layer Normalization matter for training stability? (10 Marks)',
    },
  },
  genai_t6: {
    title: 'Attention Mechanism',
    concept: {
      explanation: 'Attention computes a weighted sum of Value vectors, where weights come from the compatibility (dot product) of a Query with Keys. Scaled Dot-Product Attention: Attention(Q,K,V) = softmax(QKᵀ/√dₖ)·V. Multi-Head Attention runs this in parallel across H subspaces.',
      analogy: 'Like a library search — your Query is the book you want, Keys are book titles, Values are the actual book contents. Attention scores say which books are most relevant to pull from the shelves.',
      graphTitle: 'Q-K-V Attention Score Heatmap',
    },
    lab: {
      instruction: 'Adjust the query vector. Watch how attention scores (highlighted tokens) shift — some tokens become more or less "relevant" to the query.',
      label: 'Query Focus Strength',
    },
    thinking: {
      scenario: 'The model struggles to resolve pronouns in very long documents ("the bank... it..."). What attention modification helps?',
      options: [
        'Increase the vocabulary size to include pronoun-specific tokens.',
        'Use larger context windows and sparse attention patterns (e.g. Longformer) to handle long-range coreference.',
        'Switch from dot-product attention to additive attention exclusively.',
      ],
      correctIndex: 1,
    },
    design: ['Input Tokens → Q, K, V Matrices', 'Scaled Dot Product: QKᵀ/√dₖ', 'Softmax → Attention Weights', 'Weighted Sum of V', 'Concat Heads → Linear Projection'],
    exam: {
      question: 'Derive the Scaled Dot-Product Attention formula. Why is the √dₖ scaling factor necessary? (10 Marks)',
    },
  },
  genai_t7: {
    title: 'Prompt Engineering Basics',
    concept: {
      explanation: 'Prompt Engineering is the art of structuring inputs to an LLM to extract accurate, formatted outputs without retraining. Key techniques: Zero-Shot (direct question), Few-Shot (examples in prompt), System Prompts (role/persona), and structured output constraints (JSON schemas).',
      analogy: 'Like giving very literal instructions to a brilliant but naive intern who will do EXACTLY as told — no more, no less. The quality of your instructions directly determines output quality.',
      graphTitle: 'Prompt → Context → Output Flow',
    },
    lab: {
      instruction: 'Adjust the temperature slider to shift from deterministic structured outputs (low) to creative chaotic responses (high).',
      label: 'Model Temperature (Creativity)',
    },
    thinking: {
      scenario: 'You need an LLM to reliably extract JSON from customer emails but it sometimes adds "Here is your JSON:" conversational text. How do you fix this without retraining?',
      options: [
        'Retrain the entire 70B parameter model on JSON-formatted emails exclusively.',
        'Use Few-Shot prompting with 3 exact examples + a strict System Prompt: "Output ONLY raw JSON. No conversational text."',
        'Convert all emails to binary before processing.',
      ],
      correctIndex: 1,
    },
    design: ['Define Role/Persona in System Prompt', 'Inject Context & Constraints', 'Provide Few-Shot Input/Output Examples', 'State Exact Output Format', 'Validate & Post-process Response'],
    exam: {
      question: 'Explain Zero-Shot vs Few-Shot prompting with concrete examples. When would you use each? (5 Marks)',
    },
  },
  genai_t8: {
    title: 'Prompt Patterns & Chain of Thought',
    concept: {
      explanation: 'Chain of Thought (CoT) prompting instructs the LLM to reason step-by-step before answering ("Let\'s think step by step"). This dramatically improves accuracy on arithmetic, logic, and multi-step reasoning. Tree of Thought extends this by exploring multiple reasoning branches.',
      analogy: 'Like a student who writes all their working on scratch paper before writing the final answer. The scratch-paper reasoning forces logical consistency and catches arithmetic errors.',
      graphTitle: 'CoT Reasoning Chain',
    },
    lab: {
      instruction: 'Toggle CoT mode on/off. In math problems, CoT mode shows step-by-step reasoning and achieves higher accuracy vs direct answer mode.',
      label: 'Chain of Thought Depth (Steps)',
    },
    thinking: {
      scenario: 'Your LLM gives wrong answers to multi-step math questions when asked directly, but correct answers when told "think step by step." Why?',
      options: [
        'The model has more compute allocated when generating longer responses.',
        'Forcing intermediate reasoning steps constrains the output to logically consistent paths, reducing the probability of directly jumping to wrong tokens.',
        'CoT disables the temperature parameter during math generation.',
      ],
      correctIndex: 1,
    },
    design: ['User Question', 'Add CoT Trigger: "Think step by step"', 'Model Generates Reasoning Steps', 'Model Derives Final Answer from Steps', 'Extract Structured Final Answer'],
    exam: {
      question: 'Explain Chain of Thought prompting. Why does adding "Let\'s think step by step" improve mathematical and logical reasoning in LLMs? (5 Marks)',
    },
  },
  genai_t9: {
    title: 'Temperature & Sampling',
    concept: {
      explanation: 'Temperature (T) scales the logit distribution before Softmax. T < 1 = sharper, more deterministic (high-confidence tokens dominate). T > 1 = flatter, more uniform (random, creative). Top-K sampling limits choices to the K most likely tokens. Top-P (nucleus) sampling uses the smallest set of tokens covering cumulative probability P.',
      analogy: 'Temperature is like a radio dial. Turn it low: the signal is crystal clear and predictable. Turn it high: the frequency drifts wildly, picking up unexpected stations.',
      graphTitle: 'Temperature Logit Sharpening/Flattening',
    },
    lab: {
      instruction: 'Adjust the temperature. Watch how the token probability distribution flattens (high T) or sharpens (low T) across the vocabulary.',
      label: 'Temperature (0.1 = Deterministic → 2.0 = Chaotic)',
    },
    thinking: {
      scenario: 'You are generating a legal contract that must be factually precise. You are generating creative poetry. Which temperature should you use for each?',
      options: [
        'High temperature for both — more tokens means better output.',
        'Low T (≈0.1) for the legal contract; High T (≈0.8–1.2) for poetry.',
        'Temperature does not affect factual accuracy in LLMs.',
      ],
      correctIndex: 1,
    },
    design: ['Raw Logit Scores', 'Divide by Temperature T', 'Apply Softmax → Probability Distribution', 'Top-K or Top-P Filter', 'Sample Token from Filtered Distribution'],
    exam: {
      question: 'Explain the mathematical effect of temperature on the Softmax output distribution. Compare Top-K and Top-P sampling strategies. (5 Marks)',
    },
  },
  genai_t10: {
    title: 'Context Window & Token Limits',
    concept: {
      explanation: 'The context window defines the maximum number of tokens an LLM can "see" at once — both input and output together. Information outside the window is completely invisible. GPT-4 Turbo: 128K tokens, Gemini 1.5 Pro: 1M tokens. Chunking and summarization are strategies to handle documents exceeding the limit.',
      analogy: 'The context window is the LLM\'s short-term memory desk. It can only work with what fits on the desk. Any document longer than the desk falls to the floor and is forgotten entirely.',
      graphTitle: 'Context Window Token Budget',
    },
    lab: {
      instruction: 'Slide to fill the context window. When the token budget exceeds the limit, early tokens get truncated — watch the model lose track of early context.',
      label: 'Token Count (Input + Output)',
    },
    thinking: {
      scenario: 'You submit a 200-page PDF (≈150,000 tokens) to a model with a 128K context window. The last section gets summarized incorrectly. Why?',
      options: [
        'PDFs contain special encoding that confuses tokenization.',
        'The document exceeds the context window — early pages are truncated or never seen by the model.',
        'The model\'s temperature is set too high for long documents.',
      ],
      correctIndex: 1,
    },
    design: ['Full Document', 'Chunk into Context-Sized Segments', 'Process Each Chunk', 'Hierarchical Summarization', 'Final Coherent Output'],
    exam: {
      question: 'What is an LLM context window? Describe two strategies for handling documents that exceed the context window limit. (5 Marks)',
    },
  },
  genai_t11: {
    title: 'Embeddings & Semantic Search',
    concept: {
      explanation: 'Embeddings are dense vector representations of text in high-dimensional space (e.g. 1536 dimensions). Semantically similar texts cluster together — "king" and "queen" are close, "king" and "database" are far. Embedding models (text-embedding-3, sentence-transformers) power semantic search, recommendation, and RAG.',
      analogy: 'Like plotting cities on a map — geographically similar cities appear close together. Embeddings create a "meaning map" where semantically similar sentences appear close in vector space.',
      graphTitle: 'Embedding Semantic Space (2D PCA)',
    },
    lab: {
      instruction: 'Adjust the query embedding vector. Watch which documents cluster nearest to it in the 2D semantic space — those are the top semantic search results.',
      label: 'Semantic Query Shift',
    },
    thinking: {
      scenario: 'A keyword search for "car" misses documents about "automobile" and "vehicle". How would semantic search fix this?',
      options: [
        'Add synonyms manually to the search index.',
        'Semantic search uses embeddings — "car", "automobile", and "vehicle" have similar vectors and naturally return together without explicit synonyms.',
        'Use a larger vocabulary to include all word variants.',
      ],
      correctIndex: 1,
    },
    design: ['Input Text', 'Embedding Model (e.g. text-embedding-3)', '1536-dim Vector', 'Store in Vector Database', 'Query → Embedding → Nearest Neighbor Search'],
    exam: {
      question: 'Explain what text embeddings are and how cosine similarity is used to measure semantic relatedness between two pieces of text. (5 Marks)',
    },
  },
  genai_t12: {
    title: 'Vector Similarity',
    concept: {
      explanation: 'Vector similarity measures how "close" two embedding vectors are. Cosine Similarity measures the angle between vectors (1 = identical, 0 = orthogonal, -1 = opposite). Euclidean Distance measures spatial distance. For high-dimensional text embeddings, Cosine Similarity is almost always preferred as it is magnitude-invariant.',
      analogy: 'Like two compasses pointing in nearly the same direction — we care that they point the same way (cosine similarity), not whether they are physically near each other (Euclidean).',
      graphTitle: 'Cosine vs Euclidean in 2D Space',
    },
    lab: {
      instruction: 'Rotate the second vector. Watch the cosine similarity score change from 1.0 (same direction) to 0 (perpendicular) to -1.0 (opposite).',
      label: 'Vector Angle (degrees)',
    },
    thinking: {
      scenario: 'Two embeddings have cosine similarity 0.97. A third embedding has Euclidean distance 0.05 but cosine similarity 0.41. Which is actually more semantically similar?',
      options: [
        'The third — smaller Euclidean distance always means more similar meaning.',
        'The first (cosine 0.97) — cosine similarity correctly captures semantic alignment regardless of vector magnitude.',
        'They are equivalent measurements for text embeddings.',
      ],
      correctIndex: 1,
    },
    design: ['Embed Query Q', 'Embed Document D', 'Cosine Sim = (Q·D) / (|Q|·|D|)', 'Rank All Documents by Score', 'Return Top-K Matches'],
    exam: {
      question: 'Define Cosine Similarity mathematically. Why is it preferred over Euclidean distance for comparing text embeddings in high-dimensional space? (5 Marks)',
    },
  },
  genai_t13: {
    title: 'Retrieval Augmented Generation (RAG)',
    concept: {
      explanation: 'RAG connects an LLM to an external vector database. At query time: embed the question, retrieve top-K relevant document chunks via semantic search, inject them into the prompt as context, then let the LLM answer grounded in real retrieved facts — dramatically reducing hallucination.',
      analogy: 'Like an open-book exam — instead of answering purely from memory, the student (LLM) is handed the exact textbook chapters containing the answer to read before responding.',
      graphTitle: 'RAG Retrieval → Augmentation → Generation Pipeline',
    },
    lab: {
      instruction: 'Slide the semantic search threshold. Watch how the most relevant document chunk gets retrieved from the vector database and appended to the context prompt.',
      label: 'Semantic Search Retrieval',
    },
    thinking: {
      scenario: 'Your RAG pipeline retrieves 50 relevant documents but the LLM still answers incorrectly from memory. What is the most likely cause?',
      options: [
        'Your embedding dimension is too low to encode meaning properly.',
        'The retrieved documents exceed the model\'s context window limit — the LLM never reads them all.',
        'Temperature is set too low, making the model ignore new context.',
      ],
      correctIndex: 1,
    },
    design: ['User Query', 'Embed Query → Vector', 'Semantic Search in Vector DB', 'Retrieve Top-K Chunks', 'Inject into Prompt', 'LLM Generates Grounded Answer'],
    exam: {
      question: 'Outline the full data pipeline for building a RAG system on a PDF. Define "Chunking" and "Embeddings" and explain their roles. (10 Marks)',
    },
  },
  genai_t14: {
    title: 'LangChain Overview',
    concept: {
      explanation: 'LangChain is an open-source framework for building LLM-powered applications. It provides composable abstractions: Chains (multi-step pipelines), Agents (LLM + tool use), Memory (conversation history), and Retrievers (vector DB connectors). It dramatically reduces boilerplate for RAG and agent applications.',
      analogy: 'Like a professional kitchen with labelled stations (Prep, Grill, Sauce, Plate) — LangChain provides the organized structure so chefs (LLMs) can collaborate on complex multi-course meals (tasks) without chaos.',
      graphTitle: 'LangChain LCEL Chain Architecture',
    },
    lab: {
      instruction: 'Adjust the chain length (number of steps). Each step transforms the input — watch how a simple query becomes a structured, grounded answer through the pipeline.',
      label: 'Chain Pipeline Steps',
    },
    thinking: {
      scenario: 'You want to build a chatbot that: reads a PDF → answers questions → remembers conversation history. Which LangChain components do you need?',
      options: [
        'Only the LLM wrapper — LangChain handles everything else automatically.',
        'Document Loader + Text Splitter + VectorStore + ConversationMemory + RetrievalQA Chain.',
        'Only the Agent module — it handles all subtasks internally.',
      ],
      correctIndex: 1,
    },
    design: ['Load Document (PyPDFLoader)', 'Split Text (RecursiveCharacterTextSplitter)', 'Embed & Store (ChromaDB)', 'ConversationalRetrievalChain', 'Response with Memory'],
    exam: {
      question: 'Describe LangChain\'s LCEL (LangChain Expression Language) and how it enables composable, streaming LLM pipelines. (5 Marks)',
    },
  },
  genai_t15: {
    title: 'Vector Databases (Pinecone, Weaviate)',
    concept: {
      explanation: 'Vector databases store, index, and query high-dimensional embedding vectors at scale. Unlike SQL databases that use B-trees for exact matches, vector DBs use Approximate Nearest Neighbor (ANN) algorithms (HNSW, IVF) to find semantically similar vectors in milliseconds across millions of entries.',
      analogy: 'A traditional database is like finding a book by its exact ISBN number. A vector database is like finding books by their "vibe" — showing you everything thematically similar to a book you love.',
      graphTitle: 'HNSW Approximate Nearest Neighbor Graph',
    },
    lab: {
      instruction: 'Increase the vector database size. Watch how ANN search retrieves approximate neighbors in O(log N) time versus brute-force O(N) linear scan.',
      label: 'Database Size (Vectors)',
    },
    thinking: {
      scenario: 'Your semantic search is accurate but takes 8 seconds per query on 10 million vectors. How do you scale this to < 100ms?',
      options: [
        'Upgrade to a faster CPU with more cores.',
        'Use a vector database with HNSW indexing — ANN search makes retrieval sub-linear and latency drops to < 50ms.',
        'Reduce embedding dimensions to 32.',
      ],
      correctIndex: 1,
    },
    design: ['Embed All Documents → Vectors', 'Build HNSW Index in Vector DB (Pinecone)', 'Query: Embed Question', 'ANN Search → Top-K Vectors', 'Return Matching Document Chunks'],
    exam: {
      question: 'Explain how HNSW (Hierarchical Navigable Small World) indexing works in vector databases. Why is ANN preferred over exact search at scale? (10 Marks)',
    },
  },
  genai_t16: {
    title: 'AI Chatbots & Conversation Design',
    concept: {
      explanation: 'Modern AI chatbots use LLMs with an evolving message history as context (system → user → assistant turns). Conversation design involves: persona definition, memory management (full history vs summarization), guardrails (safety filters), and fallback handling for out-of-scope queries.',
      analogy: 'A well-designed chatbot is like a brilliant hotel concierge — knows the property thoroughly, maintains a friendly consistent persona, remembers your preferences from earlier in the conversation, and gracefully says "I don\'t know" when appropriate.',
      graphTitle: 'Multi-Turn Conversation State Machine',
    },
    lab: {
      instruction: 'Increase the conversation history length. At some point the context window fills — watch how the chatbot loses memory of early turns and becomes inconsistent.',
      label: 'Conversation History Turns',
    },
    thinking: {
      scenario: 'Your customer service chatbot starts agreeing with false claims users make about your products. How do you fix this architecturally?',
      options: [
        'Reduce the temperature to 0 to prevent any creative responses.',
        'Add a strict System Prompt with persona constraints + RAG grounding against official product documentation.',
        'Increase the maximum token limit per response.',
      ],
      correctIndex: 1,
    },
    design: ['System Prompt (Role + Constraints)', 'User Turn → Retrieve Context (RAG)', 'Build Message History', 'LLM Generation', 'Safety Filter → Stream Response'],
    exam: {
      question: 'Describe the architecture of a production-grade AI chatbot. How does conversation memory management affect coherence over long sessions? (10 Marks)',
    },
  },
  genai_t17: {
    title: 'AI Agents & Tool Use',
    concept: {
      explanation: 'AI Agents extend LLMs with the ability to use external tools (web search, code execution, APIs, databases). The ReAct (Reasoning + Acting) pattern lets the model alternate between: Thought (plan), Action (call a tool), Observation (read result), repeat until a final answer is reached.',
      analogy: 'A regular LLM is a brilliant analyst locked in a room with only their memory. An Agent is that same analyst equipped with a phone, computer, calculator, and internet access — they can research, compute, and act in real-time.',
      graphTitle: 'ReAct Thought → Action → Observation Loop',
    },
    lab: {
      instruction: 'Increase the number of agent reasoning steps. Watch the model chain multiple tool calls (search → compute → verify) before reaching a confident final answer.',
      label: 'Agent Reasoning Steps',
    },
    thinking: {
      scenario: 'Your AI agent is tasked with "Find the current stock price of Apple and calculate what a $10,000 investment would be worth today." What tools does it need?',
      options: [
        'No tools — the LLM has stock data in its training weights.',
        'A web search tool (real-time price) + a code execution tool (calculate investment value).',
        'Only a database query tool — stock prices are stored in structured databases.',
      ],
      correctIndex: 1,
    },
    design: ['User Goal', 'LLM: Think (What tool do I need?)', 'Action: Call Tool (Search / Code / API)', 'Observation: Read Tool Output', 'Repeat Until Final Answer → Respond'],
    exam: {
      question: 'Explain the ReAct prompting pattern for AI Agents. How does it differ from standard single-shot LLM prompting? (10 Marks)',
    },
  },
};
