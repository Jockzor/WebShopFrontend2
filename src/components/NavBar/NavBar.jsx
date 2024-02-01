import React from 'react';
import "/src/components/NavBar/NavBar.css"
import { Outlet, Link } from "react-router-dom";
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
              <Link to="/jackets">Jackor</Link>
            </div>
            <div className='menuItem'>
              <Link to="/hoodies">Hoodies</Link>
            </div>
            <div className='menuItem'>
              <Link to="/tshirts">T-Shirts</Link>
            </div>
          </div>
          <div className='Cart'>
            <Link className='icon' id='shoppingBasket' to='/cart'>
              <FaBasketShopping />
            </Link>
            </div>
            <div className='icon' id='quantity'>
              <span>0</span>
            </div>
          </div>
        <Outlet />
      </>
    )
}

export default NavBar;