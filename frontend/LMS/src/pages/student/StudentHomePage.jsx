import { useState } from "react";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import CourseDetails from "./CourseDetails.jsx";

function Navbar() {
  const { openSignUp } = useClerk();
  const { isSignedIn, user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LearnMate
            </span>
            <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              Student
            </span>
          </Link>

          {/* Hamburger Menu Button (Mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 
                       rounded-lg md:hidden hover:bg-gray-50 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8 font-medium">
              <li>
                <Link
                  to="/coursedetails"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  Courses
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
              
              {user && isSignedIn && (
                <>
                  <li>
                    <Link
                      to="/my-enrollments"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                    >
                      My Enrollments
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/studentdashboard"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                    >
                      Dashboard
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                  </li>
                </>
              )}
              
              <li>
                {user && isSignedIn ? (
                  <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
                    <span className="text-gray-700 text-sm font-medium">
                      Welcome, {user.firstName || 'User'}
                    </span>
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8"
                        }
                      }}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => openSignUp()}
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 
                               rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                               transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/coursedetails"
                className="block text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              
              {user && isSignedIn && (
                <>
                  <Link
                    to="/my-enrollments"
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    My Enrollments
                  </Link>
                  <Link
                    to="/studentdashboard"
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </>
              )}
              
              <div className="pt-4 border-t border-gray-100">
                {user && isSignedIn ? (
                  <div className="flex items-center space-x-3">
                    <UserButton />
                    <span className="text-gray-700 font-medium">
                      {user.firstName || 'User'}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      openSignUp();
                      setIsOpen(false);
                    }}
                    className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 
                               rounded-full hover:from-blue-700 hover:to-purple-700
                               focus:outline-none focus:ring-2 focus:ring-blue-500
                               transition-all duration-200 shadow-lg"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content being hidden behind fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-[600px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnMate
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Discover world-class courses, track your progress, and unlock your potential with 
              personalized learning experiences designed for your success.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <form className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for courses, topics, or keywords..."
                  className="w-full pl-12 pr-32 py-4 text-lg border border-gray-200 rounded-2xl 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           bg-white/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl
                           transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-8 bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700
                           transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 
                              flex items-center justify-center shadow-lg group-hover:shadow-xl transform 
                              group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert-Led Courses</h3>
                <p className="text-gray-600">Learn from industry professionals and subject matter experts</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 
                              flex items-center justify-center shadow-lg group-hover:shadow-xl transform 
                              group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600">Study at your own pace with lifetime access to materials</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 
                              flex items-center justify-center shadow-lg group-hover:shadow-xl transform 
                              group-hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600">Connect with peers and get help when you need it</p>
              </div>
            </div>
          </div>

          {/* Course Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn From the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Best
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Curated courses from top instructors worldwide
            </p>
          </div>

          {/* Course Details Component */}
          <CourseDetails />

          {/* Explore All Courses Link */}
          <div className="text-center mt-16">
            <Link 
              to="/coursedetails"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 
                       bg-white rounded-2xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white
                       transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl
                       group"
            >
              Explore All Courses
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}

export default Navbar;