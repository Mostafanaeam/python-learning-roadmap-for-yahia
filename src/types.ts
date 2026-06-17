export type LessonStatus = 'not-started' | 'in-progress' | 'completed';

export interface Lesson {
  id: number;
  title: string;
  phaseId: number;
  videoNumber: string;
  folderName: string;
  codeFilePath: string;
  readmeFilePath: string;
  status: LessonStatus;
  notes: string;
  practiceTasks: string[];
}

export interface Phase {
  id: number;
  name: string;
  description: string;
  color: string;
  lessons: Lesson[];
}

export interface ProgressStats {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentage: number;
}
