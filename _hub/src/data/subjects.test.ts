import { describe, expect, it } from 'vitest';
import { subjects } from './subjects';
import { categories } from './categories';
import { getAllSteps } from '../lib/storage';

// These tests guard the hand-authored course content. `subjects.ts` and its
// per-subject files are edited by hand; a typo like an out-of-range
// `correctIndex` or a duplicated step id would only surface as a broken
// quiz or a dead path node in the running app. Catch it at build time.

describe('subjects content model', () => {
  it('has at least one subject', () => {
    expect(subjects.length).toBeGreaterThan(0);
  });

  it('every subject id is unique', () => {
    const ids = subjects.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(subjects.map((s) => [s.id, s] as const))('subject "%s" is well-formed', (_id, subject) => {
    expect(subject.title.trim()).not.toBe('');
    expect(subject.description.trim()).not.toBe('');
    expect(subject.icon.trim()).not.toBe('');
    expect(subject.color).toMatch(/^#[0-9a-fA-F]{3,8}$/);
    expect(subject.levels.length).toBeGreaterThan(0);

    for (const level of subject.levels) {
      expect(level.id.trim()).not.toBe('');
      expect(level.title.trim()).not.toBe('');
      expect(level.steps.length).toBeGreaterThan(0);
    }

    const stepIds = getAllSteps(subject).map((s) => s.id);
    expect(new Set(stepIds).size, `duplicate step id in "${subject.id}"`).toBe(stepIds.length);
  });

  it.each(subjects.map((s) => [s.id, s] as const))(
    'every step in "%s" has content and a valid quiz',
    (_id, subject) => {
      for (const step of getAllSteps(subject)) {
        expect(step.id.trim()).not.toBe('');
        expect(step.title.trim()).not.toBe('');
        expect(step.summary.trim()).not.toBe('');
        expect(step.content.length).toBeGreaterThan(0);
        expect(step.content.every((p) => p.trim() !== '')).toBe(true);
        expect(step.quiz.length).toBeGreaterThan(0);

        const qIds = step.quiz.map((q) => q.id);
        expect(new Set(qIds).size).toBe(qIds.length);

        for (const q of step.quiz) {
          expect(q.question.trim()).not.toBe('');
          expect(q.explanation.trim()).not.toBe('');
          expect(q.options.length).toBeGreaterThanOrEqual(2);
          expect(q.options.every((o) => o.trim() !== '')).toBe(true);
          expect(new Set(q.options).size, `duplicate option in ${subject.id}/${step.id}/${q.id}`).toBe(
            q.options.length,
          );
          expect(Number.isInteger(q.correctIndex)).toBe(true);
          expect(q.correctIndex).toBeGreaterThanOrEqual(0);
          expect(q.correctIndex).toBeLessThan(q.options.length);
        }
      }
    },
  );
});

describe('categories.ts', () => {
  const subjectIds = new Set(subjects.map((s) => s.id));

  it('has unique category ids', () => {
    const ids = categories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('references only subjects that exist', () => {
    for (const category of categories) {
      for (const id of category.subjectIds) {
        expect(subjectIds.has(id), `category "${category.id}" -> unknown subject "${id}"`).toBe(true);
      }
    }
  });

  it('never lists the same subject in two categories', () => {
    const seen = new Set<string>();
    for (const category of categories) {
      for (const id of category.subjectIds) {
        expect(seen.has(id), `subject "${id}" is in more than one category`).toBe(false);
        seen.add(id);
      }
    }
  });
});
