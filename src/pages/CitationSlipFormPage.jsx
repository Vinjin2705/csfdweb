import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function CitationSlipFormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const savedData = location.state?.formData || {}
  
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSexDropdown, setShowSexDropdown] = useState(false)
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false)
  const [showYearDropdown, setShowYearDropdown] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    givenName: savedData.givenName || '',
    surname: savedData.surname || '',
    middleName: savedData.middleName || '',
    extensionName: savedData.extensionName || '',
    sex: savedData.sex || '',
    studentNumber: savedData.studentNumber || '',
    college: savedData.college || '',
    yearLevel: savedData.yearLevel || '',
    email: savedData.email || ''
  })

  const sexOptions = ['Male', 'Female', 'Other']
  
  const collegeOptions = [
    'College of Business and Financial Management',
    'College of Continuing Advanced and Professional Studies',
    'College of Construction Sciences and Engineering',
    'College of Computing and Information Sciences',
    'College of Engineering Technology',
    'College of Governance and Public Policy',
    'College of Human Kinetics',
    'College of Innovative Teacher Education',
    'CITE-Higher School ng UMak',
    'College of Tourism and Hospitality Management',
    'Institute of Arts and Design',
    'Institute of Disaster and Emergency Management',
    'Institutes of Imaging Health Sciences',
    'Institute of Accountancy',
    'Institutes of Nursing',
    'Institutes of Pharmacy',
    'Institute of Psychology',
    'Institute of Social Works',
    'School of Law',
    'Other'
  ]

  const yearOptions = [
    'Grade 11',
    'Grade 12',
    'First Year',
    'Second Year',
    'Third Year',
    'Fourth Year',
    'Fifth Year'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.givenName.trim()) newErrors.givenName = 'Given name is required'
    if (!formData.surname.trim()) newErrors.surname = 'Surname is required'
    if (!formData.sex) newErrors.sex = 'Sex is required'
    if (!formData.studentNumber.trim()) newErrors.studentNumber = 'Student number is required'
    if (!formData.college) newErrors.college = 'College is required'
    if (!formData.yearLevel) newErrors.yearLevel = 'Year level is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
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
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>CITATION SLIP</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>STUDENT INFORMATION</h2>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {/* GIVEN NAME */}
            <div>
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                GIVEN NAME<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.givenName ? '#dc2626' : '#111c4e'}}
                placeholder="Enter given name"
                value={formData.givenName}
                onChange={(e) => handleInputChange('givenName', e.target.value)}
              />
              {errors.givenName && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.givenName}</p>}
            </div>

            {/* SURNAME */}
            <div>
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                SURNAME<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.surname ? '#dc2626' : '#111c4e'}}
                placeholder="Enter surname"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
              />
              {errors.surname && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.surname}</p>}
            </div>

            {/* MIDDLE NAME */}
            <div>
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                MIDDLE NAME
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                style={{borderColor: '#111c4e'}}
                placeholder="Enter middle name"
                value={formData.middleName}
                onChange={(e) => handleInputChange('middleName', e.target.value)}
              />
            </div>

            {/* EXTENSION NAME */}
            <div>
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                EXTENSION NAME
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                style={{borderColor: '#111c4e'}}
                placeholder="e.g., Jr., Sr., III"
                value={formData.extensionName}
                onChange={(e) => handleInputChange('extensionName', e.target.value)}
              />
            </div>

            {/* SEX */}
            <div className="relative">
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                SEX<span style={{color: '#dc2626'}}>*</span>
              </label>
              <button
                className="w-full px-4 py-2 border-2 rounded-lg text-left flex justify-between items-center"
                style={{borderColor: errors.sex ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
                onClick={() => setShowSexDropdown(!showSexDropdown)}
              >
                <span style={{color: formData.sex ? '#111c4e' : '#9ca3af'}}>
                  {formData.sex || 'Select sex'}
                </span>
                <svg className={`w-5 h-5 transition-transform ${showSexDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showSexDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20" style={{borderColor: '#111c4e'}}>
                  {sexOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleInputChange('sex', option)
                        setShowSexDropdown(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              {errors.sex && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.sex}</p>}
            </div>

            {/* STUDENT NUMBER */}
            <div>
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                STUDENT NUMBER<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.studentNumber ? '#dc2626' : '#111c4e'}}
                placeholder="Enter student number"
                value={formData.studentNumber}
                onChange={(e) => handleInputChange('studentNumber', e.target.value)}
              />
              {errors.studentNumber && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.studentNumber}</p>}
            </div>

            {/* COLLEGE */}
            <div className="relative">
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                COLLEGE<span style={{color: '#dc2626'}}>*</span>
              </label>
              <button
                className="w-full px-4 py-2 border-2 rounded-lg text-left flex justify-between items-center"
                style={{borderColor: errors.college ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
                onClick={() => setShowCollegeDropdown(!showCollegeDropdown)}
              >
                <span className="truncate" style={{color: formData.college ? '#111c4e' : '#9ca3af'}}>
                  {formData.college || 'Select college'}
                </span>
                <svg className={`w-5 h-5 transition-transform ${showCollegeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showCollegeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto" style={{borderColor: '#111c4e'}}>
                  {collegeOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        handleInputChange('college', option)
                        setShowCollegeDropdown(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              {errors.college && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.college}</p>}
            </div>

            {/* YEAR LEVEL */}
            <div className="relative">
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                YEAR LEVEL<span style={{color: '#dc2626'}}>*</span>
              </label>
              <button
                className="w-full px-4 py-2 border-2 rounded-lg text-left flex justify-between items-center"
                style={{borderColor: errors.yearLevel ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
                onClick={() => setShowYearDropdown(!showYearDropdown)}
              >
                <span style={{color: formData.yearLevel ? '#111c4e' : '#9ca3af'}}>
                  {formData.yearLevel || 'Select year level'}
                </span>
                <svg className={`w-5 h-5 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showYearDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20" style={{borderColor: '#111c4e'}}>
                  {yearOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleInputChange('yearLevel', option)
                        setShowYearDropdown(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              {errors.yearLevel && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.yearLevel}</p>}
            </div>

            {/* EMAIL ADDRESS - Full width */}
            <div className="col-span-2">
              <label className="block font-bold text-sm mb-1" style={{color: '#111c4e'}}>
                EMAIL ADDRESS<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.email ? '#dc2626' : '#111c4e'}}
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.email}</p>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/citation-slip', { state: { formData } })}
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
                  navigate('/citation-slip-summary', { state: { formData } })
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

export default CitationSlipFormPage
