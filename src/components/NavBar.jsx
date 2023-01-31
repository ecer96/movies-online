import React from "react";
import { TiVideoOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="py-4 flex justify-between items-center bg-darkblue xsm:block">
            
            <NavLink className="navbar-brand text-white flex items-center" to="/">
            <TiVideoOutline className="mx-2 flex align-middle w-9 h-10"/>
               <span className="text-2xl"> MoviesOnline</span>
            </NavLink>

        
            <div className="">
            <NavLink to="/" className="text-white text-xl   no-underline xsm:p-1 sm:p-4">Home</NavLink>
               <NavLink to="/search" className="text-white text-xl   no-underline xsm:p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-4" >Search</NavLink>
               <NavLink to="/about" className="text-white text-xl    no-underline xsm:p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-4"  >About</NavLink>
               <NavLink to="/contact" className="text-white text-xl   no-underline xsm:p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-4" >Contact</NavLink>
            </div>
               
            
        </nav>
    );
};
