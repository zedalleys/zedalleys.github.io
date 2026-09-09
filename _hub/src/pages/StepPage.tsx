import { use, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { loadSubject } from '../data/subjectLoaders';
import { ProgressBar } from '../components/ProgressBar';
import { QuizBlock } from '../components/QuizBlock';
import { QuizReview } from '../components/QuizReview';
import { getAllSteps, getStepUnlockInfo, getSubjectStats, markStepComplete } from '../lib/storage';
import { useDocumentMeta } from '../lib/useDocumentMeta';

export function StepPage() {
  const { subjectId, stepId } = useParams();
  const navigate = useNavigate();
  // `use` is exempt from the rules-of-hooks ordering constraint (it can be
  // called conditionally/interspersed), but it must still run before the
  // regular hooks below on every render, same as the rest of this function.
  // Suspends (via the route-level <Suspense> in App.tsx) until this specific
  // subject's full content — the one with `step.content`/`quiz` — has
  // loaded, instead of every subject's content shipping up front. An
  // unknown subjectId resolves to `undefined` (see `loadSubject`), no
  // network request made.
  const subject = use(loadSubject(subjectId ?? ''));
  const [practiceMode, setPracticeMode] = useState(false);

  const flatSteps = subject ? getAllSteps(subject) : [];
  const stepIndex = flatSteps.findIndex((s) => s.id === stepId);
  const step = flatSteps[stepIndex];

  useDocumentMeta(step ? `${step.title} — ${subject?.title}` : 'Step', step?.summary ?? '');

  if (!subject) return <Navigate to="/" replace />;
  if (!step) return <Navigate to={`/subjects/${subject.id}`} replace />;

  const { isComplete: alreadyComplete, previousComplete } = getStepUnlockInfo(subject, step.id);
  if (!previousComplete && !alreadyComplete) {
    return <Navigate to={`/subjects/${subject.id}`} replace />;
  }

  const previousStep = flatSteps[stepIndex - 1];
  const nextStep = flatSteps[stepIndex + 1];
  const nextStepUnlocked = alreadyComplete && !!nextStep;
  const stats = getSubjectStats(subject);

  function handlePass() {
    markStepComplete(subject!.id, step.id);

    if (practiceMode) {
      setPracticeMode(false);
      return;
    }

    const stats = getSubjectStats(subject!);
    if (nextStep) {
      navigate(`/subjects/${subject!.id}/steps/${nextStep.id}`);
    } else if (stats.isComplete) {
      navigate(`/subjects/${subject!.id}/certificate`);
    } else {
      navigate(`/subjects/${subject!.id}`);
    }
  }

  return (
    <div className="page page--step">
      <Link to={`/subjects/${subject.id}`} className="back-link">← Back to path</Link>

      <div className="step-progress">
        <ProgressBar
          percent={stats.percent}
          color={subject.color}
          label={`${stats.completed}/${stats.total} steps complete`}
        />
      </div>

      <p className="step-eyebrow" style={{ color: subject.color }}>
        Step {stepIndex + 1} of {flatSteps.length} · {subject.title}
      </p>
      <h1>{step.title}</h1>
      <p className="step-summary">{step.summary}</p>

      <div className="step-content">
        {step.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/*
        Keyed by step id so navigating straight from one step to the next
        (via "Complete step →" or the nav links) gives a fresh quiz —
        otherwise the component keeps its position in the tree and carries
        the previous step's answers and shuffled option order across.
      */}
      {alreadyComplete && !practiceMode ? (
        <QuizReview key={step.id} quiz={step.quiz} onRetake={() => setPracticeMode(true)} />
      ) : (
        <QuizBlock key={step.id} quiz={step.quiz} onPass={handlePass} />
      )}

      {alreadyComplete && (
        <div className="step-nav">
          {previousStep ? (
            <Link to={`/subjects/${subject.id}/steps/${previousStep.id}`} className="step-nav__link">
              ← {previousStep.title}
            </Link>
          ) : <span />}
          {nextStepUnlocked ? (
            <Link to={`/subjects/${subject.id}/steps/${nextStep!.id}`} className="step-nav__link step-nav__link--next">
              {nextStep!.title} →
            </Link>
          ) : <span />}
        </div>
      )}
    </div>
  );
}
