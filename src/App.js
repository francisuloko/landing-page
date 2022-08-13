import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Optin from "./pages/Optin";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/filename" element={<Optin />} />
            <Route component={NotFound} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
