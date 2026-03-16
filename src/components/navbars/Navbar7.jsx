import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../../assets/logos/UMAK LOGO.png'
import csfdLogo from '../../assets/logos/CSFD LOGO.png'

function Navbar7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/services' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQs', path: '/faqs' }
  ]

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4 shadow-md sticky top-0 z-30"
              style={{backgroundColor: '#3d3d3d'}}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="UMak Logo" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD Logo" className="w-12 h-12 rounded-full object-cover" />
          <span className="text-lg font-marcellus text-white">Center for Student Formation and Discipline</span>
        </div>
        
        {/* Hamburger Menu Button */}
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
      </header>

      {/* Slide-in Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
        style={{backgroundColor: '#111c4e'}}
      >
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
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Navbar7
