import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ServicesPage from './pages/ServicesPage'
import CitationSlipPage from './pages/CitationSlipPage'
import GoodMoralPage from './pages/GoodMoralPage'
import RequesterInfoPage from './pages/RequesterInfoPage'
import EnrolledStudentInfoPage from './pages/EnrolledStudentInfoPage'
import StudentSummaryPage from './pages/StudentSummaryPage'
import RequestSuccessPage from './pages/RequestSuccessPage'
import GraduateStudentInfoPage from './pages/GraduateStudentInfoPage'
import GraduateSummaryPage from './pages/GraduateSummaryPage'
import FormerStudentInfoPage from './pages/FormerStudentInfoPage'
import FormerStudentSummaryPage from './pages/FormerStudentSummaryPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/citation-slip" element={<CitationSlipPage />} />
        <Route path="/good-moral" element={<GoodMoralPage />} />
        <Route path="/requester-info" element={<RequesterInfoPage />} />
        <Route path="/enrolled-student-info" element={<EnrolledStudentInfoPage />} />
        <Route path="/student-summary" element={<StudentSummaryPage />} />
        <Route path="/request-success" element={<RequestSuccessPage />} />
        <Route path="/graduate-student-info" element={<GraduateStudentInfoPage />} />
        <Route path="/graduate-summary" element={<GraduateSummaryPage />} />
        <Route path="/former-student-info" element={<FormerStudentInfoPage />} />
        <Route path="/former-student-summary" element={<FormerStudentSummaryPage />} />
      </Routes>
    </Router>
  )
}

export default App
