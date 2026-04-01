import { TopicModeContent } from './types';

export const mlContent: Record<string, TopicModeContent> = {
  ml_t1: {
    title: 'Linear Regression',
    concept: {
      explanation: 'Linear Regression finds the best-fitting straight line through your data. Given an input X, it predicts a continuous output Y using Y = W·X + B, where W is the weight (slope) and B is the bias (intercept). The model learns these by minimising Mean Squared Error (MSE) via Gradient Descent.',
      analogy: 'Think of shooting an arrow through a swarm of bees. You want the arrow path to be as close to all the bees collectively as possible.',
      graphTitle: 'Line of Best Fit',
    },
    lab: {
      instruction: 'Adjust the slope (weight) to see how the MSE Loss changes. Watch the regression line tilt through the data points.',
      label: 'Model Weight (Slope)',
    },
    thinking: {
      scenario: 'You are predicting housing prices. Your linear model predicts negative prices for very small houses. What is wrong?',
      options: [
        'You must switch to a completely different framework immediately.',
        'Linear models extrapolate infinitely — clip outputs or log-transform the target variable.',
        'The model is overfitting the training data.',
      ],
      correctIndex: 1,
    },
    design: ['Raw Data', 'Extract Feature X', 'Y = W·X + B', 'Calculate MSE Loss', 'Gradient Descent Update'],
    exam: {
      question: 'Explain how Gradient Descent is used to minimise the Mean Squared Error in Linear Regression. Define the update rule for weights. (5 Marks)',
    },
  },
  ml_t2: {
    title: 'Classification',
    concept: {
      explanation: 'Classification assigns inputs into discrete categories (e.g. Spam / Not Spam). Logistic Regression uses a Sigmoid function to squash outputs to a probability between 0 and 1, then applies a threshold to decide the class.',
      analogy: 'Like an immigration officer checking passports — every traveller is routed into Approved or Denied based on specific criteria.',
      graphTitle: 'Decision Boundary',
    },
    lab: {
      instruction: 'Shift the probability threshold. See how raising it reduces false positives but increases false negatives.',
      label: 'Probability Threshold',
    },
    thinking: {
      scenario: 'You build a cancer-detection classifier. Data has 99% healthy and 1% sick patients. Accuracy hits 99%. Is the model good?',
      options: [
        'Yes — 99% accuracy is excellent in any domain.',
        'Focus entirely on maximising Precision to avoid false positives.',
        'No — use Recall or F1-score; accuracy is misleading under class imbalance.',
      ],
      correctIndex: 2,
    },
    design: ['Input Features', 'Logistic (Sigmoid) Function', 'Probability (0–1)', 'Threshold → Class 0 or 1'],
    exam: {
      question: 'Differentiate Precision and Recall. Provide a real-world scenario where Recall is far more critical than Precision. (5 Marks)',
    },
  },
  ml_t3: {
    title: 'Overfitting & Regularization',
    concept: {
      explanation: 'Overfitting occurs when a model memorises the training data — including noise — and fails to generalise. Regularization techniques (L1/L2, Dropout) penalise large weights, keeping the model simpler and more robust.',
      analogy: 'Like a student who memorises exact answers from a practice test. When the real exam has slightly different numbers, they fail completely.',
      graphTitle: 'Bias-Variance Tradeoff Curve',
    },
    lab: {
      instruction: 'Increase the polynomial degree (complexity). Watch the curve twist wildly to hit every single training point — this is overfitting.',
      label: 'Model Complexity (Degree)',
    },
    thinking: {
      scenario: 'Training accuracy is 99.8% but validation accuracy has dropped to 60%. What should you do?',
      options: [
        'Add more complex layers to help the model understand the validation set.',
        'Apply L2 Regularization (Ridge) or Dropout to reduce overfitting.',
        'Increase the learning rate to converge faster.',
      ],
      correctIndex: 1,
    },
    design: ['Complex Model', 'Calculate Training Loss', 'Add L2 Regularization Penalty', 'Update Weights → Better Generalization'],
    exam: {
      question: 'Define the Bias-Variance Tradeoff precisely. Where does an overfitting model sit on this spectrum and why? (5 Marks)',
    },
  },
  ml_t4: {
    title: 'Decision Trees & Random Forests',
    concept: {
      explanation: 'A Decision Tree splits data recursively using the feature that maximises Information Gain (reduces Entropy / Gini Impurity). Random Forests build many trees on random subsets of data and features, then average their predictions — reducing variance significantly.',
      analogy: 'Like playing 20 Questions to narrow down an identity. Random Forest is like asking 500 different people to play simultaneously and taking the majority vote.',
      graphTitle: 'Tree Splitting Logic',
    },
    lab: {
      instruction: 'Increase the max tree depth. Observe how deeper trees create highly fragmented decision boundaries.',
      label: 'Max Tree Depth',
    },
    thinking: {
      scenario: 'Your decision tree has grown to depth 50 and achieves 100% training accuracy but 55% validation accuracy.',
      options: [
        'The model is underfitting — it needs more depth.',
        'The model has severely overfit — prune the tree or use max_depth.',
        'It will train exponentially faster with greater depth.',
      ],
      correctIndex: 1,
    },
    design: ['Root Node', 'Calculate Information Gain per Feature', 'Split on Best Feature', 'Recurse → Leaf Node Classification'],
    exam: {
      question: 'Explain Information Gain and Gini Impurity. How does Random Forest reduce variance compared to a single Decision Tree? (10 Marks)',
    },
  },
  ml_t5: {
    title: 'Support Vector Machines (SVM)',
    concept: {
      explanation: 'SVMs find the optimal hyperplane that maximises the margin between classes. Support vectors are the data points closest to the boundary. The Kernel Trick (RBF, Polynomial) maps data to higher dimensions to make non-linearly separable data separable.',
      analogy: 'Like stretching a rubber sheet between two coloured groups of marbles — you want the sheet positioned as far from both groups as possible.',
      graphTitle: 'Maximum Margin Hyperplane',
    },
    lab: {
      instruction: 'Adjust the C parameter (regularization strength). Low C = wide margin but some misclassifications. High C = narrow hard margin.',
      label: 'C Parameter (Regularization)',
    },
    thinking: {
      scenario: 'Your SVM classifier works perfectly on linearly separable training data but fails completely on circular ring-shaped test data.',
      options: [
        'Increase C to allow more support vectors.',
        'Switch to an RBF Kernel to map data into higher-dimensional feature space.',
        'Reduce the number of training samples.',
      ],
      correctIndex: 1,
    },
    design: ['Input Features', 'Apply Kernel Function (RBF)', 'Project to Higher Dimension', 'Find Max-Margin Hyperplane', 'Classify New Points'],
    exam: {
      question: 'Explain the Kernel Trick in SVMs. Why is the RBF kernel effective for non-linearly separable data? (5 Marks)',
    },
  },
  ml_t6: {
    title: 'K-Means Clustering',
    concept: {
      explanation: 'K-Means is an unsupervised algorithm that partitions N data points into K clusters. It iteratively assigns each point to its nearest centroid, then recalculates centroids until convergence. The Elbow Method helps choose K.',
      analogy: 'Like organizing a messy room: pick K random spots, group everything nearby to each spot, then move each spot to the centre of its group — repeat until stable.',
      graphTitle: 'Cluster Centroid Convergence',
    },
    lab: {
      instruction: 'Increase K (number of clusters). Watch how the centroids shift and data partitions divide.',
      label: 'Number of Clusters (K)',
    },
    thinking: {
      scenario: 'You run K-Means with K=3 but the clusters are unstable and change every run. What is the cause?',
      options: [
        'The algorithm is deterministic — something else is wrong.',
        'Random centroid initialization causes different local minima each run. Use K-Means++ initialization.',
        'Your data has too many features for K-Means.',
      ],
      correctIndex: 1,
    },
    design: ['Initialize K Centroids Randomly', 'Assign Points to Nearest Centroid', 'Recalculate Centroid Positions', 'Repeat Until Convergence'],
    exam: {
      question: 'Describe the K-Means algorithm step-by-step. What is the Elbow Method and how does it help select K? (5 Marks)',
    },
  },
  ml_t7: {
    title: 'Model Evaluation & Metrics',
    concept: {
      explanation: 'Evaluating a model goes far beyond accuracy. Key metrics include Precision, Recall, F1-Score (classification), ROC-AUC (threshold analysis), MAE, MSE, and R² (regression). Cross-validation ensures reliable estimates by rotating train/test splits.',
      analogy: 'Like judging a restaurant not just by how often customers enjoy the food, but also how rarely it makes people sick — both matter depending on context.',
      graphTitle: 'Confusion Matrix / ROC Curve',
    },
    lab: {
      instruction: 'Adjust the classification threshold and watch how Precision and Recall trade off on the ROC curve.',
      label: 'Decision Threshold',
    },
    thinking: {
      scenario: 'A model achieves ROC-AUC of 0.98 on training data but 0.61 on a completely held-out test set. What does this indicate?',
      options: [
        'The model is excellent — ROC-AUC above 0.5 is always acceptable.',
        'Severe overfitting. Use k-fold cross-validation and regularization.',
        'The test set data distribution is broken and should be regenerated.',
      ],
      correctIndex: 1,
    },
    design: ['Collect Predictions', 'Build Confusion Matrix', 'Calculate Precision / Recall / F1', 'Plot ROC Curve → Optimise Threshold'],
    exam: {
      question: 'Explain k-fold Cross-Validation. Why is it preferred over a fixed train/test split for evaluating ML models? (5 Marks)',
    },
  },
};
