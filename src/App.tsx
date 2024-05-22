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
import AllUsers from "./views/PracticeManagement/Components/AllUsers";
import NewUser from "./views/PracticeManagement/Components/NewUser";
import ViewUser from "./views/PracticeManagement/Components/ViewUser";
import AllProviders from "./views/PracticeManagement/Components/AllProviders";
import NewProvider from "./views/PracticeManagement/Components/NewProvider";
import ViewProvider from "./views/PracticeManagement/Components/ViewProvider";
import MySetting from "./views/PracticeManagement/Components/MySetting";
import PatientManagement from "./views/PatientManagement";
import EnrollPatient from "./views/PatientManagement/components/EnrollPatient";
import PatientType from "./views/PatientManagement/components/PatientType";

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
          {/* SITE */}
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
          {/* USER */}
          <Route
            path="/practice-management/all-users"
            element={
              <ProtectedRoutes>
                <AllUsers />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/new-user/:userId?"
            element={
              <ProtectedRoutes>
                <NewUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/view-user/:userId"
            element={
              <ProtectedRoutes>
                <ViewUser />
              </ProtectedRoutes>
            }
          />
          {/* PROVIDER */}
          <Route
            path="/practice-management/all-providers"
            element={
              <ProtectedRoutes>
                <AllProviders />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/new-provider/:providerId?"
            element={
              <ProtectedRoutes>
                <NewProvider />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/practice-management/view-provider/:providerId"
            element={
              <ProtectedRoutes>
                <ViewProvider />
              </ProtectedRoutes>
            }
          />
          {/* My Settings */}
          <Route
            path="/practice-management/my-settings"
            element={
              <ProtectedRoutes>
                <MySetting />
              </ProtectedRoutes>
            }
          />

          {/* Patient Management */}
          <Route
            path="/patient-management"
            element={
              <ProtectedRoutes>
                <PatientManagement />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/patient-management/enroll-patient"
            element={
              <ProtectedRoutes>
                <EnrollPatient />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/patient-management/enroll-patient/:patientType"
            element={
              <ProtectedRoutes>
                <PatientType />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
