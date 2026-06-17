import { Moon, Sun, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const location = useLocation();
  const isChallenge = location.pathname === '/challenge';

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-blue-500" />
            <span className="text-lg font-bold text-slate-800 dark:text-white">
              Python Roadmap
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="flex items-center gap-1 sm:gap-2">
              <Link
                to="/"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  !isChallenge
                    ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                🗺️ الرحلة
              </Link>
              <Link
                to="/challenge"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isChallenge
                    ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                🎮 التحدي
              </Link>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}