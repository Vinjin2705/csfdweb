import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function OrganizationEventInfoPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const requesterData = location.state?.requesterData || {}
  const savedEventData = location.state?.eventData || {}
  
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [errors, setErrors] = useState({})
  const [eventData, setEventData] = useState({
    eventTitle: savedEventData.eventTitle || '',
    eventDate: savedEventData.eventDate || '',
    expectedParticipants: savedEventData.expectedParticipants || '',
    venue: savedEventData.venue || '',
    expectedParticipantDesc: savedEventData.expectedParticipantDesc || '',
    organization: savedEventData.organization || '',
    email: savedEventData.email || '',
    contactNumber: savedEventData.contactNumber || '',
    projectProfileFile: savedEventData.projectProfileFile || null
  })

  const handleInputChange = (field, value) => {
    setEventData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleFileChange = (field, file) => {
    setEventData(prev => ({ ...prev, [field]: file }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!eventData.eventTitle.trim()) newErrors.eventTitle = 'Event title is required'
    if (!eventData.eventDate.trim()) newErrors.eventDate = 'Date of event is required'
    if (!eventData.expectedParticipants.trim()) newErrors.expectedParticipants = 'Number of expected participants is required'
    if (!eventData.venue.trim()) newErrors.venue = 'Venue is required'
    if (!eventData.expectedParticipantDesc.trim()) newErrors.expectedParticipantDesc = 'Expected participant description is required'
    if (!eventData.organization.trim()) newErrors.organization = 'Organization is required'
    if (!eventData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eventData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!eventData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required'
    
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
            <h1 className="text-3xl font-black" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>EVENT</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-6">
            {/* Row 1: EVENT TITLE, DATE OF EVENT, NO. OF EXPECTED PARTICIPANTS */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                EVENT TITLE<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.eventTitle ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your event's name"
                value={eventData.eventTitle}
                onChange={(e) => handleInputChange('eventTitle', e.target.value)}
              />
              {errors.eventTitle && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.eventTitle}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                DATE OF EVENT<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.eventDate ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your event's date/duration of request"
                value={eventData.eventDate}
                onChange={(e) => handleInputChange('eventDate', e.target.value)}
              />
              {errors.eventDate && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.eventDate}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                NO. OF EXPECTED PARTICIPANTS<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.expectedParticipants ? '#dc2626' : '#111c4e'}}
                placeholder="Enter the expected no. of participants"
                value={eventData.expectedParticipants}
                onChange={(e) => handleInputChange('expectedParticipants', e.target.value)}
              />
              {errors.expectedParticipants && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.expectedParticipants}</p>}
            </div>
          </div>

          {/* Row 2: VENUE OF EVENT, EXPECTED PARTICIPANT */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                VENUE OF EVENT<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.venue ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your event's venue"
                value={eventData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
              />
              {errors.venue && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.venue}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                EXPECTED PARTICIPANT<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.expectedParticipantDesc ? '#dc2626' : '#111c4e'}}
                placeholder="Who are the expected participants"
                value={eventData.expectedParticipantDesc}
                onChange={(e) => handleInputChange('expectedParticipantDesc', e.target.value)}
              />
              {errors.expectedParticipantDesc && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.expectedParticipantDesc}</p>}
            </div>
          </div>

          {/* COLLEGE/INSTITUTE/OFFICE/CENTER/ORGANIZATION - Full Width */}
          <div className="mb-4">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              COLLEGE/INSTITUTE/OFFICE/CENTER/ORGANIZATION<span style={{color: '#dc2626'}}>*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
              style={{borderColor: errors.organization ? '#dc2626' : '#111c4e'}}
              placeholder="Please input the full name"
              value={eventData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
            />
            {errors.organization && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.organization}</p>}
          </div>

          {/* Row: EMAIL ADDRESS OF REQUESTING OFFICE, CONTACT NUMBER */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                EMAIL ADDRESS OF REQUESTING OFFICE<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.email ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your email address requesting office"
                value={eventData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.email}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                CONTACT NUMBER <span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.contactNumber ? '#dc2626' : '#111c4e'}}
                placeholder="Enter contact number of requesting office/point person"
                value={eventData.contactNumber}
                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
              />
              {errors.contactNumber && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.contactNumber}</p>}
            </div>
          </div>

          {/* REQUIREMENT/S Section */}
          <div className="mb-8">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              REQUIREMENT/S<span style={{color: '#dc2626'}}>*</span>
            </label>
            <p className="text-xs text-gray-600 mb-2">Upload a copy of the event Project profile. Upload in PDF file.</p>
            <div 
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              style={{borderColor: '#111c4e'}}
              onClick={() => document.getElementById('projectProfileFile').click()}
            >
              <input
                type="file"
                id="projectProfileFile"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleFileChange('projectProfileFile', e.target.files[0])}
              />
              <div className="flex flex-col items-center">
                <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-sm text-gray-500">
                  {eventData.projectProfileFile ? eventData.projectProfileFile.name : 'Add/upload a file'}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/organization-event-requester', { state: { requesterData, eventData } })}
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
                  navigate('/organization-event-summary', { state: { requesterData, eventData } })
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

export default OrganizationEventInfoPage
