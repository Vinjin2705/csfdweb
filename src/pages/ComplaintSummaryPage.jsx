import { useNavigate, useLocation } from 'react-router-dom'
import Navbar7 from '../components/navbars/Navbar7'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'
import cancelIcon from '../assets/icons/line-md_file-cancel-filled.png'
import thankYouIcon from '../assets/icons/thankyoucheck.png'
import { useState } from 'react'

function ComplaintSummaryPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const formData = location.state?.formData || {}
  const mainComplainant = formData.mainComplainant || {}
  const coComplainants = formData.coComplainants || []
  const mainRespondent = formData.mainRespondent || {}
  const coRespondents = formData.coRespondents || []
  
  // Complaint details
  const complaintTitle = formData.complaintTitle || ''
  const complaintCategory = formData.complaintCategory || ''
  const detailedDescription = formData.detailedDescription || ''
  const desiredOutcome = formData.desiredOutcome || ''
  const dateOfIncident = formData.dateOfIncident || ''
  const incidentLocation = formData.location || ''
  const isOngoing = formData.isOngoing || ''
  const witnessesPresent = formData.witnessesPresent || ''
  const previousReports = formData.previousReports || ''
  const supportingDocuments = formData.supportingDocuments || []

  const getFullName = (person) => {
    const parts = []
    if (person.givenName) parts.push(person.givenName)
    if (person.middleName) parts.push(person.middleName)
    if (person.surname) parts.push(person.surname)
    if (person.extensionName) parts.push(person.extensionName)
    return parts.join(' ') || 'Not provided'
  }

  const renderPersonSummary = (person, title) => (
    <div className="border-2 rounded-xl p-6 mb-6" style={{borderColor: '#111c4e', backgroundColor: '#f9f9f9'}}>
      <h3 className="text-xl font-bold text-center mb-4" style={{color: '#3d3d3d'}}>
        {title} <span style={{color: '#ffc400'}}>SUMMARY</span>
      </h3>

      <div className="space-y-3">
        {/* NAME and SEX */}
        <div className="flex justify-between items-start">
          <div>
            <span className="font-bold" style={{color: '#111c4e'}}>NAME: </span>
            <span style={{color: '#111c4e'}}>{getFullName(person)}</span>
          </div>
          <div>
            <span className="font-bold" style={{color: '#111c4e'}}>SEX: </span>
            <span style={{color: '#111c4e'}}>{person.sex || 'Not provided'}</span>
          </div>
        </div>

        {/* UMAK STUDENT NUMBER */}
        <div>
          <span className="font-bold" style={{color: '#111c4e'}}>UMAK STUDENT NUMBER: </span>
          <span style={{color: '#111c4e'}}>{person.studentNumber || 'Not provided'}</span>
        </div>

        {/* COLLEGE/INSTITUTE */}
        <div>
          <span className="font-bold" style={{color: '#111c4e'}}>COLLEGE/INSTITUTE: </span>
          <span style={{color: '#111c4e'}}>{person.college || 'Not provided'}</span>
        </div>

        {/* YEAR/GRADE LEVEL */}
        <div>
          <span className="font-bold" style={{color: '#111c4e'}}>YEAR/GRADE LEVEL: </span>
          <span style={{color: '#111c4e'}}>{person.yearLevel || 'Not provided'}</span>
        </div>

        {/* EMAIL ADDRESS */}
        <div>
          <span className="font-bold" style={{color: '#111c4e'}}>EMAIL ADDRESS: </span>
          <span style={{color: '#111c4e'}}>{person.email || 'Not provided'}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar7 Header */}
      <Navbar7 />

      {/* Information Summary Section */}
      <section className="px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black" style={{color: '#3d3d3d', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>COMPLAINT</h1>
            <h2 className="text-2xl font-black" style={{color: '#ffc400', fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>INFORMATION SUMMARY</h2>
          </div>

          {/* Complainant Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6" style={{color: '#3d3d3d'}}>
              COMPLAINANT <span style={{color: '#ffc400'}}>INFORMATION</span>
            </h3>
            
            {/* Main Complainant Summary */}
            {renderPersonSummary(mainComplainant, 'MAIN COMPLAINANT')}

            {/* Co-Complainant Summaries */}
            {coComplainants.map((co, index) => (
              <div key={index}>
                {renderPersonSummary(co, `CO-COMPLAINANT ${index + 1}`)}
              </div>
            ))}
          </div>

          {/* Respondent Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6" style={{color: '#3d3d3d'}}>
              RESPONDENT <span style={{color: '#ffc400'}}>INFORMATION</span>
            </h3>
            
            {/* Main Respondent Summary */}
            {renderPersonSummary(mainRespondent, 'MAIN RESPONDENT')}

            {/* Co-Respondent Summaries */}
            {coRespondents.map((co, index) => (
              <div key={index}>
                {renderPersonSummary(co, `CO-RESPONDENT ${index + 1}`)}
              </div>
            ))}
          </div>

          {/* Complaint Details Section */}
          <div className="border-2 rounded-xl p-6 mb-6" style={{borderColor: '#111c4e', backgroundColor: '#f9f9f9'}}>
            <h3 className="text-xl font-bold text-center mb-6" style={{color: '#3d3d3d'}}>
              COMPLAINT <span style={{color: '#ffc400'}}>DETAILS</span>
            </h3>

            <div className="space-y-4 text-sm">
              {/* COMPLAINT TITLE/SUBJECT */}
              <div className="flex">
                <span className="font-bold mr-2" style={{color: '#111c4e'}}>COMPLAINT TITLE/SUBJECT:</span>
                <span style={{color: '#111c4e'}}>{complaintTitle || '<<subject>>'}</span>
              </div>

              {/* COMPLAINT CATEGORY */}
              <div className="flex">
                <span className="font-bold mr-2" style={{color: '#111c4e'}}>COMPLAINT CATEGORY:</span>
                <span style={{color: '#111c4e'}}>{complaintCategory || '<<category>>'}</span>
              </div>

              {/* DESIRED OUTCOME/RESOLUTION */}
              <div className="flex">
                <span className="font-bold mr-2" style={{color: '#111c4e'}}>DESIRED OUTCOME/RESOLUTION:</span>
                <span style={{color: '#111c4e'}}>{desiredOutcome || '<<resolution>>'}</span>
              </div>

              {/* DATE OF INCIDENT and IS IT ON GOING */}
              <div className="flex justify-between">
                <div className="flex">
                  <span className="font-bold mr-2" style={{color: '#111c4e'}}>DATE OF INCIDENT:</span>
                  <span style={{color: '#111c4e'}}>{dateOfIncident || '<<incident>>'}</span>
                </div>
                <div className="flex">
                  <span className="font-bold mr-2" style={{color: '#111c4e'}}>IS IT ON GOING:</span>
                  <span style={{color: '#111c4e'}}>{isOngoing || '<<on_going>>'}</span>
                </div>
              </div>

              {/* LOCATION and PREVIOUS REPORTS */}
              <div className="flex justify-between">
                <div className="flex">
                  <span className="font-bold mr-2" style={{color: '#111c4e'}}>LOCATION:</span>
                  <span style={{color: '#111c4e'}}>{incidentLocation || '<<location>>'}</span>
                </div>
                <div className="flex">
                  <span className="font-bold mr-2" style={{color: '#111c4e'}}>PREVIOUS REPORTS:</span>
                  <span style={{color: '#111c4e'}}>{previousReports || '<<previous_report>>'}</span>
                </div>
              </div>

              {/* DETAILED DESCRIPTION */}
              <div>
                <span className="font-bold block mb-2" style={{color: '#111c4e'}}>DETAILED DESCRIPTION</span>
                <div className="border-2 rounded-lg p-4 bg-white min-h-[80px]" style={{borderColor: '#111c4e'}}>
                  <span style={{color: '#111c4e'}}>{detailedDescription || '<<detailed_description>>'}</span>
                </div>
              </div>

              {/* EVIDENCE */}
              <div>
                <span className="font-bold block mb-2" style={{color: '#111c4e'}}>EVIDENCE</span>
                <div className="space-y-2">
                  {supportingDocuments.length > 0 ? (
                    supportingDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center gap-2 border-2 rounded-lg px-3 py-2 bg-white" style={{borderColor: '#111c4e'}}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span style={{color: '#111c4e'}}>{doc.name}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-2 border-2 rounded-lg px-3 py-2 bg-white" style={{borderColor: '#111c4e'}}>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span style={{color: '#111c4e'}}>&lt;&lt;evidence.mp4&gt;&gt;</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Certify Button */}
          <div className="flex justify-center mb-6">
            <button
              className="px-12 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity w-full max-w-md"
              style={{backgroundColor: '#1F9E55', color: 'white'}}
              onClick={() => setShowSuccessModal(true)}
            >
              I HEREBY CERTIFY THE INFORMATION
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#2563eb', color: 'white'}}
              onClick={() => navigate('/complaint-details', { state: { formData } })}
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 text-center" style={{backgroundColor: '#000B3C'}}>
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <img src={thankYouIcon} alt="Thank You" className="w-20 h-20 object-contain" />
            </div>

            {/* Modal Title */}
            <div className="text-center mb-4">
              <h3 className="text-3xl font-black text-white" style={{fontFamily: 'Metropolis, sans-serif', fontWeight: '900'}}>
                Thank you for filing a complaint!
              </h3>
            </div>

            {/* Modal Subtitle */}
            <div className="text-center mb-8">
              <p className="text-white text-lg opacity-80">
                Please wait for an email confirmation.
              </p>
            </div>

            {/* Back to Home Button */}
            <button
              className="w-full px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#1F9E55', color: 'white'}}
              onClick={() => navigate('/')}
            >
              back to home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComplaintSummaryPage
