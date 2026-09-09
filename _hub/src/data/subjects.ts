import type { Subject } from '../types';
import { subject as uxFundamentals } from './subject-ux-fundamentals';
import { subject as visualDesignBasics } from './subject-visual-design-basics';
import { subject as interactionDesign } from './subject-interaction-design';
import { subject as accessibilityBasics } from './subject-accessibility-basics';
import { subject as designThinking } from './subject-design-thinking';
import { subject as designSystems } from './subject-design-systems';
import { subject as userResearch } from './subject-user-research';
import { subject as gestaltPrinciples } from './subject-gestalt-principles';
import { subject as uxForAi } from './subject-ux-for-ai';
import { subject as uxLaws } from './subject-ux-laws';
import { subject as productManagement } from './subject-product-management';
import { subject as uxAudit } from './subject-ux-audit';
import { subject as uxLeadership } from './subject-ux-leadership';
import { subject as businessRequirementAnalysis } from './subject-business-requirement-analysis';
import { subject as uxTeamModels } from './subject-ux-team-models';

// Full-content aggregate of every subject. This is deliberately NOT imported
// by any page component: each subject's lesson/quiz content is real weight
// (roughly 450 lines each), and importing all fifteen just to render a list
// or a single step would defeat the point of splitting them into their own
// files. Page components use `subjectsMeta` (titles and step titles only)
// plus `loadSubject()` (dynamic per-subject import) from `subjectLoaders.ts`
// instead. This module exists for `subjects.test.ts`, which does need every
// subject's full content to check it for integrity.
export const subjects: Subject[] = [
  uxFundamentals,
  visualDesignBasics,
  interactionDesign,
  accessibilityBasics,
  designThinking,
  designSystems,
  userResearch,
  gestaltPrinciples,
  uxForAi,
  uxLaws,
  productManagement,
  uxAudit,
  uxLeadership,
  businessRequirementAnalysis,
  uxTeamModels,
];
