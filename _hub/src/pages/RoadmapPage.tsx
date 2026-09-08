import { useState } from 'react';
import { Link } from 'react-router-dom';
import { roadmapCategories } from '../data/roadmap';
import { useDocumentMeta } from '../lib/useDocumentMeta';

/**
 * Static reference maps, one per discipline. Sections and clusters only —
 * no per-item resources, no nested pages, no fetching. See data/roadmap.ts
 * for the content and its source note. A category with no `sections` yet
 * renders as "coming soon".
 */
export function RoadmapPage() {
  const [activeId, setActiveId] = useState(roadmapCategories[0].id);
  const active = roadmapCategories.find((c) => c.id === activeId) ?? roadmapCategories[0];

  useDocumentMeta(
    'Roadmaps',
    `${active.label} roadmap — a static map of the discipline, not a course.`,
  );

  return (
    <div className="page page--roadmap">
      <Link to="/" className="back-link">
        ← Learning Hub
      </Link>

      <header className="hub-hero">
        <p className="hub-hero__eyebrow">Reference</p>
        <h1>Roadmaps.</h1>
        <p className="hub-hero__tagline">
          Static maps of each discipline — how the topics fit together. Not a course: nothing here links
          out or unlocks a step.
        </p>
      </header>

      <div className="roadmap-tabs" role="tablist">
        {roadmapCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={category.id === activeId}
            className={`roadmap-tab${category.id === activeId ? ' is-active' : ''}`}
            onClick={() => setActiveId(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {active.sections ? (
        <div className="roadmap">
          {active.sections.map((section) => (
            <section className="roadmap-section" key={section.id}>
              <h2 className="roadmap-section__title">{section.title}</h2>
              <div className="roadmap-clusters">
                {section.clusters.map((cluster) => (
                  <div className="roadmap-cluster" key={cluster.title}>
                    <h3 className="roadmap-cluster__title">{cluster.title}</h3>
                    <ul className="roadmap-cluster__items">
                      {cluster.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="roadmap-soon">
          <p className="roadmap-soon__eyebrow">Coming soon</p>
          <h2>{active.label} roadmap</h2>
          <p>This map hasn't been written yet — check back later.</p>
        </div>
      )}
    </div>
  );
}
