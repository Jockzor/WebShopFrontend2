import React from 'react'
import "/src/components/Footer/Footer.css"
import { Outlet, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {

    return(
        <>
            <div className ='footerBox'>
                <div className='top'>
                    <div className='item'>
                        <h3>Länkar</h3>
                        <Link className ="links" to="/about">Om Oss</Link>
                        <span>Leverans</span>
                        <span>Köpvillkor</span>
                        <span>Byten och Returer</span>
                    </div>
                    <div className='item'>
                        <h3>Följ Oss</h3>
                        <FaFacebook id='facebook'/>
                        <FaInstagramSquare id='instagram'/>
                    </div>
                </div>
            <div className='bottom'>
                <p>&copy; 2024 Myrorna 2.0. All rights reserved.</p>
            </div>    
                 
            </div>

          <Outlet />
      </>
    )
}

export default Footer;