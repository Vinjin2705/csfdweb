import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import csfdLogo from '../assets/logos/CSFD LOGO.png'

function AddAnnouncementPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    subject: '',
    details: '',
    postedFromDate: '',
    postedFromTime: '',
    postedToDate: '',
    postedToTime: '',
    attachments: []
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
      const maxSize = 5 * 1024 * 1024 // 5MB
      return validTypes.includes(file.type) && file.size <= maxSize
    })
    
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...validFiles]
    }))
  }

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.details.trim()) {
      newErrors.details = 'Details are required'
    }
    if (!formData.postedFromDate) {
      newErrors.postedFromDate = 'Posted from date is required'
    }
    if (!formData.postedFromTime) {
      newErrors.postedFromTime = 'Posted from time is required'
    }
    if (!formData.postedToDate) {
      newErrors.postedToDate = 'Posted to date is required'
    }
    if (!formData.postedToTime) {
      newErrors.postedToTime = 'Posted to time is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePost = () => {
    if (!validateForm()) return

    // Get existing announcements from localStorage
    const existingAnnouncements = JSON.parse(localStorage.getItem('announcements') || '[]')
    
    // Create new announcement
    const newAnnouncement = {
      id: Date.now(),
      headline: formData.subject,
      details: formData.details,
      postedFrom: `${formData.postedFromDate} ${formData.postedFromTime}`,
      postedTo: `${formData.postedToDate} ${formData.postedToTime}`,
      attachments: formData.attachments.map(file => file.name),
      createdAt: new Date().toISOString()
    }

    // Add to beginning of array
    const updatedAnnouncements = [newAnnouncement, ...existingAnnouncements]
    
    // Save to localStorage
    localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements))
    
    // Navigate back to admin dashboard
    navigate('/admin-dashboard')
  }

  const handleCancel = () => {
    navigate('/admin-dashboard')
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2d2d2d' }}>
      {/* Navbar */}
      <nav className="px-8 py-4 flex items-center justify-between" style={{ backgroundColor: '#111c4e' }}>
        <div className="flex items-center gap-3">
          <img src={csfdLogo} alt="CSFD Logo" className="w-12 h-12 rounded-full object-cover" />
          <span className="text-white font-bold text-lg">ADMIN DASHBOARD</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/80 text-sm">Admin Name</span>
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-8 py-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">ANNOUNCEMENT</h1>

        {/* Subject Field */}
        <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: '#111c4e', border: '1px solid #3d4a7c' }}>
          <label className="block text-white text-sm font-medium mb-2">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Please provide the details of announcement"
            className="w-full px-4 py-2 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none"
            style={{ backgroundColor: '#1a2a5c', border: errors.subject ? '1px solid #ef4444' : '1px solid #3d4a7c' }}
          />
          {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
        </div>

        {/* Details Field */}
        <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: '#111c4e', border: '1px solid #3d4a7c' }}>
          <label className="block text-white text-sm font-medium mb-2">
            Details <span className="text-red-400">*</span>
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Please provide the details of announcement"
            rows={4}
            className="w-full px-4 py-2 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none resize-none"
            style={{ backgroundColor: '#1a2a5c', border: errors.details ? '1px solid #ef4444' : '1px solid #3d4a7c' }}
          />
          {errors.details && <p className="text-red-400 text-xs mt-1">{errors.details}</p>}
        </div>

        {/* Posted From/To Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Posted From */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#111c4e', border: '1px solid #3d4a7c' }}>
            <label className="block text-white text-sm font-medium mb-2">
              Posted from <span className="text-red-400">*</span>
            </label>
            <div className="relative mb-3">
              <input
                type="date"
                name="postedFromDate"
                value={formData.postedFromDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg text-sm text-white focus:outline-none"
                style={{ backgroundColor: '#1a2a5c', border: errors.postedFromDate ? '1px solid #ef4444' : '1px solid #3d4a7c' }}
              />
              {errors.postedFromDate && <p className="text-red-400 text-xs mt-1">{errors.postedFromDate}</p>}
            </div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Time <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="time"
                name="postedFromTime"
                value={formData.postedFromTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg text-sm text-white focus:outline-none"
                style={{ backgroundColor: '#1a2a5c', border: errors.postedFromTime ? '1px solid #ef4444' : '1px solid #3d4a7c' }}
              />
              {errors.postedFromTime && <p className="text-red-400 text-xs mt-1">{errors.postedFromTime}</p>}
            </div>
          </div>

          {/* Posted To */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#111c4e', border: '1px solid #3d4a7c' }}>
            <label className="block text-white text-sm font-medium mb-2">
              Posted to <span className="text-red-400">*</span>
            </label>
            <div className="relative mb-3">
              <input
                type="date"
                name="postedToDate"
                value={formData.postedToDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg text-sm text-white focus:outline-none"
                style={{ backgroundColor: '#1a2a5c', border: errors.postedToDate ? '1px solid #ef4444' : '1px solid #3d4a7c' }}
              />
              {errors.postedToDate && <p className="text-red-400 text-xs mt-1">{errors.postedToDate}</p>}
            </div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Time <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="time"
                name="postedToTime"
                value={formData.postedToTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg text-sm text-white focus:outline-none"
                style={{ backgroundColor: '#1a2a5c', border: errors.postedToTime ? '1px solid #ef4444' : '1px solid #3d4a7c' }}
              />
              {errors.postedToTime && <p className="text-red-400 text-xs mt-1">{errors.postedToTime}</p>}
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">
            Attachments (Optional)
          </label>
          <div 
            className="rounded-lg p-6 text-center cursor-pointer transition-colors hover:opacity-90"
            style={{ backgroundColor: '#111c4e', border: '2px dashed #3d4a7c' }}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <input
              id="fileInput"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              className="hidden"
            />
            <p className="text-white font-medium mb-1">Click to upload</p>
            <p className="text-gray-400 text-xs">Supported: PDF, DOC, DOCX, JPG, PNG<br/>(Max 5MB)</p>
          </div>
          
          {/* Show uploaded files */}
          {formData.attachments.length > 0 && (
            <div className="mt-3 space-y-2">
              {formData.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ backgroundColor: '#1a2a5c' }}>
                  <span className="text-white text-sm truncate">{file.name}</span>
                  <button
                    onClick={() => removeAttachment(index)}
                    className="text-red-400 hover:text-red-300 ml-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePost}
            className="px-8 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
            style={{ backgroundColor: '#ffc400', color: '#111c4e' }}
          >
            Post
          </button>
          <button
            onClick={handleCancel}
            className="px-8 py-2.5 rounded-lg font-medium text-sm text-white border transition-colors hover:bg-white/10"
            style={{ borderColor: '#3d4a7c' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddAnnouncementPage
