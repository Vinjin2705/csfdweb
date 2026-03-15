import { useNavigate } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function UniformExemptionPage() {
  const navigate = useNavigate()

  const steps = [
    {
      step: 1,
      title: 'Step 1',
      description: 'Accomplish this Uniform Exemption Form.'
    },
    {
      step: 2,
      title: 'Step 2',
      description: 'Wait for the validation of your request. Once validated, an email will be sent through your email for certification.'
    },
    {
      step: 3,
      title: 'Step 3',
      description: 'Print the emailed certificate.'
    },
    {
      step: 4,
      title: 'Step 4',
      description: 'Proceed to the Center for Student Formation and Discipline (CSFD) to have your Uniform Exemption request certified with the official University seal.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Content */}
      <div className="px-12 py-16 max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2" style={{color: '#111c4e'}}>UNIFORM EXEMPTION</h1>
          <h2 className="text-2xl font-bold" style={{color: '#ffc400'}}>FORM</h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-green-600"></div>

          {/* Step Cards */}
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="flex items-start gap-6 relative">
                {/* Checkmark Circle */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 z-10" style={{backgroundColor: '#28a745'}}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Step Card */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2" style={{color: '#111c4e'}}>{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button 
            className="px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-opacity bg-red-600"
            onClick={() => navigate('/services')}
          >
            CANCEL
          </button>
          <button 
            className="px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-opacity"
            style={{backgroundColor: '#28a745'}}
            onClick={() => navigate('/uniform-exemption-form')}
          >
            PROCEED
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white px-12 py-10" style={{backgroundColor: '#3d3d3d'}}>
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

export default UniformExemptionPage
