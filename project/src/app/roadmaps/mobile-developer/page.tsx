import { RoadmapPageShell } from "../../../components/roadmap/RoadmapPageShell";
import type { ReadinessMetric, RoadmapNode, RoadmapPath, StageSummary, ProjectTrack } from "../../../components/roadmap/RoadmapPageShell";

const stageSummaries: StageSummary[] = [
  {
    stage: "Beginner",
    duration: "17-20 weeks",
    outcome: "Understand mobile fundamentals, programming, platform languages, Git, UI/UX, and design systems.",
  },
  {
    stage: "Intermediate",
    duration: "40-45 weeks",
    outcome: "Build Android, iOS, Flutter, and React Native apps with backend integration, storage, databases, auth, and security.",
  },
  {
    stage: "Advanced",
    duration: "37-42 weeks",
    outcome: "Design architecture, state, testing, performance, notifications, offline sync, CI/CD, Firebase, and mobile security workflows.",
  },
  {
    stage: "Expert",
    duration: "32-38 weeks",
    outcome: "Lead advanced native and cross-platform engineering, mobile DevOps, system design, emerging tech, and architecture decisions.",
  },
];

const roadmapNodes: RoadmapNode[] = [
  {
    "id": "mobile-development-fundamentals",
    "title": "Mobile Development Fundamentals",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "2 weeks",
    "description": "Mobile Development Fundamentals connects How Mobile Apps Work, Native vs Cross-Platform, Mobile Architecture Overview into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Basic computer literacy and curiosity about apps"
    ],
    "topics": [
      "How Mobile Apps Work",
      "Native vs Cross-Platform",
      "Mobile Architecture Overview",
      "App Lifecycle",
      "Mobile UI Principles"
    ],
    "skillsGained": [
      "Apply How Mobile Apps Work in real mobile app workflows",
      "Connect Native vs Cross-Platform to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile Development Fundamentals fits into the mobile app lifecycle",
      "Ship a mobile feature using How Mobile Apps Work",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Android developer guides",
        "href": "https://developer.android.com/guide",
        "category": "Official Documentation"
      },
      {
        "label": "Apple app design overview",
        "href": "https://developer.apple.com/design/",
        "category": "Design Resources"
      },
      {
        "label": "Mobile UX patterns",
        "href": "https://www.nngroup.com/topic/mobile-and-tablet/",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for How Mobile Apps Work.",
      "Create a UI or architecture drill covering How Mobile Apps Work and Native vs Cross-Platform.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile development fundamentals feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile Development Fundamentals, and how would you detect it before release?"
  },
  {
    "id": "programming-fundamentals",
    "title": "Programming Fundamentals",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "5 weeks",
    "description": "Programming Fundamentals connects Variables, Functions, OOP into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile Development Fundamentals"
    ],
    "topics": [
      "Variables",
      "Functions",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Async Programming"
    ],
    "skillsGained": [
      "Apply Variables in real mobile app workflows",
      "Connect Functions to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Programming Fundamentals fits into the mobile app lifecycle",
      "Ship a mobile feature using Variables",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Kotlin basics",
        "href": "https://kotlinlang.org/docs/basic-syntax.html",
        "category": "Official Documentation"
      },
      {
        "label": "Swift guide",
        "href": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
        "category": "Official Documentation"
      },
      {
        "label": "Exercism mobile languages",
        "href": "https://exercism.org/",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Variables.",
      "Create a UI or architecture drill covering Variables and Functions.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a programming fundamentals feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Programming Fundamentals, and how would you detect it before release?"
  },
  {
    "id": "mobile-programming-languages",
    "title": "Mobile Programming Languages",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "4 weeks",
    "description": "Mobile Programming Languages connects Java, Kotlin, Swift into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Programming Fundamentals"
    ],
    "topics": [
      "Java",
      "Kotlin",
      "Swift",
      "Dart",
      "JavaScript",
      "TypeScript"
    ],
    "skillsGained": [
      "Apply Java in real mobile app workflows",
      "Connect Kotlin to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile Programming Languages fits into the mobile app lifecycle",
      "Ship a mobile feature using Java",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Kotlin docs",
        "href": "https://kotlinlang.org/docs/home.html",
        "category": "Official Documentation"
      },
      {
        "label": "Swift docs",
        "href": "https://www.swift.org/documentation/",
        "category": "Official Documentation"
      },
      {
        "label": "Dart docs",
        "href": "https://dart.dev/guides",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Java.",
      "Create a UI or architecture drill covering Java and Kotlin.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile programming languages feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile Programming Languages, and how would you detect it before release?"
  },
  {
    "id": "git-and-github",
    "title": "Git & GitHub",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "1 week",
    "description": "Git & GitHub connects Version Control, Branching, Pull Requests into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile Programming Languages"
    ],
    "topics": [
      "Version Control",
      "Branching",
      "Pull Requests",
      "Team Collaboration"
    ],
    "skillsGained": [
      "Apply Version Control in real mobile app workflows",
      "Connect Branching to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Git & GitHub fits into the mobile app lifecycle",
      "Ship a mobile feature using Version Control",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
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
        "category": "Video Courses"
      },
      {
        "label": "DemonTech Git roadmap",
        "href": "/roadmaps/git",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Version Control.",
      "Create a UI or architecture drill covering Version Control and Branching.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a git & github feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Git & GitHub, and how would you detect it before release?"
  },
  {
    "id": "ui-ux-fundamentals",
    "title": "UI/UX Fundamentals",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "3 weeks",
    "description": "UI/UX Fundamentals connects Design Principles, Responsive Layouts, Accessibility into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Git & GitHub"
    ],
    "topics": [
      "Design Principles",
      "Responsive Layouts",
      "Accessibility",
      "Mobile Navigation Patterns"
    ],
    "skillsGained": [
      "Apply Design Principles in real mobile app workflows",
      "Connect Responsive Layouts to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how UI/UX Fundamentals fits into the mobile app lifecycle",
      "Ship a mobile feature using Design Principles",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Material Design",
        "href": "https://m3.material.io/",
        "category": "Design Resources"
      },
      {
        "label": "Apple Human Interface Guidelines",
        "href": "https://developer.apple.com/design/human-interface-guidelines",
        "category": "Design Resources"
      },
      {
        "label": "WCAG mobile accessibility",
        "href": "https://www.w3.org/WAI/standards-guidelines/mobile/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Design Principles.",
      "Create a UI or architecture drill covering Design Principles and Responsive Layouts.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a ui/ux fundamentals feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in UI/UX Fundamentals, and how would you detect it before release?"
  },
  {
    "id": "mobile-design-systems",
    "title": "Mobile Design Systems",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "2 weeks",
    "description": "Mobile Design Systems connects Material Design, Human Interface Guidelines, Design Tokens into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "UI/UX Fundamentals"
    ],
    "topics": [
      "Material Design",
      "Human Interface Guidelines",
      "Design Tokens"
    ],
    "skillsGained": [
      "Apply Material Design in real mobile app workflows",
      "Connect Human Interface Guidelines to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile Design Systems fits into the mobile app lifecycle",
      "Ship a mobile feature using Material Design",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Material Design components",
        "href": "https://m3.material.io/components",
        "category": "Design Resources"
      },
      {
        "label": "Apple design resources",
        "href": "https://developer.apple.com/design/resources/",
        "category": "Design Resources"
      },
      {
        "label": "Design tokens guide",
        "href": "https://www.designtokens.org/",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Material Design.",
      "Create a UI or architecture drill covering Material Design and Human Interface Guidelines.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile design systems feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile Design Systems, and how would you detect it before release?"
  },
  {
    "id": "android-development",
    "title": "Android Development",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "5 weeks",
    "description": "Android Development connects Android Studio, Activities, Fragments into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile Design Systems"
    ],
    "topics": [
      "Android Studio",
      "Activities",
      "Fragments",
      "Intents",
      "Jetpack Components"
    ],
    "skillsGained": [
      "Apply Android Studio in real mobile app workflows",
      "Connect Activities to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Android Development fits into the mobile app lifecycle",
      "Ship a mobile feature using Android Studio",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Android docs",
        "href": "https://developer.android.com/docs",
        "category": "Official Documentation"
      },
      {
        "label": "Android Jetpack",
        "href": "https://developer.android.com/jetpack",
        "category": "Official Documentation"
      },
      {
        "label": "Now in Android app",
        "href": "https://github.com/android/nowinandroid",
        "category": "Open Source Apps"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Android Studio.",
      "Create a UI or architecture drill covering Android Studio and Activities.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a android development feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Android Development, and how would you detect it before release?"
  },
  {
    "id": "kotlin-for-android",
    "title": "Kotlin for Android",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Kotlin for Android connects Coroutines, Flow, State Management into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Android Development"
    ],
    "topics": [
      "Coroutines",
      "Flow",
      "State Management"
    ],
    "skillsGained": [
      "Apply Coroutines in real mobile app workflows",
      "Connect Flow to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Kotlin for Android fits into the mobile app lifecycle",
      "Ship a mobile feature using Coroutines",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Kotlin coroutines",
        "href": "https://kotlinlang.org/docs/coroutines-overview.html",
        "category": "Official Documentation"
      },
      {
        "label": "Android Kotlin guides",
        "href": "https://developer.android.com/kotlin",
        "category": "Official Documentation"
      },
      {
        "label": "Kotlin flows",
        "href": "https://kotlinlang.org/docs/flow.html",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Coroutines.",
      "Create a UI or architecture drill covering Coroutines and Flow.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a kotlin for android feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Kotlin for Android, and how would you detect it before release?"
  },
  {
    "id": "ios-development",
    "title": "iOS Development",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "5 weeks",
    "description": "iOS Development connects Xcode, UIKit, SwiftUI into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Kotlin for Android"
    ],
    "topics": [
      "Xcode",
      "UIKit",
      "SwiftUI",
      "App Lifecycle"
    ],
    "skillsGained": [
      "Apply Xcode in real mobile app workflows",
      "Connect UIKit to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how iOS Development fits into the mobile app lifecycle",
      "Ship a mobile feature using Xcode",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Apple developer docs",
        "href": "https://developer.apple.com/documentation/",
        "category": "Official Documentation"
      },
      {
        "label": "SwiftUI tutorials",
        "href": "https://developer.apple.com/tutorials/swiftui",
        "category": "Video Courses"
      },
      {
        "label": "UIKit docs",
        "href": "https://developer.apple.com/documentation/uikit",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Xcode.",
      "Create a UI or architecture drill covering Xcode and UIKit.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a ios development feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in iOS Development, and how would you detect it before release?"
  },
  {
    "id": "swift-development",
    "title": "Swift Development",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Swift Development connects Async/Await, Combine, Data Persistence into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "iOS Development"
    ],
    "topics": [
      "Async/Await",
      "Combine",
      "Data Persistence"
    ],
    "skillsGained": [
      "Apply Async/Await in real mobile app workflows",
      "Connect Combine to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Swift Development fits into the mobile app lifecycle",
      "Ship a mobile feature using Async/Await",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Swift book",
        "href": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
        "category": "Official Documentation"
      },
      {
        "label": "Combine docs",
        "href": "https://developer.apple.com/documentation/combine",
        "category": "Official Documentation"
      },
      {
        "label": "Swift concurrency",
        "href": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Async/Await.",
      "Create a UI or architecture drill covering Async/Await and Combine.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a swift development feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Swift Development, and how would you detect it before release?"
  },
  {
    "id": "flutter-development",
    "title": "Flutter Development",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "5 weeks",
    "description": "Flutter Development connects Widgets, State Management, Navigation into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Swift Development"
    ],
    "topics": [
      "Widgets",
      "State Management",
      "Navigation",
      "Animations"
    ],
    "skillsGained": [
      "Apply Widgets in real mobile app workflows",
      "Connect State Management to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Flutter Development fits into the mobile app lifecycle",
      "Ship a mobile feature using Widgets",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Flutter docs",
        "href": "https://docs.flutter.dev/",
        "category": "Official Documentation"
      },
      {
        "label": "Flutter codelabs",
        "href": "https://docs.flutter.dev/codelabs",
        "category": "Video Courses"
      },
      {
        "label": "Flutter samples",
        "href": "https://github.com/flutter/samples",
        "category": "Open Source Apps"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Widgets.",
      "Create a UI or architecture drill covering Widgets and State Management.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a flutter development feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Flutter Development, and how would you detect it before release?"
  },
  {
    "id": "react-native-development",
    "title": "React Native Development",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "5 weeks",
    "description": "React Native Development connects Components, Navigation, Native Modules into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Flutter Development"
    ],
    "topics": [
      "Components",
      "Navigation",
      "Native Modules",
      "Performance Optimization"
    ],
    "skillsGained": [
      "Apply Components in real mobile app workflows",
      "Connect Navigation to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how React Native Development fits into the mobile app lifecycle",
      "Ship a mobile feature using Components",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "React Native docs",
        "href": "https://reactnative.dev/docs/getting-started",
        "category": "Official Documentation"
      },
      {
        "label": "React Navigation",
        "href": "https://reactnavigation.org/docs/getting-started/",
        "category": "Official Documentation"
      },
      {
        "label": "React Native examples",
        "href": "https://github.com/ReactNativeNews/React-Native-Apps",
        "category": "Open Source Apps"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Components.",
      "Create a UI or architecture drill covering Components and Navigation.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a react native development feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in React Native Development, and how would you detect it before release?"
  },
  {
    "id": "backend-integration",
    "title": "Backend Integration",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "4 weeks",
    "description": "Backend Integration connects REST APIs, GraphQL, Authentication into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "React Native Development"
    ],
    "topics": [
      "REST APIs",
      "GraphQL",
      "Authentication",
      "WebSockets"
    ],
    "skillsGained": [
      "Apply REST APIs in real mobile app workflows",
      "Connect GraphQL to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Backend Integration fits into the mobile app lifecycle",
      "Ship a mobile feature using REST APIs",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "GraphQL docs",
        "href": "https://graphql.org/learn/",
        "category": "Official Documentation"
      },
      {
        "label": "REST API tutorial",
        "href": "https://restfulapi.net/",
        "category": "Community Resources"
      },
      {
        "label": "Socket.IO docs",
        "href": "https://socket.io/docs/v4/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for REST APIs.",
      "Create a UI or architecture drill covering REST APIs and GraphQL.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a backend integration feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Backend Integration, and how would you detect it before release?"
  },
  {
    "id": "local-storage",
    "title": "Local Storage",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Local Storage connects SQLite, Realm, AsyncStorage into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Backend Integration"
    ],
    "topics": [
      "SQLite",
      "Realm",
      "AsyncStorage",
      "Shared Preferences"
    ],
    "skillsGained": [
      "Apply SQLite in real mobile app workflows",
      "Connect Realm to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Local Storage fits into the mobile app lifecycle",
      "Ship a mobile feature using SQLite",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Android data storage",
        "href": "https://developer.android.com/training/data-storage",
        "category": "Official Documentation"
      },
      {
        "label": "Core Data docs",
        "href": "https://developer.apple.com/documentation/coredata",
        "category": "Official Documentation"
      },
      {
        "label": "AsyncStorage docs",
        "href": "https://react-native-async-storage.github.io/async-storage/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for SQLite.",
      "Create a UI or architecture drill covering SQLite and Realm.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a local storage feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Local Storage, and how would you detect it before release?"
  },
  {
    "id": "mobile-databases",
    "title": "Mobile Databases",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Mobile Databases connects Firebase Firestore, SQLite, Room Database into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Local Storage"
    ],
    "topics": [
      "Firebase Firestore",
      "SQLite",
      "Room Database",
      "Core Data"
    ],
    "skillsGained": [
      "Apply Firebase Firestore in real mobile app workflows",
      "Connect SQLite to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile Databases fits into the mobile app lifecycle",
      "Ship a mobile feature using Firebase Firestore",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Firebase Firestore docs",
        "href": "https://firebase.google.com/docs/firestore",
        "category": "Official Documentation"
      },
      {
        "label": "Room docs",
        "href": "https://developer.android.com/training/data-storage/room",
        "category": "Official Documentation"
      },
      {
        "label": "Realm docs",
        "href": "https://www.mongodb.com/docs/realm/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Firebase Firestore.",
      "Create a UI or architecture drill covering Firebase Firestore and SQLite.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile databases feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile Databases, and how would you detect it before release?"
  },
  {
    "id": "authentication-and-security",
    "title": "Authentication & Security",
    "stage": "Intermediate",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Authentication & Security connects JWT, OAuth, Biometrics into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile Databases"
    ],
    "topics": [
      "JWT",
      "OAuth",
      "Biometrics",
      "Secure Storage"
    ],
    "skillsGained": [
      "Apply JWT in real mobile app workflows",
      "Connect OAuth to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Authentication & Security fits into the mobile app lifecycle",
      "Ship a mobile feature using JWT",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Firebase Auth docs",
        "href": "https://firebase.google.com/docs/auth",
        "category": "Official Documentation"
      },
      {
        "label": "Android biometric auth",
        "href": "https://developer.android.com/identity/sign-in/biometric-auth",
        "category": "Official Documentation"
      },
      {
        "label": "Apple AuthenticationServices",
        "href": "https://developer.apple.com/documentation/authenticationservices",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for JWT.",
      "Create a UI or architecture drill covering JWT and OAuth.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a authentication & security feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Authentication & Security, and how would you detect it before release?"
  },
  {
    "id": "mobile-architecture",
    "title": "Mobile Architecture",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Mobile Architecture connects MVVM, MVC, Clean Architecture into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Authentication & Security"
    ],
    "topics": [
      "MVVM",
      "MVC",
      "Clean Architecture",
      "Modular Architecture"
    ],
    "skillsGained": [
      "Apply MVVM in real mobile app workflows",
      "Connect MVC to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile Architecture fits into the mobile app lifecycle",
      "Ship a mobile feature using MVVM",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Guide to app architecture",
        "href": "https://developer.android.com/topic/architecture",
        "category": "Official Documentation"
      },
      {
        "label": "iOS app architecture",
        "href": "https://developer.apple.com/documentation/swiftui/model-data",
        "category": "Official Documentation"
      },
      {
        "label": "Flutter architecture guide",
        "href": "https://docs.flutter.dev/app-architecture",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for MVVM.",
      "Create a UI or architecture drill covering MVVM and MVC.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile architecture feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile Architecture, and how would you detect it before release?"
  },
  {
    "id": "state-management",
    "title": "State Management",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "State Management connects Riverpod, Bloc, Redux into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile Architecture"
    ],
    "topics": [
      "Riverpod",
      "Bloc",
      "Redux",
      "MobX",
      "Zustand"
    ],
    "skillsGained": [
      "Apply Riverpod in real mobile app workflows",
      "Connect Bloc to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how State Management fits into the mobile app lifecycle",
      "Ship a mobile feature using Riverpod",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Riverpod docs",
        "href": "https://riverpod.dev/",
        "category": "Official Documentation"
      },
      {
        "label": "Bloc docs",
        "href": "https://bloclibrary.dev/",
        "category": "Official Documentation"
      },
      {
        "label": "Redux Toolkit",
        "href": "https://redux-toolkit.js.org/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Riverpod.",
      "Create a UI or architecture drill covering Riverpod and Bloc.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a state management feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in State Management, and how would you detect it before release?"
  },
  {
    "id": "testing",
    "title": "Testing",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Testing connects Unit Testing, Integration Testing, UI Testing into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "State Management"
    ],
    "topics": [
      "Unit Testing",
      "Integration Testing",
      "UI Testing",
      "Automation Testing"
    ],
    "skillsGained": [
      "Apply Unit Testing in real mobile app workflows",
      "Connect Integration Testing to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Testing fits into the mobile app lifecycle",
      "Ship a mobile feature using Unit Testing",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Android testing",
        "href": "https://developer.android.com/training/testing",
        "category": "Official Documentation"
      },
      {
        "label": "Apple testing docs",
        "href": "https://developer.apple.com/documentation/xctest",
        "category": "Official Documentation"
      },
      {
        "label": "Detox docs",
        "href": "https://wix.github.io/Detox/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Unit Testing.",
      "Create a UI or architecture drill covering Unit Testing and Integration Testing.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a testing feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Testing, and how would you detect it before release?"
  },
  {
    "id": "performance-optimization",
    "title": "Performance Optimization",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "5 weeks",
    "description": "Performance Optimization connects Memory Management, App Startup Optimization, Battery Optimization into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Testing"
    ],
    "topics": [
      "Memory Management",
      "App Startup Optimization",
      "Battery Optimization",
      "Rendering Optimization"
    ],
    "skillsGained": [
      "Apply Memory Management in real mobile app workflows",
      "Connect App Startup Optimization to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Performance Optimization fits into the mobile app lifecycle",
      "Ship a mobile feature using Memory Management",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Android performance",
        "href": "https://developer.android.com/topic/performance",
        "category": "Official Documentation"
      },
      {
        "label": "Apple performance docs",
        "href": "https://developer.apple.com/documentation/xcode/improving-your-app-s-performance",
        "category": "Official Documentation"
      },
      {
        "label": "React Native performance",
        "href": "https://reactnative.dev/docs/performance",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Memory Management.",
      "Create a UI or architecture drill covering Memory Management and App Startup Optimization.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a performance optimization feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Performance Optimization, and how would you detect it before release?"
  },
  {
    "id": "notifications",
    "title": "Notifications",
    "stage": "Advanced",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Notifications connects Push Notifications, Firebase Cloud Messaging, APNs into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Performance Optimization"
    ],
    "topics": [
      "Push Notifications",
      "Firebase Cloud Messaging",
      "APNs"
    ],
    "skillsGained": [
      "Apply Push Notifications in real mobile app workflows",
      "Connect Firebase Cloud Messaging to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Notifications fits into the mobile app lifecycle",
      "Ship a mobile feature using Push Notifications",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Firebase Cloud Messaging",
        "href": "https://firebase.google.com/docs/cloud-messaging",
        "category": "Official Documentation"
      },
      {
        "label": "Apple Push Notification service",
        "href": "https://developer.apple.com/documentation/usernotifications",
        "category": "Official Documentation"
      },
      {
        "label": "Expo notifications",
        "href": "https://docs.expo.dev/push-notifications/overview/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Push Notifications.",
      "Create a UI or architecture drill covering Push Notifications and Firebase Cloud Messaging.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a notifications feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Notifications, and how would you detect it before release?"
  },
  {
    "id": "offline-first-applications",
    "title": "Offline-First Applications",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Offline-First Applications connects Local Caching, Sync Strategies, Background Tasks into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Notifications"
    ],
    "topics": [
      "Local Caching",
      "Sync Strategies",
      "Background Tasks"
    ],
    "skillsGained": [
      "Apply Local Caching in real mobile app workflows",
      "Connect Sync Strategies to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Offline-First Applications fits into the mobile app lifecycle",
      "Ship a mobile feature using Local Caching",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Android offline guide",
        "href": "https://developer.android.com/topic/architecture/data-layer/offline-first",
        "category": "Official Documentation"
      },
      {
        "label": "WorkManager docs",
        "href": "https://developer.android.com/topic/libraries/architecture/workmanager",
        "category": "Official Documentation"
      },
      {
        "label": "Apollo offline support",
        "href": "https://www.apollographql.com/docs/react/data/offline",
        "category": "Community Resources"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Local Caching.",
      "Create a UI or architecture drill covering Local Caching and Sync Strategies.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a offline-first applications feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Offline-First Applications, and how would you detect it before release?"
  },
  {
    "id": "ci-cd-for-mobile",
    "title": "CI/CD for Mobile",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "CI/CD for Mobile connects GitHub Actions, Fastlane, Automated Builds into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Offline-First Applications"
    ],
    "topics": [
      "GitHub Actions",
      "Fastlane",
      "Automated Builds",
      "Deployment Pipelines"
    ],
    "skillsGained": [
      "Apply GitHub Actions in real mobile app workflows",
      "Connect Fastlane to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how CI/CD for Mobile fits into the mobile app lifecycle",
      "Ship a mobile feature using GitHub Actions",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Fastlane docs",
        "href": "https://docs.fastlane.tools/",
        "category": "Official Documentation"
      },
      {
        "label": "GitHub Actions mobile",
        "href": "https://docs.github.com/en/actions",
        "category": "Official Documentation"
      },
      {
        "label": "Bitrise docs",
        "href": "https://devcenter.bitrise.io/",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for GitHub Actions.",
      "Create a UI or architecture drill covering GitHub Actions and Fastlane.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a ci/cd for mobile feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in CI/CD for Mobile, and how would you detect it before release?"
  },
  {
    "id": "firebase-ecosystem",
    "title": "Firebase Ecosystem",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Firebase Ecosystem connects Authentication, Firestore, Analytics into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "CI/CD for Mobile"
    ],
    "topics": [
      "Authentication",
      "Firestore",
      "Analytics",
      "Crashlytics"
    ],
    "skillsGained": [
      "Apply Authentication in real mobile app workflows",
      "Connect Firestore to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Firebase Ecosystem fits into the mobile app lifecycle",
      "Ship a mobile feature using Authentication",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Firebase docs",
        "href": "https://firebase.google.com/docs",
        "category": "Official Documentation"
      },
      {
        "label": "Crashlytics docs",
        "href": "https://firebase.google.com/docs/crashlytics",
        "category": "Official Documentation"
      },
      {
        "label": "Firebase samples",
        "href": "https://github.com/firebase/quickstart-android",
        "category": "Open Source Apps"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Authentication.",
      "Create a UI or architecture drill covering Authentication and Firestore.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a firebase ecosystem feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Firebase Ecosystem, and how would you detect it before release?"
  },
  {
    "id": "mobile-security",
    "title": "Mobile Security",
    "stage": "Advanced",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Mobile Security connects Encryption, Secure APIs, Certificate Pinning into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Firebase Ecosystem"
    ],
    "topics": [
      "Encryption",
      "Secure APIs",
      "Certificate Pinning",
      "Reverse Engineering Protection"
    ],
    "skillsGained": [
      "Apply Encryption in real mobile app workflows",
      "Connect Secure APIs to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile Security fits into the mobile app lifecycle",
      "Ship a mobile feature using Encryption",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "OWASP MASVS",
        "href": "https://mas.owasp.org/MASVS/",
        "category": "Official Documentation"
      },
      {
        "label": "OWASP MASTG",
        "href": "https://mas.owasp.org/MASTG/",
        "category": "Official Documentation"
      },
      {
        "label": "Android security docs",
        "href": "https://developer.android.com/privacy-and-security/security-tips",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Encryption.",
      "Create a UI or architecture drill covering Encryption and Secure APIs.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile security feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile Security, and how would you detect it before release?"
  },
  {
    "id": "advanced-android-engineering",
    "title": "Advanced Android Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Advanced Android Engineering connects Jetpack Compose, Multi-Module Architecture, Advanced Performance into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile Security"
    ],
    "topics": [
      "Jetpack Compose",
      "Multi-Module Architecture",
      "Advanced Performance"
    ],
    "skillsGained": [
      "Apply Jetpack Compose in real mobile app workflows",
      "Connect Multi-Module Architecture to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Advanced Android Engineering fits into the mobile app lifecycle",
      "Ship a mobile feature using Jetpack Compose",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Jetpack Compose",
        "href": "https://developer.android.com/compose",
        "category": "Official Documentation"
      },
      {
        "label": "Android performance samples",
        "href": "https://github.com/android/performance-samples",
        "category": "Open Source Apps"
      },
      {
        "label": "Android architecture samples",
        "href": "https://github.com/android/architecture-samples",
        "category": "Open Source Apps"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Jetpack Compose.",
      "Create a UI or architecture drill covering Jetpack Compose and Multi-Module Architecture.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a advanced android engineering feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Advanced Android Engineering, and how would you detect it before release?"
  },
  {
    "id": "advanced-ios-engineering",
    "title": "Advanced iOS Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Advanced iOS Engineering connects SwiftUI Advanced, App Extensions, Widgets into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Advanced Android Engineering"
    ],
    "topics": [
      "SwiftUI Advanced",
      "App Extensions",
      "Widgets",
      "Advanced Architecture"
    ],
    "skillsGained": [
      "Apply SwiftUI Advanced in real mobile app workflows",
      "Connect App Extensions to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Advanced iOS Engineering fits into the mobile app lifecycle",
      "Ship a mobile feature using SwiftUI Advanced",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "SwiftUI docs",
        "href": "https://developer.apple.com/documentation/swiftui",
        "category": "Official Documentation"
      },
      {
        "label": "App extensions",
        "href": "https://developer.apple.com/app-extensions/",
        "category": "Official Documentation"
      },
      {
        "label": "WidgetKit docs",
        "href": "https://developer.apple.com/documentation/widgetkit",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for SwiftUI Advanced.",
      "Create a UI or architecture drill covering SwiftUI Advanced and App Extensions.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a advanced ios engineering feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Advanced iOS Engineering, and how would you detect it before release?"
  },
  {
    "id": "advanced-flutter-engineering",
    "title": "Advanced Flutter Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Advanced Flutter Engineering connects Platform Channels, Native Integrations, Advanced Rendering into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Advanced iOS Engineering"
    ],
    "topics": [
      "Platform Channels",
      "Native Integrations",
      "Advanced Rendering"
    ],
    "skillsGained": [
      "Apply Platform Channels in real mobile app workflows",
      "Connect Native Integrations to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Advanced Flutter Engineering fits into the mobile app lifecycle",
      "Ship a mobile feature using Platform Channels",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Platform channels",
        "href": "https://docs.flutter.dev/platform-integration/platform-channels",
        "category": "Official Documentation"
      },
      {
        "label": "Flutter rendering",
        "href": "https://docs.flutter.dev/resources/architectural-overview",
        "category": "Official Documentation"
      },
      {
        "label": "Flutter gallery",
        "href": "https://github.com/flutter/gallery",
        "category": "Open Source Apps"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Platform Channels.",
      "Create a UI or architecture drill covering Platform Channels and Native Integrations.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a advanced flutter engineering feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Advanced Flutter Engineering, and how would you detect it before release?"
  },
  {
    "id": "advanced-react-native-engineering",
    "title": "Advanced React Native Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Advanced React Native Engineering connects Native Modules, New Architecture, Turbo Modules into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Advanced Flutter Engineering"
    ],
    "topics": [
      "Native Modules",
      "New Architecture",
      "Turbo Modules",
      "Fabric"
    ],
    "skillsGained": [
      "Apply Native Modules in real mobile app workflows",
      "Connect New Architecture to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Advanced React Native Engineering fits into the mobile app lifecycle",
      "Ship a mobile feature using Native Modules",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "React Native new architecture",
        "href": "https://reactnative.dev/docs/the-new-architecture/landing-page",
        "category": "Official Documentation"
      },
      {
        "label": "Turbo Native Modules",
        "href": "https://reactnative.dev/docs/turbo-native-modules-introduction",
        "category": "Official Documentation"
      },
      {
        "label": "Fabric renderer",
        "href": "https://reactnative.dev/architecture/fabric-renderer",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Native Modules.",
      "Create a UI or architecture drill covering Native Modules and New Architecture.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a advanced react native engineering feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Advanced React Native Engineering, and how would you detect it before release?"
  },
  {
    "id": "mobile-devops",
    "title": "Mobile DevOps",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Mobile DevOps connects App Distribution, Monitoring, Observability into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Advanced React Native Engineering"
    ],
    "topics": [
      "App Distribution",
      "Monitoring",
      "Observability",
      "Release Management"
    ],
    "skillsGained": [
      "Apply App Distribution in real mobile app workflows",
      "Connect Monitoring to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile DevOps fits into the mobile app lifecycle",
      "Ship a mobile feature using App Distribution",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "App Store Connect docs",
        "href": "https://developer.apple.com/help/app-store-connect/",
        "category": "Official Documentation"
      },
      {
        "label": "Google Play Console docs",
        "href": "https://support.google.com/googleplay/android-developer/",
        "category": "Official Documentation"
      },
      {
        "label": "Firebase App Distribution",
        "href": "https://firebase.google.com/docs/app-distribution",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for App Distribution.",
      "Create a UI or architecture drill covering App Distribution and Monitoring.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile devops feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile DevOps, and how would you detect it before release?"
  },
  {
    "id": "mobile-system-design",
    "title": "Mobile System Design",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Mobile System Design connects Scalable Mobile Apps, Offline Architecture, Real-Time Systems into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile DevOps"
    ],
    "topics": [
      "Scalable Mobile Apps",
      "Offline Architecture",
      "Real-Time Systems",
      "Synchronization"
    ],
    "skillsGained": [
      "Apply Scalable Mobile Apps in real mobile app workflows",
      "Connect Offline Architecture to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Mobile System Design fits into the mobile app lifecycle",
      "Ship a mobile feature using Scalable Mobile Apps",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Designing mobile systems",
        "href": "https://developer.android.com/topic/architecture",
        "category": "Official Documentation"
      },
      {
        "label": "Realtime database docs",
        "href": "https://firebase.google.com/docs/database",
        "category": "Official Documentation"
      },
      {
        "label": "Offline-first guide",
        "href": "https://developer.android.com/topic/architecture/data-layer/offline-first",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Scalable Mobile Apps.",
      "Create a UI or architecture drill covering Scalable Mobile Apps and Offline Architecture.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a mobile system design feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Mobile System Design, and how would you detect it before release?"
  },
  {
    "id": "emerging-mobile-technologies",
    "title": "Emerging Mobile Technologies",
    "stage": "Expert",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Emerging Mobile Technologies connects AI in Mobile Apps, Wearables, AR/VR into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Mobile System Design"
    ],
    "topics": [
      "AI in Mobile Apps",
      "Wearables",
      "AR/VR",
      "IoT Mobile Apps"
    ],
    "skillsGained": [
      "Apply AI in Mobile Apps in real mobile app workflows",
      "Connect Wearables to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Emerging Mobile Technologies fits into the mobile app lifecycle",
      "Ship a mobile feature using AI in Mobile Apps",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "ARCore docs",
        "href": "https://developers.google.com/ar",
        "category": "Official Documentation"
      },
      {
        "label": "ARKit docs",
        "href": "https://developer.apple.com/augmented-reality/arkit/",
        "category": "Official Documentation"
      },
      {
        "label": "Wear OS docs",
        "href": "https://developer.android.com/wear",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for AI in Mobile Apps.",
      "Create a UI or architecture drill covering AI in Mobile Apps and Wearables.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a emerging mobile technologies feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Emerging Mobile Technologies, and how would you detect it before release?"
  },
  {
    "id": "leadership-and-engineering-practices",
    "title": "Leadership & Engineering Practices",
    "stage": "Expert",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Leadership & Engineering Practices connects Code Reviews, Team Collaboration, Technical Documentation into practical mobile engineering skill for production apps.",
    "prerequisites": [
      "Emerging Mobile Technologies"
    ],
    "topics": [
      "Code Reviews",
      "Team Collaboration",
      "Technical Documentation",
      "Architecture Decisions"
    ],
    "skillsGained": [
      "Apply Code Reviews in real mobile app workflows",
      "Connect Team Collaboration to platform-specific engineering decisions",
      "Debug mobile performance, UX, and release risks",
      "Build portfolio-ready mobile features"
    ],
    "learningOutcomes": [
      "Explain how Leadership & Engineering Practices fits into the mobile app lifecycle",
      "Ship a mobile feature using Code Reviews",
      "Evaluate tradeoffs across Android, iOS, and cross-platform delivery"
    ],
    "resources": [
      {
        "label": "Google engineering practices",
        "href": "https://google.github.io/eng-practices/",
        "category": "Community Resources"
      },
      {
        "label": "Architecture decision records",
        "href": "https://adr.github.io/",
        "category": "Community Resources"
      },
      {
        "label": "Mobile app quality",
        "href": "https://developer.android.com/docs/quality-guidelines",
        "category": "Official Documentation"
      }
    ],
    "practiceExercises": [
      "Build a focused coding challenge for Code Reviews.",
      "Create a UI or architecture drill covering Code Reviews and Team Collaboration.",
      "Document a real-world mobile scenario and how you would debug it."
    ],
    "miniProject": "Build a leadership & engineering practices feature inside a production-style mobile app shell.",
    "realWorldApplications": [
      "Consumer mobile apps",
      "Enterprise mobile platforms",
      "Cross-platform product delivery"
    ],
    "quiz": "What mobile failure mode would you expect in Leadership & Engineering Practices, and how would you detect it before release?"
  }
];

