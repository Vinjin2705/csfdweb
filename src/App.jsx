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
import ChildAdmissionClearancePage from './pages/ChildAdmissionClearancePage'
import ChildAdmissionStudentInfoPage from './pages/ChildAdmissionStudentInfoPage'
import ChildInformationPage from './pages/ChildInformationPage'
import ChildAdmissionSummaryPage from './pages/ChildAdmissionSummaryPage'
import UniformExemptionPage from './pages/UniformExemptionPage'
import UniformExemptionFormPage from './pages/UniformExemptionFormPage'
import UniformExemptionSummaryPage from './pages/UniformExemptionSummaryPage'
import CitationSlipFormPage from './pages/CitationSlipFormPage'
import CitationSlipSummaryPage from './pages/CitationSlipSummaryPage'
import WorkingStudentFormPage from './pages/WorkingStudentFormPage'
import WorkingStudentSummaryPage from './pages/WorkingStudentSummaryPage'
import OJTFormPage from './pages/OJTFormPage'
import OJTSummaryPage from './pages/OJTSummaryPage'
import OrganizationEventRequesterPage from './pages/OrganizationEventRequesterPage'
import OrganizationEventInfoPage from './pages/OrganizationEventInfoPage'
import OrganizationEventSummaryPage from './pages/OrganizationEventSummaryPage'
import OrganizationShirtRequesterPage from './pages/OrganizationShirtRequesterPage'
import OrganizationShirtRequestPage from './pages/OrganizationShirtRequestPage'
import OrganizationShirtSummaryPage from './pages/OrganizationShirtSummaryPage'
import OtherExemptionFormPage from './pages/OtherExemptionFormPage'
import OtherExemptionSummaryPage from './pages/OtherExemptionSummaryPage'
import CrossDressingInfoPage from './pages/CrossDressingInfoPage'
import CrossDressingFormPage from './pages/CrossDressingFormPage'
import CrossDressingSummaryPage from './pages/CrossDressingSummaryPage'
import ComplaintInfoPage from './pages/ComplaintInfoPage'
import ComplainantFormPage from './pages/ComplainantFormPage'
import RespondentFormPage from './pages/RespondentFormPage'
import ComplaintDetailsFormPage from './pages/ComplaintDetailsFormPage'
import ComplaintSummaryPage from './pages/ComplaintSummaryPage'

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
        <Route path="/child-admission-clearance" element={<ChildAdmissionClearancePage />} />
        <Route path="/child-admission-student-info" element={<ChildAdmissionStudentInfoPage />} />
        <Route path="/child-information" element={<ChildInformationPage />} />
        <Route path="/child-admission-summary" element={<ChildAdmissionSummaryPage />} />
        <Route path="/uniform-exemption" element={<UniformExemptionPage />} />
        <Route path="/uniform-exemption-form" element={<UniformExemptionFormPage />} />
        <Route path="/uniform-exemption-summary" element={<UniformExemptionSummaryPage />} />
        <Route path="/citation-slip-form" element={<CitationSlipFormPage />} />
        <Route path="/citation-slip-summary" element={<CitationSlipSummaryPage />} />
        <Route path="/working-student-form" element={<WorkingStudentFormPage />} />
        <Route path="/working-student-summary" element={<WorkingStudentSummaryPage />} />
        <Route path="/ojt-form" element={<OJTFormPage />} />
        <Route path="/ojt-summary" element={<OJTSummaryPage />} />
        <Route path="/organization-event-requester" element={<OrganizationEventRequesterPage />} />
        <Route path="/organization-event-info" element={<OrganizationEventInfoPage />} />
        <Route path="/organization-event-summary" element={<OrganizationEventSummaryPage />} />
        <Route path="/organization-shirt-requester" element={<OrganizationShirtRequesterPage />} />
        <Route path="/organization-shirt-request" element={<OrganizationShirtRequestPage />} />
        <Route path="/organization-shirt-summary" element={<OrganizationShirtSummaryPage />} />
        <Route path="/other-exemption-form" element={<OtherExemptionFormPage />} />
        <Route path="/other-exemption-summary" element={<OtherExemptionSummaryPage />} />
        <Route path="/cross-dressing-info" element={<CrossDressingInfoPage />} />
        <Route path="/cross-dressing-form" element={<CrossDressingFormPage />} />
        <Route path="/cross-dressing-summary" element={<CrossDressingSummaryPage />} />
        <Route path="/complaint-info" element={<ComplaintInfoPage />} />
        <Route path="/complaint-form" element={<ComplainantFormPage />} />
        <Route path="/respondent-form" element={<RespondentFormPage />} />
        <Route path="/complaint-details" element={<ComplaintDetailsFormPage />} />
        <Route path="/complaint-summary" element={<ComplaintSummaryPage />} />
      </Routes>
    </Router>
  )
}

export default App
