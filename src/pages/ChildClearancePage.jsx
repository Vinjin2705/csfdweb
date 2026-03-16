import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function ChildClearancePage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [searchBy, setSearchBy] = useState('Request No.')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [remarks, setRemarks] = useState('')

  const [requests, setRequests] = useState([
    {
      id: 1,
      requestNo: '2024-001',
      requesterName: 'Juan A. Dela Cruz Sr.',
      college: 'CCIS',
      dateRequested: 'March 15, 2024',
      dateApproved: '',
      status: 'pending',
      hold: false
    },
    {
      id: 2,
      requestNo: '2024-002',
      requesterName: 'Maria Santos',
      college: 'CBM',
      dateRequested: 'March 10, 2024',
      dateApproved: '',
      status: 'pending',
      hold: false
    },
    {
      id: 3,
      requestNo: '2024-003',
      requesterName: 'Pedro Reyes',
      college: 'COE',
      dateRequested: 'March 5, 2024',
      dateApproved: 'March 8, 2024',
      status: 'approved',
      hold: false
    }
  ])

  const menuItems = [
    { label: 'HOME', path: '/admin-dashboard' },
    { label: 'GOOD MORAL REQUEST', path: '/admin/good-moral' },
    { label: 'UNIFORM EXEMPTION REQUEST', path: '/uniform-exemption-admin' },
    { label: 'CHILD ADMISSION REQUEST', path: '/child-clearance' },
    { label: 'CROSS-DRESSING REQUEST', path: '/cross-dressing' },
    { label: 'COMPLAINT', path: '/complaint' },
    { label: 'DISCIPLINARY RECORDS', path: '/disciplinary-records' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQs', path: '/faqs' }
  ]

  const searchOptions = [
    'Request No.',
    'Requester Name',
    'College',
    'Date of Request',
    'Oldest to Newest',
    'Newest to Oldest'
  ]

  const filteredRequests = requests.filter(request => {
    if (activeTab === 'all') return request.status !== 'approved'
    return request.status === 'approved'
  })

  const handleEvaluate = (request) => {
    setSelectedRequest(request)
    setRemarks('')
    setIsModalOpen(true)
  }

  const handleIssue = () => {
    if (selectedRequest) {
      setRequests(prev => prev.map(req => 
        req.id === selectedRequest.id 
          ? { ...req, status: 'approved', dateApproved: new Date().toLocaleDateString(), hold: false }
          : req
      ))
      setIsModalOpen(false)
      setSelectedRequest(null)
    }
  }

  const handleHold = () => {
    if (selectedRequest) {
      setRequests(prev => prev.map(req => 
        req.id === selectedRequest.id 
          ? { ...req, hold: true, status: 'pending' }
          : req
      ))
      setIsModalOpen(false)
      setSelectedRequest(null)
    }
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
            <p className="text-xl font-bold">CHILD CLEARANCE REQUEST</p>
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
        {/* Tabs */}
        <div className="flex mb-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 px-6 font-bold text-sm rounded-t-lg transition-colors ${activeTab === 'all' ? 'bg-white text-gray-900' : 'bg-gray-400 text-white hover:bg-gray-500'}`}
          >
            ALL REQUEST
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`flex-1 py-3 px-6 font-bold text-sm rounded-t-lg transition-colors ${activeTab === 'approved' ? 'bg-white text-gray-900' : 'bg-gray-400 text-white hover:bg-gray-500'}`}
          >
            APPROVED
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg p-6">
          <p className="text-xs text-gray-500 mb-1">{currentDate}, {currentDay}</p>
          <h1 className="text-2xl font-bold mb-4">LIST OF CHILD CLEARANCE REQUEST</h1>

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

          {/* Request Cards */}
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <div key={request.id} className="border-2 border-gray-300 rounded-lg p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {request.hold && request.status === 'pending' && (
                      <span className="bg-gray-600 text-white text-xs font-bold px-2 py-0.5 rounded">HOLD</span>
                    )}
                    {activeTab === 'approved' && (
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">APPROVED</span>
                    )}
                    <h3 className="font-bold text-base">REQUEST NO.: {request.requestNo}</h3>
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    <p>Date requested: {request.dateRequested}</p>
                    {activeTab === 'approved' && request.dateApproved && (
                      <p>Date approved: {request.dateApproved}</p>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-600">Name of requester: {request.requesterName}</p>
                  <p className="text-xs text-gray-600">College/Institute: {request.college}</p>
                </div>

                <div className="flex justify-end gap-2">
                  <button className="px-4 py-1.5 border border-gray-400 rounded text-xs font-medium hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                  
                  {activeTab === 'all' ? (
                    <button 
                      onClick={() => handleEvaluate(request)}
                      className="px-6 py-1.5 rounded text-xs font-medium text-gray-800 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#ffc400' }}
                    >
                      Evaluate
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleEvaluate(request)}
                      className="px-6 py-1.5 rounded text-xs font-medium text-gray-800 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#ffc400' }}
                    >
                      Re-evaluate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Evaluation Modal */}
      {isModalOpen && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-gray-300 rounded-lg w-full max-w-2xl mx-4 p-8">
            <h2 className="text-xl font-bold text-white mb-6" style={{ backgroundColor: '#4a4a4a' }}>
              <span className="inline-block px-4 py-2">Child Clearance Request</span>
            </h2>

            <div className="text-center mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">REQUESTER&apos;S NAME</p>
              <h3 className="text-2xl font-bold text-black">{selectedRequest.requesterName.toUpperCase()}</h3>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">REMARKS:</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full h-40 px-4 py-3 border-2 border-blue-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: '#d9d9d9' }}
              />
            </div>

            <div className="flex justify-center gap-4 pt-4 border-t-2 border-gray-400">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-2 rounded text-white font-medium flex items-center gap-2"
                style={{ backgroundColor: '#4a4a4a' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
              </button>
              
              <button
                onClick={handleIssue}
                className="px-8 py-2 bg-green-600 rounded text-white font-medium flex items-center gap-2 hover:bg-green-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Issue
              </button>
              
              <button
                onClick={handleHold}
                className="px-8 py-2 bg-red-600 rounded text-white font-medium flex items-center gap-2 hover:bg-red-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                Hold
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB and Menu */}
      <section className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-20">
        <div className={`flex flex-col items-end gap-3 transition-all duration-300 ease-in-out ${isFabMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button onClick={() => navigate('/add-announcement')} className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-400 transition-colors shadow-lg">
            Compose an announcement
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-400 transition-colors shadow-lg">
            Encode Complaint
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-400 transition-colors shadow-lg">
            Encode Violation Citation
            <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg mt-2 ${isFabMenuOpen ? 'bg-gray-500 rotate-45' : 'bg-gray-400 hover:bg-gray-500'}`} onClick={() => setIsFabMenuOpen(!isFabMenuOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </section>

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

export default ChildClearancePage
