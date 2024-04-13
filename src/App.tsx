// React Imports
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Custom Imports
import OverlayLoader from "./components/Spinner/OverlayLoader";
import ThankYou from "./views/ThankYou";
import GetStarted from "./views/GetStarted";
import Registration from "./views/Registration";
import Login from "./views/Login";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<OverlayLoader />}>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