const projectTracks: ProjectTrack[] = [
  {
    "stage": "Beginner",
    "projects": [
      "Calculator App",
      "Notes App",
      "Weather App",
      "Expense Tracker"
    ]
  },
  {
    "stage": "Intermediate",
    "projects": [
      "Authentication App",
      "Chat Application",
      "Food Delivery App",
      "Fitness Tracker"
    ]
  },
  {
    "stage": "Advanced",
    "projects": [
      "E-Commerce Mobile App",
      "Real-Time Messaging Platform",
      "Social Media Application",
      "Ride Sharing Application"
    ]
  },
  {
    "stage": "Expert",
    "projects": [
      "Multi-Tenant Mobile SaaS",
      "Enterprise Mobile Platform",
      "Offline-First Business Application",
      "Large-Scale Cross-Platform Ecosystem"
    ]
  }
];


const careerPaths: RoadmapPath[] = [
  {
    "title": "Android Developer",
    "focus": "Build Kotlin, Jetpack, Compose, Room, WorkManager, and Play Store-ready Android applications.",
    "milestones": [
      "Compose UI",
      "Room database",
      "Play release"
    ]
  },
  {
    "title": "iOS Developer",
    "focus": "Build Swift, SwiftUI, UIKit, Core Data, APNs, and App Store-ready iOS applications.",
    "milestones": [
      "SwiftUI app",
      "Core Data flow",
      "App Store build"
    ]
  },
  {
    "title": "Flutter Developer",
    "focus": "Ship Dart, widgets, Riverpod/Bloc, platform channels, and polished cross-platform apps.",
    "milestones": [
      "Widget system",
      "State management",
      "Platform channel"
    ]
  },
  {
    "title": "React Native Developer",
    "focus": "Ship native-feeling React Native apps with navigation, native modules, and performance tuning.",
    "milestones": [
      "Navigation flow",
      "Native module",
      "Perf pass"
    ]
  },
  {
    "title": "Cross-Platform Engineer",
    "focus": "Choose stack tradeoffs, manage shared design systems, and coordinate Android/iOS delivery.",
    "milestones": [
      "Shared UI kit",
      "Release pipeline",
      "Device QA matrix"
    ]
  },
  {
    "title": "Mobile Architect",
    "focus": "Lead scalable mobile architecture, modularization, offline sync, security, and release strategy.",
    "milestones": [
      "Architecture ADR",
      "Offline strategy",
      "Security review"
    ]
  }
];

