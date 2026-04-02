import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function UserComplaintMonitoringPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Get complaint data from URL params or navigation state
  const complaint = location.state?.complaint || {
    complaintNo: '2024-001',
    complainantName: 'John Doe',
    category: 'major',
    status: 'Pending',
    progress: [
      { id: 1, subject: 'Complaint Received', details: 'Your complaint has been received and is under review.' },
      { id: 2, subject: 'Investigation Started', details: 'Investigation has begun. Witnesses are being interviewed.' },
      { id: 3, subject: 'Awaiting Response', details: 'Waiting for respondent to provide their statement.' }
    ]
  }

  const getCategoryBadge = (category) => {
    const colors = {
      major: 'bg-red-500',
      minor: 'bg-orange-500',
      others: 'bg-yellow-400'
    }
    return (
      <span className={`${colors[category]} text-white text-xs font-bold px-4 py-1 rounded-full uppercase`}>
        {category}
      </span>
    )
  }

  const getStatusBadge = (status) => {
    const color = status === 'Pending' ? 'bg-red-500' : status === 'Resolved' ? 'bg-green-500' : 'bg-yellow-500'
    return (
      <span className={`${color} text-white text-xs font-bold px-4 py-1 rounded-full uppercase`}>
        {status}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between sticky top-0 z-30" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-large opacity-80 font-marcellus">Center for Student Formation and Discipline</p>
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
      <div className="px-8 py-12 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-metropolis font-bold" style={{ color: '#111c4e' }}>COMPLAINT</h1>
          <h2 className="text-3xl font-metropolis font-bold" style={{ color: '#ffc400' }}>MONITORING</h2>
        </div>

        {/* Complaint Info */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg" style={{ color: '#111c4e' }}>COMPLAINT NO.:</span>
            <span className="text-lg font-semibold" style={{ color: '#111c4e' }}>{complaint.complaintNo}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg" style={{ color: '#111c4e' }}>NAME:</span>
            <span className="text-lg font-semibold" style={{ color: '#111c4e' }}>{complaint.complainantName}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg" style={{ color: '#111c4e' }}>COMPLAINT CATEGORY:</span>
            {getCategoryBadge(complaint.category)}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg" style={{ color: '#111c4e' }}>COMPLAINT STATUS:</span>
            {getStatusBadge(complaint.status)}
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#111c4e' }}>PROGRESS</h3>
          <div className="border-2 rounded-xl p-6 space-y-4" style={{ borderColor: '#111c4e' }}>
            {complaint.progress?.map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between p-4 rounded-lg border"
                style={{ borderColor: '#111c4e', backgroundColor: '#f8f9fa' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">{item.subject}</span>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors hover:bg-gray-100"
                  style={{ borderColor: '#111c4e', color: '#111c4e' }}
                  onClick={() => alert(item.details)}
                >
                  View Details
                </button>
              </div>
            )) || (
              <>
                <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: '#111c4e', backgroundColor: '#f8f9fa' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Complaint Received</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors hover:bg-gray-100" style={{ borderColor: '#111c4e', color: '#111c4e' }}>
                    View Details
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: '#111c4e', backgroundColor: '#f8f9fa' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Investigation Started</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors hover:bg-gray-100" style={{ borderColor: '#111c4e', color: '#111c4e' }}>
                    View Details
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: '#111c4e', backgroundColor: '#f8f9fa' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Awaiting Response</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors hover:bg-gray-100" style={{ borderColor: '#111c4e', color: '#111c4e' }}>
                    View Details
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/login')}
            className="px-12 py-3 rounded-lg font-bold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#111c4e' }}
          >
            BACK
          </button>
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

export default UserComplaintMonitoringPage
