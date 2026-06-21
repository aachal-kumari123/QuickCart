import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ id, image, title }) {
  return (
    <Link to={`/card/${id}`}>
      <div className=" w-60 shadow-md rounded-xl p-1 hover:shadow-lg transition cursor-pointer">
        <img src={image} alt={title} className= "  w-50 h-32 object-contain"/>
           <h2 className="text-center font-semibold mt-3">{title}</h2>
      </div>
    </Link>
  );
}

export default CategoryCard;