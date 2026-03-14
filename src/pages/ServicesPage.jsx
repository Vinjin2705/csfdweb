import { useNavigate } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import gmcLogo from '../assets/logos/GMC 1.png'
import uniformExemptionLogo from '../assets/logos/UNIFORM EXEMPTION 1.png'
import childAdmissionLogo from '../assets/logos/BRINGING CHILD 1.png'
import crossDressingLogo from '../assets/logos/CROSS DRESS (1) 1.png'
import complaintLogo from '../assets/logos/COMPLAINT 1.png'
import otherRequestIcon from '../assets/icons/pepicons-pop_bulletin-notice.png'
import bg1 from '../assets/images/BG-1.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function ServicesPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      {/* Navbar7 Header with Hamburger Menu */}
      <Navbar7 />

      {/* Services Content - BG-1 Background */}
      <div className="relative">
        {/* BG-1 Background */}
        <div className="absolute inset-0 z-0"
             style={{
               backgroundImage: `url(${bg1})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               opacity: '1'
             }}></div>

        {/* Services Title Section */}
        <section className="px-12 py-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-2" style={{color: '#111c4e'}}>Center for Student Formation and Discipline</h1>
            <h2 className="text-5xl font-bold" style={{color: '#ffc400'}}>Services</h2>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="px-12 py-8 relative z-10">
          <div className="max-w-7xl mx-auto">
          {/* First Row - 5 Service Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Service 1 - Good Moral Certificate */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[200px] text-center hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <img src={gmcLogo} alt="Good Moral Certificate" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-4 flex-grow" style={{color: '#111c4e'}}>Good Moral Certificate</h3>
              <button className="w-full text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm mt-auto flex-shrink-0 cursor-pointer" 
                      style={{backgroundColor: '#2563eb'}}
                      onClick={() => navigate('/good-moral')}>
                Request
              </button>
            </div>

            {/* Service 2 - Uniform Exemption */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[200px] text-center hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <img src={uniformExemptionLogo} alt="Uniform Exemption" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-4 flex-grow" style={{color: '#111c4e'}}>Uniform Exemption</h3>
              <button className="w-full text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm mt-auto flex-shrink-0" style={{backgroundColor: '#2563eb'}}>
                Apply
              </button>
            </div>

            {/* Service 3 - Child Admission Clearance */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[200px] text-center hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <img src={childAdmissionLogo} alt="Child Admission Clearance" className="w-28 h-28 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-4 flex-grow" style={{color: '#111c4e'}}>Child Admission Clearance</h3>
              <button className="w-full text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm mt-auto flex-shrink-0" style={{backgroundColor: '#2563eb'}}>
                Apply
              </button>
            </div>

            {/* Service 4 - Cross-Dressing Permit */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[200px] text-center hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <img src={crossDressingLogo} alt="Cross-Dressing Permit" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-4 flex-grow" style={{color: '#111c4e'}}>Cross-Dressing Permit</h3>
              <button className="w-full text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm mt-auto flex-shrink-0" style={{backgroundColor: '#2563eb'}}>
                Apply
              </button>
            </div>

            {/* Service 5 - Complaint Desk */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[200px] text-center hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                <img src={complaintLogo} alt="Complaint Desk" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-4 flex-grow" style={{color: '#111c4e'}}>Complaint Desk</h3>
              <button className="w-full text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm mt-auto flex-shrink-0" style={{backgroundColor: '#2563eb'}}>
                Submit
              </button>
            </div>
          </div>

          {/* Second Row - 2 Info Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Violation Notice Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 w-[500px]">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#dc2626'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{color: '#111c4e'}}>Received a Violation Notice/Citation?</h3>
                <p className="text-sm text-gray-600 mb-3">Access and read the instructions below.</p>
                <button className="px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer" 
                        style={{backgroundColor: '#ffc400', color: '#111c4e'}}
                        onClick={() => navigate('/citation-slip')}>
                  Instructions
                </button>
              </div>
            </div>

            {/* Other Request Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex items-center gap-6 w-[500px]">
              <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
                <img src={otherRequestIcon} alt="Other Request" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{color: '#111c4e'}}>Other request?</h3>
                <p className="text-sm text-gray-600">Please proceed to the CSFD Office.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

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

export default ServicesPage
