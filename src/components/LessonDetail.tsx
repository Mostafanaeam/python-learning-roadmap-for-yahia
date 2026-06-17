import { useState } from 'react';
import type { Lesson } from '../types';
import type { LessonStatus } from '../types';
import { X, CheckCircle, PlayCircle, Circle, FileText, BookOpen, Code2, NotebookPen, ChevronRight, ChevronLeft } from 'lucide-react';

interface LessonDetailProps {
  lesson: Lesson;
  initialStatus: LessonStatus;
  initialNotes: string;
  initialTasks: string[];
  onUpdateStatus: (status: LessonStatus) => void;
  onUpdateNotes: (notes: string) => void;
  onUpdateTasks: (tasks: string[]) => void;
  onClose: () => void;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
}

export function LessonDetail({
  lesson,
  initialStatus,
  initialNotes,
  initialTasks,
  onUpdateStatus,
  onUpdateNotes,
  onUpdateTasks,
  onClose,
  onPrev,
  onNext,
}: LessonDetailProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [tasks, setTasks] = useState<string[]>(initialTasks.length > 0 ? initialTasks : ['']);
  const [status, setStatus] = useState<LessonStatus>(initialStatus);
  const [showReadme, setShowReadme] = useState(false);

  const statuses: { value: LessonStatus; icon: typeof CheckCircle; label: string; color: string }[] = [
    { value: 'not-started', icon: Circle, label: 'لم يبدأ', color: 'text-slate-400' },
    { value: 'in-progress', icon: PlayCircle, label: 'قيد التنفيذ', color: 'text-amber-500' },
    { value: 'completed', icon: CheckCircle, label: 'مكتمل', color: 'text-green-500' },
  ];

  const handleStatusChange = (newStatus: LessonStatus) => {
    setStatus(newStatus);
    onUpdateStatus(newStatus);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    onUpdateNotes(value);
  };

  const handleTaskChange = (index: number, value: string) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
    onUpdateTasks(newTasks.filter(t => t.trim()));
  };

  const addTask = () => {
    setTasks([...tasks, '']);
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    onUpdateTasks(newTasks.filter(t => t.trim()));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-3xl mt-8 mb-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-800 rounded-t-2xl border-b border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={onPrev || undefined}
                disabled={!onPrev}
                className={`p-2 rounded-lg ${onPrev ? 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300' : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'} transition-colors`}
                title="الدرس السابق"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={onNext || undefined}
                disabled={!onNext}
                className={`p-2 rounded-lg ${onNext ? 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300' : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'} transition-colors`}
                title="الدرس التالي"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 inline-block mb-2">
                {lesson.videoNumber}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                {lesson.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {lesson.folderName}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {statuses.map((s) => (
              <button
                key={s.value}
                onClick={() => handleStatusChange(s.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                  status === s.value
                    ? `${s.color} border-current bg-current/10`
                    : 'text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                <FileText className="w-4 h-4" />
                <span>ملف الكود</span>
              </div>
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 break-all">
                {lesson.codeFilePath}
              </code>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                <Code2 className="w-4 h-4" />
                <span>ملف README</span>
              </div>
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400 break-all">
                {lesson.readmeFilePath}
              </code>
            </div>
          </div>

          <button
            onClick={() => setShowReadme(!showReadme)}
            className="flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <NotebookPen className="w-4 h-4" />
            {showReadme ? 'إخفاء' : 'عرض'} قالب README.md
          </button>

          {showReadme && (
            <div className="mb-6 bg-slate-900 text-green-400 rounded-xl p-4 overflow-x-auto text-sm font-mono leading-relaxed">
              <pre className="whitespace-pre-wrap">{`# ${lesson.title}

## Video Number
${lesson.videoNumber}

## What I Learned
-

## Important Notes
-

## Code Explanation
-

## Challenges I Solved
-

## Questions I Still Have
-

## Completion Date
-`}</pre>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              ملاحظاتي
            </label>
            <textarea
              value={notes}
              onChange={(e) => handleNotesChange(e.target.value)}
              placeholder="اكتب ملاحظاتك هنا..."
              rows={4}
              className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              مهام تطبيقية
            </label>
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => handleTaskChange(index, e.target.value)}
                    placeholder={`المهمة ${index + 1}`}
                    className="flex-1 px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {tasks.length > 1 && (
                    <button
                      onClick={() => removeTask(index)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addTask}
              className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              + إضافة مهمة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
