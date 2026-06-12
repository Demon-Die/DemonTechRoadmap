import { RoadmapPageShell } from "../../../components/roadmap/RoadmapPageShell";
import type { ReadinessMetric, RoadmapNode, RoadmapPath, StageSummary, ProjectTrack } from "../../../components/roadmap/RoadmapPageShell";

const stageSummaries: StageSummary[] = [
  {
    stage: "Beginner",
    duration: "22-26 weeks",
    outcome: "Understand the data science lifecycle, math, statistics, Python, Git, and core analytical libraries.",
  },
  {
    stage: "Intermediate",
    duration: "28-34 weeks",
    outcome: "Collect, clean, explore, query, engineer, train, evaluate, and communicate with real datasets.",
  },
  {
    stage: "Advanced",
    duration: "34-40 weeks",
    outcome: "Build deep learning, computer vision, NLP, GenAI, big data, MLOps, cloud, and data engineering workflows.",
  },
  {
    stage: "Expert",
    duration: "24-30 weeks",
    outcome: "Design production AI systems, research experiments, responsible data governance, and executive-grade data narratives.",
  },
];

const roadmapNodes: RoadmapNode[] = [
  {
    "id": "data-science-fundamentals",
    "title": "Data Science Fundamentals",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "1 week",
    "description": "Data Science Fundamentals connects What is Data Science, Data Science Lifecycle, Types of Data into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Curiosity, spreadsheet comfort, and basic analytical thinking"
    ],
    "topics": [
      "What is Data Science",
      "Data Science Lifecycle",
      "Types of Data",
      "Structured vs Unstructured Data",
      "Data-Driven Decision Making"
    ],
    "skillsGained": [
      "Apply What is Data Science in notebook and production workflows",
      "Use Data Science Lifecycle to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Science Fundamentals fits into the data science lifecycle",
      "Complete a dataset challenge using What is Data Science",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Google Data Science guide",
        "href": "https://developers.google.com/machine-learning/guides/rules-of-ml",
        "category": "Official Documentation"
      },
      {
        "label": "Kaggle Learn",
        "href": "https://www.kaggle.com/learn",
        "category": "Kaggle Resources"
      },
      {
        "label": "Data Science Handbook",
        "href": "https://jakevdp.github.io/PythonDataScienceHandbook/",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Iris dataset.",
      "Write an analysis note comparing What is Data Science and Data Science Lifecycle.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data science fundamentals notebook using Iris dataset.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Science Fundamentals would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "mathematics-for-data-science",
    "title": "Mathematics for Data Science",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "4 weeks",
    "description": "Mathematics for Data Science connects Algebra, Linear Algebra, Calculus Basics into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Science Fundamentals"
    ],
    "topics": [
      "Algebra",
      "Linear Algebra",
      "Calculus Basics",
      "Matrices",
      "Vectors"
    ],
    "skillsGained": [
      "Apply Algebra in notebook and production workflows",
      "Use Linear Algebra to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Mathematics for Data Science fits into the data science lifecycle",
      "Complete a dataset challenge using Algebra",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Khan Academy linear algebra",
        "href": "https://www.khanacademy.org/math/linear-algebra",
        "category": "Courses"
      },
      {
        "label": "3Blue1Brown linear algebra",
        "href": "https://www.3blue1brown.com/topics/linear-algebra",
        "category": "Courses"
      },
      {
        "label": "Mathematics for ML book",
        "href": "https://mml-book.github.io/",
        "category": "Research Papers"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Titanic dataset.",
      "Write an analysis note comparing Algebra and Linear Algebra.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a mathematics for data science notebook using Titanic dataset.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Mathematics for Data Science would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "statistics-fundamentals",
    "title": "Statistics Fundamentals",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "4 weeks",
    "description": "Statistics Fundamentals connects Descriptive Statistics, Probability, Distributions into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Mathematics for Data Science"
    ],
    "topics": [
      "Descriptive Statistics",
      "Probability",
      "Distributions",
      "Sampling",
      "Hypothesis Testing",
      "Confidence Intervals"
    ],
    "skillsGained": [
      "Apply Descriptive Statistics in notebook and production workflows",
      "Use Probability to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Statistics Fundamentals fits into the data science lifecycle",
      "Complete a dataset challenge using Descriptive Statistics",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "OpenIntro Statistics",
        "href": "https://www.openintro.org/book/os/",
        "category": "Courses"
      },
      {
        "label": "Seeing Theory",
        "href": "https://seeing-theory.brown.edu/",
        "category": "Courses"
      },
      {
        "label": "StatQuest",
        "href": "https://www.youtube.com/user/joshstarmer",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Student performance data.",
      "Write an analysis note comparing Descriptive Statistics and Probability.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a statistics fundamentals notebook using Student performance data.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Statistics Fundamentals would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "python-fundamentals",
    "title": "Python Fundamentals",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "3 weeks",
    "description": "Python Fundamentals connects Variables, Functions, Loops into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Statistics Fundamentals"
    ],
    "topics": [
      "Variables",
      "Functions",
      "Loops",
      "OOP",
      "Error Handling"
    ],
    "skillsGained": [
      "Apply Variables in notebook and production workflows",
      "Use Functions to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Python Fundamentals fits into the data science lifecycle",
      "Complete a dataset challenge using Variables",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Python docs",
        "href": "https://docs.python.org/3/tutorial/",
        "category": "Official Documentation"
      },
      {
        "label": "Automate the Boring Stuff",
        "href": "https://automatetheboringstuff.com/",
        "category": "Courses"
      },
      {
        "label": "Exercism Python",
        "href": "https://exercism.org/tracks/python",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the COVID public data.",
      "Write an analysis note comparing Variables and Functions.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a python fundamentals notebook using COVID public data.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Python Fundamentals would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "data-structures-and-algorithms",
    "title": "Data Structures & Algorithms",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "3 weeks",
    "description": "Data Structures & Algorithms connects Arrays, Linked Lists, Hash Maps into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Python Fundamentals"
    ],
    "topics": [
      "Arrays",
      "Linked Lists",
      "Hash Maps",
      "Sorting",
      "Searching"
    ],
    "skillsGained": [
      "Apply Arrays in notebook and production workflows",
      "Use Linked Lists to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Structures & Algorithms fits into the data science lifecycle",
      "Complete a dataset challenge using Arrays",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "The Algorithms",
        "href": "https://the-algorithms.com/",
        "category": "Community Resources"
      },
      {
        "label": "VisuAlgo",
        "href": "https://visualgo.net/",
        "category": "Courses"
      },
      {
        "label": "LeetCode",
        "href": "https://leetcode.com/",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Iris dataset.",
      "Write an analysis note comparing Arrays and Linked Lists.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data structures & algorithms notebook using Iris dataset.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Structures & Algorithms would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "git-and-github",
    "title": "Git & GitHub",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "1 week",
    "description": "Git & GitHub connects Version Control, Branching, Collaboration into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Structures & Algorithms"
    ],
    "topics": [
      "Version Control",
      "Branching",
      "Collaboration"
    ],
    "skillsGained": [
      "Apply Version Control in notebook and production workflows",
      "Use Branching to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Git & GitHub fits into the data science lifecycle",
      "Complete a dataset challenge using Version Control",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Git docs",
        "href": "https://git-scm.com/doc",
        "category": "Official Documentation"
      },
      {
        "label": "GitHub Skills",
        "href": "https://skills.github.com/",
        "category": "Courses"
      },
      {
        "label": "DemonTech Git roadmap",
        "href": "/roadmaps/git",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Titanic dataset.",
      "Write an analysis note comparing Version Control and Branching.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a git & github notebook using Titanic dataset.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Git & GitHub would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "python-libraries",
    "title": "Python Libraries",
    "stage": "Beginner",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Python Libraries connects NumPy, Pandas, Matplotlib into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Git & GitHub"
    ],
    "topics": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    "skillsGained": [
      "Apply NumPy in notebook and production workflows",
      "Use Pandas to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Python Libraries fits into the data science lifecycle",
      "Complete a dataset challenge using NumPy",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "NumPy docs",
        "href": "https://numpy.org/doc/",
        "category": "Official Documentation"
      },
      {
        "label": "Pandas docs",
        "href": "https://pandas.pydata.org/docs/",
        "category": "Official Documentation"
      },
      {
        "label": "Matplotlib docs",
        "href": "https://matplotlib.org/stable/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Student performance data.",
      "Write an analysis note comparing NumPy and Pandas.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a python libraries notebook using Student performance data.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Python Libraries would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "data-collection",
    "title": "Data Collection",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "2 weeks",
    "description": "Data Collection connects APIs, Web Scraping, Data Sources into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Python Libraries"
    ],
    "topics": [
      "APIs",
      "Web Scraping",
      "Data Sources",
      "Data Acquisition"
    ],
    "skillsGained": [
      "Apply APIs in notebook and production workflows",
      "Use Web Scraping to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Collection fits into the data science lifecycle",
      "Complete a dataset challenge using APIs",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Requests docs",
        "href": "https://requests.readthedocs.io/",
        "category": "Official Documentation"
      },
      {
        "label": "Beautiful Soup docs",
        "href": "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
        "category": "Official Documentation"
      },
      {
        "label": "Public APIs",
        "href": "https://github.com/public-apis/public-apis",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the House prices.",
      "Write an analysis note comparing APIs and Web Scraping.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data collection notebook using House prices.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Collection would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "data-cleaning",
    "title": "Data Cleaning",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Data Cleaning connects Missing Values, Outliers, Data Validation into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Collection"
    ],
    "topics": [
      "Missing Values",
      "Outliers",
      "Data Validation",
      "Data Transformation"
    ],
    "skillsGained": [
      "Apply Missing Values in notebook and production workflows",
      "Use Outliers to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Cleaning fits into the data science lifecycle",
      "Complete a dataset challenge using Missing Values",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Pandas missing data",
        "href": "https://pandas.pydata.org/docs/user_guide/missing_data.html",
        "category": "Official Documentation"
      },
      {
        "label": "Great Expectations",
        "href": "https://docs.greatexpectations.io/",
        "category": "Official Documentation"
      },
      {
        "label": "Kaggle cleaning data",
        "href": "https://www.kaggle.com/learn/data-cleaning",
        "category": "Kaggle Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Customer churn.",
      "Write an analysis note comparing Missing Values and Outliers.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data cleaning notebook using Customer churn.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Cleaning would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "exploratory-data-analysis-eda",
    "title": "Exploratory Data Analysis (EDA)",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Exploratory Data Analysis (EDA) connects Data Visualization, Pattern Discovery, Correlation Analysis into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Cleaning"
    ],
    "topics": [
      "Data Visualization",
      "Pattern Discovery",
      "Correlation Analysis",
      "Feature Understanding"
    ],
    "skillsGained": [
      "Apply Data Visualization in notebook and production workflows",
      "Use Pattern Discovery to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Exploratory Data Analysis (EDA) fits into the data science lifecycle",
      "Complete a dataset challenge using Data Visualization",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Kaggle EDA notebooks",
        "href": "https://www.kaggle.com/code",
        "category": "Kaggle Resources"
      },
      {
        "label": "Pandas plotting",
        "href": "https://pandas.pydata.org/docs/user_guide/visualization.html",
        "category": "Official Documentation"
      },
      {
        "label": "Observable notebooks",
        "href": "https://observablehq.com/",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the MovieLens.",
      "Write an analysis note comparing Data Visualization and Pattern Discovery.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a exploratory data analysis (eda) notebook using MovieLens.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Exploratory Data Analysis (EDA) would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "sql-for-data-science",
    "title": "SQL for Data Science",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "SQL for Data Science connects Queries, Joins, Aggregations into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Exploratory Data Analysis (EDA)"
    ],
    "topics": [
      "Queries",
      "Joins",
      "Aggregations",
      "Window Functions",
      "Query Optimization"
    ],
    "skillsGained": [
      "Apply Queries in notebook and production workflows",
      "Use Joins to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how SQL for Data Science fits into the data science lifecycle",
      "Complete a dataset challenge using Queries",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "PostgreSQL docs",
        "href": "https://www.postgresql.org/docs/",
        "category": "Official Documentation"
      },
      {
        "label": "SQLBolt",
        "href": "https://sqlbolt.com/",
        "category": "Courses"
      },
      {
        "label": "Mode SQL tutorial",
        "href": "https://mode.com/sql-tutorial/",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Retail sales.",
      "Write an analysis note comparing Queries and Joins.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a sql for data science notebook using Retail sales.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in SQL for Data Science would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "feature-engineering",
    "title": "Feature Engineering",
    "stage": "Intermediate",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Feature Engineering connects Encoding, Scaling, Feature Selection into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "SQL for Data Science"
    ],
    "topics": [
      "Encoding",
      "Scaling",
      "Feature Selection",
      "Dimensionality Reduction"
    ],
    "skillsGained": [
      "Apply Encoding in notebook and production workflows",
      "Use Scaling to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Feature Engineering fits into the data science lifecycle",
      "Complete a dataset challenge using Encoding",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "scikit-learn preprocessing",
        "href": "https://scikit-learn.org/stable/modules/preprocessing.html",
        "category": "Official Documentation"
      },
      {
        "label": "Feature-engine docs",
        "href": "https://feature-engine.trainindata.com/en/latest/",
        "category": "Official Documentation"
      },
      {
        "label": "Kaggle feature engineering",
        "href": "https://www.kaggle.com/learn/feature-engineering",
        "category": "Kaggle Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the House prices.",
      "Write an analysis note comparing Encoding and Scaling.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a feature engineering notebook using House prices.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Feature Engineering would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "machine-learning-fundamentals",
    "title": "Machine Learning Fundamentals",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Machine Learning Fundamentals connects Supervised Learning, Unsupervised Learning, Reinforcement Learning into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Feature Engineering"
    ],
    "topics": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning"
    ],
    "skillsGained": [
      "Apply Supervised Learning in notebook and production workflows",
      "Use Unsupervised Learning to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Machine Learning Fundamentals fits into the data science lifecycle",
      "Complete a dataset challenge using Supervised Learning",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "scikit-learn user guide",
        "href": "https://scikit-learn.org/stable/user_guide.html",
        "category": "Official Documentation"
      },
      {
        "label": "Google ML Crash Course",
        "href": "https://developers.google.com/machine-learning/crash-course",
        "category": "Courses"
      },
      {
        "label": "Coursera ML specialization",
        "href": "https://www.coursera.org/specializations/machine-learning-introduction",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Customer churn.",
      "Write an analysis note comparing Supervised Learning and Unsupervised Learning.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a machine learning fundamentals notebook using Customer churn.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Machine Learning Fundamentals would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "machine-learning-algorithms",
    "title": "Machine Learning Algorithms",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "5 weeks",
    "description": "Machine Learning Algorithms connects Linear Regression, Logistic Regression, Decision Trees into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Machine Learning Fundamentals"
    ],
    "topics": [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "KNN",
      "SVM",
      "Clustering"
    ],
    "skillsGained": [
      "Apply Linear Regression in notebook and production workflows",
      "Use Logistic Regression to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Machine Learning Algorithms fits into the data science lifecycle",
      "Complete a dataset challenge using Linear Regression",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "scikit-learn algorithms",
        "href": "https://scikit-learn.org/stable/supervised_learning.html",
        "category": "Official Documentation"
      },
      {
        "label": "StatQuest ML",
        "href": "https://statquest.org/",
        "category": "Courses"
      },
      {
        "label": "Kaggle ML",
        "href": "https://www.kaggle.com/learn/intro-to-machine-learning",
        "category": "Kaggle Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the MovieLens.",
      "Write an analysis note comparing Linear Regression and Logistic Regression.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a machine learning algorithms notebook using MovieLens.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Machine Learning Algorithms would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "model-evaluation",
    "title": "Model Evaluation",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Model Evaluation connects Accuracy, Precision, Recall into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Machine Learning Algorithms"
    ],
    "topics": [
      "Accuracy",
      "Precision",
      "Recall",
      "F1 Score",
      "ROC-AUC",
      "Cross Validation"
    ],
    "skillsGained": [
      "Apply Accuracy in notebook and production workflows",
      "Use Precision to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Model Evaluation fits into the data science lifecycle",
      "Complete a dataset challenge using Accuracy",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "scikit-learn model evaluation",
        "href": "https://scikit-learn.org/stable/modules/model_evaluation.html",
        "category": "Official Documentation"
      },
      {
        "label": "Google fairness indicators",
        "href": "https://www.tensorflow.org/tfx/guide/fairness_indicators",
        "category": "Official Documentation"
      },
      {
        "label": "Kaggle competitions",
        "href": "https://www.kaggle.com/competitions",
        "category": "Kaggle Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Retail sales.",
      "Write an analysis note comparing Accuracy and Precision.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a model evaluation notebook using Retail sales.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Model Evaluation would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "data-visualization",
    "title": "Data Visualization",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Data Visualization connects Matplotlib, Seaborn, Plotly into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Model Evaluation"
    ],
    "topics": [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Tableau",
      "Power BI"
    ],
    "skillsGained": [
      "Apply Matplotlib in notebook and production workflows",
      "Use Seaborn to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Visualization fits into the data science lifecycle",
      "Complete a dataset challenge using Matplotlib",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Plotly docs",
        "href": "https://plotly.com/python/",
        "category": "Official Documentation"
      },
      {
        "label": "Tableau training",
        "href": "https://www.tableau.com/learn/training",
        "category": "Courses"
      },
      {
        "label": "Power BI learning",
        "href": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the House prices.",
      "Write an analysis note comparing Matplotlib and Seaborn.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data visualization notebook using House prices.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Visualization would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "deep-learning-fundamentals",
    "title": "Deep Learning Fundamentals",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Deep Learning Fundamentals connects Neural Networks, Backpropagation, Activation Functions into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Visualization"
    ],
    "topics": [
      "Neural Networks",
      "Backpropagation",
      "Activation Functions",
      "Optimization"
    ],
    "skillsGained": [
      "Apply Neural Networks in notebook and production workflows",
      "Use Backpropagation to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Deep Learning Fundamentals fits into the data science lifecycle",
      "Complete a dataset challenge using Neural Networks",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Deep Learning book",
        "href": "https://www.deeplearningbook.org/",
        "category": "Research Papers"
      },
      {
        "label": "Neural Networks and Deep Learning",
        "href": "http://neuralnetworksanddeeplearning.com/",
        "category": "Courses"
      },
      {
        "label": "fast.ai",
        "href": "https://course.fast.ai/",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the CIFAR-10.",
      "Write an analysis note comparing Neural Networks and Backpropagation.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a deep learning fundamentals notebook using CIFAR-10.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Deep Learning Fundamentals would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "deep-learning-frameworks",
    "title": "Deep Learning Frameworks",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Deep Learning Frameworks connects TensorFlow, Keras, PyTorch into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Deep Learning Fundamentals"
    ],
    "topics": [
      "TensorFlow",
      "Keras",
      "PyTorch"
    ],
    "skillsGained": [
      "Apply TensorFlow in notebook and production workflows",
      "Use Keras to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Deep Learning Frameworks fits into the data science lifecycle",
      "Complete a dataset challenge using TensorFlow",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "PyTorch docs",
        "href": "https://pytorch.org/docs/stable/index.html",
        "category": "Official Documentation"
      },
      {
        "label": "TensorFlow docs",
        "href": "https://www.tensorflow.org/learn",
        "category": "Official Documentation"
      },
      {
        "label": "Keras docs",
        "href": "https://keras.io/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the COCO sample.",
      "Write an analysis note comparing TensorFlow and Keras.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a deep learning frameworks notebook using COCO sample.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Deep Learning Frameworks would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "computer-vision",
    "title": "Computer Vision",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Computer Vision connects CNNs, Object Detection, Image Classification into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Deep Learning Frameworks"
    ],
    "topics": [
      "CNNs",
      "Object Detection",
      "Image Classification",
      "OpenCV"
    ],
    "skillsGained": [
      "Apply CNNs in notebook and production workflows",
      "Use Object Detection to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Computer Vision fits into the data science lifecycle",
      "Complete a dataset challenge using CNNs",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "OpenCV docs",
        "href": "https://docs.opencv.org/",
        "category": "Official Documentation"
      },
      {
        "label": "PyTorch vision",
        "href": "https://pytorch.org/vision/stable/index.html",
        "category": "Official Documentation"
      },
      {
        "label": "Papers with Code CV",
        "href": "https://paperswithcode.com/area/computer-vision",
        "category": "Research Papers"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the IMDB reviews.",
      "Write an analysis note comparing CNNs and Object Detection.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a computer vision notebook using IMDB reviews.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Computer Vision would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "natural-language-processing",
    "title": "Natural Language Processing",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Natural Language Processing connects Text Processing, Tokenization, Embeddings into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Computer Vision"
    ],
    "topics": [
      "Text Processing",
      "Tokenization",
      "Embeddings",
      "Transformers"
    ],
    "skillsGained": [
      "Apply Text Processing in notebook and production workflows",
      "Use Tokenization to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Natural Language Processing fits into the data science lifecycle",
      "Complete a dataset challenge using Text Processing",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Hugging Face course",
        "href": "https://huggingface.co/learn/nlp-course",
        "category": "Courses"
      },
      {
        "label": "spaCy docs",
        "href": "https://spacy.io/usage",
        "category": "Official Documentation"
      },
      {
        "label": "Papers with Code NLP",
        "href": "https://paperswithcode.com/area/natural-language-processing",
        "category": "Research Papers"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the OpenAI eval-style prompts.",
      "Write an analysis note comparing Text Processing and Tokenization.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a natural language processing notebook using OpenAI eval-style prompts.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Natural Language Processing would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "generative-ai",
    "title": "Generative AI",
    "stage": "Advanced",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Generative AI connects LLM Fundamentals, Prompt Engineering, RAG into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Natural Language Processing"
    ],
    "topics": [
      "LLM Fundamentals",
      "Prompt Engineering",
      "RAG",
      "Fine-Tuning",
      "AI Agents"
    ],
    "skillsGained": [
      "Apply LLM Fundamentals in notebook and production workflows",
      "Use Prompt Engineering to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Generative AI fits into the data science lifecycle",
      "Complete a dataset challenge using LLM Fundamentals",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "OpenAI docs",
        "href": "https://platform.openai.com/docs",
        "category": "Official Documentation"
      },
      {
        "label": "LangChain docs",
        "href": "https://python.langchain.com/docs/",
        "category": "Official Documentation"
      },
      {
        "label": "Hugging Face transformers",
        "href": "https://huggingface.co/docs/transformers/index",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the CIFAR-10.",
      "Write an analysis note comparing LLM Fundamentals and Prompt Engineering.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a generative ai notebook using CIFAR-10.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Generative AI would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "big-data",
    "title": "Big Data",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Big Data connects Hadoop, Spark, Distributed Computing into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Generative AI"
    ],
    "topics": [
      "Hadoop",
      "Spark",
      "Distributed Computing"
    ],
    "skillsGained": [
      "Apply Hadoop in notebook and production workflows",
      "Use Spark to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Big Data fits into the data science lifecycle",
      "Complete a dataset challenge using Hadoop",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Apache Spark docs",
        "href": "https://spark.apache.org/docs/latest/",
        "category": "Official Documentation"
      },
      {
        "label": "Databricks learning",
        "href": "https://www.databricks.com/learn",
        "category": "Courses"
      },
      {
        "label": "Hadoop docs",
        "href": "https://hadoop.apache.org/docs/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the COCO sample.",
      "Write an analysis note comparing Hadoop and Spark.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a big data notebook using COCO sample.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Big Data would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "mlops-fundamentals",
    "title": "MLOps Fundamentals",
    "stage": "Advanced",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "MLOps Fundamentals connects Model Deployment, Model Monitoring, Experiment Tracking into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Big Data"
    ],
    "topics": [
      "Model Deployment",
      "Model Monitoring",
      "Experiment Tracking"
    ],
    "skillsGained": [
      "Apply Model Deployment in notebook and production workflows",
      "Use Model Monitoring to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how MLOps Fundamentals fits into the data science lifecycle",
      "Complete a dataset challenge using Model Deployment",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "MLflow docs",
        "href": "https://mlflow.org/docs/latest/index.html",
        "category": "Official Documentation"
      },
      {
        "label": "Weights & Biases docs",
        "href": "https://docs.wandb.ai/",
        "category": "Official Documentation"
      },
      {
        "label": "Google MLOps guide",
        "href": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the IMDB reviews.",
      "Write an analysis note comparing Model Deployment and Model Monitoring.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a mlops fundamentals notebook using IMDB reviews.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in MLOps Fundamentals would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "cloud-for-data-science",
    "title": "Cloud for Data Science",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Cloud for Data Science connects AWS, Azure, Google Cloud into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "MLOps Fundamentals"
    ],
    "topics": [
      "AWS",
      "Azure",
      "Google Cloud"
    ],
    "skillsGained": [
      "Apply AWS in notebook and production workflows",
      "Use Azure to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Cloud for Data Science fits into the data science lifecycle",
      "Complete a dataset challenge using AWS",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "AWS ML docs",
        "href": "https://docs.aws.amazon.com/machine-learning/",
        "category": "Official Documentation"
      },
      {
        "label": "Azure ML docs",
        "href": "https://learn.microsoft.com/en-us/azure/machine-learning/",
        "category": "Official Documentation"
      },
      {
        "label": "Google Vertex AI docs",
        "href": "https://cloud.google.com/vertex-ai/docs",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the OpenAI eval-style prompts.",
      "Write an analysis note comparing AWS and Azure.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a cloud for data science notebook using OpenAI eval-style prompts.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Cloud for Data Science would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "data-engineering-basics",
    "title": "Data Engineering Basics",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Data Engineering Basics connects ETL, Data Pipelines, Data Warehouses into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Cloud for Data Science"
    ],
    "topics": [
      "ETL",
      "Data Pipelines",
      "Data Warehouses"
    ],
    "skillsGained": [
      "Apply ETL in notebook and production workflows",
      "Use Data Pipelines to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Engineering Basics fits into the data science lifecycle",
      "Complete a dataset challenge using ETL",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "dbt docs",
        "href": "https://docs.getdbt.com/docs/introduction",
        "category": "Official Documentation"
      },
      {
        "label": "Airflow docs",
        "href": "https://airflow.apache.org/docs/",
        "category": "Official Documentation"
      },
      {
        "label": "Snowflake docs",
        "href": "https://docs.snowflake.com/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the CIFAR-10.",
      "Write an analysis note comparing ETL and Data Pipelines.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data engineering basics notebook using CIFAR-10.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Engineering Basics would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "advanced-machine-learning",
    "title": "Advanced Machine Learning",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Advanced Machine Learning connects XGBoost, LightGBM, CatBoost into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Engineering Basics"
    ],
    "topics": [
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Ensemble Learning"
    ],
    "skillsGained": [
      "Apply XGBoost in notebook and production workflows",
      "Use LightGBM to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Advanced Machine Learning fits into the data science lifecycle",
      "Complete a dataset challenge using XGBoost",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "XGBoost docs",
        "href": "https://xgboost.readthedocs.io/",
        "category": "Official Documentation"
      },
      {
        "label": "LightGBM docs",
        "href": "https://lightgbm.readthedocs.io/",
        "category": "Official Documentation"
      },
      {
        "label": "CatBoost docs",
        "href": "https://catboost.ai/docs/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the MIMIC sample data.",
      "Write an analysis note comparing XGBoost and LightGBM.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a advanced machine learning notebook using MIMIC sample data.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Advanced Machine Learning would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "advanced-deep-learning",
    "title": "Advanced Deep Learning",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Advanced Deep Learning connects Transformers, Attention Mechanisms, Diffusion Models into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Advanced Machine Learning"
    ],
    "topics": [
      "Transformers",
      "Attention Mechanisms",
      "Diffusion Models"
    ],
    "skillsGained": [
      "Apply Transformers in notebook and production workflows",
      "Use Attention Mechanisms to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Advanced Deep Learning fits into the data science lifecycle",
      "Complete a dataset challenge using Transformers",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Attention Is All You Need",
        "href": "https://arxiv.org/abs/1706.03762",
        "category": "Research Papers"
      },
      {
        "label": "Diffusion models paper",
        "href": "https://arxiv.org/abs/2006.11239",
        "category": "Research Papers"
      },
      {
        "label": "Papers with Code DL",
        "href": "https://paperswithcode.com/area/deep-learning",
        "category": "Research Papers"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Large recommender logs.",
      "Write an analysis note comparing Transformers and Attention Mechanisms.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a advanced deep learning notebook using Large recommender logs.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Advanced Deep Learning would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "production-ai-systems",
    "title": "Production AI Systems",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Production AI Systems connects Model Serving, Scalable Inference, AI Infrastructure into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Advanced Deep Learning"
    ],
    "topics": [
      "Model Serving",
      "Scalable Inference",
      "AI Infrastructure"
    ],
    "skillsGained": [
      "Apply Model Serving in notebook and production workflows",
      "Use Scalable Inference to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Production AI Systems fits into the data science lifecycle",
      "Complete a dataset challenge using Model Serving",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "BentoML docs",
        "href": "https://docs.bentoml.com/",
        "category": "Official Documentation"
      },
      {
        "label": "KServe docs",
        "href": "https://kserve.github.io/website/",
        "category": "Official Documentation"
      },
      {
        "label": "NVIDIA Triton docs",
        "href": "https://docs.nvidia.com/deeplearning/triton-inference-server/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the ArXiv abstracts.",
      "Write an analysis note comparing Model Serving and Scalable Inference.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a production ai systems notebook using ArXiv abstracts.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Production AI Systems would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "research-and-experimentation",
    "title": "Research & Experimentation",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Research & Experimentation connects Reading Research Papers, Scientific Method, Reproducibility into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Production AI Systems"
    ],
    "topics": [
      "Reading Research Papers",
      "Scientific Method",
      "Reproducibility"
    ],
    "skillsGained": [
      "Apply Reading Research Papers in notebook and production workflows",
      "Use Scientific Method to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Research & Experimentation fits into the data science lifecycle",
      "Complete a dataset challenge using Reading Research Papers",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Papers with Code",
        "href": "https://paperswithcode.com/",
        "category": "Research Papers"
      },
      {
        "label": "arXiv",
        "href": "https://arxiv.org/",
        "category": "Research Papers"
      },
      {
        "label": "Reproducibility checklist",
        "href": "https://www.cs.mcgill.ca/~jpineau/ReproducibilityChecklist.pdf",
        "category": "Research Papers"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Synthetic multi-tenant ML telemetry.",
      "Write an analysis note comparing Reading Research Papers and Scientific Method.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a research & experimentation notebook using Synthetic multi-tenant ML telemetry.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Research & Experimentation would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "ai-system-design",
    "title": "AI System Design",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "AI System Design connects Large-Scale ML Systems, Recommendation Systems, Search Systems into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Research & Experimentation"
    ],
    "topics": [
      "Large-Scale ML Systems",
      "Recommendation Systems",
      "Search Systems"
    ],
    "skillsGained": [
      "Apply Large-Scale ML Systems in notebook and production workflows",
      "Use Recommendation Systems to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how AI System Design fits into the data science lifecycle",
      "Complete a dataset challenge using Large-Scale ML Systems",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Google ML systems design",
        "href": "https://developers.google.com/machine-learning/guides/rules-of-ml",
        "category": "Official Documentation"
      },
      {
        "label": "Chip Huyen ML systems",
        "href": "https://huyenchip.com/machine-learning-systems-design/toc.html",
        "category": "Courses"
      },
      {
        "label": "System Design Primer",
        "href": "https://github.com/donnemartin/system-design-primer",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the MIMIC sample data.",
      "Write an analysis note comparing Large-Scale ML Systems and Recommendation Systems.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a ai system design notebook using MIMIC sample data.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in AI System Design would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "data-governance",
    "title": "Data Governance",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "3 weeks",
    "description": "Data Governance connects Privacy, Compliance, Ethical AI into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "AI System Design"
    ],
    "topics": [
      "Privacy",
      "Compliance",
      "Ethical AI",
      "Responsible AI"
    ],
    "skillsGained": [
      "Apply Privacy in notebook and production workflows",
      "Use Compliance to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Data Governance fits into the data science lifecycle",
      "Complete a dataset challenge using Privacy",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "NIST AI RMF",
        "href": "https://www.nist.gov/itl/ai-risk-management-framework",
        "category": "Official Documentation"
      },
      {
        "label": "Responsible AI practices",
        "href": "https://ai.google/responsibility/responsible-ai-practices/",
        "category": "Official Documentation"
      },
      {
        "label": "Microsoft Responsible AI",
        "href": "https://www.microsoft.com/ai/responsible-ai",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the Large recommender logs.",
      "Write an analysis note comparing Privacy and Compliance.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a data governance notebook using Large recommender logs.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Data Governance would most likely mislead stakeholders, and how would you validate it?"
  },
  {
    "id": "leadership-and-communication",
    "title": "Leadership & Communication",
    "stage": "Expert",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Leadership & Communication connects Storytelling with Data, Stakeholder Communication, Business Impact Analysis into practical data science skill for analytical and AI-driven products.",
    "prerequisites": [
      "Data Governance"
    ],
    "topics": [
      "Storytelling with Data",
      "Stakeholder Communication",
      "Business Impact Analysis"
    ],
    "skillsGained": [
      "Apply Storytelling with Data in notebook and production workflows",
      "Use Stakeholder Communication to make data-driven decisions",
      "Communicate uncertainty, tradeoffs, and model behavior",
      "Build portfolio-ready analytical proof of skill"
    ],
    "learningOutcomes": [
      "Explain how Leadership & Communication fits into the data science lifecycle",
      "Complete a dataset challenge using Storytelling with Data",
      "Evaluate risks, assumptions, and next experiments"
    ],
    "resources": [
      {
        "label": "Storytelling with Data",
        "href": "https://www.storytellingwithdata.com/",
        "category": "Courses"
      },
      {
        "label": "Google data analytics",
        "href": "https://grow.google/certificates/data-analytics/",
        "category": "Certification Resources"
      },
      {
        "label": "Data-to-decisions guide",
        "href": "https://www.tableau.com/learn/articles/data-storytelling",
        "category": "Courses"
      }
    ],
    "practiceExercises": [
      "Run an interactive notebook using the ArXiv abstracts.",
      "Write an analysis note comparing Storytelling with Data and Stakeholder Communication.",
      "Create a reproducible experiment or dashboard for this topic."
    ],
    "miniProject": "Build a leadership & communication notebook using ArXiv abstracts.",
    "realWorldApplications": [
      "Business analytics",
      "Model development",
      "Research and experimentation"
    ],
    "quiz": "What assumption in Leadership & Communication would most likely mislead stakeholders, and how would you validate it?"
  }
];

