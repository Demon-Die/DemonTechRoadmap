"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;
type Topic = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  explanation: string;
  subtopics: string[];
  keyPoints: string[];
  practice: string;
  resources: number;
};
type Lesson = {
  theory: string[];
  code: string;
  codeNotes: string[];
};

const navItems = ["Roadmaps", "Resources", "Guides", "Docs", "Community"];

const topics: Topic[] = [
  {
    id: "what-is-react",
    title: "What is React?",
    level: "Beginner",
    summary: "Understand React as a component-based UI library and learn where it fits in modern apps.",
    explanation:
      "React is an open-source JavaScript library for building user interfaces. It lets you describe the UI as a tree of reusable components, then updates only the parts that change so interfaces stay predictable and efficient.",
    subtopics: ["Components", "Virtual DOM", "Declarative UI", "Props", "Ecosystem"],
    keyPoints: [
      "React was developed by Meta and is used for web and native interfaces.",
      "Components combine markup, logic, and state into reusable UI pieces.",
      "Data usually flows down from parent components to child components through props.",
    ],
    practice: "Create a Vite React app, run it locally, and replace the starter screen with your own profile component.",
    resources: 8,
  },
  {
    id: "jsx",
    title: "JSX - JavaScript XML",
    level: "Beginner",
    summary: "Write UI markup inside JavaScript and learn JSX rules, expressions, lists, and keys.",
    explanation:
      "JSX is a syntax extension that looks like HTML but compiles into JavaScript function calls. It lets React components describe their output in a readable, declarative way while still using JavaScript expressions for dynamic values.",
    subtopics: ["JSX basics", "Expressions", "Conditional rendering", "Lists", "Keys"],
    keyPoints: [
      "Use className instead of class and close every tag.",
      "JavaScript expressions go inside curly braces.",
      "List keys should be unique and stable so React can track changes correctly.",
    ],
    practice: "Render a list of learning tasks with stable IDs, status badges, and conditional empty-state text.",
    resources: 9,
  },
  {
    id: "components",
    title: "Components",
    level: "Beginner",
    summary: "Build function components, pass props, use children, and compose small pieces into screens.",
    explanation:
      "A React component is a JavaScript function that accepts inputs called props and returns JSX. Components make apps easier to reason about because each part of the UI can own a focused responsibility.",
    subtopics: ["Function components", "Props", "children", "Composition", "Naming"],
    keyPoints: [
      "Component names must start with a capital letter.",
      "Props are read-only inputs from parent to child components.",
      "Composition is usually cleaner than trying to make one component handle every case.",
    ],
    practice: "Build Card, Button, and Profile components, then compose them into a small dashboard.",
    resources: 10,
  },
  {
    id: "core-hooks",
    title: "Core Hooks",
    level: "Beginner",
    summary: "Use useState, useEffect, and useRef while following the rules of hooks.",
    explanation:
      "Hooks are special functions that let function components use state, side effects, refs, and other React features. They must be called at the top level of a component or custom hook so React can preserve call order across renders.",
    subtopics: ["useState", "useEffect", "useRef", "Cleanup", "Rules of Hooks"],
    keyPoints: [
      "useState stores local state and triggers re-renders when updated.",
      "useEffect synchronizes with external systems after render.",
      "useRef stores mutable values that persist without causing re-renders.",
    ],
    practice: "Create a counter with reset behavior, an auto-focus input, and a title update effect.",
    resources: 12,
  },
  {
    id: "events-forms",
    title: "Handling Events & Forms",
    level: "Beginner",
    summary: "Handle user events and build controlled forms for text, selects, checkboxes, and submissions.",
    explanation:
      "React events are passed as props such as onClick and onChange. Forms become predictable when inputs are controlled by React state, because the displayed value and submitted value come from the same source.",
    subtopics: ["Events", "Controlled inputs", "Checkboxes", "Selects", "Validation"],
    keyPoints: [
      "Event handlers receive a synthetic event object.",
      "Controlled inputs use value and onChange together.",
      "Prevent default form submission when handling the submit in JavaScript.",
    ],
    practice: "Build a signup form with validation, checkbox consent, and a submitted preview panel.",
    resources: 9,
  },
  {
    id: "context-api",
    title: "Context API",
    level: "Intermediate",
    summary: "Share values like theme, auth, or locale without passing props through every layer.",
    explanation:
      "Context lets a parent provider expose a value to all components below it. It is useful for app-level state that many distant components need, but it should not replace local props for ordinary parent-child communication.",
    subtopics: ["createContext", "Provider", "useContext", "Theme", "Auth"],
    keyPoints: [
      "Context removes prop drilling for truly shared values.",
      "Provider value changes can re-render all consumers.",
      "Keep context focused so unrelated updates do not spread through the app.",
    ],
    practice: "Create a ThemeContext with light/dark mode and consume it from nested components.",
    resources: 8,
  },
  {
    id: "use-reducer",
    title: "useReducer",
    level: "Intermediate",
    summary: "Manage complex state transitions with actions, reducers, and predictable updates.",
    explanation:
      "useReducer is useful when state has multiple fields or updates depend on action types. A reducer receives the current state and an action, then returns the next state without mutating the original object.",
    subtopics: ["Reducer", "Actions", "Dispatch", "Immutable updates", "Complex state"],
    keyPoints: [
      "Reducers keep transition logic in one predictable function.",
      "Actions describe what happened rather than directly changing state.",
      "Always return new state objects instead of mutating existing state.",
    ],
    practice: "Build a todo reducer with add, toggle, edit, delete, and clear-completed actions.",
    resources: 7,
  },
  {
    id: "custom-hooks",
    title: "Custom Hooks",
    level: "Intermediate",
    summary: "Extract reusable stateful logic into hooks like useFetch, useLocalStorage, and useDebounce.",
    explanation:
      "Custom hooks are JavaScript functions whose names start with use and may call other hooks. They let you reuse behavior across components without duplicating state and effect logic.",
    subtopics: ["useFetch", "useLocalStorage", "useDebounce", "Reuse", "Cleanup"],
    keyPoints: [
      "Custom hooks share logic, not component markup.",
      "A hook can return values, functions, or objects tailored to the caller.",
      "Keep hooks focused and document what inputs trigger their effects.",
    ],
    practice: "Write useLocalStorage for saved preferences and useDebounce for a search box.",
    resources: 9,
  },
  {
    id: "memo-callback",
    title: "useMemo & useCallback",
    level: "Intermediate",
    summary: "Memoize expensive computed values and stable callback references when performance needs it.",
    explanation:
      "useMemo caches a computed value, while useCallback caches a function reference. They are optimization tools, best used when rerender cost or referential equality actually matters.",
    subtopics: ["useMemo", "useCallback", "Dependencies", "Referential equality", "Optimization"],
    keyPoints: [
      "Do not memoize everything by default.",
      "Dependency arrays must include values used inside the memoized calculation.",
      "useCallback is most useful with memoized children or hook dependencies.",
    ],
    practice: "Filter a large product list with useMemo and pass a stable onSelect handler to memoized rows.",
    resources: 8,
  },
  {
    id: "react-memo-performance",
    title: "React.memo & Performance",
    level: "Intermediate",
    summary: "Reduce unnecessary renders and profile performance before optimizing.",
    explanation:
      "React.memo can skip rendering a component when its props have not changed. It is helpful for expensive child components, but it works best when props are stable and the optimization is supported by profiling.",
    subtopics: ["React.memo", "Profiler", "Stable props", "Render cost", "Checklist"],
    keyPoints: [
      "Measure performance before adding optimizations.",
      "Inline objects and functions can defeat memoization unless stabilized.",
      "Often the best optimization is moving state closer to where it is used.",
    ],
    practice: "Profile a list UI, memoize row components, and compare render counts before and after.",
    resources: 7,
  },
  {
    id: "react-router",
    title: "React Router v6",
    level: "Intermediate",
    summary: "Create client-side routes, nested layouts, links, URL params, and protected pages.",
    explanation:
      "React Router maps URLs to components in a single-page app. It supports nested routes, layout routes, params, navigation links, redirects, and loader-style patterns depending on the router setup.",
    subtopics: ["BrowserRouter", "Routes", "Link", "Params", "Protected routes"],
    keyPoints: [
      "Use Link or NavLink for client-side navigation.",
      "Nested routes are ideal for shared layouts.",
      "URL params let one route render detail pages for many records.",
    ],
    practice: "Build Home, Courses, CourseDetail, and Dashboard routes with a simple protected route wrapper.",
    resources: 8,
  },
  {
    id: "react-hook-form",
    title: "Advanced Forms with React Hook Form",
    level: "Intermediate",
    summary: "Build scalable forms with field registration, validation, error messages, and submit handling.",
    explanation:
      "React Hook Form helps manage form state with less rerendering and cleaner validation. It is especially useful for larger forms where manual controlled state becomes repetitive.",
    subtopics: ["register", "handleSubmit", "Validation", "Errors", "Form state"],
    keyPoints: [
      "Register fields so the library can track their values.",
      "Keep validation messages close to the fields they describe.",
      "Use schema validation when forms become complex or shared.",
    ],
    practice: "Create a profile form with required fields, email validation, and inline error messages.",
    resources: 8,
  },
  {
    id: "component-patterns",
    title: "Advanced Component Patterns",
    level: "Advanced",
    summary: "Learn compound components, render props, HOCs, forwarded refs, and imperative handles.",
    explanation:
      "Advanced patterns help create flexible component APIs. They are powerful when building design systems or reusable libraries, but they should make usage clearer rather than adding cleverness for its own sake.",
    subtopics: ["Compound components", "Render props", "HOC", "forwardRef", "useImperativeHandle"],
    keyPoints: [
      "Compound components let related pieces share implicit state.",
      "Render props pass rendering control to the caller.",
      "forwardRef lets parent components access a child DOM node or imperative API.",
    ],
    practice: "Build Tabs with compound components and a custom input that exposes focus through a ref.",
    resources: 10,
  },
  {
    id: "lazy-suspense",
    title: "Code Splitting, Lazy Loading & Suspense",
    level: "Advanced",
    summary: "Load components on demand and show fallback UI while chunks or data are pending.",
    explanation:
      "Code splitting keeps initial bundles smaller by loading parts of the app only when needed. React.lazy and Suspense make route-level or component-level lazy loading straightforward.",
    subtopics: ["React.lazy", "Suspense", "Fallbacks", "Dynamic imports", "Chunks"],
    keyPoints: [
      "Lazy loading is ideal for routes, modals, charts, and heavy screens.",
      "Suspense fallback UI should be informative and stable.",
      "Do not split so aggressively that navigation feels fragmented.",
    ],
    practice: "Lazy-load an AdminPanel component and wrap it in Suspense with a polished loading state.",
    resources: 8,
  },
  {
    id: "error-boundaries",
    title: "Error Boundaries",
    level: "Advanced",
    summary: "Catch render-time UI errors and show resilient fallback screens.",
    explanation:
      "Error boundaries catch errors during rendering, lifecycle methods, and constructors of child components. They keep one broken widget from taking down the whole interface.",
    subtopics: ["Fallback UI", "componentDidCatch", "getDerivedStateFromError", "Recovery", "Logging"],
    keyPoints: [
      "Error boundaries must currently be class components or provided by a library.",
      "They do not catch errors in event handlers or async callbacks.",
      "Log errors so failures can be fixed, not only hidden from users.",
    ],
    practice: "Wrap a risky widget in an error boundary and add a retry/reset path.",
    resources: 6,
  },
  {
    id: "react-18-features",
    title: "React 18 Features",
    level: "Advanced",
    summary: "Understand concurrent rendering, transitions, automatic batching, and deferred values.",
    explanation:
      "React 18 introduced concurrent rendering capabilities that help keep apps responsive during expensive updates. Features like useTransition and useDeferredValue let urgent updates stay smooth while slower UI catches up.",
    subtopics: ["Concurrent rendering", "useTransition", "Automatic batching", "useDeferredValue", "Responsiveness"],
    keyPoints: [
      "Concurrent rendering lets React prepare UI without blocking urgent work.",
      "useTransition marks non-urgent state updates.",
      "Automatic batching groups multiple updates into fewer renders.",
    ],
    practice: "Add useTransition to a slow search UI and compare typing responsiveness.",
    resources: 8,
  },
  {
    id: "state-management",
    title: "State Management",
    level: "Advanced",
    summary: "Choose between local state, context, reducers, Zustand, and TanStack Query.",
    explanation:
      "State management is about putting each kind of state in the right place. Local UI state, shared client state, URL state, and server cache state often need different tools.",
    subtopics: ["Local state", "Context", "Zustand", "TanStack Query", "Server state"],
    keyPoints: [
      "Keep state local until multiple places truly need it.",
      "Use server-state tools for fetching, caching, refetching, and loading states.",
      "Small stores are easier to maintain than one giant global store.",
    ],
    practice: "Build a small Zustand store for UI preferences and use TanStack Query for fetched course data.",
    resources: 10,
  },
  {
    id: "typescript-react",
    title: "TypeScript with React",
    level: "Advanced",
    summary: "Type props, events, state, refs, children, and reusable component APIs.",
    explanation:
      "TypeScript makes React code safer by describing component inputs and state shapes. Strong props and event types catch many UI integration mistakes before runtime.",
    subtopics: ["Props types", "Events", "Refs", "Children", "Generics"],
    keyPoints: [
      "Type component props explicitly so callers know the contract.",
      "Use React event types for handlers such as ChangeEvent and FormEvent.",
      "Avoid any unless you are intentionally bridging unknown external data.",
    ],
    practice: "Convert a JavaScript TodoList component to TypeScript with typed props, events, and state.",
    resources: 9,
  },
  {
    id: "testing-react",
    title: "Testing React",
    level: "Advanced",
    summary: "Test components through user behavior with React Testing Library, mocks, and async assertions.",
    explanation:
      "React Testing Library encourages tests that interact with components the way users do. Instead of checking implementation details, you query visible output, fire events, and assert behavior.",
    subtopics: ["React Testing Library", "Jest", "Vitest", "user-event", "Async tests"],
    keyPoints: [
      "Prefer accessible queries such as getByRole and findByText.",
      "Test behavior rather than component internals.",
      "Async UI should be tested with findBy queries or waitFor.",
    ],
    practice: "Test a login form for validation errors, successful submit, and loading state.",
    resources: 9,
  },
];

