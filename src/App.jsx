import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import QuestionSection from "./components/QuestionSection";
import StatsCards from "./components/StatsCards";

const initialQuestions = [
  {
    id: 1,
    title: "Two Sum",
    category: "DSA",
    difficulty: "Easy",
    status: "Completed",
  },
  {
    id: 2,
    title: "Remove Duplicates from Sorted Array",
    category: "DSA",
    difficulty: "Easy",
    status: "Pending",
  },
  {
    id: 3,
    title: "Rotate Array",
    category: "DSA",
    difficulty: "Medium",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Wrong Branch, Correct Work",
    category: "Git",
    difficulty: "Medium",
    status: "Completed",
  },
  {
    id: 5,
    title: "Merge Conflict During PR",
    category: "Git",
    difficulty: "Medium",
    status: "Pending",
  },
];

const App = () => {
  // Load questions from localStorage
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem("interviewQuestions");

    return savedQuestions ? JSON.parse(savedQuestions) : initialQuestions;
  });

  // Save questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("interviewQuestions", JSON.stringify(questions));
  }, [questions]);

  // Total questions
  const totalQuestions = questions.length;

  // Completed questions
  const completedQuestions = questions.filter(
    (question) => question.status === "Completed",
  ).length;

  // Completed DSA questions
  const completedDSAQuestions = questions.filter(
    (question) =>
      question.category === "DSA" && question.status === "Completed",
  ).length;

  // Completed Interview/Technical questions
  const completedInterviewQuestions = questions.filter(
    (question) =>
      (question.category === "Git" || question.category === "Technical") &&
      question.status === "Completed",
  ).length;

  // Add question
  const addQuestion = (question) => {
    const newQuestion = {
      id: Date.now(),
      ...question,
    };

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  // Edit question
  const editQuestion = (id, updatedQuestion) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? {
              ...question,
              ...updatedQuestion,
            }
          : question,
      ),
    );
  };

  // Delete question
  const deleteQuestion = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this question?",
    );

    if (!confirmed) return;

    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id),
    );
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <p className="mb-1 text-sm font-medium text-blue-400">
            Interview Preparation
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Practice. Improve. Get Hired. 🚀
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
            Track your interview preparation, solve questions, and monitor your
            progress.
          </p>
        </section>

        {/* Stats */}
        <StatsCards
          totalQuestions={totalQuestions}
          completedDSAQuestions={completedDSAQuestions}
          completedInterviewQuestions={completedInterviewQuestions}
        />

        {/* Progress */}
        <div className="mt-6">
          <ProgressBar completed={completedQuestions} total={totalQuestions} />
        </div>

        {/* Questions */}
        <QuestionSection
          questions={questions}
          onAddQuestion={addQuestion}
          onEditQuestion={editQuestion}
          onDeleteQuestion={deleteQuestion}
        />
      </main>
    </div>
  );
};

export default App;
