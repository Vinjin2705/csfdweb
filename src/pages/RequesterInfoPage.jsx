import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function RequesterInfoPage() {
  const navigate = useNavigate()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSexDropdown, setShowSexDropdown] = useState(false)
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false)
  const [showClassificationDropdown, setShowClassificationDropdown] = useState(false)
  const [formData, setFormData] = useState({
    givenName: '',
    surname: '',
    middleName: '',
    extensionName: '',
    sex: '',
    studentNumber: '',
    college: '',
    classification: ''
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
  const classificationOptions = [
    'Currently enrolled at UMAK (Undergraduate)',
    'Graduate at UMAK (HSU/College/Graduate Studies Program)',
    'Former/Previous student at UMAK (HSU/College)'
  ]

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.givenName.trim()) newErrors.givenName = 'Given name is required'
    if (!formData.surname.trim()) newErrors.surname = 'Surname is required'
    if (!formData.sex) newErrors.sex = 'Sex is required'
    if (!formData.studentNumber.trim()) newErrors.studentNumber = 'Student number is required'
    if (!formData.college) newErrors.college = 'College/Institute is required'
    if (!formData.classification) newErrors.classification = 'Classification is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Requester Information Section */}
      <section className="px-12 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-2" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>REQUESTER</h1>
            <h2 className="text-3xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Row 1 - Given Name, Surname, Middle Name */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  GIVEN NAME<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your given name"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.givenName ? 'border-red-500' : ''}`}
                  style={{borderColor: errors.givenName ? '#dc2626' : '#111c4e'}}
                  value={formData.givenName}
                  onChange={(e) => handleInputChange('givenName', e.target.value)}
                />
                {errors.givenName && <p className="text-red-500 text-sm mt-1">{errors.givenName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  SURNAME<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your surname"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.surname ? 'border-red-500' : ''}`}
                  style={{borderColor: errors.surname ? '#dc2626' : '#111c4e'}}
                  value={formData.surname}
                  onChange={(e) => handleInputChange('surname', e.target.value)}
                />
                {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  MIDDLE NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your middle name"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{borderColor: '#111c4e'}}
                  value={formData.middleName}
                  onChange={(e) => handleInputChange('middleName', e.target.value)}
                />
              </div>
            </div>

            {/* Row 2 - Extension Name, Sex, Student Number */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  EXTENSION NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your extension name"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{borderColor: '#111c4e'}}
                  value={formData.extensionName}
                  onChange={(e) => handleInputChange('extensionName', e.target.value)}
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  SEX<span className="text-red-500">*</span>
                </label>
                <button
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-left bg-white flex justify-between items-center ${errors.sex ? 'border-red-500' : ''}`}
                  style={{borderColor: errors.sex ? '#dc2626' : '#111c4e'}}
                  onClick={() => setShowSexDropdown(!showSexDropdown)}
                >
                  <span className={formData.sex ? 'text-black' : 'text-gray-400'}>
                    {formData.sex || 'Select your sex'}
                  </span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex}</p>}
                {showSexDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border-2 rounded-lg shadow-lg" style={{borderColor: '#111c4e'}}>
                    {sexOptions.map((option) => (
                      <button
                        key={option}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => {
                          handleInputChange('sex', option)
                          setShowSexDropdown(false)
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                  UMAK STUDENT NUMBER<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your student number"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.studentNumber ? 'border-red-500' : ''}`}
                  style={{borderColor: errors.studentNumber ? '#dc2626' : '#111c4e'}}
                  value={formData.studentNumber}
                  onChange={(e) => handleInputChange('studentNumber', e.target.value)}
                />
                {errors.studentNumber && <p className="text-red-500 text-sm mt-1">{errors.studentNumber}</p>}
              </div>
            </div>

            {/* Row 3 - College/Institute */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
                COLLEGE/INSTITUTE<span className="text-red-500">*</span>
              </label>
              <button
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-left bg-white flex justify-between items-center ${errors.college ? 'border-red-500' : ''}`}
                style={{borderColor: errors.college ? '#dc2626' : '#111c4e'}}
                onClick={() => setShowCollegeDropdown(!showCollegeDropdown)}
              >
                <span className={formData.college ? 'text-black' : 'text-gray-400'}>
                  {formData.college || 'Select your college/institute'}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
              {showCollegeDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border-2 rounded-lg shadow-lg max-h-60 overflow-y-auto" style={{borderColor: '#111c4e'}}>
                  {collegeOptions.map((option) => (
                    <button
                      key={option}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => {
                        handleInputChange('college', option)
                        setShowCollegeDropdown(false)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {/* Reminder Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">!</span>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1" style={{color: '#111c4e'}}>REMINDER</h3>
                <p className="text-xs text-gray-600">Please read the classification description for accuracy.</p>
              </div>
            </div>

            {/* Currently Enrolled Card */}
            <div className="rounded-xl shadow-lg p-6 text-white" style={{backgroundColor: '#000B3C'}}>
              <h3 className="font-bold text-sm mb-2">Currently enrolled at UMAK</h3>
              <p className="text-xs opacity-80">(either HSU or Undergraduate)</p>
            </div>

            {/* Graduate Card */}
            <div className="rounded-xl shadow-lg p-6 text-white" style={{backgroundColor: '#f97316'}}>
              <h3 className="font-bold text-sm mb-2">Graduate at UMAK (HSU/College/Graduate Studies Program)</h3>
              <p className="text-xs opacity-80">Students who have successfully completed their prescribed course, track, strand, or academic program (HSU, Undergraduate, or Graduate Studies).</p>
            </div>

            {/* Former/Previous Student Card */}
            <div className="rounded-xl shadow-lg p-6 text-white" style={{backgroundColor: '#ffc400'}}>
              <h3 className="font-bold text-sm mb-2" style={{color: '#111c4e'}}>Former/Previous student at UMAK (HSU/College)</h3>
              <p className="text-xs opacity-80" style={{color: '#111c4e'}}>Students who previously enrolled at the University of Makati (HSU or Undergraduate) but did not complete their prescribed course, track, or strand.</p>
            </div>
          </div>

          {/* Classification Dropdown */}
          <div className="relative mt-6">
            <label className="block text-sm font-semibold mb-2" style={{color: '#111c4e'}}>
              CLASSIFICATION<span className="text-red-500">*</span>
            </label>
            <button
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-left bg-white flex justify-between items-center ${errors.classification ? 'border-red-500' : ''}`}
              style={{borderColor: errors.classification ? '#dc2626' : '#111c4e'}}
              onClick={() => setShowClassificationDropdown(!showClassificationDropdown)}
            >
              <span className={formData.classification ? 'text-black' : 'text-gray-400'}>
                {formData.classification || 'Select your classification'}
              </span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {errors.classification && <p className="text-red-500 text-sm mt-1">{errors.classification}</p>}
            {showClassificationDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border-2 rounded-lg shadow-lg" style={{borderColor: '#111c4e'}}>
                {classificationOptions.map((option) => (
                  <button
                    key={option}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      handleInputChange('classification', option)
                      setShowClassificationDropdown(false)
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/good-moral')}
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
                  if (formData.classification === 'Currently enrolled at UMAK (Undergraduate)') {
                    navigate('/enrolled-student-info', { state: { requesterData: formData } })
                  } else if (formData.classification === 'Graduate at UMAK (HSU/College/Graduate Studies Program)') {
                    navigate('/graduate-student-info', { state: { requesterData: formData } })
                  } else if (formData.classification === 'Former/Previous student at UMAK (HSU/College)') {
                    navigate('/former-student-info', { state: { requesterData: formData } })
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

export default RequesterInfoPage
