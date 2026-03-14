import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import landingPageBg from '../assets/images/landingpagebg.png'
import bg1 from '../assets/images/BG-1.png'
import fillerImage from '../assets/images/FILLER IMAGE 1.png'

// Footer logos
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-4 shadow-md"
              style={{backgroundColor: '#111c4e'}}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="UMak Logo" className="w-15 h-15 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD Logo" className="w-15 h-15 rounded-full object-cover" />
          <span className="text-lg font-marcellus font-regular text-white">Center for Student Formation and Discipline</span>
        </div>
        <nav className="flex gap-8">
          <a href="#services" className="text-white font-medium hover:opacity-80 transition-opacity" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>Services</a>
          <a href="#about" className="text-white font-medium hover:opacity-80 transition-opacity">About</a>
          <a href="#login" className="text-white font-medium hover:opacity-80 transition-opacity" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>Log In</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
               style={{
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${landingPageBg})`
               }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome back, <span style={{color: '#ffc400'}}>Heron!</span></h1>
          <p className="text-2xl font-light drop-shadow-md">University of Makati, University of Character.</p>
        </div>
      </section>

      {/* UMak CSFD Section */}
      <section className="px-12 py-16 relative"
               style={{
                 backgroundColor: '#111c4e',
                 backgroundImage: `url(${bg1})`,
                 backgroundSize: 'contain',
                 backgroundPosition: 'left center',
                 backgroundRepeat: 'no-repeat'
               }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-7xl font-bold mb-5 leading-none" style={{color: '#ffc400'}}>UMak CSFD</h2>
            <p className="text-xl mb-4 leading-relaxed">
              The Center for Student Formation & Discipline monitors and supervises student's moral rectitude.
            </p>
            <p className="text-base opacity-80">(Formerly Prefect of Student Discipline)</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={fillerImage} alt="Students" className="w-[450px] h-[300px] object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="px-12 py-16 text-center"
               style={{
                 backgroundImage: `linear-gradient(135deg, #ffc400 0%, #e6b000 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="%23111c4e" opacity="0.1"/></svg>')`,
                 backgroundSize: 'cover, 100px 100px'
               }}>
        <h2 className="text-4xl font-bold mb-4" style={{color: '#111c4e'}}>Main Service</h2>
        <p className="text-xl mb-10" style={{color: '#111c4e'}}>Want to request good moral or complaint?</p>
        <div className="flex justify-center gap-8 mb-8">
          <button className="text-white px-8 py-4 rounded font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all shadow-lg"
                  style={{backgroundColor: '#111c4e'}}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1e2a66'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#111c4e'}>
            Request Good Moral Certificate
          </button>
          <button className="text-white px-8 py-4 rounded font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all shadow-lg"
                  style={{backgroundColor: '#111c4e'}}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1e2a66'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#111c4e'}>
            File a complaint
          </button>
        </div>
        <p className="italic" style={{color: '#111c4e'}}>or visit our services offered</p>
      </section>

      {/* Footer */}
      <footer className="text-white px-12 py-10"
               style={{backgroundColor: '#3d3d3d'}}>
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

export default LandingPage
