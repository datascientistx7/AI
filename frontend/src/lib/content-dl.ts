import { TopicModeContent } from './types';

export const dlContent: Record<string, TopicModeContent> = {
  dl_t1: {
    title: 'Introduction to Deep Learning',
    concept: {
      explanation: 'Deep Learning is a subset of Machine Learning that uses multi-layered neural networks to automatically learn hierarchical feature representations from raw data. Instead of hand-crafting features, the network discovers patterns layer by layer — edges, textures, shapes, then objects.',
      analogy: 'Like the human visual cortex — your brain processes light → edges → shapes → faces automatically in layers without you consciously engineering those steps.',
      graphTitle: 'Hierarchical Feature Learning',
    },
    lab: {
      instruction: 'Increase the number of hidden layers. Watch how deeper networks can approximate increasingly complex non-linear functions.',
      label: 'Number of Hidden Layers',
    },
    thinking: {
      scenario: 'You need to classify raw pixel images of cats and dogs. Should you use classical ML or Deep Learning? Why?',
      options: [
        'Classical ML — it is faster and always more accurate.',
        'Deep Learning — it learns spatial features from raw pixels automatically without manual feature engineering.',
        'Neither — image classification requires symbolic AI systems.',
      ],
      correctIndex: 1,
    },
    design: ['Raw Pixel Input', 'Hidden Layer 1 (Edges)', 'Hidden Layer 2 (Shapes)', 'Hidden Layer 3 (Objects)', 'Output: Class Label'],
    exam: {
      question: 'Explain the key difference between classical Machine Learning and Deep Learning with respect to feature engineering. (5 Marks)',
    },
  },
  dl_t2: {
    title: 'Deep Learning vs Machine Learning',
    concept: {
      explanation: 'Classical ML requires domain experts to manually extract features (e.g. pixel histograms, HoG descriptors). Deep Learning automates feature extraction through learnable filters. DL excels at unstructured data (images, audio, text) but requires large datasets and GPUs.',
      analogy: 'Classical ML is like a carpenter measuring every plank by hand before sawing. Deep Learning is like a CNC machine — feed it raw wood and it figures out the measurements and cuts automatically.',
      graphTitle: 'Manual vs Automated Feature Pipeline',
    },
    lab: {
      instruction: 'Increase the dataset slider. Notice that Deep Learning performance scales better with more data, while classical ML plateaus at a lower accuracy ceiling.',
      label: 'Training Dataset Size',
    },
    thinking: {
      scenario: 'You have a structured CSV table with 500 rows and must predict customer churn. Should you use DL or classical ML?',
      options: [
        'Deep Learning — it is always superior to classical approaches.',
        'Classical ML (e.g. XGBoost) — DL needs large data volumes; 500 rows is too small.',
        'Both will perform identically regardless of dataset size.',
      ],
      correctIndex: 1,
    },
    design: ['Raw Data', 'Manual Feature Extraction (ML)', 'OR Automatic Feature Learning (DL)', 'Model Training', 'Prediction Output'],
    exam: {
      question: 'Compare and contrast Deep Learning and classical Machine Learning. In what scenarios would you prefer each? (5 Marks)',
    },
  },
  dl_t3: {
    title: 'Perceptrons & Neurons',
    concept: {
      explanation: 'A perceptron is the atom of neural networks. It takes inputs X₁…Xₙ, multiplies each by a learned weight Wᵢ, sums them with a bias B, then applies an activation function to decide whether to "fire". Stacking perceptrons into layers forms an Artificial Neural Network (ANN).',
      analogy: 'Like a strict VIP bouncer assigning scores to your shoes, shirt, and ID — summing the scores, and only letting you in if the total exceeds the VIP threshold.',
      graphTitle: 'Single Neuron Computation',
    },
    lab: {
      instruction: 'Increase the bias slider. Watch how the neuron activation threshold shifts, making it fire (light up yellow) more easily.',
      label: 'Neuron Bias Voltage',
    },
    thinking: {
      scenario: 'You try to solve the XOR logic problem using a single perceptron layer. It always fails to converge. Why?',
      options: [
        'A single perceptron cannot solve XOR — the data is not linearly separable.',
        'You just need to tune the learning rate more aggressively.',
        'Use a sigmoid activation instead of a step function.',
      ],
      correctIndex: 0,
    },
    design: ['Inputs (x₁, x₂)', 'Multiply Weights (w₁, w₂)', 'Summation + Bias', 'Activation Function', 'Output Signal'],
    exam: {
      question: 'Describe the architecture of a perceptron. Why does it fail to compute the XOR logic gate? What architectural fix solves this? (10 Marks)',
    },
  },
  dl_t4: {
    title: 'Activation Functions',
    concept: {
      explanation: 'Activation functions introduce non-linearity, allowing networks to model complex patterns. ReLU (max(0,x)) is fast and avoids vanishing gradients. Sigmoid squashes to (0,1) for binary outputs. Tanh to (-1,1). Softmax converts logits to class probabilities for multiclass output.',
      analogy: 'Like dimmer switches on neurons — they decide HOW STRONGLY a neuron passes its signal forward, not just on or off.',
      graphTitle: 'ReLU vs Sigmoid vs Tanh Curves',
    },
    lab: {
      instruction: 'Switch between activation functions. Notice ReLU does not saturate for positive values, preventing vanishing gradients.',
      label: 'Activation Function Selector (0=ReLU, 50=Sigmoid, 100=Tanh)',
    },
    thinking: {
      scenario: 'Your deep network is very slow to train. Loss barely decreases after 100 epochs. You are using Sigmoid activations throughout.',
      options: [
        'Increase the number of epochs to allow convergence.',
        'Switch hidden layer activations to ReLU — Sigmoid causes vanishing gradients in deep networks.',
        'Reduce the network width by removing neurons.',
      ],
      correctIndex: 1,
    },
    design: ['Pre-activation (z = Wx + b)', 'Apply ReLU: max(0, z)', 'Non-linear Output', 'Propagate to Next Layer'],
    exam: {
      question: 'Explain the vanishing gradient problem. Why does ReLU largely solve it compared to Sigmoid? (5 Marks)',
    },
  },
  dl_t5: {
    title: 'Forward Propagation',
    concept: {
      explanation: 'Forward propagation passes the input through the network layer by layer: Z = W·X + B, then A = activation(Z). Each layer transforms the representation until the final output layer produces a prediction. No weights are updated yet — this is purely inference.',
      analogy: 'Like sending a message through a game of telephone — each player (layer) transforms the message slightly before passing it forward.',
      graphTitle: 'Layer-by-Layer Signal Flow',
    },
    lab: {
      instruction: 'Adjust the input value. Watch the signal propagate through each layer and observe how the output changes.',
      label: 'Input Signal Strength',
    },
    thinking: {
      scenario: 'You run forward propagation on your network and get a loss of 2.8. What information has NOT been computed yet?',
      options: [
        'The final output prediction.',
        'The gradients of loss with respect to each weight — those require backpropagation.',
        'The activation values at each hidden layer.',
      ],
      correctIndex: 1,
    },
    design: ['Input X', 'Layer 1: Z₁ = W₁X + B₁ → A₁ = ReLU(Z₁)', 'Layer 2: Z₂ = W₂A₁ + B₂ → A₂ = ReLU(Z₂)', 'Output: Ŷ = Softmax(Z₃)', 'Compute Loss L(Y, Ŷ)'],
    exam: {
      question: 'Trace forward propagation through a 2-hidden-layer network, writing out the matrix equation at each step. (5 Marks)',
    },
  },
  dl_t6: {
    title: 'Backpropagation',
    concept: {
      explanation: 'Backpropagation computes the gradient of the loss with respect to every weight using the chain rule. It flows the error signal backwards from output to input, layer by layer. Then Gradient Descent updates each weight: W = W - α·∂L/∂W.',
      analogy: 'Like a factory manager tracing a product defect backwards through the assembly line — identifying exactly which worker (weight) contributed to the error, then correcting each one proportionally.',
      graphTitle: 'Chain Rule Gradient Flow',
    },
    lab: {
      instruction: 'Adjust the learning rate α. Too high → overshoots minimum. Too low → extremely slow convergence. Find the sweet spot.',
      label: 'Learning Rate α',
    },
    thinking: {
      scenario: 'After backpropagation, the gradients of your first layers are all essentially 0. What problem is this?',
      options: [
        'The loss function is working correctly — zero gradients means convergence.',
        'Vanishing gradients — deep layers near the input receive negligible updates and barely learn.',
        'The learning rate is too high, causing gradient explosion.',
      ],
      correctIndex: 1,
    },
    design: ['Compute Loss L', 'Compute ∂L/∂Ŷ (Output Gradient)', 'Apply Chain Rule Backwards per Layer', 'Update Weights: W -= α·∂L/∂W'],
    exam: {
      question: 'Derive the weight update rule using backpropagation and Gradient Descent for a single-layer network with MSE loss. (10 Marks)',
    },
  },
  dl_t7: {
    title: 'Loss Functions',
    concept: {
      explanation: 'Loss functions measure the distance between predictions and ground truth. MSE (regression), Binary Cross-Entropy (binary classification), and Categorical Cross-Entropy (multi-class) are most common. The choice of loss function must match the problem type and output layer activation.',
      analogy: 'Like a score penalty system — the loss function tells you exactly HOW WRONG you were, so you know how much to correct your approach in each direction.',
      graphTitle: 'Loss Landscape Curvature',
    },
    lab: {
      instruction: 'Shift the prediction slider away from the true label. Watch the Cross-Entropy loss spike non-linearly — far-wrong predictions are penalized much more severely.',
      label: 'Predicted Probability',
    },
    thinking: {
      scenario: 'You are building a neural network to predict house prices (a continuous number). Which output activation and loss function should you use?',
      options: [
        'Softmax output + Cross-Entropy loss.',
        'No activation (linear output) + MSE loss.',
        'Sigmoid output + Binary Cross-Entropy loss.',
      ],
      correctIndex: 1,
    },
    design: ['Model Prediction Ŷ', 'Ground Truth Y', 'Compute Loss: MSE or Cross-Entropy', 'Backpropagate Gradient ∂L/∂W'],
    exam: {
      question: 'Explain why Cross-Entropy loss is preferred over MSE for classification tasks. What role does the log function play? (5 Marks)',
    },
  },
  dl_t8: {
    title: 'Learning Rate & Optimizers',
    concept: {
      explanation: 'The learning rate (α) controls update step size during Gradient Descent. Vanilla SGD is noisy. Momentum adds a velocity term. Adam (Adaptive Moment Estimation) combines momentum and adaptive per-parameter learning rates, making it the default choice for deep learning.',
      analogy: 'SGD is like a blindfolded hiker taking random-sized steps. Adam is like a GPS-guided hiker who takes large steps on flat terrain and tiny careful steps in valleys.',
      graphTitle: 'Optimizer Convergence Paths',
    },
    lab: {
      instruction: 'Adjust learning rate. Very small: Loss decreases too slowly. Very large: Loss oscillates wildly or diverges. Find the optimal range.',
      label: 'Learning Rate (log scale)',
    },
    thinking: {
      scenario: 'Your training loss oscillates wildly and never converges. Which hyperparameter is most likely the cause?',
      options: [
        'The learning rate is too high — the optimizer is overshooting the loss minimum.',
        'The batch size is too small.',
        'The model has too many layers.',
      ],
      correctIndex: 0,
    },
    design: ['Compute Gradient ∂L/∂W', 'Adam: Update Momentum m and Variance v', 'Compute Bias-Corrected Estimates', 'Update: W -= α · m̂/√(v̂+ε)'],
    exam: {
      question: 'Compare SGD, Momentum SGD, and Adam optimizers. Why is Adam typically preferred for training deep neural networks? (10 Marks)',
    },
  },
  dl_t9: {
    title: 'Regularization (Dropout & Batch Norm)',
    concept: {
      explanation: 'Dropout randomly sets a fraction of neuron activations to zero during training, forcing the network to learn redundant representations and preventing co-adaptation. Batch Normalization normalizes layer inputs, stabilizing training and allowing higher learning rates.',
      analogy: 'Dropout is like a sports team that randomly benches players each practice — every player must learn to play every position, making the whole team more robust to injury.',
      graphTitle: 'Dropout Neuron Masking',
    },
    lab: {
      instruction: 'Increase the dropout rate. Higher dropout = more regularization but also more noise during training. Find the balance.',
      label: 'Dropout Rate (0 = None, 100 = Extreme)',
    },
    thinking: {
      scenario: 'Your model perfectly fits training data but generalizes poorly. Adding L2 regularization did not help much. What else can you try?',
      options: [
        'Add more neurons to each layer.',
        'Add Dropout layers (e.g. 0.3–0.5 rate) between hidden layers.',
        'Remove the validation set from evaluation.',
      ],
      correctIndex: 1,
    },
    design: ['Training Pass', 'Apply Dropout Mask (zero out p% neurons)', 'Forward Pass with Masked Network', 'Backprop Through Remaining Neurons', 'Test Time: Use Full Network (scale by 1-p)'],
    exam: {
      question: 'Explain how Batch Normalization works. What problem does it solve and how does it speed up training? (5 Marks)',
    },
  },
  dl_t10: {
    title: 'Convolution & Pooling Layers',
    concept: {
      explanation: 'CNNs use learnable filters (kernels) that slide across the input image, computing dot products to detect local features like edges and textures. Pooling (Max/Average) down-samples feature maps, providing spatial invariance and reducing computation.',
      analogy: 'Like sweeping a flashlight systematically across a dark room — the kernel "lights up" specific patterns wherever it lands, building a complete spatial map of features.',
      graphTitle: 'Kernel Sliding Over Feature Map',
    },
    lab: {
      instruction: 'Slide the 3×3 kernel across the pixel grid. Watch how it extracts local features from each overlapping receptive field.',
      label: 'Kernel Sliding Position',
    },
    thinking: {
      scenario: 'Your image classifier fails when the object is shifted slightly to the left. What is missing from your architecture?',
      options: [
        'Your model needs a higher learning rate.',
        'Translation invariance — add Max Pooling layers to reduce positional sensitivity.',
        'Switch your output to a Softmax activation.',
      ],
      correctIndex: 1,
    },
    design: ['Input Image', 'Convolution Layer (3×3 Kernel)', 'ReLU Activation Feature Map', 'Max Pooling (2×2)', 'Flatten → Fully Connected Layer'],
    exam: {
      question: 'Explain Strides and Padding in a Convolutional layer. How do they affect the output feature map dimensions? (5 Marks)',
    },
  },
  dl_t11: {
    title: 'CNN Architectures (VGG, ResNet)',
    concept: {
      explanation: 'VGGNet uses very deep stacks of 3×3 convolutions showing depth improves accuracy. ResNet introduces skip connections (residual connections) that add the input directly to the output — solving the vanishing gradient problem and enabling training of 100+ layer networks.',
      analogy: 'ResNet is like a relay race where each runner can choose to pass the baton OR carry it themselves if the previous leg did all the work — no information is ever completely lost.',
      graphTitle: 'Residual Skip Connection Diagram',
    },
    lab: {
      instruction: 'Increase the network depth. Without skip connections (VGG-style) accuracy degrades at very high depth. Enable skip connections to see ResNet improvements.',
      label: 'Network Depth (Layers)',
    },
    thinking: {
      scenario: 'You add more layers to your plain CNN but accuracy starts decreasing. This is NOT overfitting. What is the issue?',
      options: [
        'Your dataset is too small for a deeper network.',
        'The degradation problem — very deep plain networks suffer from vanishing gradients. Use ResNet with skip connections.',
        'You should use a sigmoid output activation.',
      ],
      correctIndex: 1,
    },
    design: ['Input Image', 'Conv Block 1-2', 'Residual Block: F(x) + x', 'BatchNorm + ReLU', 'Global Average Pool → FC → Softmax'],
    exam: {
      question: 'What is the degradation problem in deep networks? How do ResNet skip connections address it mathematically? (10 Marks)',
    },
  },
  dl_t12: {
    title: 'Sequence Modeling & RNNs',
    concept: {
      explanation: 'RNNs process sequential data by maintaining a hidden state hₜ = tanh(Wxₜ + Uhₜ₋₁ + b). The hidden state acts as a memory, passing information from previous time steps to the current one. They are used in time-series prediction, language modeling, and speech recognition.',
      analogy: 'Like reading a novel — your understanding of each new word depends on all the words you have read before. The hidden state is your running mental model of the story so far.',
      graphTitle: 'Recurrent Hidden State Flow',
    },
    lab: {
      instruction: 'Increase the sequence length. Notice how information from early time steps fades (vanishes) in long sequences — the core limitation of vanilla RNNs.',
      label: 'Sequence Length (Time Steps)',
    },
    thinking: {
      scenario: 'You train a vanilla RNN on long text sequences but it forgets context from the beginning of each sentence. What is happening?',
      options: [
        'Your learning rate is too high, causing instability through long sequences.',
        'Vanishing gradients — gradients decay exponentially over long sequences, preventing learning of long-range dependencies.',
        'The batch size is not aligned with the sequence length.',
      ],
      correctIndex: 1,
    },
    design: ['Input Sequence x₁…xₜ', 'Embed Tokens', 'RNN Cell: hₜ = tanh(Wxₜ + Uhₜ₋₁)', 'Output at Each Step', 'Final Hidden State → Prediction'],
    exam: {
      question: 'Explain how an RNN processes a sequence. What is the role of the hidden state and what are its key limitations? (5 Marks)',
    },
  },
  dl_t13: {
    title: 'LSTMs & GRUs',
    concept: {
      explanation: 'LSTMs (Long Short-Term Memory) solve the vanishing gradient problem using gating mechanisms: Forget Gate (what to erase), Input Gate (what to store), Output Gate (what to expose). GRUs simplify this to two gates (Reset & Update) with fewer parameters but similar performance.',
      analogy: 'LSTM is like a meticulous note-taker with a highlighter, eraser, and sticky notes — deliberately deciding what to keep, what to forget, and what to highlight in their running notebook.',
      graphTitle: 'LSTM Gate Mechanism',
    },
    lab: {
      instruction: 'Adjust the forget gate bias. At zero, the cell forgets everything quickly. At maximum, it retains long-term context across hundreds of time steps.',
      label: 'Forget Gate Bias',
    },
    thinking: {
      scenario: 'You need to predict the next word in a paragraph. The context depends on the first sentence. Which architecture is best?',
      options: [
        'Vanilla RNN — simple and sufficient for any sequence task.',
        'LSTM or GRU — their gating mechanisms capture long-range dependencies that RNNs lose.',
        'Convolutional Network — CNNs handle all sequential data best.',
      ],
      correctIndex: 1,
    },
    design: ['Input xₜ + Previous hₜ₋₁', 'Forget Gate: f = σ(Wf·[hₜ₋₁, xₜ] + bf)', 'Input Gate: i = σ(Wi·…)', 'Cell Update: Cₜ = f⊙Cₜ₋₁ + i⊙tanh(…)', 'Output: hₜ = o⊙tanh(Cₜ)'],
    exam: {
      question: 'Compare LSTMs and GRUs. How do their gating mechanisms prevent the vanishing gradient problem in RNNs? (10 Marks)',
    },
  },
  dl_t14: {
    title: 'Vanishing Gradient Problem',
    concept: {
      explanation: 'During backpropagation through many layers or time steps, gradients are repeatedly multiplied by small values (< 1). This causes them to shrink exponentially, making early layers learn negligibly slowly. Exploding gradients (values > 1 repeated) are the opposite problem.',
      analogy: 'Like a game of telephone where each person whispers the message quieter than the person before them — by the end, no one can hear the original message at all.',
      graphTitle: 'Gradient Magnitude vs Layer Depth',
    },
    lab: {
      instruction: 'Increase the network depth. Watch how gradient magnitude at the first layer approaches zero, while later layers have strong gradients.',
      label: 'Network Depth',
    },
    thinking: {
      scenario: 'Your 15-layer network trains fine for the last 3 layers but the first 10 barely update. What solutions exist?',
      options: [
        'Increase the dataset size — shallow networks always converge with enough data.',
        'Use ReLU activations + Batch Normalization + skip connections (ResNet-style).',
        'Reduce the learning rate globally across all layers.',
      ],
      correctIndex: 1,
    },
    design: ['Loss at Output', 'Backprop: ∂L/∂W₁₅ (strong)', 'Backprop: ∂L/∂W₈ (medium)', 'Backprop: ∂L/∂W₁ (≈ 0)', 'Solution: Skip Connections / ReLU / BatchNorm'],
    exam: {
      question: 'Precisely explain why vanishing gradients occur during backpropagation. List three architectural solutions and explain each. (10 Marks)',
    },
  },
  dl_t15: {
    title: 'Encoder-Decoder Architecture',
    concept: {
      explanation: 'The encoder compresses the input sequence into a fixed-size context vector (latent representation). The decoder then generates the output sequence from this vector. Used in machine translation (seq2seq), text summarization, and image captioning.',
      analogy: 'Like a translator who first reads the entire foreign sentence to understand its full meaning (encoder), then speaks it aloud in the target language (decoder).',
      graphTitle: 'Sequence-to-Sequence Architecture',
    },
    lab: {
      instruction: 'Adjust the context vector size (bottleneck). Small size forces maximum compression — and information loss. Large vectors retain more detail.',
      label: 'Context Vector Dimension',
    },
    thinking: {
      scenario: 'Your seq2seq translation model works well for short sentences but badly for very long ones. What is the architectural bottleneck?',
      options: [
        'The decoder is not receiving the full training target.',
        'The fixed-size context vector cannot capture all information from long sequences — use Attention Mechanism instead.',
        'Your vocabulary embedding dimension is too small.',
      ],
      correctIndex: 1,
    },
    design: ['Source Sequence', 'Encoder LSTM → Context Vector', 'Decoder LSTM Start Token', 'Decoder Generates Output Token by Token', 'Stop at <EOS> Token'],
    exam: {
      question: 'Describe the encoder-decoder architecture for sequence-to-sequence learning. What is the information bottleneck and how does Attention address it? (10 Marks)',
    },
  },
  dl_t16: {
    title: 'Object Detection (YOLO, R-CNN)',
    concept: {
      explanation: 'Object detection simultaneously classifies objects AND predicts their bounding boxes. R-CNN uses region proposals then classifies each — accurate but slow. YOLO (You Only Look Once) divides the image into a grid and predicts boxes per cell in a single forward pass — extremely fast.',
      analogy: 'R-CNN is like a detective who methodically searches room by room. YOLO is like a security camera that scans the entire room simultaneously in one glance.',
      graphTitle: 'Bounding Box Prediction Grid',
    },
    lab: {
      instruction: 'Adjust the confidence threshold. Lower: more detections including weak ones (more false positives). Higher: only high-confidence boxes remain.',
      label: 'Detection Confidence Threshold',
    },
    thinking: {
      scenario: 'You need real-time object detection in an autonomous vehicle at 60 FPS. Which architecture should you use?',
      options: [
        'R-CNN — it is the most accurate algorithm available.',
        'YOLO — single-pass detection makes it fast enough for real-time applications.',
        'VGGNet — it handles spatial tasks best.',
      ],
      correctIndex: 1,
    },
    design: ['Input Image', 'Divide into S×S Grid', 'Each Cell Predicts B Boxes + Confidence + Class', 'Apply Non-Max Suppression (NMS)', 'Final Bounding Boxes'],
    exam: {
      question: 'Compare YOLO and R-CNN for object detection. Explain the speed vs accuracy tradeoff between the two approaches. (10 Marks)',
    },
  },
};
