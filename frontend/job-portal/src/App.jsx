import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard";
import JobDetails from "./pages/JobSeeker/JobDetails";
import SavedJobs from "./pages/JobSeeker/SavedJobs";
import UserProfile from "./pages/JobSeeker/UserProfile";
import ProtectedRoute from "./routes/ProtectedRoutes";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import ManageJobs from "./pages/Employer/ManageJobs";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/find-jobs" element={<JobSeekerDashboard />} />
        <Route path="job/:jobId" element={<JobDetails/>} />
        <Route path="saved-jobs" element={<SavedJobs/>}/>
        <Route path="profile" element={<UserProfile/>} />

        <Route element={<ProtectedRoute requiredRole="employer"/>}>
          <Route path="employer-dashboard" element={<EmployerDashboard/>} />
          <Route path="post-jobs" element={<JobPostingForm/>} />
          <Route path="manage-jobs" element={<ManageJobs/>} />
          <Route path="applicants" element={<ApplicationViewer/>} />
          <Route path="company-profile" element={<EmployerProfilePage/>} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;