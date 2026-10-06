# 🚀 Interview Practice Tracker

A responsive frontend dashboard built to track and manage interview preparation.

The Interview Practice Tracker allows you to organize DSA, Git, and Technical interview questions, monitor completion progress, and manage your preparation directly from the browser.

🔗 **Live Demo:** https://interview-practice-tracker-six.vercel.app/

---

## ✨ Features

- 📊 Dashboard with interview preparation statistics
- 📝 Add new interview questions
- ✏️ Edit existing questions
- 🗑️ Delete questions
- 🔍 Search questions by title
- 🏷️ Filter questions by:
  - Category
  - Difficulty
  - Status
- 📈 Overall completion progress
- 💾 LocalStorage persistence
- 📱 Responsive design for desktop and mobile
- ⚠️ Form validation
- 📭 Empty and no-results states
- 🎨 Clean dark-themed UI

---

## 🛠️ Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- Lucide React
- Vite
- Browser LocalStorage

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── AddQuestionModal.jsx
│   ├── Header.jsx
│   ├── ProgressBar.jsx
│   ├── QuestionSection.jsx
│   └── StatsCards.jsx
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── favicon.svg
```

---

## 📋 Question Categories

The tracker supports three categories:

- DSA
- Git
- Technical

### Difficulty Levels

- Easy
- Medium
- Hard

### Question Status

- Pending
- In Progress
- Completed

---

## 💾 Data Persistence

Questions are stored in the browser's **LocalStorage**.

This means your questions remain available even after refreshing the page.

The application stores the questions using:

```js
localStorage.setItem(
  "interviewQuestions",
  JSON.stringify(questions)
);
```

When the application loads, it retrieves the saved questions from LocalStorage.

---

## 🔎 Search & Filtering

Questions can be searched by title and filtered using:

- Category
- Difficulty
- Status

Multiple filters can be combined to narrow down the results.

A **Clear Filters** option is also available whenever filters are active.

---

## 📊 Progress Tracking

The dashboard automatically calculates:

- Total Questions
- Completed DSA Questions
- Completed Interview Questions
- Overall Completion Percentage
- Machine Coding Status

The overall progress is calculated from the number of completed questions.

```text
Completed Questions / Total Questions × 100
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the project

```bash
cd interview-practice-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

The question tracker changes from a table-style layout on larger screens to a card-style layout on smaller screens.

---

## 🎯 Project Goal

The goal of this project was to build a practical interview preparation dashboard while practicing:

- React state management
- Component-based architecture
- Form handling
- CRUD operations
- Search and filtering
- LocalStorage
- Conditional rendering
- Responsive UI development

---

## 🧠 What I Learned

While building this project, I practiced:

- Managing application state with `useState`
- Using `useEffect` for LocalStorage persistence
- Using `useMemo` for filtered question data
- Passing data and functions between components using props
- Creating reusable UI components
- Handling form validation
- Implementing CRUD functionality on the frontend
- Building responsive layouts with Tailwind CSS

---

## 🔗 Live Project

**Interview Practice Tracker**

https://interview-practice-tracker-six.vercel.app/

---

## 👨‍💻 Author

**Ali Haider**

GitHub: https://github.com/md-alihaider

Portfolio: https://md-alihaider.vercel.app/

---

⭐ If you found this project useful, feel free to check out the repository and explore the project.
