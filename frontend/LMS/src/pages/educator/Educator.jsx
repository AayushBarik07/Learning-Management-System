import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../components/Sidebar'
import ExistingCourses from '../../components/ExistingCourses';
import AddCourse from '../../components/AddCourse';
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useState } from "react";

function Educator() {
  const { openSignUp } = useClerk();
  const { isSignedIn, user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Modern Navbar */}
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
              Educator
            </span>
          </Link>

          {/* Hamburger Menu Button (Mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
                      text-black   /* ✅ changed from text-gray-600 */
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
                  All Courses
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
                      Analytics
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/educatordashboard"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                    >
                      Educator
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                  </li>
                </>
              )}
              
              <li>
                {user && isSignedIn ? (
                  <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
                    <span className="text-gray-700 text-sm font-medium">
                      {user.firstName || 'Educator'}
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
                to="#courses"
                className="block text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                All Courses
              </Link>
              
              {user && isSignedIn && (
                <>
                  <Link
                    to="#add-course"
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Create Course
                  </Link>
                  <Link
                    to="/educatordashboard"
                    className="block text-gray-700 hover:text-blue-600 py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Educator
                  </Link>
                </>
              )}
              
              <div className="pt-4 border-t border-gray-100">
                {user && isSignedIn ? (
                  <div className="flex items-center space-x-3">
                    <UserButton />
                    <span className="text-gray-700 font-medium">
                      {user.firstName || 'Educator'}
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

      {/* Welcome Header */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Teaching Hub
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage your courses, track student progress, and create engaging learning experiences 
              from your personalized educator dashboard.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Course Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.8/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 sticky top-28">
              <div className="p-2">
                <Sidebar />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="space-y-8">
              {/* Existing Courses Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Your Courses</h2>
                      <p className="text-gray-600 mt-1">Manage and monitor your existing courses</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6" id='courses'>
                  <ExistingCourses />
                </div>
              </div>

              {/* Add Course Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Create New Course</h2>
                      <p className="text-gray-600 mt-1">Design and publish your next educational masterpiece</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6" id='add-course'>
                  <AddCourse />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}

export default Educator;