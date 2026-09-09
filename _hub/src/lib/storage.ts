import type { ProgressState, SubjectProgress, SubjectLike } from '../types';

const STORAGE_KEY = 'ux-learning-progress';

function readAll(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

function writeAll(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private-browsing quota or a full storage — progress just won't
    // persist this time, which is better than crashing the app.
  }
}

export function getSubjectProgress(subjectId: string): SubjectProgress {
  const all = readAll();
  return all[subjectId] ?? { completedSteps: [] };
}

export function isStepComplete(subjectId: string, stepId: string): boolean {
  return getSubjectProgress(subjectId).completedSteps.includes(stepId);
}

export function markStepComplete(subjectId: string, stepId: string): void {
  const all = readAll();
  const current = all[subjectId] ?? { completedSteps: [] };
  if (!current.completedSteps.includes(stepId)) {
    current.completedSteps = [...current.completedSteps, stepId];
  }
  all[subjectId] = current;
  writeAll(all);
}

export function saveCertificateName(subjectId: string, name: string): void {
  const all = readAll();
  const current = all[subjectId] ?? { completedSteps: [] };
  current.certificateName = name;
  current.completedAt = current.completedAt ?? new Date().toISOString();
  all[subjectId] = current;
  writeAll(all);
}

export function saveCertificateId(subjectId: string, certificateId: string): void {
  const all = readAll();
  const current = all[subjectId] ?? { completedSteps: [] };
  current.certificateId = certificateId;
  all[subjectId] = current;
  writeAll(all);
}

export function getAllSteps<TStep extends { id: string }>(subject: SubjectLike<TStep>): TStep[] {
  return subject.levels.flatMap((level) => level.steps);
}

export function getSubjectStats(subject: SubjectLike) {
  const steps = getAllSteps(subject);
  const progress = getSubjectProgress(subject.id);
  const completed = steps.filter((s) => progress.completedSteps.includes(s.id)).length;
  const total = steps.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const isComplete = total > 0 && completed === total;
  return { completed, total, percent, isComplete };
}

export function resetSubjectProgress(subjectId: string): void {
  const all = readAll();
  delete all[subjectId];
  writeAll(all);
}

export interface StepUnlockInfo {
  /** Position of the step in the subject's flattened step list, or -1. */
  index: number;
  /** Does the step exist in this subject at all? */
  exists: boolean;
  isComplete: boolean;
  /** True for the first step, or when the immediately preceding step is done. */
  previousComplete: boolean;
  /** Not yet completed and not yet reachable — steps unlock sequentially. */
  isLocked: boolean;
}

/**
 * The single source of truth for "can the visitor open this step yet?".
 * Both `StepPage` (redirect guard) and `PathMap` (locked/complete styling)
 * read from here so the sequential-unlock rule can't drift between them.
 */
export function getStepUnlockInfo(subject: SubjectLike, stepId: string): StepUnlockInfo {
  const steps = getAllSteps(subject);
  const index = steps.findIndex((s) => s.id === stepId);
  if (index === -1) {
    return { index: -1, exists: false, isComplete: false, previousComplete: false, isLocked: true };
  }
  const completed = getSubjectProgress(subject.id).completedSteps;
  const isComplete = completed.includes(stepId);
  const previousComplete = index === 0 || completed.includes(steps[index - 1].id);
  return {
    index,
    exists: true,
    isComplete,
    previousComplete,
    isLocked: !isComplete && !previousComplete,
  };
}