const topicLessons: Record<string, Lesson> = {
  "what-is-react": {
    theory: [
      "React apps are built from components. A component can be tiny, like a button, or large, like an entire dashboard screen. The important idea is that every component describes how its UI should look for a given set of props and state.",
      "The Vite setup from the source document is the fastest beginner path: create the app, install dependencies, run the dev server, then edit App.jsx and component files under src.",
    ],
    code: `// App.jsx
function WelcomeCard({ name }) {
  return (
    <section className="card">
      <h1>Welcome, {name}</h1>
      <p>Start learning React one component at a time.</p>
    </section>
  );
}

export default function App() {
  return <WelcomeCard name="Rishi" />;
}`,
    codeNotes: [
      "Components are plain JavaScript functions that return JSX.",
      "Props pass data from the parent App component into WelcomeCard.",
      "The component can be reused with a different name prop.",
    ],
  },
  jsx: {
    theory: [
      "JSX lets you keep the visual structure of a component close to the JavaScript logic that controls it. Under the hood, tooling transforms JSX into calls React can use to create elements.",
      "Conditional rendering can use ternaries, short-circuit expressions, early returns, or variables. Choose the style that keeps the component easiest to read.",
    ],
    code: `const tasks = [
  { id: "jsx", title: "Learn JSX", done: true },
  { id: "props", title: "Practice props", done: false },
];

export default function TaskList() {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.done ? "Done" : "In progress"}
        </li>
      ))}
    </ul>
  );
}`,
    codeNotes: [
      "The map call turns data into JSX list items.",
      "task.id is a stable key, which is better than using the array index.",
      "The ternary chooses which status text to render.",
    ],
  },
  components: {
    theory: [
      "Props should make a component configurable while keeping ownership clear. A Button should not know the whole app; it should know its label, variant, disabled state, and click handler.",
      "The children prop is a special prop for nested content. It lets layout components such as Card, Modal, and PageSection wrap whatever content the caller provides.",
    ],
    code: `function Card({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  );
}

function Profile({ user }) {
  return (
    <Card title={user.name}>
      <p>{user.role}</p>
      <p>{user.location}</p>
    </Card>
  );
}`,
    codeNotes: [
      "Card receives children and renders them inside its body.",
      "Profile composes Card instead of duplicating layout markup.",
      "The user object keeps related fields together.",
    ],
  },
  "core-hooks": {
    theory: [
      "useState is the first hook most learners need. When a setter runs, React schedules a render with the new state, and the component returns updated JSX.",
      "useEffect is for synchronizing React with something outside rendering, such as subscriptions, timers, imperative DOM APIs, or browser APIs. Many data fetching cases are better handled by a framework or TanStack Query in production apps.",
    ],
    code: `import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <section>
      <p>Count: {count}</p>
      <button ref={buttonRef} onClick={() => setCount((c) => c + 1)}>
        Add
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}`,
    codeNotes: [
      "The functional update form uses the previous count safely.",
      "The effect reruns only when count changes.",
      "The ref persists between renders without triggering renders itself.",
    ],
  },
  "events-forms": {
    theory: [
      "React event handlers are camelCased props. You pass a function reference, and React calls it when the event happens.",
      "Controlled forms store input values in state. This makes validation, formatting, disabling submit buttons, and rendering previews much easier to coordinate.",
    ],
    code: `import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", agree: false });

  function updateField(event) {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={updateField} />
      <input name="email" value={form.email} onChange={updateField} />
      <label>
        <input name="agree" type="checkbox" checked={form.agree} onChange={updateField} />
        I agree
      </label>
      <button disabled={!form.agree}>Create account</button>
    </form>
  );
}`,
    codeNotes: [
      "The input name decides which field to update.",
      "Checkboxes use checked instead of value for their state.",
      "preventDefault keeps the browser from reloading the page.",
    ],
  },
  "context-api": {
    theory: [
      "Context is best for values that feel global to a section of the app: theme, active user, locale, permissions, or a selected organization.",
      "Because context updates notify consumers, avoid putting constantly changing unrelated data into one huge context object.",
    ],
    code: `import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme((value) => (value === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Theme: {theme}</button>;
}`,
    codeNotes: [
      "The provider makes its value available below it.",
      "useContext reads the nearest matching provider value.",
      "The custom provider keeps theme logic in one place.",
    ],
  },
  "use-reducer": {
    theory: [
      "Reducers are especially useful when state changes have names: add item, remove item, toggle completed, reset form, or load success. This keeps complex update logic away from JSX.",
      "A reducer should be pure. It should calculate the next state from inputs and avoid side effects such as network requests or direct mutation.",
    ],
    code: `import { useReducer } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "add":
      return [...todos, { id: crypto.randomUUID(), text: action.text, done: false }];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return todos;
  }
}

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  return <button onClick={() => dispatch({ type: "add", text: "Learn reducers" })}>Add</button>;
}`,
    codeNotes: [
      "dispatch sends an action object to the reducer.",
      "The reducer returns a new array for each state change.",
      "The switch statement keeps action types explicit.",
    ],
  },
  "custom-hooks": {
    theory: [
      "Custom hooks let components stay focused on UI. If several components need the same storage, fetching, subscription, or timing behavior, extract that behavior into a hook.",
      "A custom hook follows the same rules as built-in hooks. It can call useState, useEffect, useMemo, and other hooks at the top level.",
    ],
    code: `import { useEffect, useState } from "react";

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  return <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={debouncedQuery} />;
}`,
    codeNotes: [
      "The timeout updates debounced only after typing pauses.",
      "The cleanup cancels the previous timeout when value changes.",
      "The hook can be reused in any component that needs debouncing.",
    ],
  },
  "memo-callback": {
    theory: [
      "useMemo saves the result of a calculation until its dependencies change. It can help when filtering, sorting, or deriving data is expensive.",
      "useCallback saves a function reference. This matters when a child component uses React.memo or when a function is a dependency for another hook.",
    ],
    code: `import { useCallback, useMemo, useState } from "react";

export default function ProductSearch({ products, onPick }) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(
    () => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())),
    [products, query],
  );

  const handlePick = useCallback((product) => onPick(product.id), [onPick]);

  return filteredProducts.map((product) => (
    <button key={product.id} onClick={() => handlePick(product)}>{product.name}</button>
  ));
}`,
    codeNotes: [
      "The filtered list recalculates only when products or query changes.",
      "handlePick keeps the same reference while onPick is unchanged.",
      "Memoization adds complexity, so use it where it solves a real render cost.",
    ],
  },
  "react-memo-performance": {
    theory: [
      "React is already efficient for many apps, so performance work should start with a profiler. Once you find a slow component, memoization, state placement, and virtualization become targeted tools.",
      "React.memo performs a shallow props comparison. If props are new objects or functions every render, memoized children may still rerender.",
    ],
    code: `import { memo, useState } from "react";

const CourseRow = memo(function CourseRow({ course, onSelect }) {
  return <button onClick={() => onSelect(course.id)}>{course.title}</button>;
});

export default function CourseList({ courses }) {
  const [selected, setSelected] = useState(null);
  return courses.map((course) => (
    <CourseRow key={course.id} course={course} onSelect={setSelected} />
  ));
}`,
    codeNotes: [
      "memo can skip CourseRow renders when props are unchanged.",
      "The state setter from useState is stable, so onSelect stays stable here.",
      "Profile before and after to verify the optimization helped.",
    ],
  },
  "react-router": {
    theory: [
      "React Router keeps the app shell loaded while swapping route components based on the URL. This gives SPA navigation without full page reloads.",
      "Nested routes let parent layouts render shared navigation while child routes render specific content in an Outlet.",
    ],
    code: `import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";

function CourseDetail() {
  const { courseId } = useParams();
  return <h1>Course: {courseId}</h1>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <nav><Link to="/courses/react">React Course</Link></nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    codeNotes: [
      "Link changes the URL without a full page reload.",
      "The :courseId segment becomes a URL param.",
      "Routes chooses the element that matches the current path.",
    ],
  },
  "react-hook-form": {
    theory: [
      "React Hook Form reduces the boilerplate of manually wiring every field to useState. It tracks values, errors, dirty state, and submission through a form-focused API.",
      "Start with simple built-in validation rules, then move to a schema library when validation needs to be shared or becomes more complex.",
    ],
    code: `import { useForm } from "react-hook-form";

export default function ProfileForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "Email is required" })} />
      {errors.email && <p>{errors.email.message}</p>}
      <button>Save profile</button>
    </form>
  );
}`,
    codeNotes: [
      "register connects the input to form state.",
      "handleSubmit validates before calling onSubmit.",
      "errors exposes validation messages for the UI.",
    ],
  },
  "component-patterns": {
    theory: [
      "Compound components are common in UI libraries. A parent component owns shared state, while named children such as Tabs.List and Tabs.Panel create a readable API.",
      "Render props and HOCs are older but still useful patterns. Learn them so you can understand existing codebases, then prefer simpler hooks and composition when possible.",
    ],
    code: `import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef(function FancyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  return <input ref={inputRef} {...props} />;
});

