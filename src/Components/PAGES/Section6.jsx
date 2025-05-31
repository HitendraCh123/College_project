import React from 'react'
import './Section6.css'
import manimg from './foodman.png'
import dishimg from './dish.png'
import dishimg2 from './dish2.png'
import time from './time.png'
import offer from './offer.png'
import shop from './shoping.png'
const Section6 = () => {
    return (
        <div>
            <div className="container6"  data-aos="zoom-in">
                <div className="child-container1">
                    <div className="img-section">
                        <img src={manimg} alt="" />
                    </div>
                    <div className="child-container-mini">
                        <img src={dishimg} alt="" />
                        <img src={dishimg2} className='dish2' />
                    </div>

                </div>
                <div className="child-container2">
                    <div className="child-container2-heading">
                        Fastest Food Delivery in City
                    </div>
                    <div className="child-container2-paragraph">
                        Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.
                    </div>
                    <div className="delivery-content">
                        <img src={time} alt="" />
                        Delivery within 30 minutes
                    </div>
                    <div className="delivery-content-2">
                        <img src={offer} />
                        Best Offer & Prices
                    </div>
                    <div className="delivery-content-3">
                        <img src={shop} alt="" />
                        Online Services  Available
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6