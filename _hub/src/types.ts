export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Step {
  id: string;
  title: string;
  summary: string;
  content: string[];
  quiz: QuizQuestion[];
}

export interface Level {
  id: string;
  title: string;
  steps: Step[];
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  levels: Level[];
}

/**
 * Lightweight stand-in for `Subject`/`Level`/`Step`, carrying only what the
 * home page and path map need to render — no step `content`/`quiz`. This is
 * what stays loaded up front; a step's full content loads on demand via
 * `loadSubject()` (see `subjectLoaders.ts`).
 */
export interface StepMeta {
  id: string;
  title: string;
}

export interface LevelMeta {
  id: string;
  title: string;
  steps: StepMeta[];
}

export interface SubjectMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  levels: LevelMeta[];
}

/**
 * Structural shape shared by `Subject` and `SubjectMeta`, generic over the
 * step type. Lets `getAllSteps`/`getSubjectStats`/`getStepUnlockInfo` in
 * `lib/storage.ts` accept either without duplicating them.
 */
export interface SubjectLike<TStep extends { id: string } = { id: string }> {
  id: string;
  levels: { id: string; title: string; steps: TStep[] }[];
}

export interface SubjectProgress {
  completedSteps: string[];
  certificateName?: string;
  certificateId?: string;
  completedAt?: string;
}

export type ProgressState = Record<string, SubjectProgress>;
