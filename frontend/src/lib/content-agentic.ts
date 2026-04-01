import { TopicModeContent } from './types';

export const agenticContent: Record<string, TopicModeContent> = {
  agentic_t1: {
    title: 'What Is an AI Agent?',
    concept: {
      explanation: 'An AI agent is an LLM-powered system that can pursue a goal over multiple steps, often by choosing actions, using tools, reading observations, and updating its plan.',
      analogy: 'A normal chatbot is a smart advisor. An agent is that advisor with a checklist, a browser, a calculator, and permission to act.',
      graphTitle: 'Goal → Action → Observation Loop',
    },
    lab: {
      instruction: 'Increase task complexity and observe when a simple one-shot answer stops working and an agent loop becomes necessary.',
      label: 'Task Complexity',
    },
    thinking: {
      scenario: 'A user asks, "Find three flights, compare prices, and suggest the best one." Why is an agent better than a single prompt?',
      options: [
        'Because the system must gather information, compare options, and decide across multiple steps.',
        'Because agents always produce longer answers.',
        'Because single prompts cannot return text.',
      ],
      correctIndex: 0,
    },
    design: ['Define Goal', 'Choose Next Action', 'Call Tool or Reason', 'Read Observation', 'Repeat Until Final Answer'],
    exam: {
      question: 'Define an AI agent and explain how it differs from single-turn prompting.',
    },
  },
  agentic_t2: {
    title: 'Tool Use & Function Calling',
    concept: {
      explanation: 'Tool use lets a model call external functions such as search, calculators, APIs, or databases. Function calling makes those actions structured, predictable, and machine-readable.',
      analogy: 'Instead of guessing the weather from memory, the model picks up the phone and asks a weather service directly.',
      graphTitle: 'Model to Tool Contract',
    },
    lab: {
      instruction: 'Change the available tool list and watch how the agent’s strategy changes when it can search, calculate, or query a database.',
      label: 'Available Tools',
    },
    thinking: {
      scenario: 'A user asks for today’s exchange rate and a converted invoice total. Which setup is best?',
      options: [
        'Use a rate lookup tool plus calculation logic.',
        'Rely only on model memory.',
        'Ask the user to compute it manually.',
      ],
      correctIndex: 0,
    },
    design: ['Receive User Goal', 'Select Tool Schema', 'Call Function with Arguments', 'Validate Observation', 'Compose Final Response'],
    exam: {
      question: 'Explain why function calling improves reliability compared with free-form tool usage.',
    },
  },
  agentic_t3: {
    title: 'Planning, ReAct & Control Loops',
    concept: {
      explanation: 'ReAct combines reasoning and acting: think, choose an action, observe the result, and continue. Planning helps agents break goals into subgoals instead of reacting blindly at every step.',
      analogy: 'Like a field engineer who first sketches the repair plan, then tests one subsystem at a time before moving on.',
      graphTitle: 'Plan and Execute Cycle',
    },
    lab: {
      instruction: 'Increase the allowed reasoning steps and inspect how the agent decomposes a complex task before acting.',
      label: 'Reasoning Steps',
    },
    thinking: {
      scenario: 'Your agent repeatedly calls the same failing tool and never stops. What is missing?',
      options: [
        'A control loop with retry limits, reflection, and exit criteria.',
        'A larger font size in the UI.',
        'More random tool choices.',
      ],
      correctIndex: 0,
    },
    design: ['Parse Goal', 'Create Plan', 'Execute One Step', 'Observe Result and Reflect', 'Continue or Terminate'],
    exam: {
      question: 'Describe the ReAct pattern and explain why termination rules matter in agent systems.',
    },
  },
  agentic_t4: {
    title: 'Memory, State & Context Management',
    concept: {
      explanation: 'Agents need memory to preserve user intent, intermediate results, and prior decisions. Good systems separate short-term context, long-term memory, and structured state to avoid confusion and token overload.',
      analogy: 'Like keeping a whiteboard for current work, a notebook for prior meetings, and a database for official records.',
      graphTitle: 'Short-Term vs Long-Term State',
    },
    lab: {
      instruction: 'Increase conversation length and observe when summarization or structured state becomes necessary to stay coherent.',
      label: 'History Length',
    },
    thinking: {
      scenario: 'An agent forgets a user’s preference halfway through a long workflow. What is the strongest fix?',
      options: [
        'Store important preferences in explicit structured state, not only raw chat history.',
        'Increase temperature.',
        'Remove all previous messages.',
      ],
      correctIndex: 0,
    },
    design: ['Capture User State', 'Store Key Facts', 'Retrieve Relevant Memory', 'Inject into Current Step', 'Update State After Action'],
    exam: {
      question: 'Explain the difference between conversation history, working memory, and persistent state in agents.',
    },
  },
  agentic_t5: {
    title: 'Multi-Agent Systems',
    concept: {
      explanation: 'Multi-agent systems split work across specialized agents such as planner, researcher, coder, or reviewer. They improve modularity but introduce coordination, handoff, and conflict-resolution challenges.',
      analogy: 'Like a project team where one person plans, another researches, another implements, and another reviews.',
      graphTitle: 'Specialist Agent Topology',
    },
    lab: {
      instruction: 'Increase the number of agents and observe the tradeoff between specialization benefits and coordination overhead.',
      label: 'Agent Count',
    },
    thinking: {
      scenario: 'A planner agent and executor agent keep giving contradictory outputs. What should you improve first?',
      options: [
        'Clear responsibilities, message formats, and handoff rules.',
        'Add more agents immediately.',
        'Remove all tool usage.',
      ],
      correctIndex: 0,
    },
    design: ['Assign Roles', 'Distribute Subtasks', 'Pass Structured Handoffs', 'Merge Outputs', 'Run Final Validation'],
    exam: {
      question: 'What are the main advantages and risks of multi-agent architectures?',
    },
  },
  agentic_t6: {
    title: 'Evaluation, Guardrails & Reliability',
    concept: {
      explanation: 'Agent systems must be evaluated on correctness, tool success, recovery behavior, latency, and safety. Guardrails constrain actions, validate outputs, and reduce harmful or expensive mistakes.',
      analogy: 'Like putting safety rails, checklists, and quality gates around a powerful robot arm in a factory.',
      graphTitle: 'Reliability Control Stack',
    },
    lab: {
      instruction: 'Increase the strictness of validation rules and observe how the agent trades speed for safer, more reliable execution.',
      label: 'Guardrail Strictness',
    },
    thinking: {
      scenario: 'An agent sometimes sends malformed API arguments that cause production failures. What should you add?',
      options: [
        'Schema validation, retries, and post-tool checks before continuing.',
        'Higher temperature.',
        'Longer final answers.',
      ],
      correctIndex: 0,
    },
    design: ['Define Success Metrics', 'Constrain Allowed Actions', 'Validate Inputs and Outputs', 'Monitor Failures and Retries', 'Report Reliability Score'],
    exam: {
      question: 'Explain why evaluation and guardrails are mandatory for production-grade agentic AI systems.',
    },
  },
};
