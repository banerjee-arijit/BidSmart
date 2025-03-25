const Card = () => {
  return (
    <div className="group w-[240px] rounded-2xl bg-[#1b233d] p-1 overflow-hidden shadow-[0_8px_20px_rgba(0,184,219,0.2)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,184,219,0.5)]">
      {/* Image Section */}
      <div className="relative h-[150px] rounded-[15px] overflow-hidden">
        {/* Hover Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#00b8db] text-white text-sm px-4 py-2 rounded-lg hover:bg-cyan-500 hover:shadow-lg transition font-semibold tracking-wide">
            Bid Now
          </button>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-[130px] h-[30px] bg-[#1b233d] rounded-br-[10px] skew-x-[-12deg] shadow-[-10px_-10px_0_0_#1b233d]" />
        <div className="absolute top-[30px] left-0 w-[15px] h-[15px] rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]" />
        <div className="absolute right-[-15px] top-0 w-[15px] h-[15px] rounded-tl-[10px] shadow-[-5px_-5px_0_2px_#1b233d]" />

        {/* NOVA Label */}
        <div className="absolute top-0 left-4 h-[30px] flex items-center">
          <span className="text-white font-bold text-lg tracking-wider">
            NOVA
          </span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-4 px-3 py-3">
        <h3 className="text-white font-semibold text-center text-[18px] tracking-wide">
          Camera
        </h3>

        <div className="flex justify-between mt-5 text-cyan-100/80 text-xs">
          <div className="flex-1 text-center">
            <span className="block text-[13px] font-bold">1.4k</span>
            <span className="block text-[10px] opacity-60">Views</span>
          </div>
          <div className="flex-1 text-center border-l border-white/10">
            <span className="block text-[13px] font-bold">$220</span>
            <span className="block text-[10px] opacity-60">Current Bid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
