import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import Landing from "./pages/Landing.js";
import NotFound from "./pages/NotFound.js";
import Optin from "./pages/Optin.tsx";
import ReactGA from 'react-ga4';

const theme = createTheme();
const ID = "G-9V9JMCS6CH";
ReactGA.initialize(ID)
ReactGA.send("pageview");

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/filename" element={<Optin />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
