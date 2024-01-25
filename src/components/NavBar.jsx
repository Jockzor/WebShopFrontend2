import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const NavBar = () => {
    return(
        <div className='header-desktop'>
            <div className='left'>
                <a href="">Logo</a>
            </div>
            <div className='mainMenu'>
                <div className='menuItem'>                    
                    <a href="">Shop</a>
                </div>
                <div className='menuItem'>
                    <a href="">Bästsäljare</a>
                </div>
                <div className='menuItem'>
                    <a href="">Nyheter</a>
                </div>
                <div className='menuItem'>
                    <a id='sale' href="">Rea</a>
                </div>
            </div>
            <div className='right'>
                <a className='icon' href="">
                    <CgProfile />
                </a>
                <div className='icon'>
                    <IoSearch />
                </div>
                <a className='icon' href="">
                    <FaRegHeart />
                </a>
                <div className='icon' id='shoppingBasket'>
                    <FaBasketShopping />
                </div>
                <div className='icon' id='quantity'>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;