const projectTracks: ProjectTrack[] = [
  {
    "stage": "Beginner",
    "projects": [
      "Data Cleaning Project",
      "Sales Analysis Dashboard",
      "COVID Data Analysis",
      "Student Performance Analysis"
    ]
  },
  {
    "stage": "Intermediate",
    "projects": [
      "House Price Prediction",
      "Customer Churn Prediction",
      "Recommendation System",
      "Sentiment Analysis"
    ]
  },
  {
    "stage": "Advanced",
    "projects": [
      "Image Classification System",
      "Object Detection Model",
      "Chatbot using NLP",
      "AI-Powered Analytics Platform"
    ]
  },
  {
    "stage": "Expert",
    "projects": [
      "Production ML Platform",
      "RAG-Based AI Assistant",
      "Recommendation Engine at Scale",
      "End-to-End MLOps Pipeline"
    ]
  }
];


const careerPaths: RoadmapPath[] = [
  {
    "title": "Data Analyst",
    "focus": "Turn messy datasets into clear dashboards, insights, SQL reports, and stakeholder-ready narratives.",
    "milestones": [
      "EDA portfolio",
      "BI dashboard",
      "SQL case study"
    ]
  },
  {
    "title": "Data Scientist",
    "focus": "Own analysis, modeling, evaluation, experimentation, and business impact from idea to recommendation.",
    "milestones": [
      "Prediction model",
      "Experiment design",
      "Impact memo"
    ]
  },
  {
    "title": "Machine Learning Engineer",
    "focus": "Productionize features, training pipelines, model serving, monitoring, and scalable inference.",
    "milestones": [
      "Model API",
      "Feature pipeline",
      "Monitoring dashboard"
    ]
  },
  {
    "title": "AI Engineer",
    "focus": "Build LLM, RAG, agentic, and generative AI systems with evaluation and guardrails.",
    "milestones": [
      "RAG assistant",
      "Prompt evals",
      "Agent workflow"
    ]
  },
  {
    "title": "Research Scientist",
    "focus": "Read papers, design reproducible experiments, test novel methods, and communicate evidence.",
    "milestones": [
      "Paper replication",
      "Ablation study",
      "Research report"
    ]
  },
  {
    "title": "Analytics Engineer",
    "focus": "Bridge data engineering and analytics with dbt models, metrics layers, and trusted datasets.",
    "milestones": [
      "dbt project",
      "Data mart",
      "Metrics layer"
    ]
  }
];