export default FancyInput;`,
    codeNotes: [
      "forwardRef lets a parent pass a ref through the component.",
      "useImperativeHandle controls what the parent can access.",
      "Expose a small imperative API instead of the entire component internals.",
    ],
  },
  "lazy-suspense": {
    theory: [
      "Lazy loading is most helpful when some UI is not needed immediately. Route screens, rich editors, charts, and admin tools are good candidates.",
      "Suspense provides a fallback while lazy code loads. Keep fallbacks visually stable so the page does not jump around.",
    ],
    code: `import { lazy, Suspense, useState } from "react";

const AdminPanel = lazy(() => import("./AdminPanel"));

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  return (
    <section>
      <button onClick={() => setShowAdmin(true)}>Open admin</button>
      {showAdmin && (
        <Suspense fallback={<p>Loading admin tools...</p>}>
          <AdminPanel />
        </Suspense>
      )}
    </section>
  );
}`,
    codeNotes: [
      "lazy wraps a dynamic import for a component.",
      "Suspense renders fallback UI while the chunk loads.",
      "The admin code is not needed until showAdmin is true.",
    ],
  },
  "error-boundaries": {
    theory: [
      "Error boundaries are resilience tools. They protect the rest of the interface when a child component fails during rendering.",
      "Event handler errors need normal try/catch or async error handling. Error boundaries are focused on render-time failures.",
    ],
    code: `import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) return <p>Something went wrong.</p>;
    return this.props.children;
  }
}`,
    codeNotes: [
      "getDerivedStateFromError switches the boundary to fallback UI.",
      "componentDidCatch is a good place to log details.",
      "Wrap risky sections, not necessarily the entire app only once.",
    ],
  },
  "react-18-features": {
    theory: [
      "Concurrent rendering is an implementation capability that lets React interrupt, pause, and resume rendering work. You opt into user-facing benefits through APIs such as transitions.",
      "Automatic batching means multiple state updates in promises, timeouts, and native events can be grouped into one render, reducing unnecessary work.",
    ],
    code: `import { useState, useTransition } from "react";

