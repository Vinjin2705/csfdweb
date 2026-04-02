import { useNavigate, useLocation } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'
import footerUmakLogo from '../assets/logos/UMAK LOGO.png'
import footerCsfdLogo from '../assets/logos/CSFD LOGO.png'

function ComplaintSummaryView() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get complaint data from navigation state
  const complaint = location.state?.complaint || location.state?.version || {
    complaintNo: '2024-001',
    subject: 'Noise Complaint in Library',
    category: 'major',
    status: 'Pending',
    dateFiled: 'March 15, 2024',
    timeOfIncident: '2:30 PM',
    dateOfIncident: 'March 15, 2024',
    witnesses: 'John Smith, Jane Doe, Mike Johnson',
    location: 'University Library, 2nd Floor',
    isOnGoing: 'Yes',
    previousReports: 'None',
    detailedDescription: 'Loud noise and disturbance during study hours in the library. Multiple students affected. The incident occurred during peak study time and disrupted the learning environment.',
    desiredOutcome: 'Warning to be issued and proper conduct enforced in library premises.',
    evidence: [
      { name: 'evidence1.mp4', type: 'video' },
      { name: 'evidence2.png', type: 'image' },
      { name: 'evidence3.pdf', type: 'document' }
    ],
    mainComplainant: {
      name: 'John Doe',
      sex: 'Male',
      yearLevel: '3rd Year',
      college: 'CCIS'
    },
    coComplainant: {
      name: 'Jane Smith',
      sex: 'Female',
      yearLevel: '2nd Year',
      college: 'CBM'
    },
    mainRespondent: {
      name: 'Alex Rivera',
      sex: 'Male',
      yearLevel: '4th Year',
      college: 'CCIS'
    },
    coRespondent: {
      name: 'Maria Garcia',
      sex: 'Female',
      yearLevel: '3rd Year',
      college: 'CBM'
    }
  }

  const isHistoricalView = location.state?.version !== undefined
  const versionDate = location.state?.versionDate || null

  // Get version history from navigation state
  const versionHistory = location.state?.versionHistory || [
    { id: 1, type: 'Original', date: 'March 15, 2024', modified: '' }
  ]

  const selectedVersion = location.state?.selectedVersion

  const handleBack = () => {
    if (selectedVersion) {
      // If viewing a specific version detail, go back to version list
      navigate('/complaint-summary-view', {
        state: {
          complaint: complaint,
          versionHistory: versionHistory
        },
        replace: true
      })
    } else {
      // Go back to complaint list
      navigate('/complaint')
    }
  }

  const handleViewDetails = (version) => {
    // Show the detail view for the selected version on this same page
    navigate('/complaint-summary-view', { 
      state: { 
        complaint: complaint,
        versionHistory: versionHistory,
        selectedVersion: version
      },
      replace: true
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between sticky top-0 z-30" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-sm opacity-80 font-marcellus">Center for Student Formation and Discipline</p>
          </div>
        </div>
        
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => navigate('/complaint')}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <div className="px-8 py-12 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-metropolis font-bold" style={{ color: '#111c4e' }}>COMPLAINT INFORMATION</h1>
          <h2 className="text-2xl font-metropolis font-bold" style={{ color: '#ffc400' }}>SUMMARY</h2>
        </div>

        {/* Content Section - Show either Version List or Version Detail */}
        {selectedVersion ? (
          // Show selected version details
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ color: '#111c4e' }}>
                {selectedVersion.type} Details
              </h3>
              <button
                onClick={handleBack}
                className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#111c4e', color: '#111c4e' }}
              >
                Back to Versions
              </button>
            </div>
            
            {/* Main Complainant Card */}
            <div className="border-2 rounded-xl p-6 mb-6" style={{ borderColor: '#111c4e', backgroundColor: '#f9f9f9' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#111c4e' }}>MAIN COMPLAINANT</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>NAME: </span>
                  <span className="text-sm text-gray-800">{complaint.mainComplainant?.name || complaint.complainantName || '<<full_name>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>SEX: </span>
                  <span className="text-sm text-gray-800">{complaint.mainComplainant?.sex || '<<sex>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>YEAR/GRADE LEVEL: </span>
                  <span className="text-sm text-gray-800">{complaint.mainComplainant?.yearLevel || '<<year_level>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COLLEGE/INSTITUTE: </span>
                  <span className="text-sm text-gray-800">{complaint.mainComplainant?.college || complaint.college || '<<college_institute>>'}</span>
                </div>
              </div>

              {/* Co-Complainant */}
              <h3 className="text-lg font-bold mb-4 mt-6" style={{ color: '#111c4e' }}>CO-COMPLAINANT</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>NAME: </span>
                  <span className="text-sm text-gray-800">{complaint.coComplainant?.name || '<<full_name>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>SEX: </span>
                  <span className="text-sm text-gray-800">{complaint.coComplainant?.sex || '<<sex>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>YEAR/GRADE LEVEL: </span>
                  <span className="text-sm text-gray-800">{complaint.coComplainant?.yearLevel || '<<year_level>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COLLEGE/INSTITUTE: </span>
                  <span className="text-sm text-gray-800">{complaint.coComplainant?.college || '<<college_institute>>'}</span>
                </div>
              </div>

              {/* Additional Complainants */}
              {complaint.additionalComplainants?.length > 0 && (
                <>
                  {complaint.additionalComplainants.map((ac, idx) => (
                    <div key={ac.id || idx}>
                      <h3 className="text-lg font-bold mb-4 mt-6" style={{ color: '#111c4e' }}>ADDITIONAL COMPLAINANT #{idx + 1}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>NAME: </span>
                          <span className="text-sm text-gray-800">{ac.name || '<<full_name>>'}</span>
                        </div>
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>SEX: </span>
                          <span className="text-sm text-gray-800">{ac.sex || '<<sex>>'}</span>
                        </div>
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>YEAR/GRADE LEVEL: </span>
                          <span className="text-sm text-gray-800">{ac.yearLevel || '<<year_level>>'}</span>
                        </div>
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COLLEGE/INSTITUTE: </span>
                          <span className="text-sm text-gray-800">{ac.college || '<<college_institute>>'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Main Respondent Card */}
            <div className="border-2 rounded-xl p-6 mb-6" style={{ borderColor: '#111c4e', backgroundColor: '#f9f9f9' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#111c4e' }}>MAIN RESPONDENT</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>NAME: </span>
                  <span className="text-sm text-gray-800">{complaint.mainRespondent?.name || '<<full_name>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>SEX: </span>
                  <span className="text-sm text-gray-800">{complaint.mainRespondent?.sex || '<<sex>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>YEAR/GRADE LEVEL: </span>
                  <span className="text-sm text-gray-800">{complaint.mainRespondent?.yearLevel || '<<year_level>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COLLEGE/INSTITUTE: </span>
                  <span className="text-sm text-gray-800">{complaint.mainRespondent?.college || '<<college_institute>>'}</span>
                </div>
              </div>

              {/* Co-Respondent */}
              <h3 className="text-lg font-bold mb-4 mt-6" style={{ color: '#111c4e' }}>CO-RESPONDENT</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>NAME: </span>
                  <span className="text-sm text-gray-800">{complaint.coRespondent?.name || '<<full_name>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>SEX: </span>
                  <span className="text-sm text-gray-800">{complaint.coRespondent?.sex || '<<sex>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>YEAR/GRADE LEVEL: </span>
                  <span className="text-sm text-gray-800">{complaint.coRespondent?.yearLevel || '<<year_level>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COLLEGE/INSTITUTE: </span>
                  <span className="text-sm text-gray-800">{complaint.coRespondent?.college || '<<college_institute>>'}</span>
                </div>
              </div>

              {/* Additional Respondents */}
              {complaint.additionalRespondents?.length > 0 && (
                <>
                  {complaint.additionalRespondents.map((ar, idx) => (
                    <div key={ar.id || idx}>
                      <h3 className="text-lg font-bold mb-4 mt-6" style={{ color: '#111c4e' }}>ADDITIONAL RESPONDENT #{idx + 1}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>NAME: </span>
                          <span className="text-sm text-gray-800">{ar.name || '<<full_name>>'}</span>
                        </div>
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>SEX: </span>
                          <span className="text-sm text-gray-800">{ar.sex || '<<sex>>'}</span>
                        </div>
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>YEAR/GRADE LEVEL: </span>
                          <span className="text-sm text-gray-800">{ar.yearLevel || '<<year_level>>'}</span>
                        </div>
                        <div>
                          <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COLLEGE/INSTITUTE: </span>
                          <span className="text-sm text-gray-800">{ar.college || '<<college_institute>>'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Complaint Details Card */}
            <div className="border-2 rounded-xl p-6 mb-6" style={{ borderColor: '#111c4e', backgroundColor: '#f9f9f9' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#111c4e' }}>COMPLAINT DETAILS</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COMPLAINT TITLE/SUBJECT: </span>
                  <span className="text-sm text-gray-800">{complaint.subject || '<<subject>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>COMPLAINT CATEGORY: </span>
                  <span className="text-sm text-gray-800">{complaint.category || '<<category>>'}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-xs" style={{ color: '#111c4e' }}>DESIRED OUTCOME/RESOLUTION: </span>
                <span className="text-sm text-gray-800">{complaint.desiredOutcome || '<<resolution>>'}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>DATE OF INCIDENT: </span>
                  <span className="text-sm text-gray-800">{complaint.dateOfIncident || complaint.dateFiled || '<<incident>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>LOCATION: </span>
                  <span className="text-sm text-gray-800">{complaint.location || '<<location>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>IS IT ON-GOING: </span>
                  <span className="text-sm text-gray-800">{complaint.isOnGoing || '<<on_going>>'}</span>
                </div>
                <div>
                  <span className="font-bold text-xs" style={{ color: '#111c4e' }}>PREVIOUS REPORTS: </span>
                  <span className="text-sm text-gray-800">{complaint.previousReports || '<<previous_report>>'}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-xs block mb-2" style={{ color: '#111c4e' }}>DETAILED DESCRIPTION</span>
                <div className="border border-gray-300 rounded p-3 bg-white min-h-[100px]">
                  <span className="text-sm text-gray-800">{complaint.detailedDescription || '<<detailed_description>>'}</span>
                </div>
              </div>

              {/* Evidence */}
              <div className="mb-6">
                <span className="font-bold text-xs block mb-2" style={{ color: '#111c4e' }}>EVIDENCE</span>
                <div className="space-y-2">
                  {complaint.evidence ? (
                    complaint.evidence.map((ev, idx) => (
                      <div key={idx} className="flex items-center gap-2 border border-gray-300 rounded p-2 bg-white">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{ev.name}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center gap-2 border border-gray-300 rounded p-2 bg-white">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">evidence1.mp4</span>
                      </div>
                      <div className="flex items-center gap-2 border border-gray-300 rounded p-2 bg-white">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">evidence2.png</span>
                      </div>
                      <div className="flex items-center gap-2 border border-gray-300 rounded p-2 bg-white">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">evidence3.pdf</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Progress Updates */}
              {complaint.progressList?.length > 0 && (
                <div>
                  <span className="font-bold text-xs block mb-2" style={{ color: '#111c4e' }}>PROGRESS UPDATES</span>
                  <div className="space-y-3">
                    {complaint.progressList.map((progress, idx) => (
                      <div key={progress.id || idx} className="border border-gray-300 rounded p-3 bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-sm" style={{ color: '#111c4e' }}>{progress.subject}</span>
                          <span className="text-xs text-gray-500">{progress.date}</span>
                        </div>
                        <p className="text-sm text-gray-700">{progress.description}</p>
                        {progress.documents && (
                          <div className="mt-2 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="text-xs text-gray-600">{progress.documents}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Show version list
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#111c4e' }}>VIEW DETAILS</h3>
            <div className="border-2 rounded-xl p-6" style={{ borderColor: '#111c4e' }}>
              {versionHistory.length === 1 ? (
                // Only Original exists - show single view
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-800">Original</span>
                  </div>
                  <button 
                    onClick={() => handleViewDetails(versionHistory[0])}
                    className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#111c4e', color: '#111c4e' }}
                  >
                    View Details
                  </button>
                </div>
              ) : (
                // Multiple versions exist - show list with modification dates
                versionHistory.map((version, index) => (
                  <div 
                    key={version.id} 
                    className={`flex items-center justify-between py-4 ${index !== versionHistory.length - 1 ? 'border-b border-gray-300' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#111c4e' }}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-800">
                        {version.type}
                        {version.modified && ` - ${version.modified}`}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleViewDetails(version)}
                      className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      style={{ borderColor: '#111c4e', color: '#111c4e' }}
                    >
                      View Details
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={handleBack}
            className="px-12 py-3 rounded-lg font-bold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#007bff' }}
          >
            BACK
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white px-12 py-10 mt-8" style={{ backgroundColor: '#3d3d3d' }}>
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
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span>umak.edu.ph/centers/csfd/</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>8883-1875</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For general concern</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For complaint concern</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">umakpsd.umak.edu.ph</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="block text-sm underline mb-1" style={{color: '#ffc400'}}>For request of good moral certificate concern</span>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white hover:opacity-80 transition-opacity cursor-pointer">csfdgoodmoral.umak.edu.ph</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
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
    </div>
  )
}

export default ComplaintSummaryView
