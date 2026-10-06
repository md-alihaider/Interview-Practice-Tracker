import Header from "./components/Header";
import StatsCards from "./components/StatsCards";

const questions = [
  {
    id: 1,
    title: "Two Sum",
    category: "DSA",
    difficulty: "Easy",
    status: "Completed",
  },
  {
    id: 2,
    title: "Valid Parentheses",
    category: "DSA",
    difficulty: "Easy",
    status: "Pending",
  },
  {
    id: 3,
    title: "Reverse Linked List",
    category: "DSA",
    difficulty: "Medium",
    status: "Pending",
  },
  {
    id: 4,
    title: "REST API Design",
    category: "Backend",
    difficulty: "Medium",
    status: "Completed",
  },
];

const App = () => {
  const completedQuestions = questions.filter(
    (question) => question.status === "Completed",
  ).length;

  const totalQuestions = questions.length;
  const completedDSAQuestions = questions.filter(
    (question) =>
      question.category === "DSA" && question.status === "Completed",
  );

  const completedInterviewsQuestions = questions.filter(
    (question) =>
      question.category === "Interview" && question.status === "Completed",
  );

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
          completedQuestions={completedQuestions}
          completedDSAQuestions={completedDSAQuestions.length}
          completedInterviewsQuestions={completedInterviewsQuestions.length}
        />

        {/* Questions Section */}
        <section>
          {/* Section Header */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Practice Questions</h3>
              <p className="mt-1 text-sm text-slate-400">
                Keep improving your interview skills.
              </p>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 sm:w-64"
            />
          </div>

          {/* Filters */}
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
            <button className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
              All
            </button>

            <button className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10">
              DSA
            </button>

            <button className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10">
              Backend
            </button>

            <button className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10">
              Frontend
            </button>
          </div>

          {/* Question List */}
          <div className="space-y-3">
            {questions.map((question) => (
              <div
                key={question.id}
                className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/30 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Question Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-semibold text-blue-400">
                      {question.id}
                    </span>

                    <h4 className="truncate font-semibold text-slate-100">
                      {question.title}
                    </h4>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2 pl-11">
                    <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                      {question.category}
                    </span>

                    <span
                      className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                        question.difficulty === "Easy"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : question.difficulty === "Medium"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      question.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {question.status}
                  </span>

                  <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
