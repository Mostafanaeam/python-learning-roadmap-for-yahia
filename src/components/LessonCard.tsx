import type { Lesson } from '../types';
import { CheckCircle, PlayCircle, Circle, FileText, ChevronLeft } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  phaseColor: string;
  onClick: () => void;
}

const statusConfig = {
  'completed': { icon: CheckCircle, bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-600 dark:text-green-400', label: 'Completed' },
  'in-progress': { icon: PlayCircle, bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800', text: 'text-amber-600 dark:text-amber-400', label: 'In Progress' },
  'not-started': { icon: Circle, bg: 'bg-slate-50 dark:bg-slate-800', border: 'border-slate-200 dark:border-slate-700', text: 'text-slate-400', label: 'Not Started' },
};

export function LessonCard({ lesson, phaseColor, onClick }: LessonCardProps) {
  const config = statusConfig[lesson.status];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full text-right ${config.bg} border ${config.border} rounded-lg p-3 sm:p-4 hover:shadow-md transition-all group`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Icon className={`w-5 h-5 flex-shrink-0 ${config.text}`} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: phaseColor + '20', color: phaseColor }}>
                {lesson.videoNumber}
              </span>
              <span className="text-xs text-slate-400">
                {lesson.folderName}
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1 truncate">
              {lesson.title}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <FileText className={`w-4 h-4 ${config.text} opacity-50`} />
          <ChevronLeft className={`w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity`} />
        </div>
      </div>
    </button>
  );
}