const certificationPaths: RoadmapPath[] = [
  {
    "title": "Google Associate Android Developer",
    "focus": "Android fundamentals, Kotlin, Jetpack, UI, data persistence, testing, and app quality.",
    "milestones": [
      "Kotlin basics",
      "Jetpack app",
      "Testing practice"
    ]
  },
  {
    "title": "Flutter Certification Path",
    "focus": "Dart, widgets, state management, animations, navigation, platform integration, and release basics.",
    "milestones": [
      "Dart fluency",
      "Flutter app",
      "Platform integration"
    ]
  },
  {
    "title": "Apple Developer Learning Path",
    "focus": "Swift, SwiftUI, Xcode, app lifecycle, HIG, data persistence, and App Store delivery.",
    "milestones": [
      "SwiftUI app",
      "HIG review",
      "App Store prep"
    ]
  },
  {
    "title": "Firebase Certification Path",
    "focus": "Firebase Auth, Firestore, Cloud Messaging, Analytics, Crashlytics, and app distribution.",
    "milestones": [
      "Auth setup",
      "Firestore sync",
      "Crashlytics dashboard"
    ]
  },
  {
    "title": "React Native Professional Path",
    "focus": "React Native fundamentals, navigation, native modules, performance, testing, and release workflows.",
    "milestones": [
      "RN app",
      "Native bridge",
      "Release pipeline"
    ]
  }
];

