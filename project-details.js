/* PROJECT DETAILS — full write-ups shown on project.html, keyed by project id (see projects.js).
   Blocks: "text" | { h } | { ul: [] } | { table: { head, rows } } | { code }
   Sections: overview, problem, dataset, preprocessing, methodology, implementation,
   experiments, results, conclusion. `visuals: [{ src, alt }]` adds real plots to Results. */
const DETAILS = {
  "car-price-prediction": {
    overview: ["A Machine Learning regression project that predicts used car selling prices from vehicle characteristics such as manufacturing year, kilometers driven, fuel type, transmission, ownership history, and brand."],
    problem: ["Develop a regression model that estimates used car prices by learning patterns and relationships from historical vehicle data."],
    dataset: ["Used car dataset (car_data.csv) containing vehicle specifications and selling prices."],
    preprocessing: [{ ul: [
      "Selected relevant numerical and categorical features",
      "Extracted car brands through feature engineering",
      "Applied One-Hot Encoding to categorical features",
      "Applied a logarithmic transformation to the target variable",
      "Split data into 80% training and 20% testing",
      "Standardized numerical features",
      "Added a bias term",
    ] }],
    methodology: ["Multiple Linear Regression implemented from scratch using NumPy, optimized with Batch Gradient Descent and Mean Squared Error (MSE) as the cost function."],
    implementation: [
      "The training algorithm was developed manually, including weight initialization, prediction, gradient calculation, and iterative weight updates.",
      { h: "Training configuration" },
      { ul: ["Learning rate: 0.01", "Epochs: 3,000", "Optimization: Batch Gradient Descent"] },
    ],
    experiments: [
      "Model performance was evaluated on the held-out test set. Training cost progression was examined, and actual prices were compared with predicted prices.",
      "Predictions were also benchmarked against Scikit-learn's Linear Regression (as listed in the CV).",
    ],
    results: [
      "Evaluation metrics:",
      { ul: ["R² Score", "Mean Absolute Error (MAE)", "Root Mean Squared Error (RMSE)"] },
    ],
    visuals: [],
    conclusion: [
      "This project provided practical experience implementing Linear Regression from scratch and understanding its mathematical foundations, optimization process, and the complete machine learning workflow.",
      { h: "Limitations" },
      { ul: ["Assumes a linear relationship between features and target", "Limited feature engineering", "No cross-validation or hyperparameter tuning", "No regularization techniques"] },
    ],
  },

  "concrete-strength-prediction": {
    overview: ["A Machine Learning regression project that predicts concrete compressive strength from its composition: cement, slag, fly ash, water, aggregates, superplasticizer, and curing age."],
    problem: ["Develop a regression model that estimates concrete compressive strength, and investigate how nonlinear relationships between material components affect prediction accuracy."],
    dataset: ["The Concrete Compressive Strength dataset (Concrete_Data.xls), with eight input features and one target variable: strength (MPa)."],
    preprocessing: [{ ul: [
      "Renamed dataset columns for clarity",
      "Checked missing values and duplicate records, and removed duplicate rows",
      "Performed exploratory data analysis (EDA)",
      "Generated feature distributions, a correlation heatmap, and boxplots",
      "Split data into 80% training and 20% testing",
      "Applied polynomial feature expansion and StandardScaler",
    ] }],
    methodology: [
      "Polynomial Regression implemented with Scikit-learn to capture nonlinear relationships between concrete composition and compressive strength.",
      "Polynomial degrees 1, 2, 3, and 4 were tested to identify the most suitable model complexity.",
    ],
    implementation: [
      "A complete regression pipeline built with Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.",
      "The best model was selected using 5-Fold Cross-Validation R² scores.",
    ],
    experiments: ["Compared polynomial degrees 1 to 4 using training, testing, and cross-validation performance."],
    results: [
      "Evaluation metrics:",
      { ul: ["R² Score", "Root Mean Squared Error (RMSE)", "Mean Absolute Error (MAE)", "5-Fold Cross-Validation"] },
      "Visualizations compare training, testing, and cross-validation performance across polynomial degrees, alongside actual versus predicted concrete strength.",
    ],
    visuals: [],
    conclusion: [
      "This project shows how polynomial feature expansion can capture nonlinear relationships in regression problems, and highlights the importance of model complexity, cross-validation, and performance evaluation when selecting a model.",
      { h: "Limitations" },
      { ul: ["Higher polynomial degrees can introduce overfitting", "Polynomial expansion significantly increases the number of features", "Performance depends on the quality and representativeness of the dataset", "No hyperparameter tuning beyond polynomial degree selection"] },
    ],
  },

  "gradient-descent-optimizers": {
    overview: ["A Machine Learning regression project that predicts median house values in California from housing and demographic features. It focuses on implementing and comparing three Gradient Descent optimization algorithms from scratch."],
    problem: ["Develop a Linear Regression model for California housing prices and investigate how different optimization algorithms affect convergence, prediction accuracy, and training time."],
    dataset: [
      "The California Housing dataset (california_housing.csv), with eight input features including median income, house age, average rooms, population, latitude, and longitude.",
      { ul: ["Target variable: MedHouseVal"] },
    ],
    preprocessing: [{ ul: [
      "Removed missing values",
      "Split data into 80% training and 20% testing",
      "Applied percentile-based outlier clipping (1st to 99th percentiles)",
      "Standardized numerical features",
      "Added a bias (intercept) term",
    ] }],
    methodology: [
      "Three optimization algorithms were implemented and compared for Linear Regression. All of them minimize Mean Squared Error (MSE).",
      { table: { head: ["Algorithm", "Weight updates use"], rows: [
        ["Batch Gradient Descent (BGD)", "The entire training dataset"],
        ["Stochastic Gradient Descent (SGD)", "One sample at a time"],
        ["Mini-Batch Gradient Descent (MBGD)", "Small batches of training samples"],
      ] } },
    ],
    implementation: ["Linear Regression and all three optimizers were implemented from scratch with NumPy, without relying on Scikit-learn for model training. The implementation includes prediction, cost calculation, gradient computation, convergence monitoring, execution-time measurement, and model evaluation."],
    experiments: [
      "The three optimizers were compared on:",
      { ul: ["Test MSE", "Test R² Score", "Training time", "Number of epochs to converge", "Final training cost"] },
    ],
    results: ["Visualizations compare convergence behavior, training loss, prediction performance, and computational efficiency."],
    visuals: [],
    conclusion: [
      "This project demonstrates the practical differences between Batch, Stochastic, and Mini-Batch Gradient Descent, and the trade-offs between optimization stability, convergence speed, computational efficiency, and prediction performance.",
      { h: "Limitations" },
      { ul: ["Uses a basic Linear Regression model with linear assumptions", "Outlier clipping may remove useful extreme-value information", "Performance depends on learning-rate and optimizer configurations", "No cross-validation or systematic hyperparameter tuning", "Does not explore regularization or nonlinear regression models"] },
    ],
  },

  "momentum-vs-mbgd": {
    overview: ["A Machine Learning optimization experiment comparing Mini-Batch Gradient Descent (MBGD) with Mini-Batch Gradient Descent with Momentum on a synthetic linear regression dataset."],
    problem: ["Investigate how Momentum affects the optimization process, particularly when input features are highly correlated, and evaluate its impact on convergence speed, gradient stability, and parameter updates."],
    dataset: [
      "A synthetic dataset generated with NumPy:",
      { ul: ["256 samples and 2 numerical features", "Feature correlation of 0.98", "Gaussian noise with a standard deviation of 0.5", "Known ground-truth weights and bias for comparison"] },
    ],
    preprocessing: [{ ul: [
      "Generated correlated features using a multivariate normal distribution",
      "Standardized input features",
      "Added Gaussian noise to the target variable",
      "Generated shuffled mini-batches shared between both optimization experiments",
    ] }],
    methodology: [
      "Two optimization algorithms were implemented and compared. Both use Mean Squared Error (MSE) as the loss function.",
      { table: { head: ["Algorithm", "Main concept"], rows: [
        ["Mini-Batch GD (MBGD)", "Updates parameters using small batches of training samples."],
        ["MBGD with Momentum", "Adds a velocity term that accumulates previous gradients to smooth updates and reduce oscillations."],
      ] } },
    ],
    implementation: ["The complete experiment was implemented from scratch using NumPy, Pandas, and Matplotlib. It includes synthetic data generation, gradient and loss calculations, parameter updates, optimization tracking, and visualization of the learning process."],
    experiments: [
      "Both optimizers were compared using:",
      { ul: ["Training loss (MSE) across epochs", "Weight and bias convergence", "Optimization trajectories on the loss surface", "Gradient and velocity magnitudes", "Parameter update sizes", "Zig-zag score to measure direction reversals"] },
    ],
    results: ["Visualizations show the learning process of both optimizers, including loss curves, convergence of weights and bias, and trajectories on the loss surface."],
    visuals: [],
    conclusion: [
      "This experiment demonstrates how Momentum influences Mini-Batch Gradient Descent on highly correlated features, giving a practical understanding of gradient accumulation, optimization stability, and parameter update behavior.",
      { h: "Limitations" },
      { ul: ["Uses a synthetic dataset rather than real-world data", "Limited to linear regression with two features", "Results depend on manually selected hyperparameters", "Does not compare Momentum against other optimizers such as RMSProp and Adam"] },
    ],
  },

  "iris-perceptron": {
    overview: ["The Perceptron algorithm implemented from scratch with NumPy to solve binary and multiclass classification problems on the Iris dataset."],
    problem: ["Classify Iris flowers into species from their physical measurements using a linear classification algorithm."],
    dataset: ["The Iris dataset contains 150 samples, three flower species, and four numerical features: sepal length, sepal width, petal length, and petal width."],
    preprocessing: [{ ul: [
      "Removed unnecessary columns",
      "Selected features and target labels",
      "Applied label encoding",
      "Split data into training and testing sets",
      "Standardized numerical features",
    ] }],
    methodology: ["The Perceptron algorithm was implemented from scratch and extended to multiclass classification using the One-vs-Rest (OvR) strategy."],
    implementation: ["A modular Python project using NumPy, Pandas, Matplotlib, and Scikit-learn preprocessing utilities."],
    experiments: [
      "Three classification experiments:",
      { ul: ["Setosa vs. Versicolor", "Versicolor vs. Virginica", "Multiclass classification using One-vs-Rest"] },
    ],
    results: [
      "Performance was evaluated with:",
      { ul: ["Accuracy", "Precision", "Recall", "F1-score", "Confusion Matrices"] },
    ],
    visuals: [],
    conclusion: [
      "This project gave practical experience in linear classification, weight optimization, binary and multiclass learning, and implementing fundamental machine learning algorithms from scratch.",
      { h: "Limitations" },
      { ul: ["Supports linear decision boundaries only", "May not converge on non-linearly separable data", "Sensitive to learning-rate selection", "Does not provide probability estimates"] },
    ],
  },
};
