import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import elementFull from '../assets/images/elementfull.png'

function LoginPage() {
  const [showMenu, setShowMenu] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // Clear previous errors
    setError('')

    // Validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password')
      return
    }

    // Admin authentication check
    // Admin credentials: admin@umak.edu.ph / admin123
    if (username === 'admin@umak.edu.ph' && password === 'admin123') {
      // Redirect admin to admin dashboard
      navigate('/admin-dashboard')
      return
    }

    // Regular user authentication (demo - always succeeds for non-admin users)
    // In production, this would validate against a database
    navigate('/services')
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Left Side - Welcome Section */}
      <div className="w-3/10 relative"
           style={{
             backgroundColor: '#111c4e'
           }}>
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url(${elementFull})`,
               backgroundSize: 'contain',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}></div>
        <div className="flex items-center justify-start h-full px-8 relative z-10">
          <div className="text-left text-white">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back,
            </h1>
            <h2 className="text-4xl font-bold mb-4" style={{color: '#ffc400'}}>
              Heron!
            </h2>
            <p className="text-base font-light">
              University of Makati. University of Character.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Section */}
      <div className="w-7/10 bg-gray-100 flex items-center justify-center relative"
           style={{backgroundColor: '#f5f5f5'}}>
        {/* Hamburger Menu */}
        <div className="absolute top-6 right-6">
          <button className="p-2" onClick={() => setShowMenu(!showMenu)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        {showMenu && (
          <div className="absolute top-20 right-6 text-right">
            <div className="space-y-3">
              <a href="#home" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium" onClick={(e) => { e.preventDefault(); navigate('/'); setShowMenu(false); }}>HOME</a>
              <div className="border-b border-gray-300"></div>
              <a href="#services" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium" onClick={(e) => { e.preventDefault(); navigate('/services'); setShowMenu(false); }}>SERVICES</a>
              <div className="border-b border-gray-300"></div>
              <a href="#about" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium" onClick={(e) => { e.preventDefault(); navigate('/about'); setShowMenu(false); }}>ABOUT</a>
              <div className="border-b border-gray-300"></div>
              <a href="#faqs" className="block text-gray-800 hover:text-blue-600 transition-colors py-2 text-lg font-medium" onClick={(e) => { e.preventDefault(); navigate('/faqs'); setShowMenu(false); }}>FAQs</a>
            </div>
          </div>
        )}

        {/* Login Form */}
        <div className="w-full max-w-md px-8">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#111c4e'}}>LOGIN</h2>
          
          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Enter your username"
                className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{borderColor: '#111c4e'}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input 
                type="password" 
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{borderColor: '#111c4e'}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm mb-4 text-center" style={{color: '#dc2626'}}>
              {error}
            </p>
          )}

          <div className="mb-6 text-right">
            <a href="#" className="text-sm hover:opacity-80 transition-opacity" style={{color: '#111c4e'}}>Forgot password?</a>
          </div>

          <button 
            className="w-full py-3 rounded-lg font-medium text-white mb-6 hover:opacity-90 transition-opacity"
            style={{backgroundColor: '#111c4e'}}
            onClick={handleLogin}
          >
            Submit
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="text-center">
            <span className="text-gray-600">No account yet? </span>
            <button className="px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    style={{backgroundColor: '#6c757d', color: 'white'}}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