const certificationPaths: RoadmapPath[] = [
  {
    "title": "Google Data Analytics",
    "focus": "Analytics lifecycle, cleaning, visualization, SQL, dashboards, and stakeholder communication.",
    "milestones": [
      "Case study",
      "SQL portfolio",
      "Dashboard project"
    ]
  },
  {
    "title": "IBM Data Science",
    "focus": "Python, notebooks, statistics, machine learning, and applied capstone projects.",
    "milestones": [
      "Notebook workflow",
      "ML capstone",
      "Model report"
    ]
  },
  {
    "title": "Microsoft Data Scientist",
    "focus": "Azure ML, data preparation, model training, deployment, and responsible AI workflows.",
    "milestones": [
      "Azure ML workspace",
      "Experiment tracking",
      "Deployment lab"
    ]
  },
  {
    "title": "AWS Machine Learning Engineer",
    "focus": "AWS ML services, feature workflows, training jobs, model deployment, and monitoring.",
    "milestones": [
      "SageMaker lab",
      "Model endpoint",
      "Monitoring setup"
    ]
  },
  {
    "title": "TensorFlow Developer Certificate",
    "focus": "TensorFlow modeling, computer vision, NLP, time series, and deployment basics.",
    "milestones": [
      "TF models",
      "CV/NLP practice",
      "Exam prep notebooks"
    ]
  }
];

