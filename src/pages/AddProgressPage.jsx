import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import umakLogo from '../assets/logos/UMAK LOGO.png'
import csfdLogo from '../assets/logos/CSFD LOGO.png'

function AddProgressPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const complaint = location.state?.complaint || {
    complaintNo: '2024-001',
    subject: 'Noise Complaint in Library'
  }

  const [formData, setFormData] = useState({
    subject: '',
    date: '',
    details: '',
    attachments: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({ ...prev, attachments: [...prev.attachments, ...files] }))
  }

  const handlePost = () => {
    // TODO: Submit progress data to backend
    console.log('Posting progress:', formData)
    navigate('/complaint-evaluate', { state: { complaint } })
  }

  const handleCancel = () => {
    navigate('/complaint-evaluate', { state: { complaint } })
  }

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between sticky top-0 z-30" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-4">
          <img src={umakLogo} alt="University of Makati" className="w-12 h-12 rounded-full object-cover" />
          <img src={csfdLogo} alt="CSFD" className="w-12 h-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="text-sm opacity-80 font-marcellus">Center for Student Formation and Discipline</p>
          </div>
        </div>
        
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(true)}>
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-metropolis font-bold" style={{ color: '#111c4e' }}>PROGRESS</h1>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Subject and Date Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Subject */}
            <div className="col-span-2 p-4 rounded-lg bg-white border-2" style={{ borderColor: '#111c4e' }}>
              <label className="block text-sm font-bold mb-2" style={{ color: '#111c4e' }}>
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Please provide the subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Date */}
            <div className="p-4 rounded-lg bg-white border-2" style={{ borderColor: '#111c4e' }}>
              <label className="block text-sm font-bold mb-2" style={{ color: '#111c4e' }}>
                Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 rounded-lg bg-white border-2" style={{ borderColor: '#111c4e' }}>
            <label className="block text-sm font-bold mb-2" style={{ color: '#111c4e' }}>
              Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Please provide the details"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#111c4e' }}>Attachments (Optional)</label>
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:border-gray-600 transition-colors bg-white"
              onClick={() => document.getElementById('file-upload').click()}
            >
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <p className="font-medium" style={{ color: '#111c4e' }}>Click to upload</p>
              <p className="text-gray-500 text-xs mt-1">Supported: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
            </div>

            {/* Attached Files List */}
            {formData.attachments.length > 0 && (
              <div className="mt-3 space-y-2">
                {formData.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-300">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span className="text-gray-800 text-sm">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeAttachment(index)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 pt-6">
            <button
              onClick={handlePost}
              className="px-12 py-3 rounded-lg font-bold text-gray-900 transition-colors hover:opacity-90"
              style={{ backgroundColor: '#ffc400' }}
            >
              Post
            </button>
            <button
              onClick={handleCancel}
              className="px-8 py-3 rounded-lg font-bold text-white border-2 transition-colors hover:bg-white/10"
              style={{ borderColor: '#111c4e', backgroundColor: '#111c4e' }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{backgroundColor: '#111c4e'}}>
        <div className="flex justify-end p-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white rotate-45 translate-y-2"></span>
              <span className="w-full h-0.5 bg-white opacity-0"></span>
              <span className="w-full h-0.5 bg-white -rotate-45 -translate-y-2"></span>
            </div>
          </button>
        </div>
        <div className="px-6 py-4">
          <button className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base" onClick={() => { navigate('/complaint'); setIsMenuOpen(false); }}>
            Back to Complaints
          </button>
          <button className="w-full text-right py-3 border-b border-white/20 text-white hover:text-yellow-400 transition-colors font-medium text-base" onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>
            LOGOUT
          </button>
        </div>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}></div>}
    </div>
  )
}

export default AddProgressPage
