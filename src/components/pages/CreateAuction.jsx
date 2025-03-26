import React, { useState } from "react";
import { Gavel, Info, Upload, PlayCircle } from "lucide-react";
import InstructionModal from "../InstructionModal";

const CreateAuction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    initialPrice: "",
    reservePrice: "",
    minBidIncrement: "",
    endTime: "",
    location: "",
    shippingInfo: "",
  });

  const handleImageChange = (e) => {
    if (e.target.files) setImages(Array.from(e.target.files));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, images });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#010409] via-[#050e18] to-[#081826] text-white">
      <div className="max-w-6xl space-y-14">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <div className="w-fit mx-auto bg-[#00b8db1a] p-4 rounded-full shadow-md">
            <Gavel className="w-12 h-12 text-[#00b8db] drop-shadow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00b8db] to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            Launch Your Auction
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center mx-auto gap-2 text-[#00b8db] hover:text-cyan-300 transition-all"
          >
            <Info size={20} />
            <span className="underline underline-offset-4">
              Read Instructions
            </span>
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0a192f] border border-[#00b8db30] p-8 rounded-2xl shadow-md"
        >
          {/* IMAGE UPLOAD */}
          <div className="col-span-full">
            <label className="block text-lg font-semibold text-[#00b8db] mb-3">
              Product Images
            </label>
            <div className="border-2 border-dashed border-[#00b8db50] rounded-xl p-6 text-center hover:border-[#00b8db] transition">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="images"
              />
              <label
                htmlFor="images"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="w-8 h-8 text-[#00b8db]" />
                <span className="text-gray-400">
                  Click to upload or drag images
                </span>
              </label>
              {images.length > 0 && (
                <p className="mt-2 text-sm text-[#00b8db]">
                  {images.length} image(s) selected
                </p>
              )}
            </div>
          </div>

          {/* FORM FIELDS */}
          {[
            ["productName", "Product Name", "text"],
            ["description", "Product Description", "textarea"],
            ["category", "Category", "select"],
            ["initialPrice", "Starting Price ($)", "number"],
            ["reservePrice", "Reserve Price ($)", "number"],
            ["minBidIncrement", "Minimum Bid Increment ($)", "number"],
            ["endTime", "Auction End Time", "datetime-local"],
            ["location", "Location", "text"],
            ["shippingInfo", "Shipping Info", "textarea"],
          ].map(([name, label, type]) => (
            <div
              key={name}
              className={type === "textarea" ? "col-span-full" : ""}
            >
              <label className="block text-[#00b8db] mb-1">{label}</label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  rows={3}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="w-full bg-black/30 border border-[#00b8db40] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00b8db]"
                />
              ) : type === "select" ? (
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-[#00b8db40] p-3 rounded-lg text-white focus:outline-none focus:border-[#00b8db]"
                >
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="art">Art</option>
                  <option value="collectibles">Collectibles</option>
                  <option value="others">Others</option>
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="w-full bg-black/30 border border-[#00b8db40] p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00b8db]"
                />
              )}
            </div>
          ))}

          {/* SUBMIT */}
          <div className="col-span-full text-center mt-6">
            <button
              type="submit"
              className="bg-[#00b8db] hover:bg-cyan-400 text-white p-3 rounded-lg font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <PlayCircle size={20} />
              <span>Start Auction</span>
            </button>
          </div>
        </form>

        {/* DEMO SECTION */}
      </div>

      {/* INSTRUCTIONS MODAL */}
      <InstructionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CreateAuction;