const achievementBadges: string[] = [
  "Mobile Starter",
  "Android Builder",
  "iOS Crafter",
  "Flutter Shipper",
  "React Native Pro",
  "Offline Architect",
  "Security Sentinel",
  "Release Lead"
];


const resourceCategories: string[] = ["Official Documentation", "Video Courses", "Open Source Apps", "Community Resources", "Design Resources"];

const gamificationCards: Array<[string, string]> = [
  ["XP System", "Award XP for completed topics, coding challenges, UI drills, architecture reviews, certification milestones, and streaks."],
  ["Achievement Badges", "Unlock visible badges for Android, iOS, Flutter, React Native, offline-first, security, performance, and release mastery."],
  ["Milestones", "Mark phase completions with certification-ready checkpoints and app portfolio prompts."],
  ["Learning Challenges", "Add weekly mobile UI challenges, debugging exercises, architecture drills, and release missions."],
  ["Interactive Quizzes", "Attach quiz prompts, coding exercises, UI tasks, debugging checks, and architecture scenarios to each topic."],
  ["Progress Sync", "Store notes, bookmarks, XP, completions, coding challenge results, app builds, release runs, and certification progress per user account."],
];

const architectureCards: Array<[string, string]> = [
  ["Component hierarchy", "MobileDeveloperRoadmap -> RoadmapPageShell -> ProgressDashboard -> RoadmapNodeCard -> ResourceMatrix -> ProjectTrackSection -> CareerPathPanel -> CertificationPanel."],
  ["Folder architecture", "Reusable shell lives in src/components/roadmap/RoadmapPageShell.tsx; roadmap pages now provide typed curriculum data and page-specific configuration."],
  ["TypeScript interfaces", "Stage, Difficulty, Resource, RoadmapNode, StageSummary, ProjectTrack, MobileSpecializationPath, CertificationPath, PlatformBadge, ProgressSchema."],
  ["Tailwind structure", "Black base surface, zinc borders, red accent states, compact 13px root scale, mobile dashboard grids, sticky platform-readiness panel, accessible focus and pressed states."],
  ["Framer Motion plan", "Use motion only for node expansion, platform graph pulse states, readiness score transitions, and badge unlocks with reduced-motion fallbacks once the dependency is installed."],
  ["shadcn/ui plan", "Extract buttons, cards, progress, tabs, textareas, badges, accordions, challenge cards, and command navigation into shadcn-style primitives when the component library is added."],
  ["Feature specifications", "Completion tracking, bookmarks, challenge notes, UI exercises, debugging scenarios, quizzes, XP, certification tracker, progress sync, recommended next step."],
  ["UX improvements", "Vertical mobile engineering progression, skill dependency graph, low-glow premium surfaces, platform lanes, readiness widgets, mobile-first single-column behavior."],
];

