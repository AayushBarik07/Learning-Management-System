import { Routes, Route, useNavigate } from "react-router-dom";
import Educator from "./pages/educator/Educator.jsx";
import CourseDetails from "./pages/student/CourseDetails.jsx";
import MyEnrollments from "./pages/student/MyEnrollment.jsx";
import StudentHomePage from "./pages/student/StudentHomePage.jsx";
import StudentDashboard from "./pages/student/StudentDashBoard.jsx";
import EducatorDashboard from "./pages/educator/EducatorDashBoard.jsx";
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

              {/* Main Content */}
              <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                  {/* Logo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      LearnMate
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto leading-relaxed">
                    Your comprehensive learning management system
                  </p>
                  <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
                    Empowering educators and students with modern tools for exceptional learning experiences
                  </p>
                </div>

                {/* Role Selection Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 max-w-2xl w-full animate-slide-up">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Choose Your Path
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Select your role to access your personalized dashboard
                    </p>
                  </div>

                  {/* Role Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Educator Button */}
                    <button
                      onClick={() => navigate("/educatorhomepage")}
                      className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 
                               hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl p-8
                               transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300
                               focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 
                                      group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Educator</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          Create courses, manage content, and track student progress
                        </p>
                      </div>
                    </button>

                    {/* Student Button */}
                    <button
                      onClick={() => navigate("/studenthomepage")}
                      className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 
                               hover:from-purple-600 hover:to-purple-700 text-white rounded-2xl p-8
                               transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300
                               focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 
                                      group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Student</h3>
                        <p className="text-purple-100 text-sm leading-relaxed">
                          Explore courses, learn new skills, and track your achievements
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-600 text-sm mb-4">
                      New to LearnMate? Get started in seconds
                    </p>
                    <div className="flex justify-center space-x-8 text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Free to start</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>No credit card required</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Instant access</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-16 text-center animate-fade-in-delayed">
                  <p className="text-gray-500 text-sm">
                    Trusted by educators and students worldwide
                  </p>
                </div>
              </div>

              {/* Custom Styles */}
              <style jsx>{`
                .bg-grid-pattern {
                  background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0);
                  background-size: 20px 20px;
                }
                
                @keyframes fade-in {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                @keyframes slide-up {
                  from {
                    opacity: 0;
                    transform: translateY(40px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .animate-fade-in {
                  animation: fade-in 0.8s ease-out;
                }
                
                .animate-fade-in-delayed {
                  animation: fade-in 1s ease-out 0.3s both;
                }
                
                .animate-slide-up {
                  animation: slide-up 0.8s ease-out 0.2s both;
                }
              `}</style>
            </div>
          }
        />
        <Route path="/coursedetails/" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/educatorhomepage" element={<Educator />} />
        <Route path="/studenthomepage" element={<StudentHomePage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/educatordashboard" element={<EducatorDashboard />} />
      </Routes>
    </>
  );
}

export default App;