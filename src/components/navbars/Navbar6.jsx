import { useNavigate } from 'react-router-dom'
import umakLogo from '../../assets/logos/UMAK LOGO.png'
import csfdLogo from '../../assets/logos/CSFD LOGO.png'

function Navbar6() {
  const navigate = useNavigate()

  return (
    <header className="flex justify-between items-center px-12 py-4 shadow-md"
            style={{backgroundColor: '#111c4e'}}>
      <div className="flex items-center gap-4">
        <img src={umakLogo} alt="UMak Logo" className="w-15 h-15 rounded-full object-cover" />
        <img src={csfdLogo} alt="CSFD Logo" className="w-15 h-15 rounded-full object-cover" />
        <span className="text-lg font-marcellus font-regular text-white">Center for Student Formation and Discipline</span>
      </div>
      <nav className="flex gap-8">
        <a href="#services" className="text-white font-medium hover:opacity-80 transition-opacity">Services</a>
        <a href="#about" className="text-white font-medium hover:opacity-80 transition-opacity">About</a>
        <a href="#login" className="text-white font-medium hover:opacity-80 transition-opacity" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>Log In</a>
      </nav>
    </header>
  )
}

export default Navbar6
