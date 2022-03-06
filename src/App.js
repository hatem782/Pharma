import Dashboard from "./pages/dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Theme from "./theme/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Router>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/*" element={<Navigate to="/dashboard/main" />} />
          </Routes>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
