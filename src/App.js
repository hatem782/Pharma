import Dashboard from "./pages/dashboard/Dashboard";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
import Theme from "./theme/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Dashboard />
      </Theme>
    </div>
  );
}

export default App;
