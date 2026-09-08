import { Link } from 'react-router-dom';
import type { Subject } from '../types';
import { getStepUnlockInfo } from '../lib/storage';

export function PathMap({ subject }: { subject: Subject }) {
  return (
    <div className="path-map">
      {subject.levels.map((level) => (
        <div key={level.id} className="path-map__level">
          <h2 className="path-map__level-title">{level.title}</h2>
          <div className="path-map__nodes">
            {level.steps.map((step) => {
              const { index: flatIndex, isComplete, isLocked } = getStepUnlockInfo(subject, step.id);
              const position = flatIndex % 3;

              const node = (
                <div
                  className={[
                    'path-node',
                    isComplete ? 'path-node--complete' : '',
                    isLocked ? 'path-node--locked' : '',
                    `path-node--pos-${position}`,
                  ].join(' ').trim()}
                  style={{ '--accent': subject.color } as React.CSSProperties}
                >
                  <span className="path-node__circle">
                    {isComplete ? '✓' : isLocked ? '🔒' : flatIndex + 1}
                  </span>
                  <span className="path-node__title">{step.title}</span>
                </div>
              );

              return isLocked ? (
                <div key={step.id} aria-disabled="true">
                  {node}
                </div>
              ) : (
                <Link key={step.id} to={`/subjects/${subject.id}/steps/${step.id}`} className="path-node__link">
                  {node}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
