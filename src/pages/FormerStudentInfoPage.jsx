import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function FormerStudentInfoPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const requesterData = location.state?.requesterData || {}
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    lastLevelYear: '',
    email: '',
    purpose: '',
    otherPurpose: ''
  })

  const purposeOptions = [
    'Admission to University of Makati (UMak)',
    'Admission to other University',
    'Board Examination',
    'Employment',
    'Graduation Requirement',
    'School Requirement',
    'Internship/OJT requirements',
    'Others'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.lastLevelYear.trim()) newErrors.lastLevelYear = 'Last level & year attended is required'
    if (!formData.email.trim()) newErrors.email = 'Email address is required'
    if (!formData.purpose) newErrors.purpose = 'Purpose of request is required'
    if (formData.purpose === 'Others' && !formData.otherPurpose.trim()) {
      newErrors.otherPurpose = 'Please specify the purpose'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const showOthersField = formData.purpose === 'Others'

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Student Information Section */}
      <section className="px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-2" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>STUDENT</h1>
            <h2 className="text-3xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Last Level & Year Attended */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                LAST LEVEL & YEAR ATTENDED<span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-2">(e.g 3rd year or 2023)</p>
              <input
                type="text"
                placeholder="Enter your last level and year attended"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.lastLevelYear ? 'border-red-500' : ''}`}
                style={{borderColor: errors.lastLevelYear ? '#dc2626' : '#111c4e'}}
                value={formData.lastLevelYear}
                onChange={(e) => handleInputChange('lastLevelYear', e.target.value)}
              />
              {errors.lastLevelYear && <p className="text-red-500 text-sm mt-1">{errors.lastLevelYear}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                EMAIL ADDRESS<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : ''}`}
                style={{borderColor: errors.email ? '#dc2626' : '#111c4e'}}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Purpose of Request */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                PURPOSE OF REQUEST<span className="text-red-500">*</span>
              </label>
              <button
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-left bg-white flex justify-between items-center ${errors.purpose ? 'border-red-500' : ''}`}
                style={{borderColor: errors.purpose ? '#dc2626' : '#111c4e'}}
                onClick={() => setShowPurposeDropdown(!showPurposeDropdown)}
              >
                <span className={formData.purpose ? 'text-black' : 'text-gray-400'}>
                  {formData.purpose || 'Select your purpose of request'}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
              {showPurposeDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border-2 rounded-lg shadow-lg" style={{borderColor: '#111c4e'}}>
                  {purposeOptions.map((option) => (
                    <button
                      key={option}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => {
                        handleInputChange('purpose', option)
                        setShowPurposeDropdown(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Others Field (conditional) */}
            {showOthersField && (
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  OTHERS:
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.otherPurpose ? 'border-red-500' : ''}`}
                  style={{borderColor: errors.otherPurpose ? '#dc2626' : '#111c4e'}}
                  value={formData.otherPurpose}
                  onChange={(e) => handleInputChange('otherPurpose', e.target.value)}
                />
                {errors.otherPurpose && <p className="text-red-500 text-sm mt-1">{errors.otherPurpose}</p>}
              </div>
            )}

            {/* Requirements Section */}
            <div className="mt-8">
              <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                REQUIREMENT/S
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Please upload a latest complete and clear copy of either your Certificate of Registration (C.O.R)/Report Card (Form 138)/ Transcript of Records (T.O.R)/Certificate of Honorable Dismissal or any official academic record/document/proof of previous enrolment at Umak.
              </p>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-400 rounded-xl p-12 flex flex-col items-center justify-center bg-white">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z"/>
                </svg>
                <span className="text-gray-500">Add/upload a file</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/requester-info', { state: { requesterData } })}
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
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#1F9E55', color: 'white'}}
              onClick={() => {
                if (validateForm()) {
                  navigate('/former-student-summary', { 
                    state: { 
                      formData,
                      requesterData
                    } 
                  })
                }
              }}
            >
              PROCEED
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
    </div>
  )
}

export default FormerStudentInfoPage
