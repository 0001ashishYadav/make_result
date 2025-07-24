import React from "react";
import {
  User,
  Hash,
  School,
  Calendar,
  FileText,
  Camera,
  Users,
  MapPin,
} from "lucide-react";

const StudentInfoStep = ({ studentData, setStudentData }) => {
  const handleInputChange = (field, value) => {
    setStudentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStudentData((prev) => ({
          ...prev,
          photo: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Student Information
        </h2>
        <p className="text-gray-600">
          Enter the basic details required for the result
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Photo Upload */}
        <div className="md:col-span-2 flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
              {studentData.photo ? (
                <img
                  src={studentData.photo}
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera className="w-12 h-12 text-gray-400" />
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
              <Camera className="w-4 h-4" />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Student Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            Student Name *
          </label>
          <input
            type="text"
            value={studentData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter student name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          />
        </div>

        {/* Roll Number */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Hash className="w-4 h-4 mr-2 text-blue-500" />
            Roll Number *
          </label>
          <input
            type="text"
            value={studentData.rollNumber}
            onChange={(e) => handleInputChange("rollNumber", e.target.value)}
            placeholder="Enter roll number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          />
        </div>

        {/* Father's Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            Father's Name
          </label>
          <input
            type="text"
            value={studentData.fatherName || ""}
            onChange={(e) => handleInputChange("fatherName", e.target.value)}
            placeholder="Enter father's name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          />
        </div>

        {/* Mother's Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            Mother's Name
          </label>
          <input
            type="text"
            value={studentData.motherName || ""}
            onChange={(e) => handleInputChange("motherName", e.target.value)}
            placeholder="Enter mother's name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          />
        </div>

        {/* Class */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <School className="w-4 h-4 mr-2 text-blue-500" />
            Class *
          </label>
          <select
            value={studentData.className}
            onChange={(e) => handleInputChange("className", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          >
            <option value="">Select class</option>
            <option value="1st">1st Class</option>
            <option value="2nd">2nd Class</option>
            <option value="3rd">3rd Class</option>
            <option value="4th">4th Class</option>
            <option value="5th">5th Class</option>
            <option value="6th">6th Class</option>
            <option value="7th">7th Class</option>
            <option value="8th">8th Class</option>
            <option value="9th">9th Class</option>
            <option value="10th">10th Class</option>
            <option value="11th">11th Class</option>
            <option value="12th">12th Class</option>
          </select>
        </div>

        {/* School Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <School className="w-4 h-4 mr-2 text-blue-500" />
            School Name *
          </label>
          <input
            type="text"
            value={studentData.school}
            onChange={(e) => handleInputChange("school", e.target.value)}
            placeholder="Enter school name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          />
        </div>

        {/* Full Address */}
        <div className="space-y-2 md:col-span-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            Full Address
          </label>
          <textarea
            value={studentData.address || ""}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder="Enter complete address"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400 resize-none"
          />
        </div>

        {/* Session */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            Academic Session
          </label>
          <input
            type="text"
            value={studentData.session}
            onChange={(e) => handleInputChange("session", e.target.value)}
            placeholder="e.g., 2024-2025"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          />
        </div>

        {/* Exam Type */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <FileText className="w-4 h-4 mr-2 text-blue-500" />
            Exam Type
          </label>
          <select
            value={studentData.examType}
            onChange={(e) => handleInputChange("examType", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          >
            <option value="">Select exam type</option>
            <option value="Monthly Test">Monthly Test</option>
            <option value="Mid Term">Mid Term</option>
            <option value="Final Term">Final Term</option>
            <option value="Annual">Annual Exam</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoStep;
