import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import NotFound from "./pages/NotFound.js";
import Optin from "./pages/Optin.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/filename" element={<Optin />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
