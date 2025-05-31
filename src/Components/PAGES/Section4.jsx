import React from "react";
import './Section4.css';
import { Link } from "react-router-dom";
function Section4(){
    return(
        <>
           <div className="container-3"  data-aos="zoom-in">
                  <div className="left-container">
                             <div className="visit-form">
                                  <h3>Come to visit us</h3>
                                   <div className="contect-detail">+91721-722-5004</div>
                                   <div className="contect-detail">adarsh721722@gmail.com</div>
                                   <div className="contect-detail-last">98 W, Near , Rajdarbar, DM Road , Devipura-2nd</div>

                             </div>

                  </div>
                  <div className="right-container">
                        <div className="main-heading">
                            We provide healthy food for your family.
                        </div>
                        <div className="main-para">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</div>
                        <div className="child-main-para">
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                        </div>
                       <Link to='/about'><button className="more-about">More About Us</button></Link> 
                  </div>
           </div>
        </>
    )
}export default Section4
