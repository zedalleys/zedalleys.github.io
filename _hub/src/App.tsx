import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { SiteFooter } from './components/SiteFooter';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { SubjectPathPage } from './pages/SubjectPathPage';
import { StepPage } from './pages/StepPage';
import { RoadmapPage } from './pages/RoadmapPage';
import './App.css';

// The certificate/verify routes pull in the Supabase client and the canvas
// certificate renderer — real weight that most visitors (just reading a
// lesson) never need. Splitting them out of the main chunk keeps the
// common path lighter.
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
              <Route path="/roadmaps" element={<RoadmapPage />} />
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
