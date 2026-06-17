import type { ProgressStats } from '../types';
import { CheckCircle, PlayCircle, Circle, TrendingUp } from 'lucide-react';

interface DashboardProps {
  stats: ProgressStats;
}

export function Dashboard({ stats }: DashboardProps) {
  const cards = [
    {
      label: 'تم الانتهاء',
      value: stats.completed,
      total: stats.total,
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      label: 'قيد التنفيذ',
      value: stats.inProgress,
      total: stats.total,
      icon: PlayCircle,
      color: 'text-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
    },
    {
      label: 'لم يبدأ',
      value: stats.notStarted,
      total: stats.total,
      icon: Circle,
      color: 'text-slate-400',
      bg: 'bg-slate-50 dark:bg-slate-800',
    },
    {
      label: 'نسبة الإنجاز',
      value: `${stats.percentage}%`,
      total: 100,
      icon: TrendingUp,
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
        لوحة التحكم
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`${card.bg} rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700`}
          >
            <div className="flex items-center justify-between mb-3">
              <card.icon className={`w-6 h-6 ${card.color}`} />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                من {stats.total}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
              {card.value}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {card.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            التقدم العام
          </span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {stats.percentage}%
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${stats.percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-400">
          <span>{stats.completed} مكتمل</span>
          <span>{stats.inProgress} قيد التنفيذ</span>
          <span>{stats.notStarted} لم يبدأ</span>
        </div>
      </div>
    </section>
  );
}
