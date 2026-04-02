import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function ComplaintPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all') // 'all', 'pending', 'resolved'
  const [filterType, setFilterType] = useState('all') // 'all', 'major', 'minor', 'others'
  const [searchBy, setSearchBy] = useState('Complaint No.')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample complaint data with history array for version tracking
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      complaintNo: '2024-001',
      subject: 'Noise Complaint in Library',
      category: 'major',
      complainantName: 'John Doe',
      college: 'CCIS',
      dateFiled: 'March 15, 2024',
      status: 'pending',
      versionHistory: [
        { id: 1, type: 'Original', date: 'March 15, 2024', modified: '' }
      ],
      additionalComplainants: [],
      additionalRespondents: [],
      progressList: []
    },
    {
      id: 2,
      complaintNo: '2024-002',
      subject: 'Classroom Equipment Damage',
      category: 'minor',
      complainantName: 'Jane Smith',
      college: 'CBM',
      dateFiled: 'March 10, 2024',
      status: 'pending',
      versionHistory: [
        { id: 1, type: 'Original', date: 'March 10, 2024', modified: '' },
        { id: 2, type: 'First Modifications', date: 'March 12, 2024', modified: 'March 12, 2024' },
        { id: 3, type: 'Second Modifications', date: 'March 15, 2024', modified: 'March 15, 2024' }
      ],
      additionalComplainants: [],
      additionalRespondents: [],
      progressList: []
    },
    {
      id: 3,
      complaintNo: '2024-003',
      subject: 'Lost Student ID',
      category: 'others',
      complainantName: 'Mike Johnson',
      college: 'COE',
      dateFiled: 'March 5, 2024',
      status: 'resolved',
      versionHistory: [
        { id: 1, type: 'Original', date: 'March 5, 2024', modified: '' }
      ],
      additionalComplainants: [],
      additionalRespondents: [],
      progressList: []
    },
    {
      id: 4,
      complaintNo: '2024-004',
      subject: 'Parking Violation',
      category: 'major',
      complainantName: 'Sarah Lee',
      college: 'CCIS',
      dateFiled: 'March 12, 2024',
      status: 'pending',
      versionHistory: [
        { id: 1, type: 'Original', date: 'March 12, 2024', modified: '' },
        { id: 2, type: 'First Modifications', date: 'March 14, 2024', modified: 'March 14, 2024' }
      ],
      additionalComplainants: [],
      additionalRespondents: [],
      progressList: []
    }
  ])

  // Check for updated complaint from evaluate page - use useEffect to handle navigation state
  useEffect(() => {
    const updatedComplaintFromEvaluate = location.state?.updatedComplaint
    if (updatedComplaintFromEvaluate) {
      setComplaints(prevComplaints => {
        // Find and update the complaint in our list
        const existingIndex = prevComplaints.findIndex(c => c.id === updatedComplaintFromEvaluate.id || c.complaintNo === updatedComplaintFromEvaluate.complaintNo)
        if (existingIndex >= 0) {
          // Update existing complaint
          const updatedComplaints = [...prevComplaints]
          updatedComplaints[existingIndex] = { ...updatedComplaints[existingIndex], ...updatedComplaintFromEvaluate }
          return updatedComplaints
        } else {
          // Add as new complaint
          return [...prevComplaints, updatedComplaintFromEvaluate]
        }
      })
      
      // Clear the location state to prevent duplicate processing
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location.state, navigate])

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

  // Filter complaints based on active tab and filter type
  const filteredComplaints = complaints.filter(complaint => {
    const matchesTab = activeTab === 'all' || complaint.status === activeTab
    const matchesType = filterType === 'all' || complaint.category === filterType
    return matchesTab && matchesType
  })

  const getCategoryBadge = (category) => {
    const colors = {
      major: 'bg-red-600',
      minor: 'bg-orange-500',
      others: 'bg-yellow-400'
    }
    const labels = {
      major: 'MAJOR',
      minor: 'MINOR',
      others: 'OTHERS'
    }
    return (
      <span className={`${colors[category]} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
        {labels[category]}
      </span>
    )
  }

  const handleEvaluateClick = (complaint) => {
    // Navigate to evaluate page for editing
    navigate('/complaint-evaluate', { state: { complaint } })
  }

  const handleViewDetailsClick = (complaint) => {
    // Get version history from complaint
    const versionHistory = complaint.versionHistory || [
      { id: 1, type: 'Original', date: complaint.dateFiled, modified: '' }
    ]
    
    // Check if complaint has been modified (more than just Original)
    const hasModifications = versionHistory.length > 1 || 
      complaint.additionalComplainants?.length > 0 ||
      complaint.additionalRespondents?.length > 0 ||
      complaint.progressList?.length > 0
    
    if (hasModifications) {
      // Has modifications - go to history list view to show all versions
      navigate('/complaint-history', { 
        state: { 
          complaint: complaint,
          versionHistory: versionHistory
        } 
      })
    } else {
      // No modifications - go directly to simple summary view
      navigate('/complaint-summary-view', { 
        state: { 
          complaint: complaint,
          versionHistory: versionHistory
        } 
      })
    }
  }

  const getFilterButtons = () => {
    if (activeTab === 'all') return null

    const buttons = activeTab === 'pending' 
      ? [
          { label: 'ALL PENDING', value: 'all', color: 'bg-blue-900' },
          { label: 'MAJOR', value: 'major', color: 'bg-red-500' },
          { label: 'MINOR', value: 'minor', color: 'bg-orange-500' },
          { label: 'OTHERS', value: 'others', color: 'bg-yellow-400' }
        ]
      : [
          { label: 'ALL RESOLVED', value: 'all', color: 'bg-blue-900' },
          { label: 'MAJOR', value: 'major', color: 'bg-red-500' },
          { label: 'MINOR', value: 'minor', color: 'bg-orange-500' },
          { label: 'OTHERS', value: 'others', color: 'bg-yellow-400' }
        ]

    return (
      <div className="flex gap-2 mb-4">
        {buttons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilterType(btn.value)}
            className={`px-6 py-2 rounded-lg text-sm font-medium text-white transition-all ${
              filterType === btn.value ? btn.color : 'bg-gray-300 text-gray-600'
            }`}
            style={{ backgroundColor: filterType === btn.value ? undefined : '#d1d5db' }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav 
        className="px-8 py-4 flex items-center justify-between sticky top-0 z-30"
        style={{ backgroundColor: '#111c4e' }}
      >
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-xs opacity-80">Center for Student Formation and Discipline</p>
            <p className="text-xl font-bold">COMPLAINT</p>
          </div>
        </div>
        
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
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
            onClick={() => { setActiveTab('all'); setFilterType('all') }}
            className={`flex-1 py-3 px-6 font-bold text-sm rounded-t-lg transition-colors ${
              activeTab === 'all' 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-400 text-white hover:bg-gray-500'
            }`}
          >
            ALL COMPLAINTS
          </button>
          <button
            onClick={() => { setActiveTab('pending'); setFilterType('all') }}
            className={`flex-1 py-3 px-6 font-bold text-sm rounded-t-lg transition-colors ${
              activeTab === 'pending' 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-400 text-white hover:bg-gray-500'
            }`}
          >
            PENDING
          </button>
          <button
            onClick={() => { setActiveTab('resolved'); setFilterType('all') }}
            className={`flex-1 py-3 px-6 font-bold text-sm rounded-t-lg transition-colors ${
              activeTab === 'resolved' 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-400 text-white hover:bg-gray-500'
            }`}
          >
            RESOLVED
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-b-lg rounded-tr-lg shadow-lg p-6">
          {/* Date Display */}
          <p className="text-xs text-gray-500 mb-1">&lt;&lt;DATE&gt;&gt;,&lt;&lt;DAY&gt;&gt;</p>
          
          {/* Title */}
          <h1 className="text-2xl font-bold mb-4">LIST OF COMPLAINTS</h1>

          {/* Search Section */}
          <div className="flex items-center gap-2 mb-4">
            <label className="text-xs font-medium text-gray-700">Search by</label>
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Complaint No.</option>
              <option>Subject</option>
              <option>Name</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 max-w-xs px-3 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-3 py-1 rounded text-xs text-white font-medium"
              style={{ backgroundColor: '#007bff' }}
            >
              Search
            </button>
          </div>

          {/* Filter Buttons (only for Pending and Resolved tabs) */}
          {getFilterButtons()}

          {/* Complaint Cards */}
          <div className="space-y-4">
            {filteredComplaints.map((complaint) => (
              <div key={complaint.id} className="border-2 border-gray-300 rounded-lg p-4 shadow-sm">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {activeTab !== 'all' && getCategoryBadge(complaint.category)}
                    <h3 className="font-bold text-base">COMPLAINT NO.: {complaint.complaintNo}</h3>
                  </div>
                  <span className="text-xs text-gray-500">Date filed: {complaint.dateFiled}</span>
                </div>

                {/* Card Body */}
                <div className="mb-3">
                  <p className="text-sm font-medium mb-1">&lt;&lt;{complaint.subject}&gt;&gt;</p>
                  {activeTab !== 'all' && (
                    <p className="text-xs text-gray-600 mb-1">Category: &lt;&lt;{complaint.category}&gt;&gt;</p>
                  )}
                  <p className="text-xs text-gray-600">Name of complainant: {complaint.complainantName}</p>
                  <p className="text-xs text-gray-600">College/Institute: {complaint.college}</p>
                  {(complaint.additionalComplainants?.length > 0 || complaint.additionalRespondents?.length > 0 || complaint.progressList?.length > 0) && (
                    <p className="text-xs text-blue-600 font-medium mt-1">
                      Modified: +{complaint.additionalComplainants?.length || 0} complainants, +{complaint.additionalRespondents?.length || 0} respondents, +{complaint.progressList?.length || 0} progress
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-2 pt-3 border-t border-gray-200">
                  <button 
                    className="px-4 py-1.5 border border-gray-400 rounded text-xs font-medium hover:bg-gray-100 transition-colors"
                    onClick={() => handleViewDetailsClick(complaint)}
                  >
                    View Details
                  </button>
                  
                  {activeTab === 'all' && (
                    <button 
                      className="px-6 py-1.5 rounded text-xs font-medium text-gray-800 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#ffc400' }}
                      onClick={() => handleEvaluateClick(complaint)}
                    >
                      Evaluate
                    </button>
                  )}
                  
                  {activeTab === 'pending' && (
                    <>
                      <button 
                        className="px-6 py-1.5 rounded text-xs font-medium text-gray-800 hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#ffc400' }}
                        onClick={() => handleEvaluateClick(complaint)}
                      >
                        Evaluate
                      </button>
                      <button className="px-4 py-1.5 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors">
                        Case Resolved
                      </button>
                    </>
                  )}
                  
                  {activeTab === 'resolved' && (
                    <button className="px-4 py-1.5 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors">
                      Re-open Case
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <section className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-20">
        {/* FAB Menu Options */}
        <div 
          className={`flex flex-col items-end gap-3 transition-all duration-300 ease-in-out ${isFabMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          onMouseEnter={() => setIsFabMenuOpen(true)}
          onMouseLeave={() => setIsFabMenuOpen(false)}
        >
          <button 
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-400 transition-colors shadow-lg"
            onClick={() => navigate('/add-announcement')}
          >
            Compose an announcement
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>

          <button 
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-400 transition-colors shadow-lg"
          >
            Encode Complaint
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </button>

          <button 
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-400 transition-colors shadow-lg"
          >
            Encode Violation Citation
            <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* Add Button */}
        <button 
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg mt-2 ${isFabMenuOpen ? 'bg-gray-500 rotate-45' : 'bg-gray-400 hover:bg-gray-500'}`}
          onClick={() => setIsFabMenuOpen(!isFabMenuOpen)}
          onMouseEnter={() => setIsFabMenuOpen(true)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </section>

      {/* Slide-in Menu from Right */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{backgroundColor: '#111c4e'}}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white rotate-45 translate-y-2"></span>
              <span className="w-full h-0.5 bg-white opacity-0"></span>
              <span className="w-full h-0.5 bg-white -rotate-45 -translate-y-2"></span>
            </div>
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base"
              onClick={() => {
                navigate(item.path)
                setIsMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Logout Button */}
          <button
            className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base"
            onClick={() => {
              navigate('/login')
              setIsMenuOpen(false)
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Overlay for closing menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Footer */}
      <footer 
        className="text-white px-12 py-10 mt-8"
        style={{ backgroundColor: '#3d3d3d' }}
      >
        <div className="max-w-6xl mx-auto flex flex-row justify-between gap-8">
          {/* Column 1 - Contact Info */}
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

          {/* Column 2 - General Concern */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For general concern</span>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfd.umak.edu.ph</span>
              </div>
            </div>
          </div>

          {/* Column 3 - Complaint Concern */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For complaint concern</span>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">umakpsd.umak.edu.ph</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Good Moral Certificate */}
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

          {/* Column 5 - Logos */}
          <div className="flex-1 flex justify-center items-center gap-4">
            <img src={footerUmakLogo} alt="University of Makati" className="w-20 h-20 rounded-full object-cover" />
            <img src={footerCsfdLogo} alt="CSFD" className="w-20 h-20 rounded-full object-cover" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ComplaintPage
