import React, { useState } from "react";
import { X, Edit3, Save } from "lucide-react";
import { account } from "../lib/appwrite"; // Import Appwrite SDK

const ViewProfile = ({
  handleViewProfile,
  currentUser,
  currentUserFirstChar,
}) => {
  const [name, setName] = useState(currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setName(e.target.value);

  const handleSave = async () => {
    try {
      setLoading(true);
      await account.updateName(name);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update name:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex sm:justify-end justify-center sm:items-center items-end transition-all z-50">
      <div className="bg-gray-900 p-6 w-full max-w-md sm:max-w-xs sm:h-full h-[60vh] rounded-t-2xl sm:rounded-none sm:rounded-l-2xl shadow-lg relative flex flex-col gap-4">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-cyan-400 hover:text-red-500 transition-all duration-200"
          onClick={handleViewProfile}
        >
          <X size={24} />
        </button>

        {/* Profile Details */}
        <div className="mt-8 sm:mt-0 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-2">
            {/* Profile Icon */}
            <div className="bg-cyan-500/10 p-3 rounded-full">
              <span className="h-6 w-6 text-cyan-400 flex justify-center items-center text-3xl cursor-pointer">
                {currentUserFirstChar}
              </span>
            </div>

            {/* Name Section */}
            <div className="flex items-center gap-2">
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  className="bg-transparent border-b border-cyan-400 text-white text-lg focus:outline-none"
                />
              ) : (
                <h2 className="text-xl font-semibold text-cyan-400">{name}</h2>
              )}

              {/* Edit & Save Buttons */}
              <button
                className="text-cyan-400 hover:text-cyan-300 transition-all"
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                disabled={loading}
              >
                {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
              </button>
            </div>

            <p className="text-gray-400 mt-2">Edit your profile details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
