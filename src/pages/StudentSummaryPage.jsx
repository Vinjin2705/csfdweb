import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'
import thankYouIcon from '../assets/icons/thankyoucheck.png'
import { useState } from 'react'

function StudentSummaryPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  
  // Get form data from navigation state with default empty object
  const formData = location.state?.formData || {}
  const requesterData = location.state?.requesterData || {}

  // Helper function to get full name
  const getFullName = () => {
    const parts = []
    if (requesterData.givenName) parts.push(requesterData.givenName)
    if (requesterData.middleName) parts.push(requesterData.middleName)
    if (requesterData.surname) parts.push(requesterData.surname)
    if (requesterData.extensionName) parts.push(requesterData.extensionName)
    return parts.join(' ') || 'Not provided'
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Student Information Summary Section */}
      <section className="px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-2" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>STUDENT INFORMATION</h1>
            <h2 className="text-3xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>SUMMARY</h2>
          </div>

          {/* Summary Box */}
          <div className="border-4 rounded-2xl p-8 mb-12" style={{borderColor: '#111c4e', backgroundColor: '#f9f9f9'}}>
            {/* NAME */}
            <div className="mb-4 flex justify-between items-start">
              <div className="flex-1">
                <span className="font-bold text-lg" style={{color: '#111c4e'}}>NAME: </span>
                <span className="text-lg" style={{color: '#111c4e'}}>{getFullName()}</span>
              </div>
              <div className="flex-1 text-right">
                <span className="font-bold text-lg" style={{color: '#111c4e'}}>SEX: </span>
                <span className="text-lg" style={{color: '#111c4e'}}>{requesterData.sex || 'Not provided'}</span>
              </div>
            </div>

            {/* YEAR/GRADE LEVEL and STUDENT NUMBER */}
            <div className="mb-4 flex justify-between items-start">
              <div className="flex-1">
                <span className="font-bold text-lg" style={{color: '#111c4e'}}>YEAR/GRADE LEVEL: </span>
                <span className="text-lg" style={{color: '#111c4e'}}>{formData.yearLevel || 'Not provided'}</span>
              </div>
              <div className="flex-1 text-right">
                <span className="font-bold text-lg" style={{color: '#111c4e'}}>UMAK STUDENT NUMBER: </span>
                <span className="text-lg" style={{color: '#111c4e'}}>{requesterData.studentNumber || 'Not provided'}</span>
              </div>
            </div>

            {/* COLLEGE/INSTITUTE */}
            <div className="mb-4">
              <span className="font-bold text-lg" style={{color: '#111c4e'}}>COLLEGE/INSTITUTE: </span>
              <span className="text-lg" style={{color: '#111c4e'}}>{requesterData.college || 'Not provided'}</span>
            </div>

            {/* PURPOSE */}
            <div className="mb-4">
              <span className="font-bold text-lg" style={{color: '#111c4e'}}>PURPOSE: </span>
              <span className="text-lg" style={{color: '#111c4e'}}>{formData.purpose || 'Not provided'}</span>
            </div>

            {/* CLASSIFICATION */}
            <div className="mb-4">
              <span className="font-bold text-lg" style={{color: '#111c4e'}}>CLASSIFICATION: </span>
              <span className="text-lg" style={{color: '#111c4e'}}>{requesterData.classification || 'Not provided'}</span>
            </div>

            {/* REQUIREMENT/S */}
            <div className="mb-4">
              <span className="font-bold text-lg" style={{color: '#111c4e'}}>REQUIREMENT/S: </span>
              <span className="text-lg" style={{color: '#111c4e'}}>C.O.R/Form 138 (Uploaded)</span>
            </div>

            {/* EMAIL ADDRESS */}
            <div className="mb-4">
              <span className="font-bold text-lg" style={{color: '#111c4e'}}>EMAIL ADDRESS: </span>
              <span className="text-lg" style={{color: '#111c4e'}}>{formData.email || 'Not provided'}</span>
            </div>
          </div>

          {/* Certify Button */}
          <div className="flex justify-center mb-8">
            <button
              className="px-12 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity w-full max-w-md"
              style={{backgroundColor: '#1F9E55', color: 'white'}}
              onClick={() => setShowSuccessModal(true)}
            >
              I HEREBY CERTIFY THE INFORMATION
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6">
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/enrolled-student-info', { state: { formData, requesterData } })}
            >
              BACK
            </button>
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#dc2626', color: 'white'}}
              onClick={() => setShowCancelModal(true)}
            >
              CANCEL
            </button>
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

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="rounded-xl shadow-2xl p-8 max-w-md w-full mx-4" style={{backgroundColor: '#000B3C'}}>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img src={cancelIcon} alt="Cancel" className="w-24 h-24 object-contain" />
            </div>

            {/* Modal Title */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-black text-white" style={{fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>
                Are you sure you want to cancel?
              </h3>
            </div>

            {/* Modal Subtitle */}
            <div className="text-center mb-8">
              <p className="text-white text-base">
                upon cancelling, the request will not be saved.
              </p>
            </div>

            {/* Modal Buttons */}
            <div className="flex justify-center gap-6">
              <button
                className="px-12 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#dc2626', color: 'white'}}
                onClick={() => {
                  setShowCancelModal(false)
                  navigate('/services')
                }}
              >
                YES
              </button>
              <button
                className="px-12 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1F9E55', color: 'white'}}
                onClick={() => setShowCancelModal(false)}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 text-center" style={{backgroundColor: '#000B3C'}}>
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <img src={thankYouIcon} alt="Thank You" className="w-20 h-20 object-contain" />
            </div>

            {/* Modal Title */}
            <div className="text-center mb-4">
              <h3 className="text-3xl font-black text-white" style={{fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>
                Thank you for requesting!
              </h3>
            </div>

            {/* Modal Subtitle */}
            <div className="text-center mb-8">
              <p className="text-white text-lg opacity-80">
                Please wait for 3 working days.
              </p>
            </div>

            {/* Back to Home Button */}
            <button
              className="w-full px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#1F9E55', color: 'white'}}
              onClick={() => navigate('/')}
            >
              back to home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentSummaryPage
