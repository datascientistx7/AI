import { TopicModeContent } from './types';

export const sqlContent: Record<string, TopicModeContent> = {
  sql_t1: {
    title: 'SELECT, WHERE & ORDER BY',
    concept: {
      explanation: 'SQL starts with asking precise questions of a table. SELECT chooses columns, WHERE filters rows, and ORDER BY controls output order. Together they form the core read path for relational analysis.',
      analogy: 'Like asking a librarian for only history books, written after 2010, sorted by author name.',
      graphTitle: 'Row Filtering Pipeline',
    },
    lab: {
      instruction: 'Adjust the filter strength and inspect how the result set shrinks or grows as you narrow conditions.',
      label: 'Filter Threshold',
    },
    thinking: {
      scenario: 'A query returns too many customer rows because it only filters on city = "Delhi". What is the best next step?',
      options: [
        'Add more precise WHERE conditions such as active status or signup date.',
        'Switch immediately to a JOIN.',
        'Remove ORDER BY to make the rows disappear.',
      ],
      correctIndex: 0,
    },
    design: ['Read Table', 'Select Needed Columns', 'Apply WHERE Filters', 'Sort with ORDER BY', 'Return Result Set'],
    exam: {
      question: 'Explain how SELECT, WHERE, and ORDER BY work together to answer a business query cleanly and efficiently.',
    },
  },
  sql_t2: {
    title: 'JOINs & Relational Thinking',
    concept: {
      explanation: 'JOINs combine related rows across tables using shared keys. INNER JOIN returns matches from both sides, while LEFT JOIN preserves all rows from the left table even when no match exists on the right.',
      analogy: 'Like matching employee IDs from an employee list to department IDs from a department table.',
      graphTitle: 'Relational Match Flow',
    },
    lab: {
      instruction: 'Change the overlap between two tables and observe which rows survive under INNER JOIN versus LEFT JOIN.',
      label: 'Join Overlap',
    },
    thinking: {
      scenario: 'Your dashboard must show all customers, including those with no orders yet. Which join is correct?',
      options: [
        'LEFT JOIN from customers to orders.',
        'INNER JOIN from customers to orders.',
        'CROSS JOIN the two tables.',
      ],
      correctIndex: 0,
    },
    design: ['Load Left Table', 'Load Right Table', 'Match Shared Keys', 'Apply Join Type Rules', 'Project Combined Columns'],
    exam: {
      question: 'Compare INNER JOIN and LEFT JOIN, and explain when each should be used in reporting queries.',
    },
  },
  sql_t3: {
    title: 'Aggregation, GROUP BY & HAVING',
    concept: {
      explanation: 'Aggregation summarizes many rows into business metrics like COUNT, SUM, AVG, MIN, and MAX. GROUP BY partitions rows into buckets, and HAVING filters those grouped results after aggregation.',
      analogy: 'Like taking every sale, grouping by city, and then keeping only cities whose total revenue crosses a target.',
      graphTitle: 'Group and Aggregate Funnel',
    },
    lab: {
      instruction: 'Increase the minimum revenue threshold and observe which grouped buckets remain after HAVING is applied.',
      label: 'HAVING Threshold',
    },
    thinking: {
      scenario: 'You need cities with total sales above 1,00,000. Where should that condition go?',
      options: [
        'In HAVING, because the filter depends on aggregated totals.',
        'In WHERE, because WHERE is always faster.',
        'In ORDER BY, because it controls totals.',
      ],
      correctIndex: 0,
    },
    design: ['Scan Rows', 'Form Groups', 'Compute Aggregates', 'Filter Groups with HAVING', 'Publish Summary'],
    exam: {
      question: 'Explain the difference between WHERE and HAVING with an aggregation example.',
    },
  },
  sql_t4: {
    title: 'Subqueries & CTEs',
    concept: {
      explanation: 'Subqueries let one query feed another, while CTEs make complex logic easier to read by naming intermediate steps. They are useful for layered transformations, ranking, and reusable logic.',
      analogy: 'Like solving a hard problem on scratch paper before writing the final answer cleanly.',
      graphTitle: 'Layered Query Composition',
    },
    lab: {
      instruction: 'Break the problem into stages and observe how a CTE makes each transformation easier to inspect.',
      label: 'Query Stages',
    },
    thinking: {
      scenario: 'A nested query is correct but unreadable. What improves maintainability most?',
      options: [
        'Rewrite it using one or more clearly named CTEs.',
        'Add random aliases to every column.',
        'Convert the whole query into a JOIN only.',
      ],
      correctIndex: 0,
    },
    design: ['Define Base Query', 'Create Intermediate CTE', 'Reference CTE in Final Query', 'Apply Final Filters', 'Return Final Rows'],
    exam: {
      question: 'Describe how CTEs improve readability and debugging compared with deeply nested subqueries.',
    },
  },
  sql_t5: {
    title: 'Indexes & Query Optimization',
    concept: {
      explanation: 'Indexes accelerate lookups by organizing access paths to data. Query optimization depends on selective filters, good join keys, avoiding unnecessary scans, and understanding the execution plan.',
      analogy: 'An index is like the back-of-book lookup section, so you do not read every page to find one concept.',
      graphTitle: 'Indexed Lookup vs Full Scan',
    },
    lab: {
      instruction: 'Increase table size and watch the difference between indexed access and full table scans widen dramatically.',
      label: 'Table Size',
    },
    thinking: {
      scenario: 'A query filtering on customer_id is slow on a huge table. What is the most likely improvement?',
      options: [
        'Create or verify an index on customer_id and inspect the execution plan.',
        'Replace WHERE with HAVING.',
        'Sort the results alphabetically first.',
      ],
      correctIndex: 0,
    },
    design: ['Receive Query', 'Check Filters and Join Keys', 'Select Index Access Path', 'Execute Minimal Row Reads', 'Return Optimized Result'],
    exam: {
      question: 'Explain how indexes improve performance and why execution plans matter in SQL tuning.',
    },
  },
  sql_t6: {
    title: 'Transactions, ACID & Concurrency',
    concept: {
      explanation: 'Transactions group operations into a safe unit of work. ACID means Atomicity, Consistency, Isolation, and Durability, ensuring changes are reliable even under failures or concurrent access.',
      analogy: 'Like transferring money between bank accounts: both sides must succeed together, or the whole operation rolls back.',
      graphTitle: 'Safe Commit Lifecycle',
    },
    lab: {
      instruction: 'Simulate multiple writes and observe how commit and rollback preserve consistency.',
      label: 'Concurrent Writers',
    },
    thinking: {
      scenario: 'Two users edit the same inventory row at once and quantities become inconsistent. What concept matters most?',
      options: [
        'Transaction isolation and locking strategy.',
        'ORDER BY priority.',
        'GROUP BY product_id.',
      ],
      correctIndex: 0,
    },
    design: ['Begin Transaction', 'Apply Related Updates', 'Validate Constraints', 'Commit or Rollback', 'Persist Durable State'],
    exam: {
      question: 'Define ACID and explain why transaction isolation is critical in multi-user systems.',
    },
  },
};
