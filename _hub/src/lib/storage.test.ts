import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Subject } from '../types';
import {
  getStepUnlockInfo,
  getSubjectProgress,
  getSubjectStats,
  isStepComplete,
  markStepComplete,
  resetSubjectProgress,
  saveCertificateName,
} from './storage';

// A tiny two-level, three-step subject — enough to exercise the
// sequential-unlock rule and the progress maths without pulling in the
// full course content.
const subject: Subject = {
  id: 'test-subject',
  title: 'Test Subject',
  description: '',
  icon: '',
  color: '#000',
  levels: [
    {
      id: 'l1',
      title: 'Level 1',
      steps: [
        { id: 's1', title: 'Step 1', summary: '', content: [], quiz: [] },
        { id: 's2', title: 'Step 2', summary: '', content: [], quiz: [] },
      ],
    },
    {
      id: 'l2',
      title: 'Level 2',
      steps: [{ id: 's3', title: 'Step 3', summary: '', content: [], quiz: [] }],
    },
  ],
};

beforeEach(() => {
  localStorage.clear();
});

describe('markStepComplete / getSubjectProgress', () => {
  it('records a completed step', () => {
    markStepComplete('test-subject', 's1');
    expect(getSubjectProgress('test-subject').completedSteps).toEqual(['s1']);
    expect(isStepComplete('test-subject', 's1')).toBe(true);
  });

  it('is idempotent — completing the same step twice does not duplicate it', () => {
    markStepComplete('test-subject', 's1');
    markStepComplete('test-subject', 's1');
    expect(getSubjectProgress('test-subject').completedSteps).toEqual(['s1']);
  });

  it('keeps progress for different subjects separate', () => {
    markStepComplete('subject-a', 's1');
    markStepComplete('subject-b', 's9');
    expect(getSubjectProgress('subject-a').completedSteps).toEqual(['s1']);
    expect(getSubjectProgress('subject-b').completedSteps).toEqual(['s9']);
  });

  it('returns an empty progress object for an unknown subject', () => {
    expect(getSubjectProgress('never-touched')).toEqual({ completedSteps: [] });
  });

  it('survives corrupt JSON in localStorage', () => {
    localStorage.setItem('ux-learning-progress', '{ not json');
    expect(getSubjectProgress('test-subject')).toEqual({ completedSteps: [] });
  });
});

describe('getSubjectStats', () => {
  it('reports 0% with nothing completed', () => {
    expect(getSubjectStats(subject)).toEqual({
      completed: 0,
      total: 3,
      percent: 0,
      isComplete: false,
    });
  });

  it('rounds the percentage', () => {
    markStepComplete('test-subject', 's1');
    expect(getSubjectStats(subject)).toMatchObject({ completed: 1, percent: 33, isComplete: false });
  });

  it('flags isComplete only when every step is done', () => {
    markStepComplete('test-subject', 's1');
    markStepComplete('test-subject', 's2');
    expect(getSubjectStats(subject).isComplete).toBe(false);
    markStepComplete('test-subject', 's3');
    expect(getSubjectStats(subject)).toMatchObject({ percent: 100, isComplete: true });
  });

  it('ignores completed ids that are no longer part of the subject', () => {
    markStepComplete('test-subject', 's1');
    markStepComplete('test-subject', 'removed-step');
    expect(getSubjectStats(subject).completed).toBe(1);
  });
});

describe('getStepUnlockInfo — sequential unlocking', () => {
  it('unlocks the first step and locks the rest initially', () => {
    expect(getStepUnlockInfo(subject, 's1')).toMatchObject({ isLocked: false, previousComplete: true });
    expect(getStepUnlockInfo(subject, 's2')).toMatchObject({ isLocked: true });
    expect(getStepUnlockInfo(subject, 's3')).toMatchObject({ isLocked: true });
  });

  it('unlocks the next step once its predecessor is complete', () => {
    markStepComplete('test-subject', 's1');
    expect(getStepUnlockInfo(subject, 's2')).toMatchObject({ isLocked: false, previousComplete: true });
    expect(getStepUnlockInfo(subject, 's3')).toMatchObject({ isLocked: true });
  });

  it('carries unlocking across a level boundary', () => {
    markStepComplete('test-subject', 's1');
    markStepComplete('test-subject', 's2');
    expect(getStepUnlockInfo(subject, 's3')).toMatchObject({ isLocked: false });
  });

  it('never reports a completed step as locked', () => {
    markStepComplete('test-subject', 's3');
    expect(getStepUnlockInfo(subject, 's3')).toMatchObject({ isComplete: true, isLocked: false });
  });

  it('marks an unknown step id as not existing and locked', () => {
    expect(getStepUnlockInfo(subject, 'nope')).toEqual({
      index: -1,
      exists: false,
      isComplete: false,
      previousComplete: false,
      isLocked: true,
    });
  });
});

describe('saveCertificateName', () => {
  it('stores the name and stamps completedAt once', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
    saveCertificateName('test-subject', 'Ada Lovelace');
    const first = getSubjectProgress('test-subject').completedAt;

    vi.setSystemTime(new Date('2026-06-01T00:00:00Z'));
    saveCertificateName('test-subject', 'Ada L.');
    const after = getSubjectProgress('test-subject');

    expect(after.certificateName).toBe('Ada L.');
    expect(after.completedAt).toBe(first);
    vi.useRealTimers();
  });
});

describe('resetSubjectProgress', () => {
  it('clears a subject without touching the others', () => {
    markStepComplete('keep', 's1');
    markStepComplete('drop', 's1');
    resetSubjectProgress('drop');
    expect(getSubjectProgress('drop')).toEqual({ completedSteps: [] });
    expect(getSubjectProgress('keep').completedSteps).toEqual(['s1']);
  });
});
