import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function UniformExemptionFormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const savedData = location.state?.formData || {}
  
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showTypeDropdown, setShowTypeDropdown] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    typeOfRequest: savedData.typeOfRequest || '',
    otherSpecify: savedData.otherSpecify || ''
  })

  const requestTypes = [
    'Student | Working Student',
    'Student | On-the-Job Training',
    'Office/Center/College/Institute/Organization | Event',
    'College/Organization Shirt exemption approval',
    'Other/s'
  ]

  const typeDescriptions = {
    'Student | Working Student': 'For currently enrolled students who are also employed, seeking uniform exemption while balancing work and academic responsibilities.',
    'Student | On-the-Job Training': 'For students undergoing practical training or internship programs as part of their academic curriculum requirements.',
    'Office/Center/College/Institute/Organization | Event': 'For official events, activities, or functions organized by academic departments, administrative offices, or institutional units requiring uniform exemption for participants.',
    'College/Organization Shirt exemption approval': 'For requests related to the authorized use of an official organization, college, or institute shirt in lieu of the prescribed uniform.',
    'Other/s': 'For requests that do not fall under the specified categories; please provide additional details or specify the nature of your request.'
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.typeOfRequest) newErrors.typeOfRequest = 'Type of request is required'
    if (formData.typeOfRequest === 'Other/s' && !formData.otherSpecify.trim()) {
      newErrors.otherSpecify = 'Please specify the type of request'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Form Section */}
      <section className="px-12 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-2" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>UNIFORM EXEMPTION</h1>
            <h2 className="text-3xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>FORM</h2>
          </div>

          {/* Form Content */}
          <div className="flex gap-8">
            {/* Left Side - Form Fields */}
            <div className="flex-1">
              {/* Type of Request Field */}
              <div className="mb-6">
                <label className="block font-bold text-lg mb-2" style={{color: '#111c4e'}}>
                  TYPE OF REQUEST<span style={{color: '#dc2626'}}>*</span>
                </label>
                <div className="relative">
                  <button
                    className="w-full px-4 py-3 border-2 rounded-lg text-left flex justify-between items-center"
                    style={{borderColor: errors.typeOfRequest ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
                    onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                  >
                    <span style={{color: formData.typeOfRequest ? '#111c4e' : '#9ca3af'}}>
                      {formData.typeOfRequest || 'Select type of request'}
                    </span>
                    <svg className={`w-5 h-5 transition-transform ${showTypeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showTypeDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20" style={{borderColor: '#111c4e'}}>
                      {requestTypes.map((type) => (
                        <div
                          key={type}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                          onClick={() => {
                            handleInputChange('typeOfRequest', type)
                            setShowTypeDropdown(false)
                          }}
                        >
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.typeOfRequest === type ? 'border-green-600' : 'border-gray-400'}`}>
                            {formData.typeOfRequest === type && <div className="w-2 h-2 rounded-full bg-green-600"></div>}
                          </div>
                          <span style={{color: '#111c4e'}}>{type}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.typeOfRequest && (
                  <p className="text-sm mt-1" style={{color: '#dc2626'}}>{errors.typeOfRequest}</p>
                )}

                {/* Other Specify Field */}
                {formData.typeOfRequest === 'Other/s' && (
                  <div className="mt-4 ml-6">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border-b-2 bg-transparent focus:outline-none"
                      style={{borderColor: errors.otherSpecify ? '#dc2626' : '#111c4e'}}
                      placeholder="Specify: _________________"
                      value={formData.otherSpecify}
                      onChange={(e) => handleInputChange('otherSpecify', e.target.value)}
                    />
                    {errors.otherSpecify && (
                      <p className="text-sm mt-1" style={{color: '#dc2626'}}>{errors.otherSpecify}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Description Box */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{borderColor: '#111c4e'}}>
                <h3 className="text-xl font-bold mb-4" style={{color: '#ffc400'}}>TYPE OF REQUEST DESCRIPTION</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-1" style={{color: '#111c4e'}}>Student | Working Student</h4>
                    <p className="text-sm text-gray-600">For currently enrolled students who are also employed, seeking uniform exemption while balancing work and academic responsibilities.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{color: '#111c4e'}}>Student | On-the-Job Training (OJT)</h4>
                    <p className="text-sm text-gray-600">For students undergoing practical training or internship programs as part of their academic curriculum requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{color: '#111c4e'}}>Office/Center/College/Institute/Organization | Event</h4>
                    <p className="text-sm text-gray-600">For official events, activities, or functions organized by academic departments, administrative offices, or institutional units requiring uniform exemption for participants.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{color: '#111c4e'}}>Organization/College/Institute Shirt</h4>
                    <p className="text-sm text-gray-600">For requests related to the authorized use of an official organization, college, or institute shirt in lieu of the prescribed uniform.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{color: '#111c4e'}}>Other/s</h4>
                    <p className="text-sm text-gray-600">For requests that do not fall under the specified categories; please provide additional details or specify the nature of your request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/uniform-exemption', { state: { formData } })}
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
                  if (formData.typeOfRequest === 'Student | Working Student') {
                    navigate('/working-student-form', { state: { formData } })
                  } else if (formData.typeOfRequest === 'Student | On-the-Job Training') {
                    navigate('/ojt-form', { state: { formData } })
                  } else if (formData.typeOfRequest === 'Office/Center/College/Institute/Organization | Event') {
                    navigate('/organization-event-requester', { state: { formData } })
                  } else if (formData.typeOfRequest === 'College/Organization Shirt exemption approval') {
                    navigate('/organization-shirt-requester', { state: { formData } })
                  } else if (formData.typeOfRequest === 'Other/s') {
                    navigate('/other-exemption-form', { state: { formData } })
                  } else {
                    navigate('/uniform-exemption-summary', { state: { formData } })
                  }
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

export default UniformExemptionFormPage
