import React, { useState } from "react";
import { Form } from "react-router-dom";

function Register() {
   const [formData,setFormData]=useState({
          name:"",
          phone:"",
          email:"",
      })

 const [loading,setLoading]=useState(false);

    const submitButton=async(e)=>{
      console.log('submit ');
      e.preventDefault();    //lock event jbtk response nhi aata 
      setLoading(true);
      try{
        const response=await fetch('http://localhost:3000/api/users',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
        });
        if(!response.ok){
          throw new Error ('Data  not save');
        }
        alert('data saved successfully');
        setFormData({name:'', email:'',phone:''});


    }
    catch(error){
      alert(error.message || 'something went wrong ');
    } finally{
      setLoading(false);
    }
       };


  return (
    // <Form>
    <form  onSubmit={submitButton}           className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#f7c600]">
            QuickKart
          </h1>
          <p className="text-gray-500 mt-2">
            India's last minute app
          </p>
        </div>

        {/* Welcome Text */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Login or Signup
          </h2>
          {/* <p className="text-gray-500 mt-1">
            Enter your mobile number
          </p> */}
        </div>

        {/* name Input */}
        <input
          type="text"
          placeholder="Enter your name " name="name" required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
        />
        <br/><br/>
        {/* name email */}
        <input
          type="email"
          placeholder="Enter your email " name="email" required value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
        />
 <br/><br/>

        {/* phone Input */}
        <input
          type="number"
          placeholder="Enter your  number " name="phone" required value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
        />


        {/* Continue Button */}
        <button  type="submit"  disabled={loading}    className="w-full bg-green-600 text-white py-3 rounded-lg mt-5 font-semibold hover:bg-green-700">
          Continue
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to our
          <span className="text-green-600 font-medium">
            {" "}Terms of Service
          </span>
          {" "}and
          <span className="text-green-600 font-medium">
            {" "}Privacy Policy
          </span>
        </p>
      </div>
    </form>
    // </Form>
  );
}

export default Register;