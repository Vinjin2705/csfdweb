import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function ComplaintDetailsFormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const savedData = location.state?.formData || {}
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    complaintTitle: savedData.complaintTitle || '',
    complaintCategory: savedData.complaintCategory || '',
    detailedDescription: savedData.detailedDescription || '',
    desiredOutcome: savedData.desiredOutcome || '',
    dateOfIncident: savedData.dateOfIncident || '',
    location: savedData.location || '',
    isOngoing: savedData.isOngoing || '',
    witnessesPresent: savedData.witnessesPresent || '',
    previousReports: savedData.previousReports || '',
    supportingDocuments: savedData.supportingDocuments || []
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      setFormData(prev => ({
        ...prev,
        supportingDocuments: [...prev.supportingDocuments, ...files]
      }))
      if (errors.supportingDocuments) {
        setErrors(prev => ({ ...prev, supportingDocuments: '' }))
      }
    }
  }

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      supportingDocuments: prev.supportingDocuments.filter((_, i) => i !== index)
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.complaintTitle.trim()) newErrors.complaintTitle = 'Complaint title is required'
    if (!formData.complaintCategory.trim()) newErrors.complaintCategory = 'Complaint category is required'
    if (!formData.detailedDescription.trim()) newErrors.detailedDescription = 'Detailed description is required'
    if (!formData.desiredOutcome.trim()) newErrors.desiredOutcome = 'Desired outcome is required'
    if (!formData.dateOfIncident.trim()) newErrors.dateOfIncident = 'Date of incident is required'
    if (!formData.location.trim()) newErrors.location = 'Location is required'
    if (!formData.isOngoing.trim()) newErrors.isOngoing = 'This field is required'
    if (!formData.witnessesPresent.trim()) newErrors.witnessesPresent = 'Witnesses information is required'
    if (!formData.previousReports.trim()) newErrors.previousReports = 'Previous reports information is required'
    if (formData.supportingDocuments.length === 0) newErrors.supportingDocuments = 'At least one supporting document is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Form Section */}
      <section className="px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>COMPLAINT</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* CORE COMPLAINT DETAILS */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{color: '#3d3d3d'}}>CORE COMPLAINT DETAILS</h3>

            {/* Complaint Title and Category Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                  Complaint Title/Subject<span style={{color: '#dc2626'}}>*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                  style={{borderColor: errors.complaintTitle ? '#dc2626' : '#111c4e'}}
                  placeholder='(e.g., "Late salary payment for March 2024")'
                  value={formData.complaintTitle}
                  onChange={(e) => handleChange('complaintTitle', e.target.value)}
                />
                {errors.complaintTitle && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.complaintTitle}</p>}
              </div>

              <div>
                <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                  Complaint Category<span style={{color: '#dc2626'}}>*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                  style={{borderColor: errors.complaintCategory ? '#dc2626' : '#111c4e'}}
                  placeholder='(Harassment, Payment Issue, Safety Violation, Discrimination, etc.)'
                  value={formData.complaintCategory}
                  onChange={(e) => handleChange('complaintCategory', e.target.value)}
                />
                {errors.complaintCategory && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.complaintCategory}</p>}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-4">
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                Detailed Description<span style={{color: '#dc2626'}}>*</span>
              </label>
              <textarea
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white resize-none"
                style={{borderColor: errors.detailedDescription ? '#dc2626' : '#111c4e', minHeight: '120px'}}
                placeholder="Full narrative of what happened - be specific about actions, words, incidents"
                value={formData.detailedDescription}
                onChange={(e) => handleChange('detailedDescription', e.target.value)}
              />
              {errors.detailedDescription && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.detailedDescription}</p>}
            </div>

            {/* Desired Outcome */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                Desired Outcome/Resolution<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                style={{borderColor: errors.desiredOutcome ? '#dc2626' : '#111c4e'}}
                placeholder="What the complainant wants to happen (apology, payment, policy change, etc.)"
                value={formData.desiredOutcome}
                onChange={(e) => handleChange('desiredOutcome', e.target.value)}
              />
              {errors.desiredOutcome && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.desiredOutcome}</p>}
            </div>
          </div>

          {/* TIMELINE & CONTEXT */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{color: '#3d3d3d'}}>TIMELINE & CONTEXT</h3>

            {/* Date of Incident and Location Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                  Date of Incident<span style={{color: '#dc2626'}}>*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                  style={{borderColor: errors.dateOfIncident ? '#dc2626' : '#111c4e'}}
                  placeholder="When it first occurred"
                  value={formData.dateOfIncident}
                  onChange={(e) => handleChange('dateOfIncident', e.target.value)}
                />
                {errors.dateOfIncident && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.dateOfIncident}</p>}
              </div>

              <div>
                <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                  Location<span style={{color: '#dc2626'}}>*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                  style={{borderColor: errors.location ? '#dc2626' : '#111c4e'}}
                  placeholder="Where it happened (office, classroom, oval)"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                />
                {errors.location && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.location}</p>}
              </div>
            </div>

            {/* Is it on going */}
            <div className="mb-4">
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                Is it on going<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                style={{borderColor: errors.isOngoing ? '#dc2626' : '#111c4e'}}
                placeholder="Yes or No? If Yes, How often?"
                value={formData.isOngoing}
                onChange={(e) => handleChange('isOngoing', e.target.value)}
              />
              {errors.isOngoing && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.isOngoing}</p>}
            </div>

            {/* Witnesses Present */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                Witnesses Present<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                style={{borderColor: errors.witnessesPresent ? '#dc2626' : '#111c4e'}}
                placeholder="Names of people who saw/heard (if any)"
                value={formData.witnessesPresent}
                onChange={(e) => handleChange('witnessesPresent', e.target.value)}
              />
              {errors.witnessesPresent && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.witnessesPresent}</p>}
            </div>
          </div>

          {/* EVIDENCE & DOCUMENTATION */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{color: '#3d3d3d'}}>EVIDENCE & DOCUMENTATION</h3>

            {/* Previous Reports */}
            <div className="mb-4">
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                Previous Reports<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-white"
                style={{borderColor: errors.previousReports ? '#dc2626' : '#111c4e'}}
                placeholder="Has this been reported before? If yes, show date and to whom"
                value={formData.previousReports}
                onChange={(e) => handleChange('previousReports', e.target.value)}
              />
              {errors.previousReports && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.previousReports}</p>}
            </div>

            {/* Supporting Documents */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                Supporting Documents<span style={{color: '#dc2626'}}>*</span>
              </label>
              <p className="text-xs text-gray-600 mb-2">
                Upload a copy of your evidence with a maximum file size of 100 MB. For, further evidence/s, upload it through an online storage/cloud and send it through email of CSFD.
              </p>

              {/* File Upload Area */}
              <div
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors mb-4"
                style={{borderColor: errors.supportingDocuments ? '#dc2626' : '#111c4e'}}
                onClick={() => document.getElementById('file-upload').click()}
              >
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-500">Add/upload a file</p>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>

              {errors.supportingDocuments && <p className="text-xs mb-2" style={{color: '#dc2626'}}>{errors.supportingDocuments}</p>}

              {/* Uploaded Files List */}
              {formData.supportingDocuments.length > 0 && (
                <div className="space-y-2">
                  {formData.supportingDocuments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border-2 rounded-lg px-3 py-2" style={{borderColor: '#111c4e'}}>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm" style={{color: '#111c4e'}}>{file.name}</span>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeFile(index)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/respondent-form', { state: { formData: { ...savedData, ...formData } } })}
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
                  navigate('/complaint-summary', { state: { formData: { ...savedData, ...formData } } })
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

export default ComplaintDetailsFormPage
