import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Phase } from '../types';
import { LessonCard } from './LessonCard';

interface PhaseCardProps {
  phase: Phase;
  defaultOpen?: boolean;
  phaseStats: { total: number; completed: number };
  onLessonClick: (lessonId: number) => void;
}

export function PhaseCard({ phase, defaultOpen = false, phaseStats, onLessonClick }: PhaseCardProps) {
  const phaseId = phase.id;
  const colorClasses: Record<number, { border: string; bg: string; text: string; badge: string }> = {
    1: { border: 'border-blue-200 dark:border-blue-800', bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-500' },
    2: { border: 'border-emerald-200 dark:border-emerald-800', bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-500' },
    3: { border: 'border-purple-200 dark:border-purple-800', bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-500' },
    4: { border: 'border-amber-200 dark:border-amber-800', bg: 'bg-amber-50 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400', badge: 'bg-amber-500' },
    5: { border: 'border-red-200 dark:border-red-800', bg: 'bg-red-50 dark:bg-red-900/20', text: 'text-red-600 dark:text-red-400', badge: 'bg-red-500' },
    6: { border: 'border-pink-200 dark:border-pink-800', bg: 'bg-pink-50 dark:bg-pink-900/20', text: 'text-pink-600 dark:text-pink-400', badge: 'bg-pink-500' },
    7: { border: 'border-cyan-200 dark:border-cyan-800', bg: 'bg-cyan-50 dark:bg-cyan-900/20', text: 'text-cyan-600 dark:text-cyan-400', badge: 'bg-cyan-500' },
  };

  const colors = colorClasses[phaseId] || colorClasses[1];
  const percentage = phaseStats.total > 0 ? Math.round((phaseStats.completed / phaseStats.total) * 100) : 0;

  return (
    <details open={defaultOpen} className="group">
      <summary className={`list-none cursor-pointer ${colors.bg} border-2 ${colors.border} rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${colors.badge} flex items-center justify-center text-white font-bold text-sm`}>
              {phase.id}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                {phase.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {phase.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-sm font-bold" style={{ color: phase.color }}>
                {percentage}%
              </div>
              <div className="text-xs text-slate-400">
                {phaseStats.completed}/{phaseStats.total}
              </div>
            </div>
            <div className="text-slate-400 group-open:hidden">
              <ChevronDown className="w-5 h-5" />
            </div>
            <div className="text-slate-400 hidden group-open:block">
              <ChevronUp className="w-5 h-5" />
            </div>
          </div>
        </div>
      </summary>
      <div className="mt-3 space-y-3 pr-4 sm:pr-8">
        {phase.lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            phaseColor={phase.color}
            onClick={() => onLessonClick(lesson.id)}
          />
        ))}
      </div>
    </details>
  );
}
