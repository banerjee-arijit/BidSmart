import React from "react";

const BGanimation = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute h-2 w-2 bg-cyan-400 rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BGanimation;
