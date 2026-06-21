import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import AddShow from '../Components/AddShow'
import { TruckElectricIcon } from 'lucide-react';
import PromoCard from "../components/PromoCard";
import CategoryCard from '../Components/CategoriesCard';
 import pharmacy from "../assets/pharmasy1.png";
import petcare from "../assets/petcare1.png";
import diaper from "../assets/diaper1.png";
import categories from '../data/categories';
import Hero from '../Components/Hero';
import ProductCards from '../Components/ProductCart';
import TopProduct from '../Components/TopProduct';

function Home() {
  
const cards = [
  {
    id: 1,
    title: "Pharmacy at your doorstep!",
    subtitle: "Cough syrups, pain relief sprays & more",
    image: pharmacy,
    bgColor: "bg-teal-500",
  },
  {
    id: 2,
    title: "Pet care supplies at your door",
    subtitle: "Food, treats, toys & more",
    image: petcare,
    bgColor: "bg-yellow-400",
  },
  {
    id: 3,
    title: "No time for a diaper run?",
    subtitle: "Get baby care essentials",
    image: diaper,
    bgColor: "bg-slate-200",
  },
];

  return (
    <div>
    <Navbar/>
    <Hero/>
    <ProductCards/>
    <TopProduct/>

    


       {/* inside banner */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
  {cards.map((card) => (
    <PromoCard
      key={card.id}
      title={card.title}
      subtitle={card.subtitle}
      image={card.image}
      bgColor={card.bgColor}
    />
  ))}
</div>


   
    
       <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {categories.map((card) => (
          <CategoryCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
          />
        ))}
      </div>


      <Footer/>
    </div>
  )
}

export default Home
