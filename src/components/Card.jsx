import React, { useEffect, useState } from "react";
import { Calendar, Eye, Timer } from "lucide-react";
import { account, storage } from "@/lib/appwrite";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration

const Card = ({ product }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getImage = async () => {
      try {
        if (product?.imageIds?.length > 0) {
          const fileId = product.imageIds[0];
          const url = storage.getFilePreview("67e4311200238b5e6160", fileId);
          setImageUrl(url.href);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getImage();
  }, [product]);

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await account.get();
      setUsername(currentUser.name.substring(0, currentUser.name.indexOf(" ")));
    };
    getUser();
  }, [product]);

  const getTimeLeft = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${days}d ${hours}h left`;
  };

  const navigate = useNavigate();

  return (
    <div className="w-[300px] rounded-2xl bg-white/5 backdrop-blur-lg cursor-pointer p-4 hover:shadow-[0_0_40px_rgba(67,255,255,0.15)] transition-all duration-300">
      <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product?.productName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-black/20 flex items-center justify-center text-white text-sm">
            Loading...
          </div>
        )}

        {/* Overlay with Time Left */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Timer className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-medium text-white">
            {getTimeLeft(product?.endDate)}
          </span>
        </div>

        {/* User Info */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold">
            {username.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">{username}</p>
            <p className="text-gray-300 text-xs">Creator</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">
            {product?.productName}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {product?.description}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 py-3 border-y border-white/10">
          <div className="text-center">
            <p className="text-cyan-400 font-semibold">
              ₹{product?.initialPrice}
            </p>
            <p className="text-xs text-gray-400">Current Bid</p>
          </div>

          <div className="text-center border-x border-white/10">
            <div className="flex items-center justify-center gap-1">
              <Eye className="w-4 h-4 text-gray-400" />
              <p className="text-white font-semibold">{product?.views}</p>
            </div>
            <p className="text-xs text-gray-400">Views</p>
          </div>

          <div className="text-center">
            <p className="text-green-400 font-semibold">
              ₹{product?.maxBid || 0}
            </p>
            <p className="text-xs text-gray-400">Max Bid</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          onClick={() => navigate(`particularProduct/${product.$id}`)}
        >
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default Card;
