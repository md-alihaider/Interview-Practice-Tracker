import { useMemo, useState } from "react";
import { Search, Pencil, Trash2, ChevronDown, Plus, X } from "lucide-react";

import AddQuestionModal from "./AddQuestionModal";

const QuestionSection = ({
  questions = [],
  onAddQuestion,
  onEditQuestion,
  onDeleteQuestion,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  // Filter states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [status, setStatus] = useState("");

  // -----------------------------
  // Edit
  // -----------------------------

  const handleEdit = (question) => {
    setEditingQuestion(question);
    setIsModalOpen(true);
  };

  // -----------------------------
  // Delete
  // -----------------------------

  const handleDelete = (question) => {
    onDeleteQuestion(question.id);
  };

  // -----------------------------
  // Add
  // -----------------------------

  const handleAdd = () => {
    setEditingQuestion(null);
    setIsModalOpen(true);
  };

  // -----------------------------
  // Close Modal
  // -----------------------------

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingQuestion(null);
  };

  // -----------------------------
  // Filter Questions
  // -----------------------------

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const matchesSearch = question.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "" || question.category === category;

      const matchesDifficulty =
        difficulty === "" || question.difficulty === difficulty;

      const matchesStatus = status === "" || question.status === status;

      return (
        matchesSearch && matchesCategory && matchesDifficulty && matchesStatus
      );
    });
  }, [questions, search, category, difficulty, status]);

  // -----------------------------
  // Clear Filters
  // -----------------------------

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setDifficulty("");
    setStatus("");
  };

  const hasActiveFilters = search || category || difficulty || status;

  return (
    <section className="mt-8">
      {/* ================= HEADER ================= */}

      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Interview Questions
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Filter, categorize, and track your interview preparation.
          </p>
        </div>

        {/* Add Question */}
        <button
          type="button"
          onClick={handleAdd}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 sm:w-auto"
        >
          <Plus size={18} />
          Add Question
        </button>
      </div>

      {/* ================= FILTERS ================= */}

      <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/70 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-slate-900/70 px-4 pr-10 text-sm text-slate-300 outline-none transition focus:border-blue-500/50"
            >
              <option value="">All Categories</option>
              <option value="DSA">DSA</option>
              <option value="Technical">Technical</option>
              <option value="Git">Git</option>
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>

          {/* Difficulty */}
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-slate-900/70 px-4 pr-10 text-sm text-slate-300 outline-none transition focus:border-blue-500/50"
            >
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>

          {/* Status */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-slate-900/70 px-4 pr-10 text-sm text-slate-300 outline-none transition focus:border-blue-500/50"
            >
              <option value="">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>
        </div>

        {/* Active filters / Clear */}
        {hasActiveFilters && (
          <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
            <p className="text-xs text-slate-500">
              Showing {filteredQuestions.length} of {questions.length} questions
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs font-medium text-blue-400 transition hover:text-blue-300"
            >
              <X size={14} />
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* ================= TABLE ================= */}

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        {/* Desktop Header */}
        <div className="hidden grid-cols-[2fr_0.7fr_0.7fr_0.8fr_100px] items-center gap-4 border-b border-white/10 bg-white/[0.04] px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 md:grid">
          <span>Question Title</span>
          <span>Category</span>
          <span>Difficulty</span>
          <span>Status</span>
          <span className="text-center">Actions</span>
        </div>

        {/* Questions */}
        <div>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <div
                key={question.id}
                className="border-b border-white/5 px-5 py-5 last:border-b-0 transition hover:bg-white/[0.03]"
              >
                {/* ================= DESKTOP ================= */}

                <div className="hidden grid-cols-[2fr_0.7fr_0.7fr_0.8fr_100px] items-center gap-4 md:grid">
                  {/* Title */}
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-200">
                      {question.title}
                    </p>
                  </div>

                  {/* Category */}
                  <CategoryBadge category={question.category} />

                  {/* Difficulty */}
                  <DifficultyBadge difficulty={question.difficulty} />

                  {/* Status */}
                  <StatusBadge status={question.status} />

                  {/* Actions */}
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(question)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-400"
                      title="Edit"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(question)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
                      title="Delete"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>

                {/* ================= MOBILE ================= */}

                <div className="flex flex-col gap-4 md:hidden">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-medium leading-6 text-slate-200">
                      {question.title}
                    </h4>

                    <div className="flex shrink-0 gap-1">
                      <button
                        type="button"
                        onClick={() => handleEdit(question)}
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-500/10 hover:text-blue-400"
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(question)}
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <CategoryBadge category={question.category} />

                    <DifficultyBadge difficulty={question.difficulty} />

                    <StatusBadge status={question.status} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* ================= EMPTY STATE ================= */

            <div className="px-5 py-12 text-center">
              <p className="text-sm text-slate-400">
                No questions match your filters.
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AddQuestionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddQuestion={onAddQuestion}
        editingQuestion={editingQuestion}
        onUpdateQuestion={onEditQuestion}
      />
    </section>
  );
};

/* =========================================================
   BADGES
========================================================= */

const CategoryBadge = ({ category }) => {
  return (
    <span className="inline-flex rounded-full bg-slate-700/60 px-3 py-1 text-xs font-medium text-slate-300">
      {category}
    </span>
  );
};

const DifficultyBadge = ({ difficulty }) => {
  const styles = {
    Easy: "bg-emerald-500/10 text-emerald-400",
    Medium: "bg-violet-500/10 text-violet-400",
    Hard: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[difficulty] || "bg-slate-700 text-slate-300"
      }`}
    >
      {difficulty}
    </span>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    Completed: "bg-emerald-500/10 text-emerald-400",
    "In Progress": "bg-violet-500/10 text-violet-400",
    Pending: "bg-slate-500/10 text-slate-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] || "bg-slate-700 text-slate-300"
      }`}
    >
      {status}
    </span>
  );
};

export default QuestionSection;
