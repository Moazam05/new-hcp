// React Imports
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicRoutes from "./routes/PublicRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
// Custom Imports
import OverlayLoader from "./components/Spinner/OverlayLoader";
import ThankYou from "./views/ThankYou";
import GetStarted from "./views/GetStarted";
import Registration from "./views/Registration";
import Login from "./views/Login";
import Home from "./views/Home";
import PracticeManagement from "./views/PracticeManagement";
import AllSites from "./views/PracticeManagement/Components/AllSites";
import NewSite from "./views/PracticeManagement/Components/NewSite";
import ViewSite from "./views/PracticeManagement/Components/ViewSite";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<OverlayLoader />}>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoutes>
                <Registration />
              </PublicRoutes>
            }
          />
          <Route
            path="/thank-you"
            element={
              <PublicRoutes>
                <ThankYou />
              </PublicRoutes>
            }
          />
          <Route
            path="/get-started"
            element={
              <PublicRoutes>
                <GetStarted />
              </PublicRoutes>
            }
          />

          {/* PRIVATE ROUTES */}
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management"
            element={
              <ProtectedRoutes>
                <PracticeManagement />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/all-sites"
            element={
              <ProtectedRoutes>
                <AllSites />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/new-site/:siteId?"
            element={
              <ProtectedRoutes>
                <NewSite />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/view-site/:siteId"
            element={
              <ProtectedRoutes>
                <ViewSite />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
