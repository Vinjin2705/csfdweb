import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function EncodeViolationPage() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    caseSeverity: '',
    caseViolation: '',
    fullName: '',
    studentNumber: '',
    college: '',
    email: '',
    sex: '',
    dateOfInfraction: '',
    attachments: null
  })

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

  const caseSeverityOptions = [
    'Minor',
    'Major',
    'Other'
  ]

  const minorViolations = [
    'Not wearing ID',
    'Not wearing prescribed school uniform',
    'Wearing of incomplete uniform',
    'Cross Dressing (for gays/lesbians)',
    'Wearing non-prescribed shoes',
    'Wearing of slippers',
    'Wearing of miniskirts and shorts',
    'Make-Up (for males)',
    'Exhibiting rough behavior',
    'Using of vulgar, abusive or obscene language',
    'Loitering',
    'Littering',
    'Careless or unauthorized use of school property',
    'Hair Color',
    'Unauthorized posting of announcements, posters and notices in bulletin boards and the like',
    'Violation of traffic rules along J.P Rizal and inside the campus (Jaywalking)',
    'Male: Earrings, cap inside the classrooms/offices, torn jeans, untidy hair, make-up and cross dressing',
    'Female: Multiple earrings, sleeveless/string blouse, plunging/tube blouse, torn jeans/leggings/jeggings micro mini skirt/short-shorts, heavy make-up/noticeable dyed hair, rubber slippers and cross-dressing',
    'Students shall at all times be neat, clean and decent in their clothing; orderly, respectful, and courteous in their manners & 2.2.2 Students shall refrain from using bad language and from committing acts that are disrespectful. vulgar, or indecent, or which in any manner may cause or tend to disturb other students. faculty members, employees, or officials of the University.'
  ]

  const majorViolations = [
    'Writing/Putting up feet on tables, chairs and walls',
    'Gambling in any form',
    'Shouting or creating noise inside and outside the classroom',
    'Using or lending another person\'s ID/COR, lending of ID/COR',
    'Using fake IDs/CORs/Uniform Exemption ID/Temporary Pass',
    'Cheating during examination',
    'Oral defamation',
    'Vandalism',
    'Plagiarism',
    'Convictions by any court of law',
    'Immoral/and sex-related acts/abortion',
    'Serious physical injury',
    'Thefts of school properties or similar acts',
    'Negligence of Duty',
    'Grave Act of Disrespect and Conduct Unbecoming',
    'Serious Dishonesty and Conduct Unbecoming',
    'Students shall not damage any property of the University',
    'Illegal assembly aggravated by disturbances of the peace and order in the campus',
    'Possession/Distribution (in any form) of pornographic material, sexual objects within the University',
    'Possession of cigarettes and/or smoking within the school premises',
    'Tampering of student\'s ID for the purpose of illegal entry in the University or any place in the school premises',
    'Unauthorized possession of examination materials and documents during examination given by the University',
    'Public Display of Affection - portrayal of untoward behavior which tends to cause sexual excitement or vulgarity',
    'Entering the campus under the influence of wine, liquor, or any intoxicating beverages',
    'Having somebody else take an examination for another (both shall be liable)',
    'Bribing or receiving bribes from faculty members, administrators or non-teaching staff',
    'Misappropriation or embezzlement of organization/class\' fund',
    'Hazing of any kind inflicted on students by another student whether inside or outside the campus',
    'Involvement of any form of attack to another person such as rumble, fist fighting, punching, or armed combat',
    'Unauthorized collection (extortion) of money, checks or other instruments used as University collection purposes',
    'Carrying or possession of firearms, deadly weapons and explosives within the school premises',
    'Membership/recruitment to any unrecognized association/organization or fraternity/sorority',
    'Violation of Dangerous Drug Laws and other similar/related laws',
    'Gross Negligence, Serious Dishonesty and Conduct Unbecoming',
    'Indiscriminate use of all forms of musical instruments, megaphones, cameras, cellular phones, videos, and other game devices during class hours',
    'Portrayal of untoward behavior designed to cause sexual excitement and/or depiction or description of licentiousness or lewdness',
    'Grave act of disrespect that tends to malign the University officials, faculty members or administrative non-teaching staff',
    'Direct physical assault upon students, faculty members, admin or non-teaching staff, or any person of authority in the University',
    'Violation of Anti-Hazing Act of 2018 and/or recruitment of a student to join unrecognized association, organization, fraternity and the like',
    'Showing, exhibiting, display and/or exposing nude or half naked in any of the following forms/modes (1. Print media ; 2. Broadcast ; 3. Others (films, movies, video, tape CDs, DVDs, Blue Ray, Smartphone and the like)',
    'Forging, falsifying or tampering of any academic or official records or documents; making a false statement of any material fact; practicing any deception or fraud in connection with his/her admission, registration, examination, enrolment or graduation',
    'Actions which tend to dishonor, humiliate, embarrass, discredit or contempt, use the name of the University in an unrecognized organization or association, and integrity of the institution, administrator, faculty, staff, employee, and students'
  ]

  const otherViolations = [
    'Faculty Evaluation',
    'UMak-Scan-to-Pay/Late Payment',
    'Faculty Evaluation and Final Permit Application',
    'Faculty Evaluation and UMak-Scan-to-Pay',
    'Wearing of Unauthorized Lanyards and the like (Unofficial)',
    'UMak Scan to Pay, Final Permit Application',
    'Faculty Evaluation, Final Permit Application and UMak-Scan-to-Pay',
    'Wearing of t-shirts/blouses, I.D laces, necklace, bracelets, anklet and knuckles with unrecognized fraternities/sororities insignia (Unofficial)'
  ]

  const getViolationOptions = () => {
    switch (formData.caseSeverity) {
      case 'Minor':
        return minorViolations
      case 'Major':
        return majorViolations
      case 'Other':
        return otherViolations
      default:
        return []
    }
  }

  const collegeOptions = [
'College of Business and FInancial Management',
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, attachments: files[0] }))
    }
  }

  const handleSave = () => {
    // Create violation record
    const newViolation = {
      id: Date.now(),
      studentNumber: formData.studentNumber,
      sex: formData.sex?.toUpperCase() || '',
      studentName: formData.fullName,
      infractions: formData.caseViolation,
      receivedDate: formData.dateOfInfraction ? new Date(formData.dateOfInfraction).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'First Offense',
      college: formData.college,
      email: formData.email,
      caseSeverity: formData.caseSeverity,
      attachments: formData.attachments?.name || null
    }
    
    // Navigate to disciplinary records with the new violation
    navigate('/disciplinary-records', { state: { newViolation } })
  }

  const handleCancel = () => {
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
            <p className="text-xl font-bold">ENCODE VIOLATION</p>
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
      <div className="px-8 py-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#111c4e' }}>Violation</h1>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Case Severity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Case Severity <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.caseSeverity}
                onChange={(e) => handleInputChange('caseSeverity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Choose Severity</option>
                {caseSeverityOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Case Violation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Case Violation <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.caseViolation}
                onChange={(e) => handleInputChange('caseViolation', e.target.value)}
                disabled={!formData.caseSeverity}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">{formData.caseSeverity ? 'Choose Case Violation' : 'Select Case Severity first'}</option>
                {getViolationOptions().map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter the full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Student Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.studentNumber}
                onChange={(e) => handleInputChange('studentNumber', e.target.value)}
                placeholder="Please provide the details"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* College/Institute */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                College/Institute <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.college}
                onChange={(e) => handleInputChange('college', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select the college/institute</option>
                {collegeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* UMaK Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                UMaK Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter the UMaK email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sex */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sex <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.sex}
                onChange={(e) => handleInputChange('sex', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Enter the sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date of Infraction */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Infraction <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.dateOfInfraction}
                onChange={(e) => handleInputChange('dateOfInfraction', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Attachments */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attachments (Optional)
            </label>
            <div 
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer"
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
              <p className="text-xs text-gray-400 mt-1">Supported: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
              {formData.attachments && (
                <p className="text-xs text-blue-600 mt-2">Selected: {formData.attachments.name}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleSave}
              className="px-12 py-3 rounded-lg text-sm font-bold text-gray-900 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#ffc400' }}
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-12 py-3 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#111c4e' }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Menu from Right */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{backgroundColor: '#111c4e'}}
      >
        {/* Close Button */}
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

        {/* Menu Items */}
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

          {/* Logout Button */}
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

      {/* Footer */}
      <footer 
        className="text-white px-12 py-10 mt-8"
        style={{ backgroundColor: '#3d3d3d' }}
      >
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
    </div>
  )
}

export default EncodeViolationPage
