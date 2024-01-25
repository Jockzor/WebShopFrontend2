import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Footer = () => {

    return(
        <>
            <div className ='footerBox'>
                 <p>&copy; 2024 Myrorna 2.0. All rights reserved.</p>
            </div>

          <Outlet />
      </>
    )
}

export default Footer;