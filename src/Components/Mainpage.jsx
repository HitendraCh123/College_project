import React from "react";
import './Mainpage.css'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo1 from './japanese-food.png'
import logo2 from './Cuisine.png'
function Mainpage(){
    return(
        <>
         <div className="header">
                <div className="logo">
                    <img src={logo1} className="logo-1" />
                     <img src={logo2} className="logo-2" />
                </div>
                <nav>
                    <ul>
                       <NavLink className={(e)=>{return e.isActive?"brown": ""}} to='/'><li className="active">Home</li></NavLink> 
                       <NavLink className={(e)=>{return e.isActive?"brown": ""}} to='/about'><li>About</li></NavLink> 
                       <NavLink className={(e)=>{return e.isActive?"brown": ""}} to='/menu'><li>menu</li></NavLink>
                       <NavLink className={(e)=>{return e.isActive?"brown": ""}} to='/contact'><li>Contact</li></NavLink> 
                    </ul>
                </nav>
                <Link to='/book'><div className="book-table-header">Book A Table</div></Link> 
            </div>
        </>
    )
}export default Mainpage