import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function ComplaintEvaluatePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Get complaint data from navigation state or use defaults
  const complaint = location.state?.complaint || {
    id: 1,
    complaintNo: '2024-001',
    subject: 'Noise Complaint in Library',
    category: 'minor',
    status: 'Pending',
    dateFiled: 'March 15, 2024',
    complainantName: 'John Doe',
    college: 'CCIS'
  }

  const menuItems = [
    { label: 'Home', path: '/admin-dashboard' },
    { label: 'Good Moral Request | List of applicants', path: '/admin/good-moral' },
    { label: 'Good Moral Request | For Processing', path: '/admin/good-moral-processing' },
    { label: 'Disciplinary Records', path: '/disciplinary-records' },
    { label: 'Complaint', path: '/complaint' }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between sticky top-0 z-30" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-xs opacity-80">Center for Student Formation and Discipline</p>
            <p className="text-xl font-bold">COMPLAINT INFORMATION</p>
          </div>
        </div>
        
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(true)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Main Content */}
      <div className="px-8 py-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-300 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={umakLogo} alt="UMak" className="w-10 h-10 rounded-full" />
              <img src={csfdLogo} alt="CSFD" className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="text-lg font-bold text-gray-800">COMPLAINT INFORMATION</h2>
              </div>
            </div>
            <button onClick={() => navigate('/complaint')} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6">
            {/* Core Complaint Details */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">Core Complaint Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Case Category</label>
                  <input type="text" value={complaint.category} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Case Status</label>
                  <input type="text" value={complaint.status} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Complaint Title/Subject</label>
                  <input type="text" value={complaint.subject} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Complaint Category</label>
                  <input type="text" value={complaint.category} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-1">Detailed Description</label>
                <textarea readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 h-24 resize-none" value="Loud noise and disturbance during study hours in the library. Multiple students affected. The incident occurred during peak study time and disrupted the learning environment for approximately 30 students." />
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-1">Desired Outcome/Resolution</label>
                <textarea readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50 h-20 resize-none" value="Warning to be issued and proper conduct enforced in library premises. Repeat offenders should face appropriate disciplinary action." />
              </div>
            </div>

            {/* Timeline & Context */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">Timeline & Context</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Date Reported</label>
                  <input type="text" value={complaint.dateFiled} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Time of Incident</label>
                  <input type="text" value="2:30 PM" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Date of Incident</label>
                  <input type="text" value="March 15, 2024" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-1">Witnesses Present</label>
                <input type="text" value="John Smith, Jane Doe, Mike Johnson, Sarah Williams" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50" />
              </div>
            </div>

            {/* Evidences & Documentation */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide border-b border-gray-300 pb-2">Evidences & Documentation</h3>
              <div className="mt-2">
                <label className="block text-xs text-gray-600 mb-2">Evidence Records</label>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    evidence1.pdf
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    photo1.jpg
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    witness.pdf
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-2">Upload File Attachments</label>
                <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-xs text-gray-500">Click to upload or drag and drop files here</span>
                </div>
              </div>
            </div>

            {/* Main Complainant */}
            <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Main Complainant</h3>
                <div className="flex gap-2">
                  <button className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Name</label>
                  <input type="text" value={complaint.complainantName} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Sex</label>
                  <input type="text" value="Male" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Year/Grade Level</label>
                  <input type="text" value="3rd Year" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">College/Institute</label>
                  <input type="text" value={complaint.college} readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
              </div>
            </div>

            {/* Co-Complainant */}
            <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Co-Complainant</h3>
                <div className="flex gap-2">
                  <button className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Name</label>
                  <input type="text" value="Jane Smith" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Sex</label>
                  <input type="text" value="Female" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Year/Grade Level</label>
                  <input type="text" value="2nd Year" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">College/Institute</label>
                  <input type="text" value="CBM" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
              </div>
            </div>

            {/* Main Respondent */}
            <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Main Respondent</h3>
                <div className="flex gap-2">
                  <button className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Name</label>
                  <input type="text" value="Alex Rivera" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Sex</label>
                  <input type="text" value="Male" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Year/Grade Level</label>
                  <input type="text" value="4th Year" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">College/Institute</label>
                  <input type="text" value="CCIS" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
              </div>
            </div>

            {/* Co-Respondent */}
            <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Co-Respondent</h3>
                <div className="flex gap-2">
                  <button className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Name</label>
                  <input type="text" value="Maria Garcia" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Sex</label>
                  <input type="text" value="Female" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Year/Grade Level</label>
                  <input type="text" value="3rd Year" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">College/Institute</label>
                  <input type="text" value="CBM" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Progress</h3>
                <div className="flex gap-2">
                  <button className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Subject</label>
                  <input type="text" value="Investigation Ongoing" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Date</label>
                  <input type="text" value="March 16, 2024" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">Description</label>
                  <textarea readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white h-20 resize-none" value="Witnesses interviewed, evidence collected. Initial assessment completed. Waiting for respondent's statement." />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">Supporting Documents</label>
                  <input type="text" value="interview_record.pdf, investigation_notes.docx" readOnly className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white" />
                </div>
              </div>
            </div>

            {/* Add Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Complainant
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Respondent
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Complaint
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-300 flex justify-center gap-4 bg-gray-50">
            <button
              onClick={() => navigate('/complaint')}
              className="px-8 py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition-colors"
            >
              SAVE THE COMPLAINT INFORMATION
            </button>
            <button
              onClick={() => navigate('/complaint')}
              className="px-8 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition-colors"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{backgroundColor: '#111c4e'}}>
        <div className="flex justify-end p-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white rotate-45 translate-y-2"></span>
              <span className="w-full h-0.5 bg-white opacity-0"></span>
              <span className="w-full h-0.5 bg-white -rotate-45 -translate-y-2"></span>
            </div>
          </button>
        </div>
        <div className="px-6 py-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base"
              onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
            >
              {item.label}
            </button>
          ))}
          <button className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base" onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>
            LOGOUT
          </button>
        </div>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}></div>}

      {/* Footer */}
      <footer className="text-white px-12 py-10 mt-8" style={{ backgroundColor: '#3d3d3d' }}>
        <div className="max-w-6xl mx-auto flex flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-5" style={{color: '#ffc400'}}>Contact us</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
                <span className="text-xs text-white/60">f</span>
              </div>
              <span>@UMak CSFD</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
                <span className="text-xs">🌐</span>
              </div>
              <span>umak.edu.ph/centers/csfd/</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
                <span className="text-xs">📞</span>
              </div>
              <span>8883-1875</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For general concern</span>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For complaint concern</span>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">umakpsd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For request of good moral certificate concern</span>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfdgoodmoral.umak.edu.ph</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfdgoodmoralcertificate@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center gap-4">
            <img src={footerUmakLogo} alt="University of Makati" className="w-20 h-20 rounded-full object-cover" />
            <img src={footerCsfdLogo} alt="CSFD" className="w-20 h-20 rounded-full object-cover" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ComplaintEvaluatePage
