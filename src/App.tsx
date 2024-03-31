import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OverlayLoader from "./components/Spinner/OverlayLoader";

import ThankYou from "./views/ThankYou";
// Lazy Load Components
const GetStarted = lazy(() => import("./views/GetStarted"));
const Registration = lazy(() => import("./views/Registration"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<OverlayLoader />}>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
