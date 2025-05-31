import React from 'react'
import './Section2.css'
import { Link } from 'react-router-dom'
const Section2 = () => {
    return (
        <>
            <div className="background-img">
                <div className="content-1"  data-aos="fade-down">
                    Best food for your test
                </div>
                <div className="mini-content-1" data-aos="zoom-in">
                    Discover delectable cuisine and unforgetable moments in our welcoming, culinary heaven
                </div>
                <div className="buttons-1">
                    <Link to='/book'><button data-aos="fade-right">Book A Table</button></Link> 
                   <Link to='/menu'><button  data-aos="fade-left" className='custom' >Explore Menu</button></Link>  
                </div>
            </div>
        </>
    )
}

export default Section2