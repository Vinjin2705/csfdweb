import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function OrganizationShirtRequestPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const requesterData = location.state?.requesterData || {}
  const savedRequestData = location.state?.requestData || {}
  
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [errors, setErrors] = useState({})
  const [requestData, setRequestData] = useState({
    expectedDate: savedRequestData.expectedDate || '',
    designatedDays: savedRequestData.designatedDays || '',
    organization: savedRequestData.organization || '',
    shirtDesignFile: savedRequestData.shirtDesignFile || null
  })

  const handleInputChange = (field, value) => {
    setRequestData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFileChange = (field, file) => {
    setRequestData(prev => ({ ...prev, [field]: file }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!requestData.expectedDate.trim()) newErrors.expectedDate = 'Expected date of effectivity is required'
    if (!requestData.designatedDays.trim()) newErrors.designatedDays = 'Designated day/s is required'
    if (!requestData.organization.trim()) newErrors.organization = 'Organization is required'
    
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
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>REQUEST</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* Row: EXPECTED DATE OF EFFECTIVITY, DESIGNATED DAY/S */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                EXPECTED DATE OF EFFECTIVITY<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.expectedDate ? '#dc2626' : '#111c4e'}}
                placeholder="Enter the request effectivity"
                value={requestData.expectedDate}
                onChange={(e) => handleInputChange('expectedDate', e.target.value)}
              />
              {errors.expectedDate && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.expectedDate}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                DESIGNATED DAY/S<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.designatedDays ? '#dc2626' : '#111c4e'}}
                placeholder="Enter the Designated day to wear the org/college shirt."
                value={requestData.designatedDays}
                onChange={(e) => handleInputChange('designatedDays', e.target.value)}
              />
              {errors.designatedDays && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.designatedDays}</p>}
            </div>
          </div>

          {/* COLLEGE/INSTITUTE/OFFICE/CENTER/ORGANIZATION - Full Width */}
          <div className="mb-6">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              COLLEGE/INSTITUTE/OFFICE/CENTER/ORGANIZATION<span style={{color: '#dc2626'}}>*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
              style={{borderColor: errors.organization ? '#dc2626' : '#111c4e'}}
              placeholder="Please input the full name of requesting college/institute/office/center/organization"
              value={requestData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
            />
            {errors.organization && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.organization}</p>}
          </div>

          {/* REQUIREMENT/S Section */}
          <div className="mb-8">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              REQUIREMENT/S<span style={{color: '#dc2626'}}>*</span>
            </label>
            <p className="text-xs text-gray-600 mb-2">Upload a copy of Center of Integrated Communications' approval for shirt design. Upload it in PDF file.</p>
            <div 
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              style={{borderColor: '#111c4e'}}
              onClick={() => document.getElementById('shirtDesignFile').click()}
            >
              <input
                type="file"
                id="shirtDesignFile"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleFileChange('shirtDesignFile', e.target.files[0])}
              />
              <div className="flex flex-col items-center">
                <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-sm text-gray-500">
                  {requestData.shirtDesignFile ? requestData.shirtDesignFile.name : 'Add/upload a file'}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/organization-shirt-requester', { state: { requesterData, requestData } })}
            >
              BACK
            </button>
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#dc2626', color: 'white'}}
              onClick={() => setShowCancelModal(true)}
            >
              CANCEL
            </button>
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#1F9E55', color: 'white'}}
              onClick={() => {
                if (validateForm()) {
                  navigate('/organization-shirt-summary', { state: { requesterData, requestData } })
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

export default OrganizationShirtRequestPage
