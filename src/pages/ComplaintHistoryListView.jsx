import { useNavigate, useLocation } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function ComplaintHistoryListView() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get complaint data from navigation state
  const complaint = location.state?.complaint || {
    complaintNo: '2024-001',
    subject: 'Noise Complaint in Library',
    versionHistory: [
      { id: 1, type: 'Original', date: 'March 15, 2024', modified: '' }
    ]
  }

  // Use versionHistory consistently (fallback to old history format for backwards compatibility)
  const versionHistory = complaint.versionHistory || complaint.history?.map(h => ({
    id: h.id === 'original' ? 1 : h.id,
    type: h.label || h.type || 'Original',
    date: h.date || complaint.dateFiled,
    modified: h.date || ''
  })) || [{ id: 1, type: 'Original', date: complaint.dateFiled || 'March 15, 2024', modified: '' }]

  const handleViewDetails = (versionItem) => {
    // Navigate to summary view with the specific version
    navigate('/complaint-summary-view', { 
      state: { 
        complaint: complaint,
        versionHistory: versionHistory,
        selectedVersion: versionItem
      } 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between sticky top-0 z-30" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-sm opacity-80 font-marcellus">Center for Student Formation and Discipline</p>
          </div>
        </div>
        
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => navigate('/complaint')}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <div className="px-8 py-8 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-metropolis font-bold" style={{ color: '#111c4e' }}>COMPLAINT INFORMATION</h1>
          <h2 className="text-2xl font-metropolis font-bold" style={{ color: '#ffc400' }}>SUMMARY</h2>
        </div>

        {/* View Details Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#111c4e' }}>VIEW DETAILS</h3>
          
          <div className="border-2 rounded-xl p-6 space-y-4" style={{ borderColor: '#111c4e' }}>
            {versionHistory.length === 1 ? (
              // Only Original - show single simple view
              <div 
                className="flex items-center justify-between p-4 rounded-lg border"
                style={{ borderColor: '#111c4e', backgroundColor: '#f8f9fa' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">Original</span>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors hover:bg-gray-100"
                  style={{ borderColor: '#111c4e', color: '#111c4e' }}
                  onClick={() => handleViewDetails(versionHistory[0])}
                >
                  View Details
                </button>
              </div>
            ) : (
              // Multiple versions - show all with dates
              versionHistory.map((item, index) => (
                <div 
                  key={item.id || index}
                  className="flex items-center justify-between p-4 rounded-lg border"
                  style={{ borderColor: '#111c4e', backgroundColor: '#f8f9fa' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">
                      {item.type}
                      {item.modified && ` - ${item.modified}`}
                    </span>
                  </div>
                  <button 
                    className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors hover:bg-gray-100"
                    style={{ borderColor: '#111c4e', color: '#111c4e' }}
                    onClick={() => handleViewDetails(item)}
                  >
                    View Details
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/complaint')}
            className="px-12 py-3 rounded-lg font-bold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#111c4e' }}
          >
            BACK
          </button>
        </div>
      </div>

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
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span>umak.edu.ph/centers/csfd/</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>8883-1875</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For general concern</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For complaint concern</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">umakpsd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For request of good moral certificate concern</span>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfdgoodmoral.umak.edu.ph</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
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

export default ComplaintHistoryListView
