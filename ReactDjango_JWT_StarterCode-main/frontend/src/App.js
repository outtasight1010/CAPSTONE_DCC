// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
//import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ERHome from "./pages/ERHome/ERHome";
import InsurancePage from "./pages/InsurancePage/InsurancePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PatientPopup from "./components/PatientPopup/PatientPopup";
import LandingPage from "./components/LandingPage/LandingPage";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";

function App() {
  const [user] = useAuth();

  return (
    <div>
      <Navbar />
      <Routes>
        {user ? (
          <Route path="/" element={<ERHome />} />
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-insurance" element={<InsurancePage />} /> {/* Add this route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