const achievementBadges: string[] = [
  "Data Wrangler",
  "Statistics Sentinel",
  "Python Analyst",
  "ML Builder",
  "Deep Learning Adept",
  "AI Systems Designer",
  "Research Replicator",
  "Insight Leader"
];


const gamificationCards: Array<[string, string]> = [
  ["Portfolio Milestones", "Track notebooks, dashboards, ML systems, GenAI demos, and production data products."],
  ["Achievement Badges", "Unlock visible badges for statistics, Python, EDA, ML, deep learning, GenAI, MLOps, and research mastery."],
  ["Research Notes", "Use notes and quizzes to capture assumptions, experiment results, and model tradeoffs."],
];

const resourceCategories: string[] = ["Official Documentation", "Research Papers", "Kaggle Resources", "Courses", "Community Resources", "Certification Resources"];

const readinessMetrics: ReadinessMetric[] = [
  { label: "ML readiness", icon: "server", topicTitles: ["Feature Engineering", "Machine Learning Fundamentals", "Machine Learning Algorithms", "Model Evaluation", "Advanced Machine Learning"] },
  { label: "AI readiness", icon: "layers", topicTitles: ["Deep Learning Fundamentals", "Deep Learning Frameworks", "Natural Language Processing", "Generative AI", "Production AI Systems", "AI System Design"] },
  { label: "Statistics mastery", icon: "shield", topicTitles: ["Mathematics for Data Science", "Statistics Fundamentals", "Model Evaluation", "Research & Experimentation"] },
];

