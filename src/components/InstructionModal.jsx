import React from "react";
import {
  X,
  FileText,
  DollarSign,
  Camera,
  Clock,
  AlertTriangle,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

const InstructionModal = ({ isOpen, onClose }) => {
  const instructions = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: "Clear Title",
      description: "Provide a clear and detailed title for your auction",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
      title: "Set Pricing",
      description: "Set a reasonable starting bid that reflects item value",
    },
    {
      icon: <Camera className="w-6 h-6 text-cyan-400" />,
      title: "Quality Images",
      description: "Upload clear, well-lit photos from multiple angles",
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: "Duration",
      description: "Choose an appropriate auction duration",
    },
  ];

  const warnings = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      title: "No Edits",
      description: "Auction details cannot be modified after creation",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      title: "Be Honest",
      description: "Misrepresenting items will result in account suspension",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-400" />,
      title: "Verify Details",
      description: "Double-check all information before submission",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center md:items-start justify-center md:justify-start z-50 p-4 sm:p-6 backdrop-blur-3xl">
      <div className="bg-[#0f172a] w-full max-w-4xl rounded-2xl shadow-xl border border-cyan-500/20 max-h-[90vh] overflow-y-auto ml-0 md:ml-24">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400">
              Auction Guidelines
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-500 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Instructions */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
                Important Instructions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {instructions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-400">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warnings */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3 sm:mb-4">
                Important Warnings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warnings.map((item, index) => (
                  <div
                    key={index}
                    className="bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
