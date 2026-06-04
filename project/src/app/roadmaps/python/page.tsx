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
    id: "intro-python",
    title: "Introduction to Python",
    level: "Beginner",
    summary: "Understand what Python is, why it is popular, and how Python programs run.",
    explanation:
      "Python is a readable, high-level programming language used for web apps, automation, data science, AI, scripting, backend services, testing, and tooling. Its syntax is intentionally clean, which makes it friendly for beginners while still powerful for advanced engineering.",
    subtopics: ["Key characteristics", "Interpreter", "REPL", "Scripts", "Use cases"],
    keyPoints: [
      "Python code is executed by the Python interpreter.",
      "Readability and indentation are core parts of the language style.",
      "Python has a huge standard library and package ecosystem.",
    ],
    practice: "Install Python, open the REPL, and run a script that prints your name and learning goal.",
    resources: 8,
  },
  {
    id: "syntax-basics",
    title: "Syntax Basics",
    level: "Beginner",
    summary: "Learn comments, variables, assignment, indentation, and line continuation.",
    explanation:
      "Python syntax is built around clarity. Blocks are defined by indentation instead of braces, comments explain intent, and variable assignment is concise. These basics shape every Python file you will write.",
    subtopics: ["Comments", "Variables", "Assignment", "Indentation", "Line continuation"],
    keyPoints: [
      "Indentation is syntax, not decoration.",
      "Variables are created when values are assigned.",
      "Use comments to explain why code exists, not what obvious code does.",
    ],
    practice: "Write a small profile script using variables, comments, and an if block with correct indentation.",
    resources: 7,
  },
  {
    id: "data-types",
    title: "Built-in Data Types",
    level: "Beginner",
    summary: "Work with numbers, strings, lists, tuples, dictionaries, sets, and conversions.",
    explanation:
      "Python's built-in data types let you model most everyday data without extra libraries. Numbers handle calculations, strings handle text, lists and tuples hold ordered data, dictionaries hold key-value data, and sets hold unique values.",
    subtopics: ["Numbers", "Strings", "Lists", "Tuples", "Dictionaries", "Sets"],
    keyPoints: [
      "Lists are mutable ordered collections.",
      "Tuples are immutable ordered collections.",
      "Dictionaries are the main structure for named data.",
    ],
    practice: "Create a student dictionary with marks, tags, and calculated average score.",
    resources: 12,
  },
  {
    id: "operators",
    title: "Operators",
    level: "Beginner",
    summary: "Use arithmetic, comparison, logical, bitwise, and assignment operators.",
    explanation:
      "Operators are symbols and keywords that combine values into expressions. They help you calculate, compare, update, and make decisions. Clean operator use makes logic shorter and easier to read.",
    subtopics: ["Arithmetic", "Comparison", "Logical", "Bitwise", "Assignment"],
    keyPoints: [
      "Comparison operators return True or False.",
      "and, or, and not combine boolean logic.",
      "Augmented assignment such as += updates a variable concisely.",
    ],
    practice: "Write eligibility logic for a course signup using comparisons and boolean operators.",
    resources: 6,
  },
  {
    id: "control-flow",
    title: "Control Flow",
    level: "Beginner",
    summary: "Control program decisions and repetition with if, for, while, break, and continue.",
    explanation:
      "Control flow lets a Python program react to conditions and repeat work. It turns simple statements into real program behavior, such as validating input, looping through files, retrying operations, or processing lists.",
    subtopics: ["if / elif / else", "for loop", "while loop", "break", "continue"],
    keyPoints: [
      "Use if/elif/else for branching decisions.",
      "Use for loops when iterating over known collections.",
      "Use while loops when repetition depends on a condition changing.",
    ],
    practice: "Build a quiz scorer that loops over answers and prints feedback for each score.",
    resources: 7,
  },
  {
    id: "functions",
    title: "Functions",
    level: "Intermediate",
    summary: "Define reusable behavior with parameters, return values, lambdas, closures, decorators, and generators.",
    explanation:
      "Functions are reusable units of logic. They keep programs organized, reduce duplication, and make code easier to test. Python functions can accept flexible arguments, return values, create closures, and produce lazy sequences with generators.",
    subtopics: ["def", "Arguments", "Lambda", "Decorators", "Generators", "Built-ins"],
    keyPoints: [
      "A function should usually do one clear job.",
      "Return values make functions composable.",
      "Decorators wrap functions to add behavior without changing their body.",
    ],
    practice: "Write a calculator function, then add a decorator that logs every call.",
    resources: 11,
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    level: "Intermediate",
    summary: "Model behavior with classes, objects, inheritance, dunder methods, and properties.",
    explanation:
      "Object-oriented programming groups related data and behavior into classes. This is useful when your program has entities with state, such as users, accounts, products, tasks, or game characters.",
    subtopics: ["Classes", "Objects", "Inheritance", "Dunder methods", "Properties"],
    keyPoints: [
      "Classes define a blueprint; objects are instances of that blueprint.",
      "Dunder methods customize built-in Python behavior.",
      "Properties can protect and validate object state.",
    ],
    practice: "Create a BankAccount class with deposit, withdraw, and formatted display behavior.",
    resources: 9,
  },
  {
    id: "exceptions",
    title: "Error Handling & Exceptions",
    level: "Intermediate",
    summary: "Handle failures using try, except, else, finally, raising, and custom exceptions.",
    explanation:
      "Exceptions help you handle failure paths without mixing error checks into every line. Good Python code catches expected failures, raises clear errors, and uses finally for cleanup.",
    subtopics: ["try / except", "else", "finally", "raise", "Custom exceptions"],
    keyPoints: [
      "Catch specific exceptions instead of catching everything blindly.",
      "Use raise when invalid program state should stop the current operation.",
      "Custom exceptions make domain errors easier to understand.",
    ],
    practice: "Write a parser that validates user input and raises a custom error for invalid values.",
    resources: 7,
  },
  {
    id: "modules-packages",
    title: "Modules & Packages",
    level: "Intermediate",
    summary: "Organize Python code with imports, standard library modules, and package structure.",
    explanation:
      "Modules and packages keep Python projects organized as they grow. A module is a Python file, while a package is a folder of modules. Imports let you reuse code without copying it.",
    subtopics: ["Imports", "Standard library", "Packages", "__init__.py", "Project structure"],
    keyPoints: [
      "Use modules to separate responsibilities.",
      "Prefer explicit imports for readability.",
      "The standard library covers many common tasks before third-party packages are needed.",
    ],
    practice: "Split a small CLI app into main.py, helpers.py, and a package for reusable logic.",
    resources: 8,
  },
  {
    id: "file-io",
    title: "File I/O",
    level: "Intermediate",
    summary: "Open, read, write, and manage files using context managers and pathlib.",
    explanation:
      "File I/O lets Python programs work with text files, logs, CSVs, configs, and generated output. The modern pattern is to use context managers and pathlib so resources are handled safely.",
    subtopics: ["Opening files", "Reading", "Writing", "with", "pathlib"],
    keyPoints: [
      "Use with open(...) so files close automatically.",
      "pathlib gives object-oriented path handling.",
      "Always think about encoding when reading text files.",
    ],
    practice: "Read a notes file, count non-empty lines, and write a summary file.",
    resources: 7,
  },
  {
    id: "comprehensions",
    title: "Comprehensions",
    level: "Intermediate",
    summary: "Write concise list, dict, set, and generator expressions.",
    explanation:
      "Comprehensions are a Pythonic way to transform and filter collections. They are compact, expressive, and often clearer than manual loops when the transformation is simple.",
    subtopics: ["List comprehension", "Dict comprehension", "Set comprehension", "Generator expression"],
    keyPoints: [
      "Use comprehensions for clear one-step transformations.",
      "Avoid overpacking complex logic into one comprehension.",
      "Generator expressions are lazy and memory-friendly.",
    ],
    practice: "Convert a list of names into cleaned usernames and build a lookup dictionary.",
    resources: 6,
  },
  {
    id: "type-hints",
    title: "Type Hints & Dataclasses",
    level: "Advanced",
    summary: "Document and validate code structure with type hints, typing utilities, and dataclasses.",
    explanation:
      "Type hints make Python code easier to understand, refactor, and check with tools. They do not change normal runtime behavior by themselves, but they improve editor help and catch mistakes earlier.",
    subtopics: ["PEP 484", "typing", "list[str]", "Optional", "Dataclasses"],
    keyPoints: [
      "Type hints communicate intent to humans and tools.",
      "Dataclasses reduce boilerplate for data-focused classes.",
      "Use type hints where they clarify contracts and reduce confusion.",
    ],
    practice: "Create a typed dataclass for Course and a function that filters courses by level.",
    resources: 8,
  },
  {
    id: "async-python",
    title: "Asynchronous Programming",
    level: "Advanced",
    summary: "Use async, await, concurrent tasks, async iterators, and async context managers.",
    explanation:
      "Asynchronous Python is useful for I/O-heavy work such as network calls, APIs, sockets, and many small waiting tasks. It lets one thread switch between tasks while waiting instead of sitting idle.",
    subtopics: ["async / await", "asyncio", "Concurrent tasks", "Async iterators", "Async context managers"],
    keyPoints: [
      "async def creates a coroutine function.",
      "await pauses a coroutine until an awaitable finishes.",
      "asyncio.gather can run multiple awaitable tasks concurrently.",
    ],
    practice: "Write an async script that fetches three fake URLs concurrently and prints completion order.",
    resources: 9,
  },
  {
    id: "venv-packaging",
    title: "Virtual Environments & Packaging",
    level: "Advanced",
    summary: "Manage isolated environments, pip dependencies, and pyproject.toml project metadata.",
    explanation:
      "Virtual environments prevent dependency conflicts between projects. Packaging skills help you define project metadata, dependencies, scripts, and build configuration in a reproducible way.",
    subtopics: ["venv", "pip", "requirements.txt", "pyproject.toml", "PEP 621"],
    keyPoints: [
      "Use one virtual environment per project.",
      "Pin dependencies when reproducibility matters.",
      "pyproject.toml is the modern home for Python project configuration.",
    ],
    practice: "Create a venv, install requests, freeze dependencies, and sketch a pyproject.toml.",
    resources: 8,
  },
  {
    id: "testing",
    title: "Testing",
    level: "Advanced",
    summary: "Verify Python code with unittest, pytest, assertions, fixtures, and test structure.",
    explanation:
      "Testing gives confidence that code behaves correctly and keeps working after changes. Python includes unittest, while pytest is a popular third-party tool with clean syntax and powerful fixtures.",
    subtopics: ["unittest", "pytest", "Assertions", "Fixtures", "Test structure"],
    keyPoints: [
      "Test behavior, not implementation details.",
      "Small pure functions are easier to test.",
      "A failing test should explain what behavior broke.",
    ],
    practice: "Write tests for a discount calculator, including valid, boundary, and invalid inputs.",
    resources: 8,
  },
  {
    id: "pep8-style",
    title: "Style Guide Summary",
    level: "Advanced",
    summary: "Write readable Python using PEP 8 naming, spacing, imports, line length, and formatting.",
    explanation:
      "Style rules help teams read and maintain code consistently. PEP 8 is Python's central style guide, and formatters like Black can automate many choices so you can focus on design and correctness.",
    subtopics: ["PEP 8", "Naming", "Imports", "Line length", "Formatting"],
    keyPoints: [
      "Use snake_case for variables and functions.",
      "Group imports from standard library, third-party packages, and local modules.",
      "Readable code is easier to review, debug, and extend.",
    ],
    practice: "Refactor a messy script into PEP 8 style and run a formatter or linter.",
    resources: 6,
  },
];