export default function DataScientistRoadmap() {
  return (
    <RoadmapPageShell
      storageKey="demontech-data-scientist-roadmap"
      breadcrumb="Data Scientist"
      eyebrow="Production AI & Analytics Path"
      title="Data Scientist Roadmap"
      description="A complete project-based data science journey across math, statistics, Python, analytics, machine learning, deep learning, MLOps, big data, generative AI, and research."
      stats={[["32", "Roadmap nodes", "layers"], ["82-112 weeks", "Total duration", "clock"], ["145+", "Data skills", "badge"], ["16", "Portfolio projects", "target"]]}
      architectureLabel="Data Science Architecture"
      projectIntro="Every phase ends with practical projects that combine datasets, notebooks, dashboards, models, experiments, deployment, and stakeholder communication."
      journeyTitle="Vertical Data Science Journey"
      journeyDescription="Expand each node for prerequisites, learning outcomes, resources, practice exercises, mini projects, quizzes, bookmarks, and notes."
      resourceTitle="Data Science Resource Matrix"
      pathTitle="Data Science Career Paths"
      pathDescription="Choose a specialization across analytics, machine learning, AI engineering, MLOps, research, and data leadership."
      certificationTitle="Data Science Certifications Tracker"
      certificationDescription="Use certifications as optional validation for analytics, ML, cloud AI, and data engineering competency."
      gamificationTitle="Learning Features"
      progressTitle="Data Science Progress"
      readinessTitle="Data Science Readiness"
      estimatedTime="82-112w"
      miniProjectLabel="Portfolio Project"
      stageSummaries={stageSummaries}
      roadmapNodes={roadmapNodes}
      projectTracks={projectTracks}
      resourceCategories={resourceCategories}
      paths={careerPaths}
      certifications={certificationPaths}
      gamificationCards={gamificationCards}
      achievementBadges={achievementBadges}
      readinessMetrics={readinessMetrics}
    />
  );
}
