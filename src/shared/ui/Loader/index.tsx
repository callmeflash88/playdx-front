import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-blue-300 animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loader;
