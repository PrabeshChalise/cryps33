import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main1 from "./Components/Main1"; // Home Page
import TradePage from "./Components/TradePage"; // Trade Page
import PlanPage from "./Components/PlanPage"; // Trade Page
import FeaturePage from "./Components/FeaturePage"; // Trade Page
<<<<<<< HEAD
=======
import WalletDashboard from "./Components/WalletDashboard";
>>>>>>> 0a10aed (Initial commit)

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> Always show header */}
        <Routes>
          <Route path="/" element={<Main1 />} /> {/* Home Page */}
          <Route path="/trade" element={<TradePage />} /> {/* Trade Page */}
<<<<<<< HEAD
            <Route path="/plan" element={<PlanPage />} /> {/* Plan Page */}
                 <Route path="/feature" element={<FeaturePage />} /> {/* Plan Page */}
=======
          <Route path="/plan" element={<PlanPage />} /> {/* Plan Page */}
          <Route path="/feature" element={<FeaturePage />} /> {/* Plan Page */}
          <Route path="/wallet" element={<WalletDashboard />} />{" "}
          {/* Plan Page */}
>>>>>>> 0a10aed (Initial commit)
        </Routes>
      </div>
    </Router>
  );
}

export default App;
