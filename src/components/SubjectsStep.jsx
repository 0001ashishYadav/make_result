import React, { useState } from "react";
import { Plus, Edit2, Trash2, Save, X, BookOpen } from "lucide-react";

const SubjectsStep = ({ subjects, setSubjects }) => {
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newSubject, setNewSubject] = useState({
    name: "",
    totalMarks: "",
    obtainedMarks: "",
    grade: "",
  });

  const calculateGrade = (obtained, total) => {
    const percentage = (obtained / total) * 100;
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "F";
  };

  const handleAddSubject = () => {
    if (newSubject.name && newSubject.totalMarks && newSubject.obtainedMarks) {
      const grade = calculateGrade(
        parseInt(newSubject.obtainedMarks),
        parseInt(newSubject.totalMarks)
      );
      const subjectWithGrade = { ...newSubject, grade };

      if (editingIndex >= 0) {
        const updatedSubjects = [...subjects];
        updatedSubjects[editingIndex] = subjectWithGrade;
        setSubjects(updatedSubjects);
        setEditingIndex(-1);
      } else {
        setSubjects([...subjects, subjectWithGrade]);
      }

      setNewSubject({ name: "", totalMarks: "", obtainedMarks: "", grade: "" });
      setIsAddingSubject(false);
    }
  };

  const handleEditSubject = (index) => {
    setNewSubject(subjects[index]);
    setEditingIndex(index);
    setIsAddingSubject(true);
  };

  const handleDeleteSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    setNewSubject({ name: "", totalMarks: "", obtainedMarks: "", grade: "" });
    setIsAddingSubject(false);
    setEditingIndex(-1);
  };

  const totalMarks = subjects.reduce(
    (sum, subject) => sum + parseInt(subject.totalMarks || 0),
    0
  );
  const totalObtained = subjects.reduce(
    (sum, subject) => sum + parseInt(subject.obtainedMarks || 0),
    0
  );
  const overallPercentage =
    totalMarks > 0 ? ((totalObtained / totalMarks) * 100).toFixed(2) : 0;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Subjects & Marks
        </h2>
        <p className="text-gray-600">
          Add subjects with their marks and grades
        </p>
      </div>

      {/* Add Subject Button */}
      {!isAddingSubject && (
        <button
          onClick={() => setIsAddingSubject(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Add Subject</span>
        </button>
      )}

      {/* Add/Edit Subject Form */}
      {isAddingSubject && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {editingIndex >= 0 ? "Edit Subject" : "Add New Subject"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject Name
              </label>
              <input
                type="text"
                value={newSubject.name}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, name: e.target.value })
                }
                placeholder="Enter subject name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Marks
              </label>
              <input
                type="number"
                value={newSubject.totalMarks}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, totalMarks: e.target.value })
                }
                placeholder="Enter total marks"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Obtained Marks
              </label>
              <input
                type="number"
                value={newSubject.obtainedMarks}
                onChange={(e) =>
                  setNewSubject({
                    ...newSubject,
                    obtainedMarks: e.target.value,
                  })
                }
                placeholder="Enter obtained marks"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex items-end">
              <div className="flex space-x-2 w-full">
                <button
                  onClick={handleAddSubject}
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingIndex >= 0 ? "Update" : "Save"}</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subjects List */}
      {subjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
            Added Subjects ({subjects.length})
          </h3>

          <div className="grid gap-4">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {subject.name}
                    </h4>
                    <div className="flex items-center space-x-6 mt-2 text-sm text-gray-600">
                      <span>
                        Total:{" "}
                        <span className="font-medium">
                          {subject.totalMarks}
                        </span>
                      </span>
                      <span>
                        Obtained:{" "}
                        <span className="font-medium">
                          {subject.obtainedMarks}
                        </span>
                      </span>
                      <span>
                        Grade:{" "}
                        <span
                          className={`font-bold px-2 py-1 rounded ${
                            subject.grade === "A+"
                              ? "bg-green-100 text-green-800"
                              : subject.grade === "A"
                              ? "bg-blue-100 text-blue-800"
                              : subject.grade === "B"
                              ? "bg-yellow-100 text-yellow-800"
                              : subject.grade === "C"
                              ? "bg-orange-100 text-orange-800"
                              : subject.grade === "D"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {subject.grade}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditSubject(index)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteSubject(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Summary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {totalMarks}
                </div>
                <div className="text-sm text-gray-600">Total Marks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {totalObtained}
                </div>
                <div className="text-sm text-gray-600">Obtained Marks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {overallPercentage}%
                </div>
                <div className="text-sm text-gray-600">Percentage</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsStep;
