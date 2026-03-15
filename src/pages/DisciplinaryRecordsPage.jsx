import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function DisciplinaryRecordsPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false)
  const [filterBy, setFilterBy] = useState('Major Offense')
  const [searchQuery, setSearchQuery] = useState('')
  const [records, setRecords] = useState([
    {
      id: 1,
      studentNumber: 'K12042424',
      sex: 'MALE',
      studentName: 'Juan A. Dela Cruz Sr.',
      infractions: 'Not wearing Prescribe uniform',
      receivedDate: 'January 23, 1991',
      status: 'First Offense',
      college: 'CCIS',
      email: 'juandelacruzsir@gmail.com'
    }
  ])

  const filterOptions = [
    'Major Offense',
    'Minor Offense',
    'Other Offense',
    'First Offense',
    'Second Offense',
    'Third Offense',
    'Fourth Offense',
    'Fifth Offense'
  ]

  const menuItems = [
    { label: 'HOME', path: '/admin-dashboard' },
    { label: 'GOOD MORAL REQUEST', path: '/good-moral' },
    { label: 'UNIFORM EXEMPTION REQUEST', path: '/uniform-exemption' },
    { label: 'CHILD ADMISSION REQUEST', path: '/child-admission' },
    { label: 'CROSS-DRESSING REQUEST', path: '/cross-dressing' },
    { label: 'COMPLAINT', path: '/complaint' },
    { label: 'DISCIPLINARY RECORDS', path: '/disciplinary-records' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQs', path: '/faqs' }
  ]

  const handleSearch = () => {
    // Search functionality would filter records based on searchQuery and filterBy
    console.log('Searching for:', searchQuery, 'with filter:', filterBy)
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
            <p className="text-xl font-bold">DISCIPLINARY RECORDS</p>
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
      <div className="px-8 py-8 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">DISCIPLINARY RECORDS</h1>

        {/* Filter and Search Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Filter by</label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className="flex-1 max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#007bff' }}
          >
            Search
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">#</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">Student Number</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">Sex</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">Student Name</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">Infraction/s</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">Received Date</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700 border-r border-gray-400">College</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-700">UMak Email Address</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={record.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-400">{index + 1}</td>
                    <td className="px-4 py-3 border-r border-gray-400">{record.studentNumber}</td>
                    <td className="px-4 py-3 border-r border-gray-400">{record.sex}</td>
                    <td className="px-4 py-3 border-r border-gray-400">{record.studentName}</td>
                    <td className="px-4 py-3 border-r border-gray-400">{record.infractions}</td>
                    <td className="px-4 py-3 border-r border-gray-400">{record.receivedDate}</td>
                    <td className="px-4 py-3 border-r border-gray-400">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap inline-block"
                        style={{ backgroundColor: '#28a745' }}
                      >
                        {record.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-r border-gray-400">{record.college}</td>
                    <td className="px-4 py-3">{record.email}</td>
                  </tr>
                ))}
                {/* Empty rows for table structure */}
                {[...Array(14)].map((_, index) => (
                  <tr key={`empty-${index}`} className="border-b border-gray-300 h-10">
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className="border-r border-gray-400"></td>
                    <td className=""></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <section className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-20">
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
        className="text-white px-12 py-10"
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

export default DisciplinaryRecordsPage
