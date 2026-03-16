import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function GoodMoralAdminPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedApplicant, setSelectedApplicant] = useState(null)
  const [remarks, setRemarks] = useState('')
  const [searchBy, setSearchBy] = useState('Request No.')
  const [searchQuery, setSearchQuery] = useState('')

  const [applicants, setApplicants] = useState([
    {
      id: 1,
      requestNo: 'GMCR-0000001',
      studentName: 'Juan A. Dela Cruz Sr.',
      email: 'juandelacruzsr@gmail.com',
      typeOfRequest: 'CCA Requirement',
      dateOfRequest: 'January 23, 1991',
      status: 'Issued',
      contactNo: '09123456789'
    },
    {
      id: 2,
      requestNo: 'GMCR-0000002',
      studentName: 'Maria Clara De Jesus',
      email: 'mariaclaradejesus@gmail.com',
      typeOfRequest: 'LANI Scholarship',
      dateOfRequest: 'January 23, 1991',
      status: 'Hold',
      contactNo: '09987654321'
    }
  ])

  const menuItems = [
    { label: 'Home', path: '/admin-dashboard' },
    { label: 'Good Moral Request | List of applicants', path: '/admin/good-moral' },
    { label: 'Good Moral Request | For Processing', path: '/admin/good-moral-processing' },
    { label: 'Disciplinary Records', path: '/disciplinary-records' }
  ]

  const searchOptions = ['Request No.', 'Student Name', 'Email', 'Date of Request']

  const getStatusBadge = (status) => {
    const colors = {
      'Issued': 'bg-green-600',
      'Hold': 'bg-red-600',
      'New': 'bg-green-500',
      'Due': 'bg-orange-500',
      'Over Due': 'bg-red-600'
    }
    return (
      <span className={`${colors[status] || 'bg-gray-500'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
        {status}
      </span>
    )
  }

  const handleActionClick = (applicant) => {
    setSelectedApplicant(applicant)
    setRemarks('')
    setIsModalOpen(true)
  }

  const handleIssue = () => {
    if (selectedApplicant) {
      setApplicants(prev => prev.map(app => 
        app.id === selectedApplicant.id 
          ? { ...app, status: 'Issued' }
          : app
      ))
      setIsModalOpen(false)
      setSelectedApplicant(null)
      setRemarks('')
    }
  }

  const handleHold = () => {
    if (selectedApplicant) {
      setApplicants(prev => prev.map(app => 
        app.id === selectedApplicant.id 
          ? { ...app, status: 'Hold' }
          : app
      ))
      setIsModalOpen(false)
      setSelectedApplicant(null)
      setRemarks('')
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedApplicant(null)
    setRemarks('')
  }

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between sticky top-0 z-30" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-xs opacity-80">Center for Student Formation and Discipline</p>
            <p className="text-xl font-bold">GOOD MORAL CERTIFICATE REQUEST</p>
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
      <div className="px-8 py-6 max-w-7xl mx-auto">
        <div className="bg-gray-200 rounded-lg p-6">
          <p className="text-xs text-gray-500 mb-1">{currentDate}, {currentDay}</p>
          <h1 className="text-2xl font-bold mb-4">LIST OF APPLICANTS</h1>

          {/* Search Section */}
          <div className="flex items-center gap-2 mb-4">
            <label className="text-xs font-medium text-gray-700">Search by</label>
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {searchOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 max-w-xs px-3 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-3 py-1 rounded text-xs text-white font-medium" style={{ backgroundColor: '#007bff' }}>
              Search
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-white border-b border-gray-300">
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300 w-8">#</th>
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300">Request No.</th>
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300">Student Information</th>
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300">Contact Information</th>
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300">Type of request</th>
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300">Date of request</th>
                  <th className="py-3 px-2 text-center font-bold border-r border-gray-300">Status</th>
                  <th className="py-3 px-2 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant, index) => (
                  <tr key={applicant.id} className="border-b border-gray-200">
                    <td className="py-3 px-2 text-center border-r border-gray-200">{index + 1}</td>
                    <td className="py-3 px-2 text-center border-r border-gray-200">{applicant.requestNo}</td>
                    <td className="py-3 px-2 border-r border-gray-200">
                      <p className="font-medium">{applicant.studentName}</p>
                    </td>
                    <td className="py-3 px-2 text-center border-r border-gray-200">{applicant.email}</td>
                    <td className="py-3 px-2 text-center border-r border-gray-200">{applicant.typeOfRequest}</td>
                    <td className="py-3 px-2 text-center border-r border-gray-200">{applicant.dateOfRequest}</td>
                    <td className="py-3 px-2 text-center border-r border-gray-200">
                      {getStatusBadge(applicant.status)}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <button 
                        className="px-4 py-1 border border-blue-400 rounded text-xs text-blue-600 hover:bg-blue-50 transition-colors"
                        onClick={() => handleActionClick(applicant)}
                      >
                        Action
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Empty rows for table structure */}
                {[...Array(20)].map((_, i) => (
                  <tr key={`empty-${i}`} className="border-b border-gray-200 h-10">
                    <td className="border-r border-gray-200"></td>
                    <td className="border-r border-gray-200"></td>
                    <td className="border-r border-gray-200"></td>
                    <td className="border-r border-gray-200"></td>
                    <td className="border-r border-gray-200"></td>
                    <td className="border-r border-gray-200"></td>
                    <td className="border-r border-gray-200"></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Action Modal */}
      {isModalOpen && selectedApplicant && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-gray-300 rounded-lg w-full max-w-lg mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-400">
              <h2 className="text-lg font-bold text-gray-800">Good Moral Certificate Request</h2>
            </div>
            
            {/* Modal Body */}
            <div className="px-6 py-4">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 mb-2">REQUESTER&apos;S NAME</p>
                <h3 className="text-xl font-bold text-gray-900">{selectedApplicant.studentName}</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">REMARKS:</label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full h-32 px-3 py-2 border border-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter remarks here..."
                />
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-400 flex justify-center gap-4">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <button
                onClick={handleIssue}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Issue
              </button>
              <button
                onClick={handleHold}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hold
              </button>
            </div>
          </div>
        </div>
      )}

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

export default GoodMoralAdminPage
