import type { Subject } from '../types';

// One dynamic import per subject, so opening a lesson in one subject never
// pulls another subject's content into the same network request. Every
// subject-*.ts file exports the same `subject` identifier (see subjects.ts),
// so each loader just re-exposes that.
const loaders: Record<string, () => Promise<{ subject: Subject }>> = {
  'ux-fundamentals': () => import('./subject-ux-fundamentals'),
  'visual-design-basics': () => import('./subject-visual-design-basics'),
  'interaction-design': () => import('./subject-interaction-design'),
  'accessibility-basics': () => import('./subject-accessibility-basics'),
  'design-thinking': () => import('./subject-design-thinking'),
  'design-systems': () => import('./subject-design-systems'),
  'user-research': () => import('./subject-user-research'),
  'gestalt-principles': () => import('./subject-gestalt-principles'),
  'ux-for-ai': () => import('./subject-ux-for-ai'),
  'ux-laws': () => import('./subject-ux-laws'),
  'product-management': () => import('./subject-product-management'),
  'ux-audit': () => import('./subject-ux-audit'),
  'ux-leadership': () => import('./subject-ux-leadership'),
  'business-requirement-analysis': () => import('./subject-business-requirement-analysis'),
  'ux-team-models': () => import('./subject-ux-team-models'),
};

// Cached per id: a subject's content is static for the life of the tab, and
// `use()` (see StepPage) needs the same promise reference across renders
// rather than a fresh one each time.
const cache = new Map<string, Promise<Subject | undefined>>();

export function loadSubject(id: string): Promise<Subject | undefined> {
  let cached = cache.get(id);
  if (!cached) {
    const loader = loaders[id];
    cached = loader ? loader().then((m) => m.subject) : Promise.resolve(undefined);
    cache.set(id, cached);
  }
  return cached;
}
