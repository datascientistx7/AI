export const mlContent: Record<string, any> = {
  t1: {
    title: "Linear Regression",
    concept: {
      explanation: "Linear Regression finds the best-fitting straight line through your data points. Imagine trying to predict a house's price (Y) based on its square footage (X). The model learns the weight (slope) and bias (intercept).",
      analogy: "Think of shooting an arrow through a swarm of bees. You want the arrow's path to be as close to all the bees as collectively possible.",
      graphTitle: "Line of Best Fit"
    },
    lab: {
      instruction: "Adjust the slope (weight) to see how the mathematical error (Loss) changes. Watch the line tilt!",
      label: "Model Weight (Slope)"
    },
    thinking: {
      scenario: "You are predicting housing prices. You notice your linear model predicts negative prices for very small houses.",
      options: [
        "We must use a completely different framework instead.",
        "Linear models naturally extrapolate infinitely. We should clip outputs or transform the target variable.",
        "The model is overfitting."
      ],
      correctIndex: 1
    },
    design: [
      "Raw Data", "Extract Features (X)", "Y = W*X + B", "Calculate MSE Loss"
    ],
    exam: {
      question: "Explain how Gradient Descent is used to update the weights in Linear Regression to minimize Mean Squared Error. (5 Marks)"
    }
  },
  t2: {
    title: "Classification",
    concept: {
      explanation: "Unlike Regression which predicts continuous numbers, Classification assigns data into discrete categories (like Spam or Not Spam). It uses a decision boundary to separate the classes.",
      analogy: "Like an immigration officer checking passports into 'Approved' and 'Denied' lanes based on specific criteria.",
      graphTitle: "Decision Boundary"
    },
    lab: {
      instruction: "Shift the decision threshold. Notice how raising the threshold reduces false positives but increases false negatives.",
      label: "Probability Threshold"
    },
    thinking: {
      scenario: "You are building a cancer detection classifier. The data has 99% healthy patients and 1% sick patients.",
      options: [
        "Accuracy is a great metric because it will likely hit 99%.",
        "You should focus strictly on maximizing Precision to avoid false positives.",
        "You must use metrics like Recall or F1-score due to the severe class imbalance."
      ],
      correctIndex: 2
    },
    design: [
      "Input Features", "Logistic Function (Sigmoid)", "Probability Output (0-1)", "Assign Class (0 or 1)"
    ],
    exam: {
      question: "Differentiate between Precision and Recall. Provide a scenario where Recall is vastly more critical. (5 Marks)"
    }
  },
  t3: {
    title: "Overfitting",
    concept: {
      explanation: "Overfitting occurs when a model learns the training data *too* well, absorbing random noise. As a result, it fails to evaluate unseen data correctly. It effectively loses the ability to generalize.",
      analogy: "Like a student memorizing the exact answers to a specific practice test, but FAILING the real exam because the numbers changed slightly.",
      graphTitle: "High Variance Curve"
    },
    lab: {
      instruction: "Increase the Polynomial Degree (Complexity). Notice the curve twisting wildly just to hit every single point.",
      label: "Model Complexity (Degree)"
    },
    thinking: {
      scenario: "Your training accuracy is incredibly high (99.8%) but your validation accuracy has plummeted to 60%.",
      options: [
        "Your model needs more complex layers to understand the validation set.",
        "You should implement Regularization techniques like L2 (Ridge) or Dropout.",
        "Your learning rate is too slow."
      ],
      correctIndex: 1
    },
    design: [
      "Complex Model", "Calculate Loss", "Add L2 Regularization Penalty", "Update Generalization"
    ],
    exam: {
      question: "Define the Bias-Variance Tradeoff precisely. How does an overfitted model fit within this tradeoff? (5 Marks)"
    }
  },
  t4: {
    title: "Decision Trees",
    concept: {
      explanation: "A Decision Tree splits data recursively based on feature values that maximize information gain (like Gini impurity or Entropy). It forms a branching path of conditional if-else rules.",
      analogy: "Like playing a sophisticated game of '20 Questions' to narrow down an exact identity.",
      graphTitle: "Tree Splitting Logic"
    },
    lab: {
      instruction: "Increase the tree's maximum depth. Observe how deeper trees create highly fragmented boundaries.",
      label: "Max Tree Depth"
    },
    thinking: {
      scenario: "Your decision tree has grown to a depth of 50. What is the immediate consequence?",
      options: [
        "The model is highly underfitting the data.",
        "The model is prone to severe overfitting.",
        "It will train exponentially faster."
      ],
      correctIndex: 1
    },
    design: [
      "Root Node", "Calculate Information Gain", "Split Data", "Leaf Node Classification"
    ],
    exam: {
      question: "Explain ‘Information Gain’ in the context of splitting a node within a Random Forest algorithm. (10 Marks)"
    }
  },
  t5: {
    title: "Perceptrons",
    concept: {
      explanation: "A Perceptron is the foundational building block of neural networks. It takes multiple inputs, multiplies them by weights, adds a bias, and passes the result through an activation function to output a signal.",
      analogy: "Like a strict bouncer at a club who assigns scores to your shoes, shirt, and ID, adds them up, and only lets you in if the total score passes the VIP threshold.",
      graphTitle: "Single Neuron Computation"
    },
    lab: {
      instruction: "Increase the bias slider to shift the activation threshold globally, allowing the neuron to fire (light up) more easily.",
      label: "Neuron Bias Voltage"
    },
    thinking: {
      scenario: "You are trying to solve the XOR problem (Exclusive OR) using a single standard historical perceptron layer.",
      options: [
        "A single perceptron cannot solve XOR because the data is not linearly separable.",
        "You simply need to tune the weights more aggressively.",
        "You must use a sigmoid activation rather than a step function."
      ],
      correctIndex: 0
    },
    design: [
      "Inputs (x1, x2)", "Multiply Weights (w1, w2)", "Summation (+ Bias)", "Step Activation"
    ],
    exam: {
      question: "Describe the architecture of a Perceptron and explain why it fails to compute an XOR logic gate. (10 Marks)"
    }
  },
  t6: {
    title: "CNNs",
    concept: {
      explanation: "Convolutional Neural Networks extract spatial features from images using filters (kernels) that slide over the input matrix. They capture edges, textures, and eventually shapes.",
      analogy: "Like sweeping a flashlight systematically across a dark room, grid by grid, to piece together the full layout object by object.",
      graphTitle: "Grid Feature Extraction"
    },
    lab: {
      instruction: "Slide the convolutional 3x3 kernel across the 2D image matrix to extract localized pixel features computationally.",
      label: "Kernel Sliding Step Parameter"
    },
    thinking: {
      scenario: "Your image classifier is highly accurate, but it completely fails if the object is shifted just slightly to the left in the frame.",
      options: [
        "Your model doesn't have translation invariance. You need to apply Pooling layers (like Max Pooling).",
        "You need a larger learning rate.",
        "You should change your output to softmax."
      ],
      correctIndex: 0
    },
    design: [
      "Input Image Matrix", "Apply Convolution Kernel", "ReLU Activation Feature Map", "Max Pooling Layer"
    ],
    exam: {
      question: "Explain the role of 'Strides' and 'Padding' in a Convolutional layer. (5 Marks)"
    }
  },
  t7: {
    title: "Intro to Large Language Models",
    concept: {
      explanation: "LLMs utilize the Transformer architecture to predict the next token in a sequence by analyzing the context of all surrounding words simultaneously through self-attention mechanisms.",
      analogy: "Like autocomplete on your smartphone, but it has read the entire internet and understands the nuanced grammatical context of your entire conversation.",
      graphTitle: "Contextual Prediction Engine"
    },
    lab: {
      instruction: "Increase the number of Transformer Decoder Layers to see how deep the 'attention' pathways reach across the sentence architecture.",
      label: "Transformer Layer Depth"
    },
    thinking: {
      scenario: "Your LLM writes beautifully but occasionally invents confident historical facts that never happened.",
      options: [
        "The model lacks data syntax processing.",
        "This is 'Hallucination', an inherent flaw of probabilistic next-token generation.",
        "You need to increase the model's drop-out rating."
      ],
      correctIndex: 1
    },
    design: [
      "Tokenize Input Text", "Positional Embeddings", "Multi-Head Self-Attention", "Output Next-Token Probability"
    ],
    exam: {
      question: "What is 'Self-Attention' in the Transformer architecture and why was it a breakthrough over recurrent neural networks (RNNs)? (10 Marks)"
    }
  },
  t8: {
    title: "Prompt Engineering",
    concept: {
      explanation: "Prompt Engineering is the art and science of structuring text inputs to an LLM to reliably extract accurate, formatted, or creative outputs without retraining the underlying model.",
      analogy: "Like giving extremely literal, hyper-specific instructions to a brilliant but naive intern who will do exactly as they are told without assuming intent.",
      graphTitle: "System Instruction Constraint"
    },
    lab: {
      instruction: "Adjust the 'Temperature' slider to see the model shift from rigid deterministic output scaling into erratic high-creativity chaos.",
      label: "Model Temperature (Creativity)"
    },
    thinking: {
      scenario: "You need the model to extract JSON from emails reliably, but sometimes it includes conversational text like 'Here is your JSON:'.",
      options: [
        "Retrain the entire 70B parameter network on JSON exclusively.",
        "Use Few-Shot prompting providing 3 exact input/output examples, adding a strict System Prompt limiting conversational tags.",
        "Translate everything to binary first."
      ],
      correctIndex: 1
    },
    design: [
      "Define Role/Persona", "Inject Context Data", "Provide Few-Shot Examples", "Format Strict Output Schema"
    ],
    exam: {
      question: "Explain ‘Chain of Thought’ (CoT) prompting. Why does instructing the model to 'think step by step' drastically improve mathematical logic? (5 Marks)"
    }
  },
  t9: {
    title: "Retrieval Augmented Generation (RAG)",
    concept: {
      explanation: "RAG connects an LLM to an external vector database. Instead of relying on internal training memory, it searches for factual documents and includes them directly in the prompt as context.",
      analogy: "Like an open-book test. Instead of answering from memory, the student (LLM) is handed the exact textbook chapter containing the answer to read before responding.",
      graphTitle: "Vector Database Augmentation"
    },
    lab: {
      instruction: "Slide to execute a semantic vector search. Watch the specific document get pulled from the Database and appended to the Context Window.",
      label: "Execute Semantic Document Search"
    },
    thinking: {
      scenario: "Your RAG pipeline fetches 50 incredibly relevant documents, but the LLM completely ignores them and answers incorrectly from its own memory.",
      options: [
        "Your embedding vector dimension is too low.",
        "You've exceeded the model's maximum context window length (token limit).",
        "The temperature is set to 0."
      ],
      correctIndex: 1
    },
    design: [
      "User Query Embeddings", "Semantic Vector Search (Pinecone)", "Retrieve Top-K Chunks", "Prompt LLM w/ Extracted Context"
    ],
    exam: {
      question: "Outline the full data pipeline of setting up a RAG system on a PDF document, detailing 'Chunking' and 'Embeddings'. (10 Marks)"
    }
  },
  t10: {
    title: "Diffusion Models",
    concept: {
      explanation: "Diffusion models learn to gradually denoise images. They are trained by systematically destroying an image with static noise, and the neural network learns to reverse the process to generate pure art from pure static.",
      analogy: "Like a sculptor staring at a totally random block of marble, slowly chiseling away the chaotic dust until a perfect, high-resolution statue emerges.",
      graphTitle: "Iterative Denoising Process"
    },
    lab: {
      instruction: "Slide backward through the generative time-steps. Watch the pure Gaussian noise magically converge into a structured form.",
      label: "Reverse Denoising Step (t)"
    },
    thinking: {
      scenario: "You generated an image of a person, but their hands look distorted and have 7 fingers.",
      options: [
        "The model needs a higher resolution output projection.",
        "This is an inherent limitation: the model struggles with complex hierarchical topological constraints despite local texture accuracy.",
        "You need to increase the noise scheduling variance."
      ],
      correctIndex: 1
    },
    design: [
      "Text Embedding (CLIP)", "Start w/ Pure Guassian Noise (t=T)", "UNet Predicts Noise Gradient", "Subtract Noise Iteratively (t=0)"
    ],
    exam: {
      question: "Explain the 'Forward Diffusion' training process versus the 'Reverse Denoising' inference process in Stable Diffusion. (10 Marks)"
    }
  },
  t11: {
    title: "SELECT statements",
    concept: {
      explanation: "The SELECT statement is the core command to query data from a massive relational table. It acts as a targeted filter, rapidly pulling exactly the columns and conditions you mathematically request.",
      analogy: "Like telling a librarian you want exactly 5 books, but only if they are colored blue and published after 2010. They hand you your exact requested stack.",
      graphTitle: "Data Frame Extraction"
    },
    lab: {
      instruction: "Increase the slider to dynamically inject a 'WHERE ID > X' filter onto the massive database table query.",
      label: "Apply SQL Query Filter Parameter"
    },
    thinking: {
      scenario: "You want to find all customers in New York, but your query returns empty. You know NY customers exist.",
      options: [
        "SQL is case sensitive for string matches. The data might be formatted as 'new york' or 'NY'.",
        "You need to use a JOIN.",
        "The SELECT statement doesn't support geographical searches natively."
      ],
      correctIndex: 0
    },
    design: [
      "Client Request", "Query Parser/Optimizer", "Execute Scan on Indexed Rows", "Return Filtered ResultSet"
    ],
    exam: {
      question: "Write an aggregate SQL query to find the total sum of 'revenue' grouped by each 'city' where the revenue is greater than $50,000. Use HAVING. (5 Marks)"
    }
  },
  t12: {
    title: "Table JOINs",
    concept: {
      explanation: "A JOIN operation merges rows across entirely separate tables laterally by matching a shared relational key. It unifies scattered relational data points into single cohesive readouts.",
      analogy: "Like zipping up a jacket. The left side and right side must perfectly align their metal teeth (keys) to lock together into one solid fabric.",
      graphTitle: "Relational Intersection"
    },
    lab: {
      instruction: "Watch the two distinct database tables laterally slide into one another, executing an INNER JOIN to intersect perfectly on identical relational keys.",
      label: "Execute Relational Table Joinging"
    },
    thinking: {
      scenario: "You execute a JOIN combining a 100-row table and a 50-row table, but the query returns 5,000 rows.",
      options: [
        "The query optimizer crashed.",
        "You forgot the 'ON' condition, causing a massive Cartesian Cross Join (100 * 50).",
        "You executed an OUTER JOIN instead of an INNER JOIN."
      ],
      correctIndex: 1
    },
    design: [
      "Scan Table A", "Scan Table B", "Hash Match Relational Keys", "Append Columns Vertically"
    ],
    exam: {
      question: "Differentiate specifically between a LEFT OUTER JOIN and an INNER JOIN with respect to null evaluations. (5 Marks)"
    }
  }
};
