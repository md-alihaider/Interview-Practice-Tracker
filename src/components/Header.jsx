import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Title */}
        <div className="min-w-0">
          <h1 className="truncate bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            Interview Practice Tracker
          </h1>

          <p className="mt-1 hidden text-xs text-slate-400 sm:block sm:text-sm">
            Keep track of your coding interviews and improve your skills
          </p>
        </div>

        {/* Profile */}
        <button
          type="button"
          className="group flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 pr-3 text-slate-200 transition-all duration-200 hover:border-blue-400/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
            <User size={18} />
          </span>

          <span className="hidden text-sm font-medium sm:block">Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
