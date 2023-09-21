// General Imports
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Pages Imports
//import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
//import ERHome from "./pages/ERHome/ERHome";// May use later
import ERHome2 from "./pages/ERHome2/ERHome2";
import PatientDetailsPage from "./pages/PatientDetailsPage/PatientDetailsPage";
import PatientDashboardPage from './pages/PatientDashboardPage/PatientDashboardPage';
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer } from "react-toastify";
import InsurancePage from "./pages/InsurancePage/InsurancePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import QueuePage from "./components/QueuePage/QueuePage";
import LandingPage from "./components/LandingPage/LandingPage";
import AddPatientForm from "./components/AddPatientForm/AddPatientForm";
import MedicalSuppliesPage from "./components/MedicalSupplies/MedicalSupplies";
import StaffOnDutyPage from "./components/StaffOnDuty/StaffOnDuty";

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
          <>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add-patient" element={<AddPatientForm />} />
          <Route path="/select-patient" element={<ERHome2 />} />
          <Route path="/queue" element={<QueuePage />} />
          <Route path="/medical-supplies" element={<MedicalSuppliesPage />} />
          <Route path="/patient-dashboard" element={<PatientDashboardPage />} />
         </>  
        ) : (
          <Route path="/" element={<LandingPage />} />
          
        )}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-insurance" element={<InsurancePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/patient/:patientId" element={<PatientDetailsPage />} />
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/staff-on-duty" element={<StaffOnDutyPage />} /> 
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
      
      <Footer />
    </div>
  );
}

export default App;





