import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Award,
  FileText,
  Sparkles,
} from "lucide-react";
import StudentInfoStep from "./components/StudentInfoStep";
import SubjectsStep from "./components/SubjectsStep";
import ResultStep from "./components/ResultStep";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentData, setStudentData] = useState({
    name: "",
    rollNumber: "",
    className: "",
    school: "",
    session: "",
    examType: "",
    photo: null,
  });
  const [subjects, setSubjects] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const steps = [
    { id: 1, title: "Student Info", icon: GraduationCap },
    { id: 2, title: "Subjects", icon: FileText },
    { id: 3, title: "Result", icon: Award },
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return (
        studentData.name &&
        studentData.rollNumber &&
        studentData.className &&
        studentData.school
      );
    }
    if (currentStep === 2) {
      return subjects.length > 0;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Result Maker
              </h1>
            </div>
            <div className="text-sm text-gray-500">Step {currentStep} of 3</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 no-print">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-110"
                      : isCompleted
                      ? "bg-green-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="ml-3">
                  <div
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-blue-600"
                        : isCompleted
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-6 rounded-full transition-all duration-300 ${
                      isCompleted ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 transform">
          {currentStep === 1 && (
            <StudentInfoStep
              studentData={studentData}
              setStudentData={setStudentData}
            />
          )}
          {currentStep === 2 && (
            <SubjectsStep subjects={subjects} setSubjects={setSubjects} />
          )}
          {currentStep === 3 && (
            <ResultStep
              studentData={studentData}
              subjects={subjects}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200"
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === 3 || !canProceed()}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 3 || !canProceed()
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-105"
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
