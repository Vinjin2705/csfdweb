import './App.css'
import umakLogo from './assets/UMAK LOGO.png'
import csfdLogo from './assets/CSFD LOGO.png'
import landingPageBg from './assets/landingpagebg.png'
import bg1 from './assets/BG-1.png'
import fillerImage from './assets/FILLER IMAGE 1.png'
import elementFull from './assets/elementfull.png'

// Footer logos
import footerUmakLogo from './assets/UMAK LOGO.png'
import footerCsfdLogo from './assets/CSFD LOGO.png'
import { useState } from 'react'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
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
          <a href="#services" className="text-white font-medium hover:opacity-80 transition-opacity">Services</a>
          <a href="#about" className="text-white font-medium hover:opacity-80 transition-opacity">About</a>
          <a href="#login" className="text-white font-medium hover:opacity-80 transition-opacity" onClick={() => setShowLogin(true)}>Log In</a>
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

      {/* Login Page Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left Side - Welcome Section */}
          <div className="w-3/10 relative"
               style={{
                 backgroundColor: '#111c4e'
               }}>
            <div className="absolute inset-0"
                 style={{
                   backgroundImage: `url(${elementFull})`,
                   backgroundSize: 'contain',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat'
                 }}></div>
            <div className="flex items-center justify-start h-full px-8 relative z-10">
              <div className="text-left text-white">
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back,
                </h1>
                <h2 className="text-4xl font-bold mb-4" style={{color: '#ffc400'}}>
                  Heron!
                </h2>
                <p className="text-base font-light">
                  University of Makati. University of Character.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Section */}
          <div className="w-7/10 bg-gray-100 flex items-center justify-center relative"
               style={{backgroundColor: '#f5f5f5'}}>
            {/* Hamburger Menu */}
            <div className="absolute top-6 right-6">
              <button className="p-2" onClick={() => setShowMenu(!showMenu)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Navigation Menu */}
            {showMenu && (
              <div className="absolute top-20 right-6 text-right">
                <div className="space-y-3">
                  <a href="#home" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium" onClick={(e) => { e.preventDefault(); setShowLogin(false); setShowMenu(false); }}>HOME</a>
                  <div className="border-b border-gray-300"></div>
                  <a href="#services" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium">SERVICES</a>
                  <div className="border-b border-gray-300"></div>
                  <a href="#about" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium">ABOUT</a>
                  <div className="border-b border-gray-300"></div>
                  <a href="#faqs" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium">FAQs</a>
                </div>
              </div>
            )}

            {/* Login Form */}
            <div className="w-full max-w-md px-8">
              <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#111c4e'}}>LOGIN</h2>
              
              <div className="mb-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    placeholder="Enter your username"
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{borderColor: '#111c4e'}}
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{borderColor: '#111c4e'}}
                  />
                </div>
              </div>

              <div className="mb-6 text-right">
                <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{color: '#111c4e'}}>Forgot password?</a>
              </div>

              <button className="w-full py-3 rounded-lg font-medium text-white mb-6 hover:opacity-90 transition-opacity"
                      style={{backgroundColor: '#111c4e'}}>
                Submit
              </button>

              <div className="flex items-center mb-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-center">
                <span className="text-gray-600">No account yet? </span>
                <button className="px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        style={{backgroundColor: '#6c757d', color: 'white'}}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