const readinessMetrics: ReadinessMetric[] = [
  { label: "Android readiness", icon: "server", topicTitles: ["Android Development", "Kotlin for Android", "Advanced Android Engineering", "Firebase Ecosystem"] },
  { label: "iOS readiness", icon: "layers", topicTitles: ["iOS Development", "Swift Development", "Advanced iOS Engineering"] },
  { label: "Flutter readiness", icon: "shield", topicTitles: ["Flutter Development", "State Management", "Advanced Flutter Engineering"] },
  { label: "React Native", icon: "code", topicTitles: ["React Native Development", "Advanced React Native Engineering", "Backend Integration"] },
];

export default function MobileDeveloperRoadmap() {
  return (
    <RoadmapPageShell
      storageKey="demontech-mobile-roadmap"
      breadcrumb="Mobile Developer"
      eyebrow="Production Mobile Engineering Path"
      title="Mobile Developer Roadmap"
      description="A complete production-grade mobile engineering journey across Android, iOS, Flutter, React Native, architecture, backend integration, security, performance, CI/CD, and release operations."
      stats={[
        ["33", "Roadmap nodes", "layers"],
        ["88-120 weeks", "Total duration", "clock"],
        ["150+", "Mobile skills", "badge"],
        ["16", "Mobile projects", "target"],
      ]}
      architectureLabel="Mobile Platform Architecture"
      projectIntro="Every phase ends with practical mobile apps that combine UI, state, storage, backend integration, security, testing, release, and observability."
      journeyTitle="Vertical Mobile Engineering Journey"
      journeyDescription="Expand each node for prerequisites, learning outcomes, resources, coding challenges, architecture drills, real-world scenarios, quizzes, bookmarks, and notes."
      resourceTitle="Mobile Engineering Resource Matrix"
      pathTitle="Mobile Specialization Paths"
      pathDescription="The roadmap supports Android, iOS, Flutter, React Native, cross-platform engineering, and mobile architecture without splitting fundamentals too early."
      certificationTitle="Mobile Certifications Tracker"
      certificationDescription="Map roadmap progress to practical Android, Flutter, Apple, Firebase, and React Native certification goals without turning the page into a memorization checklist."
      gamificationTitle="Gamification & Mobile Learning Tools"
      progressTitle="Mobile Development Progress"
      readinessTitle="Platform Readiness"
      estimatedTime="88-120w"
      miniProjectLabel="Mini Project"
      stageSummaries={stageSummaries}
      roadmapNodes={roadmapNodes}
      projectTracks={projectTracks}
      resourceCategories={resourceCategories}
      paths={careerPaths}
      certifications={certificationPaths}
      gamificationCards={gamificationCards}
      architectureCards={architectureCards}
      achievementBadges={achievementBadges}
      readinessMetrics={readinessMetrics}
    />
  );
}
