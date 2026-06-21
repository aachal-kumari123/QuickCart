import React from "react";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaThreads,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
return ( <footer className="bg-white mt-10"> <div className="max-w-full mx-auto px-6 py-10">


    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

      {/* Useful Links */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Useful Links
        </h2>

        <div className="grid grid-cols-3 gap-4 text-gray-600">
          <ul className="space-y-3">
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Contact</li>
          </ul>

          <ul className="space-y-3">
            <li>Partner</li>
            <li>Franchise</li>
            <li>Seller</li>
            <li>Warehouse</li>
            <li>Deliver</li>
            <li>Resources</li>
          </ul>

          <ul className="space-y-3">
            <li>Recipes</li>
            <li>Bistro</li>
            <li>District</li>
            <li>Blinkit Ambulance</li>
          </ul>
        </div>
      </div>

      {/* Categories */}
      <div className="md:col-span-3">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-semibold">
            Categories
          </h2>

          <button className="text-green-600 font-medium">
            see all
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 text-gray-600">

          <ul className="space-y-3">
            <li>Bath & Body</li>
            <li>Beauty & Cosmetics</li>
            <li>Health & Pharma</li>
            <li>Atta, Rice & Dal</li>
            <li>Bakery & Biscuits</li>
            <li>Kitchenware & Appliances</li>
            <li>Drinks & Juices</li>
            <li>Sauces & Spreads</li>
            <li>Home & Lifestyle</li>
            <li>Stationery & Games</li>
            <li>Rakhi Gifts</li>
          </ul>

          <ul className="space-y-3">
            <li>Hair</li>
            <li>Feminine Hygiene</li>
            <li>Sexual Wellness</li>
            <li>Oil, Ghee & Masala</li>
            <li>Dry Fruits & Cereals</li>
            <li>Chips & Namkeen</li>
            <li>Tea, Coffee & Milk Drinks</li>
            <li>Paan Corner</li>
            <li>Cleaners & Repellents</li>
            <li>Print Store</li>
          </ul>

          <ul className="space-y-3">
            <li>Skin & Face</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Dairy, Bread & Eggs</li>
            <li>Chicken, Meat & Fish</li>
            <li>Sweets & Chocolates</li>
            <li>Instant Food</li>
            <li>Ice Creams & More</li>
            <li>Electronics</li>
            <li>E-Gift Cards</li>
          </ul>

          <ul className="space-y-3">
            <li>Pet Care</li>
            <li>Cold Drinks</li>
            <li>Frozen Food</li>
            <li>Breakfast</li>
            <li>Organic Food</li>
            <li>Cleaning Essentials</li>
            <li>Home Decor</li>
            <li>Toys</li>
            <li>Sports</li>
            <li>Books</li>
          </ul>

        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 bg-gray-100 rounded-lg px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6">

      <p className="text-gray-500 text-sm">
        © Blink Commerce Private Limited, 2016-2026
      </p>

      <div className="flex items-center gap-4">
        <span className="font-semibold">
          Download App
        </span>

        <button className="bg-black text-white px-4 py-2 rounded">
          App Store
        </button>

        <button className="bg-black text-white px-4 py-2 rounded">
          Google Play
        </button>
      </div>

      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <FaFacebookF />
        </div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <FaXTwitter />
        </div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <FaInstagram />
        </div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <FaLinkedinIn />
        </div>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <FaThreads />
        </div>
      </div>
    </div>
  </div>
</footer>


);
}

export default Footer;
