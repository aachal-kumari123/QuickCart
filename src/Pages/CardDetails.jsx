import React from "react";
import { useParams } from "react-router-dom";
import cards from "../Data/Categories";
import Navbar from "../Components/Navbar";

function CardDetails() {
  const { id } = useParams();

  const card = cards.find(
    (item) => item.id === Number(id)
  );

  if (!card) {
    return (
      <h1 className="text-center mt-10 text-red-500">
        Card Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
        {/* <Navbar/> */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-64 object-contain"
        />

        <h1 className="text-3xl font-bold mt-4">
          {card.title}
        </h1>

        <p className="text-gray-600 mt-3">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default CardDetails;