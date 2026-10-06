const ProgressBar = ({ completed, total }) => {
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full py-2">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-300">Overall Progress</p>

          <p className="text-xs text-slate-500">
            {completed} of {total} questions completed
          </p>
        </div>

        <span className="text-xl font-bold text-emerald-400">{progress}%</span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-linear-to-r from-blue-500 to-violet-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
