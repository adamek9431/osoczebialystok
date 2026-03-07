import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';

// Lazy load treatment pages for better performance
const PRPPage = lazy(() => import('./pages/PRPPage').then(m => ({ default: m.PRPPage })));
const PRFPage = lazy(() => import('./pages/PRFPage').then(m => ({ default: m.PRFPage })));
const FullFaceNaturalPage = lazy(() => import('./pages/FullFaceNaturalPage').then(m => ({ default: m.FullFaceNaturalPage })));
const ScalpPRPPage = lazy(() => import('./pages/ScalpPRPPage').then(m => ({ default: m.ScalpPRPPage })));
const ExosomesPage = lazy(() => import('./pages/ExosomesPage').then(m => ({ default: m.ExosomesPage })));
const MicroneedlingPage = lazy(() => import('./pages/MicroneedlingPage').then(m => ({ default: m.MicroneedlingPage })));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#666666]">Ładowanie...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/osocze-bogatoplytkowe-prp-bialystok" element={<Layout><PRPPage /></Layout>} />
          <Route path="/fibryna-bogatoplytkowa-prf-bialystok" element={<Layout><PRFPage /></Layout>} />
          <Route path="/full-face-natural-bialystok" element={<Layout><FullFaceNaturalPage /></Layout>} />
          <Route path="/osocze-na-skore-glowy-bialystok" element={<Layout><ScalpPRPPage /></Layout>} />
          <Route path="/autologiczne-egzosomy-bialystok" element={<Layout><ExosomesPage /></Layout>} />
          <Route path="/mezoterapia-mikroiglowa-bialystok" element={<Layout><MicroneedlingPage /></Layout>} />
          {/* Catch-all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}