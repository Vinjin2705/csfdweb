import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function WorkingStudentFormPage() {
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
    email: savedData.email || '',
    jobTitle: savedData.jobTitle || '',
    yearLevel: savedData.yearLevel || '',
    corFile: savedData.corFile || null,
    schoolIdFile: savedData.schoolIdFile || null,
    employmentFile: savedData.employmentFile || null
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

  const handleFileChange = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }))
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
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.yearLevel) newErrors.yearLevel = 'Year level is required'
    
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
            <h1 className="text-3xl font-black" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>STUDENT</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-6">
            {/* Row 1: GIVEN NAME, SURNAME, MIDDLE NAME */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                GIVEN NAME<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.givenName ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your given name"
                value={formData.givenName}
                onChange={(e) => handleInputChange('givenName', e.target.value)}
              />
              {errors.givenName && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.givenName}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                SURNAME<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.surname ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your surname"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
              />
              {errors.surname && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.surname}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                MIDDLE NAME
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: '#111c4e'}}
                placeholder="Enter your middle name"
                value={formData.middleName}
                onChange={(e) => handleInputChange('middleName', e.target.value)}
              />
            </div>

            {/* Row 2: EXTENSION NAME, SEX, UMAK STUDENT NUMBER */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                EXTENSION NAME
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: '#111c4e'}}
                placeholder="Enter your extension name"
                value={formData.extensionName}
                onChange={(e) => handleInputChange('extensionName', e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                SEX<span style={{color: '#dc2626'}}>*</span>
              </label>
              <button
                className="w-full px-3 py-2 border-2 rounded-lg text-left flex justify-between items-center text-sm"
                style={{borderColor: errors.sex ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
                onClick={() => setShowSexDropdown(!showSexDropdown)}
              >
                <span style={{color: formData.sex ? '#111c4e' : '#9ca3af'}}>
                  {formData.sex || 'Select your sex'}
                </span>
                <svg className={`w-4 h-4 transition-transform ${showSexDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showSexDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20" style={{borderColor: '#111c4e'}}>
                  {sexOptions.map((option) => (
                    <div
                      key={option}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
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

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                UMAK STUDENT NUMBER<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.studentNumber ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your student number"
                value={formData.studentNumber}
                onChange={(e) => handleInputChange('studentNumber', e.target.value)}
              />
              {errors.studentNumber && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.studentNumber}</p>}
            </div>
          </div>

          {/* COLLEGE/INSTITUTE - Full Width */}
          <div className="mb-4 relative">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              COLLEGE/INSTITUTE<span style={{color: '#dc2626'}}>*</span>
            </label>
            <button
              className="w-full px-3 py-2 border-2 rounded-lg text-left flex justify-between items-center text-sm"
              style={{borderColor: errors.college ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
              onClick={() => setShowCollegeDropdown(!showCollegeDropdown)}
            >
              <span className="truncate" style={{color: formData.college ? '#111c4e' : '#9ca3af'}}>
                {formData.college || 'Select your college/institute'}
              </span>
              <svg className={`w-4 h-4 transition-transform ${showCollegeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showCollegeDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto" style={{borderColor: '#111c4e'}}>
                {collegeOptions.map((option) => (
                  <div
                    key={option}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
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

          {/* Row: EMAIL ADDRESS, JOB TITLE */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                EMAIL ADDRESS<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.email ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              {errors.email && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.email}</p>}
            </div>

            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                JOB TITLE<span style={{color: '#dc2626'}}>*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm"
                style={{borderColor: errors.jobTitle ? '#dc2626' : '#111c4e'}}
                placeholder="Enter your job"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              />
              {errors.jobTitle && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors.jobTitle}</p>}
            </div>
          </div>

          {/* YEAR/GRADE LEVEL - Full Width */}
          <div className="mb-6 relative">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              YEAR/GRADE LEVEL<span style={{color: '#dc2626'}}>*</span>
            </label>
            <button
              className="w-full px-3 py-2 border-2 rounded-lg text-left flex justify-between items-center text-sm"
              style={{borderColor: errors.yearLevel ? '#dc2626' : '#111c4e', backgroundColor: 'white'}}
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              <span style={{color: formData.yearLevel ? '#111c4e' : '#9ca3af'}}>
                {formData.yearLevel || 'Select your year/grade level'}
              </span>
              <svg className={`w-4 h-4 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showYearDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-lg shadow-lg z-20" style={{borderColor: '#111c4e'}}>
                {yearOptions.map((option) => (
                  <div
                    key={option}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
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

          {/* REQUIREMENTS Section */}
          <div className="space-y-4 mb-8">
            {/* Requirement 1 - COR */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                REQUIREMENT/S<span style={{color: '#dc2626'}}>*</span>
              </label>
              <p className="text-xs text-gray-600 mb-2">Upload a copy of your updated Certificate of Registration (COR). Upload it in PDF format.</p>
              <div 
                className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                style={{borderColor: '#111c4e'}}
                onClick={() => document.getElementById('corFile').click()}
              >
                <input
                  type="file"
                  id="corFile"
                  className="hidden"
                  accept=".pdf"
                  onChange={(e) => handleFileChange('corFile', e.target.files[0])}
                />
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-gray-500">
                    {formData.corFile ? formData.corFile.name : 'Add/upload a file'}
                  </span>
                </div>
              </div>
            </div>

            {/* Requirement 2 - School ID */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                REQUIREMENT/S<span style={{color: '#dc2626'}}>*</span>
              </label>
              <p className="text-xs text-gray-600 mb-2">Upload a copy of your School ID. Upload it in PDF format.</p>
              <div 
                className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                style={{borderColor: '#111c4e'}}
                onClick={() => document.getElementById('schoolIdFile').click()}
              >
                <input
                  type="file"
                  id="schoolIdFile"
                  className="hidden"
                  accept=".pdf"
                  onChange={(e) => handleFileChange('schoolIdFile', e.target.files[0])}
                />
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-gray-500">
                    {formData.schoolIdFile ? formData.schoolIdFile.name : 'Add/upload a file'}
                  </span>
                </div>
              </div>
            </div>

            {/* Requirement 3 - Employment */}
            <div>
              <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
                REQUIREMENT/S<span style={{color: '#dc2626'}}>*</span>
              </label>
              <p className="text-xs text-gray-600 mb-2">Upload a copy of your Certificate of Employment and ID. Upload it in PDF format.</p>
              <div 
                className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                style={{borderColor: '#111c4e'}}
                onClick={() => document.getElementById('employmentFile').click()}
              >
                <input
                  type="file"
                  id="employmentFile"
                  className="hidden"
                  accept=".pdf"
                  onChange={(e) => handleFileChange('employmentFile', e.target.files[0])}
                />
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm text-gray-500">
                    {formData.employmentFile ? formData.employmentFile.name : 'Add/upload a file'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/uniform-exemption-form', { state: { formData } })}
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
                  navigate('/working-student-summary', { state: { formData } })
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

export default WorkingStudentFormPage
