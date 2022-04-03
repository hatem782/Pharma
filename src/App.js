import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/Login/SignIn/SignIn";
import Register from "./pages/Login/Register/Register";
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

            <Route path="/signin" element={<SignIn />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/*" element={<Navigate to="/signin" />} />
            {/* <Route path="/*" element={<Navigate to="/dashboard/main" />} /> */}
          </Routes>
        </Router>
      </Theme>
    </div>
  );
}

export default App;
