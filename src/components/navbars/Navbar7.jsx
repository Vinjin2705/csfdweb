import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../../assets/logos/UMAK LOGO.png'
import csfdLogo from '../../assets/logos/CSFD LOGO.png'

function Navbar7() {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4 shadow-md"
              style={{backgroundColor: '#3d3d3d'}}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="UMak Logo" className="w-15 h-15 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD Logo" className="w-15 h-15 rounded-full object-cover" />
          <span className="text-lg font-marcellus font-regular text-white">Center for Student Formation and Discipline</span>
        </div>
        
        {/* Hamburger Menu Button */}
        <button className="p-2" onClick={() => setShowMenu(!showMenu)}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Dropdown Menu - Below Header on Right */}
      {showMenu && (
        <div className="absolute right-12 top-[72px] py-4 flex flex-col items-end gap-4 z-50">
          <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors text-lg font-medium py-2 px-4" onClick={(e) => { e.preventDefault(); navigate('/'); setShowMenu(false); }}>HOME</a>
          <a href="#services" className="text-gray-800 hover:text-blue-600 transition-colors text-lg font-medium py-2 px-4" onClick={(e) => { e.preventDefault(); navigate('/services'); setShowMenu(false); }}>SERVICES</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors text-lg font-medium py-2 px-4" onClick={(e) => { e.preventDefault(); navigate('/about'); setShowMenu(false); }}>ABOUT</a>
          <a href="#faqs" className="text-gray-800 hover:text-blue-600 transition-colors text-lg font-medium py-2 px-4" onClick={(e) => { e.preventDefault(); navigate('/faqs'); setShowMenu(false); }}>FAQs</a>
        </div>
      )}
    </div>
  )
}

export default Navbar7
