import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { LessonStatus } from '../types';
import { lessons } from '../data/lessons';

interface ProgressData {
  [lessonId: number]: {
    status: LessonStatus;
    notes: string;
    practiceTasks: string[];
  };
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<ProgressData>('python-roadmap-progress', {});

  const updateLessonStatus = useCallback((lessonId: number, status: LessonStatus) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId] || { notes: '', practiceTasks: [] },
        status,
      },
    }));
  }, [setProgress]);

  const updateLessonNotes = useCallback((lessonId: number, notes: string) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId] || { status: 'not-started' as LessonStatus, practiceTasks: [] },
        notes,
      },
    }));
  }, [setProgress]);

  const updateLessonTasks = useCallback((lessonId: number, practiceTasks: string[]) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId] || { status: 'not-started' as LessonStatus, notes: '' },
        practiceTasks,
      },
    }));
  }, [setProgress]);

  const getLessonProgress = useCallback((lessonId: number) => {
    return progress[lessonId] || { status: 'not-started' as LessonStatus, notes: '', practiceTasks: [] };
  }, [progress]);

  const stats = useMemo(() => {
    const total = lessons.length;
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;

    lessons.forEach(lesson => {
      const p = progress[lesson.id];
      if (p?.status === 'completed') completed++;
      else if (p?.status === 'in-progress') inProgress++;
      else notStarted++;
    });

    return {
      total,
      completed,
      inProgress,
      notStarted,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [progress]);

  const phaseStats = useMemo(() => {
    const phaseMap: Record<number, { total: number; completed: number }> = {};

    lessons.forEach(lesson => {
      if (!phaseMap[lesson.phaseId]) {
        phaseMap[lesson.phaseId] = { total: 0, completed: 0 };
      }
      phaseMap[lesson.phaseId].total++;
      const p = progress[lesson.id];
      if (p?.status === 'completed') {
        phaseMap[lesson.phaseId].completed++;
      }
    });

    return phaseMap;
  }, [progress]);

  return {
    progress,
    updateLessonStatus,
    updateLessonNotes,
    updateLessonTasks,
    getLessonProgress,
    stats,
    phaseStats,
  };
}
