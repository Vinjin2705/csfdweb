import { useNavigate } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'

function RequestSuccessPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Success Message Section */}
      <section className="flex-1 flex items-center justify-center px-12" style={{backgroundColor: '#000B3C'}}>
        <div className="text-center max-w-md">
          {/* Success Checkmark Icon */}
          <div className="flex justify-center mb-8">
            <svg className="w-24 h-24" fill="none" stroke="#1F9E55" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" strokeOpacity="0.3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" strokeOpacity="0.3" />
            </svg>
          </div>

          {/* Thank You Title */}
          <h1 className="text-4xl font-black text-white mb-4" style={{fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>
            Thank you for requesting!
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg mb-12 opacity-80">
            Please wait for 3 working days.
          </p>

          {/* Back to Home Button */}
          <button
            className="w-full px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            style={{backgroundColor: '#1F9E55', color: 'white'}}
            onClick={() => navigate('/')}
          >
            back to home
          </button>
        </div>
      </section>
    </div>
  )
}

export default RequestSuccessPage
