import React from "react";
import { Award, Crown, Diamond, Sparkles, Users, MapPin } from "lucide-react";

const ResultTemplate3 = ({ studentData, subjects }) => {
  const totalMarks = subjects.reduce(
    (sum, subject) => sum + parseInt(subject.totalMarks || 0),
    0
  );
  const totalObtained = subjects.reduce(
    (sum, subject) => sum + parseInt(subject.obtainedMarks || 0),
    0
  );
  const percentage =
    totalMarks > 0 ? ((totalObtained / totalMarks) * 100).toFixed(2) : 0;

  const getOverallGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "F";
  };

  const getResultStatus = (percentage) => {
    return percentage >= 50 ? "PASS" : "FAIL";
  };

  const getGradeClass = (grade) => {
    switch (grade) {
      case "A+":
        return "grade-a-plus";
      case "A":
        return "grade-a";
      case "B":
        return "grade-b";
      case "C":
        return "grade-c";
      case "D":
        return "grade-d";
      default:
        return "grade-f";
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-gray-400">
      {/* Decorative Border */}
      <div className="border-4 border-double border-gray-400 p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <div className="bg-yellow-200 border border-yellow-400 p-2 rounded-full">
              <Crown className="w-6 h-6 text-yellow-800" />
            </div>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Diamond className="w-5 h-5 text-yellow-600" />
              <h1 className="text-2xl font-bold text-yellow-800">
                {studentData.school}
              </h1>
              <Diamond className="w-5 h-5 text-yellow-600" />
            </div>
            <h2 className="text-lg font-semibold mb-3 text-yellow-700">
              Certificate of Academic Achievement
            </h2>
            <div className="flex justify-center items-center space-x-2 text-yellow-600 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>{studentData.session}</span>
              {studentData.examType && (
                <>
                  <span>•</span>
                  <span>{studentData.examType}</span>
                </>
              )}
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white border border-yellow-300 p-4 mb-6 rounded">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="text-center mb-3">
                <div className="text-base text-gray-600 mb-2">
                  This is to certify that
                </div>
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {studentData.name}
                </div>
                <div className="text-gray-600 text-sm">
                  has successfully completed the academic requirements
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                  <div className="text-xs text-gray-600 text-center">
                    Roll Number
                  </div>
                  <div className="font-bold text-yellow-600 text-center text-base">
                    {studentData.rollNumber}
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                  <div className="text-xs text-gray-600 text-center">Class</div>
                  <div className="font-bold text-yellow-600 text-center text-base">
                    {studentData.className}
                  </div>
                </div>
                {studentData.fatherName && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                    <div className="text-xs text-gray-600 text-center">
                      Father's Name
                    </div>
                    <div className="font-bold text-yellow-600 text-center text-sm">
                      {studentData.fatherName}
                    </div>
                  </div>
                )}
                {studentData.motherName && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                    <div className="text-xs text-gray-600 text-center">
                      Mother's Name
                    </div>
                    <div className="font-bold text-yellow-600 text-center text-sm">
                      {studentData.motherName}
                    </div>
                  </div>
                )}
                {studentData.address && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded md:col-span-2">
                    <div className="text-xs text-gray-600 text-center">
                      Address
                    </div>
                    <div className="font-bold text-yellow-600 text-center text-sm">
                      {studentData.address}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {studentData.photo && (
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-24 h-24 bg-yellow-200 rounded-full p-1">
                    <img
                      src={studentData.photo}
                      alt="Student"
                      className="w-full h-full object-cover rounded-full border-4 border-white"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-yellow-800" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Academic Performance */}
        <div className="bg-white border border-yellow-300 p-4 mb-6 rounded">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center justify-center">
              <Diamond className="w-4 h-4 mr-2 text-yellow-500" />
              Academic Performance
              <Diamond className="w-4 h-4 ml-2 text-yellow-500" />
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 p-3 rounded"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800 text-sm">
                      {subject.name}
                    </span>
                    <span
                      className={`grade-badge ${getGradeClass(subject.grade)}`}
                    >
                      {subject.grade}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {subject.obtainedMarks} / {subject.totalMarks} marks
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {percentage}%
                </div>
                <div className="text-gray-600 mb-3 text-sm">
                  Overall Percentage
                </div>
                <div
                  className={`inline-block px-3 py-2 rounded-full text-lg font-bold border-2 ${getGradeClass(
                    getOverallGrade(percentage)
                  )}`}
                >
                  Grade {getOverallGrade(percentage)}
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  {totalObtained} out of {totalMarks} marks
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result Declaration */}
        <div className="text-center mb-6">
          <div
            className={`inline-block px-12 py-6 rounded border-4 ${
              getResultStatus(percentage) === "PASS"
                ? "bg-green-50 text-green-800 border-green-400"
                : "bg-red-50 text-red-800 border-red-400"
            }`}
          >
            <div className="text-4xl font-bold mb-3">
              {getResultStatus(percentage)}
            </div>
            <div className="flex justify-center items-center space-x-2">
              {getResultStatus(percentage) === "PASS" ? (
                <>
                  <Crown className="w-6 h-6" />
                  <span className="text-lg">Congratulations!</span>
                  <Crown className="w-6 h-6" />
                </>
              ) : (
                <>
                  <Award className="w-6 h-6" />
                  <span className="text-lg">Keep Trying!</span>
                  <Award className="w-6 h-6" />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div className="bg-white border border-yellow-300 p-4 rounded">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-bold text-gray-800 mb-2 text-sm">
                Class Teacher
              </div>
              <div className="mt-4 border-b-2 border-yellow-400 w-24 mx-auto"></div>
              <div className="mt-1 text-xs text-gray-600">Signature & Seal</div>
            </div>
            <div>
              <div className="font-bold text-gray-800 mb-2 text-sm">
                Principal
              </div>
              <div className="mt-4 border-b-2 border-yellow-400 w-24 mx-auto"></div>
              <div className="mt-1 text-xs text-gray-600">Signature & Seal</div>
            </div>
            <div>
              <div className="font-bold text-gray-800 mb-2 text-sm">
                Date of Issue
              </div>
              <div className="mt-2 text-base font-bold text-yellow-600">
                {new Date().toLocaleDateString()}
              </div>
              <div className="mt-1 text-xs text-gray-600">Official Date</div>
            </div>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="text-center mt-4">
          <div className="flex items-center justify-center space-x-2 text-yellow-600">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Excellence in Education</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTemplate3;
