import { useNavigate } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function CitationSlipPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Citation Slip Process Section */}
      <section className="px-12 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2" style={{color: '#111c4e'}}>CITATION SLIP</h1>
            <h2 className="text-3xl font-bold" style={{color: '#ffc400'}}>PROCESS</h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical Line - Centered with check icons */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-green-600"></div>

            {/* Step 1 */}
            <div className="flex gap-6 mb-8 relative items-center">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0 z-10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-2" style={{color: '#111c4e'}}>Step 1</h3>
                <p className="text-gray-700">Prepare an apology letter using the provided format. <span className="text-blue-600 cursor-pointer hover:underline">click here</span></p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 mb-8 relative items-center">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0 z-10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-2" style={{color: '#111c4e'}}>Step 2</h3>
                <p className="text-gray-700">Along with the letter, proceed to the CSFD office to process your letter.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 mb-8 relative items-center">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0 z-10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-2" style={{color: '#111c4e'}}>Step 3</h3>
                <p className="text-gray-700">Claim your Identification Card in the CSFD Office or to place instructed by the admin.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 relative items-center">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0 z-10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-2" style={{color: '#111c4e'}}>Step 4</h3>
                <p className="text-gray-700">Read the University Student Handbook for more reference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white px-12 py-10 mt-auto"
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

export default CitationSlipPage
