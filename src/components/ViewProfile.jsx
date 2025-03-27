import React, { useState, useEffect } from "react";
import { X, Edit3, Save, Gavel } from "lucide-react";
import { dataBase, account } from "@/lib/appwrite";
import { Query } from "appwrite";
import BGanimation from "@/animations/BGanimation";

const ViewProfile = ({
  handleViewProfile,
  currentUser,
  currentUserFirstChar,
}) => {
  const [name, setName] = useState(currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [auctionCount, setAuctionCount] = useState(0);

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

  useEffect(() => {
    const fetchMyAuctions = async () => {
      try {
        const user = await account.get();
        const response = await dataBase.listDocuments(
          "67e42ee3003893df6ebc",
          "67e42f15000bb09c9d83",
          [Query.equal("userId", user.$id)]
        );
        setAuctionCount(response.total);
      } catch (err) {
        console.error("Error fetching auctions:", err);
      }
    };

    fetchMyAuctions();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 z-[9999] flex justify-center items-center">
      {/* Phone Frame Mockup */}
      <BGanimation />
      <div className="relative mx-auto  bg-black backdrop-blur-3xlrounded-[2.5rem] h-[600px] w-[300px]">
        <div className="rounded-[2rem] overflow-y-auto w-[272px] h-[572px] bg-black p-4 animate-slide-up">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-cyan-400 hover:text-red-500 transition-all duration-200 z-50"
            onClick={handleViewProfile}
          >
            <X size={24} />
          </button>

          {/* Profile Section */}
          <div className="mt-10 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-cyan-500/10 p-3 rounded-full">
                <span className="h-6 w-6 text-cyan-400 flex justify-center items-center text-3xl cursor-pointer">
                  {currentUserFirstChar}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    className="bg-transparent border-b border-cyan-400 text-white text-lg focus:outline-none text-center"
                  />
                ) : (
                  <h2 className="text-xl font-semibold text-cyan-400">
                    {name}
                  </h2>
                )}

                <button
                  className="text-cyan-400 hover:text-cyan-300 transition-all"
                  onClick={() =>
                    isEditing ? handleSave() : setIsEditing(true)
                  }
                  disabled={loading}
                >
                  {isEditing ? <Save size={20} /> : <Edit3 size={20} />}
                </button>
              </div>

              <p className="text-gray-400 mt-1 text-sm">
                Edit your profile details
              </p>
            </div>
          </div>

          {/* My Auctions */}
          <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between gap-4 text-white shadow mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-600/10 p-2 rounded-full">
                <Gavel className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">My Auctions</p>
                <h3 className="text-lg font-semibold">{auctionCount}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
