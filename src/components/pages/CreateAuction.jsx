import React, { useState } from "react";
import {
  Info,
  ImagePlus,
  BadgeDollarSign,
  Clock4,
  Box,
  Gavel,
} from "lucide-react";
import InstructionModal from "../InstructionModal";
import BGanimation from "@/animations/BGanimation";

const CreateAuction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    initialPrice: "",
    endDate: "",
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      <BGanimation />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div className="max-w-3xl bg-transparent backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="bg-[#00b8db1a] p-4 rounded-full shadow-md">
            <Gavel className="w-6 h-6 md:w-10 md:h-10 animate-pulse  text-[#00b8db] drop-shadow" />
          </div>
          <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-[#00b8db] to-cyan-400 bg-clip-text text-transparent drop-shadow-lg text-center">
            Launch Your Auction
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-[#00b8db] hover:text-cyan-300 transition-all text-sm"
          >
            <Info size={18} />
            <span className="underline underline-offset-4">
              Read Instructions
            </span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="border-2 border-dashed border-[#00b8db60] rounded-lg p-6 text-center bg-[#0f1629]">
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="hidden"
              id="images"
              accept="image/*"
            />
            <label
              htmlFor="images"
              className="cursor-pointer flex flex-col items-center space-y-2"
            >
              <ImagePlus className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-200">
                Drop your images here or click to upload
              </span>
              <span className="text-sm text-cyan-500">
                (You can select multiple images)
              </span>
            </label>
            {images.length > 0 && (
              <div className="mt-4 text-sm text-green-400">
                {images.length} image(s) selected
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-cyan-200 mb-1"
              >
                <Box className="w-4 h-4 inline mr-2 text-[#00b8db]" />
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="w-full px-4 py-2 bg-[#0f172a] border border-[#00b8db40] rounded-lg focus:ring-2 focus:ring-[#00b8db] text-white"
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-cyan-200 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-2 bg-[#0f172a] border border-[#00b8db40] rounded-lg focus:ring-2 focus:ring-[#00b8db] text-white"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="initialPrice"
                  className="block text-sm font-medium text-cyan-200 mb-1"
                >
                  <BadgeDollarSign className="w-4 h-4 inline mr-2 text-[#00b8db]" />
                  Initial Price
                </label>
                <input
                  type="number"
                  id="initialPrice"
                  className="w-full px-4 py-2 bg-[#0f172a] border border-[#00b8db40] rounded-lg focus:ring-2 focus:ring-[#00b8db] text-white"
                  value={formData.initialPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, initialPrice: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-cyan-200 mb-1"
                >
                  <Clock4 className="w-4 h-4 inline mr-2 text-[#00b8db]" />
                  End Date
                </label>
                <input
                  type="datetime-local"
                  id="endDate"
                  className="w-full px-4 py-2 bg-[#0f172a] border border-[#00b8db40] rounded-lg focus:ring-2 focus:ring-[#00b8db] text-white"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00b8db] text-white py-3 rounded-lg hover:bg-cyan-400 transition-colors font-medium text-lg shadow-md hover:shadow-cyan-500/40"
          >
            Place the Product
          </button>
        </form>
      </div>

      {/* Instructions Modal */}
      {isModalOpen && (
        <InstructionModal
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default CreateAuction;
