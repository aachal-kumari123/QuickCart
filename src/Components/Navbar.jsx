import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="flex items-center justify-between px-6 py-3  bg-white shadow-sm">


  {/* Logo */}
  <div className="flex items-center">
    <h1 className="text-4xl font-bold text-yellow-400">
      Quick<span className="text-green-600  text-5xl">Kart</span>
    </h1>
  </div>

  {/* Delivery Address */}
  <div className="hidden md:block">
    <p className="text-2xl font-semibold">Delivery in 10 minutes</p>
    <p className="text-1xl text-gray-600">
      Home - Lucknow, Uttar Pradesh
    </p>
  </div>

  {/* Search Bar */}
  <div className="flex items-center w-[40%] bg-gray-100 rounded-lg px-3 py-2">
    <Search size={20} className="text-gray-500" />
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full bg-transparent outline-none ml-2"
    />
  </div>

  {/* Login */}
  <Link to='/register' >
  <button className="font-medium hover:text-green-600">
    Login
  </button>
  </Link>

  {/* Cart */}
  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg">
    <ShoppingCart size={20} />
    Cart
  </button>
</nav>


);
}

export default Navbar;