export default function Search({ items }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const nextQuery = event.target.value;
    setQuery(nextQuery);
    startTransition(() => {
      setResults(items.filter((item) => item.includes(nextQuery)));
    });
  }

  return <input value={query} onChange={handleChange} aria-busy={isPending} />;
}`,
    codeNotes: [
      "The input update is urgent and stays responsive.",
      "The filtered results update is marked as a transition.",
      "isPending can drive a subtle loading indicator.",
    ],
  },
  "state-management": {
    theory: [
      "Not all state belongs in a global store. Form text, modal open state, and hover state usually stay local. Shared auth, theme, or feature flags may use context or a small store.",
      "Server state is different from client state because it needs fetching, caching, invalidation, and background refresh. TanStack Query is designed for that job.",
    ],
    code: `import { create } from "zustand";

const useUiStore = create((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

export default function SidebarToggle() {
  const sidebarOpen = useUiStore((state) => state.sidebarOpen);
  const toggleSidebar = useUiStore((state) => state.toggleSidebar);
  return <button onClick={toggleSidebar}>{sidebarOpen ? "Hide" : "Show"} sidebar</button>;
}`,
    codeNotes: [
      "The store holds shared UI state outside a component.",
      "Selectors read only the slice each component needs.",
      "Small focused stores are easier to reason about.",
    ],
  },
  "typescript-react": {
    theory: [
      "Typing props creates a clear contract between a component and its callers. It also improves editor autocomplete and catches missing or incorrect props.",
      "Event types matter when you read values from event targets. React provides specific event types for forms, inputs, buttons, and other elements.",
    ],
    code: `type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

function Button({ label, disabled = false, onClick }: ButtonProps) {
  return <button disabled={disabled} onClick={onClick}>{label}</button>;
}

type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};`,
    codeNotes: [
      "Optional props use the ? marker.",
      "Union types restrict level to known values.",
      "Default values can be assigned while destructuring props.",
    ],
  },
  "testing-react": {
    theory: [
      "Good React tests act like users. They find buttons, labels, headings, and messages, perform clicks or typing, then assert what the user should see next.",
      "Async tests should wait for UI that appears after a promise resolves. This avoids brittle timing assumptions and matches real app behavior.",
    ],
    code: `import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("shows validation when email is missing", async () => {
  render(<LoginForm />);
  await userEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});`,
    codeNotes: [
      "getByRole mirrors how users and assistive tech find controls.",
      "userEvent simulates realistic interactions.",
      "The assertion checks visible behavior, not internal state.",
    ],
  },
};

const icons: Record<string, ReactNode> = {
  home: <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  book: <path d="M5 4h7a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H5V4Zm10 0h4v14h-4" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  levels: <path d="M5 19V9m7 10V5m7 14v-7" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  spark: <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />,
};

const darkTheme: ThemeVars = {
  "--page-bg": "#030303",
  "--header-bg": "rgba(3, 3, 3, 0.92)",
  "--panel-bg": "rgba(8, 9, 10, 0.8)",
  "--panel-strong": "rgba(13, 14, 15, 0.94)",
  "--field-bg": "rgba(8, 8, 9, 0.88)",
  "--border": "rgba(239, 68, 68, 0.2)",
  "--text-primary": "#f8fafc",
  "--text-secondary": "#c7c9d1",
  "--text-muted": "#8c909b",
  "--shadow": "rgba(0, 0, 0, 0.34)",
};

const lightTheme: ThemeVars = {
  "--page-bg": "#fafafa",
  "--header-bg": "rgba(255, 255, 255, 0.92)",
  "--panel-bg": "rgba(255, 255, 255, 0.9)",
  "--panel-strong": "rgba(250, 250, 250, 0.96)",
  "--field-bg": "rgba(255, 255, 255, 0.94)",
  "--border": "rgba(8, 145, 178, 0.22)",
  "--text-primary": "#171717",
  "--text-secondary": "#3f3f46",
  "--text-muted": "#71717a",
  "--shadow": "rgba(24, 24, 27, 0.08)",
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

function DemonTechLogo() {
  return (
    <Link className="flex min-w-fit items-center gap-3" href="/">
      <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_32px_rgba(34,211,238,0.24)]">
        <Image
          alt="DemonTech logo"
          className="h-full w-full object-cover"
          height={56}
          src="/demontech-logo.png"
          width={56}
        />
      </div>
      <div>
        <p className="text-2xl font-black leading-6 tracking-normal text-[var(--text-primary)]">
          Demon<span className="text-cyan-400">Tech</span>
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">
          Roadmap
        </p>
      </div>
    </Link>
  );
}

export default function ReactRoadmap() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTopicId, setActiveTopicId] = useState(topics[0].id);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const activeTopic = topics.find((topic) => topic.id === activeTopicId) ?? topics[0];
  const activeTopicLesson = topicLessons[activeTopic.id];

  const levelCounts = useMemo(
    () =>
      topics.reduce<Record<Topic["level"], number>>(
        (counts, topic) => ({ ...counts, [topic.level]: counts[topic.level] + 1 }),
        { Beginner: 0, Intermediate: 0, Advanced: 0 },
      ),
    [],
  );

  return (
    <main
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300"
      style={theme}
    >
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_78%_15%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(56,189,248,0.1),transparent_26%),linear-gradient(180deg,#020202_0%,#050505_100%)]"
            : "bg-[radial-gradient(circle_at_78%_14%,rgba(56,189,248,0.16),transparent_27%),radial-gradient(circle_at_16%_80%,rgba(34,211,238,0.1),transparent_25%),linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1540px] items-center gap-8 px-5 lg:px-8">
          <DemonTechLogo />

          <nav className="ml-auto hidden items-center gap-10 text-sm font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`transition hover:text-cyan-400 ${item === "Roadmaps" ? "text-cyan-400" : ""}`}
                href={item === "Roadmaps" ? "/docs/all-roadmaps" : "#"}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <label className="hidden h-11 w-[280px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">
              K
            </kbd>
          </label>

          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-cyan-400"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>

          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-cyan-400/50 bg-cyan-500 px-5 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.28)] transition hover:bg-cyan-400 md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1540px] grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-82px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="sticky top-[102px] rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">Get Started</p>
            <nav className="mt-5 space-y-1 text-sm text-[var(--text-secondary)]">
              {["Introduction", "How Roadmaps Work", "Learning Paths", "Quick Start"].map((item) => (
                <a
                  className="flex h-10 items-center gap-3 rounded-md px-3 transition hover:bg-[var(--panel-strong)] hover:text-cyan-400"
                  href={item === "Quick Start" ? "/docs/quick-start" : "#"}
                  key={item}
                >
                  <Icon className="h-4 w-4" name={item === "Introduction" ? "home" : "chevron"} />
                  {item}
                </a>
              ))}
            </nav>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-cyan-400">Roadmap</p>
            <nav className="mt-5 space-y-1">
              {(["Beginner", "Intermediate", "Advanced"] as const).map((level) => (
                <button
                  className="flex h-10 w-full items-center justify-between rounded-md px-3 text-left text-sm text-[var(--text-secondary)] transition hover:bg-[var(--panel-strong)] hover:text-cyan-400"
                  key={level}
                  onClick={() => setActiveTopicId(topics.find((topic) => topic.level === level)?.id ?? topics[0].id)}
                  type="button"
                >
                  <span>{level}</span>
                  <span className="rounded border border-[var(--border)] px-2 py-0.5 text-xs">{levelCounts[level]}</span>
                </button>
              ))}
            </nav>

            <div className="mt-9 rounded-lg border border-cyan-400/25 bg-black/20 p-4">
              <div className="grid h-20 w-full place-items-center rounded-md border border-cyan-400/35 bg-black/40 text-4xl font-black text-cyan-400">
                React
              </div>
              <p className="mt-4 text-sm font-black text-[var(--text-primary)]">Build components.</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">React becomes powerful when you build interfaces from small reusable components.</p>
            </div>
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-cyan-400" name="home" />
              <Link className="hover:text-cyan-400" href="/docs/all-roadmaps">
                Roadmaps
              </Link>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">React Roadmap</span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-500 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Icon className="h-4 w-4" name="spark" />
                  React Library Reference
                </div>
                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
                  React <span className="text-cyan-400">Roadmap</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  A document-backed React roadmap from UI fundamentals to hooks, routing, performance, React 18 features, TypeScript, and testing. Click any topic to study theory and code together.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Level", "Beginner to Advanced", "levels"],
                    ["Time", "8-14 Months", "clock"],
                    ["Topics", `${topics.length} Core Topics`, "book"],
                  ].map(([label, value, icon]) => (
                    <div className="rounded-md border border-[var(--border)] bg-[var(--panel-bg)] p-4" key={label}>
                      <Icon className="h-5 w-5 text-cyan-400" name={icon} />
                      <p className="mt-3 text-xs text-[var(--text-muted)]">{label}</p>
                      <p className="mt-1 text-sm font-black text-[var(--text-primary)]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-cyan-400/25 bg-black shadow-[0_0_80px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.14)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/35 bg-black/80 shadow-[0_0_60px_rgba(34,211,238,0.28)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-cyan-400 drop-shadow-[0_0_28px_rgba(34,211,238,0.7)]">
                  React
                </div>
              </div>
            </section>

            <section className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="relative">
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-cyan-400/45 sm:block" />
                <div className="space-y-4">
                  {topics.map((topic, index) => {
                    const isActive = topic.id === activeTopic.id;

                    return (
                      <article
                        className={`relative rounded-lg border bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] transition ${
                          isActive ? "border-cyan-400/65" : "border-[var(--border)] hover:border-cyan-400/40"
                        }`}
                        key={topic.id}
                      >
                        <button
                          aria-expanded={isActive}
                          className="grid w-full gap-5 p-5 text-left sm:grid-cols-[56px_minmax(0,1fr)_auto]"
                          onClick={() => setActiveTopicId(topic.id)}
                          type="button"
                        >
                          <span className={`z-10 grid h-12 w-12 place-items-center rounded-lg border text-lg font-black ${
                            isActive
                              ? "border-cyan-300 bg-cyan-500 text-white"
                              : "border-cyan-400 bg-black text-white"
                          }`}>
                            {index + 1}
                          </span>
                          <span>
                            <span className="flex flex-wrap items-center gap-3">
                              <span className="text-xl font-black text-[var(--text-primary)]">{topic.title}</span>
                              <span className="rounded border border-[var(--border)] px-2 py-1 text-xs font-bold text-cyan-400">
                                {topic.level}
                              </span>
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-[var(--text-secondary)]">{topic.summary}</span>
                            <span className="mt-4 flex flex-wrap gap-2">
                              {topic.subtopics.slice(0, 6).map((subtopic) => (
                                <span
                                  className="rounded border border-[var(--border)] bg-[var(--field-bg)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                                  key={subtopic}
                                >
                                  {subtopic}
                                </span>
                              ))}
                            </span>
                          </span>
                          <span className="hidden items-center gap-2 text-xs font-bold text-[var(--text-muted)] sm:flex">
                            <Icon className="h-4 w-4 text-cyan-400" name="book" />
                            {topic.resources} Resources
                            <Icon className={`h-4 w-4 transition ${isActive ? "rotate-90 text-cyan-400" : ""}`} name="chevron" />
                          </span>
                        </button>

                        {isActive ? (
                          <div className="border-t border-[var(--border)] px-5 pb-5 sm:ml-[76px]">
                            <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-5">
                              <h3 className="text-sm font-black uppercase tracking-[0.14em] text-cyan-400">Theory Explanation</h3>
                              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{topic.explanation}</p>
                              <div className="mt-4 space-y-4">
                                {topicLessons[topic.id].theory.map((paragraph) => (
                                  <p className="text-sm leading-7 text-[var(--text-secondary)]" key={paragraph}>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>

                            <div className="mt-5 overflow-hidden rounded-md border border-cyan-400/25 bg-black">
                              <div className="flex items-center justify-between border-b border-cyan-400/20 bg-cyan-400/10 px-4 py-3">
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-cyan-400">Code Example</h3>
                                <span className="rounded border border-cyan-400/25 px-2 py-1 text-xs font-bold text-cyan-200">React</span>
                              </div>
                              <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-7 text-slate-100">
                                <code>{topicLessons[topic.id].code}</code>
                              </pre>
                            </div>

                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-cyan-400">Key Points</h3>
                                <ul className="mt-3 space-y-3">
                                  {topic.keyPoints.map((point) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={point}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" name="check" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-cyan-400">Code Notes</h3>
                                <ul className="mt-3 space-y-3">
                                  {topicLessons[topic.id].codeNotes.map((note) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={note}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" name="check" />
                                      {note}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                              <div className="rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                                <h3 className="flex items-center gap-2 text-sm font-black text-[var(--text-primary)]">
                                  <Icon className="h-4 w-4 text-cyan-400" name="target" />
                                  Practice Task
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{topic.practice}</p>
                              </div>
                              <div className="rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                                <h3 className="flex items-center gap-2 text-sm font-black text-[var(--text-primary)]">
                                  <Icon className="h-4 w-4 text-cyan-400" name="book" />
                                  How To Study This
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                                  Read the theory first, type the component by hand, run it locally, then change one prop or state update and predict the UI. That habit builds real React fluency.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>

              <aside className="space-y-5 xl:sticky xl:top-[104px] xl:self-start">
                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">About This Roadmap</h2>
                  <p className="mt-3 text-2xl font-black text-cyan-400">{activeTopic.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{activeTopic.summary}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{activeTopicLesson.theory[0]}</p>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/20">
                    <div
                      className="h-full rounded-full bg-cyan-500 shadow-[0_0_18px_rgba(34,211,238,0.55)]"
                      style={{ width: `${((topics.findIndex((topic) => topic.id === activeTopic.id) + 1) / topics.length) * 100}%` }}
                    />
                  </div>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Tips for Success</h2>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Stay Consistent", "Learn a little every day"],
                      ["Practice Regularly", "Code more, improve more"],
                      ["Build Projects", "Apply your knowledge"],
                      ["Test Your Code", "Catch mistakes early"],
                      ["Read Errors", "Tracebacks are clues"],
                    ].map(([title, detail]) => (
                      <div className="flex gap-3" key={title}>
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" name="check" />
                        <div>
                          <p className="text-sm font-bold text-[var(--text-primary)]">{title}</p>
                          <p className="text-xs leading-5 text-[var(--text-muted)]">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Helpful Resources</h2>
                  <div className="mt-5 space-y-3 text-sm">
                    {[
                      ["React Docs", "https://react.dev/"],
                      ["React Tutorial", "https://react.dev/learn"],
                      ["React Router", "https://reactrouter.com/"],
                      ["Testing Library", "https://testing-library.com/docs/react-testing-library/intro/"],
                    ].map(([name, href]) => (
                      <a
                        className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-3 py-2 font-bold text-[var(--text-secondary)] transition hover:border-cyan-400/45 hover:text-cyan-400"
                        href={href}
                        key={name}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {name}
                        <Icon className="h-4 w-4" name="chevron" />
                      </a>
                    ))}
                  </div>
                </section>
              </aside>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
