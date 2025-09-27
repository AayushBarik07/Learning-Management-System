import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    channelName: "",
    youtubeLink: "",
    coverImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg", // default image
    featuredVideo: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/courses", formData);
      alert("✅ Course added successfully!");
      setFormData({
        name: "",
        specialization: "",
        channelName: "",
        youtubeLink: "",
        coverImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        featuredVideo: ""
      });
    } catch (err) {
      console.error("Error adding course:", err);
      alert("❌ Failed to add course");
    }
  };

  return (
    <div>
      <p className="text-4xl font-bold mt-5 mb-5">Add a New Course</p>
      <hr className="mb-4" />

      <div className="p-5 border-2 border-dashed border-gray-400 rounded-lg">
        <h2 className="text-2xl mb-4">Fill out the details below 👇 to add a new course </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <label className="block mb-1 font-medium">Course Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className="w-full p-2 border text-center border-gray-300 rounded-md" required />

          <label className="block mb-1 font-medium">Specialization</label>
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange}
            className="w-full text-center p-2 border border-gray-300 rounded-md" required />

          <label className="block mb-1 font-medium">Channel Name</label>
          <input type="text" name="channelName" value={formData.channelName} onChange={handleChange}
            className="w-full text-center p-2 border border-gray-300 rounded-md" required />

          <label className="block mb-1 font-medium">Youtube Link</label>
          <input type="text" name="youtubeLink" value={formData.youtubeLink} onChange={handleChange}
            placeholder="https://www.youtube.com/@"
            className="w-full p-2 border text-center border-gray-300 rounded-md" required />

          <label className="block mb-1 font-medium">Cover Image URL</label>
          <input type="text" name="coverImage" value={formData.coverImage} readOnly
            className="w-full p-2 border border-gray-300 text-center rounded-md" />

          <label className="block mb-1 font-medium">Featured Video URL</label>
          <input type="text" name="featuredVideo" value={formData.featuredVideo} onChange={handleChange}
            className="w-full text-center p-2 border border-gray-300 rounded-md" required />

          <button type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