const topicLessons: Record<string, Lesson> = {
  "intro-python": {
    theory: [
      "Python is often called batteries-included because its standard library already covers files, JSON, dates, HTTP helpers, testing, math, data structures, and more. That means beginners can build useful programs without installing many packages immediately.",
      "Python programs can be run in three common ways: interactively in the REPL, as a script file, or through a larger application entry point. The REPL is great for experimenting, while scripts are better for repeatable work.",
    ],
    code: `# hello.py
language = "Python"
year = 1991

print(f"{language} first appeared in {year}.")
print("Python is great for automation, web apps, data, and AI.")`,
    codeNotes: [
      "The print function writes output to the terminal.",
      "f-strings let you insert variable values into text cleanly.",
      "Python files usually use the .py extension.",
    ],
  },
  "syntax-basics": {
    theory: [
      "Python uses indentation to define blocks. This makes code visually clean, but it also means inconsistent indentation causes syntax errors. A standard indentation level is four spaces.",
      "Variables do not need explicit declarations. You create a name by assigning a value to it. Python names should usually be descriptive and written in snake_case.",
    ],
    code: `# A simple temperature checker
temperature = 31
is_sunny = True

if temperature > 30 and is_sunny:
    print("Carry water and wear sunscreen.")
else:
    print("Normal day plan is fine.")`,
    codeNotes: [
      "The indented print belongs to the if block.",
      "and combines two boolean conditions.",
      "Comments start with # and should explain intent.",
    ],
  },
  "data-types": {
    theory: [
      "Choosing the right data type makes code simpler. Use lists for ordered collections that change, tuples for fixed grouped values, dictionaries for named fields, and sets when uniqueness matters.",
      "Python types are dynamic, but values still have real types. You can inspect values with type(), convert between compatible types, and build nested structures such as lists of dictionaries.",
    ],
    code: `student = {
    "name": "Asha",
    "scores": [88, 92, 79],
    "skills": {"python", "git", "testing"},
}

average = sum(student["scores"]) / len(student["scores"])
student["average"] = round(average, 2)

print(student["name"])
print(student["average"])
print("python" in student["skills"])`,
    codeNotes: [
      "A dictionary stores named values with string keys.",
      "sum and len are built-in functions commonly used with lists.",
      "Sets make membership checks such as in fast and expressive.",
    ],
  },
  operators: {
    theory: [
      "Operators help build expressions from values. Arithmetic operators perform calculations, comparison operators produce booleans, and logical operators combine those booleans into decisions.",
      "Python also has identity operators such as is, membership operators such as in, and bitwise operators for lower-level integer operations. Most application code uses arithmetic, comparison, logical, and membership operators most often.",
    ],
    code: `age = 20
has_id = True
cart_total = 1200

can_enter = age >= 18 and has_id
free_shipping = cart_total >= 999

print(can_enter)
print(free_shipping)
print(cart_total + 99)`,
    codeNotes: [
      ">= compares values and returns True or False.",
      "and requires both sides to be truthy.",
      "Use clear variable names so boolean logic reads like English.",
    ],
  },
  "control-flow": {
    theory: [
      "Control flow lets the program choose paths. if/elif/else branches are useful for grading, validation, menu choices, and business rules. Loops are useful when the same operation must run for many items.",
      "Use break to stop a loop early and continue to skip to the next iteration. These tools are powerful, but overusing them can make logic hard to follow, so keep loop bodies small.",
    ],
    code: `scores = [95, 72, 48, 81]

for score in scores:
    if score >= 90:
        grade = "A"
    elif score >= 60:
        grade = "Pass"
    else:
        grade = "Needs practice"

    print(score, grade)`,
    codeNotes: [
      "for score in scores iterates through each list item.",
      "elif checks another condition only if earlier branches failed.",
      "The final print runs once per score.",
    ],
  },
  functions: {
    theory: [
      "Functions should hide a useful piece of logic behind a clear name. Inputs come through parameters, outputs leave through return values, and local variables stay inside the function.",
      "Advanced function features include default arguments, keyword arguments, lambda functions for small one-line callables, decorators for wrapping behavior, and generators for lazy output.",
    ],
    code: `def apply_discount(price, percent=10):
    discount = price * percent / 100
    return price - discount


def log_call(function):
    def wrapper(*args, **kwargs):
        print(f"Calling {function.__name__}")
        return function(*args, **kwargs)

    return wrapper


@log_call
def total_with_tax(price):
    return price * 1.18


print(apply_discount(1000, 15))
print(total_with_tax(500))`,
    codeNotes: [
      "Default arguments provide a value when the caller omits one.",
      "*args and **kwargs forward flexible positional and keyword arguments.",
      "The decorator syntax applies log_call to total_with_tax.",
    ],
  },
  oop: {
    theory: [
      "A class combines data and behavior into one model. The __init__ method initializes each new object. Methods receive self, which points to the current object instance.",
      "Dunder methods such as __str__, __len__, and __eq__ let your objects work naturally with Python's built-in behavior. Properties can expose computed or validated attributes.",
    ],
    code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.balance += amount

    def __str__(self):
        return f"{self.owner}: Rs. {self.balance}"


account = BankAccount("Rishi", 500)
account.deposit(250)
print(account)`,
    codeNotes: [
      "__init__ runs when a new object is created.",
      "self.balance stores state on the instance.",
      "__str__ controls the text shown by print(account).",
    ],
  },
  exceptions: {
    theory: [
      "Exceptions separate normal flow from failure flow. This is cleaner than returning special values everywhere, especially when the failure should stop the current operation.",
      "The else block runs only when no exception happened, and finally always runs. Use these blocks when they make resource handling or success paths clearer.",
    ],
    code: `class InvalidAgeError(ValueError):
    pass


def parse_age(text):
    try:
        age = int(text)
    except ValueError as error:
        raise InvalidAgeError("Age must be a number") from error

    if age < 0:
        raise InvalidAgeError("Age cannot be negative")

    return age


print(parse_age("21"))`,
    codeNotes: [
      "Custom exceptions can inherit from built-in exception classes.",
      "raise ... from error preserves the original failure context.",
      "Specific errors make calling code easier to handle.",
    ],
  },
  "modules-packages": {
    theory: [
      "A module is a single Python file. A package is a directory that groups modules together. As projects grow, this structure helps avoid huge files and makes responsibilities easier to find.",
      "The standard library should be your first stop for common work. Modules like pathlib, json, datetime, collections, itertools, and subprocess solve many everyday problems.",
    ],
    code: `# helpers.py
def slugify(title):
    return title.strip().lower().replace(" ", "-")


# main.py
from helpers import slugify
from datetime import date

page = slugify("Python Roadmap")
print(page)
print(date.today())`,
    codeNotes: [
      "from helpers import slugify imports a function from another file.",
      "datetime is part of Python's standard library.",
      "Splitting helpers into modules keeps main.py focused.",
    ],
  },
  "file-io": {
    theory: [
      "Files are external resources, so they should be opened and closed carefully. The with statement creates a context manager that closes the file even if an error happens inside the block.",
      "pathlib is the modern way to work with paths. It avoids manual string joining and gives readable methods such as read_text, write_text, exists, and mkdir.",
    ],
    code: `from pathlib import Path

notes_path = Path("notes.txt")
notes_path.write_text("Python\\nFiles\\nPathlib\\n", encoding="utf-8")

lines = notes_path.read_text(encoding="utf-8").splitlines()
non_empty = [line for line in lines if line.strip()]

Path("summary.txt").write_text(
    f"Total notes: {len(non_empty)}\\n",
    encoding="utf-8",
)`,
    codeNotes: [
      "Path objects represent filesystem paths.",
      "encoding='utf-8' makes text handling explicit.",
      "splitlines converts file text into a list of lines.",
    ],
  },
  comprehensions: {
    theory: [
      "Comprehensions combine looping, filtering, and transformation in a compact syntax. They are excellent when the logic is simple and the result is a new collection.",
      "If a comprehension becomes hard to read, use a normal loop instead. Python values readability over clever one-liners.",
    ],
    code: `names = [" Asha ", "Rishi", "Dev Kumar", "Asha"]

usernames = {
    name.strip().lower().replace(" ", "_")
    for name in names
}

length_lookup = {
    username: len(username)
    for username in usernames
}

print(usernames)
print(length_lookup)`,
    codeNotes: [
      "The set comprehension removes duplicate usernames.",
      "The dict comprehension maps each username to its length.",
      "Comprehensions can include transformations and filters.",
    ],
  },
  "type-hints": {
    theory: [
      "Type hints document what kind of values functions expect and return. They help editors autocomplete correctly and help static checkers find mistakes before runtime.",
      "Dataclasses are useful for simple data containers. They automatically generate common methods such as __init__ and __repr__, reducing boilerplate.",
    ],
    code: `from dataclasses import dataclass


@dataclass
class Course:
    title: str
    level: str
    hours: int


def filter_by_level(courses: list[Course], level: str) -> list[Course]:
    return [course for course in courses if course.level == level]


courses = [
    Course("Python Basics", "Beginner", 8),
    Course("Async Python", "Advanced", 5),
]

print(filter_by_level(courses, "Advanced"))`,
    codeNotes: [
      "@dataclass generates an initializer for Course.",
      "list[Course] says the list should contain Course objects.",
      "Type hints improve clarity even though Python remains dynamic.",
    ],
  },
  "async-python": {
    theory: [
      "Async Python is built around coroutines and the event loop. It is not automatically faster for CPU-heavy work, but it shines when many tasks spend time waiting for I/O.",
      "Use asyncio.gather when multiple independent awaitable tasks can run concurrently. Each task progresses while others are waiting.",
    ],
    code: `import asyncio


async def fetch_name(name, delay):
    await asyncio.sleep(delay)
    return f"Loaded {name}"


async def main():
    results = await asyncio.gather(
        fetch_name("posts", 1),
        fetch_name("comments", 2),
        fetch_name("profile", 1),
    )
    print(results)


asyncio.run(main())`,
    codeNotes: [
      "async def creates coroutine functions.",
      "await asyncio.sleep simulates waiting without blocking the loop.",
      "asyncio.gather waits for all tasks and returns their results.",
    ],
  },
  "venv-packaging": {
    theory: [
      "A virtual environment is an isolated Python environment for one project. It keeps dependencies separate so one project's package versions do not break another project.",
      "Modern Python projects commonly describe metadata and build configuration in pyproject.toml. Dependency management tools can use this file to build, install, and publish packages.",
    ],
    code: `# Terminal commands
python -m venv .venv
source .venv/bin/activate
python -m pip install requests
python -m pip freeze > requirements.txt

# pyproject.toml idea
[project]
name = "python-roadmap-app"
version = "0.1.0"
dependencies = ["requests>=2.31"]`,
    codeNotes: [
      "python -m venv creates a project-local environment.",
      "Activating the environment makes pip install into that environment.",
      "requirements.txt or pyproject.toml records dependencies for others.",
    ],
  },
  testing: {
    theory: [
      "Tests describe expected behavior. Good tests make refactoring safer because they tell you quickly when behavior changes accidentally.",
      "pytest is widely used because test functions are simple, assertions are readable, and fixtures make setup reusable. unittest is built into Python and is still useful, especially in standard-library-only environments.",
    ],
    code: `# discount.py
def apply_discount(price, percent):
    if price < 0 or percent < 0:
        raise ValueError("Values cannot be negative")
    return price - (price * percent / 100)


# test_discount.py
def test_apply_discount():
    assert apply_discount(1000, 10) == 900


def test_negative_price_fails():
    import pytest

    with pytest.raises(ValueError):
        apply_discount(-100, 10)`,
    codeNotes: [
      "A test function names the behavior being checked.",
      "assert compares actual output with expected output.",
      "pytest.raises checks that invalid input fails correctly.",
    ],
  },
  "pep8-style": {
    theory: [
      "PEP 8 is about consistency and readability. It covers naming, indentation, imports, whitespace, comments, and line length. Following it helps your code feel familiar to other Python developers.",
      "Tools like Black, Ruff, and isort automate formatting and linting. This lets you focus on program design while tools handle repetitive style details.",
    ],
    code: `# Good style example
from pathlib import Path


def count_python_files(folder: Path) -> int:
    files = folder.glob("*.py")
    return sum(1 for file in files if file.is_file())


project_root = Path(".")
print(count_python_files(project_root))`,
    codeNotes: [
      "Function and variable names use snake_case.",
      "Imports are placed at the top of the file.",
      "Blank lines separate imports, functions, and main script logic.",
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
  "--border": "rgba(185, 28, 28, 0.22)",
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
      <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_32px_rgba(220,38,38,0.24)]">
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
          Demon<span className="text-red-500">Tech</span>
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">
          Roadmap
        </p>
      </div>
    </Link>
  );
}

export default function PythonRoadmap() {
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
            ? "bg-[radial-gradient(circle_at_78%_15%,rgba(220,38,38,0.18),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(248,113,113,0.1),transparent_26%),linear-gradient(180deg,#020202_0%,#050505_100%)]"
            : "bg-[radial-gradient(circle_at_78%_14%,rgba(248,113,113,0.16),transparent_27%),radial-gradient(circle_at_16%_80%,rgba(220,38,38,0.1),transparent_25%),linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1540px] items-center gap-8 px-5 lg:px-8">
          <DemonTechLogo />

          <nav className="ml-auto hidden items-center gap-10 text-sm font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`transition hover:text-red-500 ${item === "Roadmaps" ? "text-red-500" : ""}`}
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
            className="grid h-11 w-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>

          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-red-500/50 bg-red-600 px-5 text-sm font-black text-white shadow-[0_0_28px_rgba(220,38,38,0.28)] transition hover:bg-red-500 md:inline-flex"
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Get Started</p>
            <nav className="mt-5 space-y-1 text-sm text-[var(--text-secondary)]">
              {["Introduction", "How Roadmaps Work", "Learning Paths", "Quick Start"].map((item) => (
                <a
                  className="flex h-10 items-center gap-3 rounded-md px-3 transition hover:bg-[var(--panel-strong)] hover:text-red-500"
                  href={item === "Quick Start" ? "/docs/quick-start" : "#"}
                  key={item}
                >
                  <Icon className="h-4 w-4" name={item === "Introduction" ? "home" : "chevron"} />
                  {item}
                </a>
              ))}
            </nav>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-red-500">Roadmap</p>
            <nav className="mt-5 space-y-1">
              {(["Beginner", "Intermediate", "Advanced"] as const).map((level) => (
                <button
                  className="flex h-10 w-full items-center justify-between rounded-md px-3 text-left text-sm text-[var(--text-secondary)] transition hover:bg-[var(--panel-strong)] hover:text-red-500"
                  key={level}
                  onClick={() => setActiveTopicId(topics.find((topic) => topic.level === level)?.id ?? topics[0].id)}
                  type="button"
                >
                  <span>{level}</span>
                  <span className="rounded border border-[var(--border)] px-2 py-0.5 text-xs">{levelCounts[level]}</span>
                </button>
              ))}
            </nav>

            <div className="mt-9 rounded-lg border border-red-500/25 bg-black/20 p-4">
              <div className="grid h-20 w-full place-items-center rounded-md border border-red-500/35 bg-black/40 text-4xl font-black text-red-500">
                Py
              </div>
              <p className="mt-4 text-sm font-black text-[var(--text-primary)]">Stay consistent.</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Python becomes powerful when you practice small programs daily.</p>
            </div>
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-red-500" name="home" />
              <Link className="hover:text-red-500" href="/docs/all-roadmaps">
                Roadmaps
              </Link>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">Python Roadmap</span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-red-500/40 bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Icon className="h-4 w-4" name="spark" />
                  Python Language Reference
                </div>
                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
                  Python <span className="text-red-500">Roadmap</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  A document-backed Python roadmap from complete beginner syntax to advanced async, packaging, testing, and style. Click any topic to study theory and code together.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Level", "Beginner to Advanced", "levels"],
                    ["Time", "6-12 Months", "clock"],
                    ["Topics", `${topics.length} Core Topics`, "book"],
                  ].map(([label, value, icon]) => (
                    <div className="rounded-md border border-[var(--border)] bg-[var(--panel-bg)] p-4" key={label}>
                      <Icon className="h-5 w-5 text-red-500" name={icon} />
                      <p className="mt-3 text-xs text-[var(--text-muted)]">{label}</p>
                      <p className="mt-1 text-sm font-black text-[var(--text-primary)]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-red-500/25 bg-black shadow-[0_0_80px_rgba(220,38,38,0.16)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.14)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/35 bg-black/80 shadow-[0_0_60px_rgba(220,38,38,0.28)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-red-500 drop-shadow-[0_0_28px_rgba(220,38,38,0.7)]">
                  Py
                </div>
              </div>
            </section>

            <section className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="relative">
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-red-500/45 sm:block" />
                <div className="space-y-4">
                  {topics.map((topic, index) => {
                    const isActive = topic.id === activeTopic.id;

                    return (
                      <article
                        className={`relative rounded-lg border bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] transition ${
                          isActive ? "border-red-500/65" : "border-[var(--border)] hover:border-red-500/40"
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
                              ? "border-red-400 bg-red-600 text-white"
                              : "border-red-500 bg-black text-white"
                          }`}>
                            {index + 1}
                          </span>
                          <span>
                            <span className="flex flex-wrap items-center gap-3">
                              <span className="text-xl font-black text-[var(--text-primary)]">{topic.title}</span>
                              <span className="rounded border border-[var(--border)] px-2 py-1 text-xs font-bold text-red-500">
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
                            <Icon className="h-4 w-4 text-red-500" name="book" />
                            {topic.resources} Resources
                            <Icon className={`h-4 w-4 transition ${isActive ? "rotate-90 text-red-500" : ""}`} name="chevron" />
                          </span>
                        </button>

                        {isActive ? (
                          <div className="border-t border-[var(--border)] px-5 pb-5 sm:ml-[76px]">
                            <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-5">
                              <h3 className="text-sm font-black uppercase tracking-[0.14em] text-red-500">Theory Explanation</h3>
                              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{topic.explanation}</p>
                              <div className="mt-4 space-y-4">
                                {topicLessons[topic.id].theory.map((paragraph) => (
                                  <p className="text-sm leading-7 text-[var(--text-secondary)]" key={paragraph}>
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>

                            <div className="mt-5 overflow-hidden rounded-md border border-red-500/25 bg-black">
                              <div className="flex items-center justify-between border-b border-red-500/20 bg-red-500/10 px-4 py-3">
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-red-500">Code Example</h3>
                                <span className="rounded border border-red-500/25 px-2 py-1 text-xs font-bold text-red-300">Python</span>
                              </div>
                              <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-7 text-slate-100">
                                <code>{topicLessons[topic.id].code}</code>
                              </pre>
                            </div>

                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-red-500">Key Points</h3>
                                <ul className="mt-3 space-y-3">
                                  {topic.keyPoints.map((point) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={point}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" name="check" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-red-500">Code Notes</h3>
                                <ul className="mt-3 space-y-3">
                                  {topicLessons[topic.id].codeNotes.map((note) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={note}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" name="check" />
                                      {note}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                              <div className="rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                                <h3 className="flex items-center gap-2 text-sm font-black text-[var(--text-primary)]">
                                  <Icon className="h-4 w-4 text-red-500" name="target" />
                                  Practice Task
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{topic.practice}</p>
                              </div>
                              <div className="rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                                <h3 className="flex items-center gap-2 text-sm font-black text-[var(--text-primary)]">
                                  <Icon className="h-4 w-4 text-red-500" name="book" />
                                  How To Study This
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                                  Read the theory first, type the code by hand, run it locally, then change one input and predict the output. That habit builds real Python fluency.
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
                  <p className="mt-3 text-2xl font-black text-red-500">{activeTopic.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{activeTopic.summary}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{activeTopicLesson.theory[0]}</p>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/20">
                    <div
                      className="h-full rounded-full bg-red-600 shadow-[0_0_18px_rgba(220,38,38,0.55)]"
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
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" name="check" />
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
                      ["Python Docs", "https://docs.python.org/3/"],
                      ["Real Python", "https://realpython.com/"],
                      ["Automate the Boring Stuff", "https://automatetheboringstuff.com/"],
                      ["pytest Docs", "https://docs.pytest.org/"],
                    ].map(([name, href]) => (
                      <a
                        className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-3 py-2 font-bold text-[var(--text-secondary)] transition hover:border-red-500/45 hover:text-red-500"
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
