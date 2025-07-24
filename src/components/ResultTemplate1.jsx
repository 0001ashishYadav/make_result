import React from "react";
import {
  Award,
  Calendar,
  User,
  Hash,
  School,
  Users,
  MapPin,
} from "lucide-react";

const ResultTemplate1 = ({ studentData, subjects }) => {
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
      <div className="text-center mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {studentData.school}
        </h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-3">
          Academic Result Card
        </h2>
        <div className="flex justify-center items-center space-x-2 text-gray-600 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{studentData.session}</span>
          {studentData.examType && (
            <>
              <span>•</span>
              <span>{studentData.examType}</span>
            </>
          )}
        </div>
      </div>

      {/* Student Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-xs text-gray-600">Student Name</div>
                <div className="font-semibold text-gray-800 text-sm">
                  {studentData.name}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Hash className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-xs text-gray-600">Roll Number</div>
                <div className="font-semibold text-gray-800 text-sm">
                  {studentData.rollNumber}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <School className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-xs text-gray-600">Class</div>
                <div className="font-semibold text-gray-800 text-sm">
                  {studentData.className}
                </div>
              </div>
            </div>
            {studentData.fatherName && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <div>
                  <div className="text-xs text-gray-600">Father's Name</div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {studentData.fatherName}
                  </div>
                </div>
              </div>
            )}
            {studentData.motherName && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <div>
                  <div className="text-xs text-gray-600">Mother's Name</div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {studentData.motherName}
                  </div>
                </div>
              </div>
            )}
            {studentData.address && (
              <div className="flex items-start space-x-2 md:col-span-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-1" />
                <div>
                  <div className="text-xs text-gray-600">Address</div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {studentData.address}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {studentData.photo && (
          <div className="flex justify-center md:justify-end">
            <img
              src={studentData.photo}
              alt="Student"
              className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300"
            />
          </div>
        )}
      </div>

      {/* Subjects Table */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-3">
          Subject-wise Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Subject
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold">
                  Total Marks
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold">
                  Obtained Marks
                </th>
                <th className="border border-gray-300 px-3 py-2 text-center font-semibold">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-3 py-2">
                    {subject.name}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {subject.totalMarks}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    {subject.obtainedMarks}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    <span
                      className={`grade-badge ${getGradeClass(subject.grade)}`}
                    >
                      {subject.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded border">
          <h4 className="text-base font-semibold text-gray-800 mb-3">
            Summary
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Marks:</span>
              <span className="font-semibold">{totalMarks}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Obtained Marks:</span>
              <span className="font-semibold">{totalObtained}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Percentage:</span>
              <span className="font-semibold">{percentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Overall Grade:</span>
              <span
                className={`grade-badge ${getGradeClass(
                  getOverallGrade(percentage)
                )}`}
              >
                {getOverallGrade(percentage)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded border">
          <h4 className="text-base font-semibold text-gray-800 mb-3">Result</h4>
          <div className="text-center">
            <div
              className={`text-3xl font-bold mb-2 ${
                getResultStatus(percentage) === "PASS"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {getResultStatus(percentage)}
            </div>
            <div className="flex justify-center">
              <Award
                className={`w-6 h-6 ${
                  getResultStatus(percentage) === "PASS"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-gray-800 pt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs text-gray-600">
        <div>
          <div className="font-semibold">Class Teacher</div>
          <div className="mt-6 border-b border-gray-400 w-24 mx-auto"></div>
          <div className="mt-1">Signature</div>
        </div>
        <div>
          <div className="font-semibold">Principal</div>
          <div className="mt-6 border-b border-gray-400 w-24 mx-auto"></div>
          <div className="mt-1">Signature</div>
        </div>
        <div>
          <div className="font-semibold">Date</div>
          <div className="mt-6 border-b border-gray-400 w-24 mx-auto"></div>
          <div className="mt-1">{new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultTemplate1;
