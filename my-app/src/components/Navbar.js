import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'
import logo from '../images/chartandgo-logo-2.png' // Charter and Go logo
import ucm from '../images/logo-300-px-c.png' // UCM logo

/*
    CS 4920 Senior Project - Spring 2022
    Charter and Go Project - Flight Risk Assessment Tool
    Instructor: Taeghyun Kang
    Team: LAW.DAT
        Tyler Anderson
        De-Shian Lin
        Jacob Nicholson
        Aaron Westhoff

    Page Description:
    This file displays the NavBa at the top of the form page.
*/

const Navbar= () =>{

    return (
        
        <div className='navbar' id='navbar'>
        {/* id for the shadow control (since detail page show different color of shadow) */}

            {/* logo x logo */}
            <Link to="/view" className='logo'>
            <img src={logo} width="200px" alt="chartandgo-logo"/>
            <span><b>&nbsp;×&nbsp;</b></span>
            <img src={ucm} width="100px" alt="ucm-logo"/>
            </Link>

            {/* project name */}
            
            <span className='project-name'>
                <Link to="/view" className='logo'><b>CS 4920 Senior Project</b> Spring 2022<br/></Link>
                <Link to="/view" className='logo'><b>Flight Risk Assessment Tool</b><br/></Link>
                <Link to="/view" className='logo'><b>LAW.DAT</b></Link>
            </span>
            
            
            {/* buttons */}
            <Link to="/" className='nav-button'>＋ NEW FORM</Link>
            <Link to="/view" className='nav-button'>VIEW / EDIT</Link>

        </div>

    ) // end return

} // end Navbar

export default Navbar