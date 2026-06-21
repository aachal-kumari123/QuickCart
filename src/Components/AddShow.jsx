import React from 'react';
import banner from "../assets/first.png";
import { Link } from 'react-router-dom';


function AddShow() {

  return (
    <>
    <div className="h-[350px] w-[90%] ml-23 rounded-2xl mt-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}  >

     <div className="ml-12 max-w-md">

        <h3 className="text-4xl text-green-800 font-bold relative top-10 mb-4">
         Fresh <span className='text-orange-400 text-5xl'>Groceries</span>
          </h3>

        <p className="text-2xl text-black-700 mt-29  mb-6">
          Get fruits, vegetables, dairy products and more delivered to your
          doorstep in minutes.
        </p>

        <Link to='/banner'>
        <button className="bg-green-600 text-white px-6 py-3   rounded-lg hover:bg-green-700">
          Shop Now
        </button>
        </Link>

      </div>
 </div>
    

    

    
</>
    
  );
}

export default AddShow;
