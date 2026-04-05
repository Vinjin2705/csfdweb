import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function AdminEncodeComplaintPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Complainant State
  const [mainComplainant, setMainComplainant] = useState({
    givenName: '',
    surname: '',
    middleName: '',
    extensionName: '',
    sex: '',
    studentNumber: '',
    college: '',
    email: '',
    yearLevel: ''
  })

  const [coComplainants, setCoComplainants] = useState([])

  // Respondent State
  const [mainRespondent, setMainRespondent] = useState({
    givenName: '',
    surname: '',
    middleName: '',
    extensionName: '',
    sex: '',
    studentNumber: '',
    college: '',
    email: '',
    yearLevel: ''
  })

  const [coRespondents, setCoRespondents] = useState([])

  // Complaint Details
  const [complaintDetails, setComplaintDetails] = useState({
    subject: '',
    category: 'minor',
    description: '',
    dateOfIncident: '',
    timeOfIncident: '',
    location: '',
    witnesses: '',
    attachments: null
  })

  const [errors, setErrors] = useState({})

  const menuItems = [
    { label: 'HOME', path: '/admin-dashboard' },
    { label: 'GOOD MORAL REQUEST', path: '/admin/good-moral' },
    { label: 'UNIFORM EXEMPTION REQUEST', path: '/uniform-exemption-admin' },
    { label: 'CHILD ADMISSION REQUEST', path: '/child-clearance' },
    { label: 'CROSS-DRESSING REQUEST', path: '/cross-dressing' },
    { label: 'COMPLAINT', path: '/complaint' },
    { label: 'DISCIPLINARY RECORDS', path: '/disciplinary-records' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQs', path: '/faqs' }
  ]

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

  const categoryOptions = [
    { value: 'minor', label: 'Minor Offense' },
    { value: 'major', label: 'Major Offense' },
    { value: 'others', label: 'Other Offense' }
  ]

  // Complainant handlers
  const handleMainComplainantChange = (field, value) => {
    setMainComplainant(prev => ({ ...prev, [field]: value }))
    if (errors[`complainant_${field}`]) {
      setErrors(prev => ({ ...prev, [`complainant_${field}`]: '' }))
    }
  }

  const addCoComplainant = () => {
    if (coComplainants.length < 5) {
      setCoComplainants([...coComplainants, {
        givenName: '',
        surname: '',
        middleName: '',
        extensionName: '',
        sex: '',
        studentNumber: '',
        college: '',
        email: '',
        yearLevel: ''
      }])
    }
  }

  const removeCoComplainant = (index) => {
    setCoComplainants(coComplainants.filter((_, i) => i !== index))
  }

  const handleCoComplainantChange = (index, field, value) => {
    const updated = [...coComplainants]
    updated[index][field] = value
    setCoComplainants(updated)
  }

  // Respondent handlers
  const handleMainRespondentChange = (field, value) => {
    setMainRespondent(prev => ({ ...prev, [field]: value }))
    if (errors[`respondent_${field}`]) {
      setErrors(prev => ({ ...prev, [`respondent_${field}`]: '' }))
    }
  }

  const addCoRespondent = () => {
    if (coRespondents.length < 5) {
      setCoRespondents([...coRespondents, {
        givenName: '',
        surname: '',
        middleName: '',
        extensionName: '',
        sex: '',
        studentNumber: '',
        college: '',
        email: '',
        yearLevel: ''
      }])
    }
  }

  const removeCoRespondent = (index) => {
    setCoRespondents(coRespondents.filter((_, i) => i !== index))
  }

  const handleCoRespondentChange = (index, field, value) => {
    const updated = [...coRespondents]
    updated[index][field] = value
    setCoRespondents(updated)
  }

  // Complaint details handlers
  const handleComplaintChange = (field, value) => {
    setComplaintDetails(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setComplaintDetails(prev => ({ ...prev, attachments: files[0] }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate main complainant
    if (!mainComplainant.givenName) newErrors.complainant_givenName = 'Required'
    if (!mainComplainant.surname) newErrors.complainant_surname = 'Required'
    if (!mainComplainant.sex) newErrors.complainant_sex = 'Required'
    if (!mainComplainant.studentNumber) newErrors.complainant_studentNumber = 'Required'
    if (!mainComplainant.college) newErrors.complainant_college = 'Required'
    if (!mainComplainant.email) newErrors.complainant_email = 'Required'
    if (!mainComplainant.yearLevel) newErrors.complainant_yearLevel = 'Required'

    // Validate main respondent
    if (!mainRespondent.givenName) newErrors.respondent_givenName = 'Required'
    if (!mainRespondent.surname) newErrors.respondent_surname = 'Required'
    if (!mainRespondent.sex) newErrors.respondent_sex = 'Required'
    if (!mainRespondent.studentNumber) newErrors.respondent_studentNumber = 'Required'
    if (!mainRespondent.college) newErrors.respondent_college = 'Required'
    if (!mainRespondent.email) newErrors.respondent_email = 'Required'
    if (!mainRespondent.yearLevel) newErrors.respondent_yearLevel = 'Required'

    // Validate complaint details
    if (!complaintDetails.subject) newErrors.subject = 'Required'
    if (!complaintDetails.description) newErrors.description = 'Required'
    if (!complaintDetails.dateOfIncident) newErrors.dateOfIncident = 'Required'
    if (!complaintDetails.location) newErrors.location = 'Required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (!validateForm()) {
      return
    }

    // Create complaint record
    const newComplaint = {
      id: Date.now(),
      complaintNo: `2024-${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`,
      subject: complaintDetails.subject,
      category: complaintDetails.category,
      complainantName: `${mainComplainant.givenName} ${mainComplainant.surname}`,
      college: mainComplainant.college,
      dateFiled: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'pending',
      mainComplainant,
      coComplainants,
      mainRespondent,
      coRespondents,
      complaintDetails,
      versionHistory: [
        { id: 1, type: 'Original', date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), modified: '' }
      ]
    }

    // Navigate to complaint page with the new complaint
    navigate('/complaint', { state: { newComplaint } })
  }

  const handleCancel = () => {
    setShowCancelModal(true)
  }

  const confirmCancel = () => {
    navigate('/complaint')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav 
        className="px-8 py-4 flex items-center justify-between sticky top-0 z-30"
        style={{ backgroundColor: '#111c4e' }}
      >
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-xs opacity-80">Center for Student Formation and Discipline</p>
            <p className="text-xl font-bold">ADMIN - ENCODE COMPLAINT</p>
          </div>
        </div>
        
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Main Content */}
      <div className="px-8 py-8 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#111c4e' }}>
          Encode Complaint
        </h1>

        <div className="space-y-8">
          {/* Complainant Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: '#111c4e' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#111c4e' }}>1</div>
              Complainant Information
            </h2>

            {/* Main Complainant */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Given Name *</label>
                <input
                  type="text"
                  value={mainComplainant.givenName}
                  onChange={(e) => handleMainComplainantChange('givenName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.complainant_givenName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter given name"
                />
                {errors.complainant_givenName && <p className="text-red-500 text-xs mt-1">{errors.complainant_givenName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Surname *</label>
                <input
                  type="text"
                  value={mainComplainant.surname}
                  onChange={(e) => handleMainComplainantChange('surname', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.complainant_surname ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter surname"
                />
                {errors.complainant_surname && <p className="text-red-500 text-xs mt-1">{errors.complainant_surname}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                <input
                  type="text"
                  value={mainComplainant.middleName}
                  onChange={(e) => handleMainComplainantChange('middleName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Enter middle name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Extension Name</label>
                <input
                  type="text"
                  value={mainComplainant.extensionName}
                  onChange={(e) => handleMainComplainantChange('extensionName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Jr., Sr., III, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sex *</label>
                <select
                  value={mainComplainant.sex}
                  onChange={(e) => handleMainComplainantChange('sex', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.complainant_sex ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select sex</option>
                  {sexOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.complainant_sex && <p className="text-red-500 text-xs mt-1">{errors.complainant_sex}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Number *</label>
                <input
                  type="text"
                  value={mainComplainant.studentNumber}
                  onChange={(e) => handleMainComplainantChange('studentNumber', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.complainant_studentNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="K12042424"
                />
                {errors.complainant_studentNumber && <p className="text-red-500 text-xs mt-1">{errors.complainant_studentNumber}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College *</label>
                <select
                  value={mainComplainant.college}
                  onChange={(e) => handleMainComplainantChange('college', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.complainant_college ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select college</option>
                  {collegeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.complainant_college && <p className="text-red-500 text-xs mt-1">{errors.complainant_college}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year Level *</label>
                <select
                  value={mainComplainant.yearLevel}
                  onChange={(e) => handleMainComplainantChange('yearLevel', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.complainant_yearLevel ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select year level</option>
                  {yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.complainant_yearLevel && <p className="text-red-500 text-xs mt-1">{errors.complainant_yearLevel}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">UMak Email Address *</label>
              <input
                type="email"
                value={mainComplainant.email}
                onChange={(e) => handleMainComplainantChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm max-w-md ${errors.complainant_email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="student@umak.edu.ph"
              />
              {errors.complainant_email && <p className="text-red-500 text-xs mt-1">{errors.complainant_email}</p>}
            </div>

            {/* Co-Complainants */}
            {coComplainants.map((co, index) => (
              <div key={index} className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold text-gray-600">Co-Complainant #{index + 1}</h3>
                  <button
                    onClick={() => removeCoComplainant(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Given Name</label>
                    <input
                      type="text"
                      value={co.givenName}
                      onChange={(e) => handleCoComplainantChange(index, 'givenName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter given name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Surname</label>
                    <input
                      type="text"
                      value={co.surname}
                      onChange={(e) => handleCoComplainantChange(index, 'surname', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter surname"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Sex</label>
                    <select
                      value={co.sex}
                      onChange={(e) => handleCoComplainantChange(index, 'sex', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="">Select</option>
                      {sexOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Student Number</label>
                    <input
                      type="text"
                      value={co.studentNumber}
                      onChange={(e) => handleCoComplainantChange(index, 'studentNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="K12042424"
                    />
                  </div>
                </div>
              </div>
            ))}

            {coComplainants.length < 5 && (
              <button
                onClick={addCoComplainant}
                className="mt-4 px-4 py-2 text-sm font-medium rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
              >
                + Add Co-Complainant
              </button>
            )}
          </div>

          {/* Respondent Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: '#111c4e' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#dc2626' }}>2</div>
              Respondent Information
            </h2>

            {/* Main Respondent */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Given Name *</label>
                <input
                  type="text"
                  value={mainRespondent.givenName}
                  onChange={(e) => handleMainRespondentChange('givenName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.respondent_givenName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter given name"
                />
                {errors.respondent_givenName && <p className="text-red-500 text-xs mt-1">{errors.respondent_givenName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Surname *</label>
                <input
                  type="text"
                  value={mainRespondent.surname}
                  onChange={(e) => handleMainRespondentChange('surname', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.respondent_surname ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter surname"
                />
                {errors.respondent_surname && <p className="text-red-500 text-xs mt-1">{errors.respondent_surname}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                <input
                  type="text"
                  value={mainRespondent.middleName}
                  onChange={(e) => handleMainRespondentChange('middleName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Enter middle name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Extension Name</label>
                <input
                  type="text"
                  value={mainRespondent.extensionName}
                  onChange={(e) => handleMainRespondentChange('extensionName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Jr., Sr., III, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sex *</label>
                <select
                  value={mainRespondent.sex}
                  onChange={(e) => handleMainRespondentChange('sex', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.respondent_sex ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select sex</option>
                  {sexOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.respondent_sex && <p className="text-red-500 text-xs mt-1">{errors.respondent_sex}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Number *</label>
                <input
                  type="text"
                  value={mainRespondent.studentNumber}
                  onChange={(e) => handleMainRespondentChange('studentNumber', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.respondent_studentNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="K12042424"
                />
                {errors.respondent_studentNumber && <p className="text-red-500 text-xs mt-1">{errors.respondent_studentNumber}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College *</label>
                <select
                  value={mainRespondent.college}
                  onChange={(e) => handleMainRespondentChange('college', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.respondent_college ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select college</option>
                  {collegeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.respondent_college && <p className="text-red-500 text-xs mt-1">{errors.respondent_college}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year Level *</label>
                <select
                  value={mainRespondent.yearLevel}
                  onChange={(e) => handleMainRespondentChange('yearLevel', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.respondent_yearLevel ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select year level</option>
                  {yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.respondent_yearLevel && <p className="text-red-500 text-xs mt-1">{errors.respondent_yearLevel}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">UMak Email Address *</label>
              <input
                type="email"
                value={mainRespondent.email}
                onChange={(e) => handleMainRespondentChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm max-w-md ${errors.respondent_email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="student@umak.edu.ph"
              />
              {errors.respondent_email && <p className="text-red-500 text-xs mt-1">{errors.respondent_email}</p>}
            </div>

            {/* Co-Respondents */}
            {coRespondents.map((co, index) => (
              <div key={index} className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold text-gray-600">Co-Respondent #{index + 1}</h3>
                  <button
                    onClick={() => removeCoRespondent(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Given Name</label>
                    <input
                      type="text"
                      value={co.givenName}
                      onChange={(e) => handleCoRespondentChange(index, 'givenName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter given name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Surname</label>
                    <input
                      type="text"
                      value={co.surname}
                      onChange={(e) => handleCoRespondentChange(index, 'surname', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter surname"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Sex</label>
                    <select
                      value={co.sex}
                      onChange={(e) => handleCoRespondentChange(index, 'sex', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="">Select</option>
                      {sexOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Student Number</label>
                    <input
                      type="text"
                      value={co.studentNumber}
                      onChange={(e) => handleCoRespondentChange(index, 'studentNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="K12042424"
                    />
                  </div>
                </div>
              </div>
            ))}

            {coRespondents.length < 5 && (
              <button
                onClick={addCoRespondent}
                className="mt-4 px-4 py-2 text-sm font-medium rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
              >
                + Add Co-Respondent
              </button>
            )}
          </div>

          {/* Complaint Details Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: '#111c4e' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#16a34a' }}>3</div>
              Complaint Details
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject/Title *</label>
                <input
                  type="text"
                  value={complaintDetails.subject}
                  onChange={(e) => handleComplaintChange('subject', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter complaint subject"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select
                  value={complaintDetails.category}
                  onChange={(e) => handleComplaintChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  {categoryOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                value={complaintDetails.description}
                onChange={(e) => handleComplaintChange('description', e.target.value)}
                rows={4}
                className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Describe the complaint in detail..."
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Incident *</label>
                <input
                  type="date"
                  value={complaintDetails.dateOfIncident}
                  onChange={(e) => handleComplaintChange('dateOfIncident', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.dateOfIncident ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.dateOfIncident && <p className="text-red-500 text-xs mt-1">{errors.dateOfIncident}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time of Incident</label>
                <input
                  type="time"
                  value={complaintDetails.timeOfIncident}
                  onChange={(e) => handleComplaintChange('timeOfIncident', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input
                  type="text"
                  value={complaintDetails.location}
                  onChange={(e) => handleComplaintChange('location', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Where did it happen?"
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Witnesses (if any)</label>
              <input
                type="text"
                value={complaintDetails.witnesses}
                onChange={(e) => handleComplaintChange('witnesses', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="List any witnesses to the incident"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Attachments (Optional)</label>
              <div 
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => document.getElementById('file-upload').click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <p className="text-sm text-gray-600">Click to upload</p>
                <p className="text-xs text-gray-400 mt-1">Supported: PDF, DOC, DOCX, JPG, PNG</p>
                {complaintDetails.attachments && (
                  <p className="text-xs text-blue-600 mt-2">Selected: {complaintDetails.attachments.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleCancel}
              className="px-12 py-3 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#dc2626' }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-12 py-3 rounded-lg text-sm font-bold text-gray-900 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#ffc400' }}
            >
              Save Complaint
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Menu from Right */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{backgroundColor: '#111c4e'}}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white rotate-45 translate-y-2"></span>
              <span className="w-full h-0.5 bg-white opacity-0"></span>
              <span className="w-full h-0.5 bg-white -rotate-45 -translate-y-2"></span>
            </div>
          </button>
        </div>
        <div className="px-6 py-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base"
              onClick={() => {
                navigate(item.path)
                setIsMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base"
            onClick={() => {
              navigate('/login')
              setIsMenuOpen(false)
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Overlay for closing menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="rounded-xl shadow-2xl p-8 max-w-md w-full mx-4" style={{backgroundColor: '#000B3C'}}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white">
                Cancel Complaint?
              </h3>
            </div>
            <div className="text-center mb-8">
              <p className="text-white text-base">
                All entered information will be lost. Are you sure?
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <button
                className="px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#dc2626', color: 'white'}}
                onClick={confirmCancel}
              >
                Yes, Cancel
              </button>
              <button
                className="px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#1F9E55', color: 'white'}}
                onClick={() => setShowCancelModal(false)}
              >
                No, Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#10b981'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Complaint Saved!</h3>
            <p className="text-gray-600 mb-6">The complaint has been successfully encoded and saved.</p>
            <button
              className="px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#ffc400', color: '#111c4e'}}
              onClick={() => navigate('/complaint')}
            >
              Go to Complaints
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-white px-12 py-10 mt-8" style={{ backgroundColor: '#3d3d3d' }}>
        <div className="max-w-6xl mx-auto flex flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-5" style={{color: '#ffc400'}}>Contact us</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs">📞</span>
              <span>8883-1875</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center gap-4">
            <img src={footerUmakLogo} alt="University of Makati" className="w-20 h-20 rounded-full object-cover" />
            <img src={footerCsfdLogo} alt="CSFD" className="w-20 h-20 rounded-full object-cover" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AdminEncodeComplaintPage
