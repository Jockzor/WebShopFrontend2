import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const NavBar = () => {
    return(
        <>
        <div className='header-desktop'>
          <div className='left'>
            <Link to="/">Myrorna 2.0</Link>
          </div>
          <div className='mainMenu'>
            <div className='menuItem'>
              <Link to="shop">Shop</Link>
            </div>
            <div className='menuItem'>
              <Link to="/bestsellers">Bästsäljare</Link>
            </div>
            <div className='menuItem'>
              <Link to="/about">Om Oss</Link>
            </div>
            <div className='menuItem'>
              <Link to="/sale" id='sale'>Rea</Link>
            </div>
          </div>
          <div className='right'>
            <Link className='icon' to="/profile">
              <CgProfile />
            </Link>
            <div className='icon'>
              <IoSearch />
            </div>
            <Link className='icon' to="/wishlist">
              <FaRegHeart />
            </Link>
            <div className='icon' id='shoppingBasket'>
              <FaBasketShopping />
            </div>
            <div className='icon' id='quantity'>
              <span>0</span>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    )
}

export default NavBar;