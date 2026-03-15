import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function AdminDashboardPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false)
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    // Load announcements from localStorage
    const storedAnnouncements = JSON.parse(localStorage.getItem('announcements') || '[]')
    setAnnouncements(storedAnnouncements)
  }, [])

  const menuItems = [
    { label: 'HOME', path: '/admin-dashboard' },
    { label: 'GOOD MORAL REQUEST', path: '/admin/good-moral' },
    { label: 'UNIFORM EXEMPTION REQUEST', path: '/uniform-exemption-admin' },
    { label: 'CHILD ADMISSION REQUEST', path: '/child-clearance' },
    { label: 'CROSS-DRESSING REQUEST', path: '/cross-dressing' },
    { label: 'COMPLAINT', path: '/complaint' },
    { label: 'DISCIPLINARY RECORDS', path: '/disciplinary-records' },
    { label: 'ABOUT', path: '/admin/about' },
    { label: 'FAQs', path: '/admin/faqs' },
  ]

  const statsCards = [
    { number: '101', label: 'GOOD MORAL REQUEST' },
    { number: '31', label: 'UNIFORM EXEMPTION REQUEST' },
    { number: '1', label: 'CHILD ADMISSION REQUEST' },
    { number: '5', label: 'CROSS-DRESSING REQUEST' },
    { number: '4', label: 'COMPLAINT' },
  ]

  const analyticsStats = [
    { number: '456', label: 'Pending Community Service' },
    { number: '512', label: 'Rendered Community Service' },
    { number: '2,149', label: 'Good Moral Certificate Request' },
    { number: '2,140', label: 'Issued Good Moral Certificate Request' },
  ]

  const dailySummaryData = [
    { label: 'Filed Complaint - Pending', value: 24, total: 24, color: '#3b82f6' },
    { label: 'Filed Complaint - Received', value: 46, total: 46, color: '#3b82f6' },
    { label: 'Violation Citation - Received', value: 55, total: 55, color: '#10b981' },
  ]

  const monthlySummaryData = [
    { label: 'Filed Complaint - Pending', value: 16, total: 24, color: '#3b82f6' },
    { label: 'Filed Complaint - Received', value: 46, total: 46, color: '#3b82f6' },
    { label: 'Violation Citation - Received', value: 46, total: 46, color: '#10b981' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      {/* Navbar with Hamburger */}
      <nav className="text-white px-6 py-4 flex items-center justify-between" style={{backgroundColor: '#111c4e'}}>
        <div className="flex items-center gap-3">
          <img src={umakLogo} alt="UMAK Logo" className="w-10 h-10 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-sm font-medium">Center for Student Formation and Discipline</span>
        </div>
        
        {/* Hamburger Button */}
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Main Content Area with Slide Effect */}
      <div 
        className="flex-grow transition-transform duration-300 ease-in-out"
        style={{ transform: isMenuOpen ? 'translateX(-280px)' : 'translateX(0)' }}
      >
        {/* Statistics Cards Section */}
        <section className="px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-5 gap-4">
              {statsCards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200"
                >
                  <div 
                    className="text-4xl font-black mb-2"
                    style={{color: '#111c4e', fontFamily: 'Metropolis, sans-serif'}}
                  >
                    {card.number}
                  </div>
                  <div 
                    className="text-xs font-bold"
                    style={{color: '#3d3d3d'}}
                  >
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Announcement Section */}
        <section className="px-8 pb-8">
          <div className="max-w-6xl mx-auto">
            <div 
              className="rounded-2xl p-8"
              style={{backgroundColor: '#111c4e'}}
            >
              <h2 
                className="text-2xl font-bold text-white mb-6"
                style={{fontFamily: 'Metropolis, sans-serif'}}
              >
                ANNOUNCEMENT
              </h2>

              <div className="flex gap-6">
                {/* Announcement Content */}
                <div className="flex-grow">
                  {announcements.length === 0 ? (
                    // Default placeholder when no announcements
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffc400'}}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">{'<<HEADLINE>>'}</h3>
                          <button 
                            className="px-4 py-1.5 rounded-lg text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Dynamic announcements list
                    <div className="space-y-4 max-h-80 overflow-y-auto">
                      {announcements.map((announcement) => (
                        <div key={announcement.id} className="flex items-start gap-4 pb-4 border-b border-white/20 last:border-b-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#ffc400'}}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-white">{announcement.headline}</h3>
                              <button 
                                className="px-4 py-1.5 rounded-lg text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
                              >
                                View Details
                              </button>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                              {announcement.details}
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs text-gray-400">
                                Posted: {announcement.postedFrom} - {announcement.postedTo}
                              </span>
                              {announcement.attachments?.length > 0 && (
                                <span className="text-xs text-yellow-400">
                                  {announcement.attachments.length} attachment{announcement.attachments.length > 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics & Reports Section */}
        <section className="px-8 pb-8">
          <div className="max-w-6xl mx-auto">
            <div 
              className="rounded-2xl p-8"
              style={{backgroundColor: '#111c4e'}}
            >
              <h2 
                className="text-2xl font-bold text-white mb-6"
                style={{fontFamily: 'Metropolis, sans-serif'}}
              >
                ANALYTICS & REPORTS
              </h2>

              {/* Top Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {analyticsStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="border border-white/30 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Charts Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Daily Summary */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Daily Summary</h3>
                  <div className="space-y-4">
                    {dailySummaryData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="text-gray-800 font-medium">{item.value}/{item.total}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(item.value / item.total) * 100}%`,
                              backgroundColor: item.color 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monthly Summary */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Monthly Summary</h3>
                  <div className="space-y-4">
                    {monthlySummaryData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="text-gray-800 font-medium">{item.value}/{item.total}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(item.value / item.total) * 100}%`,
                              backgroundColor: item.color 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Action Buttons */}
        <section className="px-8 pb-8">
          <div className="max-w-6xl mx-auto flex flex-col items-end gap-3">
            {/* FAB Menu Options - Only show when clicked or hovered */}
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
          </div>
        </section>
      </div>

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

          {/* Logout Button - placed below FAQs */}
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
        className="text-white px-12 py-10 transition-transform duration-300 ease-in-out"
        style={{ 
          backgroundColor: '#3d3d3d',
          transform: isMenuOpen ? 'translateX(-280px)' : 'translateX(0)'
        }}
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

export default AdminDashboardPage
