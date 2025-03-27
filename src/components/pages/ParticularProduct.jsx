import React, { useEffect, useState } from "react";
import useProductStore from "@/store/auctionCardInfoStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { storage, account } from "@/lib/appwrite";
import { Timer, TrendingUp, History, Eye } from "lucide-react";

const ParticularProduct = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [username, setUsername] = useState("");

  const { id } = useParams();
  const { products, fetchProducts, loading } = useProductStore();

  const product = products.find((p) => p.$id === id);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      try {
        if (product?.imageIds?.length > 0) {
          const urls = product.imageIds.map(
            (fileId) =>
              storage.getFilePreview("67e4311200238b5e6160", fileId).href
          );
          setImageUrls(urls);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (product) getImages();
  }, [product]);

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await account.get();
      setUsername(currentUser.name.split(" ")[0]);
    };
    getUser();
  }, []);

  const getTimeLeft = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;

    if (diff <= 0) return "Auction ended";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${hours}h ${minutes}m left`;
  };

  if (loading || !product) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-3xl flex flex-col gap-10">
      {/* Image Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
          {imageUrls.length > 1 ? (
            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Product ${index + 1}`}
                  className="min-w-full h-full object-cover rounded-2xl"
                />
              ))}
            </div>
          ) : (
            <img
              src={imageUrls[0] || "https://via.placeholder.com/600x400"}
              alt={product?.productName}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}

          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
            <Timer className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white">
              {getTimeLeft(product.endDate)}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="flex flex-col gap-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-wide">
          {product.productName}
        </h2>
        <p className="text-gray-400 leading-relaxed">{product.description}</p>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: <TrendingUp className="text-cyan-400" />,
              value: `₹${product?.currentBid || 0}`,
              label: "Current Bid",
            },
            {
              icon: <History className="text-purple-400" />,
              value: `₹${product?.initialPrice || 0}`,
              label: "Starting Price",
            },
            {
              icon: <Eye className="text-yellow-400" />,
              value: product?.views || 0,
              label: "Views",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center shadow-md col-span-1"
            >
              <div className="w-6 h-6 mx-auto mb-2">{item.icon}</div>
              <p className="text-xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <input
            type="number"
            placeholder="Enter your bid"
            className="w-full px-4 py-3 bg-white/10 text-white rounded-lg border border-cyan-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-cyan-500/30 transition-all duration-300">
            Place Bid
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ParticularProduct;
