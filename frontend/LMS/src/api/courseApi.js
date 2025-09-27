import axios from "axios";

// Backend API base URL
const API_URL = "http://localhost:5000/api";

// ✅ Fetch educators.json
export const fetchEducators = async () => {
  try {
    const response = await axios.get(`${API_URL}/educators`);
    return response.data;
  } catch (error) {
    console.error("Error fetching educators:", error);
    return [];
  }
};

// ✅ Fetch courses.json
export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
