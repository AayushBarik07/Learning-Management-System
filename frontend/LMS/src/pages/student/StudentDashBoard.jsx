import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../../api/courseApi";
import axios from "axios";

function StudentDashboard() {
  const [allCourses, setAllCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      await Promise.all([loadAllCourses(), fetchMyCourses()]);
      setLoading(false);
    } catch (err) {
      console.error("Error loading dashboard:", err);
      setError("Failed to load dashboard. Please try again later.");
      setLoading(false);
    }
  };

  const loadAllCourses = async () => {
    const data = await fetchCourses();
    setAllCourses(Array.isArray(data) ? data : data.courses || []);
  };

  const fetchMyCourses = async () => {
    try {
      const res = await axios.get("/api/enrollments/my", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = Array.isArray(res.data) ? res.data : res.data.courses || [];
      setMyCourses(data);
    } catch (err) {
      console.error("Error fetching enrolled courses:", err);
      setMyCourses([]);
    }
  };

  const handleEnroll = async (courseId) => {
    try {
      await axios.post(
        `/api/enrollments/enroll/${courseId}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      fetchMyCourses();
    } catch (err) {
      console.error("Error enrolling:", err);
      setError("Enrollment failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-semibold">⏳ Loading your dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-red-600">
        <p className="text-lg font-semibold">{error}</p>
        <button
          onClick={loadData}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>

      {/* My Courses */}
      <h3 className="text-xl font-semibold mb-3">My Courses</h3>
      {myCourses.length === 0 ? (
        <p>You are not enrolled in any courses yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {myCourses.map((course, index) => (
            <div
              key={course._id || `mycourse-${index}`}
              className="p-4 bg-white shadow-md rounded-lg border"
            >
              <h4 className="font-bold text-lg">{course.title}</h4>
              <Link
                to={`/course/${course._id}`}
                className="text-blue-600 hover:underline"
              >
                Go to Course
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Available Courses */}
      <h3 className="text-xl font-semibold mb-3">Available Courses</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allCourses.map((course, index) => (
          <div
            key={course._id || `allcourse-${index}`}
            className="p-4 bg-white shadow-md rounded-lg border"
          >
            <h4 className="font-bold text-lg">{course.title}</h4>
            <p className="text-gray-600">{course.description}</p>
            <button
              onClick={() => handleEnroll(course._id)}
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
