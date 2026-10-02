import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink ,Link } from "react-router-dom";
import  { useState } from 'react';
const Navbar = () => {

  const [visible, setvisible] = useState(false )

  const handleclick=()=>{
 
 
  }
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link to="/"><img src={assets.logo} alt="" className="w-36 px-5 sm:px-0" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-grey-70">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p >Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
     
    <img src={assets.search_icon} className=" sm:w-5  w-3 cursor-pointer" alt="" />
      <div className="group relative">
        
        <img src={assets.profile_icon} className=" sm:w-5  w-3 cursor-pointer" alt="" />
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black ">My profile </p>
            <p className="cursor-pointer hover:text-black ">orders</p>
            <p className="cursor-pointer hover:text-black ">logout</p>
          </div>
        </div>
      </div>
      <Link to="/cart" className="relative">
      <img src={assets.cart_icon}  className="sm:w-6  w-4  cursor-pointer" alt="" />
      <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 rounded-full text-[8px] aspect-square bg-black text-amber-50 ">10</p>
      </Link>
      <img src={assets.menu_icon} className="sm:hidden w-5 cursor-pointer" onClick={()=>{setvisible(!visible)}} alt="" />
    </div> 

<div className={`show absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${visible ? 'w-full' : 'w-0'}`}>

  <div className="close flex flex-col text-grey-600 ">
    <div onClick={()=>{setvisible(false)}}className="flex items-center gap-4 p-3 cursor-pointer">
      <img src={assets.dropdown_icon} className="h-4 rotate-180 " alt="" />
      <p>Back</p>
    </div>
    <NavLink onClick={(setvisible)=>{setvisible(false)}}  to="/" className="flex items-center gap-4 p-3 cursor-pointer">
      <p>Home</p>
    </NavLink>
    <NavLink onClick={(setvisible)=>{setvisible(false)}}  to="/about" className="flex items-center gap-4 p-3 cursor-pointer">
      <p>About</p>
    </NavLink>
    <NavLink onClick={(setvisible)=>{setvisible(false)}} to="/collection" className="flex items-center gap-4 p-3 cursor-pointer">
      <p>Collection</p>
    </NavLink>
    <NavLink onClick={(setvisible)=>{setvisible(false)}} to="/contact" className="flex items-center gap-4 p-3 cursor-pointer">
      <p>Contact</p>
    </NavLink>
  </div>
</div>


    </div>
  );
};

export default Navbar;
