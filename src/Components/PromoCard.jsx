import React from "react";

function PromoCard({ title, subtitle, image, bgColor }) {
  return (
    <div
      className={`${bgColor} rounded-2xl h-[280px] flex items-center justify-between p-6 overflow-hidden`}
    >
      {/* Left Content */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-lg mb-5">
          {subtitle}
        </p>

        <button className="bg-gray-800 text-white px-5 py-3 rounded-lg">
          Order Now
        </button>
      </div>

      {/* Right Image */}
      <img
        src={image}
        alt={title}
        className="w-[220px] h-[220px] object-contain"
      />
    </div>
  );
}

export default PromoCard;