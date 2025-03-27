import { Gavel, Flame, TrendingUp, PlusCircle } from "lucide-react";
import React, { useEffect } from "react";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import useProductStore from "@/store/auctionCardInfoStore";
import Loader from "@/loader/Loader";
import BGanimation from "@/animations/BGanimation";

const HomePage = () => {
  const { products, fetchProducts, loading } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <Loader />;

  const now = new Date();
  const liveAuctions = products.filter((p) => new Date(p.endDate) > now);
  const highestBidAuctions = [...products].sort(
    (a, b) => b.initialPrice - a.initialPrice
  );

  return (
    <div className="mt-10 space-y-12 px-4">
      <BGanimation />

      {/* All Auctions */}
      <SectionHeader
        icon={<Gavel />}
        title="All Auctions"
        showMoreLink="/allauction"
      />
      <ProductGrid products={products.slice(0, 4)} />

      {/* Live Auctions */}
      <SectionHeader
        icon={<Flame />}
        title="Live Auctions"
        live
        showMoreLink="/alliveauction"
      />
      {/* <ProductGrid products={liveAuctions.slice(0, 4)} /> */}

      {/* Highest Bids */}
      <SectionHeader icon={<TrendingUp />} title="Highest Bids" />
      {/* <ProductGrid products={highestBidAuctions.slice(0, 4)} /> */}

      {/* Create Bid */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("create")}
          className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:bg-cyan-600 transition"
        >
          <PlusCircle className="w-5 h-5" />
          Create Your Own Bid
        </button>
      </div>
    </div>
  );
};

const SectionHeader = ({ icon, title, live, showMoreLink }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 p-4 bg-black/60 backdrop-blur-md border border-cyan-500/10 rounded-2xl shadow-lg text-white w-fit">
        {icon}
        <span className="text-lg font-semibold text-cyan-400">
          {live && (
            <span className="text-green-400 animate-pulse font-bold">
              Live{" "}
            </span>
          )}
          {title}
        </span>
      </div>

      {showMoreLink && (
        <button
          onClick={() => navigate("allauction")}
          className="text-sm text-cyan-400 hover:underline transition"
        >
          Show More →
        </button>
      )}
    </div>
  );
};

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.length > 0 ? (
      products.map((product) => <Card key={product.$id} product={product} />)
    ) : (
      <p className="text-gray-400 text-sm col-span-full text-center">
        No products to show.
      </p>
    )}
  </div>
);

export default HomePage;
