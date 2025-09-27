import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../../api/courseApi";
import axios from "axios";

function StudentDashboard() {
  const [allCourses, setAllCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await Promise.all([loadAllCourses(), fetchMyCourses(), fetchStudent()]);
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

  const fetchStudent = async () => {
    try {
      const res = await axios.get("/api/users/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStudent(res.data);
    } catch (err) {
      console.error("Error fetching student profile:", err);
    }
  };

  const completedCourses = myCourses.filter(
    (c) => c.completed === true || c.status === "completed"
  );

  return (
    <div className="p-6">
      {student && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold">Welcome, {student.name} 👋</h2>
          <p className="mt-2">
            <span className="font-semibold">Enrolled Courses:</span>{" "}
            {myCourses.length} |{" "}
            <span className="font-semibold">Completed:</span>{" "}
            {completedCourses.length}
          </p>
        </div>
      )}

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
              <p className="text-gray-600">
                Status: {course.completed ? "✅ Completed" : "📖 In Progress"}
              </p>
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
