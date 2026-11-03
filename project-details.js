/* ============================================================
   PROJECT DETAILS — full write-ups shown on project.html.
   Keyed by the project id used in projects.js.

   Each section is an array of "blocks":
     "text"                        -> paragraph
     { h: "Subheading" }           -> subheading
     { ul: ["item", "item"] }      -> bullet list
     { table: { head: [..], rows: [[..], [..]] } }
     { code: "formula or snippet" }
   Sections: overview, problem, dataset, preprocessing, methodology,
   implementation, experiments, results, conclusion.
   `visuals: [{ src, alt }]` adds real plots/screenshots to the
   Results section (empty = placeholder).
   ============================================================ */
const DETAILS = {
  "car-price-prediction": {
    overview: [
      "This project predicts the selling price of used cars from features such as manufacturing year, kilometers driven, fuel type, transmission, ownership history, and other vehicle characteristics.",
      "The main objective was to understand how Linear Regression works by implementing the algorithm from scratch using NumPy and comparing its performance with Scikit-learn's implementation.",
    ],
    problem: [
      "Estimating the market value of a used car is challenging because its price depends on multiple factors.",
      "The goal is to build a regression model that learns the relationship between vehicle characteristics and selling prices, then uses it to predict prices for unseen cars.",
    ],
    dataset: [
      { ul: ["Dataset: Car Details Dataset (Kaggle)", "Number of records: 4,340", "Original features: 8 columns", "Target variable: selling_price"] },
      { table: { head: ["Feature", "Description"], rows: [
        ["Name", "Car brand and model"],
        ["Year", "Manufacturing year"],
        ["km_driven", "Distance driven"],
        ["fuel", "Fuel type"],
        ["seller_type", "Type of seller"],
        ["transmission", "Manual or automatic"],
        ["owner", "Previous ownership history"],
        ["selling_price", "Target variable"],
      ] } },
    ],
    preprocessing: [
      { ul: [
        "Handling categorical variables using One-Hot Encoding",
        "Extracting car brands from the car name",
        "Converting categorical features into numerical representations",
        "Selecting relevant features for training",
        "Applying a log1p transformation to the target variable to reduce price skewness",
        "Splitting the dataset into training and testing sets",
        "Setting a fixed random seed for reproducibility",
      ] },
    ],
    methodology: [
      "The main algorithm is Linear Regression. Two implementations were compared:",
      { ul: [
        "From scratch: Linear Regression implemented with NumPy and Gradient Descent",
        "Scikit-learn: the built-in LinearRegression implementation",
      ] },
      "The objective was to understand the mathematical foundation behind the algorithm rather than relying entirely on existing libraries.",
    ],
    implementation: [
      { ul: [
        "Implementing the prediction function",
        "Calculating the Mean Squared Error loss",
        "Computing gradients",
        "Updating weights and bias using Gradient Descent",
        "Training the model",
        "Comparing predictions from both implementations",
      ] },
    ],
    experiments: [
      "The main experiment compares Linear Regression implemented from scratch against Scikit-learn's Linear Regression. Both approaches use the same dataset and preprocessing pipeline so the comparison is meaningful.",
    ],
    results: [
      "Evaluation metrics: Mean Squared Error (MSE), Mean Absolute Error (MAE), and R² Score.",
      "The project includes these visualizations:",
      { ul: ["Actual vs. Predicted Prices", "Prediction Error Distribution", "Regression Performance Comparison", "Training Loss Curve"] },
    ],
    visuals: [
      {src: "images/car-dataset.jpeg", alt: "results"}
    ],
    conclusion: [
      "This project provided practical experience with Linear Regression, Gradient Descent, feature engineering, and categorical data preprocessing.",
      { h: "Limitations" },
      { ul: [
        "Linear Regression assumes a linear relationship between features and the target",
        "Used-car prices can be influenced by factors not available in the dataset",
        "Outliers and market fluctuations can affect prediction accuracy",
      ] },
    ],
  },

  "concrete-strength-prediction": {
    overview: [
      "This project predicts the compressive strength of concrete from its ingredients and curing age.",
      "It explores how different polynomial degrees affect regression performance and how model complexity influences the ability to capture nonlinear relationships.",
    ],
    problem: [
      "Concrete strength depends on several factors, including cement content, water quantity, aggregates, and curing age. The objective is to build a regression model that predicts compressive strength from these inputs.",
      "An additional objective is to investigate whether Polynomial Regression can capture relationships that a basic Linear Regression model might fail to represent.",
    ],
    dataset: [
      { ul: ["Dataset: Concrete Compressive Strength Dataset", "Number of observations: 1,030", "Input features: 8", "Target variable: concrete compressive strength"] },
      { table: { head: ["Feature", "Description"], rows: [
        ["Cement", "Cement quantity"],
        ["Blast Furnace Slag", "Slag quantity"],
        ["Fly Ash", "Fly ash quantity"],
        ["Water", "Water quantity"],
        ["Superplasticizer", "Chemical additive quantity"],
        ["Coarse Aggregate", "Coarse aggregate quantity"],
        ["Fine Aggregate", "Fine aggregate quantity"],
        ["Age", "Concrete curing age"],
        ["Strength", "Compressive strength (target)"],
      ] } },
    ],
    preprocessing: [
      { ul: [
        "Separating input features from the target variable",
        "Splitting data into training and testing sets",
        "Applying StandardScaler to normalize feature scales",
        "Preparing polynomial features for different polynomial degrees",
        "Using cross-validation to evaluate model performance more reliably",
      ] },
      "Preprocessing transformations were fitted on training data only, to avoid data leakage.",
    ],
    methodology: [
      { h: "Linear Regression" },
      "Used as a baseline model to understand the relationship between the input features and concrete strength.",
      { h: "Polynomial Regression" },
      "Polynomial features are generated so the model can capture nonlinear relationships. The experiments investigate four different polynomial degrees.",
    ],
    implementation: [
      { ul: [
        "Loading the dataset using Pandas",
        "Scaling numerical features using Scikit-learn",
        "Generating polynomial features",
        "Training regression models",
        "Evaluating models using cross-validation",
        "Comparing performance across polynomial degrees",
      ] },
    ],
    experiments: [
      "The main experiment compares different polynomial degrees using 5-fold cross-validation. It investigates:",
      { ul: [
        "How increasing polynomial degree affects model performance",
        "Whether higher-degree models improve predictive accuracy",
        "Whether increasing model complexity introduces overfitting",
      ] },
    ],
    results: [
      "Evaluation metrics: R² Score, Mean Squared Error (MSE), and Mean Absolute Error (MAE).",
      "The project includes these visualizations:",
      { ul: ["Feature Correlation Heatmap", "Actual vs. Predicted Strength", "Performance Comparison Across Polynomial Degrees", "Cross-Validation Results"] },
    ],
    visuals: [
      {src: "images/concrete-dataset.jpeg", alt: "results using multiple degrees of polynomial"}
    ],
    conclusion: [
      "This project showed how feature engineering and polynomial transformations can improve a regression model's ability to capture nonlinear relationships. It also highlighted the importance of balancing model complexity and generalization.",
      { h: "Limitations" },
      { ul: [
        "Higher polynomial degrees can introduce overfitting",
        "Polynomial feature generation increases dimensionality",
        "Predictions are limited by the quality and distribution of the available dataset",
      ] },
    ],
  },

  "gradient-descent-optimizers": {
    overview: [
      "This project explores the optimization algorithms used to train Machine Learning models. Rather than building a single predictive application, it investigates how different optimization strategies update model parameters and minimize the loss function.",
      "The experiments cover Batch Gradient Descent, Stochastic Gradient Descent, Mini-Batch Gradient Descent, Momentum, RMSProp, and Adam.",
    ],
    problem: [
      "Training a Machine Learning model requires finding parameters that minimize a loss function. Different optimization algorithms behave differently in convergence speed, stability, computational cost, and sensitivity to learning rates.",
      "The objective is to understand these differences through mathematical analysis and practical experiments.",
    ],
    dataset: [
      "The project includes two experimental setups.",
      { h: "Experiment A: California Housing Dataset" },
      { ul: ["20,640 observations", "8 input features", "Target: median house value"] },
      "This dataset was used to compare Gradient Descent approaches on a real-world regression problem.",
      { h: "Experiment B: Synthetic Dataset" },
      "A controlled synthetic dataset was generated with NumPy, which makes optimizer behavior easier to study.",
      { ul: ["256 samples", "2 input features", "Correlation between features: 0.98", "Added Gaussian noise", "Known underlying weights and bias"] },
    ],
    preprocessing: [
      { h: "California Housing experiment" },
      { ul: [
        "Splitting data into training and testing sets",
        "Preparing numerical features",
        "Ensuring consistent experimental conditions across optimizers",
      ] },
      { h: "Synthetic experiment" },
      { ul: [
        "Generating reproducible data using a fixed random seed",
        "Defining known weights and bias",
        "Adding noise to simulate realistic observations",
        "Preparing mini-batches for training",
      ] },
    ],
    methodology: [
      { table: { head: ["Algorithm", "Main concept"], rows: [
        ["Batch Gradient Descent", "Uses the entire dataset to calculate gradients."],
        ["Stochastic Gradient Descent", "Updates parameters using one sample at a time."],
        ["Mini-Batch GD", "Uses small batches of samples."],
        ["Momentum", "Uses previous updates to accelerate optimization."],
        ["RMSProp", "Adapts learning rates using moving averages of squared gradients."],
        ["Adam", "Combines Momentum and RMSProp concepts."],
      ] } },
    ],
    implementation: [
      "The experiments were implemented in Python with NumPy. The implementation focuses on:",
      { ul: [
        "Calculating loss functions",
        "Computing gradients",
        "Updating weights and bias",
        "Implementing different parameter update rules",
        "Tracking loss values across epochs",
        "Comparing optimizer convergence behavior",
      ] },
    ],
    experiments: [
      { h: "Experiment 1: Gradient Descent variations" },
      "Compares Batch, Stochastic, and Mini-Batch Gradient Descent, investigating the relationship between batch size, convergence, and computational efficiency.",
      { h: "Experiment 2: Mini-Batch GD vs. GD with Momentum" },
      "A synthetic dataset with highly correlated features is used to investigate how Momentum influences optimization behavior.",
      { h: "Experiment 3: Optimizer theoretical comparison" },
      "Studies the mathematical differences between Gradient Descent variations, Momentum, RMSProp, and Adam.",
    ],
    results: [
      "The experiments evaluate training loss over epochs, convergence speed, final loss values, optimization stability, and differences in parameter updates.",
      "Results for the California Housing experiment:",
      { table: { head: ["Algorithm", "MSE", "R²"], rows: [
        ["Batch GD", "0.46292", "0.65607"],
        ["SGD", "0.47347", "0.64823"],
        ["Mini-Batch GD", "0.46328", "0.65580"],
      ] } },
      "The project includes these visualizations:",
      { ul: ["Loss Convergence Curves", "Optimizer Performance Comparison", "Momentum vs. Mini-Batch GD", "Parameter Update Behavior"] },
    ],
    visuals: [
      {src: "images/gradient-descent-variations.jpeg", alt: "evaluations"}
    ],
    conclusion: [
      "These experiments gave a deeper understanding of how optimization algorithms influence Machine Learning training. No optimizer is universally the best choice: performance depends on the dataset, learning rate, batch size, model architecture, and other hyperparameters.",
      { h: "Limitations" },
      { ul: [
        "The experiments cover a limited number of datasets",
        "Results depend on the selected hyperparameters",
        "Synthetic datasets cannot represent every real-world optimization challenge",
        "The theoretical comparison does not replace empirical evaluation across different models",
      ] },
    ],
  },

  "iris-perceptron": {
    overview: [
      "This project implements the Perceptron algorithm from scratch with Python and NumPy to classify Iris flowers from their physical measurements.",
      "The main objective is to understand the mathematical foundations of binary classification and to explore how a binary classifier can be extended to multiclass problems.",
    ],
    problem: [
      "The Iris dataset contains measurements of different Iris flower species. The goal is to build a classification model that predicts the species from sepal and petal measurements.",
      "The project investigates three scenarios:",
      { ul: ["Setosa vs. Versicolor", "Versicolor vs. Virginica", "Multiclass classification using One-vs-Rest (OvR)"] },
    ],
    dataset: [
      { ul: ["Dataset: Iris Dataset", "Number of observations: 150", "Input features: 4", "Target variable: flower species", "Number of classes: 3 (Iris Setosa, Iris Versicolor, Iris Virginica)"] },
      { table: { head: ["Feature", "Description"], rows: [
        ["SepalLengthCm", "Sepal length"],
        ["SepalWidthCm", "Sepal width"],
        ["PetalLengthCm", "Petal length"],
        ["PetalWidthCm", "Petal width"],
        ["Species", "Flower species"],
      ] } },
    ],
    preprocessing: [
      { ul: [
        "Loading the CSV dataset using Pandas",
        "Removing the unnecessary Id column",
        "Separating features and target labels",
        "Splitting the data into training and testing sets",
        "Using stratified splitting to preserve class proportions",
        "Standardizing features using StandardScaler",
        "Preparing binary labels for the individual experiments",
      ] },
    ],
    methodology: [
      { h: "Perceptron algorithm" },
      "The Perceptron is a linear binary classification algorithm. It calculates a weighted sum of the input features and uses an activation function to predict the class. The model updates its weights whenever it misclassifies a training sample.",
      { code: "w ← w + η (y − ŷ) x\nb ← b + η (y − ŷ)" },
      { ul: ["w: weights", "b: bias", "η: learning rate", "y: actual label", "ŷ: predicted label", "x: input features"] },
      { h: "One-vs-Rest (OvR)" },
      "To handle multiclass classification, three binary classifiers are trained instead of one. Each classifier learns to distinguish one class from the remaining classes.",
    ],
    implementation: [
      "The Perceptron was implemented from scratch with NumPy. The implementation includes:",
      { ul: [
        "Model initialization, including weight and bias initialization",
        "Forward prediction and the activation function",
        "Weight and bias updates",
        "The training loop with early stopping",
        "Training history tracking",
      ] },
      "The project is organized into separate modules:",
      { table: { head: ["File", "Responsibility"], rows: [
        ["main.py", "Runs the experiments"],
        ["src/data_preprocessing.py", "Loads, splits, and scales data"],
        ["src/experiments.py", "Executes classification experiments"],
        ["data/Iris.csv", "Dataset"],
        ["results/", "Stores experiment outputs and visualizations"],
      ] } },
    ],
    experiments: [
      { h: "Experiment 1: Setosa vs. Versicolor" },
      "Trains a binary Perceptron to distinguish between two Iris species.",
      { h: "Experiment 2: Versicolor vs. Virginica" },
      "Investigates another binary problem, including the challenge of separating more similar classes.",
      { h: "Experiment 3: One-vs-Rest classification" },
      "Extends the binary Perceptron into a three-class classification system.",
    ],
    results: [
      "Evaluation metrics: Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.",
      "The project includes these visualizations:",
      { ul: ["Training Loss / Error History", "Decision Boundaries", "Classification Results", "Confusion Matrices", "Comparison Between Binary Experiments"] },
      "These visualizations explain not only how well the model performs but also how it separates the different classes.",
    ],
    visuals: [],
    conclusion: [
      "This project provided practical experience implementing a classification algorithm from scratch and understanding how binary classification extends to multiclass problems. It also demonstrated the importance of preprocessing, feature scaling, and evaluation metrics.",
      { h: "Limitations" },
      { ul: [
        "The Perceptron is a linear classifier",
        "It cannot reliably solve non-linearly separable problems",
        "One-vs-Rest can run into limitations when multiple classifiers have overlapping decision regions",
        "Performance depends on learning rate, training order, and other hyperparameters",
      ] },
    ],
  },
};
