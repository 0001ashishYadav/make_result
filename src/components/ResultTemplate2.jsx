import React from "react";
import { Award, Trophy, Star, Target, Users, MapPin } from "lucide-react";

const ResultTemplate2 = ({ studentData, subjects }) => {
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
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="bg-gray-100 border-2 border-gray-300 p-4 rounded">
          <h1 className="text-2xl font-bold mb-2">{studentData.school}</h1>
          <h2 className="text-lg font-semibold">Academic Excellence Report</h2>
          <div className="mt-3 flex justify-center items-center space-x-2 text-sm">
            <span>{studentData.session}</span>
            {studentData.examType && (
              <>
                <span>•</span>
                <span>{studentData.examType}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Student Information Card */}
      <div className="bg-gray-50 border border-gray-300 p-4 mb-6 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Student Name</div>
                  <div className="text-lg font-bold text-gray-800">
                    {studentData.name}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded border">
                  <div className="text-xs text-gray-600">Roll Number</div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {studentData.rollNumber}
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-xs text-gray-600">Class</div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {studentData.className}
                  </div>
                </div>
                {studentData.fatherName && (
                  <div className="bg-white p-3 rounded border">
                    <div className="text-xs text-gray-600">Father's Name</div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {studentData.fatherName}
                    </div>
                  </div>
                )}
                {studentData.motherName && (
                  <div className="bg-white p-3 rounded border">
                    <div className="text-xs text-gray-600">Mother's Name</div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {studentData.motherName}
                    </div>
                  </div>
                )}
                {studentData.address && (
                  <div className="bg-white p-3 rounded border md:col-span-2">
                    <div className="text-xs text-gray-600">Address</div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {studentData.address}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {studentData.photo && (
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={studentData.photo}
                  alt="Student"
                  className="w-24 h-24 object-cover rounded border-4 border-white"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center">
                  <Trophy className="w-3 h-3 text-yellow-600" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Performance Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 border-2 border-green-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-800">
                {totalObtained}
              </div>
              <div className="text-green-600 text-sm">Total Obtained</div>
            </div>
            <Target className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-800">
                {percentage}%
              </div>
              <div className="text-blue-600 text-sm">Percentage</div>
            </div>
            <Star className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-purple-800">
                {getOverallGrade(percentage)}
              </div>
              <div className="text-purple-600 text-sm">Overall Grade</div>
            </div>
            <Award className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Subjects Performance */}
      <div className="bg-gray-50 border border-gray-300 p-4 mb-6 rounded">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Subject Performance
        </h3>
        <div className="space-y-3">
          {subjects.map((subject, index) => {
            const subjectPercentage =
              (parseInt(subject.obtainedMarks) / parseInt(subject.totalMarks)) *
              100;
            return (
              <div key={index} className="bg-white p-3 rounded border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {subject.name}
                  </h4>
                  <span
                    className={`grade-badge ${getGradeClass(subject.grade)}`}
                  >
                    {subject.grade}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>
                    {subject.obtainedMarks} / {subject.totalMarks}
                  </span>
                  <span>{subjectPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      subjectPercentage >= 90
                        ? "bg-green-500"
                        : subjectPercentage >= 80
                        ? "bg-blue-500"
                        : subjectPercentage >= 70
                        ? "bg-yellow-500"
                        : subjectPercentage >= 60
                        ? "bg-orange-500"
                        : subjectPercentage >= 50
                        ? "bg-red-500"
                        : "bg-gray-500"
                    }`}
                    style={{ width: `${subjectPercentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Result Status */}
      <div className="text-center mb-6">
        <div
          className={`inline-block px-8 py-4 rounded border-2 ${
            getResultStatus(percentage) === "PASS"
              ? "bg-green-50 text-green-800 border-green-300"
              : "bg-red-50 text-red-800 border-red-300"
          }`}
        >
          <div className="text-3xl font-bold mb-2">
            {getResultStatus(percentage)}
          </div>
          <div className="flex justify-center">
            {getResultStatus(percentage) === "PASS" ? (
              <Trophy className="w-6 h-6" />
            ) : (
              <Target className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border border-gray-300 p-4 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-semibold text-gray-800 text-sm">
              Class Teacher
            </div>
            <div className="mt-4 border-b-2 border-gray-300 w-24 mx-auto"></div>
            <div className="mt-1 text-xs text-gray-600">Signature</div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 text-sm">Principal</div>
            <div className="mt-4 border-b-2 border-gray-300 w-24 mx-auto"></div>
            <div className="mt-1 text-xs text-gray-600">Signature</div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 text-sm">
              Date Issued
            </div>
            <div className="mt-2 text-base font-semibold text-gray-800">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTemplate2;
