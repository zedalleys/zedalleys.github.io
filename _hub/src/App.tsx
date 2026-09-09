import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { SiteFooter } from './components/SiteFooter';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';

// Every route is its own chunk. All four page components pull in
// `data/subjects.ts` (and its per-subject files) — several thousand lines
// of lesson/quiz content — so keeping any of them in the main bundle would
// load that content on every visit regardless of which page it's for.
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const SubjectPathPage = lazy(() =>
  import('./pages/SubjectPathPage').then((m) => ({ default: m.SubjectPathPage })),
);
const StepPage = lazy(() => import('./pages/StepPage').then((m) => ({ default: m.StepPage })));
const CertificatePage = lazy(() =>
  import('./pages/CertificatePage').then((m) => ({ default: m.CertificatePage })),
);
const VerifyPage = lazy(() => import('./pages/VerifyPage').then((m) => ({ default: m.VerifyPage })));

/**
 * Reset scroll to the top whenever the route changes. HashRouter does no
 * scroll restoration of its own, so without this a link followed from a
 * scrolled-down page (e.g. "Subjects" from the bottom of a subject path)
 * lands mid-page and looks like it did nothing.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <main className="hub-main">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/subjects/:subjectId" element={<SubjectPathPage />} />
              <Route path="/subjects/:subjectId/steps/:stepId" element={<StepPage />} />
              <Route path="/subjects/:subjectId/certificate" element={<CertificatePage />} />
              <Route path="/verify/:certificateId" element={<VerifyPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <SiteFooter />
    </HashRouter>
  );
}

export default App;
