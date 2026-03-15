import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function UniformExemptionStudentInfoPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { formData: initialFormData } = location.state || {}

  const [formData, setFormData] = useState({
    givenName: '',
    surname: '',
    middleName: '',
    extensionName: '',
    sex: '',
    studentNumber: '',
    college: '',
    email: '',
    jobTitle: '',
    yearLevel: '',
    corFile: null,
    schoolIdFile: null,
    employmentCertFile: null,
    ...initialFormData
  })

  const [errors, setErrors] = useState({})
  const [showCancelModal, setShowCancelModal] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.givenName.trim()) newErrors.givenName = 'Given name is required'
    if (!formData.surname.trim()) newErrors.surname = 'Surname is required'
    if (!formData.sex) newErrors.sex = 'Sex is required'
    if (!formData.studentNumber.trim()) newErrors.studentNumber = 'Student number is required'
    if (!formData.college.trim()) newErrors.college = 'College/Institute is required'
    if (!formData.email.trim()) newErrors.email = 'Email address is required'
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.yearLevel) newErrors.yearLevel = 'Year/Grade level is required'
    if (!formData.corFile) newErrors.corFile = 'COR is required'
    if (!formData.schoolIdFile) newErrors.schoolIdFile = 'School ID is required'
    if (!formData.employmentCertFile) newErrors.employmentCertFile = 'Certificate of Employment is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Content */}
      <div className="px-12 py-16 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2" style={{color: '#111c4e'}}>STUDENT</h1>
          <h2 className="text-2xl font-bold" style={{color: '#ffc400'}}>INFORMATION</h2>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Row 1: Given Name, Surname, Middle Name */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                GIVEN NAME<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.givenName}
                onChange={(e) => handleInputChange('givenName', e.target.value)}
                placeholder="Enter your given name"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.givenName ? '#dc2626' : '#111c4e'}}
              />
              {errors.givenName && <p className="text-sm text-red-600 mt-1">{errors.givenName}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                SURNAME<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
                placeholder="Enter your surname"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.surname ? '#dc2626' : '#111c4e'}}
              />
              {errors.surname && <p className="text-sm text-red-600 mt-1">{errors.surname}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                MIDDLE NAME
              </label>
              <input
                type="text"
                value={formData.middleName}
                onChange={(e) => handleInputChange('middleName', e.target.value)}
                placeholder="Enter your middle name"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: '#111c4e'}}
              />
            </div>
          </div>

          {/* Row 2: Extension Name, Sex, Student Number */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                EXTENSION NAME
              </label>
              <input
                type="text"
                value={formData.extensionName}
                onChange={(e) => handleInputChange('extensionName', e.target.value)}
                placeholder="Enter your extension name"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: '#111c4e'}}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                SEX<span className="text-red-500">*</span>
              </label>
              <select
                value={formData.sex}
                onChange={(e) => handleInputChange('sex', e.target.value)}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.sex ? '#dc2626' : '#111c4e'}}
              >
                <option value="">Select your sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.sex && <p className="text-sm text-red-600 mt-1">{errors.sex}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                UMAK STUDENT NUMBER<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.studentNumber}
                onChange={(e) => handleInputChange('studentNumber', e.target.value)}
                placeholder="Enter your student number"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.studentNumber ? '#dc2626' : '#111c4e'}}
              />
              {errors.studentNumber && <p className="text-sm text-red-600 mt-1">{errors.studentNumber}</p>}
            </div>
          </div>

          {/* Row 3: College/Institute */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
              COLLEGE/INSTITUTE<span className="text-red-500">*</span>
            </label>
            <select
              value={formData.college}
              onChange={(e) => handleInputChange('college', e.target.value)}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
              style={{borderColor: errors.college ? '#dc2626' : '#111c4e'}}
            >
              <option value="">Select your college/institute</option>
              <option value="CCIS">College of Computing and Information Sciences (CCIS)</option>
              <option value="CBM">College of Business Management (CBM)</option>
              <option value="COE">College of Engineering (COE)</option>
              <option value="CAS">College of Arts and Sciences (CAS)</option>
              <option value="COC">College of Communication (COC)</option>
              <option value="COD">College of Dentistry (COD)</option>
              <option value="COA">College of Accountancy (COA)</option>
            </select>
            {errors.college && <p className="text-sm text-red-600 mt-1">{errors.college}</p>}
          </div>

          {/* Row 4: Email, Job Title */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                EMAIL ADDRESS<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.email ? '#dc2626' : '#111c4e'}}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                JOB TITLE<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                placeholder="Enter your job"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                style={{borderColor: errors.jobTitle ? '#dc2626' : '#111c4e'}}
              />
              {errors.jobTitle && <p className="text-sm text-red-600 mt-1">{errors.jobTitle}</p>}
            </div>
          </div>

          {/* Row 5: Year/Grade Level */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
              YEAR/GRADE LEVEL<span className="text-red-500">*</span>
            </label>
            <select
              value={formData.yearLevel}
              onChange={(e) => handleInputChange('yearLevel', e.target.value)}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
              style={{borderColor: errors.yearLevel ? '#dc2626' : '#111c4e'}}
            >
              <option value="">Select your year/grade level</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              <option value="5th Year">5th Year</option>
            </select>
            {errors.yearLevel && <p className="text-sm text-red-600 mt-1">{errors.yearLevel}</p>}
          </div>

          {/* File Uploads */}
          <div className="space-y-6 mt-8">
            {/* COR Upload */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                REQUIREMENT/S<span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-600 mb-2">Upload a copy of your updated Certificate of Registration (COR). Upload it in PDF format.</p>
              <div
                className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById('cor-upload').click()}
              >
                <input
                  id="cor-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => handleFileChange('corFile', e.target.files[0])}
                />
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-500">Add/upload a file</p>
                {formData.corFile && (
                  <p className="text-sm text-green-600 mt-2">{formData.corFile.name}</p>
                )}
              </div>
              {errors.corFile && <p className="text-sm text-red-600 mt-1">{errors.corFile}</p>}
            </div>

            {/* School ID Upload */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                REQUIREMENT/S<span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-600 mb-2">Upload a copy of your School ID. Upload it in PDF format.</p>
              <div
                className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById('schoolid-upload').click()}
              >
                <input
                  id="schoolid-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => handleFileChange('schoolIdFile', e.target.files[0])}
                />
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-500">Add/upload a file</p>
                {formData.schoolIdFile && (
                  <p className="text-sm text-green-600 mt-2">{formData.schoolIdFile.name}</p>
                )}
              </div>
              {errors.schoolIdFile && <p className="text-sm text-red-600 mt-1">{errors.schoolIdFile}</p>}
            </div>

            {/* Certificate of Employment Upload */}
            <div>
              <label className="block text-sm font-bold mb-2" style={{color: '#111c4e'}}>
                REQUIREMENT/S<span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-600 mb-2">Upload a copy of your Certificate of Employment and ID. Upload it in PDF format.</p>
              <div
                className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById('employment-upload').click()}
              >
                <input
                  id="employment-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => handleFileChange('employmentCertFile', e.target.files[0])}
                />
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-500">Add/upload a file</p>
                {formData.employmentCertFile && (
                  <p className="text-sm text-green-600 mt-2">{formData.employmentCertFile.name}</p>
                )}
              </div>
              {errors.employmentCertFile && <p className="text-sm text-red-600 mt-1">{errors.employmentCertFile}</p>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb'}}
              onClick={() => navigate('/uniform-exemption-form', { state: { formData } })}
            >
              BACK
            </button>
            <button
              className="px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#dc2626'}}
              onClick={() => setShowCancelModal(true)}
            >
              CANCEL
            </button>
            <button
              className="px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#1F9E55'}}
              onClick={() => {
                if (validateForm()) {
                  navigate('/uniform-exemption-summary', { state: { formData } })
                }
              }}
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white px-12 py-10 mt-8" style={{backgroundColor: '#3d3d3d'}}>
        <div className="max-w-6xl mx-auto flex flex-row justify-between gap-8">
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
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For general concern</span>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For complaint concern</span>
              <div className="flex items-center gap-2">
                <span className="text-white">✉</span>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">umakpsd.umak.edu.ph</span>
              </div>
            </div>
          </div>
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
          <div className="flex-1 flex justify-center items-center gap-4">
            <img src={footerUmakLogo} alt="University of Makati" className="w-20 h-20 rounded-full object-cover" />
            <img src={footerCsfdLogo} alt="CSFD" className="w-20 h-20 rounded-full object-cover" />
          </div>
        </div>
      </footer>

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="rounded-xl shadow-2xl p-8 max-w-md w-full mx-4" style={{backgroundColor: '#000B3C'}}>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-black text-white">Are you sure you want to cancel?</h3>
            </div>
            <div className="text-center mb-8">
              <p className="text-white text-base">upon cancelling, the request will not be saved.</p>
            </div>
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

export default UniformExemptionStudentInfoPage
