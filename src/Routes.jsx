import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProductRecomendations = React.lazy(() =>
  import("pages/ProductRecomendations"),
);
const ProductCharacteristics = React.lazy(() =>
  import("pages/ProductCharacteristics"),
);
const WhitespaceAnalysis = React.lazy(() => import("pages/WhitespaceAnalysis"));
const AlgorithmSelectionOne = React.lazy(() =>
  import("pages/AlgorithmSelectionOne"),
);
const ClusterAnalysis = React.lazy(() => import("pages/ClusterAnalysis"));
const AlgorithmSelection = React.lazy(() => import("pages/AlgorithmSelection"));
const DashboardSix = React.lazy(() => import("pages/DashboardSix"));
const ProjectLibrary = React.lazy(() => import("pages/ProjectLibrary"));
const DashboardFive = React.lazy(() => import("pages/DashboardFive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardFive />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projectlibrary" element={<ProjectLibrary />} />
          <Route path="/dashboardsix" element={<DashboardSix />} />
          <Route path="/algorithmselection" element={<AlgorithmSelection />} />
          <Route path="/clusteranalysis" element={<ClusterAnalysis />} />
          <Route
            path="/algorithmselectionone"
            element={<AlgorithmSelectionOne />}
          />
          <Route path="/whitespaceanalysis" element={<WhitespaceAnalysis />} />
          <Route
            path="/productcharacteristics"
            element={<ProductCharacteristics />}
          />
          <Route
            path="/productrecomendations"
            element={<ProductRecomendations />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
