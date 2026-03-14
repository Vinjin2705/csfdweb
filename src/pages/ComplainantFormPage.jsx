import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'

function ComplainantFormPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const savedData = location.state?.formData || {}
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showCoComplainant, setShowCoComplainant] = useState(false)
  const [errors, setErrors] = useState({})

  const [mainComplainant, setMainComplainant] = useState({
    givenName: savedData.mainComplainant?.givenName || '',
    surname: savedData.mainComplainant?.surname || '',
    middleName: savedData.mainComplainant?.middleName || '',
    extensionName: savedData.mainComplainant?.extensionName || '',
    sex: savedData.mainComplainant?.sex || '',
    studentNumber: savedData.mainComplainant?.studentNumber || '',
    college: savedData.mainComplainant?.college || '',
    email: savedData.mainComplainant?.email || '',
    yearLevel: savedData.mainComplainant?.yearLevel || ''
  })

  const [coComplainants, setCoComplainants] = useState(savedData.coComplainants || [])
  const [coComplainantDropdowns, setCoComplainantDropdowns] = useState([])
  const MAX_CO_COMPLAINANTS = 5
  const [showSexDropdownMain, setShowSexDropdownMain] = useState(false)
  const [showCollegeDropdownMain, setShowCollegeDropdownMain] = useState(false)
  const [showYearDropdownMain, setShowYearDropdownMain] = useState(false)
  const [showSexDropdownCo, setShowSexDropdownCo] = useState(false)
  const [showCollegeDropdownCo, setShowCollegeDropdownCo] = useState(false)
  const [showYearDropdownCo, setShowYearDropdownCo] = useState(false)

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

  const handleMainChange = (field, value) => {
    setMainComplainant(prev => ({ ...prev, [field]: value }))
    if (errors[`main_${field}`]) {
      setErrors(prev => ({ ...prev, [`main_${field}`]: '' }))
    }
  }

  const addCoComplainant = () => {
    if (coComplainants.length < MAX_CO_COMPLAINANTS) {
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
      setCoComplainantDropdowns([...coComplainantDropdowns, {
        showSexDropdown: false,
        showCollegeDropdown: false,
        showYearDropdown: false
      }])
    }
  }

  const updateCoComplainant = (index, field, value) => {
    const updated = [...coComplainants]
    updated[index] = { ...updated[index], [field]: value }
    setCoComplainants(updated)
    if (errors[`co${index}_${field}`]) {
      setErrors(prev => ({ ...prev, [`co${index}_${field}`]: '' }))
    }
  }

  const updateCoDropdown = (index, field, value) => {
    const updated = [...coComplainantDropdowns]
    updated[index] = { ...updated[index], [field]: value }
    setCoComplainantDropdowns(updated)
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate Main Complainant
    if (!mainComplainant.givenName.trim()) newErrors.main_givenName = 'Given name is required'
    if (!mainComplainant.surname.trim()) newErrors.main_surname = 'Surname is required'
    if (!mainComplainant.sex) newErrors.main_sex = 'Sex is required'
    if (!mainComplainant.studentNumber.trim()) newErrors.main_studentNumber = 'Student number is required'
    if (!mainComplainant.college) newErrors.main_college = 'College is required'
    if (!mainComplainant.email.trim()) {
      newErrors.main_email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mainComplainant.email)) {
      newErrors.main_email = 'Please enter a valid email'
    }
    if (!mainComplainant.yearLevel) newErrors.main_yearLevel = 'Year level is required'

    // Validate Co-Complainants (for each added)
    coComplainants.forEach((co, index) => {
      if (!co.givenName.trim()) newErrors[`co${index}_givenName`] = 'Given name is required'
      if (!co.surname.trim()) newErrors[`co${index}_surname`] = 'Surname is required'
      if (!co.sex) newErrors[`co${index}_sex`] = 'Sex is required'
      if (!co.studentNumber.trim()) newErrors[`co${index}_studentNumber`] = 'Student number is required'
      if (!co.college) newErrors[`co${index}_college`] = 'College is required'
      if (!co.email.trim()) {
        newErrors[`co${index}_email`] = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(co.email)) {
        newErrors[`co${index}_email`] = 'Please enter a valid email'
      }
      if (!co.yearLevel) newErrors[`co${index}_yearLevel`] = 'Year level is required'
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const renderComplainantSection = (data, setData, prefix, showSexDropdown, setShowSexDropdown, showCollegeDropdown, setShowCollegeDropdown, showYearDropdown, setShowYearDropdown, isCo = false) => (
    <div className="border-2 rounded-xl p-6 mb-6" style={{borderColor: '#111c4e', backgroundColor: 'white'}}>
      <h3 className="text-lg font-bold mb-4" style={{color: '#3d3d3d'}}>
        {isCo ? 'CO-COMPLAINANT' : 'MAIN COMPLAINANT'}
      </h3>

      <div className="space-y-4">
        {/* Row 1: GIVEN NAME, SURNAME, MIDDLE NAME */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              GIVEN NAME<span style={{color: '#dc2626'}}>*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-gray-50"
              style={{borderColor: errors[`${prefix}_givenName`] ? '#dc2626' : '#111c4e'}}
              placeholder="Enter your given name"
              value={data.givenName}
              onChange={(e) => setData('givenName', e.target.value)}
            />
            {errors[`${prefix}_givenName`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_givenName`]}</p>}
          </div>

          <div>
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              SURNAME<span style={{color: '#dc2626'}}>*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-gray-50"
              style={{borderColor: errors[`${prefix}_surname`] ? '#dc2626' : '#111c4e'}}
              placeholder="Enter your surname"
              value={data.surname}
              onChange={(e) => setData('surname', e.target.value)}
            />
            {errors[`${prefix}_surname`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_surname`]}</p>}
          </div>

          <div>
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              MIDDLE NAME
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-gray-50"
              style={{borderColor: '#111c4e'}}
              placeholder="Enter your middle name"
              value={data.middleName}
              onChange={(e) => setData('middleName', e.target.value)}
            />
          </div>
        </div>

        {/* Row 2: EXTENSION NAME, SEX, UMAK STUDENT NUMBER */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              EXTENSION NAME
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-gray-50"
              style={{borderColor: '#111c4e'}}
              placeholder="Enter your extension name"
              value={data.extensionName}
              onChange={(e) => setData('extensionName', e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              SEX<span style={{color: '#dc2626'}}>*</span>
            </label>
            <button
              className="w-full px-3 py-2 border-2 rounded-lg text-left flex justify-between items-center text-sm bg-gray-50"
              style={{borderColor: errors[`${prefix}_sex`] ? '#dc2626' : '#111c4e'}}
              onClick={() => setShowSexDropdown(!showSexDropdown)}
            >
              <span style={{color: data.sex ? '#111c4e' : '#9ca3af'}}>
                {data.sex || 'Select your sex'}
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
                      setData('sex', option)
                      setShowSexDropdown(false)
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
            {errors[`${prefix}_sex`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_sex`]}</p>}
          </div>

          <div>
            <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
              UMAK STUDENT NUMBER<span style={{color: '#dc2626'}}>*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-gray-50"
              style={{borderColor: errors[`${prefix}_studentNumber`] ? '#dc2626' : '#111c4e'}}
              placeholder="Enter your student number"
              value={data.studentNumber}
              onChange={(e) => setData('studentNumber', e.target.value)}
            />
            {errors[`${prefix}_studentNumber`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_studentNumber`]}</p>}
          </div>
        </div>

        {/* COLLEGE/INSTITUTE - Full Width */}
        <div className="relative">
          <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
            COLLEGE/INSTITUTE<span style={{color: '#dc2626'}}>*</span>
          </label>
          <button
            className="w-full px-3 py-2 border-2 rounded-lg text-left flex justify-between items-center text-sm bg-gray-50"
            style={{borderColor: errors[`${prefix}_college`] ? '#dc2626' : '#111c4e'}}
            onClick={() => setShowCollegeDropdown(!showCollegeDropdown)}
          >
            <span className="truncate" style={{color: data.college ? '#111c4e' : '#9ca3af'}}>
              {data.college || 'Select your college/institute'}
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
                    setData('college', option)
                    setShowCollegeDropdown(false)
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          {errors[`${prefix}_college`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_college`]}</p>}
        </div>

        {/* EMAIL ADDRESS - Full Width */}
        <div>
          <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
            EMAIL ADDRESS<span style={{color: '#dc2626'}}>*</span>
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm bg-gray-50"
            style={{borderColor: errors[`${prefix}_email`] ? '#dc2626' : '#111c4e'}}
            placeholder="Enter your email address"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
          />
          {errors[`${prefix}_email`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_email`]}</p>}
        </div>

        {/* YEAR/GRADE LEVEL - Full Width */}
        <div className="relative">
          <label className="block font-bold text-xs mb-1" style={{color: '#111c4e'}}>
            YEAR/GRADE LEVEL<span style={{color: '#dc2626'}}>*</span>
          </label>
          <button
            className="w-full px-3 py-2 border-2 rounded-lg text-left flex justify-between items-center text-sm bg-gray-50"
            style={{borderColor: errors[`${prefix}_yearLevel`] ? '#dc2626' : '#111c4e'}}
            onClick={() => setShowYearDropdown(!showYearDropdown)}
          >
            <span style={{color: data.yearLevel ? '#111c4e' : '#9ca3af'}}>
              {data.yearLevel || 'Select your year/grade level'}
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
                    setData('yearLevel', option)
                    setShowYearDropdown(false)
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          {errors[`${prefix}_yearLevel`] && <p className="text-xs mt-1" style={{color: '#dc2626'}}>{errors[`${prefix}_yearLevel`]}</p>}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Form Section */}
      <section className="px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>COMPLAINANT</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION</h2>
          </div>

          {/* Main Complainant Section */}
          {renderComplainantSection(
            mainComplainant,
            handleMainChange,
            'main',
            showSexDropdownMain,
            setShowSexDropdownMain,
            showCollegeDropdownMain,
            setShowCollegeDropdownMain,
            showYearDropdownMain,
            setShowYearDropdownMain,
            false
          )}

          {/* Co-Complainant Sections */}
          {coComplainants.map((co, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold" style={{color: '#111c4e'}}>CO-COMPLAINANT {index + 1}</h3>
                <button
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                  onClick={() => {
                    const updated = coComplainants.filter((_, i) => i !== index)
                    setCoComplainants(updated)
                    const updatedDropdowns = coComplainantDropdowns.filter((_, i) => i !== index)
                    setCoComplainantDropdowns(updatedDropdowns)
                  }}
                >
                  Remove
                </button>
              </div>
              {renderComplainantSection(
                co,
                (field, value) => updateCoComplainant(index, field, value),
                `co${index}`,
                coComplainantDropdowns[index]?.showSexDropdown || false,
                (val) => updateCoDropdown(index, 'showSexDropdown', val),
                coComplainantDropdowns[index]?.showCollegeDropdown || false,
                (val) => updateCoDropdown(index, 'showCollegeDropdown', val),
                coComplainantDropdowns[index]?.showYearDropdown || false,
                (val) => updateCoDropdown(index, 'showYearDropdown', val),
                true
              )}
            </div>
          ))}

          {/* Add Complainant Button */}
          <div className="flex justify-center mb-8">
            {coComplainants.length < MAX_CO_COMPLAINANTS ? (
              <button
                className="px-6 py-3 rounded-lg border-2 font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
                style={{borderColor: '#9ca3af', color: '#6b7280'}}
                onClick={addCoComplainant}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add complainant ({coComplainants.length}/{MAX_CO_COMPLAINANTS})
              </button>
            ) : (
              <p className="text-sm text-gray-500">Maximum of {MAX_CO_COMPLAINANTS} co-complainants reached</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/complaint-info', { state: { formData: { mainComplainant, coComplainants } } })}
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
                  navigate('/respondent-form', { state: { formData: { mainComplainant, coComplainants, coComplainantCount: coComplainants.length } } })
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

export default ComplainantFormPage
