const StatsCards = ({
  totalQuestions,
  completedDSAQuestions,
  completedInterviewQuestions,
}) => {
  const machineCodingStatus = "Ready";

  const machineCodingClass =
    machineCodingStatus === "In Progress"
      ? "text-violet-400"
      : "text-green-400";

  return (
    <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="rounded-xl border border-white/10 bg-white/3 p-4">
        <p className="text-sm text-slate-400">Total Questions</p>
        <p className="mt-2 text-2xl font-bold">{totalQuestions}</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/3 p-4">
        <p className="text-sm text-slate-400">Completed DSA</p>
        <p className="mt-2 text-2xl font-bold text-emerald-400">
          {completedDSAQuestions}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/3 p-4">
        <p className="text-sm text-slate-400">Completed Interview Questions</p>
        <p className="mt-2 text-2xl font-bold text-yellow-400">
          {completedInterviewQuestions}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/3 p-4">
        <p className="text-sm text-slate-400">Machine Coding Status</p>
        <p className={`mt-2 text-2xl font-bold ${machineCodingClass}`}>
          {machineCodingStatus}
        </p>
      </div>
    </section>
  );
};

export default StatsCards;
