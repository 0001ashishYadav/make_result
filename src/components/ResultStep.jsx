import React from "react";
import { Award, Download, Eye, Palette } from "lucide-react";
import ResultTemplate1 from "./ResultTemplate1";
import ResultTemplate2 from "./ResultTemplate2";
import ResultTemplate3 from "./ResultTemplate3";

const ResultStep = ({
  studentData,
  subjects,
  selectedTemplate,
  setSelectedTemplate,
}) => {
  const templates = [
    { id: 1, name: "Classic", component: ResultTemplate1, preview: "📋" },
    { id: 2, name: "Modern", component: ResultTemplate2, preview: "🎨" },
    { id: 3, name: "Elegant", component: ResultTemplate3, preview: "✨" },
  ];

  const handlePrint = () => {
    // Hide all non-print elements
    const nonPrintElements = document.querySelectorAll(".no-print");
    nonPrintElements.forEach((el) => (el.style.display = "none"));

    // Show only print content
    const printContent = document.getElementById("print-content");
    if (printContent) {
      printContent.style.display = "block";

      // Apply print styles
      const originalBodyClass = document.body.className;
      document.body.className = "print-mode";

      // Trigger print
      window.print();

      // Restore original state after print dialog
      setTimeout(() => {
        document.body.className = originalBodyClass;
        nonPrintElements.forEach((el) => (el.style.display = ""));
      }, 100);
    }
  };

  const SelectedTemplate =
    templates.find((t) => t.id === selectedTemplate)?.component ||
    ResultTemplate1;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8 no-print">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Final Result</h2>
        <p className="text-gray-600">
          Choose a template and preview your result
        </p>
      </div>

      {/* Template Selection */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 shadow-lg no-print">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2 text-blue-500" />
          Choose Template
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedTemplate === template.id
                  ? "border-blue-500 bg-blue-50 shadow-lg transform scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="text-4xl mb-2">{template.preview}</div>
              <div className="font-medium text-gray-800">{template.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Download className="w-5 h-5 mr-2" />
          Print Result
        </button>
        <button
          onClick={() =>
            document
              .getElementById("result-preview")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Eye className="w-5 h-5 mr-2" />
          Preview
        </button>
      </div>

      {/* Result Preview */}
      <div
        id="result-preview"
        className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 no-print"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
          <h3 className="text-xl font-bold flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Result Preview
          </h3>
        </div>
        <div className="p-6">
          <SelectedTemplate studentData={studentData} subjects={subjects} />
        </div>
      </div>

      {/* Print Content (Hidden by default, shown only during print) */}
      <div
        id="print-content"
        className="print-only"
        style={{ display: "none" }}
      >
        <SelectedTemplate studentData={studentData} subjects={subjects} />
      </div>
    </div>
  );
};

export default ResultStep;
