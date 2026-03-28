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
  }
};
